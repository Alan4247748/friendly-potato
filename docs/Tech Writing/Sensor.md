---
Title: Hardware
description: System Design
sidebar_label: Hardware
Id: Hardware
sidebar_position: 3
---

![Remote Sensor Device](/img/s1.png)

## REMOTE SENSOR DEVICE 

I'm designing a sensor prototype for the oil and gas industry. Its purpose is to calculate liquid volume in oil and water tanks.
It breaks down into (3) main parts:

**#1** 

A physical device containing a microcontroller, battery, solar panel, housed inside a plastic casing. See concept art above. 

**#2** 

The microcontroller collects the electrical data, parses, and translates it. Then pushes the data via  using the Then  which connects directly to the cloud via the Networking Layer.

**#3** 

A user application (Mobile & Web) that provides users with real-time and historical data.

## Software 

Choosing [ULisp](https://ulisp.com/) - as the programming language is key. It allows for changes at runtime which means (calucaltion frequency) can be fine-tuned. 

The software utilities will be bootloaded into the microcontrollers — a series of programs that filter, analyse, and translate (electrical signals). From the MC these signals are HTTP(ed) to a gateway device. From there via a networking transfer (LORA) to a time-series database (mongoDB).

 
## Hardware

![ESP 32 Whisper](/img/h1.png)

![Remote Sensor Device](/img/s3.png)

I've selected the ESP 32-Whisper Node `microcontroller` to do the heavy lifting.

**Key Specs:**

- Wifi enabled 
- Bluetooth enabled 
- Pulse Counter (PCNT)
- Ultra­Low­Power Coprocessor (ULP) 


![Functional Block Diagram](/img/h4.png)

![ESP 32 Whisper](/img/h3.png)
## Use Case

Scattered throughout the lower 48 are millions of small tank batteries. Most of them do not have any automation, because modern products can crush the economic productivity of stripper wells. 

The companies of today are missing this key market. There soultions are rather costly, and could be better optimized for energy utlization, memory, and user interfaces. 

## The Interplay 

The hardware and software of this system involve several components and layers. My approach is to build a bottom-up soultion vis-à-vis a bottom-up software design process. 

## Low Bandwidth 

Oil and gas wells are in remote locations adding a challenge for connectivity. These enviorments are **BW starved** so each device will transfer data on the 2.4GHz frequency to the gateway device. The gateway will utlize the LORA network for long range remote data transfer. 

## Energy

Locations sometimes are not connected to an electrial grid. This sensor system will have battery and solar power capabilites of 10 years.

## RoadMap 

The plan is to have a prototype tested by the end of the 2024. 

![Remote Sensor Device](/img/s2.png)
