---
title: Logic Tree
sidebar_label: Docusaurus Framework 
sidebar_position: 2
---

High level, I used [Docusaurus 2], for the boiler plate.
From my local - I push direct to this GitHub repo.
A build is triggered in Netlify. Basic CI/CD. 
Below is how the website is structured. 

``` Javascript 
Website_Directory/

├── Root/
│   ├── docusaurus.config.js
│   │── sidebar.js
│   │ 
│   ├── static/
│   │   └──img1.png
│   │   └──img2.png
│   │
│   ├── src/
│   │   └──components/ 
│   │      └──form features
│   │      └──index.js
│   │      └──styles.module.css
│   │ 
│   │   └──pages/
│   │      └──About.md
│   │      └──Contact.js
│   │ 
│   │  └──fonts/
│   │     ├──open-sans.svg
│   │     ├──open-sans.ttf
│   │     └──open-sans.woff
│   │
└── Docs/
│   │   ├──Advertising/
│   │       └──Volvo.md
│   │       └──Adobe.md
│   │
│   │   └──Tech Writing/
│   │       └──Addestino.md
│   │       └──A-P-I-Docs.md
│   │ 
└── Blog/
│   ├── authos.yml/
│   │   ├── index.md
│   │   ├── infrastructure-as-code.md
│   │   └── Monitor-Aerospike-.md
│   │ 
│   │ 
└── Build/
    └── css/
    └── images/
    └── js/

``` 