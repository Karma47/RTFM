#### 01. What is the channel that the wifi-global Access Point is currently using?

- Setup the wifi adapter in monitor mode and verify the setup
```bash
$ airmon-ng check kill
$ airmon-ng start wlan0
$ airmon-ng --verbose
```
- Start `airodump-ng` and look for the results
```bash
airodump-ng wlan0mon -w ~/wifi/scan --manufacturer --wps --band abg
```
![[Pasted image 20260209180220.png]]
- We can also see the output capture files are saved for the further analysis.
![[Pasted image 20260209180336.png]]

#### 02. What is the MAC of the wifi-IT client?
- From the previous output we can see that the BSSID of the client wifi-IT is `F0:9F:C2:1A:CA:25`
- Using this information we can identify the MAC of the essid `wifi-IT`
```bash
airodump-ng wlan0mon --essid wifi-IT --bssid F0:9F:C2:1A:CA:25 -c 11 --manufacturer --wps
```
![[Pasted image 20260209180816.png]]

#### 03. What is the probe of 78:C1:A7:BF:72:46 ?
- We can run `airodump-ng` again to check the probe of provided address.
```bash
airodump-ng wlan0mon -w ~/wifi/scan --manufacturer --wps --band abg
```
![[Pasted image 20260209181120.png]]
#### 04. What is the ESSID of the hidden AP (mac F0:9F:C2:6A:88:26)?
- Prepare a wordlist with the common patterns `wifi-$words`
```
cat /root/rockyou-top100000.txt | awk '{print "wifi-"$1}' > wifi.wordlist
```
- This wordlist will be use to brute force the wifi essids
- Verify the generated list, which looks like the below listed example. 
```bash
$ less wifi.wordlist
wifi-123456
wifi-12345
wifi-123456789
...
wifi-12345678
wifi-abc123
wifi-nicole
```
- We can now use `mdk4` to bruteforce the essid of the provided address.
- First find the channel of the provided AP
```bash
$ airodump-ng wlan0mon
```
![[Pasted image 20260209182423.png]]
- We can see that it's running in `channel 11`
- The below explains the options set for the program (refer to mdk4 man page)
	- `p` - SSID Probing and Bruteforcing
	- `-t` - Set MAC address of target AP
	- `-f` - Read SSIDs from file for bruteforcing hidden SSIDs
```bash
iwconfig wlan0mon channel 11
mdk4 wlan0mon p -t  F0:9F:C2:6A:88:26 -f ./wifi.wordlist
```
![[Pasted image 20260209182631.png]]

![](/docs/02_platforms/wifi/assets/Pasted%20image%2020260222230339.png)