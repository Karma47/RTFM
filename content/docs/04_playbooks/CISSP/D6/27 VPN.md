---
---
title: "[03] CISSP Cheatsheet - VPN (Virtual Private Network)"
date: 2026-07-05
authors:
  - Your Name
---

{{< meta >}}

# 📘 Topic: VPN (Virtual Private Network)

**Domain:** D6 – Security Engineering  
**Tags:** #cissp #networking #remote

---

## 🧾 Definition

A VPN is a technology that creates an encrypted tunnel over an untrusted network (such as the Internet) to securely connect remote users or sites to corporate resources. Common VPN types include IPsec (site-to-site) and SSL/TLS-based VPNs (remote access).

---

## 🔑 Key Points

- Types: IPsec (network-layer), SSL/TLS (transport/application-layer), and TLS-based client VPNs.
- Split tunneling sends only destined corporate traffic through the VPN; full tunneling routes all traffic via the corporate gateway.
- Authentication, strong encryption, and endpoint posture checks are critical.
- Consider performance impact, NAT traversal, and logging when designing VPNs.

---

## ⚠️ CISSP Insight

- VPNs support confidentiality and integrity for remote access but must be managed with proper authentication and endpoint controls to avoid becoming a threat vector.

---

## ⚔️ Key Difference / Trap

- **Split tunnel vs full tunnel**
  - Split tunnel = performance gains but potential exposure from unmanaged internet traffic
  - Full tunnel = centralized control and monitoring but higher bandwidth usage
- **Trap:** Assuming encryption alone equals security; weak endpoints or stolen credentials still enable compromise.

---

## 🏗️ Example

An organization configures VPN clients to use MFA and device posture checking; remote users must have up-to-date patches before VPN negotiation succeeds.

---

## 📚 References

- RFC 4301 — Security Architecture for the Internet Protocol (IPsec)
- NIST SP 800-77 — Guide to IPsec VPNs
- NIST SP 800-46 — Guide to Enterprise Telework, Remote Access, and BYOD Security

---

## 🔁 Quick Recall

- VPN = encrypted tunnel; enforce MFA, endpoint checks, and choose tunneling mode based on risk
