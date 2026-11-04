'use client';
// Home page "Top 3 bundles": a dark burgundy stage. Title block on the left, three sets on the
// right, each with a big gold numeral behind the pack shot, what is inside, the saving and the price.
import Link from './LLink';
import { useLang, useT } from './LangProvider';
import { demoProducts, localizeProduct } from '@/lib/products';
import { formatMoney } from '@/lib/shopify';
import { Arrow } from './Arrow';

const T = {
  en: { eyebrow: 'Bundles', h: ['Top 3', 'bundles'], up: (n) => `Save up to ${n}%`, all: 'See all bundles', shop: 'Shop this set', incl: 'Includes', vat: 'incl. VAT', save: (p) => `Save ${p}%` },
  da: { eyebrow: 'Sæt', h: ['Top 3', 'sæt'], up: (n) => `Spar op til ${n}%`, all: 'Se alle sæt', shop: 'Se dette sæt', incl: 'Indeholder', vat: 'inkl. moms', save: (p) => `Spar ${p}%` },
  de: { eyebrow: 'Sets', h: ['Top 3', 'Sets'], up: (n) => `Bis zu ${n} % sparen`, all: 'Alle Sets ansehen', shop: 'Dieses Set ansehen', incl: 'Enthält', vat: 'inkl. MwSt.', save: (p) => `${p} % sparen` },
  fr: { eyebrow: 'Coffrets', h: ['Top 3', 'coffrets'], up: (n) => `Jusqu’à ${n} % d’économie`, all: 'Tous les coffrets', shop: 'Voir ce coffret', incl: 'Contient', vat: 'TVA incluse', save: (p) => `-${p} %` },
  es: { eyebrow: 'Packs', h: ['Top 3', 'packs'], up: (n) => `Ahorra hasta un ${n} %`, all: 'Ver todos los packs', shop: 'Ver este pack', incl: 'Incluye', vat: 'IVA incluido', save: (p) => `Ahorra ${p} %` },
  ar: { eyebrow: 'المجموعات', h: ['أفضل 3', 'مجموعات'], up: (n) => `وفّر حتى ${n}%`, all: 'كل المجموعات', shop: 'تسوّق هذه المجموعة', incl: 'تشمل', vat: 'شامل الضريبة', save: (p) => `وفّر ${p}%` },
  ur: { eyebrow: 'بنڈلز', h: ['ٹاپ 3', 'بنڈلز'], up: (n) => `${n}% تک بچت`, all: 'تمام بنڈلز', shop: 'یہ سیٹ دیکھیں', incl: 'شامل', vat: 'ٹیکس سمیت', save: (p) => `${p}% بچت` },
};

export default function HomeBundles({ bundles }) {
  const lang = useLang();
  const t = useT(T);
  const max = Math.max(...bundles.map((b) => b.savePct));
  return (
    <section className="hb" id="bundles-top">
      <div className="hb-stage">
        <div className="hb-in">
          <div className="hb-head">
            <span className="hb-eyebrow">{t.eyebrow}</span>
            <h2>{t.h[0]} <em>{t.h[1]}</em></h2>
            <span className="hb-pill">{t.up(max)}</span>
            <Link href="/bundles/" className="btn ghost hb-all">{t.all} <Arrow /></Link>
          </div>
          <ol className="hb-list">
            {bundles.map((b, i) => {
              const names = b.items.map((h) => localizeProduct(demoProducts.find((p) => p.handle === h), lang)?.title).filter(Boolean);
              const money = (n) => formatMoney(n, b.currency || 'DKK');
              return (
                <li key={b.handle} className="hb-card">
                  <span className="hb-num" aria-hidden="true">{i + 1}</span>
                  <Link href={`/bundles/#${b.handle}`} className="hb-media" aria-label={b.name}>
                    <img src={b.image} alt={`${b.name}: ${names.join(', ')}`} loading="lazy" />
                    {b.badge && <span className="hb-badge">{b.badge}</span>}
                  </Link>
                  <h3>{b.name}</h3>
                  <p className="hb-incl"><b>{t.incl}</b> {names.join(' · ')}</p>
                  <div className="hb-price">
                    <strong>{b.amount != null ? money(b.amount) : ''}</strong>
                    {b.compareAt > b.amount && <s>{money(b.compareAt)}</s>}
                    <span className="hb-save">{t.save(b.savePct)}</span>
                  </div>
                  <Link href={`/bundles/#${b.handle}`} className="btn gold hb-btn">{t.shop} <Arrow /></Link>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
