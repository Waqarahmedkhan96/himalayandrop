'use client';
// "The Ritual Wall": IM8-style review page. A masonry wall of creator posts and
// customer reviews, then a community signup. All cards are SAMPLE until real,
// consented posts and verified reviews exist.
import Newsletter from './Newsletter';
import { Stars } from './Icons';
import { useLang } from './LangProvider';
import Im8Rating from './Im8Rating';
import { WALL, WALL_PEOPLE } from '@/lib/im8-wall';
import { IM8H, SAMPLE } from '@/lib/im8-home2';
import { RATING, RATING_COPY } from '@/lib/im8-names';

export default function Im8Reviews({ reviews = [] }) {
  const lang = useLang();
  const w = WALL[lang] || WALL.en;
  const h = IM8H[lang] || IM8H.en;
  const c = RATING_COPY[lang] || RATING_COPY.en;
  const quotes = [...h.people.quotes, ...w.quotes];

  const cards = [];
  WALL_PEOPLE.forEach((p, i) => {
    cards.push({ kind: 'creator', p, q: quotes[i] });
    if (reviews[i]) cards.push({ kind: 'review', r: reviews[i] });
  });

  return (
    <div className="im8 im8-wall">
      <section className="im8-bhero">
        <p className="im8-eyebrow">{w.eyebrow}</p>
        <h1>{w.title}</h1>
        <p className="im8-lead">{w.sub}</p>
        <div className="im8-wall-sum">
          <Im8Rating />
          <span>{w.based(RATING.count)}</span>
        </div>
        {SAMPLE && <span className="im8-sample">{w.sample}</span>}
      </section>

      <section className="im8-wall-grid" aria-label={w.title}>
        {cards.map((x, i) => x.kind === 'creator' ? (
          <figure key={`c${i}`} className={`im8-wcard creator t${i % 3}`}>
            <div className="im8-person-top">
              <span className="im8-avatar" style={{ background: x.p.hue }} aria-hidden="true">{x.p.name.charAt(0)}</span>
              <div><strong>{x.p.name}</strong><span dir="ltr">{x.p.handle}</span></div>
            </div>
            <blockquote>{x.q}</blockquote>
            <figcaption>{x.p.product} · {x.p.city}{SAMPLE && <em className="im8-sample sm">{c.sample}</em>}</figcaption>
          </figure>
        ) : (
          <figure key={`r${i}`} className="im8-wcard rvw">
            <Stars rating={x.r.rating} />
            <blockquote>{x.r.text}</blockquote>
            <figcaption><strong>{x.r.name}</strong> {x.r.place} · {x.r.product}{x.r.sample && <em className="im8-sample sm">{c.sample}</em>}</figcaption>
          </figure>
        ))}
      </section>

      <div className="im8-news"><Newsletter /></div>
    </div>
  );
}
