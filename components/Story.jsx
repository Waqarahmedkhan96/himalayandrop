'use client';
// "Inspired by the mountains": layered SVG range in brand colours. Each ridge moves
// at its own speed on scroll, and a gold line traces the highest ridge.
import { useMemo, useRef } from 'react';
import Link from './LLink';
import { useT } from './LangProvider';

const T = {
  en: { aria: 'Himalayan mountain ridges at sunset', eyebrow: 'Our story', l1: 'Inspired by', l2: 'the mountains.', p: 'Himalayan Drop is built on a deep respect for nature and a fascination with what the mountains offer. We bring that slow, high-altitude patience to a modern daily ritual, designed in Denmark.', cta: 'Read our story' },
  da: { aria: 'Bjergkamme i solnedgang', eyebrow: 'Vores historie', l1: 'Inspireret af', l2: 'bjergene.', p: 'Himalayan Drop bygger på en dyb respekt for naturen og en fascination af det, bjergene giver os. Vi bringer den langsomme tålmodighed fra de store højder ind i et moderne dagligt ritual, designet i Danmark.', cta: 'Læs vores historie' },
};
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { ridgePoints, toLine, toShape } from '@/lib/mountains';
import { Arrow } from './Arrow';

const layers = [
  { seed: 11, base: 520, amp: 340, peaks: 3, fill: '#f1e2d2', speed: -4 },
  { seed: 27, base: 600, amp: 230, peaks: 4, fill: '#c98f7c', speed: -8 },
  { seed: 43, base: 680, amp: 170, peaks: 5, fill: '#8c3a44', speed: -14 },
  { seed: 61, base: 760, amp: 120, peaks: 6, fill: '#580f1b', speed: -22 },
  { seed: 83, base: 840, amp: 70, peaks: 9, fill: '#40010a', speed: -32 },
];

export default function Story() {
  const root = useRef(null);
  const t = useT(T);
  const shapes = useMemo(
    () => layers.map((l) => {
      const pts = ridgePoints(l.seed, l.base, l.amp, l.peaks);
      return { ...l, d: toShape(pts), line: toLine(pts) };
    }),
    []
  );

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const st = { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: 1 };
      gsap.utils.toArray('.ridge', root.current).forEach((el) => {
        const s = Number(el.dataset.speed) * 0.5;
        gsap.fromTo(el, { yPercent: -s }, { yPercent: s, ease: 'none', scrollTrigger: st });
      });
      gsap.fromTo('.sun', { y: 60 }, { y: -40, ease: 'none', scrollTrigger: st });

      const gold = root.current.querySelector('.gold-ridge');
      const len = gold.getTotalLength();
      gsap.set(gold, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(gold, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top 80%', end: 'center 40%', scrub: 1 } });

      gsap.timeline({ scrollTrigger: { trigger: '.story-card', start: 'top 75%', once: true } })
        .from('.story-card', { clipPath: 'inset(8% 6% 8% 6% round 48px)', duration: 1.4, ease: 'expo.out' })
        .from('.story-copy .line > span', { yPercent: 115, duration: 1.2, stagger: 0.12, ease: 'expo.out' }, 0.2)
        .from('.story-copy .eyebrow, .story-copy p, .story-copy .btn', { y: 20, opacity: 0, duration: 1, stagger: 0.08, ease: 'expo.out' }, 0.35);
    },
    { scope: root }
  );

  return (
    <section id="story" className="story" ref={root} style={{ scrollMarginTop: 20 }}>
      <div className="story-card">
        <div className="story-art">
          <svg viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice" role="img" aria-label={t.aria}>
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#f6e6c8" />
                <stop offset="0.45" stopColor="#efc995" />
                <stop offset="0.75" stopColor="#e2a47a" />
              </linearGradient>
              <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0" stopColor="#fff6e2" stopOpacity="1" />
                <stop offset="0.35" stopColor="#ffe9c2" stopOpacity="0.7" />
                <stop offset="1" stopColor="#ffe0b0" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="mist" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#f6e6c8" stopOpacity="0" />
                <stop offset="1" stopColor="#f6e6c8" stopOpacity="0.45" />
              </linearGradient>
            </defs>
            <rect width="1200" height="900" fill="url(#sky)" />
            <g className="sun">
              <circle cx="760" cy="250" r="260" fill="url(#glow)" />
              <circle cx="760" cy="250" r="54" fill="#fff4dc" />
            </g>
            {shapes.map((s, i) => (
              <g key={s.seed} className="ridge" data-speed={s.speed}>
                <path d={s.d} fill={s.fill} />
                {i === 0 && <path className="gold-ridge" d={s.line} fill="none" stroke="#cca25e" strokeWidth="2.4" strokeLinejoin="round" />}
                {i < 3 && <rect y={s.base - 40} width="1200" height="160" fill="url(#mist)" />}
              </g>
            ))}
          </svg>
        </div>

        <div className="story-copy">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2>
            <span className="line"><span>{t.l1}</span></span>
            <span className="line"><span><em className="gold-text">{t.l2}</em></span></span>
          </h2>
          <p>{t.p}</p>
          <Link href="/#ritual" className="btn gold">
            {t.cta} <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
