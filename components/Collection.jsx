'use client';
import Link from './LLink';
import { useT } from './LangProvider';

const T = {
  en: { eyebrow: 'The collection', title: 'Five ways to begin.', lead: 'Pure shilajit resin, gummies, drops and capsules, each lab-tested and in packaging made to keep.', more: 'Every product, every format, in one place.', cta: 'Explore the full collection' },
  da: { eyebrow: 'Kollektionen', title: 'Fem måder at begynde på.', lead: 'Ren shilajit resin, vingummi, dråber og kapsler, alle laboratorietestet og i emballage, der er værd at gemme.', more: 'Alle produkter, alle former, ét sted.', cta: 'Se hele kollektionen' },
};
import Reveal from './Reveal';
import ShopCard from './ShopCard';
import { Arrow } from './Arrow';

export default function Collection({ products }) {
  const t = useT(T);
  return (
    <Reveal as="section" id="collection" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" data-reveal>{t.eyebrow}</span>
          <h2 data-reveal="lines">
            <span className="line"><span>{t.title}</span></span>
          </h2>
          <p data-reveal>{t.lead}</p>
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
          <p>{t.more}</p>
          <Link href="/shop/" className="btn gold cm-btn">{t.cta} <Arrow /></Link>
        </div>
      </div>
    </Reveal>
  );
}
