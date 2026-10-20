'use client';
import Link from './LLink';
import { formatDate } from '@/lib/shopify';
import { useLang } from './LangProvider';
import { Arrow } from './Arrow';

export default function JournalCard({ post, featured = false }) {
  const lang = useLang();
  const da = lang === 'da';
  return (
    <Link href={`/blog/${post.slug}/`} className={`journal-card ${featured ? 'featured' : ''}`}>
      <span className="journal-media">
        <img src={post.cover} alt={post.title} loading="lazy" />
        <span className="card-tag">{post.category}</span>
      </span>
      <span className="journal-body">
        <span className="journal-meta">{formatDate(post.date, lang)} · {post.readMin} {da ? 'min. læsning' : 'min read'}</span>
        <h3>{post.title}</h3>
        {featured && <span className="journal-excerpt">{post.excerpt}</span>}
        <span className="journal-more">{da ? 'Læs artiklen' : 'Read article'} <Arrow size={14} /></span>
      </span>
    </Link>
  );
}
