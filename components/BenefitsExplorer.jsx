'use client';
// Benefits infographic. Product sits in a cream disc; a gold arc carries one
// numbered node per benefit, each linked by a dotted line to its card.
// Switching product swaps image and benefits with an animated transition.
import { useRef, useState } from 'react';
import Link from 'next/link';
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { kinds, benefits } from '@/lib/benefits';
import KindTabs from './KindTabs';
import { Icon } from './Icons';
import { Arrow } from './Arrow';

// Geometry of the desktop stage (viewBox 1000 x 560).
const CX = 300;
const CY = 280;
const R = 232;
const PILL_X = 590;

function layout(n) {
  const top = 62;
  const bottom = 498;
  return Array.from({ length: n }, (_, i) => {
    const y = n === 1 ? CY : top + (i * (bottom - top)) / (n - 1);
    const theta = Math.asin(Math.max(-0.96, Math.min(0.96, (y - CY) / R)));
    return { y, x: CX + R * Math.cos(theta), theta };
  });
}

function arcPath(a0, a1, r = R) {
  const p = (a) => `${CX + r * Math.cos(a)} ${CY + r * Math.sin(a)}`;
  return `M ${p(a0)} A ${r} ${r} 0 0 1 ${p(a1)}`;
}

function Panel({ kind, active }) {
  const b = benefits[kind.key];
  const pts = layout(b.items.length);
  const a0 = pts[0].theta - 0.32;
  const a1 = pts[pts.length - 1].theta + 0.32;

  return (
    <div className="bx-panel" data-tab-panel={kind.key} hidden={!active}>
      <div className="bx-stage">
        <svg className="bx-lines" viewBox="0 0 1000 560" aria-hidden="true">
          <defs>
            <linearGradient id={`bx-gold-${kind.key}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#eed9a6" />
              <stop offset="0.5" stopColor="#cca25e" />
              <stop offset="1" stopColor="#a8803f" />
            </linearGradient>
          </defs>
          <circle cx={CX} cy={CY} r="200" fill="none" stroke="rgba(88,15,27,0.25)" strokeWidth="2" strokeDasharray="1 9" strokeLinecap="round" />
          <path className="bx-arc-bg" d={arcPath(-Math.PI * 0.62, Math.PI * 0.62)} fill="none" stroke="rgba(88,15,27,0.08)" strokeWidth="14" strokeLinecap="round" />
          <path className="bx-arc" d={arcPath(a0, a1)} fill="none" stroke={`url(#bx-gold-${kind.key})`} strokeWidth="14" strokeLinecap="round" />
          {pts.map((p, i) => (
            <g key={i} className="bx-link">
              <path d={`M ${p.x + 22} ${p.y} L ${PILL_X} ${p.y}`} stroke="rgba(88,15,27,0.35)" strokeWidth="2" strokeDasharray="1 8" strokeLinecap="round" fill="none" />
              <circle className="bx-node" cx={p.x} cy={p.y} r="21" fill="#580f1b" stroke="#f7f1e8" strokeWidth="4" />
              <text x={p.x} y={p.y + 5} textAnchor="middle" fill="#e2c487" fontSize="15" fontWeight="700" fontFamily="Playfair Display Variable, Playfair Display, serif">{i + 1}</text>
            </g>
          ))}
        </svg>

        <div className="bx-disc">
          <span className="bx-glow" />
          <img src={kind.image} alt={b.title} loading="lazy" />
          <p className="bx-disc-label">
            <span>{b.title}</span>
            <em>{b.tagline}</em>
          </p>
        </div>

        <ol className="bx-pills">
          {b.items.map((it, i) => (
            <li key={it.title} className="bx-pill" style={{ '--y': `${(pts[i].y / 560) * 100}%` }}>
              <span className="bx-icon"><Icon name={it.icon} size={22} /></span>
              <span className="bx-text">
                <strong>{it.title}</strong>
                <span>{it.text}</span>
              </span>
              <span className="bx-num">{String(i + 1).padStart(2, '0')}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="bx-cta">
        <Link href={kind.href} className="btn">Discover {b.title} <Arrow /></Link>
      </div>
    </div>
  );
}

export default function BenefitsExplorer({ initial = 'resin', id = 'benefits' }) {
  const root = useRef(null);
  const [active, setActive] = useState(initial);

  const animateIn = (key) => {
    if (prefersReducedMotion()) return;
    const panel = root.current.querySelector(`[data-tab-panel="${key}"]`);
    const arc = panel.querySelector('.bx-arc');
    const len = arc.getTotalLength();
    gsap.timeline({ defaults: { ease: 'expo.out' } })
      .fromTo(arc, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: 1.4, ease: 'power2.inOut' })
      .fromTo(panel.querySelector('.bx-disc img'), { y: 40, scale: 0.85, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: 1.2 }, 0)
      .fromTo(panel.querySelectorAll('.bx-node'), { scale: 0, transformOrigin: 'center', transformBox: 'fill-box' }, { scale: 1, stagger: 0.08, duration: 0.6, ease: 'back.out(2.5)' }, 0.3)
      .fromTo(panel.querySelectorAll('.bx-pill'), { x: 40, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.08, duration: 0.9 }, 0.35);
  };

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from(root.current.querySelectorAll('.section-head > *, .kind-tabs'), {
        y: 24, opacity: 0, stagger: 0.08, duration: 1, ease: 'expo.out',
        scrollTrigger: { trigger: root.current, start: 'top 80%', once: true },
      });
      const panel = root.current.querySelector(`[data-tab-panel="${initial}"]`);
      gsap.set(panel.querySelectorAll('.bx-pill'), { opacity: 0 });
      ScrollTrigger.create({ trigger: panel, start: 'top 75%', once: true, onEnter: () => animateIn(initial) });
    },
    { scope: root }
  );

  const change = (key) => {
    if (key === active) return;
    setActive(key);
    requestAnimationFrame(() => animateIn(key));
  };

  return (
    <section id={id} className="section bx-section" ref={root}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why it belongs in your ritual</span>
          <h2>One mountain, <em className="gold-text">three rituals.</em></h2>
          <p>Choose a format to see what makes it ours.</p>
        </div>
        <KindTabs active={active} onChange={change} label="Choose a product" />
        <div className="bx-card">
          {kinds.map((k) => (
            <Panel key={k.key} kind={k} active={active === k.key} />
          ))}
        </div>
      </div>
    </section>
  );
}
