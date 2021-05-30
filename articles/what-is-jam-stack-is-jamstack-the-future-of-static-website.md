---
date: 2021-05-30T15:05:06Z
categories:
- jamstack
- ssg
title: What is Jam Stack? Is jamstack the future of static website?
thumbnail: "/uploads/rainbow-gradient-gyms-back-to-business-landscape-banner.jpg"
excerpt: Rise of the Jamstack. Why choose jamstack over the traditional website stacks?

---
### What is Jamstack?

Jamstack is an architecture designed to make the web faster, more secure, and easier to scale. It builds on many of the tools and workflows which developers love, and which bring maximum productivity.

Mathias Biilmann, CEO of Netlify, coined [JAMstack](https://jamstack.org/) and describes it as

>  “A modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.”

 The three elements of JAMstack include –

1. **JavaScript**– Entire execution on client-site for dynamic functionality
2. **APIs**– Reusable APIS for backend interaction accessed using HTTPS
3. **Markup**– Templates prebuilt with static site generators at deploy time

![](/uploads/dfsdfsdfsdf.jpg)

### Why choose jamstack? 

A Jamstack architecture can bring all sorts of benefits to the sites and to project workflows. Some of the key benefits are:

#### 1. Security

The Jamstack removes multiple moving parts and systems from the hosting infrastructure resulting in fewer servers and systems to harden against attack.

![](/uploads/netefleifghu.jpg)

Serving pages and assets as pre-generated files allows read-only hosting reducing attack vectors even further. Meanwhile dynamic tools and services can be provided by vendors with teams dedicated to securing their specific systems and providing high levels of service.

#### 2. Scale

Popular architectures deal with heavy traffic loads by adding logic to cache popular views and resources. The Jamstack provides this by default. When sites can be served entirely from a CDN there is no complex logic or workflow to determine what assets can be cached and when.

With Jamstack sites everything can be cached in a content delivery network. With simpler deployments, built-in redundancy and incredible load capacity.

#### 3. Performance

Page loading speeds have an impact on user experience and conversion. Jamstack sites remove the need to generate page views on a server at request time by instead generating pages ahead of time during a build.

With all the pages are already available on a CDN close to the user and ready to serve, very high performance is possible without introducing expensive or complex infrastructure.

![](/uploads/architecture.svg)

### Static sites builders

There are many static site builder tools for every framework possible, and others like Hugo and Jekyll. My go to pick is [GatsbyJS](https://www.gatsbyjs.com/) and [NuxtJS](https://nuxtjs.org/).

### Conclusion

We learned about jamstack, and how jamstack sites are faster and more secure than traditional web building methods which requires additional web servers and databases. In traditional web methods like JAVA Spring or Laravel, database is hit each time a page is refreshed to fetch content. But in jamstack we only hit a database request at the time of build and all pages are generated statically which are faster and more secure, cause there's no database layer connected to the static HTML files, hence no fear of SQL-Injection or such things.