# Null National Bank Portal: Architecture and Setup

This guide explains how to configure, build, test, and publish the static
challenge portal. It is maintainer documentation and intentionally lives
outside Hugo's `content/` directory, so it is not published as a participant
page.

## Architecture at a glance

```text
Maintainer
  |
  | edits (local, ignored file)
  v
.local/null-national-bank-secrets.json
  |
  | node scripts/generate_nnb_verifiers.mjs
  v
static/labs/null-national-bank/
  verifier-a.json + verifier-b.json
  |
  | Hugo copies static assets into the generated site
  v
Public static site
  |
  | portal.js loads both verifier shards
  v
Participant's browser
  - hashes submitted passwords and flags with Web Crypto SHA-256
  - compares each digest with the reconstructed shard fragments
  - stores completed task indexes in localStorage
  - after 10 valid flags, reconstructs the next challenge or report password
  - fetches Hugo-rendered report and walkthrough Markdown fragments after unlock
```

The portal UI and task prompts are in
[`static/labs/null-national-bank/portal.js`](../static/labs/null-national-bank/portal.js).
The verifier generator is
[`scripts/generate_nnb_verifiers.mjs`](../scripts/generate_nnb_verifiers.mjs).
The challenge pages and navigation are Hugo content under
[`content/docs/05_detection/5.1_labs/NullNationalBank/`](../content/docs/05_detection/5.1_labs/NullNationalBank/).
Write the long-form content directly in Markdown:

- Threat Report: `content/docs/05_detection/5.1_labs/NullNationalBank/threat-report.md`
- Walkthroughs: `content/docs/05_detection/5.1_labs/NullNationalBank/walkthroughs/phase-01.md` through `phase-05.md`

Hugo renders these files with
[`layouts/_default/nnb-content-fragment.html`](../layouts/_default/nnb-content-fragment.html)
as static HTML fragments. The portal fetches each fragment only after the
password check. You can use normal Markdown headings, lists, tables, links,
images, and code blocks; there is no need to encode long content in JSON or
JavaScript. Keep images used by this content under
`static/labs/null-national-bank/content/` and reference them by their public URL.

## Local configuration

The editable plaintext source file is:

```text
.local/null-national-bank-secrets.json
```

It is ignored by Git via the root `.gitignore` and is outside Hugo's published
`content/` and `static/` trees. Keep its file permissions restricted. Do not
copy its values into Markdown, HTML, JavaScript, or any other published asset.

The JSON must contain a top-level `reportPassword` and exactly five challenge
objects, in the same order as the challenge pages. Each challenge object has
one `password` and exactly ten `flags`, one for each task. For example, a
challenge entry has this shape:

```json
{
  "password": "<challenge-password>",
  "flags": [
    "<task-01-flag>",
    "<task-02-flag>",
    "<task-03-flag>",
    "<task-04-flag>",
    "<task-05-flag>",
    "<task-06-flag>",
    "<task-07-flag>",
    "<task-08-flag>",
    "<task-09-flag>",
    "<task-10-flag>"
  ]
}
```

Use the existing local file as the complete five-challenge template. Do not
commit that file or include real account credentials in it.

## Reconfigure passwords or flags

1. Edit `.local/null-national-bank-secrets.json`. Keep five challenges and ten
   flags per challenge. If tasks are added, removed, or reordered, also update
   the corresponding task prompts in `portal.js` so each flag still matches
   its intended task.
2. Regenerate the browser verifier data:

   ```sh
   node scripts/generate_nnb_verifiers.mjs
   ```

   The script validates the challenge and flag counts, calculates SHA-256
   digests, splits each digest between two files, and transforms the challenge
   and report password display bytes. It writes:

   - `static/labs/null-national-bank/verifier-a.json`
   - `static/labs/null-national-bank/verifier-b.json`

3. Build the site:

   ```sh
   hugo
   ```

   Hugo copies the static verifier files into the generated site. Do not
   hand-edit generated files. If the deployment workflow commits `public/`,
   confirm its generated copies are updated too.
4. Test with `hugo server`. Enter the initial challenge password, verify that
   an incorrect flag is rejected, and submit all ten correct flags to check
   completion and the next-password display. Confirm the corresponding
   walkthrough and Threat Report Markdown render after their password checks.
5. Before publishing, inspect `git status --short`. Commit the generated
   verifier assets and any intended site output, but never commit
   `.local/null-national-bank-secrets.json`.

To clear local challenge progress during testing, remove the
`nn_task_completion_v3` item from the browser's local storage for the site.
The portal stores completed task indexes only; it does not store submitted
passwords or flags. The older `nn_task_progress_v2` key, which stored submitted
flags, is removed by the portal when it initializes.

## Runtime behavior

- On page load, `portal.js` fetches both JSON shards and checks their structure.
- When a participant submits a password or flag, the browser hashes the trimmed
  input with `crypto.subtle.digest("SHA-256", ...)` and compares it with the
  reconstructed expected digest.
- A correct flag adds that task's index to `nn_task_completion_v3` in
  `localStorage`; the flag text itself is not saved.
- After all ten task indexes are complete, the portal displays the following
  challenge password and enables the next challenge link. That password also
  unlocks the completed phase's walkthrough. Phase 5 displays the report
  password instead, which unlocks its walkthrough and the Threat Report.
- Once unlocked, the portal fetches the relevant static HTML fragment generated
  from the Markdown source. No report text is stored in browser localStorage.

## Security limitations

This is a static website. Both verifier shards and all client-side validation
logic are delivered to the browser. Splitting hashes, transforming the
password display data, and drawing the revealed password on a canvas only
discourage casual inspection; they do not provide confidentiality or trusted
access control. The rendered report and walkthrough fragments are also public
static files and can be requested directly without using the portal. A visitor
can retrieve the assets, attempt guesses against the hashes, alter local
storage, or modify the client-side validation code.
Use a server-side verifier if the challenge requires enforceable access
control, and never reuse these values as real credentials.

Earlier repository commits were found to contain plaintext challenge values.
The current source and generated site were checked, but this change does not
remove values from Git history. If the repository is public, historical
revisions may still expose those old values. Coordinate any history rewrite
separately, and replace any values that were reused elsewhere.
