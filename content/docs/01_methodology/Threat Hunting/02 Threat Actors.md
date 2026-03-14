#### 2.1 Types of Threat Actors
The threat actors can be categorized based on their motivations, skillsets and other attributes that they might have.  Typically we can think of a target and motivation, which will paint a picture about the nature of a threat actor. 

These threat actors are strategic and methodical in executing their attack chain. According to [Mandiant Targeted attack life cycle](https://cloud.google.com/security/resources/insights/targeted-attack-lifecycle), these predictable sequence of event.  
![](/docs/01_methodology/Threat%20Hunting/assets/Pasted%20image%2020260314145910.png)
##### 2.1.1 Different types of targets or motivations:
1. A threat actor may target an individual for reasons such as personal revenge, defamation, or financial gain.
2. They may also target a group or organization to gain a business advantage, engage in corporate rivalry, steal intellectual property, or obtain financial benefits.
3. In some cases, threat actors target nation-states, driven by political motives within a country, through cross-border cyberattacks or other forms of cyber operations.
4. Finally, threat actors may target groups or communities to advance political or social causes.

The taxonomy of threat sources from **[NIST 800-30](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf)** outlines the following types;
- **Adversarial:** Individuals, groups, organizations, or states that seek to exploit the organization’s dependence on cyber resources 
- **Accidental:** Erroneous actions taken by individuals in the course of executing their everyday responsibilities
- **Structural:** Failures of equipment, environmental controls, or software due to aging, resource depletion, or other circumstances which exceed expected operating parameters.
- **Environmental:** Natural disasters and failures of critical infrastructures on which the organization depends, but which are outside the control of the organization 

When combining the motivation of a threat actor and the sources of threat, the following types of threat actors can be drawn, but not limited to.

| Common Threat Actor Type                 | NIST 800-30 Threat Source Category                  | Description                                                                              |
| ---------------------------------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Nation-state actors (APT groups)         | Adversarial – Nation-State                          | Government-sponsored attackers conducting espionage, cyberwarfare, or strategic attacks. |
| Organized cybercriminal groups           | Adversarial – Criminal Organization                 | Professional groups performing ransomware, fraud, and data theft for financial gain.     |
| Hacktivists                              | Adversarial – Ideological Group                     | Politically or socially motivated attackers targeting organizations or governments.      |
| Insider threats (employees, contractors) | Adversarial – Insider                               | Authorized users who misuse privileges intentionally or maliciously.                     |
| Competitors / corporate spies            | Adversarial – Organization                          | Companies or agents performing industrial espionage to gain competitive advantage.       |
| Script kiddies / amateur hackers         | Adversarial – Individual                            | Individuals with limited skills using publicly available tools or exploits.              |
| Cyber terrorists                         | Adversarial – Ideological or Terrorist Organization | Groups using cyberattacks to create fear or disrupt national infrastructure.             |
| Negligent employees                      | Accidental Threat Source                            | Human error leading to data leaks, misconfigurations, or accidental system damage.       |

#### 2.2 Ransomware Threat Actors
Ransomware threat actors are individuals or groups that develop, distribute, or operate ransomware malware to extort money from victims by encrypting data or threatening to leak stolen information unless a ransom is paid.

These actors are considered **adversarial threat sources** in cybersecurity risk assessments such as those described in NIST Special Publication 800-30.

[DarkTrack Threat discovery](https://evessio.s3.amazonaws.com/customer/8c4659ee-526a-4e9c-89dc-f6f4c3c1a789/event/626d2029-35a9-4ee1-a871-8f2e82ca8720/responses/80d534e2-ad36-4051-8947-3a047e6e350c/acc8ddcc-profile_62a34107590ad18b904b739d_Stages_of_a_Ransomware_Attack.pdf) defined the following stages of a Ransomware Attack which includes Initiation, Establish foothold & Beaconing (C2), Lateral Movement, Data Exfiltration, Data Encryption, Ransom, Clean up & Recovery, The Cycle Repeats.  
![](/docs/01_methodology/Threat%20Hunting/assets/Pasted%20image%2020260314151116.png)

Research shows that 80% of ransomware victims that pay the ransom suffer a second attack, often in the hands of the same group. The only way to truly keep the attackers
from striking again is to know the full scope of the attack, ensure the attacker is no longer in your environment, and use a technology that doesn't look at connections
and events on a one-off basis.

The paper **“[Money Over Morals: A Business Analysis of Conti Ransomware](https://arxiv.org/pdf/2304.11681)”** analyzes the internal operations of the Conti ransomware group using leaked chat logs and blockchain data. The authors show that modern ransomware groups operate like organized cybercrime businesses rather than small hacker groups, with structured roles, recruitment processes, and financial management. By examining more than **168,000** leaked internal chat messages, the study reconstructs Conti’s organizational structure and identifies roles such as managers, developers, and affiliates involved in attacks. The researchers also trace cryptocurrency transactions and estimate that **over $80 million in ransom payments** were likely received by Conti and related operations, which is over five times higher than previous public estimates. Additionally, the study labels **666 Bitcoin addresses** linked to Conti and develops a method to identify ransom payments through transaction patterns. The findings highlight that ransomware groups function as highly coordinated and profitable criminal enterprises, and the authors suggest that analyzing financial flows and exchange points could help law enforcement trace and disrupt ransomware operations.
#### 2.3 Advanced Persistent Threats

APT (Advanced Persistent Threats) refers to a sophisticated, continuous cyberattack campaign conducted by a well-resourced and organized threat actor. These APT groups can be a nation-state or a highly skilled criminal group with a fundings and backings. Unlike opportunistic attacks, the APTs are strategic, stealthy and objective. They rarely aim for short term goals, but rather aim for the most valuable crown jewels with maximum impact over time. 

For instance, an APT group might identify a new government program responsible for managing digital identities, which is expected to become critical for the nation over the next two decades. Instead of attacking the system during its early development, the group could **infiltrate the system early and maintain long-term persistence**, waiting years before actively pursuing their objectives. By doing so, they **maximize potential impact over time**, integrating themselves into the system and continuously monitoring its developments and operations.

[Crowdstrike](https://www.crowdstrike.com/en-us/adversaries/) has featured multiple adversaries that are worth studying. They include [Operator Panda](https://www.crowdstrike.com/en-us/adversaries/operator-panda/), [Punk Spider](https://www.crowdstrike.com/en-us/adversaries/punk-spider/), [Famous Chollima](https://www.crowdstrike.com/en-us/adversaries/famous-chollima/). For instance, since at least November 2024, China-nexus targeted intrusion adversary OPERATOR PANDA has conducted operations against the telecom and professional services sectors. OPERATOR PANDA relies heavily on exploiting internet-facing appliances such as Cisco switches for initial access.

In the [Microsoft threat actor taxonomy](https://www.microsoft.com/en-us/security/blog/2023/04/18/microsoft-shifts-to-a-new-threat-actor-naming-taxonomy/), the threat actor group is named after weather events. A weather event or "Family name" represents either a nation-state actor attribution or a motivation. The below table shows the threat group Microsoft tracks and their assigned weather events in the naming convention (As of 14th March 2026)

| Actor Category                  | Type                  | Family Name |
| ------------------------------- | --------------------- | ----------- |
| Nation State                    | China                 | Typhoon     |
| Nation State                    | Iran                  | Sandsotrm   |
| Nation State                    | Lebanon               | Rain        |
| Nation State                    | North Korea           | Sleet       |
| Nation State                    | Russia                | Blizzard    |
| Nation State                    | South Korea           | Hail        |
| Nation State                    | Turkey                | Dust        |
| Nation State                    | Vietnam               | Cyclone     |
| Financially Motivated           | Financially Motivated | Tempest     |
| Private sector offensive actors | PSOAs                 | Tsunami     |
| Influence operations            | Influence Operations  | Flood       |
| Groups in development           | Groups in development | Storm       |

![](/docs/01_methodology/Threat%20Hunting/assets/Pasted%20image%2020260314153921.png)
The threat actors within the same weather family are given an adjective to distinguish actor groups that that distinct TTPs, objectives or other patterns. 