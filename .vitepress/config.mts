import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  srcDir: "docs",
  title: "Mon Name Service Docs",
  description: "Monad Name Service (MNS) is a domain system built on Monad. MNS allows you to take control of your web3 identity on Monad. Mint your .mon",
  cleanUrls: true,
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-663C0CBHQZ' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-663C0CBHQZ');`
    ],
    [
      "meta",
      {
        property: "og:image",
        content: "https://docs.monadns.com/docs-og-image.png"
      }
    ], 
    [
      "meta",
      {
        property: "twitter:image",
        content: "https://docs.monadns.com/docs-og-image.png"
      }
    ],
    [
      "meta",
      {
        property: "twitter:card",
        content: "summary_large_image"
      }
    ], 
    [
      "meta",
      {
        property: "twitter:site",
        content: "@MonDomains"
      }
    ], 
    [
      "meta",
      {
        property: "og:url",
        content: "https://docs.monadns.com"
      }
    ], 
    [
      "meta",
      {
        property: "og:title",
        content: "Mon Name Service Docs"
      }
    ],
    [
      "meta",
      {
        property: "og:description",
        content: "Monad Name Service (MNS) is a domain system built on Monad. MNS allows you to take control of your web3 identity on Monad. Mint your .mon"
      }
    ], 
    [
      "meta",
      {
        property: "og:type",
        content: "website"
      }
    ]
  ],
  themeConfig: {
    editLink: {
      text: "Edit on Github",
      pattern: 'https://github.com/MonDomains/mns-docs/edit/master/docs/:path'
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
      copyright: 'Copyright © 2024 <a href=\"https://monadns.com\">Mon Name Service</a>'
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
          { text: 'Querying', 
            collapsed: true, 
            items: [
              { text: 'Address Lookup', link: '/using-mns/querying/address-lookup'},
              { text: 'Name Lookup', link: '/using-mns/querying/name-lookup'}
            ]
          },
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
    ],

    
  }
})
