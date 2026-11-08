'use client';
// Flip cards for the Ingredients page. Each card shows a photo, the name and a short line; the
// "+" button turns the card over (left to right) to the longer text, the amounts per product and
// any authorised wording. Data is prepared on the server in views/ingredients.js.
import { useState } from 'react';

function Card({ c, t }) {
  const [flip, setFlip] = useState(false);
  const logo = c.photo.startsWith('/images/jars');
  return (
    <article className={`ig-card ${flip ? 'is-flip' : ''}`}>
      <div className="ig-inner">
        <div className="ig-face ig-front" inert={flip}>
          <div className={`ig-photo ${logo ? 'is-pack' : ''} ig-p-${c.key}`}>
            <img src={c.photo} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="ig-body">
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            {c.value && <p className="ig-value"><strong>{c.value}</strong></p>}
          </div>
          <button type="button" className="ig-btn" onClick={() => setFlip(true)} aria-label={`${t.more}: ${c.title}`} aria-expanded={flip}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M12 6v12M6 12h12" /></svg>
          </button>
        </div>

        <div className="ig-face ig-back" inert={!flip}>
          <div className="ig-scroll" tabIndex={flip ? 0 : -1}>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            {c.more && <p>{c.more}</p>}
            {c.rows.length > 0 && (
              <dl className="ig-rows" aria-label={t.perServing}>
                <dt className="ig-rows-h">{t.perServing}</dt>
                {c.rows.map(([k, v]) => (
                  <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
            )}
            {c.claims.length > 0 && (
              <ul className="ig-claims">
                {c.claims.map((x) => <li key={x}>{x}</li>)}
              </ul>
            )}
          </div>
          <button type="button" className="ig-btn" onClick={() => setFlip(false)} aria-label={`${t.back}: ${c.title}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
          </button>
        </div>
      </div>
    </article>
  );
}

export default function IngredientCards({ cards, t }) {
  return (
    <div className="ig-grid">
      {cards.map((c) => <Card key={c.key} c={c} t={t} />)}
    </div>
  );
}
