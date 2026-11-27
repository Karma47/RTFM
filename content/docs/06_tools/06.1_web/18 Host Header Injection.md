---
title: Host Header Injection
date: 2026-11-26
authors:
  - Prasanna
tags:
  - cybersecurity
  - web-security
  - host-header-injection
---

{{< meta >}}

A curated collection of resources for learning about host header injection, organized into foundational material, controlled practice, and published research.

Use hands-on material only in its intended training environment, and assess other systems only with explicit authorization.

## 1. Introduction to Host Header Injection

| Resource | Description |
| --- | --- |
| [What is Host Header Injection](https://portswigger.net/web-security/host-header) | Official overview and guidance for understanding and preventing this issue. |

## 2. Hands-on Labs

| # | Lab | Description |
| --- | --- | --- |
| 1 | [Host Header Basic Password Reset Poisoning](https://portswigger.net/web-security/host-header/exploiting/password-reset-poisoning/lab-host-header-basic-password-reset-poisoning) | Practice **Host Header Basic Password Reset Poisoning** in the linked training lab. |
| 2 | [Host Header Authentication Bypass](https://portswigger.net/web-security/host-header/exploiting/lab-host-header-authentication-bypass) | Practice **Host Header Authentication Bypass** in the linked training lab. |
| 3 | [Host Header Web Cache Poisoning via Ambiguous Requests](https://portswigger.net/web-security/host-header/exploiting/lab-host-header-web-cache-poisoning-via-ambiguous-requests) | Practice **Host Header Web Cache Poisoning via Ambiguous Requests** in the linked training lab. |
| 4 | [Host Header Routing Based SSRF](https://portswigger.net/web-security/host-header/exploiting/lab-host-header-routing-based-ssrf) | Practice **Host Header Routing Based SSRF** in the linked training lab. |
| 5 | [Host Header SSRF via Flawed Request Parsing](https://portswigger.net/web-security/host-header/exploiting/lab-host-header-ssrf-via-flawed-request-parsing) | Practice **Host Header SSRF via Flawed Request Parsing** in the linked training lab. |
| 6 | [Host Header Password Reset Poisoning via Dangling Markup](https://portswigger.net/web-security/host-header/exploiting/password-reset-poisoning/lab-host-header-password-reset-poisoning-via-dangling-markup) | Practice **Host Header Password Reset Poisoning via Dangling Markup** in the linked training lab. |

## 3. Bug Bounty Writeups and Case Studies

| # | Resource | Description |
| --- | --- | --- |
| 1 | [10k Host Header](https://sites.google.com/site/testsitehacking/10k-host-header) | Published case studies and research related to host header injection. |
| 2 | [Host Header Injection](https://lightningsecurity.io/blog/host-header-injection/) | Published case studies and research related to host header injection. |
| 3 | [Awesome Host Header Injection Worth 2k](https://medium.com/@imunissar786/awesome-host-header-injection-worth-2k-a7e5be1dbb1d) | Published case studies and research related to host header injection. |
| 4 | [ATO via Host Header Poisoning](https://sechunter.medium.com/ato-via-host-header-poisoning-dc5c29d2fd0d) | Published case studies and research related to host header injection. |
| 5 | [XSS Cross Site Scripting via X-Forwarded Host Header](https://medium.com/@abhijeetbiswas_/xss-cross-site-scripting-via-x-forwarded-host-header-20be114d4254) | Published case studies and research related to host header injection. |

## Recommended Learning Path

1. Read the topic overview and note the relevant defensive guidance.
2. Work through the practice labs in their intended training environments.
3. Review the research references for context, then focus on prevention and secure design.
4. Apply the lessons only to systems you own or are explicitly authorized to assess.
