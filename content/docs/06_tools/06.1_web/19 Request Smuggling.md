---
title: Request Smuggling
date: 2026-11-26
authors:
  - Prasanna
tags:
  - cybersecurity
  - web-security
  - request-smuggling
---

{{< meta >}}

A curated collection of resources for learning about HTTP request smuggling, organized into foundational material, controlled practice, and published research.

Use hands-on material only in its intended training environment, and assess other systems only with explicit authorization.

## 1. Introduction to Request Smuggling

| Resource | Description |
| --- | --- |
| [What is Request Smuggling](https://portswigger.net/web-security/request-smuggling) | Official overview and guidance for understanding and preventing this issue. |

## 2. Additional Learning Resources

| Resource | Description |
| --- | --- |
| [Request Smuggling Overview](https://www.youtube.com/watch?v=PFllH0QccCs) | Talks and demonstrations related to HTTP request smuggling. |

## 3. Hands-on Labs

| # | Lab | Description |
| --- | --- | --- |
| 1 | [Basic CL TE](https://portswigger.net/web-security/request-smuggling/lab-basic-cl-te) | Practice **Basic CL TE** in the linked training lab. |
| 2 | [Basic TE CL](https://portswigger.net/web-security/request-smuggling/lab-basic-te-cl) | Practice **Basic TE CL** in the linked training lab. |
| 3 | [Obfuscating TE Header](https://portswigger.net/web-security/request-smuggling/lab-obfuscating-te-header) | Practice **Obfuscating TE Header** in the linked training lab. |
| 4 | [Confirming CL TE via Differential Responses](https://portswigger.net/web-security/request-smuggling/finding/lab-confirming-cl-te-via-differential-responses) | Practice **Confirming CL TE via Differential Responses** in the linked training lab. |
| 5 | [Confirming TE CL via Differential Responses](https://portswigger.net/web-security/request-smuggling/finding/lab-confirming-te-cl-via-differential-responses) | Practice **Confirming TE CL via Differential Responses** in the linked training lab. |
| 6 | [Bypass Front End Controls CL TE](https://portswigger.net/web-security/request-smuggling/exploiting/lab-bypass-front-end-controls-cl-te) | Practice **Bypass Front End Controls CL TE** in the linked training lab. |
| 7 | [Bypass Front End Controls TE CL](https://portswigger.net/web-security/request-smuggling/exploiting/lab-bypass-front-end-controls-te-cl) | Practice **Bypass Front End Controls TE CL** in the linked training lab. |
| 8 | [Reveal Front End Request Rewriting](https://portswigger.net/web-security/request-smuggling/exploiting/lab-reveal-front-end-request-rewriting) | Practice **Reveal Front End Request Rewriting** in the linked training lab. |
| 9 | [Capture Other Users Requests](https://portswigger.net/web-security/request-smuggling/exploiting/lab-capture-other-users-requests) | Practice **Capture Other Users Requests** in the linked training lab. |
| 10 | [Deliver Reflected XSS](https://portswigger.net/web-security/request-smuggling/exploiting/lab-deliver-reflected-xss) | Practice **Deliver Reflected XSS** in the linked training lab. |
| 11 | [Request Smuggling HTTP/2 Response Queue Poisoning via TE Request Smuggling](https://portswigger.net/web-security/request-smuggling/advanced/response-queue-poisoning/lab-request-smuggling-h2-response-queue-poisoning-via-te-request-smuggling) | Practice **Request Smuggling HTTP/2 Response Queue Poisoning via TE Request Smuggling** in the linked training lab. |
| 12 | [Request Smuggling HTTP/2 CL Request Smuggling](https://portswigger.net/web-security/request-smuggling/advanced/lab-request-smuggling-h2-cl-request-smuggling) | Practice **Request Smuggling HTTP/2 CL Request Smuggling** in the linked training lab. |
| 13 | [Request Smuggling HTTP/2 Request Smuggling via CRLF Injection](https://portswigger.net/web-security/request-smuggling/advanced/lab-request-smuggling-h2-request-smuggling-via-crlf-injection) | Practice **Request Smuggling HTTP/2 Request Smuggling via CRLF Injection** in the linked training lab. |
| 14 | [Request Smuggling HTTP/2 Request Splitting via CRLF Injection](https://portswigger.net/web-security/request-smuggling/advanced/lab-request-smuggling-h2-request-splitting-via-crlf-injection) | Practice **Request Smuggling HTTP/2 Request Splitting via CRLF Injection** in the linked training lab. |
| 15 | [Perform Web Cache Poisoning](https://portswigger.net/web-security/request-smuggling/exploiting/lab-perform-web-cache-poisoning) | Practice **Perform Web Cache Poisoning** in the linked training lab. |
| 16 | [Perform Web Cache Deception](https://portswigger.net/web-security/request-smuggling/exploiting/lab-perform-web-cache-deception) | Practice **Perform Web Cache Deception** in the linked training lab. |
| 17 | [Request Smuggling HTTP/2 Bypass Access Controls via Request Tunnelling](https://portswigger.net/web-security/request-smuggling/advanced/request-tunnelling/lab-request-smuggling-h2-bypass-access-controls-via-request-tunnelling) | Practice **Request Smuggling HTTP/2 Bypass Access Controls via Request Tunnelling** in the linked training lab. |
| 18 | [Request Smuggling HTTP/2 Web Cache Poisoning via Request Tunnelling](https://portswigger.net/web-security/request-smuggling/advanced/request-tunnelling/lab-request-smuggling-h2-web-cache-poisoning-via-request-tunnelling) | Practice **Request Smuggling HTTP/2 Web Cache Poisoning via Request Tunnelling** in the linked training lab. |

## 4. Bug Bounty Writeups and Case Studies

| # | Resource | Description |
| --- | --- | --- |
| 1 | [The Powerful HTTP Request Smuggling](https://ricardoiramar.medium.com/the-powerful-http-request-smuggling-af208fafa142) | Published case studies and research related to HTTP request smuggling. |
| 2 | [E6LMFm2w](https://pastebin.com/E6LMFm2w) | Published case studies and research related to HTTP request smuggling. |

## Recommended Learning Path

1. Read the topic overview and note the relevant defensive guidance.
2. Work through the practice labs in their intended training environments.
3. Review the research references for context, then focus on prevention and secure design.
4. Apply the lessons only to systems you own or are explicitly authorized to assess.
