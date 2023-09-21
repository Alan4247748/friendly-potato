import React from 'react';
import '../css/custom.css';

const Hero = () => {
  return (
    <div className="hero hero--primary" style={{ height: '25rem' }}>
      <div className="container">
        <h1 className="hero__title">Tech Writing</h1>
        <p className="hero__subtitle">Software and hardware</p>
        <div>
          <button className="button button--secondary button--lg">Click me</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
