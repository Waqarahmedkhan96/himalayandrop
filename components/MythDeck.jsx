'use client';
// Myth deck: common shilajit myths as a fanned hand of premium cards.
// Tap a card, use the arrows or keys, or drag up/down (swipe sideways on
// phones) to bring the next card to the front. The front card turns over to
// show the fact; the text on the left explains it. Text: lib/pdp.js (myths).
import { useCallback, useRef, useState } from 'react';
import { useLang } from './LangProvider';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { pdpText } from '@/lib/pdp';

const T = {
  en: { eyebrow: 'Why you’ll love it', h: 'Five reasons,', hg: 'in your hand.', hint: 'Drag, swipe or tap a card', prev: 'Previous card', next: 'Next card', of: 'of' },
  da: { eyebrow: 'Derfor bliver du glad for den', h: 'Fem grunde,', hg: 'i din hånd.', hint: 'Træk, swipe eller tryk på et kort', prev: 'Forrige kort', next: 'Næste kort', of: 'af' },
  de: { eyebrow: 'Warum du es lieben wirst', h: 'Fünf Gründe,', hg: 'in deiner Hand.', hint: 'Ziehen, wischen oder eine Karte antippen', prev: 'Vorherige Karte', next: 'Nächste Karte', of: 'von' },
  fr: { eyebrow: 'Pourquoi vous allez l’aimer', h: 'Cinq raisons,', hg: 'en main.', hint: 'Faites glisser ou touchez une carte', prev: 'Carte précédente', next: 'Carte suivante', of: 'sur' },
  es: { eyebrow: 'Por qué te va a encantar', h: 'Cinco razones,', hg: 'en tu mano.', hint: 'Arrastra, desliza o toca una tarjeta', prev: 'Tarjeta anterior', next: 'Tarjeta siguiente', of: 'de' },
  ar: { eyebrow: 'لماذا ستحبه', h: 'خمسة أسباب', hg: 'بين يديك.', hint: 'اسحب أو اضغط على بطاقة', prev: 'البطاقة السابقة', next: 'البطاقة التالية', of: 'من' },
  ur: { eyebrow: 'آپ کو یہ کیوں پسند آئے گا', h: 'پانچ وجوہات،', hg: 'آپ کے ہاتھ میں۔', hint: 'کارڈ کو کھینچیں، سوائپ کریں یا ٹیپ کریں', prev: 'پچھلا کارڈ', next: 'اگلا کارڈ', of: 'میں سے' },
};

const FINISH = ['velvet', 'gold', 'paper', 'ink', 'rose'];

// Small mountain emblem, like the chip on a bank card.
function Emblem() {
  return (
    <svg className="bd-emblem" viewBox="0 0 44 32" aria-hidden="true">
      <rect x="0.5" y="0.5" width="43" height="31" rx="7" />
      <path d="M5 25 L16 11 L22 18 L27 12 L39 25" />
      <path d="M13 15 L16 11 L19 15" />
    </svg>
  );
}

