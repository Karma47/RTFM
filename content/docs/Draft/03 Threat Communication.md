#### 3.1 Information collection - Inbound
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
###### TLP Classification Table (Markdown-Friendly)

|TLP Level|Color|Description|Sharing Scope|
|---|---|---|---|
|**TLP:RED**|🔴 Red|Highly sensitive information|Restricted to specific individuals only|
|**TLP:AMBER**|🟠 Orange|Sensitive information with limited risk|Shared within the organization or trusted parties|
|**TLP:GREEN**|🟢 Green|Information useful for awareness|Shared within the community but not public|
|**TLP:CLEAR** _(formerly WHITE)_|⚪ White|Non-sensitive information|Can be shared publicly|
##### 3.1.2 Intelligence feeds

#### 3.2 Information Dissemination

##### 3.2.1  Internal communications
##### 3.2.2 Disclosure Protocols
![](/docs/01_methodology/threat-hunting/assets/Pasted_image_20260317233457.png)
##### 3.2.3 Threat Intelligence Reporting
