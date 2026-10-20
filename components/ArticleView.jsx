'use client';
// Article page: editorial layout with a reading-progress ring, cover reveal and
// animated content blocks. Renders either Shopify HTML or local content blocks.
import { useEffect, useRef, useState } from 'react';
import Link from './LLink';
import { useLang } from './LangProvider';

const T = {
  en: { journal: 'Journal', min: 'min read', explore: 'Explore the collection', keep: 'Keep reading', toc: 'In this article', sources: 'Sources', updated: 'Updated', faq: 'Frequently asked questions', view: 'View product' },
  da: { journal: 'Journal', min: 'min. læsning', explore: 'Se kollektionen', keep: 'Læs videre', toc: 'I denne artikel', sources: 'Kilder', updated: 'Opdateret', faq: 'Ofte stillede spørgsmål', view: 'Se produktet' },
  de: { journal: 'Journal', min: 'Min. Lesezeit', explore: 'Die Kollektion entdecken', keep: 'Weiterlesen', toc: 'In diesem Artikel', sources: 'Quellen', updated: 'Aktualisiert', faq: 'Häufige Fragen', view: 'Produkt ansehen' },
  fr: { journal: 'Journal', min: 'min de lecture', explore: 'Découvrir la collection', keep: 'Continuer la lecture', toc: 'Dans cet article', sources: 'Sources', updated: 'Mis à jour', faq: 'Questions fréquentes', view: 'Voir le produit' },
  es: { journal: 'Journal', min: 'min de lectura', explore: 'Descubre la colección', keep: 'Sigue leyendo', toc: 'En este artículo', sources: 'Fuentes', updated: 'Actualizado', faq: 'Preguntas frecuentes', view: 'Ver producto' },
  ar: { journal: 'المدونة', min: 'دقائق للقراءة', explore: 'اكتشف المجموعة', keep: 'تابع القراءة', toc: 'في هذا المقال', sources: 'المصادر', updated: 'آخر تحديث', faq: 'الأسئلة الشائعة', view: 'عرض المنتج' },
  ur: { journal: 'بلاگ', min: 'منٹ کا مطالعہ', explore: 'کلیکشن دیکھیں', keep: 'مزید پڑھیں', toc: 'اس مضمون میں', sources: 'حوالہ جات', updated: 'تازہ کاری', faq: 'عام سوالات', view: 'پروڈکٹ دیکھیں' },
};

export const slugify = (s) => s.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/æ/g, 'ae').replace(/ø/g, 'oe').replace(/å/g, 'aa').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// In-article product card ("flyer"), in the brand's maroon and gold.
function ProductFlyer({ b, lang, t }) {
  const p = localizeProduct(demoProducts.find((x) => x.handle === b.handle), lang);
  if (!p) return null;
  return (
    <aside className="article-flyer">
      <Link href={`/products/${p.handle}/`} className="af-media" tabIndex={-1} aria-hidden="true">
        <img src={p.image} alt="" loading="lazy" />
      </Link>
      <div className="af-copy">
        {b.eyebrow && <span className="eyebrow">{b.eyebrow}</span>}
        <strong>{b.title || p.title}</strong>
        <p>{b.text || p.subtitle}</p>
        <Link href={`/products/${p.handle}/`} className="btn gold small">{b.cta || t.view} <Arrow size={14} /></Link>
      </div>
    </aside>
  );
}
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { formatDate } from '@/lib/shopify';
import JournalCard from './JournalCard';
import Sources from './Sources';
import { demoProducts, localizeProduct } from '@/lib/products';
import { refs } from '@/lib/sources';
import { Arrow } from './Arrow';

