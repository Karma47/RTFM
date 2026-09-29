---
title: D3 Security Architecture and Engineering
date: 2026-09-29
authors:
  - Prasanna
---

{{< meta >}}

---

### Domain 3 Cheat Sheet

![](/docs/04_playbooks/cissp/assets/Pasted_image_20260930001411.png)

---

## Cryptography — Pick the Right Tool

| Step | Concept | What It Does | Picture It | Exam Cue |
|------|---------|--------------|------------|----------|
| **1** | Symmetric vs Asymmetric | One shared key = fast bulk encryption; public/private pair = identity or key establishment | House key vs locked mailbox | Hybrid systems use asymmetric to establish a symmetric session key |
| **2** | Client-Side Encryption (CSE) | Encrypt before upload; the provider receives ciphertext | Seal the box before the courier gets it | Key custody—not storage location—determines who can decrypt |
| **3** | Key Escrow / Split Knowledge | Escrow enables recovery; split knowledge requires multiple independent shares | Spare key with a trustee / two-person safe | Escrow adds recovery and insider risk; no one share reveals the key |
| **4** | Nonce vs Salt | Nonce: unique per protocol use; salt: non-secret value that makes each password hash unique | Ticket number vs unique seasoning | Never reuse a required nonce; salt defeats precomputed rainbow tables |
| **5** | Rainbow / Frequency / Ciphertext-Only | Precomputed hashes / pattern analysis / attacker sees ciphertext only | Lookup book / letter-count puzzle / sealed letters | Strong salted password hashing and modern ciphers remove useful patterns |
| **6** | Modes: ECB, CBC, CFB, OFB, CTR | Modes define how a block cipher processes more than one block | Different ways to tile and chain pages | CTR—not "CRT." ECB leaks patterns; IV/nonce rules vary by mode |

---

## Trust, Assurance & Vulnerability Language

| Path | Concept | What It Means | Picture It | Remember |
|------|---------|---------------|------------|----------|
| **1** | PKI + X.509 | PKI issues, maintains and revokes certificates; X.509 defines certificate/CRL profiles | Digital passport issued by a trusted office | Certificate binds an identity/name to a public key |
| **2** | Cross-Certification | Two CAs sign certificates for each other's public keys
