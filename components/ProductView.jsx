'use client';
import { useRef, useState } from 'react';
import Link from './LLink';
import { useT } from './LangProvider';

const T = {
  en: { step: 'Step', nothing: 'Nothing added', images: 'Product images', shop: 'Shop', soon: 'Launching soon', vat: 'incl. VAT', buy: 'Buy now', add: 'Add to cart', trust: ['Harvested above 5,000 m', 'Danish brand', 'Lab report per batch'], ingredient: 'Ingredient', amount: 'Amount', how: 'How to use', storage: 'Storage', caution: 'Caution', lab: 'Lab results', labText: 'Each batch is tested by an independent lab for heavy metals, quality and fulvic acid. Look up your batch number on our Lab results page.' },
  da: { step: 'Trin', nothing: 'Intet tilsat', images: 'Produktbilleder', shop: 'Shop', soon: 'Lanceres snart', vat: 'inkl. moms', buy: 'Køb nu', add: 'Læg i kurv', trust: ['Høstet over 5.000 m', 'Dansk brand', 'Rapport for hver batch'], ingredient: 'Ingrediens', amount: 'Mængde', how: 'Sådan bruger du det', storage: 'Opbevaring', caution: 'Advarsler', lab: 'Laboratorieresultater', labText: 'Hver batch testes af et uafhængigt laboratorium for tungmetaller, kvalitet og fulvinsyre. Find dit batchnummer på siden Laboratorieresultater.' },
  de: { step: 'Schritt', nothing: 'Nichts zugesetzt', images: 'Produktbilder', shop: 'Shop', soon: 'Bald erhältlich', vat: 'inkl. MwSt.', buy: 'Jetzt kaufen', add: 'In den Warenkorb', trust: ['Geerntet über 5.000 m', 'Dänische Marke', 'Laborbericht je Charge'], ingredient: 'Zutat', amount: 'Menge', how: 'Anwendung', storage: 'Aufbewahrung', caution: 'Hinweise', lab: 'Laborergebnisse', labText: 'Jede Charge wird von einem unabhängigen Labor auf Schwermetalle, Qualität und Fulvinsäure geprüft. Gib deine Chargennummer auf unserer Seite Laborergebnisse ein.' },
  fr: { step: 'Étape', nothing: 'Rien d’ajouté', images: 'Images du produit', shop: 'Boutique', soon: 'Bientôt disponible', vat: 'TVA incluse', buy: 'Acheter', add: 'Ajouter au panier', trust: ['Récolté au-dessus de 5 000 m', 'Marque danoise', 'Rapport de labo par lot'], ingredient: 'Ingrédient', amount: 'Quantité', how: 'Utilisation', storage: 'Conservation', caution: 'Précautions', lab: 'Résultats de laboratoire', labText: 'Chaque lot est testé par un laboratoire indépendant : métaux lourds, qualité et acide fulvique. Consultez votre numéro de lot sur notre page Résultats de laboratoire.' },
  es: { step: 'Paso', nothing: 'Nada añadido', images: 'Imágenes del producto', shop: 'Tienda', soon: 'Próximamente', vat: 'IVA incluido', buy: 'Comprar ahora', add: 'Añadir al carrito', trust: ['Recolectado a más de 5.000 m', 'Marca danesa', 'Informe de laboratorio por lote'], ingredient: 'Ingrediente', amount: 'Cantidad', how: 'Modo de uso', storage: 'Conservación', caution: 'Advertencias', lab: 'Resultados de laboratorio', labText: 'Cada lote lo analiza un laboratorio independiente: metales pesados, calidad y ácido fúlvico. Busca tu número de lote en nuestra página Resultados de laboratorio.' },
  ar: { step: 'الخطوة', nothing: 'لا شيء مضاف', images: 'صور المنتج', shop: 'المتجر', soon: 'قريباً', vat: 'شامل الضريبة', buy: 'اشترِ الآن', add: 'أضف إلى السلة', trust: ['يُجمع فوق 5000 متر', 'علامة دنماركية', 'تقرير مخبري لكل دفعة'], ingredient: 'المكوّن', amount: 'الكمية', how: 'طريقة الاستخدام', storage: 'الحفظ', caution: 'تحذيرات', lab: 'نتائج المختبر', labText: 'يفحص مختبر مستقل كل دفعة للمعادن الثقيلة والجودة وحمض الفولفيك. ابحث عن رقم دفعتك في صفحة نتائج المختبر.' },
  ur: { step: 'مرحلہ', nothing: 'کچھ شامل نہیں', images: 'پروڈکٹ کی تصاویر', shop: 'شاپ', soon: 'جلد دستیاب', vat: 'ٹیکس سمیت', buy: 'ابھی خریدیں', add: 'کارٹ میں شامل کریں', trust: ['5,000 میٹر سے بلند سے حاصل', 'ڈنمارک کا برانڈ', 'ہر بیچ کی لیب رپورٹ'], ingredient: 'جزو', amount: 'مقدار', how: 'استعمال کا طریقہ', storage: 'محفوظ کرنا', caution: 'احتیاط', lab: 'لیب رپورٹس', labText: 'ہر بیچ ایک آزاد لیبارٹری میں بھاری دھاتوں، معیار اور فلوک ایسڈ کے لیے ٹیسٹ ہوتا ہے۔ ہمارے لیب رپورٹس کے صفحے پر اپنا بیچ نمبر تلاش کریں۔' },
};
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { useCart } from '@/lib/cart';
import { formatMoney } from '@/lib/shopify';
import Accordion from './Accordion';
import PurchaseBox from './PurchaseBox';
import { SUBSCRIBE_PCT } from '@/lib/subscription';
import { Arrow } from './Arrow';
import { Icon } from './Icons';
import RealIcon from './RealIcon';
import { FORMULA_KEYS } from '@/lib/labdata';
import { howToSteps } from './HowToTabs';
import { kindOf } from '@/lib/benefits';
import { useLang } from './LangProvider';

