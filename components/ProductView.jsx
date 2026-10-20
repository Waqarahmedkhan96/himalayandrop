'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { useCart } from '@/lib/cart';
import { formatMoney } from '@/lib/shopify';
import Accordion from './Accordion';
import { Arrow } from './Arrow';

export default function ProductView({ product }) {
  const root = useRef(null);
  const { addItem, buyNow, busy } = useCart();

  // First slide is the clean packshot, then the packaging photos.
  const slides = [
    { src: product.image, alt: product.imageAlt, cutout: product.cutout },
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
    product.directions && { q: 'How to use', a: product.directions },
    product.storage && { q: 'Storage', a: product.storage },
    product.caution && { q: 'Caution', a: product.caution },
    { q: 'Lab results', a: 'Each batch is tested by an independent lab for heavy metals, quality and fulvic acid. Look up your batch number on our Lab results page.' },
  ].filter(Boolean);

  const f = product.formula;

  return (
    <section className="pdp" ref={root}>
      <div className="container pdp-grid">
        <div className="pdp-gallery">
          <div className={`pdp-media ${slide.cutout ? 'cutout' : 'photo'}`}>
            <img key={slide.src} src={slide.src} alt={slide.alt} />
          </div>
          {slides.length > 1 && (
            <div className="pdp-thumbs" role="tablist" aria-label="Product images">
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
            <Link href="/shop/">Shop</Link> / {product.title}
          </p>
          <h1>
            <span className="line"><span>{product.title}</span></span>
          </h1>
          <p className="sub">{product.subtitle}</p>
          <p className="price">{product.amount != null ? formatMoney(product.amount, product.currency) : product.price || 'Launching soon'} <span className="vat">incl. VAT</span></p>
          <p className="desc">{product.description}</p>
          {product.facts && (
            <dl className="pdp-facts">
              {product.facts.map(([v, l]) => (
                <div key={l}><dt>{v}</dt><dd>{l}</dd></div>
              ))}
            </dl>
          )}
          <div className="pdp-actions">
            <button className="btn gold block" onClick={() => buyNow(product.variantId)} disabled={busy}>
              Buy now <Arrow />
            </button>
            <button className="btn outline block" onClick={() => addItem(product.variantId)} disabled={busy}>
              Add to cart
            </button>
          </div>
          <div className="pdp-trust">
            <span>Harvested above 5,000 m</span>
            <span>Danish brand</span>
            <span>Lab report per batch</span>
          </div>
          {f && (
            <div className="pdp-formula">
              <div className="pf-head">
                <h2>{f.title}</h2>
                <span>{f.serving}</span>
              </div>
              <table>
                <thead><tr><th scope="col">Ingredient</th><th scope="col">Amount</th></tr></thead>
                <tbody>
                  {f.rows.map(([n, a]) => (
                    <tr key={n}><th scope="row">{n}</th><td>{a}</td></tr>
                  ))}
                </tbody>
              </table>
              {f.note && <p className="pf-note">*{f.note}</p>}
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
