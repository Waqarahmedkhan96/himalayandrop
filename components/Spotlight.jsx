'use client';
// Gummies spotlight: the tin floats and turns slightly as you scroll past.
import { useRef } from 'react';
import Link from 'next/link';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { Arrow } from './Arrow';

const ingredients = ['Shilajit', 'L-Citrulline', 'Panax ginseng', 'Zinc', 'Selenium', 'Sea moss', 'Black seed'];

export default function Spotlight() {
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        '.spot-media img',
        { y: 60, rotate: -6 },
        { y: -40, rotate: 4, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: 1 } }
      );
      gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top 75%', once: true } })
        .from('.spot', { clipPath: 'inset(8% 6% 8% 6% round 48px)', duration: 1.4, ease: 'expo.out' })
        .from('.spot-copy .line > span', { yPercent: 115, duration: 1.2, ease: 'expo.out' }, 0.2)
        .from('.spot-copy .eyebrow, .spot-copy p, .spot-facts, .chips li, .spot-copy .btn', { y: 20, opacity: 0, stagger: 0.05, duration: 1, ease: 'expo.out' }, 0.3);
    },
    { scope: root }
  );

  return (
    <section id="gummies" ref={root} style={{ scrollMarginTop: 80 }}>
      <div className="spot">
        <div className="spot-media">
          <img src="/images/cut-gummies-tin.webp" alt="Himalayan Drop Shilajit Gummies Gold Edition tin, strawberry flavour" width="628" height="1100" loading="lazy" />
        </div>
        <div className="spot-copy">
          <span className="eyebrow">Gold Edition · Strawberry</span>
          <h2>
            <span className="line"><span>Shilajit Gummies</span></span>
          </h2>
          <p>
            500 mg of our shilajit in every serving, in a soft strawberry gummy with six companion ingredients. An easy way
            to keep the ritual when you are on the move.
          </p>
          <div className="spot-facts">
            <div><strong>60</strong><span>Gummies</span></div>
            <div><strong>30</strong><span>Servings</span></div>
            <div><strong>2</strong><span>Per serving</span></div>
          </div>
          <ul className="chips" aria-label="Ingredients">
            {ingredients.map((i) => <li key={i}>{i}</li>)}
          </ul>
          <Link href="/products/shilajit-gummies/" className="btn">
            Discover gummies <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
