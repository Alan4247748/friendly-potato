import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';


const twocolumns = () => {
  return (
    <div className="container">
      <div className="left-column">
        <h1>Advertising</h1>
        <p>I create ideas for money.</p>
        <Link
            className="button button--secondary button--lg"
            to="/contact">
            Portfoilo 🎯
          </Link>
      </div>
      <div className="right-column">
        <h1>Tech Writing</h1>
        <p>Software, hardware, and cloud.</p>
        <Link
            className="button button--secondary button--lg"
            to="/About">
            Docs 💻
          </Link>
      </div>
    </div>
  );
};

export default twocolumns;
