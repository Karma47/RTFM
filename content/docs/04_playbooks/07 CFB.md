---
title: "[07] Cipher Feedback (CFB) Mode"
date: 2026-06-30
authors:
  - Prasanna
---

{{< meta >}}

# 📘 Topic: Cipher Feedback (CFB) Mode

**Domain:** D6 – Security Engineering  
**Tags:** #cissp

---

## 🧾 Definition

Cipher Feedback Mode is a block cipher mode of operation that turns a block cipher into a self-synchronizing stream-like mechanism. It uses previous ciphertext to produce the next keystream block.

---

## 🔑 Key Points

- CFB is a block cipher mode used for encryption.
- It can operate like a stream cipher and is useful for real-time data.
- It propagates errors from earlier ciphertext blocks.
- It is a legacy mode; modern systems usually prefer AEAD modes such as GCM or ChaCha20-Poly1305.

---

## ⚠️ CISSP Insight

- CISSP candidates should understand that encryption mode choice affects security properties, performance, and error behavior.
- Modern design should prefer authenticated encryption over legacy modes where possible.

---

## ⚔️ Key Difference / Trap

- **CFB vs ECB**
  - ECB encrypts identical plaintext blocks to identical ciphertext blocks
  - CFB avoids that pattern by chaining previous ciphertext
- **CFB vs CTR**
  - CFB is feedback-based
  - CTR uses a counter value for keystream generation

---

## 🏗️ Example

CFB may be used in legacy protocols where a block cipher is required in a stream-like fashion, but modern implementations usually prefer authenticated encryption.

---

## 📚 References

- NIST SP 800-38A, Recommendation for Block Cipher Modes of Operation
- NIST SP 800-57, Recommendation for Key Management

---

## 🔁 Quick Recall

- CFB = Feedback-based block cipher mode
- Modern choice = AEAD
