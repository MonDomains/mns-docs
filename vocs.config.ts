import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'MNS Documentation',
  description: "Build decentralized app with MNS on Monad.",
  logoUrl: {
    light: "/logo-dark.png",
    dark: "/logo-white.png"
  },
  theme: {
    variables: {
      color: {
        link: {
          light: "#836EF9",
          dark: "#836EF9"
        },
        linkHover: {
          light: "#4D4193",
          dark: "#4D4193"
        },
      }
    }
  },
  sidebar: [
    {
      text: 'Introduction',
      link: '/introduction',
      collapsed: true, 
      items: [ 
        { 
          text: 'Terminology', 
          link: '/terminology', 
        }, 
        { 
          text: 'Resolving', 
          link: '/resolving', 
        },
        { 
          text: 'Deployments', 
          link: '/deployments', 
        }, 
      ], 
    },
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Name Processing',
      link: '/name-processing',
    },
    {
      text: 'Subgraph',
      link: '/subgraph',
    },
    {
      text: 'Frequently Asked Questions',
      link: '/faq',
    }
  ],
  socials: [ 
    { 
      icon: 'github', 
      link: 'https://github.com/mondomains', 
    }, 
    { 
      icon: 'x', 
      link: 'https://twitter.com/mondomains', 
    }, 
  ], 
})
