'use client';
// "From mountain to jar": a scroll-driven story. The card stays pinned (CSS sticky)
// while you scroll through a tall track; scroll progress decides which step is
// active. Each step has its own animated scene, and a gold rail shows progress.
import { useEffect, useRef, useState } from 'react';
import { useLang } from './LangProvider';

const stepsEn = [
  {
    key: 'harvest',
    eyebrow: 'Above 5,000 m',
    title: 'Collected by hand',
    text: 'High in the Himalayas, our harvesters climb to the rock faces above 5,000 metres and collect the shilajit-bearing stones by hand.',
    fact: 'Hand-harvested',
  },
  {
    key: 'break',
    eyebrow: 'Break & dissolve',
    title: 'Stone to liquid',
    text: 'The stones are broken down and soaked in pure water, until the resin dissolves and leaves the rock behind.',
    fact: 'Pure water only',
  },
  {
    key: 'filter',
    eyebrow: 'Purify',
    title: 'Filtered, again and again',
    text: 'The liquid is filtered several times, removing sand, stone and anything that does not belong in the resin.',
    fact: 'Multiple filtrations',
  },
  {
    key: 'sun',
    eyebrow: 'Up to 60 days',
    title: 'Slowly dried by the sun',
    text: 'The liquid rests in large UV-protected glass jars, set in steel bowls, and dries slowly in the sun. Depending on the weather, this takes up to 60 days.',
    fact: 'No heat, no hurry',
  },
  {
    key: 'lab',
    eyebrow: 'Every batch',
    title: 'Tested in the lab',
    text: 'Each batch is lab-tested for heavy metals and overall quality, and its fulvic acid percentage is measured before it is released.',
    fact: 'Report per batch',
  },
  {
    key: 'pack',
    eyebrow: 'Sealed for you',
    title: 'Packed in UV-protected glass',
    text: 'Finally, the resin is sealed in our premium UV-protected jars, so it reaches you exactly as it left the mountain.',
    fact: 'Ready for your ritual',
  },
];

const stepsDa = [
  { key: 'harvest', eyebrow: 'Over 5.000 m', title: 'Samlet med håndkraft', text: 'Højt oppe i bjergene klatrer vores høstfolk op til klippevæggene over 5.000 meter og samler de shilajit-holdige sten med hånden.', fact: 'Håndhøstet' },
  { key: 'break', eyebrow: 'Knus og opløs', title: 'Fra sten til væske', text: 'Stenene knuses og lægges i blød i rent vand, indtil resinen opløses og stenen bliver tilbage.', fact: 'Kun rent vand' },
  { key: 'filter', eyebrow: 'Rensning', title: 'Filtreret igen og igen', text: 'Væsken filtreres flere gange, så sand, sten og alt, der ikke hører til i resinen, fjernes.', fact: 'Flere filtreringer' },
  { key: 'sun', eyebrow: 'Op til 60 dage', title: 'Langsomt tørret af solen', text: 'Væsken hviler i store UV-beskyttede glaskrukker i stålskåle og tørrer langsomt i solen. Afhængigt af vejret tager det op til 60 dage.', fact: 'Ingen varme, ingen hast' },
  { key: 'lab', eyebrow: 'Hver batch', title: 'Testet i laboratoriet', text: 'Hver batch testes for tungmetaller og kvalitet, og indholdet af fulvinsyre måles, før den frigives.', fact: 'Rapport for hver batch' },
  { key: 'pack', eyebrow: 'Forseglet til dig', title: 'Pakket i UV-beskyttet glas', text: 'Til sidst forsegles resinen i vores UV-beskyttede krukker, så den når frem til dig, præcis som den forlod bjerget.', fact: 'Klar til dit ritual' },
];

const T = {
  en: { steps: stepsEn, alt: '5,000 m+', day: 'DAY', checks: ['Heavy metals', 'Quality', 'Fulvic acid %'], eyebrow: 'Our process', h: 'From mountain', hg: 'to jar.', lead: 'Six patient steps, and up to 60 days in the sun. Scroll to follow the journey.', within: 'The Mountain', withinG: 'within.' },
  da: { steps: stepsDa, alt: '5.000 m+', day: 'DAG', checks: ['Tungmetaller', 'Kvalitet', 'Fulvinsyre %'], eyebrow: 'Vores proces', h: 'Fra bjerg', hg: 'til krukke.', lead: 'Seks tålmodige trin og op til 60 dage i solen. Scroll og følg rejsen.', within: 'The Mountain', withinG: 'within.' },
};

