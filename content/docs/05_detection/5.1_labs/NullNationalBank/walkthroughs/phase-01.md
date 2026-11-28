---
title: "Phase 1 Walkthrough"
layout: "nnb-content-fragment"
url: "/labs/null-national-bank/content/walkthroughs/phase-01.html"
build:
  list: never
sitemap:
  disable: true
---

# Operation CinderLink, Part 1: Investigation Walkthrough

This part follows a suspected software-supply-chain compromise from the vendor build pipeline to endpoint execution and early command-and-control (C2). Use the ground-truth storyline as a hypothesis; validate each step against source telemetry. The collection covers **2025-06-03 00:00Z through 2025-06-06 00:00Z**, with intentional overlap at scenario boundaries.
## Step-by-step investigation

### 1. Build one UTC timeline

Normalize EDR epoch timestamps, Windows event timestamps, syslog, DNS, and Zeek to UTC. Preserve the source timestamp and sensor name, and join on host, process ID/GUID, principal, logon ID, and network UID where available. Do not treat filtered or missing sensor records as evidence that an action did not occur.

### 2. Start at the vendor build pipeline

**Inspect:** `data/EXTERNAL-VENDOR-CI.nbk.local/ecar.json`, `syslog.log`, and the account's `bash_history`.

At approximately **2025-06-03 00:59:55Z**, locate the build-runner activity for the ERP plug-in release. Compare the process command line, parent, account, and pipeline context with the next syslog record. That record reports a code-signing certificate subject of Northvale Systems and a `signed_hash_change`.

Treat the signing certificate as provenance, not proof of safety: a malicious artifact can still be validly signed. Preserve the build output and compare the affected source revision, build job, artifact hash, and signing history with a known-good release. This is the first point in the chain, so corroboration in downstream package and endpoint records is important.

### 3. Follow the signed update onto endpoints

**Inspect:** `data/MN-APP01.nbk.local/ecar.json`, `windows_event_sysmon.xml`, `windows_event_security.xml`, and `syslog.log`; then compare workstation copies.

At **08:00:05Z on June 3**, identify the `msiexec.exe /i NorthvaleERPSync-4.7.2.msi /qn ALLUSERS=1` process. Correlate its process lineage and logon/session with the syslog file-write record for:
```text
C:\Program Files\Northvale\ERPSync\nvpluginsvc.dll
```
The file-write record reports a signed file and a new hash. Compare that hash with the vendor's trusted release and check for the same package and hash on the approximately 40 workstations described by the scenario. A signed installer or DLL is not independently benign; provenance, hash, and deployment authorization must agree.

### 4. Look for activity during the dormancy gap

**Inspect:** `data/MN-APP01.nbk.local/syslog.log` and endpoint file-audit/EDR records.

At **23:59:52Z on June 3**, the syslog summary flags a read of `telemetry.toml` and records local time as 02:47. Compare this with the install timestamp and the device's timezone; the scenario describes an approximately 16-hour dormant period. A configuration read alone can be normal. It becomes suspicious when it is off-hours and precedes unusual DNS and network behavior by the same plug-in/service identity.

### 5. Identify the lookalike DNS pattern

**Inspect:** `data/MN-APP01.nbk.local/ecar.json`, `windows_event_sysmon.xml`, `windows_event_security.xml`, and `data/mn-siem01/dns.json`.

At around **06:00Z on June 4**, investigate the A-record lookups:

- `4b6e582e7a.update.nullnationalbank.com`

- `c81af931.cdn.nullnationalbank.com`

Compare query timing, subdomain structure, response, and the initiating process/account. The encoded-looking labels and repeated vendor-like parent domains deserve scrutiny, but a single unusual name is not enough to prove C2. Check whether ordinary Northvale clients resolve the same names and whether the same host later makes correlated outbound connections.

### 6. Attribute the first HTTPS beacon

**Inspect:** MN-APP01 EDR flow/process records and `data/mn-siem01/conn.json`, `http.json`, and `dns.json`.

