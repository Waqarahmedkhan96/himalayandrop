// /sitemap.xml: every page in English and Danish, each linked to its
// counterpart with hreflang, so search engines index both languages.
import { SITE_URL } from '@/lib/i18n';
import { getProducts } from '@/lib/shopify';
import { postsEn, counterpartSlug } from '@/lib/posts';
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
  ['/distributors/', 0.4, 'yearly'],
  ['/rewards/', 0.4, 'monthly'],
];

const url = (p) => `${SITE_URL}${p}`;

function pair(en, da, priority, changeFrequency, lastModified = new Date()) {
  const languages = { en: url(en), da: url(da), 'x-default': url(en) };
  return [
    { url: url(en), lastModified, changeFrequency, priority, alternates: { languages } },
    { url: url(da), lastModified, changeFrequency, priority, alternates: { languages } },
  ];
}

export default async function sitemap() {
  const products = await getProducts();
  return [
    ...STATIC.flatMap(([p, pr, cf]) => pair(p, p === '/' ? '/da/' : `/da${p}`, pr, cf)),
    ...products.flatMap((p) => pair(`/products/${p.handle}/`, `/da/products/${p.handle}/`, 0.9, 'weekly')),
    ...postsEn.flatMap((p) => {
      const da = counterpartSlug(p.slug, 'da');
      return pair(`/blog/${p.slug}/`, da ? `/da/blog/${da}/` : '/da/blog/', 0.6, 'monthly', new Date(p.date));
    }),
    ...Object.keys(policies).flatMap((s) => pair(`/policies/${s}/`, `/da/policies/${s}/`, 0.2, 'yearly')),
  ];
}
