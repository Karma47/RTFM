#### 1.1 What is threat hunting ?
Threat hunting is a process in which a blue team engages in search of anomalies that indicate a compromise within an enterprise organization. The threat hunters assume a `hypotheses` which provides context on what to look for. The below are some of the other definitions are accepted.  
- **Palo Alto Networks**  
    Threat hunting is a proactive, analyst-driven process that searches for indicators of compromise (IOCs), attacker behaviors, and anomalies that bypass traditional detection systems. [Palo Alto Article](https://www.paloaltonetworks.sg/cyberpedia/threat-hunting)
- **IBM**  
    Threat hunting is a proactive approach to identifying unknown or ongoing cyber threats within an organization’s network before they cause damage. [IBM Article](https://www.ibm.com/think/topics/threat-hunting)
- **Microsoft**  
    Cyber threat hunting is the process of proactively searching for undetected threats across networks, endpoints, and data to detect attacks that automated security controls might miss. [Microsoft Article](https://www.microsoft.com/en-sg/security/business/security-101/what-is-cyber-threat-hunting)

##### Dwell time
The Dwell Time refers to the length of time from the initial compromise through the point of notifying affected stakeholders. These metrics are used to measure incident response capabilities.  
- [NIST Using Metrics to Mature Incident Response Capabilities](https://www.nist.gov/system/files/documents/2016/09/16/mandiant_rfi_response.pdf)

The dwell time is computed based on the following categories. 
- Detect - Time from initial entry into the system/network to detection
- Review - Time form detection of the incident to analyst for review
- Analyze - Time to analyze the incident
- Identify - Time to identify the affected assets, location and owner
- Notify - Time to successfully notify appropriate contacts
##### Additional Metrics
In addition to Dwell time, there are other metrics such as DRAIN CVR, Efficiency Metrics, Implementation Metrics, Impact Metrics and Proxy Metrics.
#### 1.2 Threat Hunting in Enterprises 
The threat hunting process itself is complimentary to the standard incident detection, response and remediation. Hence, threat hunting works in parallel to a traditional SOC, SIEM infrastructure. 

The below image represents the complimentary threat hunting positioning in an enterprise infrastructure. 
- [Crowdstrike Threat Hunting Process](https://www.crowdstrike.com/en-us/cybersecurity-101/threat-intelligence/threat-hunting/)
![](/docs/01_methodology/threat-hunting/assets/Pasted%20image%2020260312231306.png)

In a nutshell, the SOC Infrastructure will monitor for alters, triage information and classify them as Events (or) Incidents. Upon classification, an associated process will be triggered for instance an "Incident" will trigger an incident response process. Threat Hunting, however is a cyclic process, where it an organization is assumed breach. Upon a successful threat hunt, the identified threats will be submitted to the SOC, which will trigger an incident response if it meets the criteria for an Incident. 

More or less, threat hunting is like looking for **smoke before a fire**. Due to this nature, a threat hint doesn't wait for an alert signals, instructions, alarms or event indicators of compromise, but rather questions everything form a hypothesis, and try to prove or disprove the original hypothesis. 
#### 1.3 Threat Hunting Maturity Model
The maturity of a threat hunting program depends on 3 major factors 
1. Quality of the data collected
2. Tools provided to access and analyze
3. Skillset of the analysts
These three parameters are mapped into 5 levels of maturity ranging gotm HMM0 (the least) to HMM4 (the most)
- [SANS Threat Hunting Maturity Model](https://detect-respond.blogspot.com/2015/10/a-simple-hunting-maturity-model.html)
- [Threat Hunting Maturity Model](https://www.trellix.com/security-awareness/threat-intelligence/what-is-cyber-threat-hunting/)

|Level|Maturity Stage|One-Line Description|
|---|---|---|
|HMM0|Initial|No proactive hunting; security teams rely entirely on automated alerts and reactive incident response.|
|HMM1|Minimal|Analysts perform basic manual searches using known indicators of compromise (IOCs).|
|HMM2|Procedural|Structured and repeatable threat hunts based on known attacker techniques and predefined procedures.|
|HMM3|Innovative|Hypothesis-driven hunting that analyzes behaviors and uncovers previously unknown threats.|
|HMM4|Leading|Advanced hunting with automation, large telemetry analysis, and continuous detection engineering.|

![](/docs//docs/01_methodology/Threat-Hunting/assets/Pasted%20image%2020260312234325.png)
More or less, the workflow looks as shown below
```
Alerts → IOC search → Structured hunts → Hypothesis hunting → Automated hunting
```

#### 1.4 Threat Hunting services
**Threat Hunting Services** are services provided by cybersecurity companies to **proactively search for hidden attackers inside an organization’s environment**, often using specialized analysts, threat intelligence, and advanced telemetry.
- [Mandiant APT 1 report](https://nsarchive.gwu.edu/document/21484-document-83)

In 2014 Mandiant released a report on APT 1, which highlighted a massive cyber espionage campaign by nation state threat actors. The group named "Unit 61398" which involved in this operation has compromised multiple targets across the world leading to a total compromise of 141 companies, spanning 20 major industries

APT1 has a well-defined attack methodology, honed over years and designed to steal large volumes of valuable intellectual property.  They maintained persistence over several months or years and steal broad categories of intellectual property, including technology blueprints, proprietary manufacturing process, test results, business plans, pricing documents, partnership agreements and emails and contact lists from victims. 

In order to defend against such threats many leading security companies provide these services, including Mandiant, CrowdStrike, Microsoft, Palo Alto Networks, and Secureworks.

|Service Type|Description|
|---|---|
|Managed Threat Hunting|External experts continuously hunt for threats across your environment.|
|Incident-Driven Hunting|Proactive hunts performed after a security incident to identify additional compromise.|
|Intelligence-Driven Hunting|Hunts based on threat intelligence about specific attacker groups or campaigns.|
|Hypothesis-Driven Hunting|Hunts based on attacker techniques and behaviors (often mapped to MITRE ATT&CK).|
|Compromise Assessment|A deep investigation to determine whether attackers are already present.|
#### 1.5 Threat Hunting Types

##### 1.5.1 Structured Threat Hunting
A structured threat hunting used formal frameworks, such as the [MITRE Adversary Tactics Techniques and Common Knowledge (ATT&CK) framework](https://www.ibm.com/think/topics/mitre-attack), guide structured hunts. They search for defined indicators of attack (IoA) and the tactics, techniques and procedures (TTPs) of known threat actors.

Threat Hunting Frameworks
- [Intel 471 Threat Hunting Framework](https://www.intel471.com/resources/whitepapers/threat-hunting-framework)
- [PEAK Threat Hunting Framework](https://www.splunk.com/en_us/blog/security/peak-threat-hunting-framework.html)
- [Group IB Framework](https://go.group-ib.com/hubfs/leaflet/group-ib-thf-huntpoint-mxdr-datasheet-2020-en.pdf)
- [TaHITI Framework](https://huntbook.predefender.com/part-1/frameworks/threathunting/tahiti/index.html)
- [Sqrrl Threat Hunting Framework](https://www.threathunting.net/sqrrl-archive)
- [MITRE ATT&CK Based Hunting](https://www.mitre.org/sites/default/files/2021-11/prs-19-3892-ttp-based-hunting.pdf)

![](/docs//docs/01_methodology/Threat-Hunting/assets/Pasted%20image%2020260313000913.png)
##### 1.5.2 Unstructured Threat Hunting
An unstructured hunt is more reactive than a structured hunt. It is often triggered by the discovery of an indicator of compromise (IoC) in an organization’s system. Hunters then look for what caused the IoC and whether it is still at large in the network.

##### 1.5.3 Situational + Entity-Driven Threat Hunting
A situational hunt is a response to an organization’s unique situation. It is usually driven by the results of an internal [risk assessment](https://www.ibm.com/topics/risk-management) or a trends and vulnerabilities analysis of the IT environment.  

Entity-driven hunts focus specifically on critical assets and systems in a network. Threat hunters identify cyberthreats that might pose a risk to these entities and search for signs of ongoing compromises.
