'use client';
// "Harvested above 5,000 m": a contour-line mountain in gold. The lines draw in
// from the front, a marker pulses at the summit and the altitude counts up.
import { useMemo, useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';

const W = 600;
const H = 380;

// Mountain profile: a main summit and a shoulder, with gentle ripples.
function profile(x, k) {
  const g = (c, w, h) => h * Math.exp(-((x - c) ** 2) / (2 * w * w));
  return g(0.46, 0.12, 1) + g(0.62, 0.09, 0.62) + g(0.3, 0.1, 0.35) + 0.025 * Math.sin(x * 40 + k * 0.7);
}

function contourLines(count = 34) {
  const lines = [];
  for (let k = 0; k < count; k++) {
    const t = k / (count - 1); // 0 = back (top), 1 = front
    const base = 300 + t * 60;
    const height = 250 * (1 - t * 0.85);
    let d = '';
    for (let i = 0; i <= 120; i++) {
      const x = i / 120;
      const y = base - profile(x, k) * height;
      d += `${i ? 'L' : 'M'}${(x * W).toFixed(1)} ${y.toFixed(1)}`;
    }
    lines.push({ d, op: 0.25 + t * 0.75 });
  }
  return lines;
}

export default function Harvest() {
  const root = useRef(null);
  const lines = useMemo(() => contourLines(), []);
  const peakY = 300 - profile(0.46, 0) * 250;

  useGSAP(
    () => {
      const num = root.current.querySelector('.alt-num');
      if (prefersReducedMotion()) return;
      const paths = gsap.utils.toArray('.contour path');
      paths.forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });
      const counter = { v: 0 };
      gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top 70%', once: true } })
        .from('.harvest-card', { clipPath: 'inset(8% 6% 8% 6% round 48px)', duration: 1.4, ease: 'expo.out' })
        .to(paths.slice().reverse(), { strokeDashoffset: 0, duration: 1.6, stagger: 0.03, ease: 'power2.out' }, 0.1)
        .from('.harvest-copy > *', { y: 24, opacity: 0, stagger: 0.08, duration: 1, ease: 'expo.out' }, 0.3)
        .from('.summit', { scale: 0, transformOrigin: 'center', duration: 0.8, ease: 'back.out(3)' }, 1.4)
        .to(counter, { v: 5000, duration: 2, ease: 'power3.out', onUpdate: () => (num.textContent = Math.round(counter.v).toLocaleString('en-US')) }, 0.6);
      gsap.to('.contour', { yPercent: -6, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: 1 } });
    },
    { scope: root }
  );

  return (
    <section id="harvest" className="harvest-section" ref={root}>
      <div className="harvest-card">
        <div className="harvest-copy">
          <span className="eyebrow">Where it comes from</span>
          <h2>Harvested high in <em className="gold-text">the Himalayas.</em></h2>
          <p>
            Shilajit forms slowly in high mountain rock, far above roads and towns. Ours is collected above
            5,000 metres, then purified and tested before it is sealed in amber glass.
          </p>
          <div className="alt">
            <span className="alt-label">Harvest altitude</span>
            <span className="alt-value">
              <span className="alt-gt">›</span>
              <span className="alt-num">5,000</span>
              <span className="alt-unit">m</span>
            </span>
          </div>
          <ul className="harvest-facts">
            <li><strong>Himalayas</strong><span>Origin</span></li>
            <li><strong>Per batch</strong><span>Lab tested</span></li>
            <li><strong>Amber glass</strong><span>Light protected</span></li>
          </ul>
        </div>

        <div className="harvest-art">
          <svg viewBox={`0 -80 ${W} ${H + 80}`} role="img" aria-label="Contour line drawing of a Himalayan summit with the harvest point above 5,000 metres">
            <defs>
              <linearGradient id="contour-gold" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#a8803f" />
                <stop offset="0.45" stopColor="#eed9a6" />
                <stop offset="1" stopColor="#b88f4d" />
              </linearGradient>
              <radialGradient id="summit-glow">
                <stop offset="0" stopColor="#fff3d6" stopOpacity="0.9" />
                <stop offset="1" stopColor="#fff3d6" stopOpacity="0" />
              </radialGradient>
            </defs>
            <g className="contour">
              {lines.map((l, i) => (
                <path key={i} d={l.d} fill="none" stroke="url(#contour-gold)" strokeOpacity={l.op} strokeWidth="1" vectorEffect="non-scaling-stroke" />
              ))}
              <line x1="0" y1="360" x2={W} y2="360" stroke="#cca25e" strokeWidth="1.5" />
            </g>
            <g className="summit" transform={`translate(${0.46 * W} ${peakY - 6})`}>
              <circle r="26" fill="url(#summit-glow)" className="summit-pulse" />
              <circle r="6" fill="#fff6e2" />
              <line x1="0" y1="-10" x2="0" y2="-46" stroke="#e2c487" strokeWidth="1" strokeDasharray="3 3" />
              <text y="-54" textAnchor="middle" fill="#eed9a6" fontSize="13" fontWeight="700" letterSpacing="2" fontFamily="Manrope Variable, Manrope, sans-serif">5,000 M+</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
