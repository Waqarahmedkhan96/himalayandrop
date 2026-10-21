'use client';
// Product page sections, shown under the buy box on every product:
// proof strip, lab spotlight, label, ingredients, reviews, myths,
// guarantee, FAQ and a sticky buy bar. Text: lib/pdp.js. Lab data: lib/labdata.js.
import { useEffect, useRef, useState } from 'react';
import Link from './LLink';
import Accordion from './Accordion';
import ReviewCard from './ReviewCard';
import { Stars } from './Icons';
import { Arrow } from './Arrow';
import { useLang } from './LangProvider';
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { pdpText, mediaDir, faqItems } from '@/lib/pdp';
import { LAB, FORMULA_KEYS, nrvPct } from '@/lib/labdata';
import { LANGS } from '@/lib/i18n';
import { formatMoney } from '@/lib/shopify';

const nf = (lang, n, d = 1) =>
  new Intl.NumberFormat(`${LANGS[lang]?.locale || 'en-GB'}-u-nu-latn`, { minimumFractionDigits: d, maximumFractionDigits: d }).format(n);
const pct = (lang, n, d = 1) => {
  const s = nf(lang, n, d);
  return lang === 'en' || lang === 'ar' || lang === 'ur' ? `${s}%` : `${s} %`;
};

