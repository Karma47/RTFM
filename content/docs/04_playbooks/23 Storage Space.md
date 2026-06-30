---
title: "[23] Storage Capacity and Availability"
date: 2026-06-30
authors:
  - Prasanna
---

{{< meta >}}

# 📘 Topic: Storage Capacity and Availability

**Domain:** D7 – Security Operations  
**Tags:** #cissp

---

## 🧾 Definition

Storage space issues can threaten logging, backup, recovery, and overall system availability. Capacity planning is therefore a security and operational control, not just an infrastructure concern.

---

## 🔑 Key Points

- Monitor disk utilization and define thresholds for warnings and alarms.
- Ensure logs, backups, and snapshots have sufficient capacity.
- Retention policies should balance business needs with storage cost and compliance.
- Storage exhaustion can cause log loss, failed backups, and blind spots during incidents.
- Scale-out storage or archival solutions may be needed for long-term growth.

---

## ⚠️ CISSP Insight

- Availability can be impacted by simple capacity failures, especially when monitoring or backup systems stop functioning.
- Security teams must treat storage growth as a resilience issue.

---

## ⚔️ Key Difference / Trap

- **Adding storage is not always the real fix**
  - The real issue may be poor retention, missing monitoring, or oversized logs
- **Backups must be tested**
  - Capacity alone does not guarantee recoverability

---

## 🏗️ Example

A SIEM server begins to run out of disk space. If logging stops, security detection and investigation quality decline, so the team must add capacity and review retention settings.

---

## 📚 References

- NIST SP 800-53, CP family and AU family
- ISO/IEC 27001:2022, Annex A 8.15 and 8.16

---

## 🔁 Quick Recall

- Full disk = risk to logging and recovery
- Capacity planning = availability control
