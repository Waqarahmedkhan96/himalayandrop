'use client';
// Product card: the full product on a soft stage, attribute badges, amount
// picker, price that updates with the amount, Buy now and Add to cart.
import { useState } from 'react';
import Link from './LLink';
import { useT } from './LangProvider';

const T = {
  en: { soon: 'Launching soon', vat: 'incl. VAT', choose: 'Choose amount', buy: 'Buy now', add: 'Add to cart', details: 'View details' },
  da: { soon: 'Lanceres snart', vat: 'inkl. moms', choose: 'Vælg antal', buy: 'Køb nu', add: 'Læg i kurv', details: 'Se produktet' },
  de: { soon: 'Bald erhältlich', vat: 'inkl. MwSt.', choose: 'Menge wählen', buy: 'Jetzt kaufen', add: 'In den Warenkorb', details: 'Details ansehen' },
  fr: { soon: 'Bientôt disponible', vat: 'TVA incluse', choose: 'Choisir la quantité', buy: 'Acheter', add: 'Ajouter au panier', details: 'Voir le détail' },
  es: { soon: 'Próximamente', vat: 'IVA incluido', choose: 'Elige la cantidad', buy: 'Comprar ahora', add: 'Añadir al carrito', details: 'Ver detalles' },
  ar: { soon: 'قريباً', vat: 'شامل الضريبة', choose: 'اختر الكمية', buy: 'اشترِ الآن', add: 'أضف إلى السلة', details: 'عرض التفاصيل' },
  ur: { soon: 'جلد دستیاب', vat: 'ٹیکس سمیت', choose: 'مقدار منتخب کریں', buy: 'ابھی خریدیں', add: 'کارٹ میں شامل کریں', details: 'تفصیلات دیکھیں' },
};
import { useCart } from '@/lib/cart';
import { formatMoney } from '@/lib/shopify';
import { Icon } from './Icons';
import { Arrow } from './Arrow';

export default function ShopCard({ product }) {
  const { addItem, buyNow, busy } = useCart();
  const t = useT(T);
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
          <span className="shop-price">{unit || t.soon}</span>
          {unit && <span className="vat">{t.vat}</span>}
        </div>

        {options.length > 0 && (
          <div className="options" role="radiogroup" aria-label={t.choose}>
            {options.map((o, i) => (
              <button key={o} type="button" role="radio" aria-checked={opt === i} className={opt === i ? 'on' : ''} onClick={() => setOpt(i)}>
                {o}
              </button>
            ))}
          </div>
        )}

        <div className="shop-actions">
          <button type="button" className="btn gold block" disabled={busy} onClick={() => buyNow(product.variantId, qty)}>
            {t.buy}{total && qty > 1 ? ` · ${total}` : ''} <Arrow />
          </button>
          <button type="button" className="btn block outline" disabled={busy} onClick={() => addItem(product.variantId, qty)}>
            <Icon name="cart" size={18} /> {t.add}
          </button>
          <Link href={href} className="details-link">{t.details} <Arrow size={14} /></Link>
        </div>
      </div>
    </article>
  );
}
