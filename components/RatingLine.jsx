'use client';
// Star rating line (stars, 4.7, "570 reviews", Sample tag). Links to the reviews page.
// Numbers live in lib/rating.js. While RATING.verified is false a "Sample" tag shows.
import Link from './LLink';
import { Stars } from './Icons';
import { useLang } from './LangProvider';
import { RATING, RATING_COPY } from '@/lib/rating';

const COMMA = ['da', 'de', 'fr', 'es'];

export default function RatingLine({ className = '' }) {
  const lang = useLang();
  const c = RATING_COPY[lang] || RATING_COPY.en;
  const value = COMMA.includes(lang) ? String(RATING.value).replace('.', ',') : String(RATING.value);
  return (
    <Link href="/reviews/" className={`rl ${className}`}>
      <Stars rating={5} />
      <strong>{value}</strong>
      <span>{RATING.count} {c.reviews}</span>
      {!RATING.verified && <em className="rl-sample">{c.sample}</em>}
    </Link>
  );
}
