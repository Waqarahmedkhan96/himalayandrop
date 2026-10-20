'use client';
import Link from './LLink';
import { useLang } from './LangProvider';

// Pill shortcuts under the hero. They scroll sideways on phones.
const LABELS_DA = { 'Shilajit resin': 'Shilajit resin', Gummies: 'Vingummi', Drops: 'Dråber', 'All products': 'Alle produkter', 'Lab results': 'Laboratorietest' };
const items = [
  { label: 'Shilajit resin', href: '/products/shilajit-gold-resin/', img: '/images/pillar-resin.webp' },
  { label: 'Gummies', href: '/#gummies', img: '/images/pillar-approach.webp' },
  { label: 'Drops', href: '/products/shilajit-drops/', img: '/images/card-drops.webp' },
  { label: 'All products', href: '/shop/', img: '/images/pillar-ritual.webp' },
  { label: 'Lab results', href: '/#certifications', icon: true },
];

export default function QuickLinks() {
  const lang = useLang();
  return (
    <nav className="quick" aria-label={lang === 'da' ? 'Genveje' : 'Shortcuts'}>
      <div className="quick-row">
        {items.map((it) => (
          <Link key={it.label} href={it.href}>
            <span className="qi">
              {it.icon ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M9 3h6M10 3v6L5 19a1.5 1.5 0 0 0 1.3 2h11.4a1.5 1.5 0 0 0 1.3-2l-5-10V3" />
                </svg>
              ) : (
                <img src={it.img} alt="" width="34" height="34" loading="lazy" />
              )}
            </span>
            {lang === 'da' ? LABELS_DA[it.label] : it.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
