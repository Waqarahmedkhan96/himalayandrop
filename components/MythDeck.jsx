'use client';
// Myth vs fact carousel.
// Phones: a fanned hand of cards (swipe sideways or tap).
// Tablet and desktop: a wheel of landscape cards turning around a centre off
// to the side (drag up/down, use the up/down buttons, keys or tap a card).
// A new front card shows the myth first; after a few seconds (a gold bar shows
// the time) or on a tap, it turns over to the fact. Text: lib/pdp.js (myths).
import { useCallback, useEffect, useRef, useState } from 'react';
import { useLang } from './LangProvider';
import RealIcon from './RealIcon';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { pdpText } from '@/lib/pdp';

const T = {
  en: { hint: 'Drag, swipe or tap a card', prev: 'Previous myth', next: 'Next myth', of: 'of', reveal: 'Tap the card to see the fact', again: 'Tap again for the myth' },
  da: { hint: 'Træk, swipe eller tryk på et kort', prev: 'Forrige myte', next: 'Næste myte', of: 'af', reveal: 'Tryk på kortet for at se fakta', again: 'Tryk igen for myten' },
  de: { hint: 'Ziehen, wischen oder eine Karte antippen', prev: 'Vorheriger Mythos', next: 'Nächster Mythos', of: 'von', reveal: 'Tippe auf die Karte für den Fakt', again: 'Nochmal tippen für den Mythos' },
  fr: { hint: 'Faites glisser ou touchez une carte', prev: 'Mythe précédent', next: 'Mythe suivant', of: 'sur', reveal: 'Touchez la carte pour voir la réalité', again: 'Touchez à nouveau pour le mythe' },
  es: { hint: 'Arrastra, desliza o toca una tarjeta', prev: 'Mito anterior', next: 'Mito siguiente', of: 'de', reveal: 'Toca la tarjeta para ver la realidad', again: 'Toca otra vez para el mito' },
  ar: { hint: 'اسحب أو اضغط على بطاقة', prev: 'الخرافة السابقة', next: 'الخرافة التالية', of: 'من', reveal: 'اضغط على البطاقة لرؤية الحقيقة', again: 'اضغط مجدداً لرؤية الخرافة' },
  ur: { hint: 'کارڈ کو کھینچیں، سوائپ کریں یا ٹیپ کریں', prev: 'پچھلی غلط فہمی', next: 'اگلی غلط فہمی', of: 'میں سے', reveal: 'حقیقت دیکھنے کے لیے کارڈ پر ٹیپ کریں', again: 'غلط فہمی کے لیے دوبارہ ٹیپ کریں' },
};

const FINISH = ['velvet', 'gold', 'paper', 'ink', 'rose'];
const READ_MS = 5000; // time to read the myth before the card turns over
const KIND_ICON = { resin: 'glass', gummies: 'tin', drops: 'dropper', capsules: 'capsule' };

