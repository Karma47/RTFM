---
title: "Challenge 3 Threat Intelligence"
layout: "nnb-content-fragment"
url: "/labs/null-national-bank/content/threat-intel/challenge-03.html"
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
## Credential Escalation & Cloud (from 2025-06-07)

**Situation.** The intrusion went credentialed: an overnight **MFA push-bombing storm** against `rajesh.kumar` succeeded on attempt 32; LSASS was dumped via a renamed dual-use tool during his remote session; RC4 Kerberos tickets were roasted for `erp-svc`, `sqlsvc`, `backup-svc`; and **DCSync replicated the `krbtgt` hash** — the strongest single detection signal to date. A rogue multi-tenant OAuth app ("NVSync Tools") was admin-consented from a hijacked session, and a token replay produced impossible-travel sign-ins. A 40-minute-interval password spray ran against VPN, landing `kavitha.reddy`.

**IOCs**

1. `198.51.100.76` — source of MFA bombing and rogue OAuth consent
2. `45.33.32.156` — low-and-slow VPN password spray

**IOAs**

1. LSASS access mask `0x1010` from an unsigned `winsdkdiag.exe` running from Temp
2. RC4 (`0x17`) ticket requests for service accounts with outlier ticket sizes, followed by DCSync (`GetChangesAll`, `krbtgt`)

**Speculation & direction.** With `krbtgt` compromised, treat Golden-Ticket forgery as possible until a domain-wide credential rotation (twice) is completed. The OAuth grant implies mailbox/file cloud access independent of on-prem cleanup — revocation of consent alone is insufficient; rotate the consenting admin's session tokens. Further impossible-travel pairs (Asia ↔ EU) expected.

**MITRE ATT&CK:** T1621 (MFA Request Generation) · T1003.001 (LSASS) · T1558.003 (Kerberoasting) · T1003.006 (DCSync) · T1550.001 (Application Access Token) · T1110.003 (Password Spraying)