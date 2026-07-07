---
---
title: "[03] CISSP Cheatsheet - SAML (Security Assertion Markup Language)"
date: 2026-07-05
authors:
  - Your Name
---

{{< meta >}}

# 📘 Topic: SAML (Security Assertion Markup Language)

**Domain:** D5 – Identity and Access Management  
**Tags:** #cissp #federation #sso

---

## 🧾 Definition

SAML is an XML-based framework for exchanging authentication and authorization data between an Identity Provider (IdP) and a Service Provider (SP), enabling single sign-on (SSO) and federation across domains.

---

## 🔑 Key Points

- SAML actors: Principal (user), Identity Provider (IdP), Service Provider (SP).
- Assertions convey authentication, attribute, and authorization statements.
- Security depends on proper signing, timestamping, and assertion validation to prevent replay and forgery.
- SAML is commonly used for enterprise SSO and federation scenarios.

---

## ⚠️ CISSP Insight

- Understand SAML flows (browser SSO redirects, POST bindings) and common attack vectors such as assertion replay, signature stripping, and XML external entity issues.

---

## ⚔️ Key Difference / Trap

- **IdP vs SP responsibilities**
  - IdP = authenticates user and issues assertions
  - SP = consumes assertions and grants access
- **Trap:** trusting unsigned assertions or misconfiguring audience/recipient values leading to assertion misuse.

---

## 🏗️ Example

An employee authenticates at the corporate IdP; the IdP issues a signed SAML assertion consumed by a cloud HR application (SP) that grants access based on attributes in the assertion.

---

## 📚 References

- OASIS SAML v2.0 specification
- NIST SP 800-63 and SAML integration guidance
- OWASP SAML Security Cheat Sheet

---

## 🔁 Quick Recall

- SAML = IdP issues signed assertions → SP consumes; validate signature, audience, timestamps
