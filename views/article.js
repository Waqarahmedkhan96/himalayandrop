import { notFound } from 'next/navigation';
import ArticleView from '@/components/ArticleView';
import JsonLd from '@/components/JsonLd';
import { getArticle, getArticles } from '@/lib/shopify';
import { counterpartSlug } from '@/lib/posts';
import { buildMeta, breadcrumbLd, abs, BRAND } from '@/lib/seo';
import { localizeHref, SITE_URL } from '@/lib/i18n';

export async function params(lang) {
  const posts = await getArticles(lang);
  return posts.map((p) => ({ slug: p.slug }));
}

function altPaths(slug, lang) {
  const other = counterpartSlug(slug, lang === 'da' ? 'en' : 'da');
  const self = `/blog/${slug}/`;
  const otherPath = other ? `/blog/${other}/` : '/blog/';
  return lang === 'da' ? { en: otherPath, da: `/da${self}` } : { en: self, da: `/da${otherPath}` };
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
    dateModified: post.date,
    inLanguage: lang,
    mainEntityOfPage: abs(path),
    author: { '@type': 'Organization', name: BRAND, url: SITE_URL },
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
  const crumbs = breadcrumbLd([
    [lang === 'da' ? 'Forside' : 'Home', localizeHref('/', lang)],
    ['Journal', localizeHref('/blog/', lang)],
    [post.title, path],
  ]);
  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={crumbs} />
      <ArticleView post={post} related={related} />
    </>
  );
}
