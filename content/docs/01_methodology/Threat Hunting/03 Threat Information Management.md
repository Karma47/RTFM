---
title: "[03] Threat Communication"
date: 2026-03-19
authors: ["Prasanna"]
---

{{< meta >}}

#### 3.1 Threat Feed Intake & Processing
Continuous information collection is essential for enabling real-time threat monitoring within an organization. The data collected through this process feeds into threat intelligence feeds and the Threat Intelligence Platform (TIP). Once ingested into the TIP, the information is systematically classified and enriched, allowing it to be effectively leveraged for threat hunting activities.

Ideally, when information is collected, it is categorized into different forms based on its context and level of analysis. These classifications typically include:

- **Information** – Raw data (e.g., telemetry, logs)
- **Event** – An observable occurrence or subject of interest
- **Threat** – A potential cause of an incident or source of danger
- **Intelligence** – Processed, contextualized, and actionable information
- **Incident** – A confirmed security breach or adverse impact
- **Weakness** – A design or implementation flaw
- **Vulnerability** – An exploitable weakness

The primary focus in this context is **intelligence**, which may encompass elements from multiple classifications listed above. For example, an intelligence report may describe a threat actor leveraging specific Tactics, Techniques, and Procedures (TTPs) to exploit identified weaknesses in target environments—weaknesses that may also exist within your organization’s network or products. In such a scenario, the intelligence contains a combination of information, threats, and weaknesses.

Based on this intelligence, the threat hunting team can proactively initiate investigations to identify potential indicators of compromise or ongoing attacks within the environment.

Effectively communicating threat intelligence requires adherence to standardized procedures and protocols to ensure proper handling and dissemination. One of the most widely adopted frameworks for this purpose is the Traffic Light Protocol (TLP), which provides a simple and intuitive mechanism for classifying and sharing sensitive information.

![](/docs/01_methodology/threat-hunting/assets/Pasted_image_20260317231522.png)

The above image is an example of how Threat Intelligence and Threat Hunting would fit into a cybersecurity operations process. The goal is to make sure that there is a strong feedback loop that flows back as a source into the pipeline. 
##### 3.1.1 Traffic Light Protocol
The FIRST **Traffic Light Protocol (TLP)** is a standardized framework used to classify and control the sharing of sensitive information. It helps organizations ensure that threat intelligence and security-related data are disseminated only to appropriate audiences, reducing the risk of unintended exposure.

TLP uses a set of color-coded designations to indicate how widely information can be shared, making it simple and effective for operational use across security teams.
###### TLP Classification Table

