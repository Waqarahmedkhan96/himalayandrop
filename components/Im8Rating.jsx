'use client';
// Star rating line for the hero and product pages (IM8 version). Numbers live
// in lib/im8-names.js. While RATING.verified is false a "Sample" tag shows.
import Link from './LLink';
import { Stars } from './Icons';
import { useLang } from './LangProvider';
import { RATING, RATING_COPY } from '@/lib/im8-names';

const COMMA = ['da', 'de', 'fr', 'es'];

export default function Im8Rating({ className = '' }) {
  const lang = useLang();
  const c = RATING_COPY[lang] || RATING_COPY.en;
  const value = COMMA.includes(lang) ? String(RATING.value).replace('.', ',') : String(RATING.value);
  return (
    <Link href="/reviews/" className={`im8-rating ${className}`}>
      <Stars rating={5} />
      <strong>{value}</strong>
      <span>{RATING.count} {c.reviews}</span>
      {!RATING.verified && <em className="im8-sample sm">{c.sample}</em>}
    </Link>
  );
}
