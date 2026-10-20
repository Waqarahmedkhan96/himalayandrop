'use client';
// Full FAQ with category pills.
import { useState } from 'react';
import Accordion from './Accordion';
import { useLang } from './LangProvider';

const W = {
  en: { all: 'All', label: 'FAQ topics' },
  da: { all: 'Alle', label: 'Emner' },
  de: { all: 'Alle', label: 'Themen' },
  fr: { all: 'Tous', label: 'Thèmes' },
  es: { all: 'Todos', label: 'Temas' },
  ar: { all: 'الكل', label: 'المواضيع' },
  ur: { all: 'سب', label: 'موضوعات' },
};

export default function FaqBrowser({ groups }) {
  const w = W[useLang()] || W.en;
  const ALL = w.all;
  const names = [ALL, ...groups.map((g) => g.title)];
  const [cat, setCat] = useState(ALL);
  return (
    <>
      <div className="filter-row" role="tablist" aria-label={w.label}>
        {names.map((n) => (
          <button key={n} type="button" role="tab" aria-selected={cat === n} className={cat === n ? 'on' : ''} onClick={() => setCat(n)}>
            {n}
          </button>
        ))}
      </div>
      {groups.map((g, gi) => (
        <div className="faq-group" key={g.title} hidden={cat !== ALL && cat !== g.title} data-group={g.title}>
          <h3>{g.title}</h3>
          <div className="faq-list">
            <Accordion items={g.items} idPrefix={`faq${gi}`} />
          </div>
        </div>
      ))}
    </>
  );
}
