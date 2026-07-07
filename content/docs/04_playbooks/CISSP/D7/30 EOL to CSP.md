---
---
title: "[03] CISSP Cheatsheet - End-of-Life (EOL) Systems and Migration to CSPs"
date: 2026-07-05
authors:
  - Your Name
---

{{< meta >}}

# 📘 Topic: End-of-Life (EOL) Systems and Migration to Cloud Service Providers (CSPs)

**Domain:** D7 – Security Operations / D1 – Security and Risk Management  
**Tags:** #cissp #cloud #migration

---

## 🧾 Definition

EOL to CSP covers planning and executing migration from end-of-life on-premises systems to cloud service providers, including data migration, decommissioning, and ensuring security and compliance in the cloud.

---

## 🔑 Key Points

- Perform inventory and data classification to prioritize migration of EOL assets.
- Apply secure migration practices: data sanitization, encryption, validation, and testing.
- Review CSP shared responsibility models, SLAs, and compliance posture.
- Plan decommissioning, data sanitization (NIST SP 800-88), and contractual exit strategies.

---

## ⚠️ CISSP Insight

- Migration is both a security and governance activity; failure to sanitize decommissioned assets or misconfigure cloud services can introduce new risks.

---

## ⚔️ Key Difference / Trap

- **Cloud shared responsibility**
  - Understand what the provider secures vs what the customer must secure (data, identities, configurations).
- **Trap:** Assuming CSP handles all security; misconfigured cloud resources (e.g., public buckets) cause breaches.

---

## 🏗️ Example

An organization migrates an EOL database to a managed DB service with encryption at rest, customer-managed keys, network restrictions, and post-migration validation to ensure access controls remain correct.

---

## 📚 References

- NIST SP 800-88 Rev.1 — Guidelines for Media Sanitization
- NIST Cloud Computing Security Reference and SP 800-144
- Vendor shared responsibility documentation (AWS, Azure, GCP)

---

## 🔁 Quick Recall

- Inventory → classify → migrate securely → sanitize EOL systems; verify CSP responsibilities
