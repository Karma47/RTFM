---
title: Threat Hunting Challenge
description: Splunk Threat Hunting Labs
---
Null National Bank is a regional financial institution headquartered in Chennai, providing retail banking, corporate banking, wealth management, and digital financial services across multiple markets.

The bank operates a hybrid technology environment comprising on-premises infrastructure, cloud-hosted services, enterprise applications, and interconnected third-party platforms supporting its banking operations.

Its technology environment includes critical business systems responsible for customer authentication, financial transactions, payment processing, customer data management, and internal corporate operations.

Given the nature of its business, the availability, confidentiality, and integrity of its technology infrastructure are critical to maintaining customer trust, regulatory obligations, and uninterrupted financial services.

The organization maintains a centralised Security Operations Centre (SOC), supported by Endpoint Detection and Response (EDR), Security Information and Event Management (SIEM), network monitoring, and threat intelligence capabilities.

The SOC is responsible for monitoring the organization's technology environment, investigating suspicious activity, and proactively identifying potential threats that may bypass existing security controls.

#### Technical Architecture

![](/docs/05_detection/5.1_labs/assets/mermaid-diagram.png)

#### Scenario overview
The organization has received preliminary threat intelligence suggesting that it may be a target of a coordinated cyber campaign. The intelligence indicates potential adversarial interest in the organization, although the credibility, scope, and relevance of the information are still being assessed.

At this stage, there is no confirmed evidence of a successful compromise. However, the Intelligence Team believes the following infrastructure may be linked to the attack.

**Domain : `NullNationalBank.com`**

![](/docs/05_detection/5.1_labs/assets/01_init.drawio.png)

The network is segmented into two subnets, managed by the central router **IDS1**:

- **Internal Network (10.10.10.0/24):** Hosts employee workstations and internal servers.
- **DMZ (172.16.10.0/24):** Hosts DB1, WEB1, and MAIL1, exposing their respective services to the internet through NAT on IDS1.

Internal servers include:

- **FILE1:** Departmental file shares (SMB).
- **INTERNAL1:** Enterprise applications.
- **DC1:** Domain Controller for Meridian National Bank.

The **Splunk SIEM** centrally collects telemetry from endpoints, including Windows Event Logs, PowerShell Script Block Logging, and Sysmon, enabling security monitoring, correlation, and threat detection across the environment.
##### **Users and Groups**

| Name              | Username         | Department |
| ----------------- | ---------------- | ---------- |
| Rajesh Kumar (DA) | `rajesh.kumar`   | IT         |
| Arjun Menon       | `arjun.menon`    | IT         |
| Priya Sharma      | `priya.sharma`   | IT         |
| Ananya Iyer       | `ananya.iyer`    | HR         |
| Kavitha Reddy     | `kavitha.reddy`  | HR         |
| Vikram Patel      | `vikram.patel`   | Finance    |
| Neha Gupta        | `neha.gupta`     | Finance    |
| Rahul Verma       | `rahul.verma`    | Finance    |
| Sneha Nair        | `sneha.nair`     | Marketing  |
| Divya Krishnan    | `divya.krishnan` | Marketing  |
| Amit Shah         | `amit.shah`      | Sales      |
| Karan Malhotra    | `karan.malhotra` | Sales      |
| Meera Joshi       | `meera.joshi`    | Sales      |

##### **Internal network —** `10.10.10.0/24`

|Hostname|IP|Function|
|---|---|---|
|`MN-DC01`|`10.10.10.10`|Primary Domain Controller / DNS|
|`MN-FS01`|`10.10.10.20`|File server|
|`MN-APP01`|`10.10.10.30`|Internal business application server|
|`MN-SIEM01`|`10.10.10.40`|SIEM / log analytics|
|`MN-PAM01`|`10.10.10.50`|Privileged Access Management|

##### **DMZ network —** `172.16.10.0/24`

| Hostname    | IP             | Function                           |
| ----------- | -------------- | ---------------------------------- |
| `MN-WEB01`  | `172.16.10.10` | Internet-facing banking web portal |
| `MN-DB01`   | `172.16.10.20` | Banking portal database            |
| `MN-MAIL01` | `172.16.10.30` | Mail gateway                       |
##### Current situation

During the past 24 hours, the organization has experienced several significant service disruptions affecting business-critical systems. While initial investigations have not established a definitive cause, the frequency and timing of these disruptions have raised concerns within the SOC.

Separately, the SOC has identified a collection of indicators that have appeared repeatedly across security monitoring, investigations, and threat detection activities over the past two quarters.

Although none of these indicators has independently established a security incident, their recurrence, combined with the recent operational disruptions and emerging intelligence, warrants further investigation.

##### Intelligence status

The Threat Intelligence team is conducting an ongoing assessment and will release additional intelligence in phases, prioritised according to relevance, confidence, and potential impact.

The SOC is expected to begin proactive threat hunting without waiting for the intelligence picture to become complete.


> [!NOTE] TH Challenge
> Contents
> [Start Challenge 01: Initial Access](../challenge-01/)
This exercise now uses separate pages for each challenge.

