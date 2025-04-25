import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  srcDir: "docs",
  title: "Mon Name Service Docs",
  description: "Monad Name Service (MNS) is a domain system built on Monad. MNS allows you to take control of your web3 identity on Monad. Mint your .mon",
  cleanUrls: true,
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/MonDomains/edit/main/docs/:path'
    },
    search: {
      provider: 'local'
    }, 
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'References', link: '/references' }
    ],
    footer: {
      message: '',
      copyright: 'Copyright © 2024 Mon Name Service'
    },
    sidebar: [
      {
        text: 'Overview',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/overview/introduction' },
          { text: 'Terminology', link: '/overview/terminology' },
          { text: 'Resolving', link: '/overview/resolving' },
          { text: 'Deployments', link: '/overview/deployments' }
        ]
      },
      {
        text: 'Using MNS',
        collapsed: true,
        items: [
          { text: 'Getting Started', link: '/using-mns/getting-started' },
          { text: 'Name Processing', link: '/using-mns/name-processing' },
          { text: 'Subgraph', link: '/using-mns/subgraph' }
        ]
      }, 
      {
        text: 'References',
        collapsed: true,
        items: [
          { text: 'Name Normalize', link: '/references/name-normalize' },
        ]
      },
      {
        text: 'FAQ',
        link: '/faq'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MonDomains' },
      { icon: 'twitter', link: 'https://x.com/MonDomains' },
    ]
  }
})
