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
    icons: {
      icon: [{ url: '/favicon.ico', sizes: 'any' }, { url: '/favicon.png', type: 'image/png', sizes: '64x64' }, { url: '/icon-512.png', type: 'image/png', sizes: '512x512' }],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    },
    formatDetection: { telephone: false },
  };
}

export const viewport = { themeColor: '#580f1b' };