For the **2025-06-04 11:59:45Z** connection to `198.51.100.140:443`, use Zeek UID `CKBQJ4kUvLDoKyG74EN` to join the network record to endpoint flows and the process/user responsible. Compare periodicity, user-agent, TLS fingerprint, DNS history, and the known Northvale updater baseline. The storyline says updater traffic was spoofed; do not conclude that from the user-agent alone.

`198.51.100.140` is an address recorded in this synthetic dataset, not independently validated live threat intelligence. Sensor rows marked filtered are visibility gaps, not proof of no connection.

### 7. Distinguish target-gating from ordinary uninstall activity

**Inspect:** `data/MN-WS-109.nbk.local/ecar.json`, Windows installer and process events, and the corresponding records on bank-joined workstations.

At **16:00Z on June 4**, the ground truth records an `msiexec.exe /x` uninstall on MN-WS-109. Compare package identity and install/uninstall times across hosts, and validate domain membership and the plug-in's target-list behavior. The storyline says off-target systems silently remove the plug-in while bank-joined systems persist. Confirm that contrast across endpoints rather than treating one uninstall as proof of the whole mechanism.

### 8. Trace execution beyond the ERP service

**Inspect:** `data/MN-APP01.nbk.local/ecar.json`, `windows_event_sysmon.xml`, `windows_event_security.xml`, and `syslog.log`.

At **19:59:32Z on June 4**, inspect PID `14804` running:
```text
mshta.exe javascript:eval(unescape('%61%74%6f%62'))
```
Correlate the process with its parent, principal, logon ID, module loads, and the following PowerShell process at PID `14808` with `-NoProfile -EncodedCommand`. The records tie suspicious script-host and PowerShell execution to activity under the ERP service context. Do not decode or execute the payload as part of triage; preserve it and use approved static-analysis procedures. The process chain and timing are more significant than either Windows binary name alone.

### 9. Verify DLL side-loading on a workstation

**Inspect:** `data/MN-WS-102.nbk.local/ecar.json`, `windows_event_sysmon.xml`, and `syslog.log`.

At **22:00:07Z on June 4**, find `NVUtils.dll` under `C:\Program Files\Northvale\Common`. Compare the image/module-load events to the host's signed Northvale executable, file signature, hash, write time, and load path. The syslog summary specifically says the loaded DLL is unsigned. This combination supports side-loading; the DLL name or directory alone does not.

### 10. Follow the C2 infrastructure handoff

**Inspect:** MN-APP01 endpoint flows and `data/mn-siem01/conn.json` / `http.json`.

Join the **June 4 23:59:35Z** connection to `103.21.58.19:443` (UID `CtTujUYQDPoWqrd3Qd`) and the **June 5 21:59:34Z** connection to `185.220.101.44:443` (UID `CULzlAfbPNyJVa079b`) to the endpoint process and account. The syslog summaries describe irregular 48–72-hour beacon jitter and then a TLS fingerprint mismatch with the declared vendor updater. Validate those features against the actual sensor fields and clean vendor traffic; filtered ASA/Sysmon rows leave gaps.

### 11. Exclude the two explicit red herrings

Use the red-herring section in `GROUND_TRUTH.md` and the underlying host records:

- `priya.sharma`'s directory-health check on managed workstation MN-WS-103 is described as routine IT activity. Validate its approved tool, workstation, account, and schedule.

- The `northvale-vendor` update on MN-FS01 is a separate clean, signed update. Check its artifact hash and signature against a trusted vendor baseline. Its similar user-agent is intentionally misleading; user-agent similarity by itself does not connect it to the attacker.

## Assessment and gaps

The most persuasive chain is build-pipeline anomaly → signed package with a changed hash → dormant configuration access → lookalike DNS and HTTPS beaconing → script-host/PowerShell execution → unsigned DLL loaded alongside a vendor binary → redirector change. Confirm joins across process lineage, identity, hashes, DNS, and network UIDs before assigning scope.

Mark each conclusion as directly observed, corroborated, inferred, or unresolved. In particular, determine the full endpoint population, validate the vendor's build/signing records, and review filtered sensors before estimating impact or treating listed IPs/domains as production threat intelligence.