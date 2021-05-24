---
date: 2021-05-24T16:39:05Z
categories:
- vuejs
- gridsome
- javascript
title: First look at Gridsome? Vue.JS on steroids!
thumbnail: "/uploads/group122.jpg"
excerpt: Gridsome is a GatsbyJS inspired Static Site Generator (SSG) for vue, that
  are fast by default.

---
#### What is Gridsome?

Gridsome is a _Static-Site-Generator_ for **Vue.JS,** which is heavily inspired by Gatsby and Nuxt.JS. Websites made with Gridsome are fast by default as they are Vue powered SPA's, and data layer is handled by _GraphQL_, which is a great and very easy tool to collect data almost from anywhere like WordPress, Any API's, .md files, or even Google Spreadsheet and turn them into static sites.

> Gridsome is a Vue.js powered Jamstack framework for building static generated websites & apps that are fast by default 🚀.
>
> \- [Gridsome ](https://gridsome.org/docs/)Developers

#### Why Gridsome?

* **Vue.js for frontend**- The simplest & most approachable frontend framework.
* **Data sourcing**- Use any Headless CMSs, APIs or Markdown-files for data.
* **Local development with hot-reloading**- See code changes in real-time.
* **File-based page routing**- Any`Name.vue`file in`src/pages`is a static route.
* **Dynamic routing**- Any`[param].vue`file in`src/pages`is a dynamic route.
* **Static file generation**- Deploy securely to any CDN or static web host.
* **GraphQL data layer**- Simpler data management with a centralized data layer.
* **Automatic Code Splitting**- Builds ultra performance into every page.
* **Plugin ecosystem**- Find a plugin for any job.

![](/uploads/1_2kutxjotjt3kja7cv4i0la.png)

***

#### How to install

##### 1. Install Gridsome CLI tool

* Using **YARN:** `yarn global add @gridsome/cli`
* Using **NPM:** `npm install --global @gridsome/cli`

##### 2. Create a Gridsome project

1. `gridsome create my-gridsome-site` to create a new project
2. `cd my-gridsome-site` to move into project directory
3. `gridsome develop` to start local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌

##### 3. Next steps

1. Create `.vue` components in the `src/pages` directory to create page routes.
2. Use `gridsome build` to generate static files in a `/dist` folder

[Read more at Gridsome Official Document](https://gridsome.org/)

![](https://josephfitzsimmons.com/posts/getting-started-with-gridsome-and-drupal-8/images/Screen-Shot-2019-03-27-at-12.41.17-AM.png)

<p class="alert alert-info info"> Gridsome builds ultra performance into every page automatically. You get code splitting, asset optimization, progressive images, and link prefetching out of the box. With Gridsome you get almost perfect page speed scores by default. </p>

***

#### Conclusion

Gridsome is built for the [Jamstack](https://pulkits.netlify.app/blog/what-is-jam-stack/) workflow - a new way to build websites that gives you better performance, higher security, cheaper hosting, and a better developer experience. Generate prerendered (static) pages at build time for SEO-purpose and add powerful dynamic functionality with APIs and Vue.js.