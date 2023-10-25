---
title: Logic Tree
sidebar_label: Docusaurus 
sidebar_position: 4
---

![Docusurus Illustration](/img/docus.png)

## What is Docusaurus?

Docusaurus 2 is an open-source static site generator framework developed and maintained by Meta. It's built with React, and offers various features out-of-the-box. Some of the logic I found cumbersome, as with most React frameworks. Docusaurus does provide a nice platform that has many built in abstractions and a API plugin friendly enviorment that suits many users and devs.

## Use Case

I used [Docusaurus 2], for the boiler plate. From my local - I push direct to this [GitHub repo](https://github.com/Alan4247748/friendly-potato). A build is triggered in Netlify—basic CI/CD. As a Tech writer I try to lean into becoming a better Dev: below is the website structure 😁.

``` Javascript
Website_Directory/

├── Root/
│   ├── docusaurus.config.js
│   │── sidebar.js
│   ├── package.json
│   ├── README.md
│   │── robots.txt
│   └── package.json
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
│   │  └──css/
│   │     ├──about.css
│   │     ├──custom.css
│   │     
│   │
└──Case-studys/
│   │   ├──Advertising/
│   │       └──Volvo.md
│   │       └──Adobe.md
│   │
│   │   └──Tech Writing/
│   │       └──Addestino.md
│   │       └──A-P-I-Docs.md
│   │ 
└── Blog/
│   ├── authors.yml/
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

## Other Frameworks

Not exhaustive but worth mentioning.

[***Read the Docs:***](https://readthedocs.org/) is a popular documentation hosting platform that simplifies the process of creating and publishing documentation. It supports various documentation formats, such as Sphinx, MkDocs, and Jupyter notebooks.

[***GitBook:***](https://www.gitbook.com/) is a versatile platform that allows users to create, publish, and host documentation. It supports various documentation formats, including Markdown, AsciiDoc, and reStructuredText.

[***Jekyll:***](https://jekyllrb.com/) is a popular static site generator that can be used to create documentation websites. It uses Markdown and Liquid templating to generate static HTML pages.
