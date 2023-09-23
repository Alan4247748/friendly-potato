const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'COPY, TECH, AND PRODUCT',
  tagline: 'WRITER',
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
  organizationName: 'Alan4247748',
  projectName: 'friendly-potato',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    path: 'locales',
    localeConfigs: {
      en: {
        label: 'English',
      },
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
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Logo',
        src: '/img/yes.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: 'advertising',
        },
        { to: '/blog', label: 'essays', position: 'right' },
        { to: '/about', label: 'about', position: 'right' },
      ],
      hideOnScroll: false,
    },
    footer: {
      logo: {
        alt: 'Onion Shorts Logo',
        src: 'img/os.png',
        href: 'https://damurphy.com',
        width: 300,
        height: 100,
      },
      style: 'light',
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
              href: 'https://onionshors.statuspage.io/',
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
        'Copyright © 2019-' +
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
      respectPrefersColorScheme: true,
    },
    layout: {
      default: require.resolve('./src/layouts/DefaultLayout.js'),
    },
  },
};

module.exports = config;
