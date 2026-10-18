'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { useCart } from '@/lib/cart';
import { formatMoney } from '@/lib/shopify';
import Accordion from './Accordion';
import { Arrow } from './Arrow';

export default function ProductView({ product }) {
  const root = useRef(null);
  const { addItem, buyNow, busy } = useCart();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.timeline({ defaults: { ease: 'expo.out', duration: 1.3 } })
        .from('.pdp-media', { clipPath: 'inset(10% 10% 10% 10% round 60px)', duration: 1.4 })
        .from('.pdp-media img', { scale: 1.15, y: 30, duration: 1.8 }, '<')
        .from('.pdp-info h1 .line > span', { yPercent: 115 }, 0.3)
        .from('.pdp-info > *:not(h1)', { y: 20, opacity: 0, stagger: 0.06 }, 0.45);
    },
    { scope: root }
  );

  const details = [
    { q: 'How to use', a: 'Directions for use will be added from your Shopify product description.' },
    { q: 'Ingredients', a: 'The full ingredient list and nutrition panel will appear here.' },
    { q: 'Lab results', a: 'Each batch is tested by an independent lab. The certificate of analysis will be linked here.' },
  ];

  return (
    <section className="pdp" ref={root}>
      <div className="container pdp-grid">
        <div className={`pdp-media ${product.cutout ? 'cutout' : ''}`}>
          <img src={product.heroImage || product.image} alt={product.imageAlt} />
        </div>
        <div className="pdp-info">
          <p className="crumb">
            <Link href="/#collection">Shop</Link> / {product.title}
          </p>
          <h1>
            <span className="line"><span>{product.title}</span></span>
          </h1>
          <p className="sub">{product.subtitle}</p>
          <p className="price">{product.amount != null ? formatMoney(product.amount, product.currency) : product.price || 'Launching soon'} <span className="vat">incl. VAT</span></p>
          <p className="desc">{product.description}</p>
          <div className="pdp-actions">
            <button className="btn gold block" onClick={() => buyNow(product.variantId)} disabled={busy}>
              Buy now <Arrow />
            </button>
            <button className="btn outline block" onClick={() => addItem(product.variantId)} disabled={busy}>
              Add to cart
            </button>
          </div>
          <div className="pdp-trust">
            <span>Himalayan sourced</span>
            <span>Danish brand</span>
            <span>Lab report per batch</span>
          </div>
          <div className="faq-list">
            <Accordion items={details} idPrefix="pdp" />
          </div>
        </div>
      </div>
    </section>
  );
}
