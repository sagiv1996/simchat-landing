import { DEFAULT_LOCALE, LOCALES, localeRedirectScript } from './app/utils/localePreference'

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL ?? 'https://simchat-landing.pages.dev'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxt/ui', '@nuxtjs/i18n', '@nuxt/image', '@nuxtjs/sitemap'],

  site: {
    url: siteUrl,
    name: "Molly's Candle",
  },

  runtimeConfig: {
    public: { siteUrl },
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      meta: [{ name: 'theme-color', content: '#b45f2a' }],
      script: [
        { innerHTML: localeRedirectScript, tagPosition: 'head' },
        { innerHTML: 'document.documentElement.setAttribute("data-js","")', tagPosition: 'head' },
      ],
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
    baseUrl: siteUrl,
    strategy: 'prefix_except_default',
    defaultLocale: DEFAULT_LOCALE,
    detectBrowserLanguage: false,
    locales: LOCALES.map(locale => ({ ...locale })),
  },

  // Pinned so building on Cloudflare doesn't auto-select a server preset and the paid /cdn-cgi image resizer.
  nitro: {
    preset: 'static',
  },

  image: {
    provider: 'ipx',
    quality: 80,
    format: ['webp'],
  },

  icon: {
    serverBundle: { collections: ['lucide', 'simple-icons'] },
  },
})