// Icon for each fact in the stats banner: minerals, fulvic acid, then size.
function factIcon(i, value, kind) {
  if (i === 0) return 'crystal';
  if (i === 1) return 'flask';
  if (/ml/.test(value)) return 'dropper';
  if (/\bg\b|\dg/.test(value)) return 'scale';
  return kind === 'capsules' ? 'capsule' : 'calendar';
}

// Product pages that open on an alcove display (same set as the home
// collection). Only Gold Resin for now; add a handle here to give another
// product the same stage.
const STAGE = {
  'shilajit-gold-resin': '/images/pdp/gold-resin/stage.webp',
};
const ALC = {
  en: { eyebrow: 'The Skardu Collection', withSub: '{p} with Subscribe & Save' },
  da: { eyebrow: 'Skardu-kollektionen', withSub: '{p} med Abonnér & Spar' },
  de: { eyebrow: 'Die Skardu-Kollektion', withSub: '{p} mit Abo & Sparen' },
  fr: { eyebrow: 'La collection Skardu', withSub: '{p} avec l’abonnement' },
  es: { eyebrow: 'La colección Skardu', withSub: '{p} con suscripción' },
  ar: { eyebrow: 'مجموعة سكردو', withSub: '{p} مع الاشتراك والتوفير' },
  ur: { eyebrow: 'سکردو کلیکشن', withSub: 'سبسکرائب اینڈ سیو کے ساتھ {p}' },
};

// Small icon per formula row (same order as lib/products.js).
// How-to step icons: the measuring step shows the spoon.
const STEP_ICON = { jar: 'spoon' };

