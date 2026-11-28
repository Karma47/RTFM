---
title: "Phase 4 Walkthrough"
layout: "nnb-content-fragment"
url: "/labs/null-national-bank/content/walkthroughs/phase-04.html"
build:
  list: never
sitemap:
  disable: true
---

# Operation CinderLink, Part 4: Investigation Walkthrough

Part 4 follows the earlier identity and lateral-movement activity into privileged-access misuse, remote tooling, Kerberos ticket reuse, persistence, defense evasion, and data staging. The collection starts **2025-06-08 14:00Z** and continues for three days; some activity overlaps part 3. Correlate boundaries and preserve the difference between directly observed records and the scenario's summaries.

## Step-by-step investigation

### 1. Scope the VPN spray and verify the successful session

**Inspect:** `data/VPN01.nbk.local/ecar.json`, `syslog.log`, Zeek, and ASA records.

The timeline reports **42 attempts against 9 accounts**, with `kavitha.reddy` succeeding on attempt 42 after 41 failures. Part 4's source table includes filtered ASA events and out-of-window rows because the spray spans scenario boundaries. Group VPN logons by source, target account, timestamp, outcome, and session ID; compare the success with the user's baseline and follow its next internal connections.

Do not mark all nine accounts compromised. Separate failed targets from the account with the successful authentication, and correlate the latter with downstream host activity before determining scope.

### 2. Continue the WMI/WinRM execution chain

**Inspect:** `data/MN-APP01.nbk.local/ecar.json`, Sysmon, Windows Security, and `syslog.log`; pivot to peer systems.

At **2025-06-09 20:00:18Z**, `arjun.menon` is associated with a `cmd.exe` process (PID `13072`) on MN-APP01. The command begins:
```text
cmd.exe /c wmic /node:MN-APP01 process call create ...
```
Correlate the process tree, remote-management host process (`WsmProvHost.exe`), source workstation `10.10.10.102`, and network logon ID `0x6d582f9`. Identify the exact remote target and process created from complete EDR/Sysmon records; the summary truncates the command line. WMI/WinRM are legitimate admin tools, so validate the account, source host, target, and change authorization rather than flagging the binary alone.

### 3. Reconstruct the PAM credential path

**Inspect:** `data/MN-PAM01.nbk.local/windows_event_security.xml`, `ecar.json`, and `syslog.log`; review admin endpoint MN-WS-103 as well.

At **02:00:16Z on June 10**, the ground truth describes a failed direct probe of the PAM vault. The following syslog record says the actor harvested a cached checkout credential for an MN-FS01 admin session from `MN-WS-103`.

Separate the failed vault authentication from the reported credential theft. Correlate the PAM failure with the checked-out credential record, endpoint access to the cached item, user/session identity, and later use of that credential on FS01. A failed vault probe does not itself prove a credential was stolen; the cached-checkout evidence and subsequent authentication establish the proposed path.

### 4. Trace ADMIN$ staging and execution of nvdutil

**Inspect:** `data/MN-FS01.nbk.local/ecar.json`, `windows_event_sysmon.xml`, `windows_event_security.xml`, and `syslog.log`.

At **06:00Z on June 10**, look for the file-write summary naming:
```text
\\MN-APP01\ADMIN$\Temp\nvdutil.exe
```
At **06:00:12Z**, Sysmon Event ID 1 and Windows Security Event ID 4688 on FS01 record the binary executing as PID `14256`, user `external-threat-actor`, logon ID `0x781a563`, with command line `nvdutil.exe --mode stealth --persist`. Sysmon Event ID 11 follows with a file-create event. Compare this with EDR's module-load records, parent process, source address, and SMB/admin-share logons.

This is stronger than a filename IOC: the UNC path, administrative share, process execution, identity, and `--mode stealth --persist` command line are correlated. Capture the binary and hash before containment; the telemetry indicates no file hash in the Sysmon record. The summary mentions execution on two servers, so confirm the second host independently rather than inferring it from FS01.

### 5. Validate the Kerberos pass-the-ticket hop chain

