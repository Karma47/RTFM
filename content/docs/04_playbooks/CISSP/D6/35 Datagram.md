---
---
title: "[03] CISSP Cheatsheet - Datagram (UDP & Connectionless Protocols)"
date: 2026-07-05
authors:
  - Your Name
---

{{< meta >}}

# 📘 Topic: Datagram (UDP & Connectionless Protocols)

**Domain:** D6 – Security Engineering  
**Tags:** #cissp #networking #udp

---

## 🧾 Definition

A datagram is a self-contained, connectionless packet typically associated with the User Datagram Protocol (UDP). Datagram delivery is best-effort and does not guarantee ordering, delivery, or duplicate protection.

---

## 🔑 Key Points

- UDP/datagram protocols are lightweight and used for DNS, DHCP, RTP, and some real-time applications.
- Lack of connection state makes them susceptible to spoofing and amplification attacks.
- Security controls include filtering, rate limiting, and application-layer protections.

---

## ⚠️ CISSP Insight

- CISSP focus: know protocol characteristics and how they influence security design (e.g., when to use TCP vs UDP and how to mitigate UDP risks).

---

## ⚔️ Key Difference / Trap

- **UDP vs TCP**
  - UDP = connectionless, no guarantees
  - TCP = connection-oriented, reliable
- **Trap:** Assuming UDP traffic is harmless; it can be abused for DDoS amplification.

---

## 🏗️ Example

An attacker spoofs UDP DNS queries to an open resolver to amplify a DDoS attack; defenders mitigate by restricting open resolvers and applying rate limits.

---

## 📚 References

- RFC 768 — User Datagram Protocol (UDP)
- NIST SP 800-115 — security testing and considerations
- OWASP and vendor guidance on UDP-based services

---

## 🔁 Quick Recall

- Datagram = UDP; lightweight but needs filtering and rate limiting to mitigate abuse
