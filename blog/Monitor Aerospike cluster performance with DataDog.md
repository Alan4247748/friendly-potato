---
slug: Aerospike
title: Aerospike Cluster Performance
authors: zipi
tags: [Aerospike, DataDog]
---

[Aerospike](https://aerospike.com/) is a distributed and scalable NoSQL datastore providing low-latency access to data. 

![Aerospike custom graphic](/img/Aerospike.png)

<!--truncate-->


<div id="elevenlabs-audionative-widget" data-height="90" data-width="100%" data-frameborder="no" data-scrolling="no" data-publicuserid="1ea4904a1504980e57bc4333086a81b3a138c442c37817d36d84f5c859f5bb9a" data-playerurl="https://elevenlabs.io/player/index.html" data-small="True" data-textcolor="rgba(0, 0, 0, 1.0)" data-backgroundcolor="rgba(255, 255, 255, 1.0)" >Loading the <a href="https://elevenlabs.io/text-to-speech" target="_blank" rel="noopener">Elevenlabs Text to Speech</a> AudioNative Player...</div><script src="https://elevenlabs.io/player/audioNativeHelper.js" type="text/javascript"></script>

## Aerospike 

Aerospike uses a Hybrid Memory Storage (HMS) architecture design that stores frequently accessed data in Flash memory and less frequently accessed data in solid-state drives (SSDs). The HMS design optimizes read and write performance allowing you to handle [namespaces] with different storage engines. This results in minimal hardware requirements lowering costs and improving data performance.

This is why Aerospike is widely used in (performance-heavy) e-commerce, gaming, and finance applications. To interact with Aerospike, you can use the Aerospike wire protocol, a binary protocol that uses a (request-response) model for client-server communication. This protocol is used to communicate with the Aerospike database cluster over the network. The wire protocol supports various requests, such as read and write operations on records, batch operations, and secondary index queries. The protocol is optimized for low latency and high throughput, making it suitable for high-performance applications.

Aerospike supports client libraries for multiple programming languages, including Java, Python,  C#, and others. These libraries allow you to access Aerospike functionality from your application code. For example, the {Java client library} provides APIs such as put(), get(), and delete(). APIs take parameters such as the record key, the bin name, and the value and return responses indicating: success or failure.

## Metrics 101

[Monitoring data](https://www.datadoghq.com/blog/monitoring-101-collecting-data/) can take on many forms; for an Aerospike cluster, let's explore latency, throughput, and cluster health. 

1. Latency in Aerospike refers to the time it takes for the database to respond to client requests. This includes the time it takes to retrieve data from the storage engine, perform any necessary processing or aggregation, and send the response back to the client. The latency can be impacted by various factors, including the complexity of the query, the size of the data being requested, the number of nodes in the cluster, and the overall load on the system.

2. Throughput measures the rate at which the cluster processes data. This is an essential metric for ensuring that the cluster can handle the required workload and scale as needed. To optimize Aerospike's latency, carefully design the data model, properly tune the database configuration, and ensure the cluster is sized correctly and scaled to handle the expected workload.

3. Cluster health is a broad metric encompassing several factors, including node availability, replication factor, and data consistency. Monitoring cluster health ensures the overall stability and reliability of the cluster. Real-time alerts can be triggered when specific metrics and thresholds are reached. Allowing you to take corrective action before they impact your application's performance.

## DataDog 

Datadog is a monitoring and analytics platform that provides real-time visibility into the performance and health of your entire technology stack, with [200+ integrations](https://www.datadoghq.com/blog/tag/integration/) for various technologies, including cloud services, databases, containers, and more. Datadog’s agent works to aggregate and analyze performance data from all your systems in one place.

This can help you identify and diagnose issues more quickly, optimize performance and resource utilization, and make data-driven decisions about your infrastructure. With features like customizable dashboards, anomaly detection, and alerting, Datadog provides the tools to monitor your systems to ensure your applications and services perform optimally.