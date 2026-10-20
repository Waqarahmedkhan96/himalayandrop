// /sitemap.xml: every page in every language, each linked to all its
// counterparts with hreflang (with country codes: de-DE, ar-AE, ur-PK ...).
import { SITE_URL, LOCALES, LANGS, localizeHref } from '@/lib/i18n';
import { getProducts } from '@/lib/shopify';
import { POST_SLUGS } from '@/lib/postSlugs';
import { postsEn } from '@/lib/posts';
import { policies } from '@/lib/policies';

export const dynamic = 'force-static';

const STATIC = [
  ['/', 1.0, 'weekly'],
  ['/shop/', 0.9, 'weekly'],
  ['/bundles/', 0.8, 'weekly'],
  ['/our-shilajit/', 0.8, 'monthly'],
  ['/lab-results/', 0.8, 'monthly'],
  ['/how-to-use/', 0.7, 'monthly'],
  ['/faq/', 0.7, 'monthly'],
  ['/blog/', 0.7, 'weekly'],
  ['/our-story/', 0.5, 'monthly'],
  ['/certificates/', 0.5, 'monthly'],
  ['/reviews/', 0.5, 'weekly'],
  ['/contact/', 0.4, 'yearly'],
  ['/distributors/', 0.6, 'monthly'],
  ['/rewards/', 0.4, 'monthly'],
];

const url = (p) => `${SITE_URL}${p}`;

// One entry per language, all pointing at each other.
function group(pathFor, priority, changeFrequency, lastModified = new Date()) {
  const languages = {};
  for (const l of LOCALES) languages[LANGS[l].hreflang] = url(pathFor(l));
  languages['x-default'] = url(pathFor('en'));
  return LOCALES.map((l) => ({ url: url(pathFor(l)), lastModified, changeFrequency, priority, alternates: { languages } }));
}

export default async function sitemap() {
  const products = await getProducts();
  return [
    ...STATIC.flatMap(([p, pr, cf]) => group((l) => localizeHref(p, l), pr, cf)),
    ...products.flatMap((p) => group((l) => localizeHref(`/products/${p.handle}/`, l), 0.9, 'weekly')),
    ...postsEn.flatMap((p) => {
      const slugs = POST_SLUGS[p.id] || {};
      return group((l) => localizeHref(slugs[l] ? `/blog/${slugs[l]}/` : '/blog/', l), 0.6, 'monthly', new Date(p.updated || p.date));
    }),
    ...Object.keys(policies).flatMap((s) => group((l) => localizeHref(`/policies/${s}/`, l), 0.2, 'yearly')),
  ];
}
