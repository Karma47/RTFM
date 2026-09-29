---
title: D5 Identity and Access Management
date: 2026-09-29
authors:
  - Prasanna
---

{{< meta >}}

---
### Domain 5 Cheat Sheet

![](/docs/04_playbooks/cissp/assets/Pasted_image_20260930001549.png)

---

## DR Site Types

| DR Site Type | Expense | Value | Example |
|--------------|---------|-------|---------|
| **Hot** | Expensive | Can test parallelly, immediate uptime | It's like having a second house, you can just walk in with your key, and you are all set |
| **Warm** | Moderate | Cannot test parallelly, delayed uptime requires efforts | It's like having a second house, but with no electricity, utilities, will take time to setup |
| **Cold** | Low Cost | Bare minimum to restart the business, only data & essentials | It's like having just a piece of land, you need to build a house |

---

## Insider Threats

| Insider Type | Description | Example |
|--------------|-------------|---------|
| **Malicious Insider** | An employee that causes harm with intent | Leaking confidential information to public or stealing source code |
| **Negligent Insider** | A careless person that accidentally causes harm | Accidentally leaking API keys |
| **Compromised Insider** | A legitimate user that is tricked | Employee clicking malicious link |

---

## SIEM & UEBA Workflow

**UEBA:** Detect anomalies in user and entity behaviors within an organizational network

**Example:** A Sales employee running PowerShell script is suspicious. CrowdStrike XDR can do these at endpoints.

### How It Works
- Continuous monitoring
- Anomaly detection
- Risk scoring
- Alert generation

### Use Cases
- Insider threat detection
- Privilege account abuse
- Data exfiltration
- APTs (Advanced Persistent Threats)

---

## Reliability & Resilience Concepts

| Concept | Explanation |
|---------|-------------|
| **SPOF** (Single Point of Failure) | Your house has only one key, and if you lose it, nobody can enter |
| **Storage Resiliency** | Keep your photos on 2 hard drives; if losing BitLocker keys to one doesn't lose your photos |
| **Clustering** | Three people are doing the same work; if one gets sick, the other two continue |
| **Load Balancing** | 30 people want ice cream; three shops serve them instead of everyone going to one shop |
| **Remote Journaling** | You write down everything you do in your notebook and keep a copy at your friend's house |
| **Remote Mirroring** | Every time you draw a picture, your friend draws the exact same picture at the same time |
| **Electronic Vaulting** | Every night, you send a copy of your homework to your teacher's house for safekeeping |

---

## MTA (Maximum Tolerable Downtime)

| Concept | Explanation |
|---------|-------------|
| **MAO/MTD** (Maximum Allowable Outage / Maximum Tolerable Downtime) | Ice-cream shop can survive being closed for 2 hrs, but after that the business is in trouble |

---

## Change Management Process
1. Policy & Process ↓
2. CAB Review ↓
3. Security Impact Assessment ↓
4. Test & Validate ↓
5. Deploy Change ↓
6. Monitor & Audit ↓
7. Lessons Learned

> **"Approve your CM requests"**

---

## WAF (Web Application Firewall)

> WAF: Any form of firewalls protect against only known vulns. They do not protect against unknown vulnerabilities.

---

## IDS vs IPS

> IDS & IPS sit in different network paths. IDS sniffs network packets in promiscuous mode for detection. While IPS sits in inline path to prevent intrusions.

---

## Backup Types Comparison

| Backup Type | Backup Speed | Restore Speed |
|-------------|--------------|---------------|
| **Full** | Slow | Fast |
| **Differential** | Medium | Medium |
| **Incremental** | Fast | Slow |

---

## Incident Management Lifecycle
RPO → RTO → Response → Recovery → Remediation → Restoration

### Key Terms
| Term | Definition |
|------|------------|
| **RPO** (Recovery Point Objective) | Maximum acceptable data loss measured in time |
| **RTO** (Recovery Time Objective) | Maximum acceptable downtime for system restoration |

---

## Evidence Handling

> **5 Rules of Evidence:** Authentic, Accurate, Complete, Convincing, Admissible

> System restore should be disabled when there is a malware infection.

---

## Password Security Reminder

> ⚠️ **Passwords are easy to thwart!**

---
