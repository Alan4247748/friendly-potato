// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
const config = {

  title: 'Donoho Murphy',
  tagline: 'Tech and Energy Writer',
  url: 'https://damurphy.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  scripts: [
    {
      src: "https://plausible.io/js/script.js",
      "data-domain": "damurphy.com",
    },
  ],
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Alan4247748', // Usually your GitHub org/user name.
  projectName: 'friendly-potato', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    path: 'locales', // Specify the path where your translation files are located
    localeConfigs: {
      en: {
        label: 'English',
      },
      // Add other locales and their configurations as needed
    },
  },
  

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          path: 'blog',
          showReadingTime: true, 
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      },
    ],
  ],

    plugins: [
      [
        '@docusaurus/plugin-ideal-image',
        {
          quality: 65,
          max: 500, // max resized image's size.
          min: 750, // min resized image's size. if original is lower, use that size.
          steps: 2, // the max number of images generated between min and max (inclusive)
          disableInDev: false,
        },
      ],
    ],

    themeConfig: {
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Logo',
          src: 'logo.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'CaseStudys',
          },
          { to: '/blog', label: 'Essays', position: 'left' },
          { to: '/about', label: 'About', position: 'left' },
        ],
        hideOnScroll: true, // Add this line to hide the navbar on scroll
      },
      
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Admin',
          items: [
            {
              label: 'Legal',
              to: '/Legal',
            },
            {
              label: 'Sitemap',
              to: '/sitemap.xml',
            },
              {
                label: 'Status',
                to: 'https://onionshors.statuspage.io/',
              },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/Alan4247748',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/alan-murphy-/',
            },
          ],
        },
        {
          title: 'Feeds',
          items: [
            {
              label: 'Essays',
              to: '/blog',
            },
            {
              label: 'Hackernoon',
              href: 'https://hackernoon.com/u/damurphy',
            },
            {
              label: 'LessWrong',
              href: 'https://www.lesswrong.com/users/donoho_murphy',
            },
          ],
        },
      ],
      copyright:
        'Copyright © 2022-' +
        new Date().getFullYear() +
        ' Alan Murphy, Development, Content, and Design.',
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      defaultLanguage: 'javascript',
      position: 'right',
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    layout: {
      default: require.resolve('./src/layouts/DefaultLayout.js'),
    },
    algolia: {
      appId: 'W0YTE0WD6U',
      apiKey: '16b7c61c11cdde575c7252ca7bec5505',
      indexName: 'netlify_0b05f840-3fec-46cf-87bd-faf269a44eca_main_all',
      contextualSearch: true,
      externalUrlRegex: 'damurphy.com|blog\\.com',
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },
      searchParameters: {},
      searchPagePath: 'search',
    },
  },
};

module.exports = config;