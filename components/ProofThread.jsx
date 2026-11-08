'use client';
// Proof strip that overlaps the bottom of the home hero: origin, batch lab reports and quality
// standards as three carved stone tablets joined by gold wire (pieces in /public/images/strip).
// PLACEHOLDER: show only certifications the producer actually holds.
import { useEffect, useRef, useState } from 'react';
import Link from './LLink';
import { useLang } from './LangProvider';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';

const T = {
  en: { place: 'Skardu, Pakistan', alt: 'Harvested above 5,000 m', lab: 'Batch lab reports', labCta: 'Explore our testing', std: 'Quality standards', stdCta: 'Explore our standards' },
  da: { place: 'Skardu, Pakistan', alt: 'Hentet over 5.000 m', lab: 'Laboratorierapport for hver batch', labCta: 'Udforsk vores test', std: 'Kvalitetsstandarder', stdCta: 'Udforsk vores standarder' },
  de: { place: 'Skardu, Pakistan', alt: 'Gewonnen über 5.000 m', lab: 'Laborberichte je Charge', labCta: 'Unsere Prüfungen entdecken', std: 'Qualitätsstandards', stdCta: 'Unsere Standards entdecken' },
  fr: { place: 'Skardu, Pakistan', alt: 'Récolté au-dessus de 5 000 m', lab: 'Rapports de labo par lot', labCta: 'Découvrir nos analyses', std: 'Normes de qualité', stdCta: 'Découvrir nos normes' },
  es: { place: 'Skardu, Pakistán', alt: 'Recolectado a más de 5.000 m', lab: 'Informes de laboratorio por lote', labCta: 'Explora nuestras pruebas', std: 'Estándares de calidad', stdCta: 'Explora nuestros estándares' },
  ar: { place: 'سكاردو، باكستان', alt: 'يُجمع فوق 5000 متر', lab: 'تقارير مخبرية لكل دفعة', labCta: 'اكتشف فحوصاتنا', std: 'معايير الجودة', stdCta: 'اكتشف معاييرنا' },
  ur: { place: 'اسکردو، پاکستان', alt: '5,000 میٹر سے اوپر سے حاصل', lab: 'ہر بیچ کی لیب رپورٹ', labCta: 'ہمارے ٹیسٹ دیکھیں', std: 'معیار کے سرٹیفکیٹ', stdCta: 'ہمارے معیار دیکھیں' },
};
// Carved icon sizes (px) in /public/images/strip: the strip is built from these stone and gold pieces.
const ICON = { mountain: [520, 315], flask: [520, 628], rosette: [520, 643] };

const Go = () => <img className="pt-go" src="/images/strip/arrow.webp" alt="" width="147" height="89" decoding="async" />;
const Arch = () => <img className="pt-arch" src="/images/strip/arch.webp" alt="" width="160" height="60" decoding="async" />;

function Tablet({ href, icon, title, sub, cta, hidden }) {
  const [w, h] = ICON[icon];
  return (
    <Link href={href} className={`pt-tab is-${icon}`} {...(hidden ? { 'aria-hidden': 'true', tabIndex: -1 } : {})}>
      <img className="pt-tab-bg" src="/images/strip/tablet.webp" alt="" width="1100" height="387" decoding="async" />
      <span className="pt-tab-in">
        <span className="pt-tab-ico"><img src={`/images/strip/${icon}.webp`} alt="" width={w} height={h} decoding="async" /></span>
        <i className="pt-tab-dv" aria-hidden="true" />
        <span className="pt-tab-tx">
          <strong>{title}</strong>
          <small>{sub}{cta && <Go />}</small>
        </span>
      </span>
    </Link>
  );
}

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
      settle = setTimeout(() => { const n = pos(el); if (n >= 3) goTo(n - 3, false); }, 140);
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
      gsap.timeline({ delay: 0.9 })
        .from('.pt-tab', { y: 34, opacity: 0, stagger: 0.14, duration: 1.1, ease: 'expo.out', clearProps: 'transform,opacity' }, 0)
        .from('.pt-arch', { opacity: 0, scale: 0.6, stagger: 0.12, duration: 0.8, ease: 'back.out(1.8)', clearProps: 'transform,opacity' }, 0.7);
    },
    { scope: root }
  );

  return (
    <section className="pt" ref={root} aria-label={`${t.place}. ${t.lab}. ${t.std}.`}>
      <div className="pt-band">
        <div className="pt-row">
          <Tablet href="/our-shilajit/" icon="mountain" title={t.place} sub={t.alt} />
          <Arch />
          <Tablet href="/lab-results/" icon="flask" title={t.lab} sub={t.labCta} cta />
          <Arch />
          <Tablet href="/certificates/" icon="rosette" title={t.std} sub={t.stdCta} cta />
        </div>

        <div className="pt-swipe" ref={track}>
          <div className="pt-slide"><Tablet href="/our-shilajit/" icon="mountain" title={t.place} sub={t.alt} /></div>
          <div className="pt-slide"><Tablet href="/lab-results/" icon="flask" title={t.lab} sub={t.labCta} cta /></div>
          <div className="pt-slide"><Tablet href="/certificates/" icon="rosette" title={t.std} sub={t.stdCta} cta /></div>
          <div className="pt-slide" aria-hidden="true"><Tablet href="/our-shilajit/" icon="mountain" title={t.place} sub={t.alt} hidden /></div>
          <div className="pt-slide" aria-hidden="true"><Tablet href="/lab-results/" icon="flask" title={t.lab} sub={t.labCta} cta hidden /></div>
          <div className="pt-slide" aria-hidden="true"><Tablet href="/certificates/" icon="rosette" title={t.std} sub={t.stdCta} cta hidden /></div>
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
