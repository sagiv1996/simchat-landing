export const LOCALE_STORAGE_KEY = 'mollys-candle:locale'

export function rememberLocale(locale: string): void {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  }
  catch {
    // Storage can be blocked (private mode); detection then simply runs again next visit.
  }
}

// Runs inline in <head> before the first paint, so English visitors never see the Hebrew page flash.
// Only the root path redirects, so shared /en links stay as they are, and crawlers are left alone.
export const localeRedirectScript = `(function () {
  try {
    if (location.pathname !== '/') return;
    if (/bot|crawl|spider|slurp|lighthouse/i.test(navigator.userAgent)) return;
    var stored = localStorage.getItem('${LOCALE_STORAGE_KEY}');
    var detected = (navigator.languages || [navigator.language])
      .map(function (l) { var c = String(l).slice(0, 2).toLowerCase(); return c === 'iw' ? 'he' : c; })
      .filter(function (c) { return c === 'he' || c === 'en'; })[0];
    if ((stored || detected) === 'en') location.replace('/en' + location.search + location.hash);
  } catch (e) {}
})();`
