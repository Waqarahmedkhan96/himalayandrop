// Homepage. Runs on the server: fetches products from Shopify (or the demo
// products) and passes them to the animated sections.
import Hero from '@/components/Hero';
import QuickLinks from '@/components/QuickLinks';
import Collection from '@/components/Collection';
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
import { getProducts, getArticles } from '@/lib/shopify';

export default async function HomePage() {
  const [products, posts] = await Promise.all([getProducts(), getArticles()]);
  return (
    <>
      <Hero />
      <QuickLinks />
      <Collection products={products} />
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
