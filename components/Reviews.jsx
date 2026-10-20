'use client';
// Reviews marquee: cards glide right-to-left forever. Hover pauses it (desktop),
// tap toggles pause (phones), and the button opens the full reviews page.
import { useState } from 'react';
import Link from './LLink';
import { useLang } from './LangProvider';
import Reveal from './Reveal';
import ReviewCard from './ReviewCard';
import { Arrow } from './Arrow';
import { getReviews } from '@/lib/reviews';

const T = {
  en: { eyebrow: 'Reviews', a: 'In their', b: 'own words.', note: 'Sample reviews shown for layout. Real customer reviews appear here after launch.', play: 'Play reviews', pause: 'Pause reviews', all: 'Read all reviews' },
  da: { eyebrow: 'Anmeldelser', a: 'Med deres', b: 'egne ord.', note: 'Eksempler på anmeldelser vist til layout. Rigtige kundeanmeldelser vises her efter lanceringen.', play: 'Afspil anmeldelser', pause: 'Sæt anmeldelser på pause', all: 'Læs alle anmeldelser' },
};

export default function Reviews() {
  const [paused, setPaused] = useState(false);
  const lang = useLang();
  const t = T[lang];
  const reviews = getReviews(lang);
  const isSample = reviews.some((r) => r.sample);

  return (
    <Reveal as="section" id="reviews" className="section reviews-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" data-reveal>{t.eyebrow}</span>
          <h2 data-reveal="lines">
            <span className="line"><span>{t.a} <em className="gold-text">{t.b}</em></span></span>
          </h2>
          {isSample && (
            <p data-reveal className="sample-note">{t.note}</p>
          )}
        </div>
      </div>

      <div
        className={`marquee ${paused ? 'paused' : ''}`}
        onClick={() => setPaused((p) => !p)}
        data-reveal
      >
        <div className="marquee-track">
          {[...reviews, ...reviews].map((r, i) => (
            <div className="marquee-item" key={i} aria-hidden={i >= reviews.length}>
              <ReviewCard r={r} />
            </div>
          ))}
        </div>
      </div>

      <div className="container reviews-actions" data-reveal>
        <button type="button" className="btn ghost small" onClick={() => setPaused((p) => !p)} aria-pressed={paused}>
          {paused ? t.play : t.pause}
        </button>
        <Link href="/reviews/" className="btn">
          {t.all} <Arrow />
        </Link>
      </div>
    </Reveal>
  );
}