function Emblem() {
  return (
    <svg className="bd-emblem" viewBox="0 0 44 32" aria-hidden="true">
      <rect x="0.5" y="0.5" width="43" height="31" rx="7" />
      <path d="M5 25 L16 11 L22 18 L27 12 L39 25" />
      <path d="M13 15 L16 11 L19 15" />
    </svg>
  );
}
const Cross = () => <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" /></svg>;
const Tick = () => <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const Arrow = ({ d }) => <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d={d} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export default function MythDeck({ kind }) {
  const lang = useLang();
  const t = T[lang] || T.en;
  const m = pdpText(lang).myths;
  const items = [
    [m.shared[0], 'crystal'],
    [m[kind] || m.resin, KIND_ICON[kind] || 'glass'],
    [m.shared[1], 'people'],
    [m.powder, 'spoon'],
    [m.shared[2], 'scale'],
  ].filter(([x]) => x).map(([[myth, fact], icon]) => ({ myth, fact, icon }));
  const n = items.length;
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [auto, setAuto] = useState(true);
  const [wheel, setWheel] = useState(false);
  const root = useRef(null);
  const drag = useRef(null);
  const stage = useRef(null);

  const go = useCallback((i) => { setActive(((i % n) + n) % n); setRevealed(false); setAuto(true); }, [n]);

  // Wheel layout from tablet width up.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const set = () => setWheel(mq.matches);
    set();
    mq.addEventListener('change', set);
    return () => mq.removeEventListener('change', set);
  }, []);

  // Give people time to read the myth, then turn the card over.
  useEffect(() => {
    if (revealed || !auto || prefersReducedMotion()) return undefined;
    const id = setTimeout(() => setRevealed(true), READ_MS);
    return () => clearTimeout(id);
  }, [active, revealed, auto]);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const st = { trigger: root.current, start: 'top 70%', once: true };
      gsap.timeline({ scrollTrigger: st })
        .from('.bd-copy > *', { y: 28, opacity: 0, stagger: 0.08, duration: 1, ease: 'expo.out' })
        .from('.md-lift', { y: 260, opacity: 0, stagger: 0.08, duration: 1.4, ease: 'expo.out', clearProps: 'transform,opacity' }, 0.1)
        .from('.md-ring', { scale: 0.7, opacity: 0, duration: 1.6, ease: 'expo.out' }, 0.1);
    },
    { scope: root }
  );

  const rtl = lang === 'ar' || lang === 'ur';
  // Wheel: drag up/down with mouse or touch. Fan (phones): drag up/down with a mouse, swipe sideways with touch.
  const amountOf = (d, e) => {
    const dy = e.clientY - d.y;
    const dx = e.clientX - d.x;
    if (wheel || d.type === 'mouse' || Math.abs(dy) > Math.abs(dx)) return dy;
    return rtl ? -dx : dx;
  };
  const onDown = (e) => {
    drag.current = { x: e.clientX, y: e.clientY, type: e.pointerType, moved: false, card: e.target.closest?.('[data-i]') };
    stage.current?.setPointerCapture?.(e.pointerId);
  };
  const onMove = (e) => {
    const d = drag.current;
    if (!d) return;
    const a = amountOf(d, e);
    if (Math.abs(a) > 6) d.moved = true;
    const c = Math.max(-80, Math.min(80, a));
    stage.current?.style.setProperty('--pull', `${c * 0.5}px`);
    stage.current?.style.setProperty('--pull-deg', `${(rtl ? 1 : -1) * c * 0.08}deg`);
  };
  const onUp = (e) => {
    const d = drag.current;
    drag.current = null;
    stage.current?.style.setProperty('--pull', '0px');
    stage.current?.style.setProperty('--pull-deg', '0deg');
    if (!d) return;
    const a = amountOf(d, e);
    if (Math.abs(a) > 40) { go(active + (a < 0 ? 1 : -1)); return; }
    if (d.moved || !d.card) return;
    const i = Number(d.card.dataset.i);
    if (i === active) { setRevealed((r) => !r); setAuto(false); } else go(i);
  };
  const onKey = (e) => {
    if (['ArrowDown', 'ArrowRight'].includes(e.key)) { e.preventDefault(); go(active + 1); }
    if (['ArrowUp', 'ArrowLeft'].includes(e.key)) { e.preventDefault(); go(active - 1); }
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setRevealed((r) => !r); setAuto(false); }
  };

  const cur = items[active];

  return (
    <section className={`bd-section md-section ${wheel ? 'is-wheel' : 'is-fan'}`} ref={root} aria-roledescription="carousel">
      <div className="container bd-grid">
        <div className="bd-copy">
          <p className="eyebrow">{m.eyebrow}</p>
          <h2>{m.h} <em className="gold-text">{m.hg}</em></h2>
          <div className="bd-detail" aria-live="polite" key={active}>
            <span className="bd-count"><b>{String(active + 1).padStart(2, '0')}</b> {t.of} {String(n).padStart(2, '0')}</span>
            <span className="md-tag is-myth"><Cross />{m.myth}</span>
            <h3>“{cur.myth}”</h3>
            <div className={`md-answer ${revealed ? 'on' : ''}`}>
              {revealed ? (
                <>
                  <span className="md-tag is-fact"><Tick />{m.fact}</span>
                  <p>{cur.fact}</p>
                </>
              ) : (
                <p className="md-wait">
                  <span className="md-wait-bar"><i key={`${active}-${auto}`} className={auto ? 'run' : ''} style={{ animationDuration: `${READ_MS}ms` }} /></span>
                  {t.reveal}
                </p>
              )}
            </div>
          </div>
          <div className="bd-nav">
            <button type="button" onClick={() => go(active - 1)} aria-label={t.prev}><Arrow d="M19 12H5M11 6l-6 6 6 6" /></button>
            <div className="bd-dots">
              {items.map((it, i) => (
                <button key={it.myth} type="button" className={i === active ? 'on' : ''} onClick={() => go(i)} aria-label={`${i + 1}: ${it.myth}`} aria-current={i === active ? 'true' : undefined} />
              ))}
            </div>
            <button type="button" onClick={() => go(active + 1)} aria-label={t.next}><Arrow d="M5 12h14M13 6l6 6-6 6" /></button>
          </div>
          <p className="bd-hint">
            <Arrow d="M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4" />
            {t.hint}
          </p>
        </div>

        <div
          className="bd-stage md-stage"
          ref={stage}
          tabIndex={0}
          role="group"
          aria-label={`${m.eyebrow}: ${t.hint}`}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          onKeyDown={onKey}
        >
          <div className="bd-glow" aria-hidden="true" />
          <div className="md-ring" aria-hidden="true"><span /></div>
          {items.map((it, i) => {
            let d = i - active;
            if (d > n / 2) d -= n;
            if (d < -n / 2) d += n;
            const front = d === 0;
            return (
              <article
                key={it.myth}
                data-i={i}
                className={`bd-card md-card f-${FINISH[i % FINISH.length]} ${front ? 'is-front' : ''} ${front && revealed ? 'is-revealed' : ''}`}
                style={{ '--d': d, '--ad': Math.abs(d), zIndex: 10 - Math.abs(d) }}
                aria-hidden={!front}
              >
                <div className="md-lift">
                  <div className="md-flip">
                    <div className="bd-card-in md-face md-front">
                      <div className="bd-top">
                        <Emblem />
                        <span className="bd-no">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <span className="md-art"><RealIcon name={it.icon} size={46} /></span>
                      <div className="md-body">
                        <span className="md-tag is-myth"><Cross />{m.myth}</span>
                        <h4>“{it.myth}”</h4>
                      </div>
                      <span className="md-q" aria-hidden="true">?</span>
                      {front && !revealed && (
                        <span className="md-timer" aria-hidden="true"><i key={`${active}-${auto}`} className={auto ? 'run' : ''} style={{ animationDuration: `${READ_MS}ms` }} /></span>
                      )}
                      <svg className="bd-ridge" viewBox="0 0 300 60" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M0 60 L0 42 L40 22 L70 36 L110 8 L150 34 L190 18 L230 40 L270 24 L300 34 L300 60 Z" />
                      </svg>
                    </div>
                    <div className="bd-card-in md-face md-back">
                      <div className="bd-top">
                        <Emblem />
                        <span className="bd-no">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <span className="md-art"><RealIcon name="shield" size={46} /></span>
                      <div className="md-body">
                        <span className="md-tag is-fact"><Tick />{m.fact}</span>
                        <p className="md-fact">{it.fact}</p>
                      </div>
                      <span className="md-again">{t.again}</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
