# Molly's Candle — landing page

Landing page for Molly's Candle, a candle-making studio. Built with Nuxt 4, Nuxt UI and Tailwind, prerendered to static files and served from Cloudflare.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # static site in .output/public
npm run preview    # serve the build locally
```

Set `NUXT_PUBLIC_SITE_URL` to the live domain when building. It is used for canonical links, Open Graph images, the sitemap and `robots.txt`. It defaults to `https://simchat-landing.pages.dev`.

## Deploy

`wrangler.jsonc` serves `.output/public` as static assets on Cloudflare, with `404.html` for unknown paths.

## Where to edit things

| What | Where |
| --- | --- |
| Business name, phone, social links | `app/app.config.ts` |
| All page text (he, en, fr, es) | `i18n/locales/*.json` |
| Languages list and default language | `app/utils/localePreference.ts` |
| Seasonal sections (e.g. Hanukkah dates) | `app/utils/season.ts` |
| Images and video | `public/images`, `public/videos` |

Hebrew is the default language and lives at `/`. Other languages live under their prefix (`/en`, `/fr`, `/es`).

## Seasonal content

A season has `showFrom` / `showUntil` dates. The page is prerendered with whatever was true at build time, then re-checked in the browser, so a season turns on and off on the right day even without a rebuild. Rebuilding inside the window still helps, so the content is in the HTML search engines see.