| TLP Level                        | Color     | Description                             | Sharing Scope                                     |
| -------------------------------- | --------- | --------------------------------------- | ------------------------------------------------- |
| **TLP:RED**                      | 🔴 Red    | Highly sensitive information            | Restricted to specific individuals only           |
| **TLP:AMBER**                    | 🟠 Orange | Sensitive information with limited risk | Shared within the organization or trusted parties |
| **TLP:GREEN**                    | 🟢 Green  | Information useful for awareness        | Shared within the community but not public        |
| **TLP:CLEAR** _(formerly WHITE)_ | ⚪ White   | Non-sensitive information               | Can be shared publicly                            |
##### 3.1.2 Intelligence feed Integration
According to [TaHiTI ](https://www.betaalvereniging.nl/wp-content/uploads/2026/03/TaHiTI-Threat-Hunting-Methodology-whitepaper.pdf) Threat intelligence is the process of gathering, processing and dissemination of information about threats and attackers. The goal of threat intelligence is to contextualize the information and to deliver actionable information that can be used int he decision-making process. 

The goal of intelligence is to act as the following;
1. Starting point for hunting
2. Contextualizing and driving the hunt
3. Hunting to generate intelligence

The Pyramid of Pain address how difficult it if for attackers to mask certain characteristic during an attack, at the same time it's also difficult to hunt fir defenders. For instance writing a search query in [Splunk](https://www.splunk.com/) to hunt for a specific file has is relatively easy, while it's difficult to define a behaviors and hunt for those. On the other hand, a threat actor can mutate malware resulting in different file signatures, while the behavior of the malware would more or less be the similar to the original. 

![](/docs/01_methodology/threat-hunting/assets/Pasted_image_20260318233556.png)
Here is an example of the Pain to attacker, Value to defender outlined. 

| Level       | Example                     | Pain to Attacker | Value to Defender |
| ----------- | --------------------------- | ---------------- | ----------------- |
| Hashes      | File hash                   | Very low         | Low               |
| IPs/Domains | C2 server                   | Low              | Low               |
| Tools       | Mimikatz                    | Medium           | Medium            |
| TTPs        | Credential dumping behavior | High             | High              |

Hence, The Pyramid of Pain is important because it shifts threat intelligence from **reactive blocking** to **strategic disruption** which is exactly what mature threat hunting and intelligence programs aim for.

Based on the value to the defenders, the threat intelligence feeds can be classified into the four categories, each targeting different sets of audiences. 

| Level       | Focus             | Audience   | Example                   |
| ----------- | ----------------- | ---------- | ------------------------- |
| Strategic   | Why               | Executives | Industry targeted by APT  |
| Operational | How (campaigns)   | Managers   | Ransomware campaign flow  |
| Tactical    | Techniques (TTPs) | Analysts   | Credential dumping method |
| Technical   | Indicators (IOCs) | Tools/SOC  | Malicious IP/hash         |

These structured threat intelligence can be obtained form various sources either public or private.  There are threat intelligence providers and communities that share intelligence data such as 
- ISAC (IT-ISAC, OT-ISAC, AUTO-ISAC, A-ISAC, E-ISAC, etc.. )
- Cyware, Recorded Future, Feedly etc.. 
- MISP, OpenCTI etc.. 
A number of these intelligence providers support structured threat intelligence in a standardized format called [STIX](https://oasis-open.github.io/cti-documentation/stix/intro.html) which defines the objects for everything in JSON format, using [TAXII](https://oasis-open.github.io/cti-documentation/taxii/intro.html) a Trusted Automated Exchange of Intelligence Information protocol. 

![](/docs/01_methodology/threat-hunting/assets/Pasted_image_20260318235614.png)

TAXII requires two primary services to support intel sharing
1. Collection - Interface to logical repository of CTI objects
2. Channel - Allows producers to push data to many consumers. 

In a nutshell STIX Defines what the data looks like, while TAXII Defines how the data is shared. 

The [STIX Visualizer](https://oasis-open.github.io/cti-stix-visualization/?url=https://raw.githubusercontent.com/oasis-open/cti-stix-visualization/master/test.json) allows us to rapidly visualize the STIX objects and their relationships. It consumes a Json object and maps out such that it's easily understandable for humans. 

![](/docs/01_methodology/threat-hunting/assets/Pasted_image_20260319000021.png)

Below is an example STIX JSON object in which a threat actor Disco Team operates primarily in Spanish and they have been known to steal credit card information for financial gain.

```json
{
    "type": "bundle",
    "id": "bundle--601cee35-6b16-4e68-a3e7-9ec7d755b4c3",
    "objects": [
        {
            "type": "threat-actor",
            "spec_version": "2.1",
            "id": "threat-actor--dfaa8d77-07e2-4e28-b2c8-92e9f7b04428",
            "created": "2014-11-19T23:39:03.893Z",
            "modified": "2014-11-19T23:39:03.893Z",
            "name": "Disco Team Threat Actor Group",
            "description": "This organized threat actor group operates to create profit from all types of crime.",
            "threat_actor_types": [
                "crime-syndicate"
            ],
            "aliases": [
                "Equipo del Discoteca"
            ],
            "roles": [
                "agent"
            ],
            "goals": [
                "Steal Credit Card Information"
            ],
            "sophistication": "expert",
            "resource_level": "organization",
            "primary_motivation": "personal-gain"
        },
        {
            "type": "identity",
            "spec_version": "2.1",
            "id": "identity--733c5838-34d9-4fbf-949c-62aba761184c",
            "created": "2016-08-23T18:05:49.307Z",
            "modified": "2016-08-23T18:05:49.307Z",
            "name": "Disco Team",
            "description": "Disco Team is the name of an organized threat actor crime-syndicate.",
            "identity_class": "organization",
            "contact_information": "disco-team@stealthemail.com"
        },
        {
            "type": "relationship",
            "spec_version": "2.1",
            "id": "relationship--a2e3efb5-351d-4d46-97a0-6897ee7c77a0",
            "created": "2020-02-29T18:01:28.577Z",
            "modified": "2020-02-29T18:01:28.577Z",
            "relationship_type": "attributed-to",
            "source_ref": "threat-actor--dfaa8d77-07e2-4e28-b2c8-92e9f7b04428",
            "target_ref": "identity--733c5838-34d9-4fbf-949c-62aba761184c"
        }
    ]
}
```

Either by collecting large pool of raw data or by aggregating a standardized STIX data and analyzing them would result in a reasonable threat intelligence coverage.  The coverage for intelligence will have to be evaluated periodically to enhance the threat intel capabilities and there really is no defined end game to it. 
#### 3.2 Intelligence dissemination strategy
The process of sharing threat intelligence with the right stakeholders in a timely and structured manner to support decision making and defensive actions.
##### 3.2.1 Disclosure Guidelines & Methods
Guidelines and standards that control how and with whom information is shared, ensuring sensitive data is distributed securely commonly using frameworks like Traffic Light Protocol.
Here’s a simple **list of disclosure types**:

| Disclosure Type          | Definition                                                          |
| ------------------------ | ------------------------------------------------------------------- |
| Full Disclosure          | Release all details publicly immediately.                           |
| Coordinated Disclosure   | Share with the vendor first, then publicize after a fix.            |
| Responsible Disclosure   | Ethical variant of coordinated disclosure prioritizing user safety. |
| Discretionary Disclosure | Researcher decides what, when, and with whom to share.              |
| No Disclosure            | Keep the vulnerability entirely private.                            |

The [Automated Responsible Disclosure of Security Vulnerabilities](https://ieeexplore.ieee.org/document/9606687) is a  solution that leverages a distributed ledger and inteledger technologies to automate the disclosure process while offering increased security, privacy and transparency. 
![](/docs/01_methodology/threat-hunting/assets/Pasted_image_20260317233457.png)
The ARD solution presented in the above mentioned paper tackles all the problems currently present in the Responsible disclosure approaches and possibly be a solution in the future. 
##### 3.2.2 Cyber Threat Reporting
The creation of structured and actionable reports that communicate threat insights (e.g., actors, TTPs, risks) tailored to different audiences such as executives, analysts, or SOC teams.

There are a number of blueprints available to created automated threat intelligence reports, some of them are mentioned below.
- [CTI Blueprint](https://center-for-threat-informed-defense.github.io/cti-blueprints/)

![](/docs/01_methodology/threat-hunting/assets/Pasted_image_20260319003014.png)