function Scene({ k, day, t }) {
  switch (k) {
    case 'harvest':
      return (
        <svg viewBox="0 0 400 400" aria-hidden="true">
          <path className="sc-draw" d="M10 340 L120 190 L160 230 L230 90 L300 200 L330 170 L390 340" />
          <path className="sc-snow" d="M205 140 L230 90 L255 135 L240 128 L230 140 L218 130 Z" />
          <path className="sc-trail" d="M60 335 C120 320 140 290 170 270 S220 210 228 120" />
          <g className="sc-flag"><line x1="228" y1="118" x2="228" y2="70" /><path d="M228 70 L262 80 L228 92 Z" /></g>
          <text className="sc-label" x="270" y="66">{t.alt}</text>
          <g className="sc-stones">
            <path d="M120 345 l14 -12 l18 4 l6 14 l-16 8 l-18 -2 Z" />
            <path d="M168 350 l10 -14 l16 2 l8 12 l-14 8 Z" />
            <path d="M210 348 l12 -10 l14 6 l2 10 l-20 4 Z" />
          </g>
          <path className="sc-hand" d="M250 360 c0 -20 6 -34 14 -40 l6 -22 c2 -6 10 -4 9 3 l-3 16 l4 -26 c1 -7 10 -6 9 1 l-2 25 l3 -22 c1 -7 10 -6 9 1 l-2 24 l3 -16 c1 -6 9 -5 8 2 l-4 30 c-3 18 -10 24 -10 44" />
        </svg>
      );
    case 'break':
      return (
        <svg viewBox="0 0 400 400" aria-hidden="true">
          <g className="sc-shards">
            <path className="s1" d="M200 110 L150 140 L140 200 L200 200 Z" />
            <path className="s2" d="M200 110 L260 135 L265 200 L200 200 Z" />
            <path className="s3" d="M140 200 L150 255 L200 270 L200 200 Z" />
            <path className="s4" d="M265 200 L250 255 L200 270 L200 200 Z" />
          </g>
          <path className="sc-crack" d="M200 110 L205 150 L195 175 L203 200 L198 235 L200 270" />
          <g className="sc-waves">
            <path d="M-40 320 q20 -12 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" />
            <path d="M-40 345 q20 -12 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" />
          </g>
        </svg>
      );
    case 'filter':
      return (
        <svg viewBox="0 0 400 400" aria-hidden="true">
          <path className="sc-draw" d="M110 60 L290 60 L215 170 L215 210 L185 210 L185 170 Z" />
          <line className="sc-layer" x1="130" y1="85" x2="270" y2="85" />
          <line className="sc-layer" x1="150" y1="115" x2="250" y2="115" />
          <line className="sc-layer" x1="170" y1="145" x2="230" y2="145" />
          <g className="sc-drops">
            <circle cx="200" cy="225" r="5" /><circle cx="200" cy="225" r="5" /><circle cx="200" cy="225" r="5" />
          </g>
          <path className="sc-draw" d="M140 250 L140 350 Q140 365 155 365 L245 365 Q260 365 260 350 L260 250" />
          <rect className="sc-level" x="143" y="290" width="114" height="72" rx="10" />
        </svg>
      );
    case 'sun':
      return (
        <svg viewBox="0 0 400 400" aria-hidden="true">
          <g className="sc-sun">
            <circle cx="300" cy="90" r="34" />
            <g className="sc-rays">
              {Array.from({ length: 12 }).map((_, i) => (
                <line key={i} x1="300" y1="40" x2="300" y2="26" transform={`rotate(${i * 30} 300 90)`} />
              ))}
            </g>
          </g>
          <ellipse className="sc-bowl-back" cx="190" cy="320" rx="120" ry="22" />
          <path className="sc-jar" d="M130 170 Q130 150 150 150 L230 150 Q250 150 250 170 L250 310 Q250 325 235 325 L145 325 Q130 325 130 310 Z" />
          <rect className="sc-liquid" x="134" y="215" width="112" height="106" rx="10" />
          <rect className="sc-lid" x="142" y="134" width="96" height="18" rx="5" />
          <path className="sc-bowl" d="M70 320 Q80 370 190 372 Q300 370 310 320 Z" />
          <text className="sc-day" x="200" y="252" textAnchor="middle">{t.day} {day}</text>
        </svg>
      );
    case 'lab':
      return (
        <svg viewBox="0 0 400 400" aria-hidden="true">
          <path className="sc-draw" d="M95 80 L95 170 L45 300 Q38 330 70 330 L190 330 Q222 330 215 300 L165 170 L165 80" />
          <line className="sc-draw" x1="85" y1="80" x2="175" y2="80" />
          <path className="sc-flask-liquid" d="M70 250 L190 250 L208 300 Q212 322 190 322 L70 322 Q48 322 52 300 Z" />
          <g className="sc-bubbles"><circle cx="110" cy="300" r="5" /><circle cx="140" cy="310" r="4" /><circle cx="160" cy="295" r="3" /></g>
          <g className="sc-checks">
            {t.checks.map((c, i) => (
              <g key={c} className={`ck ck${i}`} transform={`translate(240 ${130 + i * 62})`}>
                <circle cx="14" cy="0" r="14" />
                <path d="M7 0 l5 5 l9 -10" />
                <text x="38" y="5">{c}</text>
              </g>
            ))}
          </g>
        </svg>
      );
    default:
      return (
        <div className="sc-pack">
          <span className="sc-pack-glow" />
          <img src="/images/cut-resin-box.webp" alt="" loading="lazy" />
        </div>
      );
  }
}

