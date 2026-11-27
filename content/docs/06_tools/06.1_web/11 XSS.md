---
title: XSS
date: 2026-11-26
authors:
  - Prasanna
tags:
  - cybersecurity
  - web-security
  - xss
---

{{< meta >}}

A curated collection of resources for learning about cross-site scripting (XSS), organized into foundational material, controlled practice, and published research.

Use hands-on material only in its intended training environment, and assess other systems only with explicit authorization.

## 1. Introduction to XSS

| Resource | Description |
| --- | --- |
| [What is XSS](https://portswigger.net/web-security/cross-site-scripting) | Official overview and guidance for understanding and preventing this issue. |

## 2. Additional Learning Resources

| Resource | Description |
| --- | --- |
| [XSS Explained](https://www.youtube.com/watch?v=EoaDgUgS6QA) | Talks and demonstrations related to cross-site scripting (XSS). |
| [Don't use alert](https://www.youtube.com/watch?v=KHwVjzWei1c) | Talks and demonstrations related to cross-site scripting (XSS). |
| [Preventing XSS CSP](https://www.youtube.com/watch?v=pD6C1-zSxIM&t=2s) | Talks and demonstrations related to cross-site scripting (XSS). |
| [Video Resource 1](https://www.youtube.com/watch?v=aybCeXhEjsA) | Talks and demonstrations related to cross-site scripting (XSS). |
| [Video Resource 2](https://www.youtube.com/watch?v=lG7U3fuNw3A) | Talks and demonstrations related to cross-site scripting (XSS). |

## 3. Hands-on Labs

| # | Lab | Description |
| --- | --- | --- |
| 1 | [HTML Context Nothing Encoded](https://portswigger.net/web-security/cross-site-scripting/reflected/lab-html-context-nothing-encoded) | Practice **HTML Context Nothing Encoded** in the linked training lab. |
| 2 | [HTML Context Nothing Encoded](https://portswigger.net/web-security/cross-site-scripting/stored/lab-html-context-nothing-encoded) | Practice **HTML Context Nothing Encoded** in the linked training lab. |
| 3 | [Document Write Sink](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-document-write-sink) | Practice **Document Write Sink** in the linked training lab. |
| 4 | [innerHTML Sink](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-innerhtml-sink) | Practice **innerHTML Sink** in the linked training lab. |
| 5 | [jQuery Href Attribute Sink](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-jquery-href-attribute-sink) | Practice **jQuery Href Attribute Sink** in the linked training lab. |
| 6 | [jQuery Selector Hash Change Event](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-jquery-selector-hash-change-event) | Practice **jQuery Selector Hash Change Event** in the linked training lab. |
| 7 | [Attribute Angle Brackets HTML Encoded](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-attribute-angle-brackets-html-encoded) | Practice **Attribute Angle Brackets HTML Encoded** in the linked training lab. |
| 8 | [Href Attribute Double Quotes HTML Encoded](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-href-attribute-double-quotes-html-encoded) | Practice **Href Attribute Double Quotes HTML Encoded** in the linked training lab. |
| 9 | [JavaScript String Angle Brackets HTML Encoded](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-javascript-string-angle-brackets-html-encoded) | Practice **JavaScript String Angle Brackets HTML Encoded** in the linked training lab. |
| 10 | [Document Write Sink Inside Select Element](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-document-write-sink-inside-select-element) | Practice **Document Write Sink Inside Select Element** in the linked training lab. |
| 11 | [AngularJS Expression](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-angularjs-expression) | Practice **AngularJS Expression** in the linked training lab. |
| 12 | [DOM XSS Reflected](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-dom-xss-reflected) | Practice **DOM XSS Reflected** in the linked training lab. |
| 13 | [DOM XSS Stored](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-dom-xss-stored) | Practice **DOM XSS Stored** in the linked training lab. |
| 14 | [Stealing Cookies](https://portswigger.net/web-security/cross-site-scripting/exploiting/lab-stealing-cookies) | Practice **Stealing Cookies** in the linked training lab. |
| 15 | [Capturing Passwords](https://portswigger.net/web-security/cross-site-scripting/exploiting/lab-capturing-passwords) | Practice **Capturing Passwords** in the linked training lab. |
| 16 | [Perform CSRF](https://portswigger.net/web-security/cross-site-scripting/exploiting/lab-perform-csrf) | Practice **Perform CSRF** in the linked training lab. |
| 17 | [HTML Context with Most Tags and Attributes Blocked](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-html-context-with-most-tags-and-attributes-blocked) | Practice **HTML Context with Most Tags and Attributes Blocked** in the linked training lab. |
| 18 | [HTML Context with All Standard Tags Blocked](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-html-context-with-all-standard-tags-blocked) | Practice **HTML Context with All Standard Tags Blocked** in the linked training lab. |
| 19 | [Some SVG Markup Allowed](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-some-svg-markup-allowed) | Practice **Some SVG Markup Allowed** in the linked training lab. |
| 20 | [Canonical Link Tag](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-canonical-link-tag) | Practice **Canonical Link Tag** in the linked training lab. |
| 21 | [JavaScript String Single Quote Backslash Escaped](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-javascript-string-single-quote-backslash-escaped) | Practice **JavaScript String Single Quote Backslash Escaped** in the linked training lab. |
| 22 | [JavaScript String Angle Brackets Double Quotes Encoded Single Quotes Escaped](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-javascript-string-angle-brackets-double-quotes-encoded-single-quotes-escaped) | Practice **JavaScript String Angle Brackets Double Quotes Encoded Single Quotes Escaped** in the linked training lab. |
| 23 | [Onclick Event Angle Brackets Double Quotes HTML Encoded Single Quotes Backslash Escaped](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-onclick-event-angle-brackets-double-quotes-html-encoded-single-quotes-backslash-escaped) | Practice **Onclick Event Angle Brackets Double Quotes HTML Encoded Single Quotes Backslash Escaped** in the linked training lab. |
| 24 | [JavaScript Template Literal Angle Brackets Single Double Quotes Backslash Backticks Escaped](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-javascript-template-literal-angle-brackets-single-double-quotes-backslash-backticks-escaped) | Practice **JavaScript Template Literal Angle Brackets Single Double Quotes Backslash Backticks Escaped** in the linked training lab. |
| 25 | [Event Handlers and Href Attributes Blocked](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-event-handlers-and-href-attributes-blocked) | Practice **Event Handlers and Href Attributes Blocked** in the linked training lab. |
| 26 | [JavaScript URL Some Characters Blocked](https://portswigger.net/web-security/cross-site-scripting/contexts/lab-javascript-url-some-characters-blocked) | Practice **JavaScript URL Some Characters Blocked** in the linked training lab. |
| 27 | [Angular Sandbox Escape Without Strings](https://portswigger.net/web-security/cross-site-scripting/contexts/angularjs-sandbox/lab-angular-sandbox-escape-without-strings) | Practice **Angular Sandbox Escape Without Strings** in the linked training lab. |
| 28 | [Angular Sandbox Escape and CSP](https://portswigger.net/web-security/cross-site-scripting/contexts/angularjs-sandbox/lab-angular-sandbox-escape-and-csp) | Practice **Angular Sandbox Escape and CSP** in the linked training lab. |
| 29 | [Very Strict CSP with Dangling Markup Attack](https://portswigger.net/web-security/cross-site-scripting/content-security-policy/lab-very-strict-csp-with-dangling-markup-attack) | Practice **Very Strict CSP with Dangling Markup Attack** in the linked training lab. |
| 30 | [CSP Bypass](https://portswigger.net/web-security/cross-site-scripting/content-security-policy/lab-csp-bypass) | Practice **CSP Bypass** in the linked training lab. |

## 4. Bug Bounty Writeups and Case Studies

| # | Resource | Description |
| --- | --- | --- |
| 1 | [How I Managed to Trigger XSS Automatically to Get Critical Account Takeover](https://c4rrilat0r.medium.com/how-i-managed-to-trigger-xss-automatically-to-get-critical-account-takeover-92ea3abcaf9) | Published case studies and research related to cross-site scripting (XSS). |
| 2 | [Cloud Shell XSS](https://ndevtk.github.io/writeups/2021/12/30/cloud-shell-xss/) | Published case studies and research related to cross-site scripting (XSS). |
| 3 | [PP](https://blog.s1r1us.ninja/research/PP) | Published case studies and research related to cross-site scripting (XSS). |
| 4 | [8000 Bug Bounty Highlight XSS to RCE in The Opera Browser](https://blogs.opera.com/security/2021/09/8000-bug-bounty-highlight-xss-to-rce-in-the-opera-browser/) | Published case studies and research related to cross-site scripting (XSS). |
| 5 | [How We Are Able to Hack Any Company by Sending Message Including Facebook Google Microsoft](https://cyberxplore.medium.com/how-we-are-able-to-hack-any-company-by-sending-message-including-facebook-google-microsoft-b7773626e447) | Published case studies and research related to cross-site scripting (XSS). |
| 6 | [Research Write-up 1](https://ysamm.com/?p=695) | Published case studies and research related to cross-site scripting (XSS). |
| 7 | [GitHub Pages XSS](https://robertchen.cc/blog/2021/04/03/github-pages-xss) | Published case studies and research related to cross-site scripting (XSS). |
| 8 | [Google VRP How I Get Blind XSS at Google with Dork First Bounty and Hof](https://apapedulimu.click/google-vrp-how-i-get-blind-xss-at-google-with-dork-first-bounty-and-hof/) | Published case studies and research related to cross-site scripting (XSS). |

## Recommended Learning Path

1. Read the topic overview and note the relevant defensive guidance.
2. Work through the practice labs in their intended training environments.
3. Review the research references for context, then focus on prevention and secure design.
4. Apply the lessons only to systems you own or are explicitly authorized to assess.
