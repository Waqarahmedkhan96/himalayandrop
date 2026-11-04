'use client';
// Home page bundles: "Choose your ritual". One decision, one stage. Pick a set on the left and the
// panel shows it in an arch with a receipt: every product, the separate total, the set price and the
// saving as a gold seal. Buy now / Add to cart work straight from here.
import { useState } from 'react';
import Link from './LLink';
import { useCart } from '@/lib/cart';
import { useLang, useT } from './LangProvider';
import { demoProducts, localizeProduct } from '@/lib/products';
import { formatMoney } from '@/lib/shopify';
import { Icon } from './Icons';
import { Arrow } from './Arrow';

const T = {
  en: { eyebrow: 'Bundles', h: ['Choose your', 'ritual'], sub: 'Every set arrives in one box, with our 60-day money-back guarantee.', inside: 'In the box', sep: 'Bought separately', set: 'Set price', save: 'You save', vat: 'incl. VAT', buy: 'Buy now', add: 'Add to cart', all: 'See all bundles', guarantee: '60-day money-back guarantee', ship: 'Tracked shipping from Denmark', soon: 'Launching soon' },
  da: { eyebrow: 'Sæt', h: ['Vælg dit', 'ritual'], sub: 'Hvert sæt kommer i én æske, med vores 60 dages penge-tilbage-garanti.', inside: 'I æsken', sep: 'Købt hver for sig', set: 'Sætpris', save: 'Du sparer', vat: 'inkl. moms', buy: 'Køb nu', add: 'Læg i kurv', all: 'Se alle sæt', guarantee: '60 dages penge-tilbage-garanti', ship: 'Sporbar forsendelse fra Danmark', soon: 'Lanceres snart' },
  de: { eyebrow: 'Sets', h: ['Wähle dein', 'Ritual'], sub: 'Jedes Set kommt in einer Box, mit unserer 60-Tage-Geld-zurück-Garantie.', inside: 'In der Box', sep: 'Einzeln gekauft', set: 'Set-Preis', save: 'Du sparst', vat: 'inkl. MwSt.', buy: 'Jetzt kaufen', add: 'In den Warenkorb', all: 'Alle Sets ansehen', guarantee: '60 Tage Geld-zurück-Garantie', ship: 'Versand aus Dänemark mit Tracking', soon: 'Bald erhältlich' },
  fr: { eyebrow: 'Coffrets', h: ['Choisissez votre', 'rituel'], sub: 'Chaque coffret arrive dans une seule boîte, avec notre garantie remboursé 60 jours.', inside: 'Dans la boîte', sep: 'Achetés séparément', set: 'Prix du coffret', save: 'Vous économisez', vat: 'TVA incluse', buy: 'Acheter', add: 'Ajouter au panier', all: 'Tous les coffrets', guarantee: 'Garantie remboursé 60 jours', ship: 'Expédition suivie depuis le Danemark', soon: 'Bientôt disponible' },
  es: { eyebrow: 'Packs', h: ['Elige tu', 'ritual'], sub: 'Cada pack llega en una sola caja, con nuestra garantía de devolución de 60 días.', inside: 'En la caja', sep: 'Comprado por separado', set: 'Precio del pack', save: 'Ahorras', vat: 'IVA incluido', buy: 'Comprar ahora', add: 'Añadir al carrito', all: 'Ver todos los packs', guarantee: 'Garantía de devolución de 60 días', ship: 'Envío con seguimiento desde Dinamarca', soon: 'Próximamente' },
  ar: { eyebrow: 'المجموعات', h: ['اختر', 'طقسك'], sub: 'تصل كل مجموعة في صندوق واحد مع ضمان استرداد المال لمدة 60 يوماً.', inside: 'داخل الصندوق', sep: 'عند الشراء منفردة', set: 'سعر المجموعة', save: 'توفّر', vat: 'شامل الضريبة', buy: 'اشترِ الآن', add: 'أضف إلى السلة', all: 'كل المجموعات', guarantee: 'ضمان استرداد المال لمدة 60 يوماً', ship: 'شحن متتبَّع من الدنمارك', soon: 'قريباً' },
  ur: { eyebrow: 'بنڈلز', h: ['اپنا رسم', 'چنیں'], sub: 'ہر سیٹ ایک ڈبے میں آتا ہے، 60 دن کی منی بیک گارنٹی کے ساتھ۔', inside: 'ڈبے میں', sep: 'الگ الگ خریدنے پر', set: 'سیٹ کی قیمت', save: 'آپ کی بچت', vat: 'ٹیکس سمیت', buy: 'ابھی خریدیں', add: 'کارٹ میں شامل کریں', all: 'تمام بنڈلز', guarantee: '60 دن کی منی بیک گارنٹی', ship: 'ڈنمارک سے ٹریک شدہ شپنگ', soon: 'جلد دستیاب' },
};

