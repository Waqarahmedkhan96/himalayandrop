'use client';
// Product card: the full product on a soft stage, attribute badges, amount
// picker, price that updates with the amount, Buy now and Add to cart.
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart';
import { formatMoney } from '@/lib/shopify';
import { Icon } from './Icons';
import { Arrow } from './Arrow';

export default function ShopCard({ product }) {
  const { addItem, buyNow, busy } = useCart();
  const [opt, setOpt] = useState(0);
  const href = `/products/${product.handle}/`;
  const options = product.options || [];
  const qty = opt + 1;
  const unit = product.amount != null ? formatMoney(product.amount, product.currency) : product.price;
  const total = product.amount != null ? formatMoney(product.amount * qty, product.currency) : null;

  return (
    <article className="shop-card">
      <Link href={href} className="shop-media" tabIndex={-1} aria-hidden="true">
        <span className="stage-glow" />
        <img src={product.image} alt="" loading="lazy" />
        {product.tag && <span className="card-tag">{product.tag}</span>}
      </Link>

      <div className="shop-body">
        {product.badges && (
          <ul className="badges">
            {product.badges.map(([icon, label]) => (
              <li key={label} className={`badge b-${icon}`}><Icon name={icon} size={14} />{label}</li>
            ))}
          </ul>
        )}
        <h3><Link href={href}>{product.title}</Link></h3>
        <p className="shop-sub">{product.subtitle}</p>

        <div className="price-row">
          <span className="shop-price">{unit || 'Launching soon'}</span>
          {unit && <span className="vat">incl. VAT</span>}
        </div>

        {options.length > 0 && (
          <div className="options" role="radiogroup" aria-label="Choose amount">
            {options.map((o, i) => (
              <button key={o} type="button" role="radio" aria-checked={opt === i} className={opt === i ? 'on' : ''} onClick={() => setOpt(i)}>
                {o}
              </button>
            ))}
          </div>
        )}

        <div className="shop-actions">
          <button type="button" className="btn gold block" disabled={busy} onClick={() => buyNow(product.variantId, qty)}>
            Buy now{total && qty > 1 ? ` · ${total}` : ''} <Arrow />
          </button>
          <button type="button" className="btn block outline" disabled={busy} onClick={() => addItem(product.variantId, qty)}>
            <Icon name="cart" size={18} /> Add to cart
          </button>
          <Link href={href} className="details-link">View details <Arrow size={14} /></Link>
        </div>
      </div>
    </article>
  );
}
