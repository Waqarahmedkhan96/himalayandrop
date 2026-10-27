'use client';
// Proof strip that overlaps the bottom of the home hero: origin, batch lab
// reports and quality standards, joined by one gold thread that draws itself.
// PLACEHOLDER: show only certifications the producer actually holds.
import { useEffect, useRef, useState } from 'react';
import Link from './LLink';
import { useLang } from './LangProvider';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';

const T = {
  en: { place: 'Skardu, Pakistan', alt: 'Sourced above 5,200 m', lab: 'Batch lab reports', labSub: 'Heavy-metal testing', std: 'Quality standards' },
  da: { place: 'Skardu, Pakistan', alt: 'Hentet over 5.200 m', lab: 'Laboratorierapport for hver batch', labSub: 'Test for tungmetaller', std: 'Kvalitetsstandarder' },
  de: { place: 'Skardu, Pakistan', alt: 'Gewonnen über 5.200 m', lab: 'Laborberichte je Charge', labSub: 'Schwermetall-Prüfung', std: 'Qualitätsstandards' },
  fr: { place: 'Skardu, Pakistan', alt: 'Récolté au-dessus de 5 200 m', lab: 'Rapports de labo par lot', labSub: 'Analyse des métaux lourds', std: 'Normes de qualité' },
  es: { place: 'Skardu, Pakistán', alt: 'Recolectado a más de 5.200 m', lab: 'Informes de laboratorio por lote', labSub: 'Análisis de metales pesados', std: 'Estándares de calidad' },
  ar: { place: 'سكاردو، باكستان', alt: 'يُجمع فوق 5200 متر', lab: 'تقارير مخبرية لكل دفعة', labSub: 'فحص المعادن الثقيلة', std: 'معايير الجودة' },
  ur: { place: 'اسکردو، پاکستان', alt: '5,200 میٹر سے اوپر سے حاصل', lab: 'ہر بیچ کی لیب رپورٹ', labSub: 'بھاری دھاتوں کا ٹیسٹ', std: 'معیار کے سرٹیفکیٹ' },
};
const CERTS = ['GMP', 'ISO 22000', 'ISO 9001'];