**Inspect:** `data/MN-FS01.nbk.local/windows_event_security.xml`, EDR, Zeek, and corresponding `MN-SIEM01` records.

At **09:59:44Z on June 10**, correlate the FS01 network logon for `sqlsvc` from `10.10.10.102` (logon ID `0x79f8dc7`) with the event sequence over the next eight minutes. The ground truth describes a pass-the-ticket hop that includes the SIEM server; a later SIEM01 logon is recorded at **10:08:28Z**.

Compare ticket/logon identifiers, user and service principals, source/destination hosts, Kerberos activity, and session timing on both systems. Do not infer ticket reuse from the username or successful network logons alone; use the ticket-reuse indicators and log correlation. Since SIEM itself is in the chain, preserve its logs and verify whether its timestamps or telemetry were altered.

### 6. Inspect scheduled-task persistence

**Inspect:** `data/MN-APP01.nbk.local/windows_event_security.xml` and task XML/endpoint telemetry; search FS01 as well.

At **13:59:56Z on June 10**, Windows Security Event ID 4698 records task `NV-HealthCheck` created by `external-threat-actor`. Its action contains an encoded PowerShell command, targets MN-APP01 and MN-FS01, and is configured for a weekly Sunday 03:10 IST trigger.

Compare task author, action, trigger, enabled state, creation time, and execution history with the organization's approved maintenance tasks. Decode or inspect payloads only using approved offline procedures; do not execute them. The task's benign-sounding name does not make the action trustworthy. Search for corresponding task creation and execution on both named systems.

### 7. Keep the CI cryptominer separate from the main chain

**Inspect:** `data/CI-RUNNER.nbk.local/ecar.json`, shell history, and syslog.

At **18:00:10Z on June 10**, `xmr-stak --pool randomx-asia` runs from `/opt/runner/xmr-stak` under `unknown-internet-actor`; the syslog summary notes a CPU-baseline break. This supports unauthorized or unapproved mining on the CI runner. Its host and purpose differ from the Windows lateral-movement and data-staging chain. Treat it as a separate concurrent activity unless evidence links credentials, infrastructure, or process lineage.

### 8. Identify telemetry tampering attempts

**Inspect:** `data/MN-DC01.nbk.local/syslog.log`.

At **00:00:26Z and 00:00:58Z on June 11**, records say a Sysmon configuration change on MN-WS-109 and MN-WS-111 was blocked by tamper protection, and MN-DC01 DNS debug retention changed from 14 days to 4 days. Verify the change audit and remaining log coverage. The records support attempted defense evasion and shortened retention, not complete log deletion or successful Sysmon disablement.

### 9. Confirm the file-staging command and assess data access

**Inspect:** `data/MN-FS01.nbk.local/windows_event_sysmon.xml`, Windows Security, EDR, and file-access auditing.

At **03:59:44Z on June 11**, inspect the PowerShell process (PID `18968`) and correlate it with Event ID 4688 and EDR using logon ID `0x781a563`. The command line requests:
```text
7z.exe a -v512m -p 'C:\Windows\Temp\q3close.7z' '\\MN-FS01\Finance\*' '\\MN-FS01\BoardPapers\*'
```
The following EDR event records a temporary-file write; syslog reports mass Event ID 4663 reads under `Finance\QuarterClose`. The command, file-read volume, identity, and close timing are consistent with preparing sensitive data for transfer. Determine which files were successfully read and whether archive volumes were created; a command invocation and temporary file do not prove archive completion or exfiltration.

## Assessment and gaps

Part 4 adds several independently actionable pivots: successful VPN authentication, remote execution, cached PAM credential access, administrative-share tooling, Kerberos activity touching the SIEM, scheduled-task persistence, and mass Finance reads/archive preparation. Correlate each across identity, process, file, and network records. Treat the miner as a separate activity and the filtered/out-of-window events as evidence limitations. Before concluding the incident is contained, validate the PAM checkout path, the exact remote targets, SIEM ticket/log integrity, scheduled-task execution, and whether staged archives left the environment.