export default function Process() {
  const t = T[useLang()];
  const steps = t.steps;
  const track = useRef(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [inStep, setInStep] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = track.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / total));
      const f = Math.min(steps.length - 0.001, p * steps.length);
      setProgress(p);
      setActive(Math.floor(f));
      setInStep(f - Math.floor(f));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [steps.length]);

  const sunIndex = steps.findIndex((s) => s.key === 'sun');
  const day = active > sunIndex ? 60 : active < sunIndex ? 1 : Math.max(1, Math.round(inStep * 60));

  return (
    <section id="process" className="process">
      <div className="container process-intro">
        <span className="eyebrow">{t.eyebrow}</span>
        <h2>{t.h} <em className="gold-text">{t.hg}</em></h2>
        <p>{t.lead}</p>
      </div>

      <div className="process-track" ref={track} style={{ height: `${steps.length * 90 + 60}vh` }}>
        <div className="process-sticky">
          <div className="process-card">
            <div className="process-rail" aria-hidden="true">
              <span className="rail-fill" style={{ transform: `scaleY(${progress})` }} />
              {steps.map((s, i) => (
                <span key={s.key} className={`rail-dot ${i <= active ? 'on' : ''}`} style={{ top: `${(i / (steps.length - 1)) * 100}%` }} />
              ))}
            </div>

            <div className="process-stage">
              {steps.map((s, i) => (
                <div key={s.key} className={`scene scene-${s.key} ${i === active ? 'active' : i < active ? 'past' : ''}`}>
                  <Scene k={s.key} day={day} t={t} />
                </div>
              ))}
            </div>

            <div className="process-text">
              <span className="process-count">
                <b>{String(active + 1).padStart(2, '0')}</b> / {String(steps.length).padStart(2, '0')}
              </span>
              <div className="process-steps">
                {steps.map((s, i) => (
                  <div key={s.key} className={`pstep ${i === active ? 'active' : i < active ? 'past' : ''}`} aria-hidden={i !== active}>
                    <span className="eyebrow">{s.eyebrow}</span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <span className="pfact">{s.fact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="process-outro">
        <svg viewBox="0 0 220 60" width="220" height="60" fill="none" stroke="#cca25e" strokeWidth="1.4" aria-hidden="true">
          <path d="M0 58 L52 22 L70 34 L104 4 L136 36 L152 26 L220 58" />
        </svg>
        <p className="eyebrow">Himalayan Drop</p>
        <h2>{t.within} <em className="gold-text">{t.withinG}</em></h2>
      </div>

      {/* Screen readers and search engines get the full story as a plain list. */}
      <ol className="sr-only">
        {steps.map((s) => (
          <li key={s.key}>{s.title}: {s.text}</li>
        ))}
      </ol>
    </section>
  );
}
