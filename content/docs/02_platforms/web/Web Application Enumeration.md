---
title: "[06] Threat Hunting in Cloud"
date: 2026-03-19
authors: ["Prasanna"]
draft: true
---

{{< meta >}}

#### Passive Information gathering
- As part of passive information gathering, we can use the OSINT tools to gather information from a web application. 

> [!NOTE] OSINT
> [Crowdstrike OSINT Article](https://www.crowdstrike.com/en-us/cybersecurity-101/threat-intelligence/open-source-intelligence-osint/)

Other interesting resources
	[Content Delivery Network](https://www.akamai.com/glossary/what-is-a-cdn)

### Passive Information Gathering Tools
- Domain Information
	- [Whois](/docs/06_tools/06.1_web/Whois/)
	- Lookup tool
	- ICANN's website
- Subdomain Identification
	- DNSDumpster
	- Certificate transparency
	- crt.sh
- Additional Insights
	- Shodan

#### Service Discovery
- Apart from the above mentioned, there are methods to discover running services. 
- The most common toolkit used for that is `Nmap`, that is used to discover open ports and services on a host or across entire networks. 
![](/docs/02_platforms/web/assets/Pasted_image_20260320153345.png)