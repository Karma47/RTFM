---
title: "Challenge 1 Threat Intelligence"
layout: "nnb-content-fragment"
url: "/labs/null-national-bank/content/threat-intel/challenge-01.html"
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
## Supply-Chain Insertion 
The adversary trojanised the vendor's ERP plug-in build pipeline, shipping a **digitally signed malicious update (`NorthvaleERPSync-4.7.2`)** to the app server and ~40 workstations. After ~16 h dormancy, hosts resolved lookalike C2 domains and began HTTPS beaconing spoofing the vendor updater user-agent. Non-bank-joined hosts silently self-uninstalled; `mshta`/PowerShell chains spawned from the ERP service process; an unsigned DLL was side-loaded into a signed vendor binary. C2 transited a hijacked regional web host, then handed off to second-tier redirector infrastructure.

**IOCs**

1. `NorthvaleERPSync-4.7.2.msi` — trojanised signed installer
2. `198.51.100.140:443` — C2 / actor infrastructure

**IOAs**

1. `mshta.exe` / encoded PowerShell spawned by `NVPluginSvc.exe` (ERP service as parent)
2. User-agent declares vendor updater but TLS fingerprint does not match it (JA3 mismatch)

**Speculation & direction.** The valid code signature suggests signing keys or the build system are held by the actor — treat all vendor 4.x updates as suspect pending hash verification. Expect additional implant activation gated on config reads (off-hours `telemetry.toml` reads observed). Hunt: pivot on Zeek UIDs `CULzlAfbPNyJVa079b`, `CKBQJ4kUvLDoKyG74EN`, `CtTujUYQDPoWqrd3Qd`; verify hashes rather than trusting user-agents — a benign vendor update sharing the same UA exists as cover traffic.

**MITRE ATT&CK:** T1195.002 (Compromise Software Supply Chain) · T1553.002 (Subvert Code Signing) · T1071.004 (DNS) · T1059.001/.007 (PowerShell/Mshta) · T1574.002 (DLL Side-Loading) · T1090.002 (External Proxy) · T1036.005 (Masquerading)