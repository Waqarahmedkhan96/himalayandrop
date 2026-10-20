'use client';
// Shop page banner that leads to the bundles page.
import Link from './LLink';
import { useT } from './LangProvider';
import { Arrow } from './Arrow';
import { maxSaving } from '@/lib/bundles';

const T = {
  en: { eyebrow: 'Bundles', h: (n) => `Save up to ${n}%`, hg: 'with a set.', p: 'Resin, gummies, drops and capsules, paired for every kind of day. One order, one parcel.', cta: 'Shop bundles' },
  da: { eyebrow: 'Sæt', h: (n) => `Spar op til ${n}%`, hg: 'med et sæt.', p: 'Resin, vingummi, dråber og kapsler, samlet til alle slags dage. Én ordre, én pakke.', cta: 'Se alle sæt' },
};

export default function BundleTeaser() {
  const t = useT(T);
  return (
    <section className="section tight-top">
      <div className="container">
        <Link href="/bundles/" className="bundle-teaser" data-reveal>
          <div className="bt-copy">
            <span className="eyebrow">{t.eyebrow}</span>
            <h2>{t.h(maxSaving())} <em className="gold-text">{t.hg}</em></h2>
            <p>{t.p}</p>
            <span className="btn gold">{t.cta} <Arrow /></span>
          </div>
          <div className="bt-media"><img src="/images/bundles/complete-collection.webp" alt="" loading="lazy" /></div>
        </Link>
      </div>
    </section>
  );
}
