---
title: "[04] Access Control Models"
date: 2026-06-30
authors:
  - Prasanna
---

{{< meta >}}

# 📘 Topic: Access Control Models

**Domain:** D5 – Identity and Access Management  
**Tags:** #cissp

---

## 🧾 Definition

Access control models define how subjects are allowed to interact with objects based on rules, labels, roles, or attributes. They are the foundation of least-privilege and authorization design.

---

## 🔑 Key Points

- **DAC**: Owners control access; flexible but weaker and harder to enforce consistently.
- **MAC**: The system enforces labels and rules; strong and often used in high-security environments.
- **RBAC**: Access is granted based on roles; common in enterprise systems and easier to manage.
- **ABAC**: Access is granted based on attributes such as role, location, time, device, or data classification.
- CISSP emphasis: choose the model that fits sensitivity, scalability, and operational needs.

---

## ⚠️ CISSP Insight

- The strongest model is not always the best fit; the right model balances security, usability, and governance.
- Least privilege should be enforced regardless of the model selected.

---

## ⚔️ Key Difference / Trap

- **DAC vs MAC**
  - DAC = owner-driven access
  - MAC = system-enforced labels
- **RBAC vs ABAC**
  - RBAC = role-based
  - ABAC = role + context

👉 Keywords:

- Role → RBAC
- Time / Location / Device → ABAC
- Classification → MAC
- Owner → DAC

---

## 🏗️ Example

- DAC → a file owner grants access to another user
- MAC → a secret-level document is only accessible to users with the matching clearance
- RBAC → an HR role can access employee records
- ABAC → a finance manager can access reports only during business hours from the corporate network

---

## 📚 References

- ISC2 CISSP CBK, Domain 5 – Identity and Access Management
- NIST SP 800-53, AC family
- NIST SP 800-162, Guide to Attribute Based Access Control (ABAC)

---

## 🔁 Quick Recall

- DAC = Owner
- MAC = Label
- RBAC = Role
- ABAC = Context
