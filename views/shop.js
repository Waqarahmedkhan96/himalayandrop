import PageHero from '@/components/PageHero';
import ShopCard from '@/components/ShopCard';
import Reveal from '@/components/Reveal';
import BenefitsExplorer from '@/components/BenefitsExplorer';
import Comparison from '@/components/Comparison';
import JsonLd from '@/components/JsonLd';
import BundleTeaser from '@/components/BundleTeaser';
import { getProducts } from '@/lib/shopify';
import { pageMeta, abs } from '@/lib/seo';
import { localizeHref, tr } from '@/lib/i18n';

export const meta = (lang) => pageMeta('shop', lang, '/shop/');

const T = {
  en: { eyebrow: 'The shop', title: 'Shop the', accent: 'collection.', lead: 'Resin, gummies and drops. Choose one, or save with two or three.' },
  da: { eyebrow: 'Shoppen', title: 'Shop', accent: 'kollektionen.', lead: 'Resin, vingummi og dråber. Vælg én, eller spar ved at købe to eller tre.' },
};

export default async function ShopView({ lang }) {
  const t = tr(T, lang);
  const products = await getProducts(lang);
  const list = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(localizeHref(`/products/${p.handle}/`, lang)), name: p.title })),
  };
  return (
    <>
      <JsonLd data={list} />
      <PageHero eyebrow={t.eyebrow} title={t.title} accent={t.accent} lead={t.lead} />
      <Reveal as="section" className="section shop-section">
        <div className="container">
          <div className="shop-grid" data-reveal="stagger">
            {products.map((p) => (
              <ShopCard key={p.handle} product={p} />
            ))}
          </div>
        </div>
      </Reveal>
      <BundleTeaser />
      <BenefitsExplorer />
      <Comparison />
    </>
  );
}
