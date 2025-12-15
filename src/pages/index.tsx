import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
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
            Get Started
          </Link>
          <Link
            className="button button--outline button--lg"
            style={{marginLeft: '1rem', color: 'white', borderColor: 'white'}}
            to="/docs/setup/installation">
            Installation Guide
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureItem({title, description, icon}: {title: string; description: string; icon: string}) {
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
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Documentation"
      description="Spotoolfy - Lyrics, Notes, AI Insights, and Time Machine for Spotify">
      <HomepageHeader />
      <main>
        <section style={{padding: '4rem 0'}}>
          <div className="container">
            <div className="row">
              <FeatureItem
                icon="🎵"
                title="Lyrics & Translation"
                description="Find lyrics from multiple sources and translate them with AI in 3 different styles."
              />
              <FeatureItem
                icon="📝"
                title="Personal Notes"
                description="Add ratings and thoughts to any track. Build your own music journal."
              />
              <FeatureItem
                icon="⏰"
                title="Time Machine"
                description="Rediscover songs you saved on this day in previous years."
              />
            </div>
            <div className="row">
              <FeatureItem
                icon="🤖"
                title="Ask Gemini"
                description="Chat with AI about songs, lyrics, and get music insights."
              />
              <FeatureItem
                icon="🎨"
                title="Dynamic Theming"
                description="Material 3 design with colors extracted from album art."
              />
              <FeatureItem
                icon="🖼️"
                title="Poster Generation"
                description="Create shareable posters for lyrics, notes, and albums."
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
