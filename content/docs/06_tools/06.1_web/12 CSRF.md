---
title: CSRF
date: 2026-11-26
authors:
  - Prasanna
tags:
  - cybersecurity
  - web-security
  - csrf
---

{{< meta >}}

A curated collection of resources for learning about cross-site request forgery (CSRF), organized into foundational material, controlled practice, and published research.

Use hands-on material only in its intended training environment, and assess other systems only with explicit authorization.

## 1. Introduction to CSRF

| Resource | Description |
| --- | --- |
| [What is CSRF](https://portswigger.net/web-security/csrf) | Official overview and guidance for understanding and preventing this issue. |

## 2. Additional Learning Resources

| Resource | Description |
| --- | --- |
| [Video Resource 1](https://www.youtube.com/watch?v=eWEgUcHPle0&t=7s) | Talks and demonstrations related to cross-site request forgery (CSRF). |
| [CSRF vs SSRF](https://www.youtube.com/watch?v=a7OMdTuYaGc) | Talks and demonstrations related to cross-site request forgery (CSRF). |
| [Popular WebAttacks](https://www.youtube.com/watch?v=pdC3H8SX-F4) | Talks and demonstrations related to cross-site request forgery (CSRF). |

## 3. Hands-on Labs

| # | Lab | Description |
| --- | --- | --- |
| 1 | [No Defenses](https://portswigger.net/web-security/csrf/lab-no-defenses) | Practice **No Defenses** in the linked training lab. |
| 2 | [Token Validation Depends on Request Method](https://portswigger.net/web-security/csrf/lab-token-validation-depends-on-request-method) | Practice **Token Validation Depends on Request Method** in the linked training lab. |
| 3 | [Token Validation Depends on Token Being Present](https://portswigger.net/web-security/csrf/lab-token-validation-depends-on-token-being-present) | Practice **Token Validation Depends on Token Being Present** in the linked training lab. |
| 4 | [Token Not Tied to User Session](https://portswigger.net/web-security/csrf/lab-token-not-tied-to-user-session) | Practice **Token Not Tied to User Session** in the linked training lab. |
| 5 | [Token Tied to Non Session Cookie](https://portswigger.net/web-security/csrf/lab-token-tied-to-non-session-cookie) | Practice **Token Tied to Non Session Cookie** in the linked training lab. |
| 6 | [Token Duplicated in Cookie](https://portswigger.net/web-security/csrf/lab-token-duplicated-in-cookie) | Practice **Token Duplicated in Cookie** in the linked training lab. |
| 7 | [Referer Validation Depends on Header Being Present](https://portswigger.net/web-security/csrf/lab-referer-validation-depends-on-header-being-present) | Practice **Referer Validation Depends on Header Being Present** in the linked training lab. |
| 8 | [Referer Validation Broken](https://portswigger.net/web-security/csrf/lab-referer-validation-broken) | Practice **Referer Validation Broken** in the linked training lab. |

## 4. Bug Bounty Writeups and Case Studies

| # | Resource | Description |
| --- | --- | --- |
| 1 | [Bug Hunting Journey of 2021](https://infosecwriteups.com/bug-hunting-journey-of-2021-1fa60b28d949) | Published case studies and research related to cross-site request forgery (CSRF). |
| 2 | [Story of IDOR on Google Product](https://apapedulimu.click/story-of-idor-on-google-product/) | Published case studies and research related to cross-site request forgery (CSRF). |
| 3 | [Part 1 Dive Into Zoom Applications](https://rakesh-thodupunoori.medium.com/part-1-dive-into-zoom-applications-d70f3de53ec5) | Published case studies and research related to cross-site request forgery (CSRF). |
| 4 | [I Built a Tv That Plays All of Your Private Youtube Videos](https://bugs.xdavidhu.me/google/2021/04/05/i-built-a-tv-that-plays-all-of-your-private-youtube-videos/) | Published case studies and research related to cross-site request forgery (CSRF). |
| 5 | [Launching Internal Non Exported Deeplinks on Facebook](https://ash-king.co.uk/blog/Launching-internal-non-exported-deeplinks-on-Facebook) | Published case studies and research related to cross-site request forgery (CSRF). |

## Recommended Learning Path

1. Read the topic overview and note the relevant defensive guidance.
2. Work through the practice labs in their intended training environments.
3. Review the research references for context, then focus on prevention and secure design.
4. Apply the lessons only to systems you own or are explicitly authorized to assess.
