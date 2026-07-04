---
title: "[18] Hierarchical Security Model"
date: 2026-06-30
authors:
  - Prasanna
---

{{< meta >}}

# 📘 Topic: Hierarchical Security Model

**Domain:** D5 – Identity and Access Management  
**Tags:** #cissp

---

## 🧾 Definition

A hierarchical security model organizes subjects and objects into ordered levels and uses the structure to enforce access rules. It is closely associated with lattice-based and mandatory access control approaches.

---

## 🔑 Key Points

- Access is determined by a clear ordering of security levels.
- A common example is the Bell-LaPadula model, which enforces confidentiality by restricting reads and writes.
- This is a mandatory model, not a simple role hierarchy.
- It is particularly relevant for environments that require strict labels and classification.

---

## ⚠️ CISSP Insight

- CISSP candidates should understand the purpose of the model and how it differs from DAC or RBAC.
- It is important for highly sensitive environments where data classification is enforced by the system.

---

## ⚔️ Key Difference / Trap

- **Hierarchical model vs role hierarchy**
  - Hierarchical security model = labels and mandatory access rules
  - Role hierarchy = organizational grouping of permissions
- **Not the same as general “manager/subordinate” hierarchy**

---

## 🏗️ Example

A Top Secret document can only be read by users with Top Secret clearance, while users at lower levels cannot access it.

---

## 📚 References

- Bell-LaPadula Model
- NIST SP 800-53, AC-3
- ISC2 CISSP CBK, Domain 5

---

## 🔁 Quick Recall

- Hierarchical model = label-based access
- Mandatory + classification = key idea
