import Link from 'next/link';
import Reveal from './Reveal';
import JournalCard from './JournalCard';
import { Arrow } from './Arrow';

// "From the journal" on the homepage: the three newest articles.
export default function JournalSection({ posts }) {
  return (
    <Reveal as="section" id="journal" className="section journal-section">
      <div className="container">
        <div className="journal-head">
          <div>
            <span className="eyebrow" data-reveal>The journal</span>
            <h2 data-reveal="lines">
              <span className="line"><span>Notes from <em className="gold-text">the mountains.</em></span></span>
            </h2>
          </div>
          <Link href="/blog/" className="btn ghost small journal-all" data-reveal>
            All articles <Arrow size={14} />
          </Link>
        </div>
        <div className="journal-grid" data-reveal="stagger">
          {posts.slice(0, 3).map((p) => (
            <JournalCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
