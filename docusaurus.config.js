// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

function defineSection(section, options = {}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      path: `docs/${section}`,
      routeBasePath: section,
      id: section,
      sidebarPath: require.resolve('./sidebars.js'),
      breadcrumbs: false,
      editUrl: 'https://github.com/Openverse/academy/tree/main/',
      ...options,
    }),
  ];
}

const SECTIONS = [
  defineSection('articles'),
  // defineSection('videos'),
  defineSection('faq'),
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Openverse Academy',
  tagline: 'Learning Openverse',
  url: 'https://academy.openverse.network',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Openverse', // Usually your GitHub org/user name.
  projectName: 'Docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    project: {
      name: "Openverse",
      denom: "Openverse",
      ticker: "Openverse",
      binary: "Openversed",
      testnet_denom: "BTS",
      testnet_ticker: "BTS",
      rpc_url: "https://eth.bd.openverse.network:8545",
      rpc_url_testnet: "https://eth.bd.openverse.dev:8545",
      rpc_url_local: "http://localhost:8545/",
      chain_id: "9001",
      testnet_chain_id: "9000",
      latest_version: "v10.0.1",
      mainnet_version: "v10.0.1",
      testnet_version: "v10.0.0-rc4",
      version_number: "2",
      testnet_version_number: "4",
      testnet_evm_explorer_url: "https://evm.openverse.dev",
      evm_explorer_url: "https://escan.live",
      testnet_cosmos_explorer_url: "https://testnet.mintscan.io/openverse-testnet",
      cosmos_explorer_url: "https://www.mintscan.io/openverse",
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/home',
          // routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-BWNQB9CCES',
          anonymizeIP: false,
        },
      }),
    ],
  ],
  plugins: [
    ...SECTIONS,
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 80,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Openverse Academy',
        logo: {
          alt: 'Openverse Logo',
          src: 'img/openverse.svg',
        },
        items: [
          {
            position: 'left',
            label: 'Articles',
            to: '/articles/beginner/wallets',
          },
          // {
          //   position: 'left',
          //   label: 'Videos',
          //   to: '/videos',
          // },
          {
            position: 'left',
            label: 'FAQ',
            to: '/faq',
          },
        
          // {
          //   position: 'left',
          //   label: 'Courses',
          //   to: '/courses',
          // },
          {
            position: 'right',
            label: 'Developer Docs',
            to: 'https://docs.openverse.network',
          },
          {
            href: 'https://github.com/openversenetwork',
            className: 'pseudo-icon github-icon',
            position: 'right',
          },
        ],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'YQVSVI0B4E',
  
        // Public API key: it is safe to commit it
        apiKey: 'ebb655bb17a6bbacc2448c6f9bd48409',
  
        indexName: 'academy-Openverse',
  
        // Optional: see doc section below
        contextualSearch: true,
        
        // Optional: Algolia search parameters
        searchParameters: {},
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Academy',
            items: [
              {
                label: 'Register and Earn Revenue',
                to: '/articles/advanced/incentives-registration',
              },
              {
                label: 'Learn About Wallet Integration',
                to: '/articles/advanced/wallet-integration',
              },
              {
                label: 'Terminology',
                to: '/articles/terminology',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/openversenetwork',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/openversenetwork',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/openversenetwork',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Blog',
                href: 'https://medium.com/openversenetwork',
              },
              {
                label: 'Openverse GitHub',
                href: 'https://github.com/openversenetwork',
              },
            ],
          },
        ],
        copyright: `Built with ❤️ by the Openverse Team. © ${new Date().getFullYear()} All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
