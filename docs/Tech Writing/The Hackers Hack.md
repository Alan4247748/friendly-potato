---
sidebar_label: Hacker's Hack
description: Bootstrapped computing 
Id: The Hacker's Hack
sidebar_position: 2
---

![Nothing is safe](/img/cyber.png)

## Pegasus Spyware

It uses a zero-day exploit to gain FORCEDENTRY over Apple devices. 

At first, it used PDF files disguised as GIF files to inject JBIG2-encoded data causing an integer overflow in Apple's CoreGraphics system, bypassing Apple's "BlastDoor" sandbox for message content. 

JBIG2 doesn't have scripting capabilities, but when combined with a vulnerability, it does have the ability to emulate circuits of arbitrary logic gates operating on arbitrary memory. 

Using more than 70,000 segment commands that define logical bit operations, the system establishes a small computer with a basic architecture. This includes features like registers, a full 64-bit adder, and a comparator, enabling it to search memory and conduct arithmetic operations

It's not as fast as JavaScript (JS), but it's an equivalent. The bootstrapping operations for the sandbox escape exploit are written to run on this logic circuit and the whole thing runs in this weird, emulated environment created out of a single decompression pass through a JBIG2 stream. 

**An example of pure genius and terrifying reminder of what `minds` can devise.**

## Bootstrapped Computing

In highly restricted environments, it's possible to create a bootstrap mechanism that builds up to a more functional computing environment from basic primitives. This is similar to how early computers were bootstrapped with a layer of basic instructions. They hacked together utilities from which they could stich new more complex software together. Early Hackers went from rudimentary operations to complex software. How does this parallel within restricted or unexpected environments to achieve complex tasks?

**Unintended Functionality**

Features and functions of a system that are harmless can be combined to achieve malicious ends. The fact that JBIG2's decompression can be used to emulate logic gates isn't a direct security vulnerability. This plus other exploits make the hack possible. 

This could lead to a broader discussion on the philosophy of secure software design. How can developers mitigate against such creative misuses of their software's functionality? These core concepts emphasize the ingenuity of exploit developers and the challenges faced in creating truly secure systems.

## Zero Click 

**Capability Evolution** 

Pegasus initially employed a combination of three separate iOS processes, collectively termed **"Trident."** This chain of vulnerabilities allowed the attacker to jailbreak the device and install the spyware. Pegasus has evolved to the point where it no longer needs any direct interaction from the targeted user, to deploy its spyware. 

This magical technique is called a **Zero Click Exploit.**

However,

- In 2019, there were successful zero-click attacks through WhatsApp. Attackers could call a target's phone, and even if the call went unanswered, spyware would still be installed.

- In 2021, iPhone users began reporting compromised devices. Pegasus had advanced its capabilities, now able to hack phones merely by knowing the target's `phone number.`

The technical specifics of how the Israeli company NSO Group executes this attack are currently unknown. 

> **When the NSO Group // their customers wants to access your device they can.**
