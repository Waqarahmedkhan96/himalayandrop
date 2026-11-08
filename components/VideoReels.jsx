'use client';
// Video review carousel: a row of rounded 9:16 cards that scrolls sideways (swipe on phones and
// tablets, arrow buttons with a mouse). Tapping or hovering a card plays its muted clip inline.
// SAMPLE clips made from product photos: replace with real customer videos before launch.
import { useRef, useState, useCallback } from 'react';
import { Stars } from './Icons';
import { prefersReducedMotion } from '@/lib/gsap';

function Card({ item, sample, play, active, onPlay, onStop }) {
  const vid = useRef(null);
  const start = () => {
    onPlay();
    const v = vid.current;
    if (!v || prefersReducedMotion()) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  };
  const stop = () => { onStop(); vid.current?.pause(); };
  return (
    <li className={`vr-card ${active ? 'is-on' : ''}`} onMouseEnter={(e) => { if (window.matchMedia('(hover: hover)').matches) start(); }} onMouseLeave={stop}>
      <button type="button" className="vr-hit" aria-label={`${play}: ${item.cap}`} aria-pressed={active} onClick={() => (active ? stop() : start())} />
      <img src={item.poster} alt="" loading="lazy" width="540" height="960" />
      <video ref={vid} poster={item.poster} muted loop playsInline preload="none" aria-hidden="true">
        <source src={item.src.replace(/\.mp4$/, '.webm')} type="video/webm" />
        <source src={item.src} type="video/mp4" />
      </video>
      <span className="vr-tag">{sample}</span>
      <span className="vr-dur">{item.dur}</span>
      <span className="vr-cap">
        <strong>{item.cap}</strong>
        <Stars rating={5} />
      </span>
      <span className="vr-play" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>
      </span>
    </li>
  );
}

export default function VideoReels({ items, sample, play, prev = 'Previous', next = 'Next' }) {
  const row = useRef(null);
  const [on, setOn] = useState(-1);
  const go = useCallback((dir) => {
    const el = row.current;
    if (!el) return;
    const rtl = getComputedStyle(el).direction === 'rtl';
    el.scrollBy({ left: dir * (rtl ? -1 : 1) * el.clientWidth * 0.8, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  }, []);
  return (
    <div className="vr">
      <ul className="vr-row" ref={row} data-lenis-prevent="">
        {items.map((item, i) => (
          <Card key={item.cap + i} item={item} sample={sample} play={play} active={on === i}
            onPlay={() => setOn(i)} onStop={() => setOn((c) => (c === i ? -1 : c))} />
        ))}
      </ul>
      <div className="vr-nav" aria-hidden="false">
        <button type="button" className="vr-arrow" onClick={() => go(-1)} aria-label={prev}><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m15 5-7 7 7 7" /></svg></button>
        <button type="button" className="vr-arrow" onClick={() => go(1)} aria-label={next}><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m9 5 7 7-7 7" /></svg></button>
      </div>
    </div>
  );
}
