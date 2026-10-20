'use client';
// Bundle card: product set on a cream stage, saving badge, what's inside with
// each product's own price, the bundle price against the separate total, and
// Buy now / Add to cart.
import Link from './LLink';
import { useCart } from '@/lib/cart';
import { formatMoney } from '@/lib/shopify';
import { demoProducts, localizeProduct } from '@/lib/products';
import { useLang, useT } from './LangProvider';
import { Icon } from './Icons';
import { Arrow } from './Arrow';

const T = {
  en: { save: (p) => `Save ${p}%`, inside: 'What’s inside', separately: 'Separately', youSave: (x) => `You save ${x}`, vat: 'incl. VAT', buy: 'Buy now', add: 'Add to cart', guarantee: '60-day money-back guarantee', soon: 'Launching soon' },
  da: { save: (p) => `Spar ${p}%`, inside: 'Det får du', separately: 'Hver for sig', youSave: (x) => `Du sparer ${x}`, vat: 'inkl. moms', buy: 'Køb nu', add: 'Læg i kurv', guarantee: '60 dages penge-tilbage-garanti', soon: 'Lanceres snart' },
};

export default function BundleCard({ bundle: b }) {
  const lang = useLang();
  const t = useT(T);
  const { addItem, buyNow, busy } = useCart();
  const items = b.items.map((h) => localizeProduct(demoProducts.find((p) => p.handle === h), lang)).filter(Boolean);
  const money = (n) => formatMoney(n, b.currency || 'DKK');

  return (
    <article className={`bundle-card ${b.featured ? 'featured' : ''}`} id={b.handle}>
      <div className="bundle-stage">
        <span className="stage-glow" />
        <img src={b.image} alt={`${b.name}: ${items.map((p) => p.title).join(', ')}`} loading="lazy" />
        <span className="bundle-save">{t.save(b.savePct)}</span>
        {b.badge && <span className="card-tag">{b.badge}</span>}
      </div>

      <div className="bundle-body">
        <h3>{b.name}</h3>
        <p className="bundle-tagline">{b.tagline}</p>
        <ul className="bundle-tags">
          {b.tags.map((x) => <li key={x}>{x}</li>)}
        </ul>
        <p className="bundle-text">{b.text}</p>

        <div className="bundle-inside">
          <span className="eyebrow">{t.inside}</span>
          <ul>
            {items.map((p) => (
              <li key={p.handle}>
                <Link href={`/products/${p.handle}/`}><img src={p.image.replace('/images/pack-', '/images/thumbs/pack-')} alt="" loading="lazy" />{p.title}</Link>
                <span>{p.amount != null ? money(p.amount) : ''}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bundle-price">
          <div>
            <span className="bundle-now">{b.amount != null ? money(b.amount) : t.soon}</span>
            {b.compareAt > b.amount && <s>{money(b.compareAt)}</s>}
            <span className="vat">{t.vat}</span>
          </div>
          {b.compareAt > b.amount && <span className="bundle-you-save">{t.youSave(money(b.compareAt - b.amount))}</span>}
        </div>

        <div className="bundle-actions">
          <button type="button" className="btn gold block" disabled={busy} onClick={() => buyNow(b.variantId, 1)}>
            {t.buy} <Arrow />
          </button>
          <button type="button" className="btn block outline" disabled={busy} onClick={() => addItem(b.variantId, 1)}>
            <Icon name="cart" size={18} /> {t.add}
          </button>
        </div>
        <p className="bundle-guarantee"><Icon name="shield" size={14} /> {t.guarantee}</p>
      </div>
    </article>
  );
}
