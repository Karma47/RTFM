---
title: "[05] Account Termination and Deprovisioning"
date: 2026-06-30
authors:
  - Prasanna
---

{{< meta >}}

# 📘 Topic: Account Termination and Deprovisioning

**Domain:** D5 – Identity and Access Management  
**Tags:** #cissp

---

## 🧾 Definition

Account termination is the formal process of revoking access when a user leaves the organization, changes roles, or no longer needs a particular system. The secure approach is to disable access promptly while preserving auditability and later removing assets according to policy.

---

## 🔑 Key Points

- Disable the account immediately upon termination to prevent unauthorized access.
- Review access rights, group membership, shared credentials, and privileged roles before final deletion.
- Preserve logs, ownership information, and evidence for investigations and compliance.
- Remove or transfer access to business-critical systems in a controlled manner.
- Delete accounts only after the defined retention and review period has passed.

---

## ⚠️ CISSP Insight

- Deprovisioning is a key access control control point and should be tied to HR, IT, and security processes.
- The goal is to protect confidentiality, integrity, and accountability while reducing operational risk.

---

## ⚔️ Key Difference / Trap

- **Disable vs Delete**
  - Disable = temporary and reversible; preserves access context and evidence
  - Delete = permanent and final; may remove forensic value
- **CISSP Trap:** “Terminate employee → delete account immediately”
  - Wrong in most organizations because evidence and business continuity may be affected

---

## 🏗️ Example

An employee leaves the company today. The security team disables the account immediately, removes privileged access, transfers ownership of shared files, and retains the account for the defined audit period before permanent deletion.

---

## 📚 References

- ISC2 CISSP CBK, Domain 5 – Identity and Access Management
- NIST SP 800-53, AC-2 and AC-3
- ISO/IEC 27001:2022, Annex A 5.16 and 5.17

---

## 🔁 Quick Recall

- Termination = Disable now
- Deletion = Later, after review
- Disable = Safe
- Delete = Final