const Arrow = () => (
  <svg className="pt-arrow" width="28" height="20" viewBox="0 0 28 20" aria-hidden="true">
    <path d="M2 10h22M17 3l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function Peak({ id = 'pt', className = 'pt-peak', viewBox = '0 0 240 176' }) {
  return (
    <svg className={className} viewBox={viewBox} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-mg`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f6e7bf" /><stop offset=".45" stopColor="#cca25e" /><stop offset="1" stopColor="#8e6a33" /></linearGradient>
        <linearGradient id={`${id}-ms`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fffaf0" /><stop offset="1" stopColor="#e9dcc6" /></linearGradient>
        <filter id={`${id}-emb`}><feDropShadow dx="0" dy="2" stdDeviation="1.6" floodColor="#5a3a17" floodOpacity=".28" /></filter>
      </defs>
      <g filter={`url(#${id}-emb)`}>
        <path d="M40 128 L92 78 L110 92 L150 40 L206 128 Z" fill={`url(#${id}-ms)`} />
        <path d="M150 40 L206 128 L168 128 L156 96 L162 76 Z" fill="#d8c6a8" opacity=".55" />
        <path d="M92 78 L110 92 L102 128 L80 128 L96 104 Z" fill="#d8c6a8" opacity=".45" />
        <path d="M40 128 L92 78 L110 92 L150 40 L206 128" fill="none" stroke={`url(#${id}-mg)`} strokeWidth="2" strokeLinejoin="round" />
        <path d="M150 40 L158 70 L150 88 L160 108 M92 78 L98 96 L92 110" fill="none" stroke={`url(#${id}-mg)`} strokeWidth="1.4" strokeLinecap="round" />
        <path d="M138 58 L150 40 L144 62 L134 70 Z" fill={`url(#${id}-mg)`} opacity=".9" />
      </g>
    </svg>
  );
}

function Doc({ id = 'pt-dg' }) {
  return (
    <svg className="pt-doc" viewBox="0 0 66 76" aria-hidden="true">
      <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#8e2236" /><stop offset="1" stopColor="#40010a" /></linearGradient></defs>
      <path d="M8 4 H44 L60 20 V70 C60 72 58 74 56 74 H8 C6 74 4 72 4 70 V8 C4 6 6 4 8 4 Z" fill="#fffaf2" stroke={`url(#${id})`} strokeWidth="2.2" />
      <path d="M44 4 V20 H60" fill="#f1e2c8" stroke={`url(#${id})`} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M26 20 H38 M29 20 V32 L20 50 C19 53 21 55 24 55 H43 C46 55 48 53 47 50 L37 32 V20" fill="none" stroke={`url(#${id})`} strokeWidth="2" strokeLinejoin="round" />
      <path d="M22.5 46 H44.5 L46 50 C47 53 45 55 43 55 H24 C21 55 19.5 53 20.5 50 Z" fill="#cca25e" />
      <path d="M16 63 H50 M16 68 H40" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const WAVES = 'M0 30 C30 22 50 40 80 30 S130 24 150 34 M0 52 C30 44 52 62 82 52 S128 46 150 56 M0 74 C28 66 54 84 84 74 S126 68 150 78 M0 120 C30 112 50 130 80 120 S130 114 150 124 M0 142 C30 134 52 152 82 142 S128 136 150 146';

export default function ProofThread() {
  const lang = useLang();
  const t = T[lang] || T.en;
  const root = useRef(null);
  const track = useRef(null);
  const [slide, setSlide] = useState(0);

  // Phones: one fact at a time. Always moves forward: after the last fact it
  // slides on to a copy of the first one, then silently jumps back to the start.
  const pos = (el) => Math.round(Math.abs(el.scrollLeft) / el.clientWidth);
  const goTo = (i, smooth = true) => {
    const el = track.current;
    if (!el) return;
    const dir = getComputedStyle(el).direction === 'rtl' ? -1 : 1;
    el.scrollTo({ left: dir * i * el.clientWidth, behavior: smooth ? 'smooth' : 'auto' });
  };
  const next = () => { const el = track.current; if (el) goTo(pos(el) + 1); };
  useEffect(() => {
    const el = track.current;
    if (!el) return undefined;
    let settle;
    const onScroll = () => {
      setSlide(pos(el) % 3);
      clearTimeout(settle);
      settle = setTimeout(() => { if (pos(el) >= 3) goTo(0, false); }, 140);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    let touched = false;
    const stop = () => { touched = true; };
    el.addEventListener('pointerdown', stop);
    el.addEventListener('touchstart', stop, { passive: true });
    const id = prefersReducedMotion() ? null : setInterval(() => {
      if (touched || el.offsetParent === null) return;
      goTo(pos(el) + 1);
    }, 4200);
    return () => { clearTimeout(settle); el.removeEventListener('scroll', onScroll); el.removeEventListener('pointerdown', stop); el.removeEventListener('touchstart', stop); if (id) clearInterval(id); };
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const line = root.current.querySelector('.pt-line');
      const len = line.getTotalLength();
      gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
      gsap.timeline({ delay: 0.9 })
        .from('.pt-band', { y: 30, opacity: 0, duration: 1.1, ease: 'expo.out' })
        .to(line, { strokeDashoffset: 0, duration: 2.2, ease: 'power2.inOut' }, 0.3)
        .from('.pt-item, .pt-arrow, .pt-std', { y: 12, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'expo.out' }, 0.4)
        .from('.pt-plaque', { scale: 0.7, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'back.out(1.8)' }, 1.1);
    },
    { scope: root }
  );

  return (
    <section className="pt" ref={root} aria-label={`${t.place}. ${t.lab}. ${t.std}.`}>
      <div className="pt-band">
        <svg className="pt-waves l" viewBox="0 0 150 176" preserveAspectRatio="none" aria-hidden="true"><path d={WAVES} /></svg>
        <svg className="pt-waves r" viewBox="0 0 150 176" preserveAspectRatio="none" aria-hidden="true"><path d={WAVES} /></svg>
        <svg className="pt-thread" viewBox="0 0 1404 176" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="pt-gt" x1="0" x2="1"><stop offset="0" stopColor="#b88f4d" stopOpacity="0" /><stop offset=".08" stopColor="#b88f4d" /><stop offset=".5" stopColor="#eed9a6" /><stop offset=".92" stopColor="#b88f4d" /><stop offset="1" stopColor="#b88f4d" stopOpacity="0" /></linearGradient>
          </defs>
          <path className="pt-line" d="M30 128 C200 128 300 132 420 130 S560 124 620 124 C680 124 700 132 760 132 S900 128 960 132 C1020 136 1060 122 1100 122 S1300 132 1380 128" fill="none" stroke="url(#pt-gt)" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
        </svg>

        <div className="pt-row">
          <Peak />
          <Link href="/our-shilajit/" className="pt-item">
            <span><strong>{t.place}</strong><small>{t.alt}</small></span>
          </Link>
          <Arrow />
          <Link href="/lab-results/" className="pt-item">
            <Doc />
            <span><strong>{t.lab}</strong><small>{t.labSub}</small></span>
          </Link>
          <Arrow />
          <Link href="/certificates/" className="pt-std">
            <span className="pt-std-h">{t.std}</span>
            <span className="pt-plaques">
              {CERTS.map((c, i) => (
                <span key={c} className="pt-pq">
                  {i > 0 && <i className="pt-link" aria-hidden="true" />}
                  <span className="pt-plaque">{c}</span>
                </span>
              ))}
            </span>
          </Link>
          <Arrow />
        </div>

        <div className="pt-swipe" ref={track}>
          <Link href="/our-shilajit/" className="pt-slide">
            <Peak id="ptm" className="pt-mini" viewBox="30 30 190 104" />
            <span><strong>{t.place}</strong><small>{t.alt}</small></span>
          </Link>
          <Link href="/lab-results/" className="pt-slide">
            <Doc id="ptm-dg" />
            <span><strong>{t.lab}</strong><small>{t.labSub}</small></span>
          </Link>
          <Link href="/certificates/" className="pt-slide pt-slide-std">
            <span className="pt-std-h">{t.std}</span>
            <span className="pt-plaques">
              {CERTS.map((c, i) => (
                <span key={c} className="pt-pq">
                  {i > 0 && <i className="pt-link" aria-hidden="true" />}
                  <span className="pt-plaque">{c}</span>
                </span>
              ))}
            </span>
          </Link>
          <Link href="/our-shilajit/" className="pt-slide" aria-hidden="true" tabIndex={-1}>
            <Peak id="ptm2" className="pt-mini" viewBox="30 30 190 104" />
            <span><strong>{t.place}</strong><small>{t.alt}</small></span>
          </Link>
        </div>
        <div className="pt-nav">
          <div className="pt-dots" role="tablist">
            {[t.place, t.lab, t.std].map((x, i) => (
              <button key={x} type="button" role="tab" aria-selected={slide === i} aria-label={x} className={slide === i ? 'on' : ''} onClick={() => { const el = track.current; if (el) goTo(pos(el) + ((i - slide + 3) % 3)); }} />
            ))}
          </div>
        </div>
        <button type="button" className="pt-next" aria-label="Next" onClick={next}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
        </button>
      </div>

    </section>
  );
}
