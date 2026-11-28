---
title: "Phase 3 Walkthrough"
layout: "nnb-content-fragment"
url: "/labs/null-national-bank/content/walkthroughs/phase-03.html"
build:
  list: never
sitemap:
  disable: true
---
# Operation CinderLink, Part 3: Investigation Walkthrough

Part 3 follows identity compromise into credential access, directory abuse, cloud application consent, VPN access, and remote execution. The collection covers **2025-06-07 00:00Z through 2025-06-10 00:00Z** with intentional overlap at the boundaries. Treat each storyline as a hypothesis and distinguish successful actions from attempts and summary-only evidence.

## Step-by-step investigation

### 1. Normalize timestamps and establish account context

Convert EDR epoch values, Windows event times, syslog, and Zeek timestamps to UTC. Preserve host, account, source IP, logon ID, process ID/GUID, and event type. Some records overlap part 2; correlate them rather than counting a boundary event as a new intrusion. Filtered or out-of-window records are visibility gaps, not benign findings.

### 2. Revisit the Finance share access

**Inspect:** `data/MN-FS01.nbk.local/ecar.json`, Windows Security events, and `syslog.log`.

At **2025-06-06 23:59:44Z**, `arjun.menon` logs on to MN-FS01 from `10.10.10.102` (logon ID `0x655975d`). The next syslog record describes human-paced directory listings of Finance, BoardPapers, and IT shares. Use share-access and file audit events to determine whether the activity stayed at directory enumeration or progressed to file reads. The ground-truth source status marks the underlying share-mapping events out of window in this part, so use the overlap with part 2 rather than treating that status as a clean bill of health.

### 3. Verify the account-reset trail, then inspect MFA approval activity

**Inspect:** `data/MN-DC01.nbk.local/syslog.log` and Windows Security authentication records.

The helpdesk records continue the part 2 reset/MFA re-registration event for `vikram.patel` under ticket `HD-2025-11884`. Correlate Event ID 4724, `svc-helpdesk`, ticket audit, and the account's next sign-ins.

At **2025-06-07 20:43:49Z**, a separate syslog record for `rajesh.kumar` reports 31 denied pushes followed by approval on attempt 32 at **02:14 IST**. Normalize IST (UTC+05:30) before comparing the approval with sign-in logs. Confirm the source IP, device, authentication method, and whether the approval led to a new session. A push approval is a strong compromise lead but should be tied to the resulting token/session.

### 4. Investigate credential access on MN-WS-101

**Inspect:** `data/MN-WS-101.nbk.local/ecar.json`, `windows_event_sysmon.xml`, `windows_event_security.xml`, and `syslog.log`.

At **22:00:22Z on June 7**, find `winsdkdiag.exe -ma` under `C:\Users\rajesh.kumar\AppData\Local\Temp` (PID `6664`). Correlate its parent, signature/hash, interactive or remote session, and adjacent EDR process-access events. The syslog summary says the binary is unsigned; source-status counts show multiple EDR/Sysmon records and Windows Security events for the `lsass-dump` storyline.

The executable name is not decisive: a renamed dual-use binary can look legitimate. The combination of an unusual temp-path process, dump-style argument, unsigned status, remote-session context, and access to LSASS is what raises the finding. Preserve process/memory evidence and follow credential-exposure response procedures; do not treat the name alone as proof of a successful credential dump.

### 5. Validate Kerberos service-ticket requests

**Inspect:** `data/MN-WS-102.nbk.local/syslog.log`, EDR, Windows Security, and Zeek records.

At **01:59:52Z on June 8**, the syslog record reports RC4 (`0x17`) service-ticket requests for `erp-svc`, `sqlsvc`, and `backup-svc`, sourced from `10.10.10.102`, with ticket-size outliers. Correlate the account, host, request times, encryption type, SPNs, and ticket volume with normal Kerberos use.

This supports suspected Kerberoasting activity and follows the LDAP SPN enumeration in part 2. It establishes requests, not that any service-account password was cracked or used. The next steps are to review the affected service accounts and subsequent authentication, not to infer compromise solely from the ticket requests.

