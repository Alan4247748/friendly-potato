---
slug: first-blog-post
title: First Blog Post
authors: zipi
tags: [Network Security, Zero-Trust concept]

---

01. WHAT IS ZERO-TRUST NETWORKING?
Why is it called “Zero-Trust Networking,” and what could this mean for a CIO? We need to look to the past and how networks were traditionally managed to frame this. Networks, in the beginning, were designed with a “perimeter defence policy,” meaning the strategy was to keep attackers outside the network. If an attacker did gain access to the network, they would be able to move laterally throughout the network. As a second line of defence, companies often apply network segmentation to limit such lateral movement.

<!--truncate-->

The growth of modern technology such as Smartphones, BYOD and VPNs has shifted the definition of network boundaries. Before, Claudia, an accountant working from the office, would only have access to the accounting department applications from the computer on her desk. Today, she might be working on her laptop from home or from a co-working space. The traditional framework of identifying her by IP address no longer suffices to secure her access to the network

Zero-Trust Networking (ZTN) tackles this problem by using all of the information available to validate each connection request to the network using a centralized set of access policies. This information ranges from “do we recognise the computer?”, “are they connected to the VPN?”, “have they requested access to this application previously?”, to“does the user have an abnormal access pattern” and “was this computer scanned for viruses recently?”

One of the role models for this concept is Google BeyondCorp. (2014) After a break-in by an Advanced Persistent Threat (APT), they started applying the techniques from perimeter defence to every connection in the company. The resulting set-up gives Google employees access to core Google operations from virtually any location without using a VPN. When something goes wrong, the system itself can interpret applicable policies and suggest self-service options such as “apply to join this group” or “request access from manager X”.

02. CURRENT DEFENCES AND WHY THEY FALL SHORT
I already mentioned network segmentation as a defence, where a business is divided into distinct segments and access control is applied to cross-segment connections. This is the same concept as perimeter defence but on a smaller scale. In this model, low-impact attacks often start a chain of lateral movements until important services can be attacked.

Most internal services are protected using simple passwords. Passwords almost never expire and they can be leaked, phished or stolen. Furthermore, most companies do not have adequate breach response or credential rotation procedures, which may allow attackers to regain entry after they have been detected and pushed out.

Most companies use Microsoft Active Directory as the backbone for their identity and access management, in which sessions are secured by means of cryptographic tokens. These tokens have a set lifetime (a few hours), so eventually become useless. Tokens can still be stolen and abused, however.

Both techniques use local static information, respectively network identity and credentials. ZTN improves on both by securing access on a per-session basis, using available global dynamic information. For example, policies might block a burst of connection attempts to a specific server from a computer that otherwise never contacts it, or consecutive logins for the same user from different countries.

Under ZTN, each machine, user or workload on the network receives a cryptographic certificate from a single trusted identity. As part of connection set up, each peer verifies the certificate of the other peer. Additionally, the server applies a policy to determine whether the connection is allowed. This policy may reference global dynamic information by consulting a central location, or by being evaluated there.

03. BUSINESS CONTEXT
What problems are solvable with this technology? As a quick win, every connection between two machines on the network is automatically encrypted. Also, it is made subject to mutual authentication,

meaning that the client knows who the server is, and the server knows the client. This solves “monster in the middle” attacks.

Secondly, adopting a central server that checks policies makes it easy to start logging all connections for auditing purposes. This can come in handy in case of an attack to learn what was compromised and how, or even to detect and stop attacks as they are happening.

04. ZERO-TRUST NETWORKING IMPLEMENTATION
Adopting ZTN is unfortunately not a simple flick of a switch, it does have an impact your application landscape. It is a good idea to start on the frontier of new software development first and move existing applications towards Zero-Trust in sections.

The easiest way to begin is by grafting ZTN onto existing trust mechanisms in your company. For example, every cloud provider has a central identity and access management (IAM) component that already implements some ZTN concepts. IAM tokens can then be used to prove identity to the central certificate generator and bootstrap the ZTN trust hierarchy.

There exists an open source project for ZTN called SPIFFE (secure production identity framework for everyone), which has a reference architecture called SPIRE. After enrolling all cloud workloads, SPIRE can be used gradually to provision certificates for on-premise workloads.

It can be challenging and/or expensive to completely embrace ZTN for legacy software. A strategy for presenting legacy software as ZTN workloads is to wrap it in a proxy server that transparently encrypts or decrypts with a ZTN-provided certificate.

Several technology companies have already implemented zero-trust networking across their company landscape, including Google, Pinterest, Uber, and ByteDance.

05. IMPLICATIONS FOR THE FUTURE
The key takeaway for any CIO is to reduce the use of (long-lived) passwords in favour of workload identities and to strive towards centralized access policies. When evaluating ZTN vendors, make sure that they are not just ticking a box, but that they will transform how your business operates.
