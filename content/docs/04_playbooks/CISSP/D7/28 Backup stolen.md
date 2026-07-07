---
---
title: "[03] CISSP Cheatsheet - Stolen Backups and Media Protection"
date: 2026-07-05
authors:
  - Your Name
---

{{< meta >}}

# 📘 Topic: Stolen Backups and Media Protection

**Domain:** D7 – Security Operations  
**Tags:** #cissp #backup #encryption

---

## 🧾 Definition

Protecting backup media (tape, removable drives, cloud snapshots) from theft or unauthorized access through encryption, access controls, transport protection, and secure disposal.

---

## 🔑 Key Points

- Encrypt backups at rest with strong algorithms and protect keys with secure key management.
- Use access controls and logging for backup systems; restrict physical access during transport and storage.
- Implement tamper-evident seals and custody procedures for removable media.
- For cloud backups, ensure provider-side encryption, customer-managed keys, and proper IAM controls.

---

## ⚠️ CISSP Insight

- Loss of backup media can lead to data breaches; encryption and key management are essential to maintain confidentiality and compliance.

---

## ⚔️ Key Difference / Trap

- **Encrypting data vs protecting keys**
  - Encrypting backups is necessary but insufficient if keys are exposed.
- **Trap:** Assuming cloud snapshot is protected by provider without verifying key ownership and access controls.

---

## 🏗️ Example

An organization encrypts tape backups with AES-256 and stores encryption keys in an HSM; tapes are transported in secured containers with dual custody logging.

---

## 📚 References

- NIST SP 800-88 Rev.1 — Guidelines for Media Sanitization
- NIST SP 800-57 — Recommendation for Key Management
- ISO/IEC 27001:2022

---

## 🔁 Quick Recall

- Encrypt backups, protect keys, control custody, and sanitize retired media
