export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxtjs/i18n', '@nuxt/image'],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      meta: [{ name: 'theme-color', content: '#b45f2a' }],
    },
  },

  colorMode: {
    preference: 'system',
    fallback: 'light',
  },

  fonts: {
    defaults: {
      weights: [300, 400, 500, 600, 700],
      subsets: ['hebrew', 'latin'],
    },
  },

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'he',
    detectBrowserLanguage: false,
    locales: [
      { code: 'he', language: 'he-IL', dir: 'rtl', name: 'עברית', file: 'he.json' },
      { code: 'en', language: 'en-US', dir: 'ltr', name: 'English', file: 'en.json' },
    ],
  },

  image: {
    quality: 80,
    format: ['webp'],
  },

  icon: {
    serverBundle: { collections: ['lucide', 'simple-icons'] },
  },
})
