import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'MNS Documentation',
  description: "Build decentralized app with MNS on Monad.",
  logoUrl: "/logo.png",
  font: { 
    google: 'Roboto'
  }, 
  theme: {
    variables: {
      fontSize: {
       
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
