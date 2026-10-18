'use client';
// Reviews marquee: cards glide right-to-left forever. Hover pauses it (desktop),
// tap toggles pause (phones), and the button opens the full reviews page.
import { useState } from 'react';
import Link from 'next/link';
import Reveal from './Reveal';
import ReviewCard from './ReviewCard';
import { Arrow } from './Arrow';
import { reviews } from '@/lib/reviews';

export default function Reviews() {
  const [paused, setPaused] = useState(false);
  const isSample = reviews.some((r) => r.sample);

  return (
    <Reveal as="section" id="reviews" className="section reviews-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" data-reveal>Reviews</span>
          <h2 data-reveal="lines">
            <span className="line"><span>In their <em className="gold-text">own words.</em></span></span>
          </h2>
          {isSample && (
            <p data-reveal className="sample-note">Sample reviews shown for layout. Real customer reviews appear here after launch.</p>
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
          {paused ? 'Play reviews' : 'Pause reviews'}
        </button>
        <Link href="/reviews/" className="btn">
          Read all reviews <Arrow />
        </Link>
      </div>
    </Reveal>
  );
}
