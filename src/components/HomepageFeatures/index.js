import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Step 1',
    Svg: require('@site/static/img/research.png').default,
    description: (
      <>
        Build up context to understand your goals and audience.
      </>
    ), 
  },
  {
    title: 'Step 2',
    Svg: require('@site/static/img/drink.png').default,
    description: (
      <>
        Interview your experts to grasp the technical nuance.
      </>
    ),
  },
  {
    title: 'Step 3',
    Svg: require('@site/static/img/finish.png').default,
    description: (
      <>
        2-3 rounds of <code>editing</code> to get the story ready for publishing.
      </>
    ), 
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
