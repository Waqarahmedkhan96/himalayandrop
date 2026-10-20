'use client';
// Luxury segmented switcher: Resin / Gummies / Drops, with product thumbnails.
import { kinds } from '@/lib/benefits';

export default function KindTabs({ active, onChange, label }) {
  return (
    <div className="kind-tabs" role="tablist" aria-label={label}>
      {kinds.map((k) => (
        <button
          key={k.key}
          type="button"
          role="tab"
          aria-selected={active === k.key}
          data-tab-btn={k.key}
          className={active === k.key ? 'on' : ''}
          onClick={() => onChange(k.key)}
        >
          <span className="kind-thumb"><img src={k.thumb} alt="" /></span>
          {k.label}
        </button>
      ))}
    </div>
  );
}
