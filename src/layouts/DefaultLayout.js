import React from 'react';
import Layout from '@theme/Layout';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';

const DefaultLayout = ({ children }) => {
  return (
    <Layout>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </Layout>
  );
};

export default DefaultLayout;
