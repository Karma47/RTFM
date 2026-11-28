---
title: "Challenge 5 Threat Intelligence"
layout: "nnb-content-fragment"
url: "/labs/null-national-bank/content/threat-intel/challenge-05.html"
build:
  list: never
sitemap:
  disable: true
---

# Reported C2 Connections

## Destinations and Zeek connection UIDs

- `185.220.101.44:443` — reported C2 server; Zeek UID
  `CULzlAfbPNyJVa079b`
- `198.51.100.140:443` — reported as an internal external-threat-actor server
- `CKBQJ4kUvLDoKyG74EN`
- `CtTujUYQDPoWqrd3Qd`

`198.51.100.140` is in the documentation-only TEST-NET-2 range; treat it as a
synthetic or sanitized indicator, not a publicly routable destination.

Correlate each UID with Zeek connection, DNS, HTTP, and endpoint records before
assigning it to a process or host. The supplied report does not itself confirm
domain compromise.