export default function HomeBundles({ bundles }) {
  const lang = useLang();
  const t = useT(T);
  const { addItem, buyNow, busy } = useCart();
  const [cur, setCur] = useState(Math.max(0, bundles.findIndex((b) => b.featured)));
  const b = bundles[cur];
  const money = (n) => formatMoney(n, b.currency || 'DKK');
  const items = b.items.map((h) => localizeProduct(demoProducts.find((p) => p.handle === h), lang)).filter(Boolean);
  const diff = b.compareAt > b.amount ? b.compareAt - b.amount : 0;

  return (
    <section className="hb" id="bundles-top">
      <div className="hb-in">
        <div className="hb-side">
          <span className="hb-eyebrow">{t.eyebrow}</span>
          <h2>{t.h[0]} <em>{t.h[1]}</em></h2>
          <p className="hb-sub">{t.sub}</p>
          <div className="hb-tabs" role="tablist">
            {bundles.map((x, i) => (
              <button key={x.handle} type="button" role="tab" aria-selected={i === cur} className={`hb-tab ${i === cur ? 'on' : ''}`} onClick={() => setCur(i)}>
                <span className="hb-tn">{`0${i + 1}`}</span>
                <span className="hb-tt"><b>{x.name}</b><small>{x.tagline}</small></span>
                <span className="hb-tp"><i>{formatMoney(x.amount, x.currency || 'DKK')}</i><em>−{x.savePct}%</em></span>
              </button>
            ))}
          </div>
          <Link href="/bundles/" className="hb-all">{t.all} <Arrow /></Link>
        </div>

        <article className="hb-panel" key={b.handle} aria-live="polite">
          <div className="hb-arch">
            <span className="hb-ring" />
            <img src={b.image} alt={`${b.name}: ${items.map((p) => p.title).join(', ')}`} />
            {diff > 0 && <span className="hb-seal"><small>{t.save}</small><b>{money(diff)}</b></span>}
            {b.badge && <span className="hb-flag">{b.badge}</span>}
          </div>

          <div className="hb-body">
            <h3>{b.name}</h3>
            <p className="hb-tag">{b.tagline}</p>
            <span className="hb-lab">{t.inside}</span>
            <ul className="hb-items">
              {items.map((p) => (
                <li key={p.handle}>
                  <img src={p.image.replace('/images/pack-', '/images/thumbs/pack-')} alt="" loading="lazy" />
                  <span>{p.title}</span>
                  <i />
                  <b>{p.amount != null ? money(p.amount) : ''}</b>
                </li>
              ))}
            </ul>
            {diff > 0 && <p className="hb-sep"><span>{t.sep}</span><s>{money(b.compareAt)}</s></p>}
            <div className="hb-total">
              <span className="hb-lab">{t.set}</span>
              <strong>{b.amount != null ? money(b.amount) : t.soon}</strong>
              <small>{t.vat}</small>
            </div>
            <div className="hb-cta">
              <button type="button" className="btn gold hb-buy" disabled={busy} onClick={() => buyNow(b.variantId, 1)}>{t.buy} <Arrow /></button>
              <button type="button" className="btn ghost hb-add" disabled={busy} onClick={() => addItem(b.variantId, 1)}><Icon name="cart" size={18} /> {t.add}</button>
            </div>
            <p className="hb-trust"><span><Icon name="shield" size={14} /> {t.guarantee}</span><span>{t.ship}</span></p>
          </div>
        </article>
      </div>
    </section>
  );
}
