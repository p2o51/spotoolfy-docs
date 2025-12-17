import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          src="/img/logo.png"
          alt="Spotoolfy Logo"
          style={{width: '120px', marginBottom: '1rem'}}
        />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            <Translate id="homepage.getStarted">Get Started</Translate>
          </Link>
          <Link
            className="button button--outline button--lg"
            style={{marginLeft: '1rem', color: 'white', borderColor: 'white'}}
            to="/docs/setup/installation">
            <Translate id="homepage.installationGuide">Installation Guide</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureItem({title, description, icon}: {title: ReactNode; description: ReactNode; icon: string}) {
  return (
    <div className="col col--4">
      <div className="text--center padding-horiz--md" style={{marginBottom: '2rem'}}>
        <span style={{fontSize: '3rem'}}>{icon}</span>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({id: 'homepage.title', message: 'Documentation'})}
      description={translate({id: 'homepage.description', message: 'Spotoolfy - Lyrics, Notes, AI Insights, and Time Machine for Spotify'})}>
      <HomepageHeader />
      <main>
        <section style={{padding: '4rem 0'}}>
          <div className="container">
            <div className="row">
              <FeatureItem
                icon="🎵"
                title={<Translate id="homepage.feature.lyrics.title">Lyrics & Translation</Translate>}
                description={<Translate id="homepage.feature.lyrics.description">Find lyrics from multiple sources and translate them with AI in 3 different styles.</Translate>}
              />
              <FeatureItem
                icon="📝"
                title={<Translate id="homepage.feature.notes.title">Personal Notes</Translate>}
                description={<Translate id="homepage.feature.notes.description">Add ratings and thoughts to any track. Build your own music journal.</Translate>}
              />
              <FeatureItem
                icon="⏰"
                title={<Translate id="homepage.feature.timeMachine.title">Time Machine</Translate>}
                description={<Translate id="homepage.feature.timeMachine.description">Rediscover songs you saved on this day in previous years.</Translate>}
              />
            </div>
            <div className="row">
              <FeatureItem
                icon="🤖"
                title={<Translate id="homepage.feature.gemini.title">Ask Gemini</Translate>}
                description={<Translate id="homepage.feature.gemini.description">Chat with AI about songs, lyrics, and get music insights.</Translate>}
              />
              <FeatureItem
                icon="🎨"
                title={<Translate id="homepage.feature.theming.title">Dynamic Theming</Translate>}
                description={<Translate id="homepage.feature.theming.description">Material 3 design with colors extracted from album art.</Translate>}
              />
              <FeatureItem
                icon="🖼️"
                title={<Translate id="homepage.feature.poster.title">Poster Generation</Translate>}
                description={<Translate id="homepage.feature.poster.description">Create shareable posters for lyrics, notes, and albums.</Translate>}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
