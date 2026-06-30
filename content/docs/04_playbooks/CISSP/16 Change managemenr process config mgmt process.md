---
title: "[16] hange Management and Configuration Management"
date: 2026-06-30
authors:
  - Prasanna
---

{{< meta >}}

# 📘 Topic: Change Management and Configuration Management

**Domain:** D7 – Security Operations  
**Tags:** #cissp

---

## 🧾 Definition

Change management controls how changes are proposed, approved, tested, implemented, and reviewed. Configuration management maintains an authoritative record of system components and their approved baselines.

---

## 🔑 Key Points

- Changes should be documented, approved, and tested before deployment.
- Rollback plans reduce the impact of failed changes.
- Configuration baselines help detect unauthorized drift.
- Standard changes and emergency changes should follow defined procedures.

---

## ⚠️ CISSP Insight

- Poorly managed changes are a common source of incidents and security weaknesses.
- Governance around change is essential for maintaining integrity and reducing operational risk.

---

## ⚔️ Key Difference / Trap

- **Change management vs configuration management**
  - Change management = process for approving and implementing change
  - Configuration management = tracking and maintaining the approved state of systems
- **“Works in dev” does not mean it is safe in prod**

---

## 🏗️ Example

A patch is submitted through change management, reviewed by a change advisory board, tested in a staging environment, and then deployed with rollback procedures.

---

## 📚 References

- ITIL 4, Change Enablement
- NIST SP 800-128, Guide for Security-Focused Configuration Management of Information Systems
- NIST SP 800-53, CM family

---

## 🔁 Quick Recall

- Change management = controlled change
- Configuration management = approved baseline tracking
