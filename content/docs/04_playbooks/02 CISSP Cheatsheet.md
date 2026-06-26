---
title: "[02] CISSP Cheatsheet"
date: 2026-03-19
authors:
  - Prasanna
  - Keren
---

{{< meta >}}

## 2.1 Social Engineering Attacks

**Description:**  
Social engineering refers to psychological manipulation of people to perform actions or disclose confidential information

**Concepts:**  
- Shoulder Surfing → Observing someone’s screen/keyboard to capture sensitive data  
- Tailgating → Following an authorized person into a restricted area  
- Impersonation → Pretending to be someone else (e.g., IT support)  
- Dumpster Diving → Retrieving sensitive info from discarded materials  

**CISSP Insight:**  
These attacks bypass technical controls → focus on **human vulnerability**.  
Mitigation = **Security Awareness + Physical Security Controls**

**Explanation:**  
Even the strongest encryption is useless if a user reveals credentials. CISSP emphasizes **people as the weakest link**.

**Q/A:**  
Q: Which attack exploits physical proximity without hacking systems?  
A: Shoulder Surfing  

**References:**  
- https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks  

---

## 2.2 Reporting Structure (InfoSec Governance)

**Description:**  
Defines organizational placement of information security.

**Explanation:**  
InfoSec should report to **CIO or CISO** for operational alignment.  
Internal Audit must remain **independent** to objectively assess controls.

**CISSP Insight:**  
This tests **governance and independence principles**, not technical knowledge.

**Q/A:**  
Q: Why is reporting to Internal Audit incorrect?  
A: It violates independence  

**References:**  
- https://www.isaca.org/resources/isaca-journal  

---

## 2.3 DMZ Traffic Capture

**Description:**  
Monitoring network traffic in a switched environment.

**Explanation:**  
Switches forward traffic only to intended destinations. Without SPAN/mirroring, you only see:
- Broadcast traffic  
- Traffic destined to your NIC  

**CISSP Insight:**  
Understand **network architecture behavior**, not just tools.

**Q/A:**  
Q: Why can't you see all traffic on a switch?  
A: MAC-based forwarding  

**References:**  
- https://www.wireshark.org/docs/  

---

## 2.4 Incident Response Lifecycle

**Description:**  
Structured process for handling incidents.

**Phases:**  
- Preparation  
- Detection  
- Response  
- Recovery  

**Explanation:**  
Backup is a **supporting control**, not a phase.

**CISSP Insight:**  
Focus on **process lifecycle thinking**

**Q/A:**  
Q: Which is not part of IR lifecycle?  
A: Backup  

**References:**  
- https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf  

---

## 2.5 Network Segmentation

**Description:**  
Dividing networks to improve performance and security.

**Explanation:**  
- Router → separates broadcast domains  
- Switch → separates collision domains  

**CISSP Insight:**  
Segmentation reduces **attack surface and lateral movement**

**Q/A:**  
Q: Which device reduces broadcast traffic?  
A: Router  

---

## 2.6 NATO Phonetic Alphabet

**Description:**  
Standardized word system (Alpha, Bravo, Charlie) for communication clarity.

**Explanation:**  
Used in aviation/military to avoid misunderstanding. Not encryption.

**CISSP Insight:**  
Tests ability to **differentiate communication vs security controls**

**Q/A:**  
Q: Is this a confidentiality control?  
A: No  

---

## 2.7 Security Models

**Description:**  
Formal frameworks for enforcing access control.

**Explanation:**  
- Chinese Wall → prevents conflict of interest  
- Take-Grant → models permission transfer  
- Noninterference → prevents information leakage  
- Information Flow → restricts data movement  

**CISSP Insight:**  
Know **purpose of models**, not math

**Q/A:**  
Q: Which model stops insider conflict misuse?  
A: Chinese Wall  

---

## 2.8 Split-Brain DNS

**Description:**  
Using separate DNS views for internal vs external users.

**Explanation:**  
Internal users see private IPs; external users see public IPs.

