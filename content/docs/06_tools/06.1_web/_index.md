---
title: Web Resources
description: All documentation notes
authors:
  - Prasanna
tags:
  - cybersecurity
  - web-security
  - sql-injection
  - pentesting
---

# Documentation

{{< meta >}}

A topic-by-topic index of the web application security resources in the master training list. Each topic page brings together its overview, controlled practice labs, and related research references.

Practice only in intended training environments, and assess other systems only with explicit authorization.

## Topic Pages

| # | Topic | Defensive Focus |
| --- | --- | --- |
| 01 | [SQL Injection](/docs/06_tools/06.1_web/01-sql-injection/) | Safe database access and parameterized queries |
| 02 | [Authentication](/docs/06_tools/06.1_web/02-authentication/) | Identity verification, account recovery, and MFA |
| 03 | [Directory Traversal](/docs/06_tools/06.1_web/03-directory-traversal/) | Secure file path handling |
| 04 | [OS Command Injection](/docs/06_tools/06.1_web/04-os-command-injection/) | Safe process invocation and input handling |
| 05 | [Business Logic Issues](/docs/06_tools/06.1_web/05-business-logic-issues/) | Workflow validation and server-side business rules |
| 06 | [Information Disclosure](/docs/06_tools/06.1_web/06-information-disclosure/) | Error handling and protection of sensitive data |
| 07 | [Access Control](/docs/06_tools/06.1_web/07-access-control/) | Authorization checks and least privilege |
| 08 | [File Upload Vulnerabilities](/docs/06_tools/06.1_web/08-file-upload-vulnerabilities/) | Upload validation, storage, and serving controls |
| 09 | [SSRF](/docs/06_tools/06.1_web/09-ssrf/) | Controls on server-initiated network requests |
| 10 | [XXE](/docs/06_tools/06.1_web/10-xxe/) | Secure XML parsing and external entity handling |
| 11 | [XSS](/docs/06_tools/06.1_web/11-xss/) | Context-aware output encoding and browser protections |
| 12 | [CSRF](/docs/06_tools/06.1_web/12-csrf/) | Request integrity and browser cookie protections |
| 13 | [CORS](/docs/06_tools/06.1_web/13-cors/) | Narrow, explicit cross-origin policies |
| 14 | [Clickjacking](/docs/06_tools/06.1_web/14-clickjacking/) | Framing restrictions and interaction safeguards |
| 15 | [Deserialization](/docs/06_tools/06.1_web/15-deserialization/) | Safe data formats and strict input validation |
| 16 | [SSTI](/docs/06_tools/06.1_web/16-ssti/) | Safe template rendering and context-aware escaping |
| 17 | [Web Cache Poisoning](/docs/06_tools/06.1_web/17-web-cache-poisoning/) | Consistent cache keys and cache-control policy |
| 18 | [Host Header Injection](/docs/06_tools/06.1_web/18-host-header-injection/) | Host validation and trusted proxy configuration |
| 19 | [Request Smuggling](/docs/06_tools/06.1_web/19-request-smuggling/) | Consistent HTTP parsing across intermediaries |

## Recommended Learning Path

1. Start with the overview for each topic.
2. Use the linked practice environments to reinforce the concepts.
3. Review prevention guidance and apply it to systems you own or are authorized to assess.
