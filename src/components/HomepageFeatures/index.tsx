import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, {translate} from "@docusaurus/Translate";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
        message: 'C-Like Language',
        description: "Homepage Component: C-Like Language"
    }),
    Svg: require('@site/static/img/main_curly_braces.svg').default,
    description: (
      <>
          <Translate>ABJAD can be considered from the C-Languages family with a high resemblance to TypeScript.</Translate>
      </>
    ),
  },
  {
    title: translate({
        message: 'Arabic Programming Language',
        description: "Homepage Component: Arabic Programming Language"
    }),
    Svg: require('@site/static/img/main_arabic_letter.svg').default,
    description: (
      <>
          <Translate>With ABJAD you can now write simple scripts in Arabic.</Translate>
      </>
    ),
  },
  {
    title: translate({
        message: 'RTL',
        description: "Homepage Component: RTL"
    }),
    Svg: require('@site/static/img/main_semicolon.svg').default,
    description: (
      <>
          <Translate>Similar to Arabic, ABJAD is written from right to left. And don't forget your semicolon ؛)</Translate>
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
