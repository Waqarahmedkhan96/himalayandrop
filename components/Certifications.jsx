'use client';
// Certification seals, drawn in code in the brand's maroon and gold.
// Only show a certification you actually hold, and link the certificate.
import { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { seals, Seal } from './Seal';

export default function Certifications() {
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top 75%', once: true } })
        .from('.cert-card', { clipPath: 'inset(8% 6% 8% 6% round 48px)', duration: 1.4, ease: 'expo.out' })
        .from('.cert-head > *', { y: 24, opacity: 0, stagger: 0.08, duration: 1, ease: 'expo.out' }, 0.2)
        .from('.seal', { scale: 0.4, rotate: -120, opacity: 0, stagger: 0.1, duration: 1.4, ease: 'expo.out' }, 0.3);
      gsap.to('.seal-ring', { rotation: 360, svgOrigin: '100 100', duration: 40, repeat: -1, ease: 'none' });
    },
    { scope: root }
  );

  return (
    <section id="certifications" ref={root} className="cert-section">
      <div className="cert-card">
        <div className="cert-head">
          <span className="eyebrow">Proof, not promises</span>
          <h2>Certified &amp; <em className="gold-text">tested.</em></h2>
          <p>Produced under recognised quality standards, tested for heavy metals batch by batch, and backed by a 60-day money-back guarantee.</p>
        </div>
        <ul className="seals">
          {seals.map((s) => (
            <li className="seal" key={s.id}>
              <Seal s={s} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
