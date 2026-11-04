// Homepage. Runs on the server: fetches products from Shopify (or the demo
// products) and passes them to the animated sections.
import Hero from '@/components/Hero';
import ProofThread from '@/components/ProofThread';
import CertRidge from '@/components/CertRidge';
import CollectionGallery from '@/components/CollectionGallery';
import Faq from '@/components/Faq';
import Reviews from '@/components/Reviews';
import Harvest from '@/components/Harvest';
import Process from '@/components/Process';
import CertVault from '@/components/CertVault';
import Newsletter from '@/components/Newsletter';
import BenefitsExplorer from '@/components/BenefitsExplorer';
import HomeBundlesSwitch from '@/components/HomeBundlesSwitch';
import { getDemoBundles } from '@/lib/bundles';
import { getProducts, getProduct, isShopifyConnected } from '@/lib/shopify';
import { pageMeta, pages, BRAND } from '@/lib/seo';

export function meta(lang) {
  const m = pageMeta('home', lang, '/');
  // The homepage title carries the brand first.
  return { ...m, title: { absolute: `${BRAND} · ${pages.home[lang].title}` } };
}

// The three bundles shown on the home page. With Shopify connected, price, stock and variant
// come from the Shopify product with the same handle (same as the bundles page).
const TOP3 = ['bundle-daily-ritual', 'bundle-summit-set', 'bundle-gift-of-the-mountain'];
async function getTop3(lang) {
  const demo = TOP3.map((h) => getDemoBundles(lang).find((b) => b.handle === h)).filter(Boolean)
    .map((b) => ({ ...b, jars: `/images/bundles/jars-${b.handle.replace('bundle-', '')}.webp` }));
  if (!isShopifyConnected) return demo;
  return Promise.all(demo.map(async (b) => {
    try {
      const p = await getProduct(b.handle, lang);
      return p ? { ...b, amount: p.amount ?? b.amount, currency: p.currency, variantId: p.variantId, available: p.available } : b;
    } catch { return b; }
  }));
}

export default async function HomeView({ lang }) {
  const [products, top3] = await Promise.all([getProducts(lang), getTop3(lang)]);
  return (
    <>
      <Hero />
      <ProofThread />
      <CertRidge />
      <CollectionGallery products={products} />
      <BenefitsExplorer />
      <Reviews />
      <Harvest />
      <Process />
      <HomeBundlesSwitch bundles={top3} />
      <CertVault />
      <Faq />
      <Newsletter />
    </>
  );
}
