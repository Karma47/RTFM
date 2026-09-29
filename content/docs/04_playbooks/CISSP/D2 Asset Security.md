---
title: D2 Asset Security
date: 2026-09-29
authors:
  - Prasanna
---

{{< meta >}}

---
### Domain 2 Cheat Sheet

![](/docs/04_playbooks/cissp/assets/Pasted_image_20260930001319.png)

---

## Data Roles & Responsibilities

| Role | Definition | Example |
|------|------------|---------|
| **Data Owner** | Think of a business that is responsible for all of its client(s)/customer(s) data | Business responsible for customer data |
| **User/Subject** | The person that the data is about | Your hospital records |
| **Data Processor** | An entity that uses the Subject's data | A marketing company that buys data for targeted ads |
| **Custodian** | Locks, backups and guards the data. Ensures A/I (CIA), like a Datacenter | Datacenter protecting data |
| **Controller** | Decides how to use your data | YouTube algorithm studies your patterns to suggest new content |

---

## Data States & Protection

| Data State | How to Protect | Example |
|------------|----------------|---------|
| **At Rest** | Encryption (AES, DLP, CLE) | Personal photos encrypted on disk with BitLocker |
| **In Transit** | Network security (VPN, TLS, SSH) | Photos sent via end-to-end encrypted channel (WhatsApp/Signal) |
| **In Use** | Access controls, EDR, Secure coding etc | Photos decrypted in memory only while you see it (DRM) |

---

## Secure Data Destruction

| Method                        | Classification                                                                                   |
| ----------------------------- | ------------------------------------------------------------------------------------------------ |
| **⚠️ INSECURE DESTRUCTION**   | Erasing, Clearing, Purging                                                                       |
| **✅ SECURE DATA DESTRUCTION** | Degaussing, Cryptographic Erasure, Incineration, Shredding, Disintegration, Pulverizing, Melting |

---

## Asset Retention

| Consideration | Details |
|---------------|---------|
| **EOL/EOS** (End of Life/End of Support) | In both cases business ops is considered priority; if the business is willing to take the risk they can be used until they fail |
| **Other Considerations** | Data retention policies, secure disposal and Vulnerability Management |

---

## DRM vs DLP vs CASB

| Aspect | DRM | DLP | CASB |
|--------|-----|-----|------|
| **Focus** | Content protection and access control | Data leak prevention and sensitive information protection | Cloud service security and visibility |
| **Scope** | Primarily digital content and software | All sensitive data within an organization | Cloud services and applications |
| **Primary Users** | Content creators, publishers, and distributors | Organizations handling sensitive data (e.g., financial, healthcare) | Organizations heavily utilizing cloud services |
| **Implementation** | Embedded in content or software | Network, endpoint, and cloud-based | Mostly as a cloud service, but can be on-premises |

---

## Data Remanence

**Definition:** Traces of data left after deletion, this can be recovered and poses a security risk. Hence avoid data remanence with low level formats.

---

## Asset Types

| Type | Description | Examples |
|------|-------------|----------|
| **Tangible Assets** | Things you can touch, see and feel | Hardware, documents, devices |
| **Intangible Assets** | Things you cannot touch, see and feel | Software, License, IP |

---

## Secure Provisioning

### Secure Hardware Provisioning
- Secure supply chain for hardware procurement
- Secure key management (HSMs/TPMs)
- Formal process for secure wiping before disposal

### Secure Software Provisioning
- Centralized repository with approved, vetted applications for users to download and install

### Secure Cloud Resource Provisioning
- Approved service catalogue
- IAM controls
- Standardized templates (Infrastructure as Code)
- Configuration enforcement (e.g., preventing public S3 buckets)
- Cost and compliance monitoring

---
