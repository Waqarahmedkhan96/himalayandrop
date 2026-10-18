import Link from 'next/link';
import Reveal from './Reveal';
import ShopCard from './ShopCard';
import { Arrow } from './Arrow';

export default function Collection({ products }) {
  return (
    <Reveal as="section" id="collection" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" data-reveal>The collection</span>
          <h2 data-reveal="lines">
            <span className="line"><span>Four ways to begin.</span></span>
          </h2>
          <p data-reveal>Resin, gummies and drops, each in packaging made to keep.</p>
        </div>
        <div className="shop-grid" data-reveal="stagger">
          {products.map((p) => (
            <ShopCard key={p.handle} product={p} />
          ))}
        </div>
        <div className="collection-more" data-reveal>
          <Link href="/shop/" className="btn ghost">Shop all products <Arrow /></Link>
        </div>
      </div>
    </Reveal>
  );
}
