import { notFound } from 'next/navigation';
import ArticleView from '@/components/ArticleView';
import { getArticle, getArticles } from '@/lib/shopify';

export async function generateStaticParams() {
  const posts = await getArticles();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getArticle(slug);
  if (!post) return {};
  return { title: `${post.title} · Himalayan Drop`, description: post.excerpt };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const [post, all] = await Promise.all([getArticle(slug), getArticles()]);
  if (!post) notFound();
  const related = all.filter((p) => p.slug !== slug).slice(0, 3);
  return <ArticleView post={post} related={related} />;
}
