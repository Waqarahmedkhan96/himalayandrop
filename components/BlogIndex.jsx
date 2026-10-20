'use client';
// Journal listing: category pills filter the articles; the newest one is featured.
import { useMemo, useState } from 'react';
import JournalCard from './JournalCard';
import { useLang } from './LangProvider';

export default function BlogIndex({ posts }) {
  const da = useLang() === 'da';
  const ALL = da ? 'Alle' : 'All';
  const categories = useMemo(() => [ALL, ...Array.from(new Set(posts.map((p) => p.category)))], [posts, ALL]);
  const [cat, setCat] = useState(ALL);
  const list = cat === ALL ? posts : posts.filter((p) => p.category === cat);
  const [first, ...rest] = list;

  return (
    <>
      <div className="filter-row" role="tablist" aria-label={da ? 'Filtrer artikler' : 'Filter articles'}>
        {categories.map((c) => (
          <button key={c} type="button" role="tab" aria-selected={cat === c} className={cat === c ? 'on' : ''} onClick={() => setCat(c)}>
            {c}
          </button>
        ))}
      </div>
      {first && <JournalCard post={first} featured />}
      {rest.length > 0 && (
        <div className="journal-grid blog-grid">
          {rest.map((p) => (
            <JournalCard key={p.slug} post={p} />
          ))}
        </div>
      )}
    </>
  );
}
