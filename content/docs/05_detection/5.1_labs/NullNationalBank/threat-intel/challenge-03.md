---
title: "Challenge 3 Threat Intelligence"
layout: "nnb-content-fragment"
url: "/labs/null-national-bank/content/threat-intel/challenge-03.html"
build:
  list: never
sitemap:
  disable: true
---

# Reported Endpoint Artifacts

## File and installer indicators

- `C:\Program Files\Northvale\Common\NVUtils.dll`
- `msiexec.exe /x {A17C44F2-90B3-4E01-NVSN} /qn`

The Northvale DLL path was listed twice in the source report. Verify its
signature, hash, file origin, load path, and process context. The supplied
report does not identify a privileged account or a specific privilege
escalation technique; seek corroborating identity and security-event evidence.
