---
title: "[1] Attack Mapping Methodology"
date: 2026-03-23
authors:
  - Prasanna
---

{{< meta >}}

### 1. Cyber Kill Chain
#### 1.1 What is the Cyber Kill Chain
The Cyber Kill Chain is a model developed by [Lockheed Martin](https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html) that describes different stages of a cyber attack end to end. It helps security analysts and to understand and map the standard operating procedures in a sequential way so that they can detect and stop attackers. 

It emphasizes that a cyber attack progresses through a chain like sequentially, where the threat actor will have to move to the next part of the chain until the end to achieve their goals. 

In simple terms for a cyber defender it's important to know where exactly in the chain that a threat actor is and take necessary actions to break the chain thereby disrupting the threat actor to achieve their goals. 

The below image from [Trend Micro's blog](https://www.trendmicro.com/en_gb/what-is/cyber-attack/cyber-kill-chain.html) explains the Cyber Kill Chain's 7 different stages. 
![](/docs/01_methodology/security-analysis/assets/Pasted_image_20260324003052.png)

|#|Stage|Description|
|---|---|---|
|1|Reconnaissance|Attackers gather information about the target, such as systems, users, and vulnerabilities.|
|2|Weaponization|They create a malicious payload by combining exploits with malware.|
|3|Delivery|The payload is transmitted to the victim via methods like phishing or malicious links.|
|4|Exploitation|The payload is executed by exploiting a vulnerability on the target system.|
|5|Installation|Malware is installed to maintain persistence on the compromised system.|
|6|Command and Control (C2)|The attacker establishes a communication channel to remotely control the infected system.|
|7|Actions on Objectives|The attacker achieves their goal, such as data exfiltration, lateral movement, or disruption.|

#### 1.2 Why it is important ?

The kill chain itself helps in mapping an ongoing cyber attack into a sequential events grouped to stages. This helps build a proactive approach in cyber defense to detect early stages and stop an attack before it inflicts major damage. 

In addition, it makes more complex attacks easier to analyze, communicate to different security stakeholders in a easily digestible way. An example would be a clean kill chain mapping into a threat intelligence report or a post incident analysis report. 

it also helps build detection rules such as mapping logs or alerts to the kill chain or even a PowerShell execution.  Finally, it improves the IR process since it's quite intuitive to determine at what stage of the attack the Incident response is functioning at. 

Here is an example Kill chain Mapping for an attack,

```HTML
Our investigation revealed the following high-level path the threat actor took to compromise the environment:

1. The threat actor initiated reconnaissance activities by performing system fingerprinting and network enumeration to identify active hosts, services, and potential vulnerabilities within the environment.
   
2. Following reconnaissance, the threat actor moved into the weaponization phase by preparing exploit code tailored to the identified weaknesses and testing various parameters to ensure successful execution.
   
3. The threat actor then delivered the exploit payload through multiple identified vulnerabilities, attempting to gain an initial foothold within the environment.
   
4. Successful exploitation was achieved through multiple techniques, including remote code execution (RCE) via a vulnerable file upload mechanism, as well as the use of known exploits such as EternalBlue and buffer overflow vulnerabilities.
   
5. After gaining access, the threat actor established persistence by installing malicious scripts on compromised systems and configuring a stealthy reverse connection to maintain remote access.
   
6. The threat actor implemented command and control (C2) mechanisms by creating scheduled tasks to maintain persistent communication with compromised hosts and began exfiltrating sensitive data from the environment.
   
7. Finally, the threat actor carried out actions on objectives, including disabling antivirus protections, executing additional malicious scripts, and compromising critical systems such as the domain controller to expand control over the environment.
```


![](/docs/01_methodology/security-analysis/assets/Pasted_image_20260325004002.png)

### 2. MITRE ATT&CK
#### 2.1 MITRE ATT&CK Framework
In addition to the Cyber kill chain, the [MITRE ATT&CK](https://attack.mitre.org/) framework dives deep into the `tactics`, `techniques` and `procedures` that can be mapped any ongoing threats. There are 14 different sections that expand into `sub techniques`.

![](/docs/01_methodology/security-analysis/assets/Pasted_image_20260325011054.png)

In addition to MITRE ATT&CK, the D3FEND framework helps by providing a complementary, defense focused taxonomy that maps concrete countermeasures, techniques, and controls to attacker behaviors making it easier for security teams to design, validate, and communicate mitigations (detection rules, system hardening, isolation mechanisms, and response playbooks) that directly correspond to adversary tactics and techniques. 
![697](/docs/01_methodology/security-analysis/assets/Pasted_image_20260325010310.png)
Here is an example MITRE ATT&CK Mapping for an attack scenario we've mentioned earlier in section 1.2.

| Phase                     | Activity                                         | MITRE Technique                                                                    |
| ------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------- |
| Reconnaissance            | Fingerprinting, Network Enumeration              | Active Scanning (T1595), Network Service Discovery (T1046)                         |
| Weaponization             | Exploit Development & Testing                    | Develop Capabilities (T1587)                                                       |
| Initial Access / Delivery | Exploit Delivery via Vulnerabilities             | Exploit Public-Facing Application (T1190)                                          |
| Exploitation              | RCE, EternalBlue, Buffer Overflow                | Exploitation for Client Execution (T1203), Exploitation of Remote Services (T1210) |
| Persistence               | Malicious Scripts, Reverse Connection            | Persistence via Scheduled Task/Job (T1053), Remote Access Tools (T1219)            |
| Command & Control         | Scheduled Jobs, Persistent Connection            | Application Layer Protocol (T1071), Remote Access Software                         |
| Exfiltration              | Data Theft                                       | Exfiltration Over C2 Channel (T1041)                                               |
| Actions on Objectives     | Disable AV, Further Execution, Domain Compromise | Impair Defenses (T1562), Lateral Movement (T1021), Domain Accounts (T1078)         |