export default function ProductView({ product }) {
  const root = useRef(null);
  const { addItem, buyNow, busy } = useCart();
  const t = useT(T);
  const lang = useLang();
  const kind = kindOf(product.handle);
  const steps = howToSteps(lang, kind);

  // First slide is the clean packshot, then the packaging photos.
  const stage = STAGE[product.handle];
  const a = useT(ALC);
  const slides = [
    stage ? { src: stage, alt: product.imageAlt, cutout: false } : { src: product.image, alt: product.imageAlt, cutout: product.cutout },
    ...(product.gallery || []).map((g) => ({ ...g, cutout: false })),
  ];
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.timeline({ defaults: { ease: 'expo.out', duration: 1.3 } })
        .from('.pdp-media', { clipPath: 'inset(10% 10% 10% 10% round 60px)', duration: 1.4 })
        .from('.pdp-media img', { scale: 1.15, y: 30, duration: 1.8 }, '<')
        .from('.pdp-thumbs', { y: 16, opacity: 0, duration: 0.9 }, 0.5)
        .from('.pdp-info h1 .line > span', { yPercent: 115 }, 0.3)
        .from('.pdp-info > *:not(h1)', { y: 20, opacity: 0, stagger: 0.06 }, 0.45);
    },
    { scope: root }
  );

  const show = (i) => {
    if (i === index) return;
    setIndex(i);
    if (prefersReducedMotion()) return;
    requestAnimationFrame(() =>
      gsap.fromTo(root.current.querySelector('.pdp-media img'), { opacity: 0, scale: 1.04 }, { opacity: 1, scale: 1, duration: 0.7, ease: 'expo.out' })
    );
  };

  const details = [
    product.storage && { q: t.storage, a: product.storage },
    product.caution && { q: t.caution, a: product.caution },
    { q: t.lab, a: t.labText },
  ].filter(Boolean);

  const f = product.formula;

  // On the alcove layout the edition sits on its own line in gold italics,
  // e.g. "Shilajit Resin" / "Gold Edition" (the edition is the first part of the subtitle).
  const edition = (product.subtitle || '').split(' · ')[0];
  const titleParts = stage && edition && product.title.endsWith(edition) && product.title.length > edition.length
    ? [product.title.slice(0, -edition.length).trim(), edition]
    : null;

  return (
    <section className={`pdp${stage ? ' pdp--alcove' : ''}`} ref={root}>
      <div className="container pdp-grid">
        <div className="pdp-gallery">
          <div className={`pdp-media ${slide.cutout ? 'cutout' : 'photo'}${stage && index === 0 ? ' is-stage' : ''}`}>
            <img key={slide.src} src={slide.src} alt={slide.alt} />
            {stage && <span className="pdp-tag">{t.trust[2]}</span>}
          </div>
          {slides.length > 1 && (
            <div className="pdp-thumbs" role="tablist" aria-label={t.images}>
              {slides.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={s.alt}
                  className={`${i === index ? 'on' : ''} ${s.cutout ? 'is-cut' : ''}`}
                  onClick={() => show(i)}
                >
                  <img src={s.src} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="pdp-info">
          <p className="crumb">
            <Link href="/shop/">{t.shop}</Link> / {product.title}
          </p>
          {stage && <span className="pdp-eyebrow">{a.eyebrow}</span>}
          <h1>
            <span className="line"><span>{titleParts ? <>{titleParts[0]} <em>{titleParts[1]}</em></> : product.title}</span></span>
          </h1>
          <p className="sub">{product.subtitle}</p>
          <p className="price">
            {product.amount != null ? formatMoney(product.amount, product.currency) : product.price || t.soon} <span className="vat">{t.vat}</span>
            {stage && product.amount != null && <span className="pdp-subtag">{a.withSub.replace('{p}', formatMoney(Math.round(product.amount * (1 - SUBSCRIBE_PCT / 100) * 100) / 100, product.currency))}</span>}
          </p>
          <p className="desc">{product.description}</p>
          {product.facts && (
            <dl className="pdp-stats">
              {product.facts.map(([v, l], i) => (
                <div key={l}>
                  <span className="ps-ico"><RealIcon name={factIcon(i, v, kind)} size={30} /></span>
                  <span className="ps-txt"><dt><bdi>{v}</bdi></dt><dd>{l}</dd></span>
                </div>
              ))}
            </dl>
          )}
          {product.amount != null ? (
            <PurchaseBox product={product} />
          ) : (
            <div className="pdp-actions">
              <button className="btn gold block" onClick={() => buyNow(product.variantId)} disabled={busy}>
                {t.buy} <Arrow />
              </button>
              <button className="btn outline block" onClick={() => addItem(product.variantId)} disabled={busy}>
                {t.add}
              </button>
            </div>
          )}
          <div className="pdp-trust">
            {t.trust.map((x) => <span key={x}>{x}</span>)}
          </div>
          {f && (
            <div className={`pdp-band pdp-ing ${f.rows.length === 1 ? 'single' : ''}`}>
              <div className="band-head">
                <span className="band-ico"><RealIcon name="leaf" size={26} /></span>
                <h2>{f.title}</h2>
                <span className="band-tag">{f.serving}</span>
              </div>
              {f.rows.length === 1 ? (
                <div className="ing-single">
                  <span className="ing-jar"><RealIcon name="jar" size={40} /></span>
                  <div>
                    <strong>{f.rows[0][0]}</strong>
                    <span>{t.nothing}</span>
                  </div>
                  <b><bdi>{f.rows[0][1]}</bdi></b>
                </div>
              ) : (
                <ul className="ing-list" aria-label={`${t.ingredient} / ${t.amount}`}>
                  {f.rows.map(([n, a], i) => (
                    <li key={n}>
                      <span className="ing-ico"><RealIcon name={(FORMULA_KEYS[kind] || [])[i] || 'leaf'} size={26} /></span>
                      <span className="ing-name">{n}</span>
                      <span className="ing-dots" aria-hidden="true" />
                      <b><bdi>{a}</bdi></b>
                    </li>
                  ))}
                </ul>
              )}
              {f.note && <p className="band-note">*{f.note}</p>}
            </div>
          )}
          {steps && (
            <div className="pdp-band pdp-how">
              <div className="band-head">
                <span className="band-ico"><RealIcon name="clock" size={26} /></span>
                <h2>{t.how}</h2>
              </div>
              <ol className="band-steps">
                {steps.map(([icon, title, text], i) => (
                  <li key={title}>
                    <span className="bs-ico"><RealIcon name={STEP_ICON[icon] || icon} size={32} /><i>{i + 1}</i></span>
                    <span className="bs-txt"><strong>{title}</strong><span>{text}</span></span>
                  </li>
                ))}
              </ol>
              {product.directions && <p className="band-note how-dir"><Icon name="shield" size={14} /> {product.directions}</p>}
            </div>
          )}
          <div className="faq-list">
            <Accordion items={details} idPrefix="pdp" />
          </div>
        </div>
      </div>
    </section>
  );
}
