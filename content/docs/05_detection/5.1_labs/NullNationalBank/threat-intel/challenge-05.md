---
title: "Challenge 5 Threat Intelligence"
layout: "nnb-content-fragment"
url: "/labs/null-national-bank/content/threat-intel/challenge-05.html"
build:
  list: never
sitemap:
  disable: true
---

---

> [!NOTE]
> _Series TIR-2026-1128-CL/P1–P5 · TLP:AMBER · Indicators preliminary and unverified; validate before blocking._

---
## Exfiltration & Cosmetic Exit (from 2025-06-10 18:00)


**IOCs**

1. `/portal/uploads/resource_util.aspx` — web shell on MN-WEB01 (POST-heavy, low-and-slow cadence)
2. `metricssvc.nullnationalbank-cdn.net` — third-party script reference in STAGING payment page

**IOAs**

1. Outbound HTTPS uploads, 4–8 MB chunks at 30–90 min intervals, bearing the vendor updater user-agent
2. File hash restored to original values + task disabled-but-not-deleted — anti-forensic cleanup, not remediation

**Speculation & direction.** This is an exit, not a departure: four persistence channels were maintained and three survive any single remediation wave. Expect re-entry via (a) the dormant plug-in config re-arm task, (b) the sqlsvc ticket, or (c) the web shell. Verify the STAGING script change has not propagated to PRODUCTION; the skimmer appears staged for activation. Full scope-and-eradication must precede any external breach notification decision.

**MITRE ATT&CK:** T1041 (Exfiltration Over C2) · T1505.003 (Web Shell) · T1554 (Compromise Client Software Binary) · T1070 (Indicator Removal) · T1053.005 (Persistence re-arm)

