// Homepage. Runs on the server: fetches products from Shopify (or the demo
// products) and passes them to the animated sections.
import Hero from '@/components/Hero';
import QuickLinks from '@/components/QuickLinks';
import ProofThread from '@/components/ProofThread';
import CollectionGallery from '@/components/CollectionGallery';
import Spotlight from '@/components/Spotlight';
import Story from '@/components/Story';
import Steps from '@/components/Steps';
import Faq from '@/components/Faq';
import Reviews from '@/components/Reviews';
import Harvest from '@/components/Harvest';
import Process from '@/components/Process';
import Certifications from '@/components/Certifications';
import Newsletter from '@/components/Newsletter';
import JournalSection from '@/components/JournalSection';
import BenefitsExplorer from '@/components/BenefitsExplorer';
import { getProducts, getArticles } from '@/lib/shopify';
import { pageMeta, pages, BRAND } from '@/lib/seo';

export function meta(lang) {
  const m = pageMeta('home', lang, '/');
  // The homepage title carries the brand first.
  return { ...m, title: { absolute: `${BRAND} · ${pages.home[lang].title}` } };
}

export default async function HomeView({ lang }) {
  const [products, posts] = await Promise.all([getProducts(lang), getArticles(lang)]);
  return (
    <>
      <Hero />
      <ProofThread />
      <QuickLinks />
      <CollectionGallery products={products} />
      <BenefitsExplorer />
      <Reviews />
      <Harvest />
      <Process />
      <Spotlight />
      <Certifications />
      <Story />
      <Steps />
      <JournalSection posts={posts} />
      <Faq />
      <Newsletter />
    </>
  );
}
