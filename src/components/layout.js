import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import { Navbar, Footer } from '@theme';

const DefaultLayout = ({ children }) => {
  const { navbar: navbarConfig, footer: footerConfig } = useThemeConfig();

  return (
    <div>
      <Navbar items={navbarConfig.items} logo={navbarConfig.logo} />
      <main>{children}</main>
      <Footer links={footerConfig.links} />
    </div>
  );
};

export default DefaultLayout;
