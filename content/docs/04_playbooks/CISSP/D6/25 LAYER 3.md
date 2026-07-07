---
title: "[03] CISSP Cheatsheet - Layer 3 Networking (Routing & Segmentation)"
date: 2026-07-05
authors:
  - Your Name
---

{{< meta >}}

# 📘 Topic: Layer 3 Networking (Routing & Segmentation)

**Domain:** D6 – Security Engineering  
**Tags:** #cissp #networking

---

## 🧾 Definition

Layer 3 refers to the network layer (IP) responsible for routing packets between networks. Layer-3 devices (routers, layer-3 switches) enable routing, segmentation, and enforcement of routing policies to control traffic flow and reduce broadcast domains.

---

## 🔑 Key Points

- Layer-3 segmentation reduces broadcast traffic and limits lateral movement.
- Routing protocols (OSPF, BGP) determine path selection and must be securely configured.
- Access control lists (ACLs) and routing policies enforce security at layer 3.
- Misconfigurations in routing can create traffic leaks or expose internal networks.

---

## ⚠️ CISSP Insight

- CISSP emphasis: understand how network architecture supports confidentiality, integrity, and availability. Proper segmentation is a fundamental control to limit attack surface and contain incidents.

---

## ⚔️ Key Difference / Trap

- **Layer 2 vs Layer 3 segmentation**
  - Layer 2 segmentation (VLANs) isolates at the data link level but can still be bridged
  - Layer 3 segmentation enforces network boundaries via routing and ACLs
- **Trap:** Assuming VLANs alone stop lateral movement; routing ACLs and firewall controls are often required.

---

## 🏗️ Example

An enterprise deploys layer-3 routed interfaces between VLANs and applies ACLs to restrict traffic from user VLANs to the server VLAN, preventing undesired lateral access.

---

## 📚 References

- RFC 791 — Internet Protocol
- NIST SP 800-125 and SP 800-115 for network configuration and testing
- CIS Controls and network segmentation guidance

---

## 🔁 Quick Recall

- Layer 3 = routing + segmentation; use ACLs and secure routing to limit lateral movement
