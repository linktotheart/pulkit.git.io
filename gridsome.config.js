// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Pulkit Journal",
  siteUrl: `localhost`,
  host: "0.0.0.0",
  titleTemplate: "%s - Pulkit Singh",
  siteDescription: "Creative technologist",
  plugins: [
    {
      use: 'gridsome-plugin-purgecss',
      // default options, the following will be included if you don't provide anything
      options: {
        content: [
          './src/**/*.vue',
          './src/**/*.md'
        ],
        css: ['./src/**/*.css','./src/**/*.scss'],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
        safelist: ['random', 'yep', 'button', /^nav-/]
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects/**/*.md",
        typeName: "Projects",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "articles/**/*.md",
        typeName: "Articles",
        resolveAbsolutePaths: true,
        refs: {
          categories: {
            typeName: "Tag",
            create: true,
          },
        },
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  },
  templates: {
    Tag: [
      {
        path: "/tags/:id",
        component: "~/templates/Tag.vue",
      },
    ],
  }
}
