---
title: "Phase 2 Walkthrough"
layout: "nnb-content-fragment"
url: "/labs/null-national-bank/content/walkthroughs/phase-02.html"
build:
  list: never
sitemap:
  disable: true
---

# Operation CinderLink, Part 2: Investigation Walkthrough

Part 2 continues the first-stage implant activity, then shifts into internal reconnaissance and social engineering. The collection begins **2025-06-05 00:00Z** and runs through the next three-day window; boundary records overlap adjacent parts. Use the storyline as a hypothesis and validate it against host and network records.

## Step-by-step investigation

### 1. Normalize and correlate the continuing C2

Use UTC across EDR, syslog, Windows events, DNS, and Zeek. Join on host, process, account, logon ID, and network UID rather than relying on timestamps alone. The opening connections continue the activity from part 1:

- `MN-APP01` to `103.21.58.19:443`, UID `CzkSdA1jVir3rolaTd`, around **2025-06-05 00:00:24Z**.

- `MN-APP01` to `185.220.101.44:443`, UID `CIT6Z41E9ScfkLVAZ1`, around **2025-06-05 21:59:46Z**.

The syslog indicators describe irregular 48–72-hour beacon jitter, followed by a TLS fingerprint mismatch with the declared Northvale updater. Attribute each flow to its endpoint process and compare its TLS/user-agent properties to approved vendor traffic. A matching vendor user-agent is not proof of a legitimate update.

### 2. Detect the DNS TXT fallback after the egress change

**Inspect:** `data/MN-APP01.nbk.local/ecar.json`, Windows event files, `syslog.log`, and `data/mn-siem01/dns.json`.

At about **03:59:34Z on June 6**, find the TXT query:
```text
e5f2.c8ba19aa77d0.nullnationalbank.com
```
Correlate the query with the initiating process, the IDS1 egress-filter change referenced by the storyline, the returned record type/size, and nearby connections. The syslog indicator describes a large TXT record carrying base32-like data. This supports a shift to DNS as a communication channel; validate the actual DNS record and compare the name/volume with normal queries. ASA visibility is marked filtered, so its absence cannot rule out other egress.

### 3. Treat the process-injection claim as a lead with a telemetry gap

The **08:00:20Z June 6** process-access intent is marked **skipped** because there was no live source process, and the ground-truth timeline explicitly says no process-access evidence was emitted for `svchost.exe`. A separate syslog summary describes anonymous executable memory in a service host.

Do not present the skipped event as a direct process-injection observation. Use it as a lead: preserve memory from an available affected host, check EDR memory/process telemetry and service-host lineage, and compare with the syslog assertion. The evidence in this slice supports a ground-truth scenario claim, but direct confirmation requires the missing process/memory evidence.

### 4. Verify the vendor-like persistence service

**Inspect:** `data/MN-APP01.nbk.local/ecar.json`, `windows_event_security.xml`, `windows_event_sysmon.xml`, and `syslog.log`.

At **11:59:42Z on June 6**, investigate installation of `NVAppMonSvc`, with binary path:
```text
C:\ProgramData\Northvale\NVAppMonSvc.exe
```
Check service-install events, registry/service configuration, image hash/signature, start account, and parent process. A vendor-like name is camouflage, not validation. Compare the binary and service configuration with the legitimate Northvale application monitor and the earlier suspect updater chain.

### 5. Reconstruct host and domain reconnaissance on MN-WS-102

**Inspect:** `data/MN-WS-102.nbk.local/ecar.json`, Sysmon, Windows Security, and `syslog.log`.

At **15:59Z on June 6**, look for `net.exe` and `systeminfo.exe` launched by the external actor. The command `net group "Domain Admins" /domain` queries a privileged group; `systeminfo` gathers host configuration. Correlate process parent, user/session, and activity on the same workstation. These built-in tools are not malicious by name alone; the sequence and account/session context make them suspicious.

The ground truth also describes a slow ARP/ICMP sweep of `10.10.10.0/24`. Review endpoint flow and Zeek records from the same host over a broad enough window to see the low-rate pattern. Compare destinations and cadence with approved inventory/scanning activity before labeling every probe hostile. The sensor-status table shows some filtered network evidence.

### 6. Identify LDAP reconnaissance without overstating Kerberoasting

**Inspect:** `data/MN-WS-102.nbk.local/ecar.json`, Windows events, `syslog.log`, and `data/mn-siem01` network records.

At **20:00:20Z on June 6**, pivot to LDAP traffic to `MN-DC01`. The syslog summary says the query requests `sAMAccountName`, `servicePrincipalName`, and `memberOf` with filter `(servicePrincipalName=*)`. That is consistent with enumerating service accounts and building a Kerberoast target list.

This part records target-list discovery, not necessarily the later service-ticket requests or password recovery. Check ticket-request events in the next scenario part; do not claim successful Kerberoasting from the LDAP query alone.

### 7. Scope file-server share enumeration

**Inspect:** `data/MN-FS01.nbk.local/ecar.json`, Windows Security events, and `syslog.log`.

At **2025-06-07 00:00:22Z**, correlate the network logon for `arjun.menon` from `10.10.10.102` with logon ID `0x7bda8d0` and the following share activity. The syslog record lists Finance, BoardPapers, and IT paths and describes human-paced directory listings.

Distinguish enumeration from collection: the summary says directory listings only. Review detailed share/file-access events to confirm whether files were opened or copied; do not infer exfiltration from a successful SMB logon or directory listing.

### 8. Confirm the helpdesk social-engineering event

**Inspect:** `data/MN-DC01.nbk.local/syslog.log` and Windows Security records.

At **12:00Z on June 7**, the helpdesk record says a caller impersonating `vikram.patel` requested password reset and MFA re-registration under ticket `HD-2025-11884`. The verifier-bypass field says the caller knew employee ID and last-four payroll digits. A second record associates the action with `svc-helpdesk` and Windows Event ID 4724.

Correlate the reset event, ticket, operator identity, and subsequent authentication history. This corroborates an account-recovery action, but establish whether the ticket and helpdesk workflow were authorized and who initiated them before asserting that the caller personally took control of the account.

## Assessment and gaps

This part advances from changing C2 channels to internal discovery and account manipulation. Strong direct signals include the TXT query characteristics, the installed service record, the recon process commands, the LDAP query fields, share enumeration context, and helpdesk reset audit trail. The injection event is explicitly skipped and must be corroborated independently. Continue the investigation into part 3 for ticket requests, credential access, directory replication, OAuth consent, and identity use.
