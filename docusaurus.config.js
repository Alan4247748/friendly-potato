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
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Home',
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: 'Case Studies',
        },
        { to: '/blog', label: 'Essays', position: 'right' },
        { to: '/about', label: 'About', position: 'right' },
        { to: '/contact', label: 'Contact', position: 'right' },
      ],
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
