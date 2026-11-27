---
title: SSRF
date: 2026-11-26
authors:
  - Prasanna
tags:
  - cybersecurity
  - web-security
  - ssrf
---

{{< meta >}}

A curated collection of resources for learning about server-side request forgery (SSRF), organized into foundational material, controlled practice, and published research.

Use hands-on material only in its intended training environment, and assess other systems only with explicit authorization.

## 1. Introduction to SSRF

| Resource | Description |
| --- | --- |
| [What is SSRF](https://portswigger.net/web-security/ssrf) | Official overview and guidance for understanding and preventing this issue. |

## 2. Additional Learning Resources

| Resource | Description |
| --- | --- |
| [Video Resource 1](https://www.youtube.com/watch?v=eWEgUcHPle0&t=6s) | Talks and demonstrations related to server-side request forgery (SSRF). |
| [CSRF vs SSRF](https://www.youtube.com/watch?v=a7OMdTuYaGc) | Talks and demonstrations related to server-side request forgery (SSRF). |
| [Popular WebAttacks](https://www.youtube.com/watch?v=pdC3H8SX-F4) | Talks and demonstrations related to server-side request forgery (SSRF). |

## 3. Hands-on Labs

| # | Lab | Description |
| --- | --- | --- |
| 1 | [Basic SSRF Against Localhost](https://portswigger.net/web-security/ssrf/lab-basic-ssrf-against-localhost) | Practice **Basic SSRF Against Localhost** in the linked training lab. |
| 2 | [Basic SSRF Against Backend System](https://portswigger.net/web-security/ssrf/lab-basic-ssrf-against-backend-system) | Practice **Basic SSRF Against Backend System** in the linked training lab. |
| 3 | [SSRF with Blacklist Filter](https://portswigger.net/web-security/ssrf/lab-ssrf-with-blacklist-filter) | Practice **SSRF with Blacklist Filter** in the linked training lab. |
| 4 | [SSRF Filter Bypass via Open Redirection](https://portswigger.net/web-security/ssrf/lab-ssrf-filter-bypass-via-open-redirection) | Practice **SSRF Filter Bypass via Open Redirection** in the linked training lab. |
| 5 | [Out of Band Detection](https://portswigger.net/web-security/ssrf/blind/lab-out-of-band-detection) | Practice **Out of Band Detection** in the linked training lab. |
| 6 | [SSRF with Whitelist Filter](https://portswigger.net/web-security/ssrf/lab-ssrf-with-whitelist-filter) | Practice **SSRF with Whitelist Filter** in the linked training lab. |
| 7 | [Shellshock Exploitation](https://portswigger.net/web-security/ssrf/blind/lab-shellshock-exploitation) | Practice **Shellshock Exploitation** in the linked training lab. |
| 8 | [Thegreatescape](https://tryhackme.com/room/thegreatescape) | Practice **Thegreatescape** in the linked training lab. |
| 9 | [Exploiting XXE to Retrieve Files](https://portswigger.net/web-security/xxe/lab-exploiting-xxe-to-retrieve-files) | Practice **Exploiting XXE to Retrieve Files** in the linked training lab. |

## 4. Bug Bounty Writeups and Case Studies

| # | Resource | Description |
| --- | --- | --- |
| 1 | [Hacking Google Drive Integrations.md](https://github.com/httpvoid/writeups/blob/main/Hacking-Google-Drive-Integrations.md) | Published case studies and research related to server-side request forgery (SSRF). |
| 2 | [Redash](https://ian.sh/redash) | Published case studies and research related to server-side request forgery (SSRF). |
| 3 | [Fixing The Unfixable Story of a Google Cloud SSRF](https://bugs.xdavidhu.me/google/2021/12/31/fixing-the-unfixable-story-of-a-google-cloud-ssrf/) | Published case studies and research related to server-side request forgery (SSRF). |
| 4 | [Just Gopher It Escalating a Blind SSRF to RCE for 15k](https://sirleeroyjenkins.medium.com/just-gopher-it-escalating-a-blind-ssrf-to-rce-for-15k-f5329a974530) | Published case studies and research related to server-side request forgery (SSRF). |
| 5 | [How I Hacked Facebook Part Two](https://infosecwriteups.com/how-i-hacked-facebook-part-two-ffab96d57b19) | Published case studies and research related to server-side request forgery (SSRF). |
| 6 | [10000 Facebook SSRF Bug Bounty](https://amineaboud.medium.com/10000-facebook-ssrf-bug-bounty-402bd21e58e5) | Published case studies and research related to server-side request forgery (SSRF). |
| 7 | [31k SSRF in Google Cloud Monitoring.html](https://nechudav.blogspot.com/2020/11/31k-ssrf-in-google-cloud-monitoring.html) | Published case studies and research related to server-side request forgery (SSRF). |
| 8 | [Cve 2018 16794 on Fs Thefacebook Com](https://philippeharewood.com/cve-2018-16794-on-fs-thefacebook-com/) | Published case studies and research related to server-side request forgery (SSRF). |
| 9 | [Stored XSS and SSRF Google.html](https://s1gnalcha0s.github.io/dspl/2018/03/07/Stored-XSS-and-SSRF-Google.html) | Published case studies and research related to server-side request forgery (SSRF). |

## Recommended Learning Path

1. Read the topic overview and note the relevant defensive guidance.
2. Work through the practice labs in their intended training environments.
3. Review the research references for context, then focus on prevention and secure design.
4. Apply the lessons only to systems you own or are explicitly authorized to assess.
