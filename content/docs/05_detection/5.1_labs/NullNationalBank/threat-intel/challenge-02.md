---
title: "Challenge 2 Threat Intelligence"
layout: "nnb-content-fragment"
url: "/labs/null-national-bank/content/threat-intel/challenge-02.html"
build:
  list: never
sitemap:
  disable: true
---

# ERP Plugin Execution Indicators

## Reported files

- `C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe`
- `C:\Windows\System32\mshta.exe`
- `C:\Windows\System32\msiexec.exe`

## Reported command lines

```text
mshta.exe javascript:eval(unescape('%61%74%6f%62'))
msiexec.exe /i NorthvaleERPSync-4.7.2.msi /qn ALLUSERS=1
powershell.exe -NoProfile -EncodedCommand
```

These are observed indicators, not commands to run. Correlate process lineage,
accounts, timestamps, installer records, and endpoint telemetry.
