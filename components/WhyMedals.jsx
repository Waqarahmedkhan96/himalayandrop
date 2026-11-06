'use client';
// Home "Why Himalayan Drop", compact layout with heritage medallions. Styles: .why-medals in app/globals.css.
import { Fragment, useState } from 'react';
import LLink from './LLink';

const GOLD = '#f6e3ae';
const SERIF = 'var(--display), serif';
const SANS = 'var(--sans), sans-serif';

const star = (x, y, r) => {
  let p = '';
  for (let k = 0; k < 10; k++) {
    const a = -Math.PI / 2 + (k * Math.PI) / 5;
    const rr = k % 2 ? r * 0.42 : r;
    p += `${k ? 'L' : 'M'}${(x + rr * Math.cos(a)).toFixed(2)} ${(y + rr * Math.sin(a)).toFixed(2)}`;
  }
  return `${p}Z`;
};
const BURST = (() => {
  let p = '';
  const n = 56;
  for (let k = 0; k < n * 2; k++) {
    const a = (k * Math.PI) / n;
    const r = k % 2 ? 55.6 : 58.6;
    p += `${k ? 'L' : 'M'}${(60 + r * Math.cos(a)).toFixed(2)} ${(60 + r * Math.sin(a)).toFixed(2)}`;
  }
  return `${p}Z`;
})();

