import PageHero from '@/components/PageHero';
import ShopCard from '@/components/ShopCard';
import Reveal from '@/components/Reveal';
import { getProducts } from '@/lib/shopify';
import BenefitsExplorer from '@/components/BenefitsExplorer';
import Comparison from '@/components/Comparison';

export const metadata = {
  title: 'Shop · Himalayan Drop',
  description: 'Shop Himalayan Drop shilajit resin, gummies, drops and capsules.',
};

export default async function ShopPage() {
  const products = await getProducts();
  return (
    <>
      <PageHero eyebrow="The shop" title="Shop the" accent="collection." lead="Resin, gummies and drops. Choose one, or save with two or three." />
      <Reveal as="section" className="section shop-section">
        <div className="container">
          <div className="shop-grid" data-reveal="stagger">
            {products.map((p) => (
              <ShopCard key={p.handle} product={p} />
            ))}
          </div>
        </div>
      </Reveal>
      <BenefitsExplorer />
      <Comparison />
    </>
  );
}
