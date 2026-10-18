'use client';
// Rounded maroon header used at the top of inner pages (Shop, Contact, Reviews).
import { useMemo, useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { ridgePoints, toLine } from '@/lib/mountains';

export default function PageHero({ eyebrow, title, accent, lead, children }) {
  const root = useRef(null);
  const lines = useMemo(() => [toLine(ridgePoints(13, 300, 230, 4)), toLine(ridgePoints(29, 340, 160, 6))], []);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const paths = gsap.utils.toArray('.page-hero-lines path');
      paths.forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });
      gsap.timeline({ defaults: { ease: 'expo.out' } })
        .from('.page-hero-card', { scale: 0.96, duration: 1.4 })
        .to(paths, { strokeDashoffset: 0, duration: 2.4, stagger: 0.2, ease: 'power2.inOut' }, 0)
        .from('.page-hero .line > span', { yPercent: 115, duration: 1.2, stagger: 0.1 }, 0.25)
        .from('.page-hero .eyebrow, .page-hero p, .page-hero-extra', { y: 18, opacity: 0, duration: 1, stagger: 0.08 }, 0.4);
    },
    { scope: root }
  );

  return (
    <section className="page-hero" ref={root}>
      <div className="page-hero-card">
        <svg className="page-hero-lines" viewBox="0 0 1200 360" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
          {lines.map((d, i) => (
            <path key={i} d={d} fill="none" stroke="#cca25e" strokeOpacity={i ? 0.45 : 0.8} strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
        <span className="eyebrow">{eyebrow}</span>
        <h1>
          <span className="line"><span>{title} {accent && <em className="gold-text">{accent}</em>}</span></span>
        </h1>
        {lead && <p>{lead}</p>}
        {children && <div className="page-hero-extra">{children}</div>}
      </div>
    </section>
  );
}
