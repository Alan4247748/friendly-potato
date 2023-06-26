import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Step 1',
    imgSrc: '/img/research.png',
    description: (
      <>
        Build up context to understand your goals and audience.
      </>
    ),
  },
  {
    title: 'Step 2',
    imgSrc: '/img/drink.png',
    description: (
      <>
        Interview your experts for technical nuance.
      </>
    ),
  },
  {
    title: 'Step 3',
    imgSrc: '/img/finish.png',
    description: (
      <>
        2-3 rounds of <code>editing</code> to develop the stories for publication.
      </>
    ),
  },
];

function Feature({ imgSrc, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} alt={title} className={styles.featureImg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
            <h1>Process</h1>
          </div>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
