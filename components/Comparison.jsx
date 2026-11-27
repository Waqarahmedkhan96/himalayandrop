'use client';
// "Himalayan Drop vs the market" comparison, one table per product family.
import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { getKinds, getComparison, getBenefits } from '@/lib/benefits';
import { useLang } from './LangProvider';
import { useHandle } from './OriginContext';
import { isHimalayan, localizeOrigin } from '@/lib/origin';

const T = {
  en: { styleNew: 'New', styleOld: 'Classic', styleLabel: 'Comparison style', vs: 'VS', elsewhere: 'Elsewhere', ours: 'Our standard', eyebrow: 'Choose with confidence', h: 'Himalayan Drop', hg: 'vs. the market.', p: 'What goes into every jar, compared with what you often find elsewhere.', choose: 'Compare a product', market: ['Typical market', 'products'], note: 'The market column describes common practices, not any specific brand.', aria: (x) => `${x} compared with typical market products` },
  da: { styleNew: 'Ny', styleOld: 'Klassisk', styleLabel: 'Visning', vs: 'MOD', elsewhere: 'Andre steder', ours: 'Vores standard', eyebrow: 'Vælg med ro i maven', h: 'Himalayan Drop', hg: 'mod markedet.', p: 'Hvad der kommer i hver krukke, sammenlignet med det, du ofte finder andre steder.', choose: 'Sammenlign et produkt', market: ['Typiske produkter', 'på markedet'], note: 'Kolonnen for markedet beskriver almindelig praksis, ikke et bestemt brand.', aria: (x) => `${x} sammenlignet med typiske produkter på markedet` },
  de: { styleNew: 'Neu', styleOld: 'Klassisch', styleLabel: 'Darstellung', vs: 'VS', elsewhere: 'Anderswo', ours: 'Unser Standard', eyebrow: 'Mit Sicherheit wählen', h: 'Himalayan Drop', hg: 'im Vergleich.', p: 'Was in jedem Glas steckt, verglichen mit dem, was man anderswo oft findet.', choose: 'Produkt vergleichen', market: ['Typische', 'Marktprodukte'], note: 'Die Marktspalte beschreibt übliche Praktiken, keine bestimmte Marke.', aria: (x) => `${x} im Vergleich mit typischen Marktprodukten` },
  fr: { styleNew: 'Nouveau', styleOld: 'Classique', styleLabel: 'Affichage', vs: 'VS', elsewhere: 'Ailleurs', ours: 'Notre standard', eyebrow: 'Choisir en confiance', h: 'Himalayan Drop', hg: 'face au marché.', p: 'Ce qui entre dans chaque pot, comparé à ce que l’on trouve souvent ailleurs.', choose: 'Comparer un produit', market: ['Produits', 'courants'], note: 'La colonne marché décrit des pratiques courantes, pas une marque précise.', aria: (x) => `${x} comparé aux produits courants du marché` },
  es: { styleNew: 'Nuevo', styleOld: 'Clásico', styleLabel: 'Estilo', vs: 'VS', elsewhere: 'En otros sitios', ours: 'Nuestro estándar', eyebrow: 'Elige con confianza', h: 'Himalayan Drop', hg: 'frente al mercado.', p: 'Lo que lleva cada tarro, comparado con lo que se encuentra a menudo en otros lugares.', choose: 'Compara un producto', market: ['Productos', 'habituales'], note: 'La columna de mercado describe prácticas habituales, no una marca concreta.', aria: (x) => `${x} comparado con productos habituales del mercado` },
  ar: { styleNew: 'جديد', styleOld: 'كلاسيكي', styleLabel: 'العرض', vs: 'VS', elsewhere: 'في أماكن أخرى', ours: 'معيارنا', eyebrow: 'اختر بثقة', h: 'Himalayan Drop', hg: 'مقارنة بالسوق.', p: 'ما يدخل في كل عبوة، مقارنة بما تجده غالباً في أماكن أخرى.', choose: 'قارن منتجاً', market: ['منتجات', 'السوق المعتادة'], note: 'يصف عمود السوق الممارسات الشائعة، وليس علامة تجارية بعينها.', aria: (x) => `${x} مقارنة بمنتجات السوق المعتادة` },
};
import KindTabs from './KindTabs';
import { Icon } from './Icons';

