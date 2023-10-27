---
sidebar_label: Pegasus Spyware
description: Bootstrapped computing 
Id: The Hacker's Hack
sidebar_position: 2
---

![Nothing is safe](/img/cyber.png)

## Pegasus Spyware

Uses a zero day exploit to gain FORCEDENTRY over Apple devices. 

The exploit began using PDF files disguised as GIF files to inject JBIG2-encoded data causing an integer overflow in Apple's CoreGraphics system, bypassing Apple's "BlastDoor" sandbox for message content. 

JBIG2 doesn't have scripting capabilities, but when combined with a vulnerability, it does have the ability to emulate circuits of arbitrary logic gates operating on arbitrary memory. 

Using over 70,000 segment commands defining logical bit operations, it defines a small computer architecture with features such as registers and a full 64-bit adder and comparator which can search memory and perform arithmetic. 

It's not as fast as JS, but it's an equivalent. The bootstrapping operations for the sandbox escape exploit are written to run on this logic circuit and the whole thing runs in this weird, emulated environment created out of a single decompression pass through a JBIG2 stream. 

**An example of pure genius and totally terrifying reminder of what minds can devise.**

## Bootstrapped Computing

In highly restricted environments, it's possible to create a bootstrap mechanism that builds up a more functional computing environment from basic primitives. This is similar to how early computers were bootstrapped with a layer of basic instructions that allowed them to run more complex software on top. Early computer scientists built complex systems from rudimentary operations. How does this parallel within restricted or unexpected environments to achieve complex tasks?

**Unintended Functionality**

Features and functions of a system that are seemingly harmless can be combined to achieve malicious ends. The fact that JBIG2's decompression can be used to emulate logic gates isn't a direct security vulnerability. It's in combination with other vulnerabilities, that make it a key block in an attacker's arsenal.

This could lead to a broader discussion on the philosophy of secure software design. How can developers anticipate and mitigate against such creative misuses of their software's functionality? These core concepts emphasize the ingenuity of exploit developers and the challenges faced in creating truly secure systems.

## Zero Click 

**Capability Evoultion** 

Pegasus initially employed a combination of three separate vulnerabilities in iOS, collectively termed "Trident." This chain of vulnerabilities allowed the attacker to jailbreak the device and install the spyware. Pegasus has evolved to the point where it no longer needs any direct interaction from the targeted user, to deploy its spyware. This magical technique is called a Zero Click Exploit. I'm unaware of "technically speaking" how the Israeli company NSO Group, leverages an attack vector with zero user interaction to embed it's spyware. 

However, in 2019, it was reported that sucessful zero-click attacks via WhatsApp where the attackers call a target's phone through WhatsApp and, even if the call was not answered, the spyware was installed. Pegasus sucessfully zero-click exploited iphone users with via their phone number. 

**When the NSO Group or their customers wants to access your device they can.**
