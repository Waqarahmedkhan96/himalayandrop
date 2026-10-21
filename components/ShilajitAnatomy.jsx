'use client';
// "Inside every jar": scroll-driven scene. As you scroll, the product drops in
// from above, its lid comes down and closes, a large "SHILAJIT" fades in
// behind it, and what shilajit contains appears around it with icons.
// Tablet/desktop: the section is pinned and the scene follows the scroll.
// Phones: the same scene plays once when it scrolls into view.
import { useRef } from 'react';
import RealIcon from './RealIcon';
import { useLang } from './LangProvider';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { pdpText } from '@/lib/pdp';

const ICON = { fulvic: 'flask', minerals: 'crystal', humic: 'soil', dbp: 'molecule', amino: 'chain', origin: 'mountain' };
const FORMULA_P = {
  en: 'The shilajit in every serving, and what nature puts into it.',
  da: 'Shilajit i hver portion, og hvad naturen lægger i den.',
  de: 'Das Shilajit in jeder Portion, und was die Natur hineinlegt.',
  fr: 'Le shilajit de chaque portion, et ce que la nature y met.',
  es: 'El shilajit de cada porción, y lo que la naturaleza pone en él.',
  ar: 'الشيلاجيت في كل حصة، وما تضعه الطبيعة فيه.',
  ur: 'ہر خوراک میں شلاجیت، اور قدرت اس میں کیا رکھتی ہے۔',
};

// ── Product drawings: body and lid are separate so the lid can close. ──
function Defs() {
  return (
    <defs>
      <linearGradient id="an-gold" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#a87f3f" /><stop offset=".25" stopColor="#f3e2b6" /><stop offset=".5" stopColor="#cca25e" /><stop offset=".78" stopColor="#e8cf96" /><stop offset="1" stopColor="#8e6a33" /></linearGradient>
      <linearGradient id="an-silver" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#7d838c" /><stop offset=".3" stopColor="#f3f4f6" /><stop offset=".55" stopColor="#b9bec6" /><stop offset=".8" stopColor="#e9ebee" /><stop offset="1" stopColor="#6f757e" /></linearGradient>
      <linearGradient id="an-glass" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#1c0408" /><stop offset=".2" stopColor="#6a1422" /><stop offset=".45" stopColor="#40010a" /><stop offset=".8" stopColor="#2a0107" /><stop offset="1" stopColor="#120204" /></linearGradient>
      <linearGradient id="an-amber" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#3d1b07" /><stop offset=".3" stopColor="#a8621f" /><stop offset=".6" stopColor="#6e3510" /><stop offset="1" stopColor="#2a1004" /></linearGradient>
      <linearGradient id="an-cream" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#d9cbb6" /><stop offset=".3" stopColor="#fffdf8" /><stop offset=".7" stopColor="#f3e8d6" /><stop offset="1" stopColor="#cbbca5" /></linearGradient>
      <linearGradient id="an-white" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#cfcac2" /><stop offset=".35" stopColor="#ffffff" /><stop offset=".7" stopColor="#f1ede7" /><stop offset="1" stopColor="#c4beb4" /></linearGradient>
      <linearGradient id="an-maroon" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#40010a" /><stop offset=".5" stopColor="#6a1422" /><stop offset="1" stopColor="#40010a" /></linearGradient>
      <pattern id="an-ridges" width="7" height="10" patternUnits="userSpaceOnUse"><rect width="3.5" height="10" fill="#000" opacity=".12" /></pattern>
      <radialGradient id="an-floor" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#2a0107" stopOpacity=".45" /><stop offset="1" stopColor="#2a0107" stopOpacity="0" /></radialGradient>
    </defs>
  );
}

function Label({ x, w, y, h, title, sub, dark }) {
  const c = dark ? '#f7f1e8' : '#580f1b';
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={dark ? 'url(#an-maroon)' : 'url(#an-cream)'} opacity={dark ? 0.9 : 1} />
      <path d={`M${x + 18} ${y + h - 16} l14 -14 l8 8 l8 -10 l14 16`} fill="none" stroke="#cca25e" strokeWidth="1.4" />
      <text x={x + w / 2} y={y + 24} textAnchor="middle" fontSize="9.5" letterSpacing="2.5" fontWeight="700" fill="#cca25e" fontFamily="system-ui, sans-serif">HIMALAYAN DROP®</text>
      <text x={x + w / 2} y={y + h / 2 + 8} textAnchor="middle" fontSize="23" fill={c} fontFamily="Georgia, 'Playfair Display', serif">{title}</text>
      <text x={x + w / 2} y={y + h / 2 + 28} textAnchor="middle" fontSize="8.5" letterSpacing="2.8" fill="#cca25e" fontFamily="system-ui, sans-serif">{sub}</text>
    </g>
  );
}