export default function MythDeck({ kind }) {
  const lang = useLang();
  const t = T[lang] || T.en;
  const m = pdpText(lang).myths;
  const items = [m.shared[0], m[kind] || m.resin, m.shared[1], m.powder || m.shared[2], m.shared[2]]
    .filter((x, i, a) => x && a.indexOf(x) === i)
    .map(([myth, fact]) => ({ myth, fact }));
  const n = items.length;
  const [active, setActive] = useState(0);
  const root = useRef(null);
  const drag = useRef(null);
  const stage = useRef(null);

  const go = useCallback((i) => setActive(((i % n) + n) % n), [n]);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const st = { trigger: root.current, start: 'top 70%', once: true };
      gsap.timeline({ scrollTrigger: st })
        .from('.bd-copy > *', { y: 28, opacity: 0, stagger: 0.08, duration: 1, ease: 'expo.out' })
        .from('.md-lift', { y: 300, opacity: 0, stagger: 0.08, duration: 1.4, ease: 'expo.out', clearProps: 'transform,opacity' }, 0.1);
    },
    { scope: root }
  );

  // Pointer drag: vertical with a mouse, sideways with touch (so the page can still scroll).
  const onDown = (e) => {
    drag.current = { x: e.clientX, y: e.clientY, type: e.pointerType, moved: false, card: e.target.closest?.('[data-i]') };
    stage.current?.setPointerCapture?.(e.pointerId);
  };
  const onMove = (e) => {
    const d = drag.current;
    if (!d) return;
    const dy = e.clientY - d.y;
    const dx = e.clientX - d.x;
    const amount = d.type === 'mouse' ? dy : dx;
    if (Math.abs(amount) > 6) d.moved = true;
    stage.current?.style.setProperty('--pull', `${Math.max(-60, Math.min(60, amount)) * 0.5}px`);
  };
  const onUp = (e) => {
    const d = drag.current;
    drag.current = null;
    stage.current?.style.setProperty('--pull', '0px');
    if (!d) return;
    const dy = e.clientY - d.y;
    const dx = e.clientX - d.x;
    const amount = d.type === 'mouse' || Math.abs(dy) > Math.abs(dx) ? dy : (lang === 'ar' || lang === 'ur' ? -dx : dx);
    if (Math.abs(amount) > 40) go(active + (amount < 0 ? 1 : -1));
    else if (!d.moved) {
      if (d.card) go(Number(d.card.dataset.i));
    }
  };
  const onKey = (e) => {
    if (['ArrowDown', 'ArrowRight'].includes(e.key)) { e.preventDefault(); go(active + 1); }
    if (['ArrowUp', 'ArrowLeft'].includes(e.key)) { e.preventDefault(); go(active - 1); }
  };

  const cur = items[active];

  return (
    <section className="bd-section" ref={root} aria-roledescription="carousel">
      <div className="container bd-grid">
        <div className="bd-copy">
          <p className="eyebrow">{m.eyebrow}</p>
          <h2>{m.h} <em className="gold-text">{m.hg}</em></h2>
          <div className="bd-detail" aria-live="polite" key={active}>
            <span className="bd-count"><b>{String(active + 1).padStart(2, '0')}</b> {t.of} {String(n).padStart(2, '0')}</span>
            <span className="md-tag is-myth"><svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" /></svg>{m.myth}</span>
            <h3>“{cur.myth}”</h3>
            <span className="md-tag is-fact"><svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></svg>{m.fact}</span>
            <p>{cur.fact}</p>
          </div>
          <div className="bd-nav">
            <button type="button" onClick={() => go(active - 1)} aria-label={t.prev}>
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <div className="bd-dots">
              {items.map((it, i) => (
                <button key={it.myth} type="button" className={i === active ? 'on' : ''} onClick={() => go(i)} aria-label={`${i + 1}: ${it.myth}`} aria-current={i === active ? 'true' : undefined} />
              ))}
            </div>
            <button type="button" onClick={() => go(active + 1)} aria-label={t.next}>
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
          <p className="bd-hint">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            {t.hint}
          </p>
        </div>

        <div
          className="bd-stage"
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
          {items.map((it, i) => {
            let d = i - active;
            if (d > n / 2) d -= n;
            if (d < -n / 2) d += n;
            return (
              <article
                key={it.myth}
                data-i={i}
                className={`bd-card md-card f-${FINISH[i % FINISH.length]} ${d === 0 ? 'is-front' : ''}`}
                style={{ '--d': d, '--ad': Math.abs(d), zIndex: 10 - Math.abs(d) }}
                aria-hidden={d !== 0}
              >
                <div className="md-lift">
                  <div className="md-flip">
                    <div className="bd-card-in md-face md-front">
                      <div className="bd-top">
                        <Emblem />
                        <span className="bd-no">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <span className="md-tag is-myth"><svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" /></svg>{m.myth}</span>
                      <h4>“{it.myth}”</h4>
                      <span className="md-q" aria-hidden="true">?</span>
                      <div className="bd-foot">
                        <span>Himalayan Drop<sup>®</sup></span>
                        <span>{m.eyebrow}</span>
                      </div>
                      <svg className="bd-ridge" viewBox="0 0 300 60" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M0 60 L0 42 L40 22 L70 36 L110 8 L150 34 L190 18 L230 40 L270 24 L300 34 L300 60 Z" />
                      </svg>
                    </div>
                    <div className="bd-card-in md-face md-back">
                      <div className="bd-top">
                        <Emblem />
                        <span className="bd-no">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <span className="md-tag is-fact"><svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></svg>{m.fact}</span>
                      <p className="md-fact">{it.fact}</p>
                      <div className="bd-foot">
                        <span>Himalayan Drop<sup>®</sup></span>
                        <span>{m.eyebrow}</span>
                      </div>
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
