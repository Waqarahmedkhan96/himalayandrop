'use client';
import { Stars } from './Icons';
import { useLang } from './LangProvider';

export default function ReviewCard({ r }) {
  const lang = useLang();
  return (
    <figure className="review">
      <div className="review-top">
        <Stars rating={r.rating} />
        {r.sample && <span className="sample-tag">{lang === 'da' ? 'Eksempel' : 'Sample'}</span>}
      </div>
      <blockquote>{r.text}</blockquote>
      <figcaption>
        <span className="avatar" aria-hidden="true">{r.name.charAt(0)}</span>
        <span>
          <strong>{r.name}</strong>
          <span className="meta">{r.place} · {r.product}</span>
        </span>
      </figcaption>
    </figure>
  );
}
