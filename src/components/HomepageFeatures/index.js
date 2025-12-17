import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'The AI Revolution',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
         Discover how AI is reshaping the world around you.
      </>
    ),
  },
  {
    title: 'Artificial Minds, Real Impact',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
         Artificial Intelligence is no longer the stuff of science fiction 
         it’s shaping our world today. From smart assistants to self-driving cars, AI is transforming industries,
          enhancing human potential, and redefining the way we live.
      </>
    ),
  },
  {
    title: 'Future, Algorithmically',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Step into the world of AI: the technology that thinks, learns,
         and innovates. Understand its impact, potential, and the future it promises.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
