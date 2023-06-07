import React from 'react';
import Form from '../components/Form';
import DefaultLayout from '../components/layout';
import '../css/custom.css';

const Contact = () => {
  return (
    <DefaultLayout>
      <div>
        <Form />
        <div className="hero hero--primary" style={{ height: '25rem' }}>
          <div className="container">
            <h1 className="hero__title">Hero Title</h1>
            <p className="hero__subtitle">Not all heroes wear capes</p>
            <div>
              <button className="button button--secondary button--lg">Get Started</button>
            </div>
          </div>
        </div>
        <h1>Keen for your message</h1>
      </div>
    </DefaultLayout>
  );
};

export default Contact;
