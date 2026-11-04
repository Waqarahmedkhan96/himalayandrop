'use client';
// "The Descent": a second layout for the process. The jar travels down a gold line from the rock at
// 5,000 m to your hands. Six slabs, giant outlined numerals, and each step slides in as you reach it.
import { useEffect, useRef, useState } from 'react';
import { useLang } from './LangProvider';
import { PROCESS_T } from './Process';

export default function ProcessDescent() {
  const t = PROCESS_T[useLang()];
  const steps = t.steps;
  const wrap = useRef(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return undefined;
    const items = el.querySelectorAll('.pd-step');
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); }), { threshold: 0.28 });
    items.forEach((i) => io.observe(i));
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight * 0.45;
      setP(Math.min(1, Math.max(0, (window.innerHeight * 0.55 - r.top) / total)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  return (
    <section className="pd" aria-labelledby="pd-title">
      <div className="pd-top">
        <span className="eyebrow">{t.alt}</span>
        <h2 id="pd-title">{t.h} <em className="gold-text">{t.hg}</em></h2>
      </div>
      <div className="pd-wrap" ref={wrap}>
        <div className="pd-line" aria-hidden="true">
          <span className="pd-fill" style={{ height: `${p * 100}%` }} />
          <img className="pd-jar" src="/images/jars/resin-gold.webp" alt="" width="64" height="64" style={{ top: `${p * 100}%` }} />
        </div>
        {steps.map((s, i) => (
          <article key={s.key} className={`pd-step ${i % 2 ? 'r' : 'l'}`}>
            <span className="pd-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            <span className="pd-dot" aria-hidden="true" />
            <div className="pd-card">
              <span className="eyebrow">{s.eyebrow}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="pfact">{s.fact}</span>
            </div>
          </article>
        ))}
      </div>
      <div className="pd-end">
        <h2>{t.within} <em className="gold-text">{t.withinG}</em></h2>
      </div>
    </section>
  );
}
