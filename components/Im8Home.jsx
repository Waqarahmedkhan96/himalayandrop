'use client';
// IM8-inspired home page. Order of sections follows what works on IM8:
// hero with a clear offer, one proof strip (stats and certificates once), sample
// ambassadors, bundle first, products by format, the daily ritual, origin,
// guarantee, a founder note and the newsletter.
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
import { IM8H, SAMPLE, PHOTOS, PEOPLE } from '@/lib/im8-home2';
import { nameOf } from '@/lib/im8-names';
import Im8Rating from './Im8Rating';

const ORDER = ['shilajit-gold-resin', 'shilajit-silver-resin', 'shilajit-gummies', 'shilajit-drops', 'shilajit-capsules'];
const SET_ORDER = ['bundle-complete-collection', 'bundle-summit-set', 'bundle-daily-ritual'];

export default function Im8Home({ products = [], bundles = [] }) {
  const lang = useLang();
  const t = IM8[lang] || IM8.en;
  const h = IM8H[lang] || IM8H.en;
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
            <Im8Rating />
            <h1>{t.hero.h1a} <em>{t.hero.h1b}</em></h1>
            <p className="im8-lead">{t.hero.sub}</p>
            <div className="im8-cta-row">
              <Link href="/bundles/#bundle-complete-collection" className="im8-btn dark">{t.hero.cta1} <Arrow size={14} /></Link>
              <Link href="/lab-results/" className="im8-btn outl">{t.hero.cta2}</Link>
            </div>
          </div>
          <div className="im8-hero-art">
            <span className="im8-hero-ring" aria-hidden="true" />
            <img src="/images/hero/collection.webp" alt="" fetchPriority="high" />
          </div>
        </div>
      </section>

      {/* 2 · Proof: stats and the certificates, once */}
      <section className="im8-proof" aria-label={h.proof.certs}>
        <ul>
          {h.proof.stats.map(([big, small]) => (
            <li key={big}><strong>{big}</strong><span>{small}</span></li>
          ))}
          <li className="im8-proof-certs">
            <span className="im8-proof-certimgs">
              {['gmp', 'iso22000', 'iso9001'].map((c) => <img key={c} src={`/images/certs/${c}.webp`} alt={c.toUpperCase()} loading="lazy" />)}
            </span>
            <span>GMP · ISO 22000 · ISO 9001</span>
          </li>
        </ul>
        <p className="im8-proof-link"><Link href="/lab-results/">{h.proof.link} <Arrow size={13} /></Link></p>
      </section>

      {/* 2b · Ambassadors (sample) */}
      <section className="im8-sec im8-people" aria-labelledby="im8-people-h">
        <header className="im8-head">
          <p className="im8-eyebrow">{h.people.eyebrow}</p>
          <h2 id="im8-people-h">{h.people.title}</h2>
          <p>{h.people.sub}</p>
          {SAMPLE && <span className="im8-sample">Sample content, replace with real partners before launch</span>}
        </header>
        <div className="im8-people-track">
          {PEOPLE.map((p, i) => (
            <figure key={p.handle} className="im8-person">
              <div className="im8-person-top">
                <span className="im8-avatar" style={{ background: p.hue }} aria-hidden="true">{p.name.charAt(0)}</span>
                <div><strong>{p.name}</strong><span dir="ltr">{p.handle}</span></div>
              </div>
              <blockquote>{h.people.quotes[i]}</blockquote>
              <figcaption>{p.product} · {p.city}</figcaption>
            </figure>
          ))}
        </div>
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
                <h3>{nameOf(b)}</h3>
                <p className="im8-tag">{b.tagline}</p>
                <div className="im8-price">
                  <strong>{b.amount != null ? money(b.amount, b.currency) : ''}</strong>
                  {b.compareAt > b.amount && <s>{money(b.compareAt, b.currency)}</s>}
                  <span>{t.sets.vat}</span>
                </div>
                {b.compareAt > b.amount && <p className="im8-save">{t.sets.youSave(money(b.compareAt - b.amount, b.currency))}</p>}
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
                <Link href="/bundles/#bundle-complete-collection" className="im8-also">{t.formats.fromSet}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4b · Daily ritual with photos */}
      <section className="im8-ritual">
        <div className="im8-ritual-in">
          <div className="im8-ritual-photos">
            <figure className="a"><img src={PHOTOS.pour.src} alt="" loading="lazy" /><figcaption>{h.ritual.credit}: {PHOTOS.pour.by} / Unsplash</figcaption></figure>
            <figure className="b"><img src={PHOTOS.cup.src} alt="" loading="lazy" /><figcaption>{h.ritual.credit}: {PHOTOS.cup.by} / Unsplash</figcaption></figure>
          </div>
          <div className="im8-ritual-copy">
            <p className="im8-eyebrow">{h.ritual.eyebrow}</p>
            <h2>{h.ritual.title}</h2>
            <p className="im8-ritual-text">{h.ritual.text}</p>
            <ol className="im8-ritual-steps">
              {h.ritual.steps.map(([a, b], i) => (
                <li key={a}><span>{i + 1}</span><div><strong>{a}</strong><p>{b}</p></div></li>
              ))}
            </ol>
            <Link href="/bundles/#bundle-complete-collection" className="im8-btn dark">{h.ritual.cta} <Arrow size={14} /></Link>
          </div>
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
        <figure className="im8-peaks">
          <img src={PHOTOS.peaks.src} alt="" loading="lazy" />
          <figcaption>{h.peaks.caption} · {h.ritual.credit}: {PHOTOS.peaks.by} / Unsplash</figcaption>
        </figure>
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

      {/* 8 · Founder note */}
      <section className="im8-founder">
        <div className="im8-founder-in">
          <figure className="im8-founder-img">
            <img src={PHOTOS.valley.src} alt="" loading="lazy" />
            <figcaption>{h.peaks.caption} · {h.ritual.credit}: {PHOTOS.valley.by} / Unsplash</figcaption>
          </figure>
          <div className="im8-founder-copy">
            <p className="im8-eyebrow">{h.founder.eyebrow}</p>
            <h2>{h.founder.title}</h2>
            {h.founder.paras.map((x) => <p key={x}>{x}</p>)}
            <p className="im8-sign"><strong>Founder name</strong><span>{h.founder.role}</span></p>
            {SAMPLE && <span className="im8-sample">Sample letter, replace with the founder’s own words and photo</span>}
            <Link href="/our-story/" className="im8-btn outl">{h.founder.cta}</Link>
          </div>
        </div>
      </section>

      <div className="im8-news"><Newsletter /></div>

      {/* Sticky buy bar on phones */}
      {summit && (
        <div className={`im8-sticky ${stuck ? 'show' : ''}`} aria-hidden={!stuck}>
          <span><strong>{t.sticky.label}</strong><em>{money(summit.amount, summit.currency)}{summit.compareAt > summit.amount ? ` · ${t.sets.save(summit.savePct)}` : ''}</em></span>
          <Link href="/bundles/#bundle-complete-collection" className="im8-btn dark" tabIndex={stuck ? 0 : -1}>{t.sticky.cta}</Link>
        </div>
      )}
    </div>
  );
}
