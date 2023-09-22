import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '',
    imgSrc: '/img/volvo4.png',
    description: <>Volvo copywriting, web design, and advertising</>,
    buttonText: 'Case Study', // Added buttonText
  },
  {
    title: '',
    imgSrc: '/img/front.png',
    description: <>Technical writing for IT consultancy.</>,
    buttonText: 'Case Study', // Added buttonText
  },
  {
    title: '',
    imgSrc: '/img/product.png',
    description: <><code>Batteries</code> and technical products.</>,
    buttonText: 'Case Study', // Added buttonText
  },
];

function Feature({ imgSrc, title, description, buttonText }) { // Added buttonText prop
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} alt={title} className={styles.featureImg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="button button--secondary">{buttonText}</button> {/* Rendered button */}
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
