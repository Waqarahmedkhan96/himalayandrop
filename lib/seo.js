// SEO: page titles and descriptions per language, canonical + hreflang links,
// Open Graph and structured data (JSON-LD).
//
// Keyword map (from research into what ranks in Denmark and the EU):
//  EN  shilajit · buy shilajit · pure Himalayan shilajit resin · lab-tested shilajit ·
//      shilajit gummies / drops / capsules · fulvic acid · heavy metals tested ·
//      what is shilajit · how to take shilajit · how to tell if shilajit is real
//  DA  shilajit · køb shilajit · ren shilajit · ægte shilajit · Himalaya shilajit ·
//      shilajit resin / harpiks · shilajit vingummi · shilajit dråber · shilajit kapsler ·
//      fulvinsyre · tungmetaller · laboratorietestet · kosttilskud · hvad er shilajit
//
// EU rules: no health claims for shilajit, so keywords focus on origin,
// format, purity and testing, never on effects.

import { SITE_URL, OG_LOCALE, localizeHref } from './i18n';

export const BRAND = 'Himalayan Drop';
const DEFAULT_IMAGE = '/images/collection-lineup.webp';

export const pages = {
  home: {
    en: {
      title: 'Pure Himalayan Shilajit Resin, Gummies, Drops & Capsules',
      description: 'Lab-tested Himalayan shilajit from a Danish brand. Pure shilajit resin hand-harvested above 5,000 m in Skardu, plus shilajit gummies, drops and capsules.',
    },
    da: {
      title: 'Ren Himalaya Shilajit · Resin, Vingummi, Dråber & Kapsler',
      description: 'Køb laboratorietestet shilajit fra et dansk brand. Ren shilajit resin håndhøstet over 5.000 m i Skardu, samt shilajit vingummi, dråber og kapsler.',
    },
  },
  shop: {
    en: { title: 'Buy Shilajit Online · Resin, Gummies, Drops & Capsules', description: 'Shop lab-tested Himalayan shilajit: pure resin, strawberry gummies, elderberry drops and capsules. Batch report for every product, 60-day guarantee.' },
    da: { title: 'Køb Shilajit · Resin, Vingummi, Dråber og Kapsler', description: 'Køb laboratorietestet Himalaya shilajit: ren resin, vingummi med jordbær, dråber med hyldebær og kapsler. Rapport for hver batch og 60 dages garanti.' },
  },
  'our-shilajit': {
    en: { title: 'Our Shilajit · Authentic Himalayan Shilajit from Skardu', description: 'Hand-collected above 5,000 m near K2, filtered several times, sun-dried for up to 60 days and lab-tested for heavy metals and fulvic acid, batch by batch.' },
    da: { title: 'Vores Shilajit · Ægte Himalaya Shilajit fra Skardu', description: 'Håndsamlet over 5.000 m nær K2, filtreret flere gange, soltørret i op til 60 dage og testet for tungmetaller og fulvinsyre, batch for batch.' },
  },
  'lab-results': {
    en: { title: 'Lab-Tested Shilajit · Heavy Metals & Fulvic Acid Reports', description: 'Every Himalayan Drop batch is lab-tested for heavy metals, microbiology and fulvic acid %. Enter your batch number to see the report for your jar.' },
    da: { title: 'Laboratorietestet Shilajit · Tungmetaller og Fulvinsyre', description: 'Hver batch fra Himalayan Drop testes for tungmetaller, mikrobiologi og fulvinsyre. Indtast dit batchnummer og se rapporten for din krukke.' },
  },
  'how-to-use': {
    en: { title: 'How to Take Shilajit · Resin, Gummies, Drops & Capsules', description: 'How to take shilajit resin, gummies, drops and capsules, step by step: how much, when, and how to store it.' },
    da: { title: 'Sådan Tager Du Shilajit · Dosis og Vejledning', description: 'Sådan tager du shilajit resin, vingummi, dråber og kapsler trin for trin: hvor meget, hvornår, og hvordan du opbevarer det.' },
  },
  faq: {
    en: { title: 'Shilajit FAQ · Questions About Shilajit, Answered', description: 'What is shilajit, how do you take it, how can you tell if it is real, and is it lab-tested? Answers about our products, orders and guarantee.' },
    da: { title: 'Shilajit FAQ · Ofte Stillede Spørgsmål om Shilajit', description: 'Hvad er shilajit, hvordan tager man det, hvordan ser man om det er ægte, og er det laboratorietestet? Svar om produkter, ordrer og garanti.' },
  },
  'our-story': {
    en: { title: 'Our Story · A Danish Shilajit Brand', description: 'Himalayan Drop is a Danish shilajit brand: sourced above 5,000 m in Skardu, designed in Denmark, with a lab report behind every batch.' },
    da: { title: 'Vores Historie · Et Dansk Shilajit-Brand', description: 'Himalayan Drop er et dansk shilajit-brand: hentet over 5.000 m i Skardu, designet i Danmark og med en laboratorierapport bag hver batch.' },
  },
  certificates: {
    en: { title: 'Certificates · GMP, ISO 22000, ISO 9001 & Heavy Metal Testing', description: 'The quality standards behind Himalayan Drop shilajit: GMP, ISO 22000 and ISO 9001, heavy metal testing on every batch and a 60-day guarantee.' },
    da: { title: 'Certifikater · GMP, ISO 22000, ISO 9001 og Tungmetaltest', description: 'Kvalitetsstandarderne bag Himalayan Drop shilajit: GMP, ISO 22000 og ISO 9001, test for tungmetaller på hver batch og 60 dages garanti.' },
  },
  contact: {
    en: { title: 'Contact Us', description: 'Questions about an order, a shilajit product or a lab report? Write to Himalayan Drop. We answer in English and Danish.' },
    da: { title: 'Kontakt Os', description: 'Spørgsmål om en ordre, et shilajit-produkt eller en laboratorierapport? Skriv til Himalayan Drop. Vi svarer på dansk og engelsk.' },
  },
  reviews: {
    en: { title: 'Customer Reviews', description: 'What customers say about Himalayan Drop shilajit resin, gummies, drops and capsules.' },
    da: { title: 'Anmeldelser', description: 'Hvad kunderne siger om Himalayan Drop shilajit resin, vingummi, dråber og kapsler.' },
  },
  blog: {
    en: { title: 'Shilajit Guides & Journal', description: 'Guides about shilajit: what it is, how to take it, how to tell if it is real and how to read a lab report.' },
    da: { title: 'Shilajit Guides og Viden', description: 'Guides om shilajit: hvad det er, hvordan du tager det, hvordan du ser om det er ægte, og hvordan du læser en analyserapport.' },
  },
  bundles: {
    en: { title: 'Shilajit Bundles · Save up to 23% on Resin, Gummies & Capsules', description: 'Shilajit bundles from Himalayan Drop: resin, gummies, drops and capsules in sets that cost less than buying separately. Lab-tested, 60-day guarantee.' },
    da: { title: 'Shilajit Sæt · Spar op til 23% på Resin, Vingummi og Kapsler', description: 'Shilajit-sæt fra Himalayan Drop: resin, vingummi, dråber og kapsler i sæt, der koster mindre end hver for sig. Laboratorietestet, 60 dages garanti.' },
  },
  distributors: {
    en: { title: 'Become a Shilajit Distributor', description: 'Stock Himalayan Drop shilajit in your store, clinic, gym or region. Apply to become a distribution partner.' },
    da: { title: 'Bliv Forhandler af Shilajit', description: 'Forhandl Himalayan Drop shilajit i din butik, klinik, træningscenter eller region. Ansøg om at blive forhandler.' },
  },
  rewards: {
    en: { title: 'Summit Rewards', description: 'Earn points with every order and climb from Base Camp to Summit.' },
    da: { title: 'Summit Rewards', description: 'Optjen point på hver ordre og klatr fra Base Camp til Summit.' },
  },
  login: { en: { title: 'Log In', description: 'Log in to your Himalayan Drop account.' }, da: { title: 'Log Ind', description: 'Log ind på din Himalayan Drop-konto.' } },
  register: { en: { title: 'Create Account', description: 'Create a Himalayan Drop account.' }, da: { title: 'Opret Konto', description: 'Opret en Himalayan Drop-konto.' } },
};