### 6. Prioritize the directory-replication activity

**Inspect:** `data/MN-WS-102.nbk.local/syslog.log`, domain-controller events, endpoint telemetry, and network records.

At **05:59:48Z on June 8**, the DCSync summary reports `GetChanges` and `GetChangesAll` operations against `MN-DC01`, source `10.10.10.102`, with `krbtgt` among the replicated accounts. This is the strongest single hunt lead in the part.

Correlate the caller identity and privileges with domain-controller directory-service auditing and endpoint session records. Confirm whether the account was authorized for replication. Treat the source summary as a high-confidence lead, then verify the exact DC events and scope before stating which secrets were exposed.

### 7. Examine the OAuth application and consent

**Inspect:** `data/MN-DC01.nbk.local/syslog.log` and available identity/audit records.

At **10:00:27Z on June 8**, the record identifies a multi-tenant app named `NVSync Tools`, consented to by admin `rajesh.kumar` from `198.51.100.76`, with `Mail.Read` and `Files.Read.All` permissions. Verify app/client ID, publisher, tenant setting, consent actor/session, grant time, and subsequent token use. The name is not enough to classify it; the unapproved registration and broad delegated/application permissions are the important pivots.

If corroborated, preserve the app and audit evidence, identify affected users/resources, and revoke consent/tokens using the organization's incident procedure. Do not assume revocation alone removes persistence from other mechanisms.

### 8. Correlate the token-replay sign-in

**Inspect:** `data/MN-DC01.nbk.local/windows_event_security.xml`, EDR, and identity sign-in records.

At **10:39:40Z on June 8**, the ground truth records a `vikram.patel` network logon from `86.54.12.9` (logon ID `0xa35f4f5`). The following summary describes token authentication, a Rotterdam location 40 minutes after a Chennai session, and no matching interactive logon.

Compare session/token identifiers, authentication method, device, IP/geo context, and the actual preceding session. Geography is an indicator, not proof on its own; impossible-travel logic is strongest when tied to token/session evidence and no plausible VPN or travel explanation.

### 9. Measure the slow VPN spray and its success

**Inspect:** `data/VPN01.nbk.local/ecar.json`, `syslog.log`, `data/mn-siem01/conn.json`, and available ASA records.

Review the multi-day sequence rather than looking for a single burst. The scenario summarizes **42 attempts against 9 accounts**, with `kavitha.reddy` succeeding on attempt 42 after 41 failures. The source-status table shows 124 visible EDR rows, 123 syslog rows, 41 Zeek rows, and filtered ASA rows; differences in counts may reflect collection and event types.

Group attempts by source, account, time, outcome, and session. Verify the successful VPN session and correlate it with subsequent internal activity. Do not mark every targeted account compromised merely because it was sprayed; distinguish targets, failed attempts, and the confirmed success.

### 10. Follow WMI/WinRM from the workstation to servers

**Inspect:** `data/MN-APP01.nbk.local/ecar.json`, Sysmon, Windows Security, and `syslog.log`; compare other peer hosts.

At **2025-06-09 20:00:21Z**, inspect the `cmd.exe`/WMIC process chain on `MN-APP01`. The command summary indicates remote process creation; the syslog record identifies `WsmProvHost.exe` as the parent-process context. Correlate source workstation `10.10.10.102`, account `arjun.menon`, the network logon ID `0x7f26a38`, and each remote host reached.

WMI and WinRM are legitimate administration mechanisms. The combination of an unusual initiating account/source, process creation through the remote-management host, and spread to peers makes this chain suspicious. Determine exactly which commands ran and on which systems; a single APP01 record does not establish execution on every peer.

## Assessment and gaps

The sequence suggests identity compromise and lateral movement: helpdesk reset and MFA approval → credential access → service-ticket and directory-replication activity → suspicious OAuth consent and token use → VPN success → remote execution. Highest-priority validation is the DCSync/DC audit trail, LSASS access and credential exposure, OAuth grant/token records, and successful VPN session. Label each account as targeted, authenticated, or confirmed compromised only when the corresponding evidence supports that status.