function Vessel({ kind, silver }) {
  const lidFill = silver || kind === 'gummies' ? 'url(#an-silver)' : 'url(#an-gold)';
  let body;
  let lid;
  if (kind === 'gummies') {
    body = (
      <g>
        <path d="M70 128 H250 V378 C250 392 220 398 160 398 C100 398 70 392 70 378 Z" fill="url(#an-cream)" />
        <Label x={70} w={180} y={200} h={110} title="Gummies" sub="GOLD EDITION · STRAWBERRY" />
        <circle cx="160" cy="342" r="15" fill="#c4202e" /><circle cx="138" cy="348" r="11" fill="#a3141f" /><circle cx="182" cy="349" r="11" fill="#d9333c" />
        <path d="M82 140 V380" stroke="#fff" strokeWidth="5" opacity=".5" strokeLinecap="round" />
      </g>
    );
    lid = (
      <g>
        <path d="M62 96 H258 V130 C258 138 214 142 160 142 C106 142 62 138 62 130 Z" fill={lidFill} />
        <ellipse cx="160" cy="96" rx="98" ry="14" fill={lidFill} />
        <ellipse cx="160" cy="94" rx="80" ry="8" fill="#fff" opacity=".45" />
      </g>
    );
  } else if (kind === 'drops') {
    body = (
      <g>
        <path d="M134 150 H186 V186 C214 192 228 206 228 232 V378 C228 392 216 398 200 398 H120 C104 398 92 392 92 378 V232 C92 206 106 192 134 186 Z" fill="url(#an-amber)" />
        <Label x={92} w={136} y={250} h={100} title="Drops" sub="ELDERBERRY · 30 ML" />
        <path d="M104 236 V380" stroke="#fff" strokeWidth="5" opacity=".3" strokeLinecap="round" />
      </g>
    );
    lid = (
      <g>
        <rect x="126" y="112" width="68" height="44" rx="6" fill="url(#an-gold)" />
        <rect x="126" y="112" width="68" height="44" rx="6" fill="url(#an-ridges)" />
        <path d="M140 112 C138 70 142 42 160 42 C178 42 182 70 180 112 Z" fill="url(#an-white)" />
        <path d="M150 60 C151 52 154 48 158 47" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
    );
  } else if (kind === 'capsules') {
    body = (
      <g>
        <path d="M112 150 H208 V170 C232 176 244 190 244 214 V376 C244 390 232 398 216 398 H104 C88 398 76 390 76 376 V214 C76 190 88 176 112 170 Z" fill="url(#an-white)" />
        <Label x={76} w={168} y={232} h={118} title="Capsules" sub="DAILY WELLNESS · 60" dark />
        <path d="M90 220 V380" stroke="#fff" strokeWidth="6" opacity=".7" strokeLinecap="round" />
      </g>
    );
    lid = (
      <g>
        <rect x="102" y="100" width="116" height="56" rx="10" fill="url(#an-white)" />
        <rect x="102" y="100" width="116" height="56" rx="10" fill="url(#an-ridges)" />
        <rect x="102" y="100" width="116" height="9" rx="4" fill="url(#an-gold)" />
      </g>
    );
  } else {
    body = (
      <g>
        <rect x="64" y="150" width="192" height="26" rx="6" fill="#1c0408" />
        <path d="M50 172 H270 V364 C270 386 252 398 228 398 H92 C68 398 50 386 50 364 Z" fill="url(#an-glass)" />
        <text x="160" y="228" textAnchor="middle" fontSize="10" letterSpacing="2.5" fontWeight="700" fill="#cca25e" fontFamily="system-ui, sans-serif">HIMALAYAN DROP®</text>
        <text x="160" y="276" textAnchor="middle" fontSize="34" fill="#f7f1e8" fontFamily="Georgia, 'Playfair Display', serif">Shilajit Resin</text>
        <text x="160" y="304" textAnchor="middle" fontSize="10" letterSpacing="4" fill={silver ? '#d9dde2' : '#cca25e'} fontFamily="system-ui, sans-serif">{silver ? 'SILVER EDITION' : 'GOLD EDITION'} · 30 G</text>
        <path d="M92 352 l26 -26 l14 14 l16 -20 l28 32 l18 -16 l24 16" fill="none" stroke={silver ? '#c9ced5' : '#cca25e'} strokeWidth="1.5" opacity=".9" />
        <path d="M70 186 V370" stroke="#fff" strokeWidth="6" opacity=".14" strokeLinecap="round" />
        <path d="M250 196 V350" stroke="#fff" strokeWidth="3" opacity=".08" strokeLinecap="round" />
      </g>
    );
    lid = (
      <g>
        <rect x="44" y="92" width="232" height="66" rx="14" fill={lidFill} />
        <rect x="44" y="92" width="232" height="66" rx="14" fill="url(#an-ridges)" />
        <rect x="44" y="92" width="232" height="12" rx="8" fill="#fff" opacity=".35" />
        <rect x="44" y="146" width="232" height="12" rx="6" fill="#000" opacity=".18" />
      </g>
    );
  }
  return (
    <svg className="an-vessel" viewBox="0 0 320 420" role="img" aria-hidden="true">
      <Defs />
      <ellipse className="an-floor" cx="160" cy="404" rx="130" ry="14" fill="url(#an-floor)" />
      <g className="an-body">{body}</g>
      <g className="an-lid">{lid}</g>
    </svg>
  );
}

