import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "fantasy0v0 blog",
  description: "blog",
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ], 
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://fantasy0v0.github.io' }
    ]
  },
  editLink: {
    pattern: 'https://github.com/fantasy0v0/fantasy0v0.github.io/edit/main/:path'
  }
})
