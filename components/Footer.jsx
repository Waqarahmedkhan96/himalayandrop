'use client';
// Footer. The top edge is a Himalayan ridge silhouette, and the divider above
// the small print is a gold mountain line that draws itself as you reach it.
import { useMemo, useRef } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { footer, legal } from '@/lib/site';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { ridgePoints, toLine, toShape } from '@/lib/mountains';

export default function Footer() {
  const root = useRef(null);
  const { back, front, frontLine, divider } = useMemo(() => {
    const b = ridgePoints(101, 120, 105, 5, 1200, 0.3);
    const f = ridgePoints(202, 135, 80, 8, 1200, 0.3);
    return {
      back: toShape(b, 1200, 140),
      front: toShape(f, 1200, 140),
      frontLine: toLine(f),
      divider: toLine(ridgePoints(303, 46, 38, 7, 1200, 0.3)),
    };
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      root.current.querySelectorAll('.draw').forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(p, { strokeDashoffset: 0, duration: 2.4, ease: 'power2.inOut', scrollTrigger: { trigger: p.closest('svg'), start: 'top 95%', once: true } });
      });
      gsap.from('.footer-ridge .ridge-back', { yPercent: 30, duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: root.current, start: 'top 95%', once: true } });
    },
    { scope: root }
  );

  return (
    <footer className="footer" ref={root}>
      <svg className="footer-ridge" viewBox="0 0 1200 140" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
        <path className="ridge-back" d={back} fill="#580f1b" />
        <path d={front} fill="#40010a" />
        <path className="draw" d={frontLine} fill="none" stroke="#cca25e" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="footer-body">
        <div className="container">
          <div className="footer-top">
            <div>
              <Logo size={28} />
              <p className="tagline">A modern approach to a timeless natural substance. Designed in Denmark.</p>
            </div>
            <div className="footer-cols">
              {footer.map((col) => (
                <div className="footer-col" key={col.title}>
                  <h4>{col.title}</h4>
                  {col.links.map(([label, href]) => (
                    <Link key={label} href={href}>{label}</Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <svg className="footer-divider" viewBox="0 0 1200 50" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <path className="draw" d={divider} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
          </svg>

          <p className="disclaimer">
            Food supplement. Do not exceed the recommended daily dose. Food supplements should not be used as a
            substitute for a varied, balanced diet and a healthy lifestyle. Keep out of reach of children.
          </p>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Himalayan Drop. All rights reserved.</span>
            <span className="legal-links">{legal.map(([l, h]) => <Link key={l} href={h}>{l}</Link>)}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
