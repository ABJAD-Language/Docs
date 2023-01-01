import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'C-Like Language',
    Svg: require('@site/static/img/main_curly_braces.svg').default,
    description: (
      <>
        ABJAD can be considered from the C-Languages family with a high resemblence to TypeScript.
      </>
    ),
  },
  {
    title: 'Arabic Programming Language',
    Svg: require('@site/static/img/main_arabic_letter.svg').default,
    description: (
      <>
        With ABJAD you can now write simple scripts in Arabic.
      </>
    ),
  },
  {
    title: 'RTL',
    Svg: require('@site/static/img/main_semicolon.svg').default,
    description: (
      <>
          Similar to Arabic, ABJAD is written from right to left. And Don't forget your semicolon ؛)
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
