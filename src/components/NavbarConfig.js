import React from 'react';

const NavbarConfig = () => {
  const navbarConfig = {
    title: 'Home',
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
      { to: '/blog', label: 'Blog', position: 'left' },
      { to: '/about', label: 'About', position: 'right' },
      { to: '/contact', label: 'Contact', position: 'right' },
    ],
  };

  return navbarConfig;
};

export default NavbarConfig;
