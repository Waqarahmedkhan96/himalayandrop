// Defaults shared by every page of one language.
import { SITE_URL } from './i18n';
import { BRAND, pageMeta, pages } from './seo';

export function layoutMeta(lang) {
  const home = pageMeta('home', lang, '/');
  return {
    ...home,
    metadataBase: new URL(SITE_URL),
    title: { default: `${BRAND} · ${pages.home[lang].title}`, template: `%s | ${BRAND}` },
    applicationName: BRAND,
    icons: { icon: '/favicon.png' },
    formatDetection: { telephone: false },
  };
}

export const viewport = { themeColor: '#580f1b' };
