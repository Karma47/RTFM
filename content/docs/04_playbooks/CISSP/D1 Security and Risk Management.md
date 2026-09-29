---
title: D1 Security and Risk Management
date: 2026-09-29
authors:
  - Prasanna
---

{{< meta >}}

--- 
### Domain 1 Cheat Sheet
![](/docs/04_playbooks/cissp/assets/Pasted_image_20260930001202.png)

---

## Due Care & Due Diligence

| Type              | Definition                                                  | Examples                         |
| ----------------- | ----------------------------------------------------------- | -------------------------------- |
| **Due Care**      | Taking action to implement a requirement                    | I lock my door                   |
| **Due Diligence** | Implementation of the requirements in the best possible way | I installed the most secure lock |

---

## Intellectual Property

| Type | Definition | Examples |
|------|------------|----------|
| **Copyright** | Original creative works | Books, CISSP Material, Harry Potter books |
| **Patent** | Inventions | Invention, Dyson vacuum cleaner |
| **Trademark** | Source of identifiers | Logo, Google "G" |
| **Trade Secret** | Secret business information | Coca-Cola recipe |

---

## Criminal vs Civil Law

| Type | Description | Example |
|------|-------------|---------|
| **Criminal** | "Someone broke the law → Government goes after them" | Hacker steals credit card info → jail |
| **Civil** | "Two parties have a disagreement → One sues the other" | Company A sues Company B for copying their patented invention → pay damages |

---

## Employee Access Lifecycle

| Phase | Action |
|-------|--------|
| **Onboarding** | Provide access. When an employee is onboarded, we provide access and necessary training as per organization policy |
| **Transfer** | Review access. When an employee is transferred to other roles, their access should be reviewed and adjusted to the role |
| **Terminate** | Revoke access. When terminated, their access should be revoked, organization assets needs to be recovered |

---

## Risk Management Formula

| Formula | Meaning |
|---------|---------|
| **Risk = Likelihood × Impact** (or) **Threat × Vuln × Impact** | Basic risk calculation |
| **SLE = AV × EF** | Cost of a single incident |
| **ALE = SLE × ARO** | Expected yearly loss |
| **Residual = Total − Controls** | Risk remaining after safeguards |

---

## Risk Terms

| Term | Definition | Example |
|------|------------|---------|
| **Avoidance** | Not investing in a startup to avoid losing money | Not investing in a startup to avoid losing money |
| **Mitigation** | Installing antivirus after a malware infection | Installing antivirus after a malware infection |
| **Transference** | Buying insurance for a product that might fail | Buying insurance for a product that might fail |
| **Acceptance** | Using outdated components that might be vulnerable to exploits | Using outdated components that might be vulnerable to exploits |
| **Appetite** | Willingness to invest $ into unknown product with high risk | Willingness to invest $ into unknown product with high risk |
| **Tolerance** | Feeling comfortable losing some % of profits due to failed services | Feeling comfortable losing some % of profits due to failed services |
| **Limit** | Capping your bet at $100 in a casino | Capping your bet at $100 in a casino |
| **Capacity** | Having 6 months of savings so you can cover if you lost your job | Having 6 months of savings so you can cover if you lost your job |

---

## Frameworks

- **NIST 800-53 RMF**
- **NIST CSF**
- **NIST 800 SP**

---

## Social Engineering Attacks

| Attack | Description |
|--------|-------------|
| **Pharming** | Harvesting credentials |
| **Vishing** | Voice Phishing |
| **Dumpster Diving** | Accessing physical papers or assets from trash bins |
| **Pretexting** | False scenario to trick people |

---

## Risk Mitigations (Technical Controls)

| Control | Purpose |
|---------|---------|
| **SRoT** (Silicon Root of Trust) | Mobile phones verify if it's loading the right OS during boot process |
| **TPM** (Trusted Platform Module) | Windows BitLocker storing device encryption keys in laptop chip |
| **HSM** (Hardware Security Module) | Credit cards use HSM to protect ATM PINs and transactions |
| **PUF** (Physically Unclonable Function) | Usage of silicon fingerprint to identify fake iPhones |
| **SBOM** (Software Bill of Materials) | Identifying which software library is affected by a vulnerability |

---

## Security Awareness KPIs

| KPI | Purpose |
|-----|---------|
| **Failed Phishing Attempt** | You receive a phishing email, but do not fall for it. This KPI can be measured for successful training |
| **Effectiveness of Program** | Checking if your security awareness training is useful, by measuring KPI of phishing simulations |
| **Control Assessment** | Checking if security controls actually work as intended |
| **Data Retention** | How long should I store my data, usually as long as it's legally required |
| **GDPR Notification** | The legal duty to notify authorities of data breach within 72 hours, typically notify the EU regional bodies |
