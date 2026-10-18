'use client';
// Accessible accordion with a smooth GSAP height animation.
import { useRef, useState } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

function Item({ q, a, id }) {
  const [open, setOpen] = useState(false);
  const panel = useRef(null);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    const dur = prefersReducedMotion() ? 0 : 0.6;
    gsap.to(panel.current, {
      height: next ? 'auto' : 0,
      duration: dur,
      ease: 'expo.inOut',
      onComplete: () => window.__lenis?.resize(),
    });
  };

  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-q" onClick={toggle} aria-expanded={open} aria-controls={id}>
        {q}
        <span className="plus" aria-hidden="true" />
      </button>
      <div className="faq-a" id={id} ref={panel} role="region">
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function Accordion({ items, idPrefix = 'faq' }) {
  return items.map((it, i) => <Item key={it.q} {...it} id={`${idPrefix}-${i}`} />);
}
