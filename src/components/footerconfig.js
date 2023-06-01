import React from 'react';

const FooterConfig = () => {
  const footerConfig = {
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
            label: 'Blog',
            to: '/blog',
          },
        ],
      },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} Alan Murphy, Development, Content, and Design.`,
  };

  return footerConfig;
};

export default FooterConfig;
