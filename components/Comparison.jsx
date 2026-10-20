'use client';
// "Himalayan Drop vs the market" comparison, one table per product family.
import { useRef, useState } from 'react';
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { kinds, comparison, benefits } from '@/lib/benefits';
import KindTabs from './KindTabs';

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

function Table({ kind, active }) {
  const rows = comparison[kind.key];
  return (
    <div className="cmp-panel" data-tab-panel={kind.key} hidden={!active}>
      <div className="cmp-grid" role="table" aria-label={`${benefits[kind.key].title} compared with typical market products`}>
        <div className="cmp-row cmp-head" role="row">
          <span className="cmp-label" role="columnheader" />
          <div className="cmp-ours" role="columnheader">
            <img src={kind.image} alt="" className="cmp-product" />
            <strong>Himalayan Drop<br />{benefits[kind.key].title}</strong>
          </div>
          <div className="cmp-market" role="columnheader">
            <MarketJar />
            <strong>Typical market<br />products</strong>
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

export default function Comparison({ initial = 'resin', id = 'compare' }) {
  const root = useRef(null);
  const [active, setActive] = useState(initial);

  const animateIn = (key) => {
    if (prefersReducedMotion()) return;
    const panel = root.current.querySelector(`[data-tab-panel="${key}"]`);
    gsap.timeline({ defaults: { ease: 'expo.out' } })
      .fromTo(panel.querySelector('.cmp-product'), { y: 30, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 1 })
      .fromTo(panel.querySelectorAll('.cmp-row:not(.cmp-head)'), { y: 18, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.06, duration: 0.8 }, 0.1);
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
          <span className="eyebrow">Choose with confidence</span>
          <h2>Himalayan Drop <em className="gold-text">vs. the market.</em></h2>
          <p>What goes into every jar, compared with what you often find elsewhere.</p>
        </div>
        <KindTabs active={active} onChange={change} label="Compare a product" />
        {kinds.map((k) => (
          <Table key={k.key} kind={k} active={active === k.key} />
        ))}
        <p className="cmp-note">The market column describes common practices, not any specific brand.</p>
      </div>
    </section>
  );
}
