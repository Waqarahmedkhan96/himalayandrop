import { Stars } from './Icons';

export default function ReviewCard({ r }) {
  return (
    <figure className="review">
      <div className="review-top">
        <Stars rating={r.rating} />
        {r.sample && <span className="sample-tag">Sample</span>}
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
