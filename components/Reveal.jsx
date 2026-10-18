'use client';
// Wrap any section in <Reveal> and mark children with data-reveal to fade them
// up as they scroll into view. data-reveal="lines" animates .line > span masks,
// data-reveal="rule" draws the gold rule.
import { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';

export default function Reveal({ as: Tag = 'div', children, ...props }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const items = gsap.utils.toArray('[data-reveal]', ref.current);
      items.forEach((el) => {
        const kind = el.dataset.reveal;
        const st = { trigger: el, start: 'top 88%', once: true };
        if (kind === 'lines') {
          gsap.from(el.querySelectorAll('.line > span'), { yPercent: 110, duration: 1.2, stagger: 0.1, ease: 'expo.out', scrollTrigger: st });
        } else if (kind === 'rule') {
          gsap.from(el, { scaleX: 0, duration: 1.1, ease: 'expo.out', scrollTrigger: st });
        } else if (kind === 'stagger') {
          gsap.from(el.children, { y: 40, opacity: 0, duration: 1.1, stagger: 0.12, ease: 'expo.out', scrollTrigger: st });
        } else {
          gsap.from(el, { y: 32, opacity: 0, duration: 1.1, ease: 'expo.out', scrollTrigger: st });
        }
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} {...props}>
      {children}
    </Tag>
  );
}
