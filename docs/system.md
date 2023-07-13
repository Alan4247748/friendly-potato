---
Title: Markdown Features
id: intro
sidebar_label: Embedded Systems
---


# Intro 

I'm designing a prototype (sensor system) for the oil and gas industry. Specically, to calculate (volume, heat, and pressure). It breaks down into (3) main parts:

#1 The physical device (microcontroller) lives inside a (plastic casing) with battery. Attached solar pannel for long-term

#2 Each device collects data and needs to it to a (gateway) or upload directly to the cloud (Networking Layer).

#3 An Application that allows users to see (what's happening) from anywhere. 

# Software 

I'm writing the software in [ULisp](https://ulisp.com/). Each ESP 32-Whisper Node will be boot loaded with software utilities — a series of programs that filters, analyses, and translates (electrical signals) and pushes this data into a time-series designed database (mongoDB).
 
# Hardware

I've selected the ESP 32-Whisper Node to do the heavy lifting.

Key Specs:
- Wifi enabled 
- Bluetooth enabled 
- Pulse Counter (PCNT)
- Ultra­Low­Power (ULP) Coprocessor


![Functional Block Diagram](/img/ESP32.png)

# The Interplay 

The hardware and software of this system come in many components and layers. All of them working in unision allows 
Designing a bottom-up soultion while doing bottom-up software design. The idea for this product (came) rather sudd

# Low Bandwidth 

Oil and gas wells are often in remote locations adding an extra challenge for connectivity. It's why I decided to create a bottom up soultion so (memory) & (data size) can be kept in check. 

# RoadMap 

The plan is to have a prototype (ready to test) by the end of the year. 
