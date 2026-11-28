---
title: "Challenge 00 Threat Intelligence"
layout: "nnb-content-fragment"
url: "/labs/null-national-bank/content/threat-intel/challenge-00.html"
build:
  list: never
sitemap:
  disable: true
---

---

> [!NOTE]
> _Series TIR-2026-1128-CL/P1–P5 · TLP:AMBER · Indicators preliminary and unverified; validate before blocking._
> 

---

## Suspicious RDP Logon to Employee Workstation

Between failed and successful attempts on **2025-11-24 (UTC)**, the employee account **`rajesh.kumar`** received **two failed RDP logons** followed by a **successful RDP logon to workstation `MN-WS-101`**, all from the same external address `203.0.113.42`. A threat-intelligence note associates that address with the tracked actor **`apt-dinesh`**. The failure-then-success sequence from a single external source is consistent with password guessing that landed — the account should be treated as **acted upon, not necessarily complicit**.

### Indicators

- 203.0.113.42` — external RDP source, linked to `apt-dinesh
- Successful **Type 10 (RemoteInteractive)** logon to `MN-WS-101` by `rajesh.kumar` from that address
- Two failed RDP logons immediately preceding a success from one external IP (brute-force / password-guess pattern)
- External-source RDP access to an employee workstation — validate against VPN gateway and broker records
### Speculation & Direction

- Assume credentials are now known to the adversary; expect follow-on **internal discovery, lateral movement, or privilege escalation** from `MN-WS-101` within the next hours.
- Hunt: pull full Windows Security event sequences (4625 failures → 4624 Type 10 success → 4647/4634) for `rajesh.kumar`; check whether the source address appears elsewhere in perimeter logs (VPN, OWA, cloud IdP).
- Contain: disable/reset the account, force MFA re-registration, isolate `MN-WS-101`, and block the address at the perimeter.
- Confirm whether `MN-WS-101` holds privileged access or caches credentials worth stealing before deciding the containment blast radius.

### MITRE ATT&CK

- **T1110.001** — Brute Force: Password Guessing (failed logon burst)
- **T1021.001** — Remote Services: Remote Desktop Protocol (external RDP access)
- **T1078** — Valid Accounts (post-success use of `rajesh.kumar`)
