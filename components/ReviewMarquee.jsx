'use client';
// Small text-review carousel: cards glide right to left. Hovering stops it and it restarts when the pointer
// leaves; a tap or click also stops it (until the next tap, or the pointer moves away). The button opens
// the full reviews page.
import { useEffect, useRef, useState } from 'react';
import Link from './LLink';
import { Stars } from './Icons';
import { Arrow } from './Arrow';
import { useLang } from './LangProvider';

const T = {
  en: { all: 'Read all reviews', sample: 'Sample', label: 'Customer reviews' },
  da: { all: 'Læs alle anmeldelser', sample: 'Eksempel', label: 'Kundeanmeldelser' },
  de: { all: 'Alle Bewertungen lesen', sample: 'Beispiel', label: 'Kundenbewertungen' },
  fr: { all: 'Lire tous les avis', sample: 'Exemple', label: 'Avis clients' },
  es: { all: 'Leer todas las opiniones', sample: 'Ejemplo', label: 'Opiniones de clientes' },
  ar: { all: 'اقرأ جميع الآراء', sample: 'مثال', label: 'آراء العملاء' },
};

export default function ReviewMarquee({ reviews }) {
  const lang = useLang();
  const t = T[lang] || T.en;
  const [tapped, setTapped] = useState(false);
  const box = useRef(null);
  // Enough copies to fill a wide screen, in two identical halves so the loop has no jump.
  const half = [...reviews, ...reviews];

  useEffect(() => {
    if (!tapped) return;
    const away = (e) => { if (box.current && !box.current.contains(e.target)) setTapped(false); };
    document.addEventListener('pointerdown', away);
    return () => document.removeEventListener('pointerdown', away);
  }, [tapped]);

  return (
    <div className="rm">
      <div
        className={`rm-view${tapped ? ' is-tapped' : ''}`}
        ref={box}
        role="region"
        aria-label={t.label}
        onClick={() => setTapped((v) => !v)}
        onMouseLeave={() => setTapped(false)}
      >
        <div className="rm-track">
          {[0, 1].map((n) => (
            <div className="rm-half" key={n} aria-hidden={n === 1}>
              {half.map((r, i) => (
                <figure className="rm-card" key={i}>
                  <div className="rm-top"><Stars rating={r.rating} />{r.sample && <span className="sample-tag">{t.sample}</span>}</div>
                  <blockquote>{r.text}</blockquote>
                  <figcaption><span className="avatar" aria-hidden="true">{r.name.charAt(0)}</span><span><strong>{r.name}</strong><span className="meta">{r.place}</span></span></figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="rm-act">
        <Link href="/reviews/" className="btn small">{t.all} <Arrow size={14} /></Link>
      </div>
    </div>
  );
}
