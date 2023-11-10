---
Title: Hardware
description: System Design
sidebar_label: Hardware
Id: Hardware
sidebar_position: 5
---

![Remote Sensor Device](/img/s1.png)

## Remote Sensor Device

I'm designing a sensor prototype for the oil and gas industry. The purpose is to calculate liquid volume in oil and water tanks and transfer the data real-time. 
It breaks down into (3) main parts:

**1** 

A physical device containing a microcontroller, battery, solar panel, housed inside a plastic casing. See concept art above. 

**2** 

Under the hood, the microcontroller collects the electrical data, parses, and translates it.

**3** 

A user application (Mobile & Web) provides an interface of field assets with real-time and historical data.

## Software 

Choosing [ULisp](https://ulisp.com/) - as the programming language was a key design decision. It allows for changes at runtime which means (calculation frequency) can be fine-tuned post deployment. 

The software utilities are bootloaded into the microcontrollers — which entail a series of programs that filter, analyse, and translate ```electrical signals```. These signals are HTTP(ed) to a gateway device. From there via a networking transfer (LORA) to a time-series database (mongoDB).

 
## Hardware

![ESP 32 Whisper](/img/h1.png)

![Remote Sensor Device](/img/s3.png)

I've selected the ESP 32-Whisper Node `microcontroller` to do the heavy lifting.

### Key Specs 

- Wifi enabled 
- Bluetooth enabled 
- Pulse Counter (PCNT)
- Ultra­Low­Power Coprocessor (ULP) 


![Functional Block Diagram](/img/h4.png)

![ESP 32 Whisper](/img/h3.png)
## Use Case

Scattered throughout the lower 48 are millions of small tank batteries. Most of them do not have any automation, because modern products can crush the economic productivity of stripper wells. 

The companies of today are missing this key market. Present solutions are rather costly, upwards of 10k per tank battery. Also these systems could be better optimized for energy utilization, memory, and improved user interfaces. 

## The Interplay 

The hardware and software of this system involve several components and layers. My approach is to build a bottom-up soultion vis-à-vis a bottom-up software design process. 

## Low Bandwidth 

Oil and gas wells are in remote locations adding a challenge for connectivity. These environments are **BW starved** so each device will transfer data on the 2.4GHz frequency to the gateway device. The gateway will transmit data via the [LORA network](https://lora-alliance.org) for long range low bandwidth data transfer. 

## On-site Power

Locations sometimes are not connected to an electrical grid. This sensor system will have battery and solar power capabilites for 10 years.

## RoadMap 

The plan is to have a prototype tested by the end of the 2024. 

![Remote Sensor Device](/img/s2.png)
