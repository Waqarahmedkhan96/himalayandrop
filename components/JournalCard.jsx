import Link from 'next/link';
import { formatDate } from '@/lib/shopify';
import { Arrow } from './Arrow';

export default function JournalCard({ post, featured = false }) {
  return (
    <Link href={`/blog/${post.slug}/`} className={`journal-card ${featured ? 'featured' : ''}`}>
      <span className="journal-media">
        <img src={post.cover} alt="" loading="lazy" />
        <span className="card-tag">{post.category}</span>
      </span>
      <span className="journal-body">
        <span className="journal-meta">{formatDate(post.date)} · {post.readMin} min read</span>
        <h3>{post.title}</h3>
        {featured && <span className="journal-excerpt">{post.excerpt}</span>}
        <span className="journal-more">Read article <Arrow size={14} /></span>
      </span>
    </Link>
  );
}
