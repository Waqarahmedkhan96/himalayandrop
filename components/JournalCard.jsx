'use client';
import Link from './LLink';
import { formatDate } from '@/lib/shopify';
import { useLang } from './LangProvider';
import { Arrow } from './Arrow';

const W = {
  en: { min: 'min read', read: 'Read article' },
  da: { min: 'min. læsning', read: 'Læs artiklen' },
  de: { min: 'Min. Lesezeit', read: 'Artikel lesen' },
  fr: { min: 'min de lecture', read: 'Lire l’article' },
  es: { min: 'min de lectura', read: 'Leer artículo' },
  ar: { min: 'دقائق للقراءة', read: 'اقرأ المقال' },
  ur: { min: 'منٹ کا مطالعہ', read: 'مضمون پڑھیں' },
};

export default function JournalCard({ post, featured = false }) {
  const lang = useLang();
  const t = W[lang] || W.en;
  return (
    <Link href={`/blog/${post.slug}/`} className={`journal-card ${featured ? 'featured' : ''}`}>
      <span className="journal-media">
        <img src={post.cover} alt={post.title} loading="lazy" />
        <span className="card-tag">{post.category}</span>
      </span>
      <span className="journal-body">
        <span className="journal-meta">{formatDate(post.date, lang)} · {post.readMin} {t.min}</span>
        <h3>{post.title}</h3>
        {featured && <span className="journal-excerpt">{post.excerpt}</span>}
        <span className="journal-more">{t.read} <Arrow size={14} /></span>
      </span>
    </Link>
  );
}