// Engraved seal: scalloped gold edge, lettering round the rim, clean burgundy centre.
function Seal({ id, top, bottom, children }) {
  return (
    <svg className="md" viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <linearGradient id={`sg${id}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fdf0c9" /><stop offset=".45" stopColor="#d9b46a" /><stop offset="1" stopColor="#8a6429" /></linearGradient>
        <linearGradient id={`sb${id}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f3dca0" /><stop offset="1" stopColor="#b98c43" /></linearGradient>
        <radialGradient id={`sd${id}`} cx=".38" cy=".3" r=".95"><stop offset="0" stopColor="#7d1b2d" /><stop offset="1" stopColor="#31060e" /></radialGradient>
        <path id={`ta${id}`} d="M19.5 60A40.5 40.5 0 0 1 100.5 60" />
        <path id={`tb${id}`} d="M12.5 60A47.5 47.5 0 0 0 107.5 60" />
      </defs>
      <path d={BURST} fill={`url(#sg${id})`} />
      <path d={BURST} fill="none" stroke="#6b4a1c" strokeWidth=".7" opacity=".55" />
      <circle cx="60" cy="60" r="50" fill={`url(#sb${id})`} stroke="#7a5420" strokeWidth=".8" />
      <circle cx="60" cy="60" r="36.5" fill="none" stroke="#7a5420" strokeWidth=".8" />
      <circle cx="60" cy="60" r="49" fill="none" stroke="#fff" strokeOpacity=".45" strokeWidth=".6" />
      <g style={{ fontFamily: SERIF, fontWeight: 700, fontSize: 6.1, letterSpacing: '.17em', fill: '#3a0813' }}>
        <text textAnchor="middle"><textPath href={`#ta${id}`} startOffset="50%">{top}</textPath></text>
        <text textAnchor="middle"><textPath href={`#tb${id}`} startOffset="50%">{bottom}</textPath></text>
      </g>
      <path d={star(11.5, 60, 3.4)} fill="#3a0813" />
      <path d={star(108.5, 60, 3.4)} fill="#3a0813" />
      <circle cx="60" cy="60" r="35" fill={`url(#sd${id})`} />
      <circle cx="60" cy="60" r="34" fill="none" stroke="#e9cf8d" strokeWidth=".8" opacity=".85" />
      <g fill="none" stroke={GOLD} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{children}</g>
    </svg>
  );
}
const T = ({ y, size, weight = 600, serif = true, ls = 0, children }) => (
  <text x="60" y={y} textAnchor="middle" fill={GOLD} stroke="none" style={{ fontFamily: serif ? SERIF : SANS, fontSize: size, fontWeight: serif ? weight : 700, letterSpacing: `${ls}em` }}>{children}</text>
);

const ICON = {
  days: () => (
    <Seal id="days" top="MONEY-BACK GUARANTEE" bottom="60 DAYS · REFUND">
      <path d="M32 76Q22 58 33 40M35 78Q26 58 37 38M38 79Q31 61 40 41" strokeWidth="1" /><path d="M88 76Q98 58 87 40M85 78Q94 58 83 38M82 79Q89 61 80 41" strokeWidth="1" />
      <T y="66" size={26}>60</T><T y="77" size={5.6} serif={false} ls={0.28}>DAYS</T>
    </Seal>
  ),
  gmp: () => (
    <Seal id="gmp" top="GOOD MANUFACTURING" bottom="PRACTICE · CERTIFIED">
      <T y="66" size={22} weight={700}>GMP</T><path d="M40 71h40" strokeWidth=".8" /><path d={star(60, 48, 3)} fill={GOLD} stroke="none" />
    </Seal>
  ),
  iso: (id, n, top) => (
    <Seal id={id} top={top} bottom="MANAGEMENT SYSTEM">
      <T y="52" size={7.5} serif={false} ls={0.3}>ISO</T><path d="M41 57h38" strokeWidth=".8" /><T y="75" size={n.length > 4 ? 19 : 23} weight={700}>{n}</T>
    </Seal>
  ),
  lab: () => (
    <Seal id="lab" top="INDEPENDENT LAB" bottom="TESTED · VERIFIED">
      <path d="M54 36h12M56 36v16L44 73a3.6 3.6 0 0 0 3.2 5.4h25.6A3.6 3.6 0 0 0 76 73L64 52V36" /><path d="M47.5 66h25" strokeWidth="1.2" />
      <path d="M50 70l3-1M54 72l3-1M58 70l3-1M62 72l3-1M66 70l3-1" strokeWidth=".8" /><path d="M52 55l5 4 9-9" strokeWidth="2.2" />
    </Seal>
  ),
  dk: () => (
    <Seal id="dk" top="FORMULATED IN DENMARK" bottom="A DANISH BRAND">
      <clipPath id="fcdk"><rect x="36" y="46" width="48" height="32" rx="1.5" /></clipPath>
      <g clipPath="url(#fcdk)" stroke="none"><rect x="36" y="46" width="48" height="32" fill="#c8102e" /><rect x="50" y="46" width="8.5" height="32" fill="#fff" /><rect x="36" y="58" width="48" height="8.5" fill="#fff" /></g>
      <rect x="36" y="46" width="48" height="32" rx="1.5" strokeWidth="1.2" /><path d={star(60, 39, 3.2)} fill={GOLD} stroke="none" />
    </Seal>
  ),
  mt: () => (
    <Seal id="mt" top="HAND-HARVESTED" bottom="5,000 M · SKARDU">
      <path d="M32 78 51 48l9 12 11-22 17 40Z" /><path d="M43 62l8-11M40 68l11-15M46 71l14-18M54 74l12-16M62 76l12-18M70 77l9-14" strokeWidth=".8" /><path d="M56 50l5-9 6 11" strokeWidth="1.6" />
      <circle cx="82" cy="40" r="4" /><path d="M82 32v-2M82 50v2M90 40h2M72 40h-2M88 34l1.5-1.5M76 34l-1.5-1.5" strokeWidth=".9" /><path d="M30 78h60" strokeWidth="1.2" />
    </Seal>
  ),
};

const L = [
  { k: 'The promise', t: '60-day guarantee', n: '60', p: 'Use it for 60 days. If it is not for you, send it back and we refund you.', m: 'How the guarantee works', href: '/policies/refund-policy/', icon: () => ICON.days() },
  { k: 'The standard', t: 'Quality standards', n: 'GMP', p: 'Produced under GMP and ISO food-safety standards (ISO 22000 and ISO 9001). The certificates are on our certificates page for anyone to read.', m: 'See the certificates', href: '/certificates/', multi: true, icon: () => [ICON.gmp(), ICON.iso('i22', '22000', 'FOOD SAFETY'), ICON.iso('i90', '9001', 'QUALITY')] },
  { k: 'The proof', t: 'Third-party lab tested', n: 'Lab', p: 'Each product is tested by an independent laboratory for heavy metals. The results are published on our lab results page.', m: 'Read the lab results', href: '/lab-results/', icon: () => ICON.lab() },
  { k: 'The home', t: 'Formulated in Denmark', n: 'DK', p: 'Himalayan Drop is a Danish brand. Every product is formulated in Denmark, from shilajit sourced in the Himalayas.', m: 'Meet the brand', href: '/our-story/', icon: () => ICON.dk() },
  { k: 'The source', t: 'Hand-harvested at 5,000 m', n: '5,000 m', p: 'Our shilajit comes from above 5,000 metres near Skardu, Pakistan, where it is collected by hand and brought down the mountain.', m: 'Explore our shilajit', href: '/our-shilajit/', icon: () => ICON.mt() },
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
                    {c.multi ? <span className="mds">{c.icon().map((el, j) => <Fragment key={j}>{el}</Fragment>)}</span> : c.icon()}
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
