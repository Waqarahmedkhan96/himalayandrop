'use client';
// IM8-inspired home page. Order of sections follows what works on IM8:
// hero with a clear offer, proof right after, bundle first, then products by
// format, origin, standards, guarantee, a short note and the newsletter.
// Prices, stock and variants come from Shopify through the same props as the
// current home page. Only visible when <html data-version="im8">.
import { useEffect, useState } from 'react';
import Link from './LLink';
import Newsletter from './Newsletter';
import { Arrow } from './Arrow';
import { Icon } from './Icons';
import { useLang } from './LangProvider';
import { formatMoney } from '@/lib/shopify';
import { IM8 } from '@/lib/im8-i18n';

const ORDER = ['shilajit-gold-resin', 'shilajit-silver-resin', 'shilajit-gummies', 'shilajit-drops', 'shilajit-capsules'];
const IN_SUMMIT = ['shilajit-gold-resin', 'shilajit-gummies', 'shilajit-drops', 'shilajit-capsules'];
const SET_ORDER = ['bundle-summit-set', 'bundle-daily-ritual', 'bundle-gift-of-the-mountain'];

export default function Im8Home({ products = [], bundles = [] }) {
  const lang = useLang();
  const t = IM8[lang] || IM8.en;
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const on = () => setStuck(window.scrollY > 640);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  const sets = SET_ORDER.map((h) => bundles.find((b) => b.handle === h)).filter(Boolean);
  const summit = sets[0];
  const list = ORDER.map((h) => products.find((p) => p.handle === h)).filter(Boolean);
  const money = (n, c) => formatMoney(n, c || 'DKK');

  return (
    <div className="im8">
      {/* 1 · Hero */}
      <section className="im8-hero">
        <div className="im8-hero-in">
          <div className="im8-hero-copy">
            <p className="im8-eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.h1a} <em>{t.hero.h1b}</em></h1>
            <p className="im8-lead">{t.hero.sub}</p>
            <div className="im8-cta-row">
              <Link href="/bundles/#bundle-summit-set" className="im8-btn dark">{t.hero.cta1} <Arrow size={14} /></Link>
              <Link href="/lab-results/" className="im8-btn outl">{t.hero.cta2}</Link>
            </div>
            <ul className="im8-chips">
              {t.hero.chips.map((c, i) => <li key={c}><Icon name={['shield', 'flask', 'mountain'][i]} size={15} />{c}</li>)}
            </ul>
          </div>
          <div className="im8-hero-art">
            <span className="im8-hero-ring" aria-hidden="true" />
            <img src="/images/hero/collection.webp" alt="" fetchPriority="high" />
          </div>
        </div>
      </section>

      {/* 2 · Proof strip */}
      <section className="im8-proof" aria-label={t.standards.eyebrow}>
        <ul>
          {t.proof.map(([big, small]) => (
            <li key={big}><strong>{big}</strong><span>{small}</span></li>
          ))}
        </ul>
      </section>

      {/* 3 · Sets first */}
      <section className="im8-sec" id="sets">
        <header className="im8-head">
          <p className="im8-eyebrow">{t.sets.eyebrow}</p>
          <h2>{t.sets.title}</h2>
          <p>{t.sets.sub}</p>
        </header>
        <div className="im8-sets">
          {sets.map((b, idx) => (
            <article key={b.handle} className={`im8-set ${idx === 0 ? 'best' : ''}`}>
              {(idx === 0 || b.badge) && <span className="im8-ribbon">{idx === 0 ? `★ ${t.sets.best}` : b.badge}</span>}
              <Link href={`/bundles/#${b.handle}`} className="im8-set-img" tabIndex={-1} aria-hidden="true">
                <img src={b.image} alt="" loading="lazy" />
                <span className="im8-off">{t.sets.save(b.savePct)}</span>
              </Link>
              <div className="im8-set-body">
                <p className="im8-kicker">{b.tags.join(' · ')}</p>
                <h3>{b.name}</h3>
                <p className="im8-tag">{b.tagline}</p>
                <div className="im8-price">
                  <strong>{b.amount != null ? money(b.amount, b.currency) : ''}</strong>
                  {b.compareAt > b.amount && <s>{money(b.compareAt, b.currency)}</s>}
                  <span>{t.sets.vat}</span>
                </div>
                {b.compareAt > b.amount && <p className="im8-save">{t.sets.youSave(money(b.compareAt - b.amount, b.currency))}</p>}
                <ul className="im8-ticks">
                  <li><Icon name="shield" size={14} />{t.hero.chips[0]}</li>
                  <li><Icon name="flask" size={14} />{t.hero.chips[1]}</li>
                </ul>
                <Link href={`/bundles/#${b.handle}`} className="im8-btn dark block">{t.sets.shop} <Arrow size={14} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4 · Products by format */}
      <section className="im8-sec band" id="formats">
        <header className="im8-head">
          <p className="im8-eyebrow">{t.formats.eyebrow}</p>
          <h2>{t.formats.title}</h2>
          <p>{t.formats.sub}</p>
        </header>
        <div className="im8-cards">
          {list.map((p) => (
            <article key={p.handle} className="im8-card">
              <Link href={`/products/${p.handle}/`} className="im8-card-img" tabIndex={-1} aria-hidden="true">
                <img src={p.image} alt="" loading="lazy" />
              </Link>
              <p className="im8-kicker">{p.tag}</p>
              <h3><Link href={`/products/${p.handle}/`}>{p.title}</Link></h3>
              <p className="im8-tag">{p.subtitle}</p>
              <p className="im8-card-price">{p.amount != null ? money(p.amount, p.currency) : p.price}</p>
              <div className="im8-card-cta">
                <Link href={`/products/${p.handle}/`} className="im8-btn dark block">{t.formats.shop}</Link>
                {IN_SUMMIT.includes(p.handle)
                  ? <Link href="/bundles/#bundle-summit-set" className="im8-also">{t.formats.fromSet}</Link>
                  : <span className="im8-also" aria-hidden="true">&nbsp;</span>}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5 · From mountain to jar */}
      <section className="im8-sec">
        <header className="im8-head">
          <p className="im8-eyebrow">{t.source.eyebrow}</p>
          <h2>{t.source.title}</h2>
        </header>
        <ol className="im8-steps">
          {t.source.steps.map(([h, d], i) => (
            <li key={h}>
              <span className="im8-step-n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{h}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
        <p className="im8-center"><Link href="/process/" className="im8-btn outl">{t.source.cta}</Link></p>
      </section>

      {/* 6 · Standards you can check */}
      <section className="im8-standards">
        <div className="im8-standards-in">
          <div>
            <p className="im8-eyebrow gold">{t.standards.eyebrow}</p>
            <h2>{t.standards.title}</h2>
            <p>{t.standards.text}</p>
            <div className="im8-cta-row">
              <Link href="/certificates/" className="im8-btn gold">{t.standards.c1}</Link>
              <Link href="/lab-results/" className="im8-btn ghost">{t.standards.c2}</Link>
            </div>
          </div>
          <ul className="im8-certs">
            {['gmp', 'iso22000', 'iso9001'].map((c) => <li key={c}><img src={`/images/certs/${c}.webp`} alt={c.toUpperCase()} loading="lazy" /></li>)}
          </ul>
        </div>
      </section>

      {/* 7 · Guarantee */}
      <section className="im8-guarantee">
        <div className="im8-g-num" aria-hidden="true">60</div>
        <div>
          <h2>{t.guarantee.title}</h2>
          <p>{t.guarantee.text}</p>
          <Link href="/policies/refund-policy/" className="im8-btn dark">{t.guarantee.cta}</Link>
        </div>
      </section>

      {/* 8 · Short brand note */}
      <section className="im8-note">
        <p className="im8-eyebrow">{t.note.eyebrow}</p>
        <h2>{t.note.title}</h2>
        <p>{t.note.text}</p>
        <Link href="/our-story/" className="im8-btn outl">{t.note.cta}</Link>
      </section>

      <div className="im8-news"><Newsletter /></div>

      {/* Sticky buy bar on phones */}
      {summit && (
        <div className={`im8-sticky ${stuck ? 'show' : ''}`} aria-hidden={!stuck}>
          <span><strong>{t.sticky.label}</strong><em>{money(summit.amount, summit.currency)}{summit.compareAt > summit.amount ? ` · ${t.sets.save(summit.savePct)}` : ''}</em></span>
          <Link href="/bundles/#bundle-summit-set" className="im8-btn dark" tabIndex={stuck ? 0 : -1}>{t.sticky.cta}</Link>
        </div>
      )}
    </div>
  );
}