// Gold line icons, drawn on scroll (pathLength=1 lets CSS/GSAP draw them).
const P = { pathLength: 1, fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' };
const PROOF_ICONS = [
  <g key="m"><path {...P} d="M4 38 L18 16 L25 26 L31 18 L44 38 Z" /><path {...P} d="M15 21 L18 16 L21 21 M28 22 L31 18 L34 23" /><path {...P} d="M31 18 V8 L37 10 L31 12" /></g>,
  <g key="f"><path {...P} d="M19 6 H29 M21 6 V18 L10 38 Q9 42 13 42 H35 Q39 42 38 38 L27 18 V6" /><path {...P} d="M14 32 Q20 28 24 32 T34 32" /><circle {...P} cx="22" cy="37" r="1.5" /><circle {...P} cx="28" cy="35" r="1" /></g>,
  <g key="c"><path {...P} d="M24 4 L34 14 L30 40 H18 L14 14 Z" /><path {...P} d="M14 14 H34 M24 4 L21 14 L24 40 M24 4 L27 14" /><path {...P} d="M8 30 L12 24 L16 30 L12 38 Z" /><path {...P} d="M38 8 V12 M36 10 H40" /></g>,
  <g key="d"><path {...P} d="M12 4 H30 L38 12 V44 H12 Z" /><path {...P} d="M30 4 V12 H38" /><path {...P} d="M18 20 H32 M18 26 H32 M18 32 H25" /><path {...P} d="M26 37 L29 40 L35 33" /></g>,
  <g key="k"><path {...P} d="M24 6 C14 6 8 13 8 22 C8 33 24 43 24 43 C24 43 40 33 40 22 C40 13 34 6 24 6 Z" /><path {...P} d="M18 14 V30 M18 22 H32 M24 14 V30" /></g>,
  <g key="s"><path {...P} d="M24 4 L40 10 V22 C40 33 33 40 24 44 C15 40 8 33 8 22 V10 Z" /><path {...P} d="M16 24 L22 30 L33 18" /></g>,
];

// Line art for the "inside" cards.
const ART = {
  fulvic: <g><path {...P} d="M10 40 Q30 28 50 40 T90 40 T130 40" /><path {...P} d="M10 56 Q30 44 50 56 T90 56 T130 56" /><path {...P} d="M10 72 Q30 60 50 72 T90 72 T130 72" /><circle {...P} cx="40" cy="26" r="3" /><circle {...P} cx="96" cy="22" r="2" /></g>,
  minerals: <g><path {...P} d="M70 10 L92 32 L84 84 H56 L48 32 Z" /><path {...P} d="M48 32 H92 M70 10 L63 32 L70 84 M70 10 L77 32" /><path {...P} d="M22 62 L32 48 L42 62 L32 82 Z" /><path {...P} d="M100 70 L110 56 L122 68 L112 84 Z" /></g>,
  humic: <g><path {...P} d="M10 30 Q40 22 70 30 T130 28" /><path {...P} d="M10 46 Q45 54 75 44 T130 48" /><path {...P} d="M10 62 Q35 56 65 64 T130 60" /><path {...P} d="M10 78 Q45 72 80 80 T130 76" /><circle {...P} cx="30" cy="38" r="2" /><circle {...P} cx="96" cy="70" r="2.5" /></g>,
  dbp: <g><path {...P} d="M40 26 L56 17 L72 26 V44 L56 53 L40 44 Z" /><path {...P} d="M72 26 L88 17 L104 26 V44 L88 53 L72 44" /><path {...P} d="M56 53 V70 L72 79 L88 70 V53" /><path {...P} d="M47 30 V40 M97 30 V40" /><circle {...P} cx="72" cy="88" r="3" /></g>,
  amino: <g><path {...P} d="M14 60 L36 40 L58 58 L80 36 L102 56 L124 34" /><circle {...P} cx="14" cy="60" r="5" /><circle {...P} cx="36" cy="40" r="5" /><circle {...P} cx="58" cy="58" r="5" /><circle {...P} cx="80" cy="36" r="5" /><circle {...P} cx="102" cy="56" r="5" /><circle {...P} cx="124" cy="34" r="5" /><path {...P} d="M36 40 V22 M80 36 V18 M58 58 V76 M102 56 V74" /></g>,
  origin: <g><path {...P} d="M6 84 L46 30 L62 50 L82 20 L134 84 Z" /><path {...P} d="M76 28 L82 20 L88 30 M42 36 L46 30 L50 37" /><path {...P} d="M82 20 V6 L94 10 L82 14" /><path {...P} d="M20 84 Q40 70 60 78 T110 72" /></g>,
  shilajit: <g><path {...P} d="M70 10 C70 10 44 42 44 58 A26 26 0 0 0 96 58 C96 42 70 10 70 10 Z" /><path {...P} d="M58 60 A12 12 0 0 0 70 72" /><path {...P} d="M14 84 L40 58 L52 70 L66 54 L90 84" /></g>,
  citrulline: <g><path {...P} d="M20 30 A50 50 0 0 0 120 30 Z" /><path {...P} d="M30 30 A40 40 0 0 0 110 30" /><path {...P} d="M52 44 L54 48 M70 52 L70 56 M88 44 L86 48 M62 38 L63 41 M78 38 L77 41" /></g>,
  ginseng: <g><path {...P} d="M70 12 C64 30 62 40 64 52 C56 62 50 74 40 86 M64 52 C70 62 76 72 74 86 M66 64 C78 64 90 70 100 84 M66 30 C58 26 50 26 44 20 M68 22 C76 16 84 14 92 16" /><circle {...P} cx="70" cy="10" r="3" /></g>,
  zinc: <g><rect {...P} x="38" y="12" width="64" height="72" rx="6" /><text x="46" y="30" className="art-num">30</text><text x="70" y="64" className="art-sym" textAnchor="middle">Zn</text><text x="70" y="78" className="art-num" textAnchor="middle">65.38</text></g>,
  selenium: <g><rect {...P} x="38" y="12" width="64" height="72" rx="6" /><text x="46" y="30" className="art-num">34</text><text x="70" y="64" className="art-sym" textAnchor="middle">Se</text><text x="70" y="78" className="art-num" textAnchor="middle">78.97</text></g>,
  seamoss: <g><path {...P} d="M70 86 C66 66 74 54 66 40 C60 30 64 18 72 10 M70 60 C82 56 90 48 92 36 M68 48 C56 46 48 38 46 28 M72 72 C86 72 96 66 104 56 M68 74 C54 74 42 68 34 58" /><path {...P} d="M10 86 Q40 80 70 86 T130 86" /></g>,
  blackseed: <g><path {...P} d="M40 50 C40 38 52 32 58 40 C62 48 54 60 44 58 Z" /><path {...P} d="M70 34 C74 22 88 22 90 32 C92 42 80 48 72 44 Z" /><path {...P} d="M80 64 C82 52 96 52 98 62 C100 72 88 76 82 72 Z" /><path {...P} d="M54 74 C54 64 66 62 68 70 C70 78 60 84 56 80 Z" /><path {...P} d="M20 30 C40 20 60 16 80 12" /></g>,
};

function useDraw(scope, sel = '.draw path, .draw circle, .draw rect') {
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.utils.toArray(sel, scope.current).forEach((el) => {
        gsap.fromTo(el, { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut', scrollTrigger: { trigger: el.closest('svg'), start: 'top 90%', once: true } });
      });
    },
    { scope }
  );
}

// ───────── 1. Proof strip ─────────
export function ProofStrip() {
  const lang = useLang();
  const t = pdpText(lang);
  const root = useRef(null);
  useDraw(root);
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from('.proof-item', { y: 24, opacity: 0, stagger: 0.08, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: root.current, start: 'top 88%', once: true } });
    },
    { scope: root }
  );
  return (
    <section className="proof-strip" ref={root} aria-label={t.proof.join(', ')}>
      <ul className="container proof-row">
        {t.proof.map((x, i) => (
          <li className="proof-item" key={x}>
            <svg className="draw" viewBox="0 0 48 48" width="44" height="44" aria-hidden="true">{PROOF_ICONS[i]}</svg>
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ───────── 2. Lab spotlight: fulvic acid + heavy metals ─────────
export function LabSpotlight({ product }) {
  const lang = useLang();
  const t = pdpText(lang).lab;
  const root = useRef(null);
  const num = useRef(null);
  const R = 92;
  const C = 2 * Math.PI * R;
  const date = new Intl.DateTimeFormat(`${LANGS[lang]?.locale || 'en-GB'}-u-nu-latn`, { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(LAB.date));

  useGSAP(
    () => {
      const st = { trigger: root.current, start: 'top 70%', once: true };
      if (prefersReducedMotion()) return;
      const o = { v: 0 };
      const tl = gsap.timeline({ scrollTrigger: st });
      tl.from('.lab-card', { clipPath: 'inset(6% 4% 6% 4% round 40px)', duration: 1.3, ease: 'expo.out' })
        .from('.lab-copy > *', { y: 26, opacity: 0, stagger: 0.07, duration: 1, ease: 'expo.out' }, 0.15)
        .fromTo('.lab-ring-val', { strokeDashoffset: C }, { strokeDashoffset: C * (1 - LAB.fulvic / 100), duration: 2.2, ease: 'power3.out' }, 0.3)
        .to(o, { v: LAB.fulvic, duration: 2.2, ease: 'power3.out', onUpdate: () => { if (num.current) num.current.textContent = nf(lang, o.v); } }, 0.3)
        .from('.lab-product', { y: 60, opacity: 0, rotate: -6, duration: 1.4, ease: 'expo.out' }, 0.4)
        .from('.lab-spec tr', { x: -20, opacity: 0, stagger: 0.07, duration: 0.8, ease: 'expo.out' }, 0.6);
      gsap.from('.metal-fill', { scaleX: 0, duration: 1.6, stagger: 0.15, ease: 'expo.out', scrollTrigger: { trigger: '.lab-metals', start: 'top 85%', once: true } });
      gsap.to('.lab-orbit', { rotation: 360, svgOrigin: '120 120', duration: 30, repeat: -1, ease: 'none' });
      gsap.to('.lab-product', { yPercent: -8, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true } });
    },
    { scope: root }
  );

  return (
    <section className="section lab-section" ref={root} id="lab">
      <div className="container">
        <div className="lab-card">
          <div className="lab-copy">
            <p className="eyebrow lab-eyebrow"><i aria-hidden="true" /> {t.eyebrow}</p>
            <h2>{t.h} <em className="gold-text">{t.hg}</em></h2>
            <p className="lab-lead">{t.p}</p>
            <table className="lab-spec">
              <tbody>
                <tr><th scope="row">{t.result}</th><td><strong><bdi dir="ltr">{pct(lang, LAB.fulvic)} ± {nf(lang, LAB.fulvicMargin)}</bdi></strong> {t.fulvicLabel}</td></tr>
                <tr><th scope="row">{t.method}</th><td>{LAB.method}</td></tr>
                <tr><th scope="row">{t.lab}</th><td>{t.labName}</td></tr>
                <tr><th scope="row">{t.report}</th><td><bdi>{LAB.report}</bdi> · {date}</td></tr>
              </tbody>
            </table>
            <div className="lab-actions">
              <Link href="/lab-results/" className="btn gold">{t.cta} <Arrow /></Link>
              <span className="lab-certs">{t.certs} {LAB.certs.map((c) => <b key={c}>{c}</b>)}</span>
            </div>
          </div>
          <div className="lab-stage" aria-hidden="true">
            <svg className="lab-ring" viewBox="0 0 240 240">
              <defs>
                <linearGradient id="lab-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#eed9a6" /><stop offset=".5" stopColor="#cca25e" /><stop offset="1" stopColor="#b88f4d" /></linearGradient>
              </defs>
              <g className="lab-orbit">
                <circle cx="120" cy="120" r="112" fill="none" stroke="rgba(226,196,135,.35)" strokeDasharray="1 7" />
                <circle cx="120" cy="8" r="3" fill="#e2c487" />
              </g>
              <circle cx="120" cy="120" r={R} fill="none" stroke="rgba(247,241,232,.1)" strokeWidth="14" />
              <circle className="lab-ring-val" cx="120" cy="120" r={R} fill="none" stroke="url(#lab-g)" strokeWidth="14" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C * (1 - LAB.fulvic / 100)} transform="rotate(-90 120 120)" />
            </svg>
            <div className="lab-num">
              <strong><span ref={num}>{nf(lang, LAB.fulvic)}</span><small>%</small></strong>
              <span>{t.fulvicLabel}</span>
            </div>
            <img className="lab-product" src={product.image} alt="" loading="lazy" />
            <div className="lab-ticket">
              <span>{t.example}</span>
              <b><bdi>{LAB.report}</bdi></b>
            </div>
          </div>
        </div>

        <div className="lab-metals">
          <div className="lab-metals-head">
            <h3>{t.metalsH}</h3>
            <p>{t.metalsP}</p>
          </div>
          <ul>
            {LAB.metals.map((m) => {
              const share = Math.max(2, Math.round((m.value / m.limit) * 100));
              return (
                <li key={m.key}>
                  <div className="metal-top">
                    <span className="metal-sym">{m.sym}</span>
                    <strong>{t.metals[m.key]}</strong>
                    <span className="metal-val"><bdi>{nf(lang, m.value, m.value < 0.1 ? 3 : 2)} mg/kg</bdi></span>
                  </div>
                  <div className="metal-bar" role="img" aria-label={t.ofLimit(share)}>
                    <span className="metal-fill" style={{ width: `${share}%` }} />
                  </div>
                  <div className="metal-foot">
                    <span>{t.ofLimit(share)}</span>
                    <span>{t.limit}: <bdi>{nf(lang, m.limit, m.limit < 1 ? 2 : 1)} mg/kg</bdi></span>
                  </div>
                </li>
              );
            })}
          </ul>
          {product.formula?.note && <p className="lab-note">*{product.formula.note}</p>}
        </div>
      </div>
    </section>
  );
}

// ───────── 3. Label: supplement facts / typical analysis ─────────
export function LabelPanel({ product, kind }) {
  const lang = useLang();
  const t = pdpText(lang).facts;
  const root = useRef(null);
  const f = product.formula;
  const keys = FORMULA_KEYS[kind];
  const isFormula = kind !== 'resin' && f && keys;

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const st = { trigger: root.current, start: 'top 72%', once: true };
      gsap.timeline({ scrollTrigger: st })
        .from('.facts-copy > *', { y: 26, opacity: 0, stagger: 0.07, duration: 1, ease: 'expo.out' })
        .from('.facts-label', { y: 60, rotate: 2, opacity: 0, duration: 1.3, ease: 'expo.out' }, 0.1)
        .from('.facts-label tbody tr', { opacity: 0, x: 16, stagger: 0.06, duration: 0.7, ease: 'expo.out' }, 0.5)
        .from('.nrv-fill', { scaleX: 0, stagger: 0.1, duration: 1.2, ease: 'expo.out' }, 0.8);
    },
    { scope: root }
  );

  return (
    <section className="section facts-section" ref={root} id="facts">
      <div className="container facts-grid">
        <div className="facts-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>{t.h} <em>{t.hg}</em></h2>
          <p className="facts-lead">{t.p}</p>
          {kind === 'resin' && (
            <ul className="free-list">
              {t.free.map((x) => <li key={x}><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>{x}</li>)}
            </ul>
          )}
          {kind === 'capsules' && (
            <div className="claims">
              <h3>{t.claimsH}</h3>
              <ul>{t.claims.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
          )}
        </div>
        <div className="facts-label">
          <div className="fl-head">
            <span className="fl-brand">Himalayan Drop<sup>®</sup></span>
            <h3>{isFormula ? f.title : t.resinH}</h3>
            <p>{isFormula ? f.serving : product.subtitle}</p>
          </div>
          <table>
            <thead>
              <tr>
                <th scope="col">{isFormula ? t.perServing : t.resinServing}</th>
                <th scope="col">{t.amount}</th>
                {isFormula && <th scope="col">{t.nrv}</th>}
              </tr>
            </thead>
            <tbody>
              {isFormula
                ? f.rows.map(([n, a], i) => {
                    const p = nrvPct(keys[i], a);
                    return (
                      <tr key={n}>
                        <th scope="row">{n}</th>
                        <td><bdi>{a}</bdi></td>
                        <td>
                          {p != null ? (
                            <span className="nrv"><span className="nrv-bar"><span className="nrv-fill" style={{ width: `${Math.min(100, p)}%` }} /></span><bdi>{p}%</bdi></span>
                          ) : '†'}
                        </td>
                      </tr>
                    );
                  })
                : t.resinRows.map(([n, a]) => (
                    <tr key={n}><th scope="row">{n}</th><td><bdi>{a}</bdi></td></tr>
                  ))}
            </tbody>
          </table>
          <p className="fl-note">{isFormula ? t.nrvNote : `*${f?.note || ''}`}</p>
          {isFormula && f.note && <p className="fl-note">{f.note}</p>}
        </div>
      </div>
    </section>
  );
}

// ───────── 4. Inside: compounds (resin) or ingredients (formulas) ─────────
export function InsideGrid({ product, kind }) {
  const lang = useLang();
  const t = pdpText(lang).inside;
  const root = useRef(null);
  useDraw(root);
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from('.in-head > *', { y: 26, opacity: 0, stagger: 0.08, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: root.current, start: 'top 75%', once: true } });
      gsap.from('.in-card', { y: 70, opacity: 0, stagger: 0.09, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.in-grid', start: 'top 82%', once: true } });
    },
    { scope: root }
  );

  const keys = FORMULA_KEYS[kind];
  const cards = kind === 'resin' || !keys || !product.formula
    ? t.resin.map((c) => ({ ...c, art: c.k }))
    : product.formula.rows.map(([, amount], i) => ({ k: keys[i], art: keys[i], v: amount, ...t.formula[keys[i]] }));

  return (
    <section className="in-section" ref={root}>
      <div className="container">
        <div className="in-head">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>{t.h} <em className="gold-text">{t.hg[kind] || t.hg.resin}</em></h2>
          <p>{kind === 'resin' ? t.p.resin : t.p.formula}</p>
        </div>
        <ul className={`in-grid n${cards.length}`}>
          {cards.map((c, i) => (
            <li className="in-card" key={c.k}>
              <span className="in-idx">{String(i + 1).padStart(2, '0')}</span>
              <svg className="draw in-art" viewBox="0 0 140 96" aria-hidden="true">{ART[c.art]}</svg>
              {c.v && <strong className="in-val"><bdi>{c.v}</bdi></strong>}
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ───────── 5. Reviews: rating summary, video reviews, text reviews ─────────
// SAMPLE content. Replace with real reviews (e.g. Judge.me) before launch.
const DIST = [86, 10, 3, 1, 0]; // PLACEHOLDER distribution for the layout
const DUR = ['0:42', '1:05', '0:38', '0:51', '0:47', '0:56'];
const SAMPLE = { en: 'Sample', da: 'Eksempel', de: 'Beispiel', fr: 'Exemple', es: 'Ejemplo', ar: 'مثال', ur: 'نمونہ' };

// Video reviews: an overlapping, tilted stack of 9:16 cards. Hovering (or
// tapping on touch screens) a card brings it forward and plays its clip.
// SAMPLE clips made from product photos: replace with real customer videos.
function VideoCard({ src, poster, cap, dur, sample, play, i }) {
  const vid = useRef(null);
  const [on, setOn] = useState(false);
  const start = () => {
    setOn(true);
    const v = vid.current;
    if (!v || prefersReducedMotion()) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  };
  const stop = () => { setOn(false); vid.current?.pause(); };
  return (
    <li
      className={`vs-card ${on ? 'is-playing' : ''}`}
      style={{ '--i': i }}
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
    >
      <button type="button" className="vs-hit" aria-label={`${play}: ${cap}`} aria-pressed={on} onClick={() => (on ? stop() : start())} />
      <img src={poster} alt="" loading="lazy" width="540" height="960" />
      <video ref={vid} poster={poster} muted loop playsInline preload="none" aria-hidden="true">
        <source src={src.replace(/\.mp4$/, '.webm')} type="video/webm" />
        <source src={src} type="video/mp4" />
      </video>
      <span className="rv-play" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>
      </span>
      <span className="rv-dur">{dur}</span>
      <span className="rv-cap">
        <span className="sample-tag">{sample}</span>
        <strong>{cap}</strong>
        <Stars rating={5} />
      </span>
      <span className="vs-progress" aria-hidden="true"><i /></span>
    </li>
  );
}

function VideoStack({ dir, caps, title, sample, play }) {
  return (
    <ul className="vs-stack" data-lenis-prevent="">
      {caps.map((cap, i) => (
        <VideoCard key={cap} i={i} cap={cap} dur={DUR[i]} sample={sample} play={play} src={`${dir}/video-${i + 1}.mp4`} poster={`${dir}/video-${i + 1}.webp`} />
      ))}
    </ul>
  );
}

export function ProductReviews({ product, kind }) {
  const lang = useLang();
  const t = pdpText(lang).reviews;
  const root = useRef(null);
  const dir = mediaDir(product.handle, kind);
  const reviews = (t.text[kind] || t.text.resin).map((text, i) => ({ name: t.name, place: t.places[i], product: product.title, rating: i === 2 ? 4 : 5, text, sample: true }));

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const st = { trigger: root.current, start: 'top 72%', once: true };
      gsap.timeline({ scrollTrigger: st })
        .from('.rv-summary > *', { y: 24, opacity: 0, stagger: 0.07, duration: 1, ease: 'expo.out' })
        .from('.rv-dist-fill', { scaleX: 0, stagger: 0.08, duration: 1.2, ease: 'expo.out' }, 0.3);
      gsap.from('.vs-card', { y: 120, opacity: 0, stagger: 0.08, duration: 1.4, ease: 'expo.out', clearProps: 'transform,opacity', scrollTrigger: { trigger: '.vs-stack', start: 'top 85%', once: true } });
      gsap.from('.rv-texts .review', { y: 40, opacity: 0, stagger: 0.1, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: '.rv-texts', start: 'top 88%', once: true } });
    },
    { scope: root }
  );

  return (
    <section className="section rv-section" ref={root} id="reviews">
      <div className="container">
        <div className="rv-top">
          <div className="rv-intro">
            <p className="eyebrow">{t.eyebrow}</p>
            <h2>{t.h} <em>{t.hg}</em></h2>
            <p>{t.p}</p>
          </div>
          <div className="rv-summary">
            <div className="rv-score">
              <strong>{nf(lang, 4.9)}</strong>
              <div><Stars rating={5} /><span className="sample-tag">{t.basis}</span></div>
            </div>
            <ul className="rv-dist" aria-hidden="true">
              {DIST.map((d, i) => (
                <li key={i}><span>{5 - i}★</span><span className="rv-dist-bar"><span className="rv-dist-fill" style={{ width: `${d}%` }} /></span><span>{d}%</span></li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="rv-sub">{t.videosH}</h3>
        <VideoStack dir={dir} caps={t.caps} title={product.title} sample={SAMPLE[lang] || SAMPLE.en} play={t.play} />

        <div className="rv-texts">
          {reviews.map((r, i) => <ReviewCard key={i} r={r} />)}
        </div>
      </div>
    </section>
  );
}

// ───────── 6. Myth vs fact flip cards ─────────
function FlipCard({ m, f, i, t }) {
  const [open, setOpen] = useState(false);
  return (
    <li className={`myth ${open ? 'is-flipped' : ''}`}>
      <button type="button" className="myth-inner" onClick={() => setOpen((o) => !o)} aria-pressed={open} aria-label={open ? `${t.fact}: ${f}. ${t.back}` : `${t.myth}: ${m}. ${t.tap}`}>
        <span className="myth-face myth-front" aria-hidden={open}>
          <span className="myth-no">{String(i + 1).padStart(2, '0')}</span>
          <span className="myth-tag"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>{t.myth}</span>
          <span className="myth-text">“{m}”</span>
          <span className="myth-hint">{t.tap} <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3M18 3v4h-4M6 21v-4h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
        </span>
        <span className="myth-face myth-back" aria-hidden={!open}>
          <span className="myth-tag"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>{t.fact}</span>
          <span className="myth-text">{f}</span>
        </span>
      </button>
    </li>
  );
}

export function MythFacts({ kind }) {
  const lang = useLang();
  const t = pdpText(lang).myths;
  const root = useRef(null);
  const items = [t.shared[0], t[kind] || t.resin, t.shared[1], t.shared[2]];
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from('.myth-head > *', { y: 26, opacity: 0, stagger: 0.08, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: root.current, start: 'top 75%', once: true } });
      gsap.from('.myth', { y: 60, rotateX: -25, opacity: 0, transformPerspective: 900, stagger: 0.1, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.myth-grid', start: 'top 85%', once: true } });
    },
    { scope: root }
  );
  return (
    <section className="section myth-section" ref={root}>
      <div className="container">
        <div className="myth-head">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>{t.h} <em>{t.hg}</em></h2>
          <p>{t.p}</p>
        </div>
        <ul className="myth-grid">
          {items.map(([m, f], i) => <FlipCard key={m} m={m} f={f} i={i} t={t} />)}
        </ul>
      </div>
    </section>
  );
}

// ───────── 7. Guarantee banner ─────────
export function Guarantee({ product, kind }) {
  const lang = useLang();
  const t = pdpText(lang).guarantee;
  const root = useRef(null);
  const toBuy = (e) => {
    const box = document.querySelector('.pdp-info');
    if (!box) return;
    e.preventDefault();
    window.__lenis ? window.__lenis.scrollTo(box, { offset: -90 }) : box.scrollIntoView({ behavior: 'smooth' });
  };
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top 75%', once: true } })
        .from('.gu-card', { clipPath: 'inset(10% 6% 10% 6% round 48px)', duration: 1.4, ease: 'expo.out' })
        .from('.gu-copy > *', { y: 26, opacity: 0, stagger: 0.08, duration: 1, ease: 'expo.out' }, 0.2)
        .from('.gu-seal', { scale: 0.3, rotate: -140, opacity: 0, duration: 1.4, ease: 'expo.out' }, 0.3);
      gsap.to('.gu-seal-ring', { rotation: 360, svgOrigin: '100 100', duration: 36, repeat: -1, ease: 'none' });
      gsap.fromTo('.gu-bg', { yPercent: -6, scale: 1.12 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true } });
    },
    { scope: root }
  );
  const ring = `${t.h} ${t.hg} · ${t.h} ${t.hg} · `;
  return (
    <section className="gu-section" ref={root}>
      <div className="gu-card">
        <img className="gu-bg" src={`${mediaDir(product.handle, kind)}/banner.webp`} alt="" loading="lazy" />
        <div className="gu-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>{t.h} <em className="gold-text">{t.hg}</em></h2>
          <p>{t.p}</p>
          <a href="#top" className="btn gold" onClick={toBuy}>{t.cta} <Arrow /></a>
          <ul className="gu-points">{t.points.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
        <svg className="gu-seal" viewBox="0 0 200 200" aria-hidden="true">
          <defs><path id="gu-circle" d="M100 100 m-76 0 a76 76 0 1 1 152 0 a76 76 0 1 1 -152 0" /></defs>
          <circle cx="100" cy="100" r="96" fill="rgba(42,1,7,.55)" stroke="#cca25e" strokeWidth="1.2" />
          <circle cx="100" cy="100" r="58" fill="none" stroke="#cca25e" strokeWidth="1" strokeDasharray="2 4" />
          <g className="gu-seal-ring"><text className="gu-seal-text"><textPath href="#gu-circle">{ring}</textPath></text></g>
          <text x="100" y="104" textAnchor="middle" className="gu-seal-num">60</text>
          <path d="M84 122 l10 9 l22 -22" fill="none" stroke="#e2c487" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}

// ───────── 8. Product FAQ ─────────
export function ProductFaq({ product, kind }) {
  const lang = useLang();
  const t = pdpText(lang).faq;
  const root = useRef(null);
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from('.pfaq-head > *, .pfaq .faq-item', { y: 26, opacity: 0, stagger: 0.06, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: root.current, start: 'top 78%', once: true } });
    },
    { scope: root }
  );
  return (
    <section className="section pfaq-section" ref={root} id="product-faq">
      <div className="container pfaq-grid">
        <div className="pfaq-head">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>{t.h} <em>{t.hg}</em></h2>
        </div>
        <div className="faq-list pfaq">
          <Accordion items={faqItems(product, kind, lang)} idPrefix="pfaq" />
        </div>
      </div>
    </section>
  );
}

// ───────── 9. Sticky buy bar ─────────
export function StickyBuy({ product }) {
  const lang = useLang();
  const t = pdpText(lang).sticky;
  const [show, setShow] = useState(false);
  useEffect(() => {
    const info = document.querySelector('.pdp-info');
    const foot = document.querySelector('footer');
    if (!info) return;
    let pastBuy = false;
    let atFoot = false;
    const update = () => setShow(pastBuy && !atFoot);
    const io = new IntersectionObserver(([e]) => { pastBuy = !e.isIntersecting && e.boundingClientRect.top < 0; update(); });
    io.observe(info);
    const io2 = foot && new IntersectionObserver(([e]) => { atFoot = e.isIntersecting; update(); });
    if (foot) io2.observe(foot);
    return () => { io.disconnect(); io2?.disconnect(); };
  }, []);
  const go = () => {
    const box = document.querySelector('.pdp-info');
    window.__lenis ? window.__lenis.scrollTo(box, { offset: -90 }) : box?.scrollIntoView({ behavior: 'smooth' });
  };
  const price = product.amount != null ? formatMoney(product.amount, product.currency) : product.price;
  return (
    <div className={`sticky-buy ${show ? 'on' : ''}`} aria-hidden={!show} inert={!show}>
      <img src={product.image} alt="" width="48" height="48" />
      <div className="sb-text">
        <strong>{product.title}</strong>
        <span>{price}</span>
      </div>
      <button type="button" className="btn gold" onClick={go} tabIndex={show ? 0 : -1}>{t.choose} <Arrow /></button>
    </div>
  );
}

// Refresh ScrollTrigger once images below the fold have loaded.
export function RefreshOnLoad() {
  useEffect(() => {
    const r = () => ScrollTrigger.refresh();
    window.addEventListener('load', r);
    return () => window.removeEventListener('load', r);
  }, []);
  return null;
}
