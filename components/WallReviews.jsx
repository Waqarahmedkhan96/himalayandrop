'use client';
// "Wall of Wellness": the reviews page. A masonry wall of creator posts and customer reviews,
// then the newsletter signup. All cards are SAMPLE until real, consented posts and verified
// reviews exist (lib/wall.js, SAMPLE flag).
import { useState } from 'react';
import Newsletter from './Newsletter';
import { Stars } from './Icons';
import { useLang } from './LangProvider';
import RatingLine from './RatingLine';
import VideoReels from './VideoReels';
import { pdpText, mediaDir } from '@/lib/pdp';
import { WALL, PEOPLE, PEOPLE_QUOTES, SAMPLE } from '@/lib/wall';
import { RATING, RATING_COPY } from '@/lib/rating';

// Filter chips by product. Cards are sorted into a product by position (see lib/wall.js PEOPLE and
// lib/reviews.js, whose order is the same in every language).
const KEYS = ['all', 'resin', 'gummies', 'drops', 'capsules'];
const LABELS = {
  en: ['All', 'Resin', 'Gummies', 'Drops', 'Capsules'],
  da: ['Alle', 'Resin', 'Vingummi', 'Dråber', 'Kapsler'],
  de: ['Alle', 'Harz', 'Gummies', 'Tropfen', 'Kapseln'],
  fr: ['Tous', 'Résine', 'Gommes', 'Gouttes', 'Gélules'],
  es: ['Todos', 'Resina', 'Gominolas', 'Gotas', 'Cápsulas'],
  ar: ['الكل', 'الراتنج', 'علكات', 'قطرات', 'كبسولات'],
  ur: ['سب', 'ریزن', 'گمیز', 'قطرے', 'کیپسولز'],
};
const REVIEW_KIND = ['resin', 'gummies', 'resin', 'drops', 'resin', 'gummies'];
const personKind = (p) => (/gumm/i.test(p.product) ? 'gummies' : /drop/i.test(p.product) ? 'drops' : /capsul/i.test(p.product) ? 'capsules' : 'resin');

export default function WallReviews({ reviews = [] }) {
  const lang = useLang();
  const w = WALL[lang] || WALL.en;
  const c = RATING_COPY[lang] || RATING_COPY.en;
  const rv = pdpText(lang).reviews;
  const DIRS = ['gold-resin', 'gummies', 'drops', 'capsules', 'silver-resin', 'gold-resin'];
  const DUR = ['0:42', '1:05', '0:38', '0:51', '0:47', '0:56'];
  const clips = rv.caps.map((cap, i) => {
    const d = mediaDir(DIRS[i % DIRS.length]);
    return { cap, dur: DUR[i], src: `${d}/video-${i + 1}.mp4`, poster: `${d}/video-${i + 1}.webp` };
  });
  const quotes = [...(PEOPLE_QUOTES[lang] || PEOPLE_QUOTES.en), ...w.quotes];

  const [f, setF] = useState('all');
  const cards = [];
  PEOPLE.forEach((p, i) => {
    cards.push({ kind: 'creator', p, q: quotes[i], k: personKind(p) });
    if (reviews[i]) cards.push({ kind: 'review', r: reviews[i], k: REVIEW_KIND[i] || 'resin' });
  });

  const labels = LABELS[lang] || LABELS.en;
  const count = (k) => (k === 'all' ? cards.length : cards.filter((x) => x.k === k).length);
  const shown = f === 'all' ? cards : cards.filter((x) => x.k === f);

  return (
    <div className="wl wl-wall">
      <section className="wl-bhero">
        <p className="wl-eyebrow">{w.eyebrow}</p>
        <h1>{w.title}</h1>
        <p className="wl-lead">{w.sub}</p>
        <div className="wl-wall-sum">
          <RatingLine />
          <span>{w.based(RATING.count)}</span>
        </div>
        {SAMPLE && <span className="wl-sample">{w.sample}</span>}
      </section>

      <section className="wl-videos" aria-label={rv.videosH}>
        <h2>{rv.videosH}</h2>
        <VideoReels items={clips} sample={c.sample} play={rv.play} />
      </section>

      <div className="wl-filters" role="group" aria-label={labels[0]}>
        {KEYS.map((k, i) => count(k) > 0 && (
          <button key={k} type="button" aria-pressed={f === k} onClick={() => setF(k)}>
            {labels[i]} <span>{count(k)}</span>
          </button>
        ))}
      </div>

      <section className="wl-wall-grid" aria-label={w.title}>
        {shown.map((x, i) => x.kind === 'creator' ? (
          <figure key={`c${i}`} className={`wl-wcard creator t${i % 3}`}>
            <div className="wl-person-top">
              <span className="wl-avatar" style={{ background: x.p.hue }} aria-hidden="true">{x.p.name.charAt(0)}</span>
              <div><strong>{x.p.name}</strong><span dir="ltr">{x.p.handle}</span></div>
            </div>
            <blockquote>{x.q}</blockquote>
            <figcaption>{x.p.product} · {x.p.city}{SAMPLE && <em className="wl-sample sm">{c.sample}</em>}</figcaption>
          </figure>
        ) : (
          <figure key={`r${i}`} className="wl-wcard rvw">
            <Stars rating={x.r.rating} />
            <blockquote>{x.r.text}</blockquote>
            <figcaption><strong>{x.r.name}</strong> {x.r.place} · {x.r.product}{x.r.sample && <em className="wl-sample sm">{c.sample}</em>}</figcaption>
          </figure>
        ))}
      </section>

      <div className="wl-news"><Newsletter /></div>
    </div>
  );
}
