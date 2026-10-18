'use client';
// Journal listing: category pills filter the articles; the newest one is featured.
import { useMemo, useState } from 'react';
import JournalCard from './JournalCard';

export default function BlogIndex({ posts }) {
  const categories = useMemo(() => ['All', ...Array.from(new Set(posts.map((p) => p.category)))], [posts]);
  const [cat, setCat] = useState('All');
  const list = cat === 'All' ? posts : posts.filter((p) => p.category === cat);
  const [first, ...rest] = list;

  return (
    <>
      <div className="filter-row" role="tablist" aria-label="Filter articles">
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
