---
title: "Phase 5 Walkthrough"
layout: "nnb-content-fragment"
url: "/labs/null-national-bank/content/walkthroughs/phase-05.html"
build:
  list: never
sitemap:
  disable: true
---

# Operation CinderLink, Part 5: Investigation Walkthrough

The final part examines late-stage data staging, web activity, persistence, and possible cleanup. The collection covers **2025-06-10 18:00:00Z through 2025-06-13 18:00:00Z**, with overlap at the boundaries between parts. Treat the ground-truth storyline as a hypothesis, and confirm each claim against the underlying records before taking action.

## Step-by-step investigation

### 1. Establish scope and build a common timeline

The ground truth includes 15 canonical event rows representing 10 storyline steps. The source files contain more records than that summary.

1. Keep timestamps in UTC and convert epoch-based records before comparing them with XML event timestamps or syslog.

2. Record the source file, timestamp, host, user/principal, process ID, logon ID, and network/session identifier for every candidate event.

3. Search a small interval before and after each event. This part intentionally overlaps adjacent scenario parts at the boundaries.

4. Treat `visible`, `filtered`, and other collection statuses carefully. An event that was filtered or absent from one sensor is not evidence that the activity did not happen.

This prevents clock-format differences from splitting related events and helps distinguish a source fact from a later inference.

### 2. Triage the conspicuous cryptominer without letting it dominate

**Start with:** `data/CI-RUNNER.nbk.local/ecar.json` and `data/CI-RUNNER.nbk.local/bash_history/unknown-internet-actor.bash_history`.

1. Find the process-create record at **2025-06-10 18:00:20Z** on `CI-RUNNER`.

2. Note the image `/opt/runner/xmr-stak`, command line `xmr-stak --pool randomx-asia`, principal `unknown-internet-actor`, and its parent process.

3. Compare it with the shell history, which contains the same command; check nearby EDR file and terminate records as well.

4. Assess it as likely unauthorized or unapproved cryptomining on the runner.

The miner is conspicuous, but its host and purpose are distinct from the finance-file staging and workstation network activity below. Keep it as a separate concurrent incident or decoy unless shared credentials, infrastructure, or process lineage tie it to the primary intrusion. Do not let the obvious miner distract from quieter activity on other hosts.

### 3. Identify attempted telemetry weakening

**Start with:** `data/MN-DC01.nbk.local/syslog.log`.

Read both records tagged `log-tampering-attempts` and verify their timestamps and outcomes:

- At **23:59:41Z on June 10**, tamper protection blocked a Sysmon configuration change targeting `MN-WS-109` and `MN-WS-111`.

- At **23:59:51Z**, a separate record says DNS debug-log retention on `MN-DC01` changed from **14 days to 4 days**.

The first record is an attempted configuration change that was blocked; the second reports a reduction in log-retention time. Together they are consistent with an effort to limit visibility. They do **not** establish that Sysmon was disabled or that all DNS evidence was erased. Verify the current setting, configuration-change audit trail, and any remaining DNS records, and preserve the available logs.

### 4. Recognize sensitive-data staging on MN-FS01

**Start with:**

- `data/MN-FS01.nbk.local/windows_event_sysmon.xml`

- `data/MN-FS01.nbk.local/windows_event_security.xml`

- `data/MN-FS01.nbk.local/ecar.json`

At **2025-06-11 03:59:57Z**, compare Sysmon Event ID 1 with Windows Security Event ID 4688. Correlate the command line, PID, user, parent image, and logon ID. Both process records associate the following command line with PID `8684`, principal `external-threat-actor`, and logon ID `0x6a09ea1`:
```text
7z.exe a -v512m -p 'C:\Windows\Temp\q3close.7z' '\\MN-FS01\Finance\*' '\\MN-FS01\BoardPapers\*'
```
The command requests 512 MB archive volumes (`-v512m`) and password protection (`-p`), with Finance and BoardPapers shares as inputs. EDR records a subsequent temporary-file creation. The agreement between endpoint sources and the sensitive input paths makes this strong evidence of attempted data staging.

Do not overstate what it proves: the temporary file is not proof that every source file was read or that the final archive completed. Check file-access auditing, archive artifacts and volume sizes, and the same logon session before estimating the amount of data prepared.

### 5. Investigate the independent web foothold

**Start with:** `data/MN-WEB01.nbk.local/syslog.log`; pivot to IIS and endpoint records if available.

The **2025-06-11 08:00:01Z** record identifies `/portal/uploads/resource_util.aspx` as a webshell and describes POST-heavy URIs with a low-and-slow cadence.

1. Search IIS access logs for this path and identify the request source, methods, status codes, and timing.

2. Check upload and file-integrity records to confirm whether the file existed and when it appeared.

3. Correlate suspicious requests with web-worker process creation and child processes.

4. Inspect the file safely through your established incident-response process; do not infer its contents from the summary record.

An executable-looking file under an upload path combined with unusual POST behavior is a meaningful foothold lead, separate from the file-server activity. The syslog entry is an indicator summary, not the underlying request or payload. Confirm file presence and execution before claiming what commands were run.

### 6. Correlate workstation egress with the staged data

**Start with:**

- `data/MN-WS-102.nbk.local/ecar.json`

- `data/MN-WS-102.nbk.local/windows_event_sysmon.xml`

