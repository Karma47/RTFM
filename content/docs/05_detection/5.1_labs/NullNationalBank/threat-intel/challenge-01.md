---
title: "Challenge 1 Threat Intelligence"
layout: "nnb-content-fragment"
url: "/labs/null-national-bank/content/threat-intel/challenge-01.html"
build:
  list: never
sitemap:
  disable: true
---
# Suspected Supply-Chain Compromise

> [!NOTE]
> **TLP:AMBER+STRICT** — Need-to-know within the organisation only. No onward sharing.

## Assessment

- Infrastructure believed compromised; **no direct compromise evidence**.
- Access suspected via a **compromised vendor**, through a **tampered ERP plugin update**.
- Endpoints performing **malicious DNS queries**; C2 over **TCP/443**.

## Indicators

|Indicator|Type|
|---|---|
|`103.21.58.19:443`|C2 server|
|`185.220.101.44:443`|C2 server|
|`198.51.100.140:443`|Threat-actor server|
|`MN-APP014b6e582e7a.update.nullnationalbank.com`|Malicious DNS query|
|`c81af931.cdn.nullnationalbank.com`|Malicious DNS query|
|`NorthvaleERPSync-4.7.2.msi` (silent install via `msiexec /qn`)|Tampered update|
|`mshta.exe` JavaScript execution|Execution artefact|
|`powershell.exe -EncodedCommand`|Execution artefact|
|`C:\Program Files\Northvale\Common\NVUtils.dll`|Suspicious DLL|
|Zeek UIDs: `CULzlAfbPNyJVa079b`, `CKBQJ4kUvLDoKyG74EN`, `CtTujUYQDPoWqrd3Qd`|Log pivot points|

## Hunting Actions

1. Sweep DNS and egress logs for all indicators above.
2. Search endpoints for `NVUtils.dll` and the 4.7.2 MSI install; verify hashes/signatures.
3. Pull Zeek connection records for the listed UIDs; pivot on source hosts.
4. Review vendor access and session logs for anomalies.

---

_Report ID: TIR-2026-1128-ERP · TLP:AMBER+STRICT · Preliminary indicators — unverified._