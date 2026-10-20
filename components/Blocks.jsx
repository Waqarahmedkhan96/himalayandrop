// Small shared building blocks for the inner pages, in the site's existing style.
import Link from './LLink';
import { Icon } from './Icons';
import { Arrow } from './Arrow';

export function SectionHead({ eyebrow, title, accent, lead, align = 'center' }) {
  return (
    <div className={`section-head ${align === 'left' ? 'left' : ''}`}>
      {eyebrow && <span className="eyebrow" data-reveal>{eyebrow}</span>}
      <h2 data-reveal="lines">
        <span className="line"><span>{title} {accent && <em className="gold-text">{accent}</em>}</span></span>
      </h2>
      {lead && <p data-reveal>{lead}</p>}
    </div>
  );
}

export function FeatureGrid({ items, dark = false }) {
  return (
    <div className={`feature-grid ${dark ? 'dark' : ''}`} data-reveal="stagger">
      {items.map((f) => (
        <div className="feature" key={f.title}>
          <span className="feature-icon"><Icon name={f.icon} size={22} /></span>
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </div>
      ))}
    </div>
  );
}

export function CtaCards({ items }) {
  return (
    <div className="cta-cards" data-reveal="stagger">
      {items.map((c) => (
        <Link href={c.href} className={`cta-card ${c.dark ? 'dark' : ''}`} key={c.title}>
          <span className="eyebrow">{c.eyebrow}</span>
          <h3>{c.title}</h3>
          <p>{c.text}</p>
          <span className="cta-go">{c.cta} <Arrow size={14} /></span>
        </Link>
      ))}
    </div>
  );
}

export function Notice({ children }) {
  return <p className="page-notice">{children}</p>;
}
