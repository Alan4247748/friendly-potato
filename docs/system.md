---
Title: Sensor Product
sidebar_label: Embedded Systems
---


# Intro 

I'm designing a (sensor prototype) for the oil and gas industry. Specically, to calculate (fluid volume) within oil and water tanks. 

It breaks down into (3) main parts:

**#1** A physical device containing a microcontroller and battery which lives inside a (plastic casing). This is connected to another sensor inside the vessel sending "radar pulses" to detect the fluid level. A solar pannel is attached for long-term power generation. 

**#2** The microcontroller collects the electrical data, parses, and translates it before sending it to a (gateway) which connects directly to the cloud via the Networking Layer.

**#3** A user application (Mobile & Web) that provides users with (real-time) and historical data.

# Software 

I'm writing the software in [ULisp](https://ulisp.com/). The software utilities will be bootloaded into the microcontrollers — a series of programs that filter, analyse, and translate (electrical signals). A networking transfer layer that pushes data into a time-series database (mongoDB).
 
# Hardware

I've selected the ESP 32-Whisper Node (microcontroller) to do the heavy lifting.

**Key Specs:**

- Wifi enabled 
- Bluetooth enabled 
- Pulse Counter (PCNT)
- Ultra­Low­Power Coprocessor (ULP) 


![Functional Block Diagram](/img/ESP32.png)

# The Interplay 

The hardware and software of this system involve several components and layers. My approach is to buildi a bottom-up soultion vis-à-vis a bottom-up software design process. There are many companies that offer a similar product. However, many of them utlize SCADA networks, are rather costly, and (could be) better optimized for power utlization and memory usage. 

# Low Bandwidth 

Oil and gas wells are in remote locations adding a challenge for connectivity. These enviorments are (BW starved) and sometimes not even connected to a electrial grid. Each device will transfer data on the 2.4GHz frequency to the gateway device. 

Choosing ULISP - as the programming language is key. It allows for changes at runtime which means (calucaltion frequency) can be fine-tuned. 

# RoadMap 

The plan is to have a prototype (tested) and operational by the end of the year. 
