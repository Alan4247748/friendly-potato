import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import Form from '../components/Form Features/index.js';
import '../css/custom.css';
import TwoColumns from '../components/Two columns';

const Contact = () => {
  return (
    <DefaultLayout>
      <div>
        <Form />
        <div className="hero hero--primary" style={{ height: '25rem' }}>
          <div className="container">
            <h1 className="hero__title">Tech Writing</h1>
            <p className="hero__subtitle">Software and hardware</p>
            <div>
              <button className="button button--secondary button--lg">Click me</button>
            </div>
          </div>
        </div> 
        <h1>Keen for your message</h1>
      </div>
      <div>
        <TwoColumns />
      </div>
    </DefaultLayout>
  );
};

export default Contact;
