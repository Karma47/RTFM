---
title: "[06] Psychology of Trust Boundaries"
date: 2026-03-19
authors:
  - Prasanna
draft: true
---

{{< meta >}}

#### 7.1 What is a trust boundary
In the cyber space, a trust boundary is a concept that describes the points in a system where the level of trust changes. Imagine being in a house, where being in your own room feels safer while, moving out to the streets, different city and location might lower the level of safeness that one might feel. 

The likely hood of someone being targeted by a threat actors increases as the in regions with less trust. The below equation explains the Probability of being targeted. 

$$
P(\text{attack}) \propto \frac{1}{T}
$$
**Where:**
- P(attack) = probability of being targeted
- TTT = level of trust (higher = more secure/trusted)
In an operating system, kernel rings define levels of privilege based on the established trusted zones.  The [Protection rings](https://en.wikipedia.org/wiki/Protection_ring) defined a hierarchical protection domains to protect data and functionality from malicious behaviors. 
![](/docs/01_methodology/threat-hunting/assets/Pasted_image_20260331221525.png)
- **Ring 0** → Most privileged (highest trust)
- **Ring 3** → Least privileged (lowest trust)
#### 7.2 Humans in parallel to Kernel Privilege Rings 
Based on the Protection rings, and trust zones from the operating systems it's feasible to define a psychological trust zones for humans. The closer something to a person's "inner ring" the more trust it has and the less scrutiny it faces. 

If we put that in a diagram, we could map the Psychological trust zones to 4 layers as well.
![](/docs/01_methodology/threat-hunting/assets/trust_zones.webp)

##### Ring 0: Core Trust
This is the region that an individuals would trust with almost anything including life decisions. This could be family, intimate partners, lifelong friends but not limited. Sometimes, there are some core beliefs systems that can make a being trust with blind faith. 

*Gaining access to Ring 0, could be devastating to an individual, Often time in espionage, social engineering, Treason, advanced persistent threat vectors and even terrorism the adversaries often gain access to this trust zone before taking control of the individual.* 

##### Ring 1: Strong Trust
This region comprises of those individuals that we have regular interaction with such as Close colleagues, Managers, Authority figures. Those belonging to this zone is often trusted but with slight skepticism and a reasonable doubt of action. 

*Getting into this region of trust  by an adversary could still do a substantial damage to individuals. Adversaries that treat an individual as a `subject of interest` could potentially leverage these established privilege to gain insights about personal, professional life and links to environments such as market trends, insider information, customer details and intellectual property or even use this as an opportunity to identify new potential hosts to compromise (lateral movement).*
##### Ring 2: Partial Trust
This region contains acquaintances, coworkers and others that an individual barely knows. The could also include brands, ambassadors, marketing agents, social media networks, external agents etc. They might appear and claim to be legitimate with a familiar presence.

*A adversary that gains access to this region actively tries to either gain higher trust or find low hanging quick objectives on a targeted individual. An example would be an acquaintance that used double negative to identify your salary range or requesting you a quick bill payment for a dinner what never gets returned or even use you for their entertainment.* 
##### Ring 3: Untrusted
These are public zones, that are often interpreted as untrusted. Depending on the society that you live in the level of trust in a public source can widely differ. For instance, Trusting public in a country with high moral, civil sense and code of conduct has more trust than regions of the world that lack moral on an average in general. 

*Strangers, unknown contacts, random calls, internet and social media should be treated with highest skepticism. For an adversary, this is often the entry point where they would try and identify an weakness in a human to either gain higher trust or exploit it to manipulate an individual for an action on objectives.* 


#### 7.3 Penetrating human trust boundary

#### 7.4 Anomalies of a social threat actor

#### 7.5 Action on objective 

#### 7.6 Defending against social engineering threats

#### 7.7 The Stockholm syndrome 

#### 7.8 Breaking the pattern - Invisible chain

#### 7.9 Identifying and mitigate a compromise 

#### 7.10 Face the truth, Conclusion
