import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link'; // Import the Link component
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'VOLVO',
    imgSrc: '/img/volvo4.png',
    description: <>Advertising</>,
    buttonText: 'Case Study',
    link: '/docs/case studys/intro', // Updated path for Volvo
  },
  {
    title: 'ADDESTINO',
    imgSrc: '/img/add1.png',
    description: <>Technical writing</>,
    buttonText: 'Case Study',
    link: '/docs/Tech Writing/Addestino', // Updated path for Technical writing
  },
  {
    title: 'AFAM',
    imgSrc: '/img/product.png',
    description: <><code>Product Specs</code></>,
    buttonText: 'Case Study',
    link: '/docs/case studys/afam', // Updated path for Product Spec
  },
];


function Feature({ imgSrc, title, description, buttonText, link }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} alt={title} className={styles.featureImg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link} className="button button--secondary">{buttonText}</Link> {/* Updated to use Link */}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h1>PROJECTS</h1>
          </div>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
