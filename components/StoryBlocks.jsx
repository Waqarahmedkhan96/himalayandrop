'use client';
// Our Story page pieces: a manifesto whose words light up as you scroll, and a
// route line drawing itself from the Himalayas to Denmark.
import { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { useLang } from './LangProvider';

export function Manifesto({ text }) {
  const root = useRef(null);
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        '.mw',
        { opacity: 0.16 },
        { opacity: 1, stagger: 0.05, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top 75%', end: 'bottom 45%', scrub: 1 } }
      );
    },
    { scope: root }
  );
  return (
    <p className="manifesto" ref={root}>
      {text.split(' ').map((w, i) => (
        <span className="mw" key={i}>{w} </span>
      ))}
    </p>
  );
}

const MAP = {
  en: { route: 'A route from the Himalayas to Denmark', sourced: 'SOURCED ABOVE 5,000 M', dk: 'Denmark', packed: 'DESIGNED & PACKED' },
  da: { route: 'En rute fra bjergene til Danmark', sourced: 'HENTET OVER 5.000 M', dk: 'Danmark', packed: 'DESIGNET OG PAKKET' },
  de: { route: 'Eine Route vom Himalaya nach Dänemark', sourced: 'GEWONNEN ÜBER 5.000 M', dk: 'Dänemark', packed: 'GESTALTET & ABGEFÜLLT' },
  fr: { route: 'Une route de l’Himalaya au Danemark', sourced: 'RÉCOLTÉ AU-DESSUS DE 5 000 M', dk: 'Danemark', packed: 'CONÇU ET CONDITIONNÉ' },
  es: { route: 'Una ruta del Himalaya a Dinamarca', sourced: 'RECOLECTADO A MÁS DE 5.000 M', dk: 'Dinamarca', packed: 'DISEÑADO Y ENVASADO' },
  ar: { route: 'رحلة من الهيمالايا إلى الدنمارك', sourced: 'يُجمع فوق 5000 متر', dk: 'الدنمارك', packed: 'التصميم والتعبئة' },
  ur: { route: 'ہمالیہ سے ڈنمارک تک کا سفر', sourced: '5,000 میٹر سے بلند سے حاصل', dk: 'ڈنمارک', packed: 'ڈیزائن اور پیکنگ' },
};

export function Route() {
  const root = useRef(null);
  const m = MAP[useLang()] || MAP.en;
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const path = root.current.querySelector('.route-path');
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: `${len}`, strokeDashoffset: len });
      gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top 70%', once: true } })
        .from('.route-pin', { scale: 0, transformOrigin: 'center', stagger: 1.4, duration: 0.6, ease: 'back.out(3)' })
        .to(path, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut' }, 0.3)
        .from('.route-label', { opacity: 0, y: 10, stagger: 0.3, duration: 0.8 }, 0.4);
    },
    { scope: root }
  );
  return (
    <div className="route" ref={root}>
      <svg viewBox="0 0 600 300" role="img" aria-label={m.route}>
        <path d="M0 250 L60 210 L90 228 L140 170 L180 200 L210 150 L260 205 L300 190 L340 230 L600 230" fill="none" stroke="rgba(226,196,135,0.25)" strokeWidth="1.2" />
        <path className="route-path" d="M470 165 C 400 40, 200 30, 120 120" fill="none" stroke="#cca25e" strokeWidth="1.8" strokeDasharray="5 7" vectorEffect="non-scaling-stroke" />
        <g className="route-pin" transform="translate(470 170)">
          <circle r="18" fill="rgba(204,162,94,0.18)" /><circle r="7" fill="#eed9a6" />
        </g>
        <g className="route-pin" transform="translate(120 125)">
          <circle r="18" fill="rgba(204,162,94,0.18)" /><circle r="7" fill="#eed9a6" />
        </g>
        <g className="route-label">
          <text x="470" y="210" textAnchor="middle" fill="#f7f1e8" fontSize="18" fontFamily="Playfair Display Variable, Playfair Display, serif">Skardu</text>
          <text x="470" y="232" textAnchor="middle" fill="#e2c487" fontSize="11" fontWeight="700" letterSpacing="2" fontFamily="Manrope Variable, Manrope, sans-serif">{m.sourced}</text>
        </g>
        <g className="route-label">
          <text x="120" y="88" textAnchor="middle" fill="#f7f1e8" fontSize="18" fontFamily="Playfair Display Variable, Playfair Display, serif">{m.dk}</text>
          <text x="120" y="66" textAnchor="middle" fill="#e2c487" fontSize="11" fontWeight="700" letterSpacing="2" fontFamily="Manrope Variable, Manrope, sans-serif">{m.packed}</text>
        </g>
      </svg>
    </div>
  );
}