**CISSP Insight:**  
Protects **information disclosure (confidentiality)**

**Q/A:**  
Q: Why use split DNS?  
A: Hide internal infrastructure  

---

## 2.9 Disaster Recovery Sites

**Description:**  
Alternate locations for business continuity.

**Explanation:**  
- Hot → fully operational  
- Warm → partially configured  
- Cold → basic infrastructure  

**CISSP Insight:**  
Trade-off between **cost vs recovery time (RTO)**

**Q/A:**  
Q: Which has lowest RTO?  
A: Hot site  

---

## 2.10 Brute Force Defense

**Description:**  
Attack that tries all possible passwords.

**Explanation:**  
Defenses:
- Strong passwords  
- Account lockout  
- MFA  

**CISSP Insight:**  
Focus on **preventive + detective controls**

**Q/A:**  
Q: Best mitigation for online brute force?  
A: Account lockout  

---

## 2.11 OCSP

**Description:**  
Online Certificate Status Protocol.

**Explanation:**  
Checks certificate validity in real time instead of downloading CRLs.

**CISSP Insight:**  
Improves **availability and timeliness** of revocation checks

**Q/A:**  
Q: Why use OCSP over CRL?  
A: Real-time validation  

---

## 2.21 Blockchain

**Description:**  
A distributed ledger that records transactions across multiple nodes.

**Explanation:**  
- Immutable → cannot be altered  
- Decentralized → no central authority  
- Transparent → all participants can verify  

**CISSP Insight:**  
Supports **integrity and non-repudiation**

**Q/A:**  
Q: What security property does blockchain strongly provide?  
A: Integrity  

---

## 2.22 Password Hashing

**Description:**  
Converting plaintext passwords into fixed-length hashed values.

**Explanation:**  
- One-way function  
- Same input → same output  
- Uses salt to prevent rainbow table attacks  

**CISSP Insight:**  
Supports **confidentiality of stored credentials**

**Q/A:**  
Q: Why add salt to hashes?  
A: Prevent precomputed attacks  

---

## 2.23 Shared Responsibility Model (IaaS)

**Description:**  
Defines security responsibilities between cloud provider and customer.

**Explanation:**  
Customer manages:
- OS  
- Applications  
- Data  

Provider manages:
- Hardware  
- Physical security  

**CISSP Insight:**  
Very commonly tested → **“who is responsible?”**

**Q/A:**  
Q: Who secures the OS in IaaS?  
A: Customer  

**References:**  
- https://aws.amazon.com/compliance/shared-responsibility-model/  

---

## 2.26 BGP (Border Gateway Protocol)

**Description:**  
BGP is the routing protocol used to exchange routing information between autonomous systems (AS) on the internet.

**Explanation:**  
- Operates at WAN/Internet level  
- Determines best path between networks  
- Uses path attributes, not just shortest distance  

**CISSP Insight:**  
Critical to understand for:
- Internet routing  
- Risks like **BGP hijacking**  

**Q/A:**  
Q: Where is BGP primarily used?  
A: Internet (WAN)  

**References:**  
- https://datatracker.ietf.org/doc/html/rfc4271  

---

## 2.29 Replay Attack Mitigation

**Description:**  
Replay attacks reuse captured communication to gain unauthorized access.

**Explanation:**  
Nonce = random number used once → ensures freshness of request  

**CISSP Insight:**  
Protects **authentication integrity**

**Q/A:**  
Q: Why use a nonce?  
A: Prevent reuse of captured messages  

---

## 2.30 SAML

**Description:**  
Security Assertion Markup Language used for federated authentication.

**Explanation:**  
- Identity Provider (IdP) → authenticates user  
- Service Provider (SP) → provides service  
- Assertions → authentication statements  

**CISSP Insight:**  
Core concept in **SSO and federation**

**Q/A:**  
Q: Who sends SAML assertions?  
A: Identity Provider  

**References:**  
- https://docs.oasis-open.org/security/saml/  