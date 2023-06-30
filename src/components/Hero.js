import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import '../css/custom.css';

const hero= () => {
  return (
    <DefaultLayout>
      <div className="hero hero--primary" style={{ height: '25rem' }}>
        <div className="container">
          <h1 className="hero__title">Tech Writing</h1>
          <p className="hero__subtitle">Software and hardware</p>
          <div>
            <button className="button button--secondary button--lg">Click me</button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default hero;
