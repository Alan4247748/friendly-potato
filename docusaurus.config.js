// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Technical Writer',
  tagline: 'Tech, Energy, and Finance',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

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
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          
        },
        blog: {
          showReadingTime: true,

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          // Change to CSS.NES
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Projects',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
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
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/damurphy_/',
              },
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
            title: 'Published articles',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/Alan4247748',
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} Alan Murphy, Development, Content, and Design.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
