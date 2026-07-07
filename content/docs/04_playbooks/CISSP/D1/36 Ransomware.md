---
title: "[36] SPAM"
date: 2026-06-30
authors:
  - Your Name
---

{{< meta >}}

# 📘 Topic: Topic Name

**Domain:** Dx – Domain Name  
**Tags:** #cissp

---
title: "[03] CISSP Cheatsheet - Ransomware"
date: 2026-07-05
authors:
  - Your Name
---

{{< meta >}}

# 📘 Topic: Ransomware

**Domain:** D7 – Security Operations  
**Tags:** #cissp #ransomware #malware

---

## 🧾 Definition

Ransomware is malicious software that encrypts or otherwise blocks access to data/systems and demands payment (ransom) for restoration. It often spreads via phishing, compromised RDP, or vulnerable services.

---

## 🔑 Key Points

- Preventive controls: phishing-resistant MFA, patching, network segmentation, least privilege.
- Detection: EDR, anomaly detection, file integrity monitoring.
- Recovery: immutable/backups, tested DR plans, and incident response playbooks.
- Legal and communication plans should be prepared in advance.

---

## ⚠️ CISSP Insight

- CISSP professionals should emphasize resilience: backups (offline/immutable), segmentation, and rapid detection to minimize impact.

---

## ⚔️ Key Difference / Trap

- **Pay vs not pay**
  - Paying does not guarantee recovery and funds criminal activity
  - Focus on backups and recovery capability instead of ransom negotiations
- **Trap:** Relying solely on backups without ensuring backups are isolated and tested.

---

## 🏗️ Example

An organization isolates infected hosts, restores systems from immutable backups, and conducts forensic analysis to identify entry vector and remediate vulnerabilities.

---

## 📚 References

- CISA Ransomware Guide and best practices
- NIST SP 800-184 — Guide for Cybersecurity Event Recovery
- NIST SP 800-61 — Incident Response

---

## 🔁 Quick Recall

- Ransomware = prevent (MFA, patching), detect (EDR), recover (immutable backups)
