---
slug: Infra-as-code
title: Infrastructure as Code 
authors: zipi
tags: [infrastructure as Code, Cloud computing]

---

Imagine you want to build a Lego castle 🏰.
You have bricks and instructions showing what to use and where 🏗. 

![infrastructure as code](/img/Iac.png)

<!--truncate-->

Follow the instructions, place the bricks, and build your castle 🏰. This framework is similar to infrastructure as code (IaC) 🔁. Software engineers write instructions that tell computers how to set up and run different parts of a technology system 🈯. This includes setting up servers, creating databases, API design and data pipelines to connect different systems.

Best practices: 💯
- Code as a single source of truth.
- Git version control for all of your configurations and IaC.
- Use source control repositories for documentation along with code.
- Test and monitor configurations.

The (IaC) concept is used by businesses moving from running physical servers and equipment ("on-premise") to using cloud services, Amazon, Google, and Microsoft. In the cloud, hardware is involved, but instead, you rent the amount of computing power, storage, and other resources you need. Changing core infrastructure is difficult, time-consuming, and expensive.

You can automate tasks when moving to the cloud, including creating and configuring virtual servers, setting up networking, and even scaling resources up or down as needed.

Automation works on some use cases but requires maintenance forever and does not solve everything.
Using IaC solutions means building an environment in the Cloud in a few hours and tearing it down in a few minutes.

Vs.

Manually, it would take a few weeks to set up the environment and another week to clean up.
Does an IaC strategy solve all the issues within Infrastructure management? Certainly not.