'use client';
// Batch lookup: type the batch number printed on the jar to find its lab report.
// EXAMPLE data below; replace with your real batches and PDF links
// (or load them from Shopify metaobjects).
import { useState } from 'react';
import { Icon } from './Icons';

export const batches = [
  { id: 'HD-G-2611', product: 'Shilajit Gold Resin', tested: 'November 2026', lab: 'Independent EU laboratory', pdf: null },
  { id: 'HD-S-2611', product: 'Shilajit Silver Resin', tested: 'November 2026', lab: 'Independent EU laboratory', pdf: null },
  { id: 'HD-GU-2611', product: 'Shilajit Gummies', tested: 'November 2026', lab: 'Independent EU laboratory', pdf: null },
  { id: 'HD-D-2611', product: 'Shilajit Drops', tested: 'November 2026', lab: 'Independent EU laboratory', pdf: null },
];

const checks = ['Heavy metals', 'Quality', 'Fulvic acid %'];

export default function BatchLookup() {
  const [q, setQ] = useState('');
  const term = q.trim().toUpperCase();
  const list = term ? batches.filter((b) => b.id.includes(term) || b.product.toUpperCase().includes(term)) : batches;

  return (
    <div className="batch">
      <label className="batch-search">
        <Icon name="flask" size={20} />
        <span className="sr-only">Batch number</span>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Enter your batch number, e.g. HD-G-2611" />
      </label>
      <p className="page-notice">Example batches shown for layout. Real batch reports appear here at launch.</p>
      <div className="batch-list">
        {list.map((b) => (
          <div className="batch-row" key={b.id}>
            <div className="batch-id">
              <span className="eyebrow">Batch</span>
              <strong>{b.id}</strong>
            </div>
            <div className="batch-meta">
              <strong>{b.product}</strong>
              <span>Tested {b.tested} · {b.lab}</span>
            </div>
            <ul className="batch-checks">
              {checks.map((c) => <li key={c}><Icon name="shield" size={14} /> {c}</li>)}
            </ul>
            {b.pdf ? (
              <a className="btn small" href={b.pdf} target="_blank" rel="noreferrer">View report</a>
            ) : (
              <span className="btn small outline is-static">Report at launch</span>
            )}
          </div>
        ))}
        {list.length === 0 && <p className="batch-empty">No batch found. Check the number on the bottom of your jar, or <a href="/contact/">ask us</a>.</p>}
      </div>
    </div>
  );
}