function Check() {
  return (
    <svg className="cmp-mark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}
function Dash() {
  return (
    <svg className="cmp-mark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <path d="M7 12h10" />
    </svg>
  );
}

function MarketJar() {
  return (
    <svg className="cmp-jar" viewBox="0 0 120 120" aria-hidden="true">
      <rect x="34" y="18" width="52" height="16" rx="4" fill="#b9b0a6" />
      <rect x="26" y="34" width="68" height="70" rx="12" fill="#cfc6bb" />
      <rect x="34" y="54" width="52" height="28" rx="4" fill="#e3dcd2" />
      <rect x="42" y="62" width="36" height="4" rx="2" fill="#bdb3a8" />
      <rect x="46" y="70" width="28" height="4" rx="2" fill="#bdb3a8" />
    </svg>
  );
}

// The earlier table design, kept as an alternative.
function TableClassic({ kind, active, rows, title, t }) {
  return (
    <div className="cmp-panel" data-tab-panel={kind.key} hidden={!active}>
      <div className="cmp-grid" role="table" aria-label={t.aria(title)}>
        <div className="cmp-row cmp-head" role="row">
          <span className="cmp-label" role="columnheader" />
          <div className="cmp-ours" role="columnheader">
            <img loading="lazy" decoding="async" src={kind.image} alt="" className="cmp-product" />
            <strong>Himalayan Drop<br />{title}</strong>
          </div>
          <div className="cmp-market" role="columnheader">
            <MarketJar />
            <strong>{t.market[0]}<br />{t.market[1]}</strong>
          </div>
        </div>
        {rows.map(([label, ours, market], i) => (
          <div className={`cmp-row ${i === rows.length - 1 ? 'last' : ''}`} role="row" key={label}>
            <span className="cmp-label" role="rowheader">{label}</span>
            <div className="cmp-ours" role="cell"><Check /><span>{ours}</span></div>
            <div className="cmp-market" role="cell"><Dash /><span>{market}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

// One icon per row, in the order of the rows in lib/benefits.js.
const ROW_ICONS = {
  resin: ['pin', 'jar', 'filter', 'sun', 'flask', 'box'],
  gummies: ['pin', 'scale', 'berry', 'flask', 'box'],
  drops: ['pin', 'scale', 'drop', 'box', 'flask'],
  capsules: ['pin', 'scale', 'capsule', 'flask', 'shield'],
};

// Grey low hills on the market side, burgundy peaks on ours.
function Ridge() {
  return (
    <svg className="hh-ridge" viewBox="0 0 1000 170" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="hh-peak" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6b1426" />
          <stop offset="1" stopColor="#40060f" />
        </linearGradient>
      </defs>
      <path d="M0 170V120C60 108 110 118 175 106S295 98 360 112S455 106 500 120V170Z" fill="#d9cdbd" />
      <path d="M500 170V108L556 68L590 90L667 14L729 76L771 48L840 94L896 64L1000 108V170Z" fill="url(#hh-peak)" />
      <path d="M500 108L556 68L590 90L667 14L729 76L771 48L840 94L896 64L1000 108" fill="none" stroke="#e0b256" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M641 40L667 14L697 44L680 38L663 51Z" fill="#e8c97c" />
    </svg>
  );
}

function Table({ kind, active, rows, title, t }) {
  const icons = ROW_ICONS[kind.key];
  return (
    <div className="hh-panel" data-tab-panel={kind.key} hidden={!active}>
      <Ridge />
      <div className="hh-heads">
        <div className="hh-h hh-l">
          <MarketJar />
          <strong>{t.market[0]} {t.market[1]}</strong>
          <small>{t.elsewhere}</small>
        </div>
        <span className="hh-vs" aria-hidden="true">{t.vs}</span>
        <div className="hh-h hh-r">
          <img loading="lazy" decoding="async" src={kind.image} alt="" className="hh-product" />
          <strong>Himalayan Drop {title}</strong>
          <small>{t.ours}</small>
        </div>
      </div>
      <div className="hh-rows" role="table" aria-label={t.aria(title)}>
        {rows.map(([label, ours, market], i) => (
          <div className="hh-row" role="row" key={label}>
            <div className="hh-mid" role="rowheader">
              <span className="hh-ic"><Icon name={icons[i] || 'shield'} size={22} /></span>
              <b>{label}</b>
            </div>
            <div className="hh-th" role="cell"><span>{market}</span><Dash /></div>
            <div className="hh-us" role="cell"><Check /><span>{ours}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Comparison({ initial = 'resin', id = 'compare', variant = 'headtohead' }) {
  const root = useRef(null);
  const lang = useLang();
  const t = T[lang];
  const kinds = getKinds(lang);
  const himalayan = isHimalayan(useHandle());
  const comparison = himalayan ? localizeOrigin(getComparison(lang), lang) : getComparison(lang);
  const benefits = getBenefits(lang);
  const [active, setActive] = useState(initial);
  // The head-to-head design is the default; ?compare=classic shows the earlier table.
  const [look, setLook] = useState(variant);
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('compare') === 'classic') setLook('classic');
  }, []);

  const animateIn = (key) => {
    if (prefersReducedMotion()) return;
    const panel = root.current.querySelector(`[data-tab-panel="${key}"]`);
    gsap.timeline({ defaults: { ease: 'expo.out' } })
      .fromTo(panel.querySelector('.hh-product, .cmp-product'), { y: 30, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 1 })
      .fromTo(panel.querySelectorAll('.hh-row, .cmp-row:not(.cmp-head)'), { y: 18, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.06, duration: 0.8 }, 0.1);
  };

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from(root.current.querySelectorAll('.section-head > *, .kind-tabs'), {
        y: 24, opacity: 0, stagger: 0.08, duration: 1, ease: 'expo.out',
        scrollTrigger: { trigger: root.current, start: 'top 80%', once: true },
      });
      const panel = root.current.querySelector(`[data-tab-panel="${initial}"]`);
      ScrollTrigger.create({ trigger: panel, start: 'top 80%', once: true, onEnter: () => animateIn(initial) });
    },
    { scope: root }
  );

  const change = (key) => {
    if (key === active) return;
    setActive(key);
    requestAnimationFrame(() => animateIn(key));
  };

  return (
    <section id={id} className="section cmp-section" ref={root}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2>{t.h} <em className="gold-text">{t.hg}</em></h2>
          <p>{t.p}</p>
        </div>
        <KindTabs active={active} onChange={change} label={t.choose} />
        <div className="hh-switch" role="group" aria-label={t.styleLabel}>
          <button type="button" className={look === 'classic' ? '' : 'is-on'} aria-pressed={look !== 'classic'} onClick={() => setLook('headtohead')}>{t.styleNew}</button>
          <button type="button" className={look === 'classic' ? 'is-on' : ''} aria-pressed={look === 'classic'} onClick={() => setLook('classic')}>{t.styleOld}</button>
        </div>
        {kinds.map((k) => (
          look === 'classic' ? <TableClassic key={k.key} kind={k} active={active === k.key} rows={comparison[k.key]} title={benefits[k.key].title} t={t} /> : <Table key={k.key} kind={k} active={active === k.key} rows={comparison[k.key]} title={benefits[k.key].title} t={t} />
        ))}
        <p className="cmp-note">{t.note}</p>
      </div>
    </section>
  );
}
