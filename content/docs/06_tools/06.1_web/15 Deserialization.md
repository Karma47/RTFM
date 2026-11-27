---
title: Deserialization
date: 2026-11-26
authors:
  - Prasanna
tags:
  - cybersecurity
  - web-security
  - deserialization
---

{{< meta >}}

A curated collection of resources for learning about insecure deserialization, organized into foundational material, controlled practice, and published research.

Use hands-on material only in its intended training environment, and assess other systems only with explicit authorization.

## 1. Introduction to Deserialization

| Resource | Description |
| --- | --- |
| [Insecure Deserialization](https://portswigger.net/web-security/deserialization) | Official overview and guidance for understanding and preventing this issue. |

## 2. Additional Learning Resources

| Resource | Description |
| --- | --- |
| [Video Resource 1](https://www.youtube.com/watch?v=jwzeJU_62IQ) | Talks and demonstrations related to insecure deserialization. |

## 3. Hands-on Labs

| # | Lab | Description |
| --- | --- | --- |
| 1 | [Manipulating Messages to Exploit Vulnerabilities](https://portswigger.net/web-security/websockets/lab-manipulating-messages-to-exploit-vulnerabilities) | Practice **Manipulating Messages to Exploit Vulnerabilities** in the linked training lab. |
| 2 | [Manipulating Handshake to Exploit Vulnerabilities](https://portswigger.net/web-security/websockets/lab-manipulating-handshake-to-exploit-vulnerabilities) | Practice **Manipulating Handshake to Exploit Vulnerabilities** in the linked training lab. |
| 3 | [Cross Site WebSocket Hijacking](https://portswigger.net/web-security/websockets/cross-site-websocket-hijacking/lab) | Practice **Cross Site WebSocket Hijacking** in the linked training lab. |
| 4 | [Deserialization Modifying Serialized Objects](https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-modifying-serialized-objects) | Practice **Deserialization Modifying Serialized Objects** in the linked training lab. |
| 5 | [Deserialization Modifying Serialized Data Types](https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-modifying-serialized-data-types) | Practice **Deserialization Modifying Serialized Data Types** in the linked training lab. |
| 6 | [Deserialization Using Application Functionality to Exploit Insecure Deserialization](https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-using-application-functionality-to-exploit-insecure-deserialization) | Practice **Deserialization Using Application Functionality to Exploit Insecure Deserialization** in the linked training lab. |
| 7 | [Deserialization Arbitrary Object Injection in PHP](https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-arbitrary-object-injection-in-php) | Practice **Deserialization Arbitrary Object Injection in PHP** in the linked training lab. |
| 8 | [Deserialization Exploiting Java Deserialization with Apache Commons](https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-exploiting-java-deserialization-with-apache-commons) | Practice **Deserialization Exploiting Java Deserialization with Apache Commons** in the linked training lab. |
| 9 | [Deserialization Exploiting PHP Deserialization with a Pre Built Gadget Chain](https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-exploiting-php-deserialization-with-a-pre-built-gadget-chain) | Practice **Deserialization Exploiting PHP Deserialization with a Pre Built Gadget Chain** in the linked training lab. |
| 10 | [Deserialization Exploiting Ruby Deserialization Using a Documented Gadget Chain](https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-exploiting-ruby-deserialization-using-a-documented-gadget-chain) | Practice **Deserialization Exploiting Ruby Deserialization Using a Documented Gadget Chain** in the linked training lab. |
| 11 | [Deserialization Developing a Custom Gadget Chain for Java Deserialization](https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-developing-a-custom-gadget-chain-for-java-deserialization) | Practice **Deserialization Developing a Custom Gadget Chain for Java Deserialization** in the linked training lab. |
| 12 | [Deserialization Developing a Custom Gadget Chain for PHP Deserialization](https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-developing-a-custom-gadget-chain-for-php-deserialization) | Practice **Deserialization Developing a Custom Gadget Chain for PHP Deserialization** in the linked training lab. |
| 13 | [Deserialization Using Phar Deserialization to Deploy a Custom Gadget Chain](https://portswigger.net/web-security/deserialization/exploiting/lab-deserialization-using-phar-deserialization-to-deploy-a-custom-gadget-chain) | Practice **Deserialization Using Phar Deserialization to Deploy a Custom Gadget Chain** in the linked training lab. |

## 4. Bug Bounty Writeups and Case Studies

| # | Resource | Description |
| --- | --- | --- |
| 1 | [Higherlogic RCE](https://blog.sorcery.ie/posts/higherlogic_rce/) | Published case studies and research related to insecure deserialization. |
| 2 | [Detecting Jackson Deserialization Vulnerabilities with Codeql.html](https://blog.gypsyengineer.com/en/security/detecting-jackson-deserialization-vulnerabilities-with-codeql.html) | Published case studies and research related to insecure deserialization. |

## Recommended Learning Path

1. Read the topic overview and note the relevant defensive guidance.
2. Work through the practice labs in their intended training environments.
3. Review the research references for context, then focus on prevention and secure design.
4. Apply the lessons only to systems you own or are explicitly authorized to assess.
