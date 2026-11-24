export const LOCALES = [
  { code: 'he', language: 'he-IL', dir: 'rtl', name: 'עברית', file: 'he.json' },
  { code: 'en', language: 'en-US', dir: 'ltr', name: 'English', file: 'en.json' },
  { code: 'fr', language: 'fr-FR', dir: 'ltr', name: 'Français', file: 'fr.json' },
  { code: 'es', language: 'es-ES', dir: 'ltr', name: 'Español', file: 'es.json' },
] as const

export type LocaleCode = (typeof LOCALES)[number]['code']

export const DEFAULT_LOCALE: LocaleCode = 'he'

export const LOCALE_STORAGE_KEY = 'mollys-candle:locale'

export function rememberLocale(locale: LocaleCode): void {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  }
  catch {
    // Storage can be blocked (private mode); detection then simply runs again next visit.
  }
}

const codes = JSON.stringify(LOCALES.map(locale => locale.code))

// Runs inline in <head> before the first paint, so visitors never see the default language flash.
// Only the root path redirects, so shared /en, /fr, /es links stay as they are, and crawlers are left alone.
export const localeRedirectScript = `(function () {
  try {
    if (location.pathname !== '/') return;
    if (/bot|crawl|spider|slurp|lighthouse/i.test(navigator.userAgent)) return;
    var supported = ${codes};
    var stored = localStorage.getItem('${LOCALE_STORAGE_KEY}');
    var detected = (navigator.languages || [navigator.language])
      .map(function (l) { var c = String(l).slice(0, 2).toLowerCase(); return c === 'iw' ? 'he' : c; })
      .filter(function (c) { return supported.indexOf(c) !== -1; })[0];
    var target = supported.indexOf(stored) !== -1 ? stored : detected;
    if (target && target !== '${DEFAULT_LOCALE}') location.replace('/' + target + location.search + location.hash);
  } catch (e) {}
})();`
