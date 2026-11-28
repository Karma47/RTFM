---
title: "Challenge 4 Threat Intelligence"
layout: "nnb-content-fragment"
url: "/labs/null-national-bank/content/threat-intel/challenge-04.html"
build:
  list: never
sitemap:
  disable: true
---

# Reported DNS and Network Indicators

## DNS queries

- `4b6e582e7a.update.nullnationalbank.com` — reported from host `MN-APP01`
- `c81af931.cdn.nullnationalbank.com`

## Reported HTTPS destination

- `103.21.58.19:443` — reported command-and-control (C2) server

Correlate query timestamps, responses, initiating processes, and outbound
connections. These indicators alone do not establish lateral movement or
identify a source and destination host.
