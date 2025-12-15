import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Spotoolfy Docs',
  tagline: 'Lyrics, Notes, AI Insights, and Time Machine',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://docs.spotoolfy.gojyuplus.com',
  baseUrl: '/',

  organizationName: 'p2o51',
  projectName: 'spotoolfy_flutter',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans', 'ja'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
        label: 'English',
      },
      'zh-Hans': {
        htmlLang: 'zh-Hans',
        label: '中文',
      },
      ja: {
        htmlLang: 'ja',
        label: '日本語',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/p2o51/spotoolfy_flutter/tree/main/docs/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Spotoolfy',
      logo: {
        alt: 'Spotoolfy Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://spotoolfy.gojyuplus.com',
          label: 'Home',
          position: 'right',
        },
        {
          href: 'https://github.com/p2o51/spotoolfy_flutter',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs',
            },
            {
              label: 'Installation',
              to: '/docs/setup/installation',
            },
            {
              label: 'Features',
              to: '/docs/features',
            },
          ],
        },
        {
          title: 'Download',
          items: [
            {
              label: 'Google Play',
              href: 'https://play.google.com/store/apps/details?id=com.gojyuplusone.spotoolfy.spotoolfy_flutter',
            },
            {
              label: 'TestFlight',
              href: 'https://testflight.apple.com/join/h2GR2Gbf',
            },
            {
              label: 'WebApp',
              href: 'https://app.spotoolfy.gojyuplus.com',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/v56yDs6vRN',
            },
            {
              label: 'Google Groups',
              href: 'https://groups.google.com/g/spotoolfytest',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/p2o51/spotoolfy_flutter',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Spotoolfy. Made with Flutter & Material Design 3.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['dart', 'bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
