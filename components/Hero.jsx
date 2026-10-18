'use client';
// Hero: a rounded maroon stage with gold mountain line-art. The headline reveals
// line by line, the packaging rises into the centre and floats, and on scroll
// the product lifts while the mountains drift (parallax).
import { useMemo, useRef } from 'react';
import Link from 'next/link';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { ridgePoints, toLine } from '@/lib/mountains';
import { Arrow } from './Arrow';

const ridges = [
  { seed: 7, base: 330, amp: 260, peaks: 3, op: 0.9, w: 1.4 },
  { seed: 19, base: 390, amp: 200, peaks: 5, op: 0.6, w: 1.1 },
  { seed: 31, base: 450, amp: 150, peaks: 7, op: 0.4, w: 1 },
];

export default function Hero() {
  const root = useRef(null);
  const lines = useMemo(() => ridges.map((r) => ({ ...r, d: toLine(ridgePoints(r.seed, r.base, r.amp, r.peaks)) })), []);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const paths = gsap.utils.toArray('.hero-lines path');
      paths.forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });

      gsap.timeline({ defaults: { ease: 'expo.out', duration: 1.4 } })
        .from('.hero-card', { scale: 0.96, borderRadius: 64, duration: 1.6 })
        .to(paths, { strokeDashoffset: 0, duration: 2.6, stagger: 0.25, ease: 'power2.inOut' }, 0.1)
        .from('.hero .eyebrow', { y: 14, opacity: 0, duration: 1 }, 0.3)
        .from('.hero h1 .line > span', { yPercent: 115, stagger: 0.12 }, 0.4)
        .from('.hero-lead, .hero-ctas > *', { y: 20, opacity: 0, stagger: 0.08, duration: 1.1 }, 0.75)
        .from('.hero-product img', { y: 120, scale: 0.86, opacity: 0, duration: 1.8 }, 0.55)
        .from('.hero-shadow', { scaleX: 0.3, opacity: 0, duration: 1.6 }, 0.75)
        .from('.hero-chips li', { y: 16, opacity: 0, stagger: 0.07, duration: 1 }, 1.1);

      // Gentle float after it lands.
      gsap.to('.hero-product img', { y: -12, duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2.4 });
      gsap.to('.hero-shadow', { scaleX: 0.9, opacity: 0.75, duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2.4 });

      // Scroll: product lifts, line-art and glow drift slower than the page.
      const st = { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true };
      gsap.to('.hero-product', { yPercent: -10, scale: 0.94, ease: 'none', scrollTrigger: st });
      gsap.to('.hero-lines', { yPercent: 14, ease: 'none', scrollTrigger: st });
      gsap.to('.hero-glow', { scale: 1.25, opacity: 0.6, ease: 'none', scrollTrigger: st });
      gsap.to('.hero-copy', { yPercent: -25, opacity: 0, ease: 'none', scrollTrigger: { ...st, end: '45% top' } });

      // Desktop: the glow follows the mouse a little.
      const glow = root.current.querySelector('.hero-glow');
      const xTo = gsap.quickTo(glow, 'x', { duration: 1.6, ease: 'power3' });
      const yTo = gsap.quickTo(glow, 'y', { duration: 1.6, ease: 'power3' });
      const onMove = (e) => {
        if (window.innerWidth < 1100) return;
        xTo((e.clientX / window.innerWidth - 0.5) * 120);
        yTo((e.clientY / window.innerHeight - 0.5) * 80);
      };
      window.addEventListener('mousemove', onMove);
      return () => window.removeEventListener('mousemove', onMove);
    },
    { scope: root }
  );

  return (
    <section className="hero" ref={root}>
      <div className="hero-card">
        <div className="hero-glow" aria-hidden="true" />
        <svg className="hero-lines" viewBox="0 0 1200 460" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
          {lines.map((l) => (
            <path key={l.seed} d={l.d} fill="none" stroke="#cca25e" strokeOpacity={l.op} strokeWidth={l.w} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
          ))}
        </svg>

        <div className="hero-copy">
          <span className="eyebrow">Gold Edition · Shilajit Resin</span>
          <h1>
            <span className="line"><span>A grounded</span></span>
            <span className="line"><span><em className="gold-text">daily ritual.</em></span></span>
          </h1>
          <p className="hero-lead">Pure Himalayan shilajit, sealed in amber glass and finished in gold.</p>
          <div className="hero-ctas">
            <Link href="/#collection" className="btn gold">
              Shop the collection <Arrow />
            </Link>
            <Link href="/#story" className="btn ghost">Our story</Link>
          </div>
        </div>

        <div className="hero-product">
          <span className="hero-shadow" aria-hidden="true" />
          <img
            src="/images/cut-maroon-set.webp"
            alt="Himalayan Drop Shilajit Resin Gold Edition: maroon gift box and amber jar with gold lid"
            width="1400"
            height="888"
            fetchPriority="high"
          />
        </div>

        <ul className="hero-chips">
          <li>Himalayan sourced</li>
          <li>Lab report per batch</li>
          <li>Danish brand</li>
        </ul>
      </div>
    </section>
  );
}
