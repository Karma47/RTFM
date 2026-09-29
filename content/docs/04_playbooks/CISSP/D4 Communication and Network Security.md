---
title: D4 Communication and Network Security
date: 2026-09-29
authors:
  - Prasanna
---

{{< meta >}}

---
### Domain 4 Cheat Sheet

![](/docs/04_playbooks/cissp/assets/Pasted_image_20260930001454.png)

---

## Design Concepts

| Design Concept | What It Changes | Concrete Example | High-Yield Correction |
|----------------|-----------------|------------------|----------------------|
| **Firewall + DMZ** | Controls flow between trust zones | Place public reverse proxy/web tier in DMZ; keep database internal | A firewall is multihomed; the DMZ is not the database tier |
| **NAC / 802.1X** | Admits user/device before access | Quarantine unmanaged/BYOD; posture check then role-based VLAN | Agentless/clientless endpoints provide less telemetry than EDR agents |
| **Detection Placement** | Passive visibility vs active prevention | IDS receives TAP/SPAN copy in promiscuous mode; IPS is inline | Port mirroring supports IDS; IPS must sit in the traffic path |
| **Wireless / Zero Trust** | Strong authentication; no implicit location trust | WPA3-Personal uses SAE; Enterprise uses 802.1X/EAP; require PMF | GCMP is a cipher; SAE vs 802.1X is the key distinction |

---

## Secure Communications — Tunneling Is Not the Same as Encryption

| Protocol | Description |
|----------|-------------|
| **Browser → Server** | TLS protects application traffic; validate the server certificate |
| **Key Establishment** | Diffie–Hellman derives a shared secret; it does not authenticate by itself |
| **Bulk Encryption** | AES protects the session data efficiently after the key is established |
| **GRE / L2TP** | GRE encapsulates using an outer destination IP; L2TP tunnels PPP. Neither means "encrypted." |
| **IPsec ESP** | ESP adds confidentiality, integrity/authentication and anti-replay options |

> **HIGH-YIELD:** Symmetric crypto is computationally efficient; asymmetric crypto solves identity/key-establishment problems. Out-of-band exchange can bootstrap a shared secret.

---

## Penetration Testing Types

| Type | Description |
|------|-------------|
| **Black Box** | Tester has no prior knowledge of the target environment |
| **Grey Box** | Tester has partial knowledge of the target environment |
| **White Box** | Tester has complete knowledge of the target environment |

---

## Penetration Testing Guidelines

| Listed Concept | Required Action | Why It Matters |
|----------------|-----------------|----------------|
| **Evidence of a Real Incident** | Pause the affected test activity and notify the named contact in the rules of engagement | Avoid contaminating evidence or worsening an active compromise |
| **Stay Within Authorization** | Do not investigate beyond approved scope unless formally authorized | A tester is not automatically the incident-response team |
| **Preserve Test Steps** | Keep timestamps, commands, screenshots, payload hashes and affected assets | Supports reproducibility, accountability and the final report |
| **Do Not Erase Proof** | Retain testing records and evidence; do not conceal exploitation activity | Deleting traces destroys the audit trail and can look malicious |
| **Controlled Cleanup** | Remove test accounts/files and restore changes only as agreed—while preserving records | Returns systems safely without losing evidence |

---

## Alert Fatigue Clues

| Clue | Meaning / Response |
|------|--------------------|
| **Duplicate Alerts** | Group 500 repeats into one incident |
| **Poor Thresholds** | Baseline normal activity, then tune the rule |
| **No Context** | Add user, asset criticality, vulnerability and threat data |
| **Manual Overload** | Automate safe enrichment and known-benign closure |
| **Tuning Risk** | Do not just disable noise; measure false positives and misses |

---

## SOC 3 Report Aspects

| SOC 3 Aspect | What It Means | Example | Exam Distinction |
|--------------|---------------|---------|------------------|
| **Audience** | General-use report for broad audiences | A restaurant displays a hygiene certificate for any customer to see | SOC 3 is suitable for public distribution |
| **Content Level** | High-level assurance, not detailed control test results | A report card shows "passed," not every answer sheet | Less detail than a restricted-use SOC 2 report |
| **Purpose** | Communicate assurance over relevant trust services criteria | Cloud provider posts an assurance report on its website | It is an attestation report—not a penetration-test report |
| **Distribution** | May be shared publicly without the restricted audience of SOC 2 | A public brochure versus a confidential auditor binder | Public disclosure clue → SOC 3 |
| **Selection Clue** | Choose when customers need public assurance | Prospect wants proof before signing up, but no sensitive details | Detailed control evidence → ask for the appropriate SOC 2 report |

---

## Configuration Management Tools

| Tool | Transport / Port | Model |
|------|------------------|-------|
| **Puppet** | TCP 8140 by default | Agent checks in with server |
| **Ansible** | SSH · TCP 22 by default | Agentless push |
| **Salt** | ZeroMQ · TCP 4505/4506 | Master publishes; minions return data |
| **Chef** | HTTPS · TCP 443 | Client pulls recipes/policies |

---

## KPI vs KRI Comparison

| Aspect | KPI (Key Performance Indicator) | KRI (Key Risk Indicator) |
|--------|--------------------------------|--------------------------|
| **Purpose** | Performance & success | Potential risks & threats |
| **Time** | Past / current | Predict future risk |
| **Trigger** | Improve performance | Mitigate risk |
| **Overlap** | Same metric can serve both | Phishing fail rate |
| **Influence** | KRI shifts strategy | KPI tunes thresholds |
| **Reporting** | Program effectiveness | Internal risk decisions |

---

## Penetration Testing Process

 Reconnaissance → Enumeration → Vuln Analysis → Exploitation → Reporting