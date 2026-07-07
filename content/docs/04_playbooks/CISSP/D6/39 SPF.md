---
title: "[03] CISSP Cheatsheet - SPF (Sender Policy Framework)"
date: 2026-07-05
authors:
  - Your Name
---

{{< meta >}}

# 📘 Topic: SPF (Sender Policy Framework)

**Domain:** D6 – Security Engineering  
**Tags:** #cissp #email #authentication

---

## 🧾 Definition

SPF is an email authentication mechanism that allows domain owners to publish authorized sending IP addresses in DNS records (the SPF TXT record). Receiving mail servers check the sender’s SPF record to help detect and block forged sender addresses.

---

## 🔑 Key Points

- SPF uses DNS TXT records to list authorized mail senders for a domain.
- SPF helps prevent simple email spoofing but does not provide end-to-end integrity.
- SPF works best when combined with DKIM and DMARC for stronger protection.
- Misconfigured SPF records can result in mail delivery failures.

---

## ⚠️ CISSP Insight

- SPF supports authentication and non-repudiation efforts by reducing phishing risk.
- CISSP focus: understand how SPF fits into defense-in-depth for email security and the operational risk of DNS-based controls.

---

## ⚔️ Key Difference / Trap

- **SPF vs DKIM vs DMARC**
  - SPF verifies the sending IP against DNS records
  - DKIM verifies message integrity via signatures
  - DMARC provides policy and reporting across SPF/DKIM
- **Common trap:** Relying on SPF alone; it does not protect forwarded mail unless using Sender Rewriting.

---

## 🏗️ Example

An organization publishes an SPF record: "v=spf1 ip4:198.51.100.0/24 include:mail.example.net -all". A receiving mail server checks an incoming message’s originating IP against this record and marks messages from unauthorized IPs as failing SPF.

---

## 📚 References

- RFC 7208 — Sender Policy Framework (SPF) for Authorizing Use of Domains in Email
- DMARC specification and best practices
- NIST SP 800-177, Trustworthy Email

---

## 🔁 Quick Recall

- SPF = DNS list of authorized mail senders; use with DKIM + DMARC
