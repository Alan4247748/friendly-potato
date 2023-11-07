---
slug: L/commonLisp
title: 🅛 Common Lisp Potential 
authors: zipi
tags: [programming languages, DataBase construction]

---
Data analytics is a loaded term. But it has been common practice to use statistical analysis for thousands of years. Imagine today we all  possess many .CSV files. The aspiration is to construct a database using 🅛, to "easily" organize data.

![Common Lisp](/img/lisp.png)

<!--truncate-->

## Introduction

The realm of programming has witnessed the birth and evolution of numerous languages, each boasting unique features and capabilities. I've had a sweet spot of LISP since I first discovered it. I've recently discovered the 🅛 programming language emerges with its distinctive syntax and operators I figure, showcasing its practical utility would be fun. 

## Real-world Scenario

A user, immersed in data analytics, possesses multiple CSV files containing varied data from websites and social media platforms. The aspiration is to construct a database using 🅛, harnessing its features to seamlessly handle and organize the data.

## Approach to Database Construction

![Common Lisp](/img/l2.png)
1. **Defining Data Structures** 

Precise data structures to represent the data encompassed in the CSV files. For instance, if a CSV file holds website analytics data with columns for Date, Visits, and BounceRate, a record like WebsiteData 
```<< Date date, Integer visits, Decimal bounceRate >> could be defined to represent each row of data.```

2. **Parsing CSV Files** 

Using a function to parse .CSV files e.g. convert each line (or row) of the CSV file into the previously defined data structure, thereby transforming raw data into a structured format amenable for further operations.

## Comparative Insight

While other languages might necessitate verbose code and complex operations, 🅛's syntax and operators facilitate a more streamlined and straightforward process.

## Conclusion

The practical utility of 🅛, beckons further exploration into applications for other domains.

[Documentation](https://github.com/brendanberg/L)

![Common Lisp](/img/l1.png)