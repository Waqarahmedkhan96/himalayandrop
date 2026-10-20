// Languages. English lives at the root (/shop/), Danish under /da/ (/da/shop/).
// Every page exists in both, so search engines can pair them with hreflang.

export const LOCALES = ['en', 'da'];
export const DEFAULT_LOCALE = 'en';

// Set NEXT_PUBLIC_SITE_URL to your own domain once you have one,
// e.g. https://himalayandrop.dk — canonical links and the sitemap use it.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://himalayandrop.vercel.app').replace(/\/$/, '');

export const OG_LOCALE = { en: 'en_GB', da: 'da_DK' };
export const DATE_LOCALE = { en: 'en-GB', da: 'da-DK' };

// '/shop/' -> '/da/shop/' for Danish. Leaves external links, images and
// mailto/tel links alone.
export function localizeHref(href, lang) {
  if (!href || lang === DEFAULT_LOCALE || typeof href !== 'string') return href;
  if (!href.startsWith('/') || href.startsWith('//') || href.startsWith('/images/') || href.startsWith('/da/') || href === '/da') return href;
  return `/da${href}`;
}

// '/da/shop/' -> '/shop/'
export function stripLocale(path = '/') {
  if (path === '/da' || path === '/da/') return '/';
  return path.startsWith('/da/') ? path.slice(3) : path;
}

export function langFromPath(path = '/') {
  return path === '/da' || path.startsWith('/da/') ? 'da' : 'en';
}

// Pick the right language from a { en, da } object.
export function tr(dict, lang) {
  return dict[lang] ?? dict[DEFAULT_LOCALE];
}
