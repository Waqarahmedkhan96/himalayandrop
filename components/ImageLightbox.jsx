'use client';
// Full-screen product image viewer: arrows, swipe, keyboard, Escape to close.
import { useEffect, useRef } from 'react';

export default function ImageLightbox({ slides, index, onIndex, onClose, labels }) {
  const box = useRef(null);
  const touch = useRef(null);
  const n = slides.length;
  const go = (d) => onIndex((index + d + n) % n);

  useEffect(() => {
    window.__lenis?.stop();
    const prev = document.activeElement;
    box.current?.querySelector('.lb-x')?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'Tab' && box.current) {
        const f = box.current.querySelectorAll('button');
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); window.__lenis?.start(); prev?.focus?.(); };
  });

  const s = slides[index];
  return (
    <div
      className="lb"
      role="dialog"
      aria-modal="true"
      aria-label={labels.zoom}
      ref={box}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
      onTouchStart={(e) => { touch.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touch.current == null) return;
        const dx = e.changedTouches[0].clientX - touch.current;
        touch.current = null;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
      }}
    >
      <button type="button" className="lb-x" onClick={onClose} aria-label={labels.close}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
      </button>
      {n > 1 && (
        <button type="button" className="lb-nav lb-prev" onClick={() => go(-1)} aria-label={labels.prev}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 6-6 6 6 6" /></svg>
        </button>
      )}
      <img key={s.src} src={s.src} alt={s.alt || ''} className="lb-img" />
      {n > 1 && (
        <button type="button" className="lb-nav lb-next" onClick={() => go(1)} aria-label={labels.next}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6" /></svg>
        </button>
      )}
      <span className="lb-count" dir="ltr">{index + 1} / {n}</span>
    </div>
  );
}
