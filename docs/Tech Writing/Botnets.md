---
sidebar_label: Botnets
description: Bots & Fast Flux
Id: Bot
sidebar_position: 6
---

![Swarm of Bots](/img/bot.png)

If I built a botnet, which I wouldn't, **IT'S ILLEGAL**, but I would use a Fast Flux network to hide my malware sites. My main targets would be IoT devices, and Wi-Fi routers. 
> With the end goal of a Botnet mining Bitcoin via the GPU / CPU resources of infected devices. 

## Fast Flux Networks

Is a DNS technique used to hide phishing and malware delivery sites behind an ever-changing network of compromised hosts acting as proxies. It involves rapidly changing the DNS records (A or MX records) to mix up IP addresses frequently. 

This networking layer makes it difficult for law enforcement and security professionals to locate the rogue servers.

## P2P Architecture

P2P, or (peer-to-peer) gets a lot of fanfair in the blockchain world. For **Botnets** it's how to build resilency into a system where each **agent** acts as both a client and a server. 

A P2P architecture can be orchestrated to decentralize a command and control infrastructure, allowing "nodes" to perform missions and if a device is caught and "cleaned" makes it harder to take down the entire botnet.

Specific nodes can be given more control or priority in the decision-making process, either because they are more trusted by the bot herder or they have more resources available. This can be particularly useful for distributing commands, updates, or propagating new malware to the whole botnet.

## IOT Devices 

Many IoT devices are poorly secured. Why? The majority of older IOT devices have login credentials that were never changed. They run a stripped down linux kernel operating system. ``Why does this matter?`` 

These devices can be easily compromised. An average of 22 "IoT" devices live inside the American home. 

## Wi-Fi Routers

IoT devices connect to the internet via the home Wi-Fi router, or send a singal to a "bridge device" or even directly pair with your smart phone. If an IoT device is compromised depending on its privileges. 

It can be used to attack or probe other devices on the same network, including the router. At the very least it can sniff traffic, and capture credentials, to gain access to the router. 

## Propagation Techniques

### Worms 

Self-propagating malware can spread to other systems automatically. If there's an exploitable vulnerability present on many systems, a worm can be an effective way to build a botnet quickly.

### Trojans

Malware disguised as legitimate software can be inadvertently installed by users, adding their machines to a botnet.

### Drive-by Downloads

Simply visiting a malicious website or viewing a malicious ad can lead to malware being silently downloaded and executed on a user's system.

### Phishing

The age old tricking users into executing malicious files or giving away credentials is still the most common way to compromise systems.

### Botnet Objectives

Once a botnet is established, it can be used for various malicious activities, including DDoS attacks, spamming, cryptocurrency mining, and more.

## Defensive Measures

### Change Default Credentials

Always replace default usernames and passwords on both IoT devices and routers.

### Firmware Updates

Regularly update the firmware on devices and routers to patch known vulnerabilities.

### Network Segmentation

If possible, separate IoT devices from primary devices using different network segments or VLANs.

### Secure Configurations

Disable unnecessary services, ensure encryption is used for communication, and employ strong, unique passwords.

## Attack Vectors 

Wi-Fi router passwords, especially default ones, can be a significant vulnerability if not changed let's break it down:

### Brute-Forcing Wi-Fi Passwords

WPA and WPA2 encryption for Wi-Fi have proven resistant to brute-forcing, especially if strong, long passwords are used. However, WEP, an older standard, can be cracked quickly. 

The primary attack vector against WPA/WPA2 is the WPS PIN, if enabled. It's an 8-digit number, and due to its structure, it's effectively reduced to (10^4 + 10^3) possibilities, making brute-forcing feasible.

WPA/WPA2 can be cracked using the 4-way handshake and then using offline brute force or dictionary attacks. This method's effectiveness depends on the password's strength.

## Conclusion 

Constructing and maintaining a botnet targeting IoT devices is a formidable undertaking that involves significant risks, many complexities, and illegal activities. 

The primary purpose of using GPU/CPU resources of infected devices for cryptocurrency mining – faces practical challenges. This includes the limited processing power of most IoT devices and the inefficiency of CPU mining for popular cryptocurrencies.

However, considering the variance in [Exploit Kits](Exploitkits.md) - I explore the idea further. 