export const abs = (path) => `${SITE_URL}${path}`;

// Metadata for one page. `path` is the English path (e.g. '/shop/').
// For pages whose slug differs per language (articles), pass `paths`.
export function buildMeta({ lang, path, paths, title, description, image = DEFAULT_IMAGE, type = 'website', noindex = false }) {
  const en = paths?.en ?? path;
  const da = paths?.da ?? localizeHref(path, 'da');
  const self = lang === 'da' ? da : en;
  return {
    title,
    description,
    alternates: { canonical: self, languages: { en, da, 'x-default': en } },
    openGraph: {
      type,
      url: self,
      siteName: BRAND,
      title: `${title} | ${BRAND}`,
      description,
      locale: OG_LOCALE[lang],
      alternateLocale: OG_LOCALE[lang === 'da' ? 'en' : 'da'],
      images: [{ url: image }],
    },
    twitter: { card: 'summary_large_image', title: `${title} | ${BRAND}`, description, images: [image] },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export function pageMeta(key, lang, path, extra = {}) {
  const p = pages[key][lang];
  return buildMeta({ lang, path, title: p.title, description: p.description, ...extra });
}

// ───────── Structured data ─────────

export function organizationLd(lang) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BRAND,
        url: SITE_URL,
        logo: abs('/images/logo-mark.png'),
        description: lang === 'da'
          ? 'Dansk shilajit-brand. Ren Himalaya shilajit, høstet over 5.000 m og laboratorietestet batch for batch.'
          : 'Danish shilajit brand. Pure Himalayan shilajit, harvested above 5,000 m and lab-tested batch by batch.',
        address: { '@type': 'PostalAddress', addressCountry: 'DK' },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: BRAND,
        url: SITE_URL,
        inLanguage: ['en', 'da'],
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  };
}

export function breadcrumbLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(path) })),
  };
}
