// Languages. English lives at the root (/shop/), every other language under
// its own prefix (/da/shop/, /de/shop/, /ar/shop/ ...). Every page exists in
// all languages, so search engines can pair them with hreflang.
//
// Country targeting (hreflang): each language points Google to the market
// where our partners are: German → Germany, French → France, Spanish →
// Spain, Arabic → UAE, Urdu → Pakistan.

export const LANGS = {
  en: { flag: 'gb', name: 'English', short: 'EN', hreflang: 'en', og: 'en_GB', locale: 'en-GB', dir: 'ltr', country: null },
  da: { flag: 'dk', name: 'Dansk', short: 'DA', hreflang: 'da', og: 'da_DK', locale: 'da-DK', dir: 'ltr', country: 'DK' },
  de: { flag: 'de', name: 'Deutsch', short: 'DE', hreflang: 'de-DE', og: 'de_DE', locale: 'de-DE', dir: 'ltr', country: 'DE' },
  fr: { flag: 'fr', name: 'Français', short: 'FR', hreflang: 'fr-FR', og: 'fr_FR', locale: 'fr-FR', dir: 'ltr', country: 'FR' },
  es: { flag: 'es', name: 'Español', short: 'ES', hreflang: 'es-ES', og: 'es_ES', locale: 'es-ES', dir: 'ltr', country: 'ES' },
  ar: { flag: 'ae', name: 'العربية', short: 'AR', hreflang: 'ar-AE', og: 'ar_AE', locale: 'ar-AE', dir: 'rtl', country: 'AE' },
  ur: { flag: 'pk', name: 'اردو', short: 'UR', hreflang: 'ur-PK', og: 'ur_PK', locale: 'ur-PK', dir: 'rtl', country: 'PK' },
};

export const LOCALES = Object.keys(LANGS);
export const DEFAULT_LOCALE = 'en';
// Languages served by the shared /[lang]/ route (Danish has its own folder).
export const INTL_LOCALES = ['de', 'fr', 'es', 'ar', 'ur'];

// Set NEXT_PUBLIC_SITE_URL to your own domain once you have one,
// e.g. https://himalayandrop.dk — canonical links and the sitemap use it.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://himalayandrop.vercel.app').replace(/\/$/, '');

export const OG_LOCALE = Object.fromEntries(LOCALES.map((l) => [l, LANGS[l].og]));
export const DATE_LOCALE = Object.fromEntries(LOCALES.map((l) => [l, LANGS[l].locale]));
export const isRtl = (lang) => LANGS[lang]?.dir === 'rtl';

const PREFIX = new RegExp(`^/(${LOCALES.filter((l) => l !== DEFAULT_LOCALE).join('|')})(/|$)`);

// '/shop/' -> '/de/shop/' for German. Leaves external links, images,
// already-localized paths and mailto/tel links alone.
export function localizeHref(href, lang) {
  if (!href || lang === DEFAULT_LOCALE || typeof href !== 'string' || !LANGS[lang]) return href;
  if (!href.startsWith('/') || href.startsWith('//') || href.startsWith('/images/') || PREFIX.test(href)) return href;
  return `/${lang}${href}`;
}

// '/de/shop/' -> '/shop/'
export function stripLocale(path = '/') {
  const m = path.match(PREFIX);
  if (!m) return path;
  const rest = path.slice(m[1].length + 1);
  return rest.startsWith('/') ? rest : `/${rest}`;
}

export function langFromPath(path = '/') {
  return path.match(PREFIX)?.[1] || DEFAULT_LOCALE;
}

// Pick the right language from a { en, da, de, ... } object (English if missing).
export function tr(dict, lang) {
  return dict[lang] ?? dict[DEFAULT_LOCALE];
}
