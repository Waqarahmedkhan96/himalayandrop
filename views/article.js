import { notFound } from 'next/navigation';
import ArticleView from '@/components/ArticleView';
import JsonLd from '@/components/JsonLd';
import { getArticle, getArticles } from '@/lib/shopify';
import { counterpartSlug } from '@/lib/posts';
import { buildMeta, breadcrumbLd, abs, BRAND } from '@/lib/seo';
import { localizeHref, SITE_URL, LOCALES, LANGS } from '@/lib/i18n';
import { refs } from '@/lib/sources';

const HOME = { en: 'Home', da: 'Forside', de: 'Startseite', fr: 'Accueil', es: 'Inicio', ar: 'الرئيسية', ur: 'ہوم' };

export async function params(lang) {
  const posts = await getArticles(lang);
  return posts.map((p) => ({ slug: p.slug }));
}

// The same article in every language (slugs are written per language).
function altPaths(slug, lang) {
  return Object.fromEntries(
    LOCALES.map((l) => {
      const s = l === lang ? slug : counterpartSlug(slug, l, lang);
      return [l, localizeHref(s ? `/blog/${s}/` : '/blog/', l)];
    })
  );
}

export async function meta(lang, slug) {
  const post = await getArticle(slug, lang);
  if (!post) return {};
  return buildMeta({ lang, paths: altPaths(slug, lang), title: post.title, description: post.excerpt, image: post.cover, type: 'article' });
}

export default async function ArticlePageView({ lang, slug }) {
  const [post, all] = await Promise.all([getArticle(slug, lang), getArticles(lang)]);
  if (!post) notFound();
  const related = all.filter((p) => p.slug !== slug).slice(0, 3);
  const path = localizeHref(`/blog/${slug}/`, lang);
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.cover?.startsWith('http') ? post.cover : abs(post.cover),
    datePublished: post.date,
    dateModified: post.updated || post.date,
    articleSection: post.category,
    ...(post.sources?.length ? { citation: refs(...post.sources).map((r) => r.url) } : {}),
    inLanguage: LANGS[lang].hreflang,
    mainEntityOfPage: abs(path),
    author: { '@type': 'Organization', name: BRAND, url: SITE_URL },
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
  const crumbs = breadcrumbLd([
    [HOME[lang] || HOME.en, localizeHref('/', lang)],
    ['Journal', localizeHref('/blog/', lang)],
    [post.title, path],
  ]);
  const faqBlock = post.body?.find((b) => b.t === 'faq');
  const faqLd = faqBlock && {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: LANGS[lang].hreflang,
    mainEntity: faqBlock.items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
  };
  return (
    <>
      <JsonLd data={articleLd} />
      {faqLd && <JsonLd data={faqLd} />}
      <JsonLd data={crumbs} />
      <ArticleView post={post} related={related} />
    </>
  );
}
