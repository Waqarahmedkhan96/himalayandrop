'use client';
// Email signup. Right now it only shows a thank-you message.
// To collect emails for real, connect Klaviyo or Shopify's customer API in onSubmit.
import { useMemo, useState } from 'react';
import Reveal from './Reveal';
import { Arrow } from './Arrow';
import { ridgePoints, toLine } from '@/lib/mountains';

export default function Newsletter() {
  const [sent, setSent] = useState(false);
  const lines = useMemo(() => [
    toLine(ridgePoints(5, 300, 220, 4)),
    toLine(ridgePoints(9, 340, 160, 6)),
  ], []);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: send e.target.email.value to Klaviyo / Shopify here.
    setSent(true);
  };

  return (
    <Reveal as="section" className="newsletter">
      <div className="nl-card" data-reveal>
        <svg className="nl-lines" viewBox="0 0 1200 360" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
          {lines.map((d, i) => (
            <path key={i} d={d} fill="none" stroke="#e2c487" strokeWidth={i ? 1 : 1.4} vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
        <span className="eyebrow">Letters from Himalayan Drop</span>
        <h2>Stay close to <em className="gold-text">the source.</em></h2>
        <p className="lead">Launch news and stories, delivered thoughtfully.</p>
        {sent ? (
          <p className="nl-thanks" role="status">Thank you. We’ll be in touch.</p>
        ) : (
          <form className="nl-form" onSubmit={onSubmit}>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input id="email" name="email" type="email" required placeholder="Your email address" autoComplete="email" />
            <button className="btn gold" type="submit">Subscribe <Arrow size={14} /></button>
          </form>
        )}
        <p className="nl-note">By subscribing, you agree to receive our emails. Unsubscribe anytime.</p>
      </div>
    </Reveal>
  );
}
