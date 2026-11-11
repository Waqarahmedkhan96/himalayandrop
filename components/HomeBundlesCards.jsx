'use client';
// Home page "Top 3 bundles": a dark burgundy stage. Title block on the left, three sets on the
// right, each with a big gold numeral behind the pack shot, what is inside, the saving and the price.
import Link from './LLink';
import { useT } from './LangProvider';
import { formatMoney } from '@/lib/shopify';
import { Arrow } from './Arrow';

const T = {
  en: { eyebrow: 'Bundles', h: ['Top 3', 'bundles'], up: (n) => `Save up to ${n}%`, all: 'See all bundles', explore: 'Explore this set', vat: 'incl. VAT', save: (p) => `Save ${p}%` },
  da: { eyebrow: 'Sæt', h: ['Top 3', 'sæt'], up: (n) => `Spar op til ${n}%`, all: 'Se alle sæt', explore: 'Udforsk sættet', vat: 'inkl. moms', save: (p) => `Spar ${p}%` },
  de: { eyebrow: 'Sets', h: ['Top 3', 'Sets'], up: (n) => `Bis zu ${n} % sparen`, all: 'Alle Sets ansehen', explore: 'Set entdecken', vat: 'inkl. MwSt.', save: (p) => `${p} % sparen` },
  fr: { eyebrow: 'Coffrets', h: ['Top 3', 'coffrets'], up: (n) => `Jusqu’à ${n} % d’économie`, all: 'Tous les coffrets', explore: 'Découvrir ce coffret', save: (p) => `-${p} %` },
  es: { eyebrow: 'Packs', h: ['Top 3', 'packs'], up: (n) => `Ahorra hasta un ${n} %`, all: 'Ver todos los packs', explore: 'Descubrir este pack', save: (p) => `Ahorra ${p} %` },
  ar: { eyebrow: 'المجموعات', h: ['أفضل 3', 'مجموعات'], up: (n) => `وفّر حتى ${n}%`, all: 'كل المجموعات', explore: 'استكشف المجموعة', vat: 'شامل الضريبة', save: (p) => `وفّر ${p}%` },
};

export default function HomeBundlesCards({ bundles }) {
  const t = useT(T);
  const max = Math.max(...bundles.map((b) => b.savePct));
  return (
    <section className="hb" id="bundles-top">
      <div className="hc-stage">
        <div className="hc-in">
          <div className="hc-head">
            <span className="hc-eyebrow">{t.eyebrow}</span>
            <h2>{t.h[0]} <em>{t.h[1]}</em></h2>
            <span className="hc-pill">{t.up(max)}</span>
            <Link href="/bundles/" className="btn ghost hc-all">{t.all} <Arrow /></Link>
          </div>
          <ol className="hc-list">
            {bundles.map((b, i) => {
              const money = (n) => formatMoney(n, b.currency || 'DKK');
              return (
                <li key={b.handle} className="hc-card">
                  <span className="hc-num" aria-hidden="true">{i + 1}</span>
                  <Link href={`/bundles/#${b.handle}`} className="hc-media" aria-label={b.name}>
                    <img src={b.jars || b.image} alt={b.name} loading="lazy" />
                    {b.badge && <span className="hc-badge">{b.badge}</span>}
                  </Link>
                  <h3>{b.name}</h3>
                  <div className="hc-price">
                    <strong>{b.amount != null ? money(b.amount) : ''}</strong>
                    {b.compareAt > b.amount && <s>{money(b.compareAt)}</s>}
                    <span className="hc-save">{t.save(b.savePct)}</span>
                  </div>
                  <Link href={`/bundles/#${b.handle}`} className="btn gold hc-btn">{t.explore} <Arrow /></Link>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