export default function ShilajitAnatomy({ product, kind }) {
  const lang = useLang();
  const t = pdpText(lang).inside;
  const root = useRef(null);
  const items = t.resin;
  const silver = /silver/.test(product?.handle || '');

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const build = (tl) =>
        tl
          .from('.an-body', { yPercent: -150, rotate: -8, transformOrigin: '50% 100%', duration: 1, ease: 'power3.out' })
          .from('.an-floor', { scale: 0.2, opacity: 0, transformOrigin: '50% 50%', duration: 1 }, '<')
          .from('.an-lid', { y: -320, rotate: -24, transformOrigin: '50% 50%', duration: 0.9, ease: 'power2.out' }, 0.75)
          .to('.an-lid', { scaleX: 0.97, duration: 0.12, yoyo: true, repeat: 3, ease: 'sine.inOut', transformOrigin: '50% 50%' }, '>-0.05')
          .from('.an-word', { opacity: 0, scale: 1.12, letterSpacing: '0.4em', duration: 0.8, ease: 'power2.out' }, 1.2)
          .from('.an-item', { opacity: 0, scale: 0.6, y: 30, stagger: 0.1, duration: 0.6, ease: 'back.out(1.6)' }, 1.45)
          .from('.an-line', { scaleX: 0, stagger: 0.1, duration: 0.5 }, 1.55);
      const mm = gsap.matchMedia();
      mm.add('(min-width: 768px)', () => {
        build(gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top top', end: '+=150%', pin: true, scrub: 0.7, anticipatePin: 1 } }));
      });
      mm.add('(max-width: 767px)', () => {
        build(gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top 65%', once: true }, defaults: { duration: 0.8 } }).timeScale(1.4));
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section className="an-section" ref={root}>
      <div className="an-stage container">
        <div className="an-head">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>{t.h} <em className="gold-text">{t.hg[kind] || t.hg.resin}</em></h2>
          <p>{kind === 'resin' ? t.p.resin : FORMULA_P[lang] || FORMULA_P.en}</p>
        </div>
        <div className="an-scene">
          <span className="an-word" aria-hidden="true">SHILAJIT</span>
          <div className="an-center"><Vessel kind={kind} silver={silver} /></div>
          <ul className="an-items">
            {items.map((it, i) => (
              <li className={`an-item p${i}`} key={it.k}>
                <span className="an-line" aria-hidden="true" />
                <span className="an-ico"><RealIcon name={ICON[it.k] || 'flask'} size={50} /></span>
                <span className="an-txt">
                  {it.v && <b><bdi>{it.v}</bdi></b>}
                  <strong>{it.t}</strong>
                  <small>{it.d}</small>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
