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
          <svg className="cm-peak" viewBox="0 0 120 36" aria-hidden="true">
            <path d="M0 35 L30 14 L40 21 L58 3 L76 22 L86 15 L120 35" fill="none" stroke="currentColor" strokeWidth="1.3" />
          </svg>
          <p>Every product, every format, in one place.</p>
          <Link href="/shop/" className="btn gold cm-btn">Explore the full collection <Arrow /></Link>
        </div>
      </div>
    </Reveal>
  );
}