- `data/mn-siem01/conn.json`

- `data/mn-siem01/dns.json`

- `data/mn-siem01/http.json`

On `MN-WS-102`, find the browser process create at about **2025-06-11 17:56:55Z** (PID `9796`). Its command line opens `https://198.51.100.140/` under `external-threat-actor`. Follow that PID and account into EDR `FLOW` records. One record shows outbound TCP from `10.10.10.102:50151` to `198.51.100.140:443`.

Join the endpoint flow to the Zeek connection using UID `CkIF9KbHIHQCX5I0hB`. That Zeek record reports approximately **48.6 MB originating bytes**, **2.1 MB responding bytes**, and a **20-second duration**. This links a process and user on the workstation to substantial outbound traffic. Combined with the earlier archive preparation, it supports suspected exfiltration more strongly than an IP-only alert.

Keep the limitations explicit:

- One Zeek UID does not establish a 12-hour cadence or identify the transferred file contents. Review repeated flows, proxy/TLS telemetry, file-access records, and the broader time interval.

- The storyline names `cdn.nullnationalbank.com`, but this connection row establishes an IP destination, not a DNS resolution. Verify the domain separately in DNS or proxy records before calling it independently confirmed.

- Some source rows are marked `filtered`. Those rows are unavailable evidence, not proof of no traffic.

### 7. Keep the payment-script change in its recorded environment

**Start with:** `data/MN-WEB01.nbk.local/syslog.log`.

At **2025-06-12 00:00:01Z**, the `portal-skimmer-test` record reports an integrity-hash change to `/var/www/staging/portal/pay/js/vendor-checkout.js` and references `metricssvc.nullnationalbank-cdn.net`.

Review the file diff, deployment history, and environment inventory. Because the recorded path is in **staging**, this record alone does not establish that a payment skimmer reached production or affected customers. Confirm deployment and production telemetry before making either claim.

### 8. Check persistence on every affected host

**Start with:**

- `data/MN-APP01.nbk.local/windows_event_security.xml`

- `data/MN-FS01.nbk.local/windows_event_security.xml`

- `data/MN-APP01.nbk.local/ecar.json`

Compare Windows Security Event ID 4698 task-creation records:

- `MN-APP01`: **2025-06-12 08:00:11Z**

- `MN-FS01`: **2025-06-13 00:00:17Z**

Both register a task named `NV-HealthCheck` under `external-threat-actor`, but their action content differs. The APP01 action mentions a “quarterly re-arm of dormant plug-in config”; the FS01 action contains `disabled-but-not-deleted`.

Compare each task’s author, trigger, action XML, enabled state, and execution history. Search all hosts for the task name and for other persistence mechanisms; do not assume matching task names mean identical tasks. This slice directly shows task evidence on APP01 and FS01, but does not itself enumerate four independent persistence channels. Check adjacent scenario parts and other autorun locations before concluding eradication is complete.

### 9. Validate the late service-account logon and apparent cleanup

**Start with:**

- `data/MN-DB01.nbk.local/windows_event_security.xml`

- `data/MN-DB01.nbk.local/ecar.json`

- `data/MN-DC01.nbk.local/windows_event_security.xml`

- nearby `cosmetic-exit` records in the host syslog files

At **2025-06-12 23:59:56Z**, MN-DB01 Security Event ID 4624 records a successful type 3 network logon for `sqlsvc` from `139.162.174.124`, using NTLM. Correlate logon ID `0x9090b4b` with the EDR record; the DC credential-validation record also reports success.

This cross-source join makes the logon suspicious in context, but a service-account name and source address alone do not prove compromise. Compare the source and authentication pattern with normal service-account use. The nearby “cosmetic exit” entries are summary markers; independently verify file restoration and C2 changes. The FS01 task registered seconds after midnight is specific evidence that apparent cleanup does not establish eradication.

### 10. Separate evidence, inference, and unresolved questions

| Assessment | Evidence basis | What remains to verify |
|---|---|---|
| Cryptomining on CI-RUNNER | EDR process and matching shell-history command | Whether it is related to the primary intrusion |
| Attempted telemetry weakening | Blocked Sysmon change and reported DNS-retention reduction | Full configuration and audit history |
| Sensitive-data staging | Correlated process records, archive command, and subsequent temporary-file event | File reads, archive completion, and total data |
| Web foothold | Syslog indicator naming upload path and request pattern | Actual file, requests, execution, and commands |
| Suspected exfiltration | Browser process, endpoint flow, Zeek UID, and transfer volume | Content, repeated-flow cadence, DNS/domain attribution |
| Staging payment-script modification | Integrity-change record for a staging file | Production deployment and customer impact |
| Persistence | Task-creation events and different task action content on two hosts | Other claimed channels and cleanup results |
| Suspicious service-account login | Successful logon joined across DB endpoint and DC records | Baseline and whether `sqlsvc` credentials were compromised |

## Assessment and gaps

Build the conclusion from joins among timestamps, host, account, process ID, logon ID, and network/session identifiers. Label each statement as **directly observed**, **corroborated**, **inferred**, or **not yet verified**, and state what evidence would close each gap.

`198.51.100.140` is the destination recorded in this synthetic dataset; it is not independently validated live threat intelligence. Review adjacent CinderLink parts before expanding scope or taking external blocking action.