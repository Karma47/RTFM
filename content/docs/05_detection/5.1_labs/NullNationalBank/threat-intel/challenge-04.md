---
title: "Challenge 4 Threat Intelligence"
layout: "nnb-content-fragment"
url: "/labs/null-national-bank/content/threat-intel/challenge-04.html"
build:
  list: never
sitemap:
  disable: true
---

---

> [!NOTE]
> _Series TIR-2026-1128-CL/P1–P5 · TLP:AMBER · Indicators preliminary and unverified; validate before blocking._

---

## Lateral Movement & Staging (from 2025-06-08 14:00)

**Situation.** From `arjun.menon`'s workstation, execution chained to servers via **WMI/WinRM** with payloads staged on `ADMIN$` shares. A PAM vault probe failed, but a **checked-out admin credential was harvested from an admin endpoint instead**. An eight-minute **pass-the-ticket hop chain** using `sqlsvc` crossed servers _including the SIEM itself_. Persistence landed as maintenance-named scheduled task **`NV-HealthCheck`** (encoded PowerShell, Sundays 03:10 IST). Finance and Board papers were mass-read and compressed into **split, password-protected archives** (`q3close.7z`). Defence impairments began: blocked Sysmon config edits and DNS log retention cut from 14d to 4d. An unrelated cryptominer on a neglected CI runner created counter-detection noise.

**IOCs**

1. `\\MN-APP01\ADMIN$\Temp\nvdutil.exe` — staged remote-exec tool (`--mode stealth --persist`)
2. Scheduled task `NV-HealthCheck` — persistence on MN-APP01 / MN-FS01

**IOAs**

1. Same `sqlsvc` Kerberos ticket reused across multiple hosts in an 8-minute window (incl. MN-SIEM01)
2. Bulk EID 4663 reads on Finance/BoardPapers followed by `7z a -v512m -p` archive creation

**Speculation & direction.** The hop chain through the SIEM server implies attacker awareness of monitoring topology — audit the SIEM for tampering and log-source anomalies. Archive naming tied to quarter-close suggests a business-calendar awareness and imminent exfiltration. Do not anchor on the miner: it is unattributed noise concurrent with the real intrusion.

**MITRE ATT&CK:** T1047 / T1021.006 (WMI/WinRM) · T1021.002 (Admin Shares) · T1552 (Unsecured Credentials) · T1550.003 (Pass the Ticket) · T1053.005 (Scheduled Task) · T1560.001 (Archive via Utility) · T1562.001/.002 (Impair Defenses)