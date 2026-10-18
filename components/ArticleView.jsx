'use client';
// Article page: editorial layout with a reading-progress ring, cover reveal and
// animated content blocks. Renders either Shopify HTML or local content blocks.
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { formatDate } from '@/lib/shopify';
import JournalCard from './JournalCard';
import { Arrow } from './Arrow';

function Block({ b }) {
  switch (b.t) {
    case 'h2':
      return <h2>{b.text}</h2>;
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
        <p className="crumb"><Link href="/blog/">Journal</Link> · {post.category}</p>
        <h1><span className="line"><span>{post.title}</span></span></h1>
        <p className="journal-meta">{formatDate(post.date)} · {post.readMin} min read · Himalayan Drop</p>
        {post.excerpt && <p className="lede">{post.excerpt}</p>}
      </header>

      <div className="article-cover">
        <img src={post.cover} alt="" />
      </div>

      {post.html ? (
        <div className="article-body" dangerouslySetInnerHTML={{ __html: post.html }} />
      ) : (
        <div className="article-body">
          {post.body.map((b, i) => <Block key={i} b={b} />)}
        </div>
      )}

      <div className="article-end">
        <svg viewBox="0 0 140 40" width="140" height="40" fill="none" stroke="#cca25e" strokeWidth="1.3" aria-hidden="true">
          <path d="M0 38 L36 10 L48 20 L70 2 L92 22 L104 14 L140 38" />
        </svg>
        <Link href="/shop/" className="btn gold">Explore the collection <Arrow /></Link>
      </div>

      {related.length > 0 && (
        <section className="related container">
          <h2>Keep reading</h2>
          <div className="journal-grid">
            {related.map((p) => <JournalCard key={p.slug} post={p} />)}
          </div>
        </section>
      )}
    </article>
  );
}