function Block({ b, lang, t }) {
  switch (b.t) {
    case 'h2':
      return <h2 id={slugify(b.text)}>{b.text}</h2>;
    case 'h3':
      return <h3>{b.text}</h3>;
    case 'table':
      return (
        <div className="article-table" role="region" aria-label={b.caption || 'Table'} tabIndex={0}>
          <table>
            {b.caption && <caption>{b.caption}</caption>}
            <thead><tr>{b.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
            <tbody>{b.rows.map((r, i) => <tr key={i}>{r.map((c, j) => (j === 0 ? <th key={j} scope="row">{c}</th> : <td key={j}>{c}</td>))}</tr>)}</tbody>
          </table>
        </div>
      );
    case 'faq':
      return (
        <section className="article-faq">
          <h2 id={slugify(b.title || t.faq)}>{b.title || t.faq}</h2>
          {b.items.map((i) => (
            <details key={i.q}>
              <summary>{i.q}</summary>
              <p>{i.a}</p>
            </details>
          ))}
        </section>
      );
    case 'product':
      return <ProductFlyer b={b} lang={lang} t={t} />;
    case 'note':
      return <p className="article-note">{b.text}</p>;
    case 'quote':
      return <blockquote className="pull">{b.text}</blockquote>;
    case 'list':
      return <ul className="article-list">{b.items.map((i) => <li key={i}>{i}</li>)}</ul>;
    case 'steps':
      return (
        <ol className="article-steps">
          {b.items.map(([title, text], i) => (
            <li key={title}><span className="num">{i + 1}</span><div><strong>{title}</strong><p>{text}</p></div></li>
          ))}
        </ol>
      );
    case 'tip':
      return <aside className="article-tip"><strong>{b.title}</strong><p>{b.text}</p></aside>;
    default:
      return <p>{b.text}</p>;
  }
}

export default function ArticleView({ post, related }) {
  const root = useRef(null);
  const lang = useLang();
  const t = T[lang];
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const body = root.current?.querySelector('.article-body');
      if (!body) return;
      const r = body.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.6 - r.top) / r.height));
      setProgress(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.timeline({ defaults: { ease: 'expo.out' } })
        .from('.article-cover', { clipPath: 'inset(12% 10% 12% 10% round 60px)', duration: 1.6 })
        .from('.article-cover img', { scale: 1.2, duration: 2 }, 0)
        .from('.article-head .line > span', { yPercent: 115, duration: 1.2, stagger: 0.1 }, 0.3)
        .from('.article-head .crumb, .article-head .journal-meta, .article-head .lede', { y: 18, opacity: 0, stagger: 0.08, duration: 1 }, 0.45);
      gsap.utils.toArray('.article-body > *').forEach((el) => {
        gsap.from(el, { y: 26, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
      });
    },
    { scope: root }
  );

  const C = 2 * Math.PI * 18;

  return (
    <article className="article" ref={root}>
      <div className="read-ring" aria-hidden="true" style={{ opacity: progress > 0 && progress < 1 ? 1 : 0 }}>
        <svg viewBox="0 0 44 44" width="44" height="44">
          <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(204,162,94,0.25)" strokeWidth="2.5" />
          <circle cx="22" cy="22" r="18" fill="none" stroke="#cca25e" strokeWidth="2.5" strokeLinecap="round"
            strokeDasharray={C} strokeDashoffset={C * (1 - progress)} transform="rotate(-90 22 22)" />
        </svg>
        <span>{Math.round(progress * 100)}%</span>
      </div>

      <header className="article-head">
        <p className="crumb"><Link href="/blog/">{t.journal}</Link> · {post.category}</p>
        <h1><span className="line"><span>{post.title}</span></span></h1>
        <p className="journal-meta"><time dateTime={post.date}>{formatDate(post.date, lang)}</time>{post.updated && <> · {t.updated} <time dateTime={post.updated}>{formatDate(post.updated, lang)}</time></>} · {post.readMin} {t.min} · Himalayan Drop</p>
        {post.excerpt && <p className="lede">{post.excerpt}</p>}
      </header>

      <div className="article-cover">
        <img src={post.cover} alt={post.title} />
      </div>

      {post.html ? (
        <div className="article-body" dangerouslySetInnerHTML={{ __html: post.html }} />
      ) : (
        <div className="article-body">
          {post.toc && (
            <nav className="article-toc" aria-label={t.toc}>
              <strong>{t.toc}</strong>
              <ol>
                {post.body.filter((b) => b.t === 'h2' || b.t === 'faq').map((b) => {
                  const text = b.t === 'faq' ? b.title || t.faq : b.text;
                  return <li key={text}><a href={`#${slugify(text)}`}>{text}</a></li>;
                })}
              </ol>
            </nav>
          )}
          {post.body.map((b, i) => <Block key={i} b={b} lang={lang} t={t} />)}
          {post.sources?.length > 0 && <Sources items={refs(...post.sources)} title={t.sources} id="article-sources" />}
        </div>
      )}

      <div className="article-end">
        <svg viewBox="0 0 140 40" width="140" height="40" fill="none" stroke="#cca25e" strokeWidth="1.3" aria-hidden="true">
          <path d="M0 38 L36 10 L48 20 L70 2 L92 22 L104 14 L140 38" />
        </svg>
        <Link href="/shop/" className="btn gold">{t.explore} <Arrow /></Link>
      </div>

      {related.length > 0 && (
        <section className="related container">
          <h2>{t.keep}</h2>
          <div className="journal-grid">
            {related.map((p) => <JournalCard key={p.slug} post={p} />)}
          </div>
        </section>
      )}
    </article>
  );
}
