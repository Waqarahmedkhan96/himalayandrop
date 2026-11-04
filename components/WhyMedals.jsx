'use client';
// Home "Why Himalayan Drop", compact layout with heritage medallions. Styles: .why-medals in app/globals.css.
import { useState } from 'react';
import LLink from './LLink';

const GOLD = '#f6e3ae';
const SERIF = "'Playfair Display', serif";

function Medal({ id, children }) {
  return (
    <svg className="md" viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <linearGradient id={`wmg${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fbeec3" /><stop offset=".5" stopColor="#cca25e" /><stop offset="1" stopColor="#8a6429" />
        </linearGradient>
        <radialGradient id={`wmd${id}`} cx=".4" cy=".3" r=".9">
          <stop offset="0" stopColor="#7a1a2c" /><stop offset="1" stopColor="#34070f" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48.5" fill={`url(#wmg${id})`} />
      <circle cx="50" cy="50" r="44.5" fill="none" stroke="#6b4a1c" strokeWidth=".8" opacity=".7" />
      <circle cx="50" cy="50" r="40.8" fill="none" stroke="#fbeec3" strokeWidth="2.6" strokeDasharray=".9 2.1" opacity=".9" />
      <circle cx="50" cy="50" r="37" fill={`url(#wmd${id})`} />
      <circle cx="50" cy="50" r="37" fill="none" stroke="#e9cf8d" strokeWidth=".7" opacity=".7" />
      <g fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{children}</g>
    </svg>
  );
}
const T = (p) => <text textAnchor="middle" fill={GOLD} stroke="none" {...p} />;
const sans = (size, ls) => ({ font: `700 ${size}px Manrope, sans-serif`, letterSpacing: `${ls}em` });
const serif = (size, w = 500) => ({ fontFamily: SERIF, fontSize: size, fontWeight: w });

const ICON = {
  days: (id) => (
    <Medal id={id}>
      <path d="M30 68Q20 52 30 34M34 70Q25 52 35 33" strokeWidth="1.4" /><path d="M70 68Q80 52 70 34M66 70Q75 52 65 33" strokeWidth="1.4" />
      <T x="50" y="57" style={serif(25)}>60</T><T x="50" y="68" style={sans(6.5, 0.2)}>DAYS</T>
    </Medal>
  ),
  gmp: (id) => (
    <Medal id={id}>
      <T x="50" y="53" style={serif(21, 600)}>GMP</T><path d="M33 59h34" strokeWidth="1" /><T x="50" y="69" style={sans(5.6, 0.2)}>CERTIFIED</T>
    </Medal>
  ),
  iso: (id, n) => (
    <Medal id={id}>
      <T x="50" y="44" style={sans(8.5, 0.26)}>ISO</T><path d="M34 49h32" strokeWidth="1" /><T x="50" y="65" style={serif(n.length > 4 ? 15 : 18, 600)}>{n}</T>
    </Medal>
  ),
  lab: (id) => (
    <Medal id={id}>
      <path d="M44 30h12M46 30v14L35 63a3.2 3.2 0 0 0 2.8 4.8h24.4A3.2 3.2 0 0 0 65 63L54 44V30" /><path d="M39.5 57h21" strokeWidth="1.4" />
      <circle cx="47" cy="62" r="1.3" fill={GOLD} stroke="none" /><circle cx="54" cy="60" r="1.6" fill={GOLD} stroke="none" /><circle cx="51" cy="37" r="1" fill={GOLD} stroke="none" />
    </Medal>
  ),
  dk: (id) => (
    <Medal id={id}>
      <clipPath id={`wmc${id}`}><circle cx="50" cy="50" r="25" /></clipPath>
      <g clipPath={`url(#wmc${id})`} stroke="none"><rect x="20" y="20" width="60" height="60" fill="#c8102e" /><rect x="34" y="20" width="9" height="60" fill="#fff" /><rect x="20" y="45.5" width="60" height="9" fill="#fff" /></g>
      <circle cx="50" cy="50" r="25" strokeWidth="1.2" />
    </Medal>
  ),
  mt: (id) => (
    <Medal id={id}>
      <path d="M23 67 40 41l8 11 10-18 19 33Z" /><path d="M53 43l5-9 5 9M36 47l4-6 4 6" strokeWidth="1.5" /><path d="M23 67h54" strokeWidth="1.4" />
      <circle cx="70" cy="33" r="3.6" strokeWidth="1.5" /><T x="50" y="79" style={sans(6.2, 0.22)}>5,000 M</T>
    </Medal>
  ),
};

const L = [
  { k: 'The promise', t: '60-day guarantee', n: '60', p: 'Use it for 60 days. If it is not for you, send it back and we refund you.', m: 'How the guarantee works', href: '/policies/', icon: () => ICON.days(0) },
  { k: 'The standard', t: 'Quality standards', n: 'GMP', p: 'Produced under GMP and ISO food-safety standards (ISO 22000 and ISO 9001). The certificates are on our certificates page for anyone to read.', m: 'See the certificates', href: '/certificates/', multi: true, icon: () => [ICON.gmp('a'), ICON.iso('b', '22000'), ICON.iso('c', '9001')] },
  { k: 'The proof', t: 'Third-party lab tested', n: 'Lab', p: 'Each product is tested by an independent laboratory for heavy metals. The results are published on our lab results page.', m: 'Read the lab results', href: '/lab-results/', icon: () => ICON.lab(2) },
  { k: 'The home', t: 'Designed in Denmark', n: 'DK', p: 'Himalayan Drop is a Danish brand. Designed in Denmark, sourced in the Himalayas, with the same care at every step.', m: 'Meet the brand', href: '/our-story/', icon: () => ICON.dk(3) },
  { k: 'The source', t: 'Hand-harvested at 5,000 m', n: '5,000 m', p: 'Our shilajit comes from above 5,000 metres near Skardu, Pakistan, where it is collected by hand and brought down the mountain.', m: 'Explore our shilajit', href: '/our-shilajit/', icon: () => ICON.mt(4) },
];

// seeded wave so the strata edges are identical on every load (no hydration mismatch)
let seed = 11;
const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
const WAVES = L.map(() => Array.from({ length: 17 }, (_, i) => [(i / 16) * 100, 2 + rnd() * 9]));

export default function WhyMedals() {
  const [open, setOpen] = useState(-1);
  return (
    <section className="why-medals">
      <div className="wrap">
        <div className="head">
          <div><span className="eyebrow">Why Himalayan Drop</span><h2>Trust, <em>layer by layer.</em></h2></div>
          <p className="sub">Five layers stand behind every jar. Tap one to read more, from the promise on the surface down to the mountain at the core.</p>
        </div>
        <div className="stack">
          {L.map((c, i) => {
            const w = WAVES[i];
            const clip = i ? `polygon(${w.map((p) => `${p[0]}% ${p[1]}px`).join(',')},100% 100%,0 100%)` : 'none';
            const isOpen = open === i;
            return (
              <div key={c.k} className={`slab${isOpen ? ' open' : ''}`} style={{ '--z': i + 1 }}>
                <div className={`rock l${i + 1} ${i >= 2 ? 'dk' : 'light'}`} style={{ '--clip': clip, '--pt': `${i ? 12 : 6}px` }}>
                  {i > 0 && (
                    <svg className="edge" viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true"><polyline points={w.map((p) => `${p[0]},${p[1]}`).join(' ')} /></svg>
                  )}
                  <button type="button" className="row" id={`wm-h${i}`} aria-expanded={isOpen} aria-controls={`wm-p${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                    <span className="num">{c.n}</span>
                    <span className="lab"><small>{c.k}</small><b>{c.t}</b></span>
                    {c.multi ? <span className="mds">{c.icon()}</span> : c.icon()}
                    <span className="plus" aria-hidden="true" />
                  </button>
                  <div className="body" id={`wm-p${i}`} role="region" aria-labelledby={`wm-h${i}`}>
                    <div className="inner">
                      <div className="txt">
                        <p>{c.p}</p>
                        <LLink className="more" href={c.href}>{c.m}&nbsp;<svg width="12" height="14" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M15.9 1 5.9 13.9h5.3L8.1 23l10-12.6h-5.3Z" /></svg></LLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
