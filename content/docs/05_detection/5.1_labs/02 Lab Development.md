---
title: Lab Development
date: 2026-11-02
authors:
  - Prasanna
---

{{< meta >}}

Phase 1 – Lab development

Foundation

- Build Ubuntu VM.
    
- Install Splunk.
    
- Configure indexes.
    
- Create log datasets.
    
- Import synthetic logs.

#### 01 Build Ubuntu VM
- Download the Ubuntu Server VM from the official repository
	- https://ubuntu.com/download
![](/docs/05_detection/5.1_labs/assets/Pasted_image_20261102130536.png)

- Create a new VM in VMWare 
![](/docs/05_detection/5.1_labs/assets/Pasted_image_20261102134231.png)

- Choose the Ubuntu Server ISO file and proceed to next.
![](/docs/05_detection/5.1_labs/assets/Pasted_image_20261102134335.png)

- Once setup, install the Ubuntu Server from the Live ISO file. 
![](/docs/05_detection/5.1_labs/assets/Pasted_image_20261102134539.png)

- SInce it's a VM for a Lab environment, the server settings are pretty much straight forward. 
![](/docs/05_detection/5.1_labs/assets/Pasted_image_20261102134705.png)

- Set up the `username` credentials and it starts installing.
![](/docs/05_detection/5.1_labs/assets/Pasted_image_20261102134839.png)

- Once the installation is completed. login to the Ubuntu Server
![[Pasted image 20261102141258.png]]

- Next we will set up the Ubuntu server with the nexessary tools. 
```bash
sudo apt update
sudo apt upgrade -y

sudo apt install -y \
  curl \
  wget \
  vim \
  unzip \
  tar \
  jq \
  net-tools \
  python3 \
  python3-pip \
  python3-venv \
  chrony
  
sudo systemctl enable --now chrony
sudo hostnamectl set-hostname splunk-threat-lab
```

```bash
sudo mkdir -p /opt/threat-hunting-lab/{datasets,scripts,documentation,backups}

sudo mkdir -p /opt/threat-hunting-lab/datasets/{scenario_01,scenario_02,scenario_03}

sudo mkdir -p /opt/threat-hunting-lab/scripts/{generators,validation}

sudo chown -R $USER:$USER /opt/threat-hunting-lab
```
- Once done, our directory structure should look the below;
![[Pasted image 20261102145540.png]]
#### 02 Setting up SIEM
- For the SIEM solution we will use splunk, hence we will set up the splunk enterprise free trial. 

- Install Splunk Enterprise
```bash
cd /tmp

wget -O splunk.deb \
"https://download.splunk.com/products/splunk/releases/10.6.1.1/linux/splunk-10.6.1.1-b2ae2962645c-linux-amd64.deb"

sudo dpkg -i splunk.deb

sudo useradd -r -M -d /opt/splunk -s /usr/sbin/nologin splunk

sudo chown -R splunk:splunk /opt/splunk

sudo -u splunk /opt/splunk/bin/splunk start --accept-license

sudo /opt/splunk/bin/splunk enable boot-start \
-user splunk
```

Install it:

bash

```
sudo dpkg -i splunk.deb
```

The installation directory will be:

text

```
/opt/splunk
```

### Configure the Splunk service account

We should avoid running Splunk as root.

Check whether the installation has created a dedicated user:

bash

```
id splunk
```

If the user does not exist, create it:

bash

```
sudo useradd -r -M -d /opt/splunk -s /usr/sbin/nologin splunk
```

Assign ownership:

bash

```
sudo chown -R splunk:splunk /opt/splunk
```

Start Splunk:

bash

```
sudo -u splunk /opt/splunk/bin/splunk start --accept-license
```

During the initial startup, configure your Splunk administrator username and password.

Important: Use a unique administrator password. We will later create a separate participant account with limited permissions.

Enable Splunk to start automatically when Ubuntu boots:

bash

```
sudo /opt/splunk/bin/splunk enable boot-start \
-user splunk
```

Check the status:

bash

```
sudo -u splunk /opt/splunk/bin/splunk status
```

The official installation procedure is documented here: [Splunk Enterprise Linux Installation](https://help.splunk.com/en/splunk-enterprise/administer/install-and-upgrade/10.4/install-splunk-enterprise-on-linux-or-macos/install-on-linux?utm_source=chatgpt.com) .

![](https://www.google.com/s2/favicons?domain=https://help.splunk.com&sz=32)

help.splunk.com

## 7. Step 5 – Access Splunk Web

Find your VM IP address:

bash

```
hostname -I
```

From your host computer, open:

text

```
http://VM-IP-ADDRESS:8000
```

You should see the Splunk login page.

![Installing Splunk on Ubuntu 24.04 | by Justin Mangaoang | Medium](https://images.openai.com/static-rsc-4/pwOyxt6RW6Rj0foRaZ9c3qiH8zTM9OXX9DBdksoO2R8Oh_b0wg36gQinKySJc-tjFKZKJXjRDSsjINOLG6xRTrqfsWK2JiPNmhMojwE4U5n_9KGfVLeNGMwBGY3Bs4rw5yy0H-qd4UE7_PbO5zsR3rRpC7e0MFT4U62RzvlbyRg?purpose=inline)

[](https://medium.com/%40justinmangaoang/installing-splunk-on-ubuntu-24-04-7ade150a1bff?utm_source=chatgpt.com)

Log in with the administrator credentials you created.

At this stage, we should have a functional standalone Splunk instance.

## 8. Step 6 – Validate the installation

Run these commands inside Ubuntu:

bash

```
# Check Splunk process
sudo -u splunk /opt/splunk/bin/splunk status

# Check listening ports
sudo ss -lntp | grep -E '8000|8089'

# Check disk space
df -h

# Check memory
free -h
```
- Next login to the Splunk instance using the credentials `hunter:hunter123`
![[Pasted image 20261102152122.png]]

![[Pasted image 20261102152140.png]]



#### 02 Target Architecture
![](/docs/05_detection/5.1_labs/assets/Pasted_image_20261102130458.png)