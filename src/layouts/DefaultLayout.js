import React from 'react';
import Layout from '@theme/Layout';

const DefaultLayout = ({ children }) => {
  return (
    <Layout>
      <div>{children}</div>
    </Layout>
  );
};

export default DefaultLayout;
