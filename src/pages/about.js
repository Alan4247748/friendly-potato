import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import { Navbar, Footer, Layout } from '@theme';
import 'aboutStyles.css';

const About = () => {
  const { navbar: navbarConfig, footer: footerConfig } = useThemeConfig();

  return (
    <Layout>
      <Navbar items={navbarConfig.items} logo={navbarConfig.logo} />
      <Layout.Main>
        <h1>About Page</h1>
        {/* Other content */}
      </Layout.Main>
      <Footer links={footerConfig.links} />
    </Layout>
  );
};

export default About;