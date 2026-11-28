---
title: "Challenge 2 Threat Intelligence"
layout: "nnb-content-fragment"
url: "/labs/null-national-bank/content/threat-intel/challenge-02.html"
build:
  list: never
sitemap:
  disable: true
---

---

> [!NOTE]
> _Series TIR-2026-1128-CL/P1–P5 · TLP:AMBER · Indicators preliminary and unverified; validate before blocking._

---
## Foothold Expansion & Recon (from 2025-06-05)

**Situation.** With egress filtering tightened, C2 **fell back to DNS TXT records carrying base32 payloads**. The implant moved fully **in-memory into a service host** (no disk artefact), then installed persistence as **`NVAppMonSvc`**, a service name mimicking vendor conventions. Interactive discovery followed from the workstation of `arjun.menon`: domain group enumeration, slow ARP/ICMP sweep of the /24, LDAP SPN harvesting, and human-paced SMB browsing of Finance paths. Separately, a caller impersonating `vikram.patel` talked the helpdesk into a password + MFA reset using employee-ID and payroll-fragment verification.

**IOCs**

1. `C:\ProgramData\Northvale\NVAppMonSvc.exe` — rogue persistence service (display name "Northvale Application Monitor Service")
2. Large TXT responses to `*.nullnationalbank.com` queries (base32 payload) — DNS C2 channel

**IOAs**

1. Process-injection access (`0x1010`) against `svchost.exe` with no corresponding on-disk module
2. LDAP queries filtered on `(servicePrincipalName=*)` requesting SPN/memberOf attributes from a workstation context

**Speculation & direction.** The SPN enumeration telegraphs an imminent Kerberoasting attempt. The helpdesk bypass signals an identity-attack track running in parallel with the endpoint track — assume credential-reset procedures are known to the adversary. Watch `arjun.menon`'s account: activity may be hijacked rather than the user being complicit.

**MITRE ATT&CK:** T1071.004 (DNS, TXT fallback) · T1055 (Process Injection) · T1543.003 (Windows Service) · T1087.002 / T1035 / T1135 (Discovery) · T1566.004 + T1098 (Vishing / Account Manipulation)