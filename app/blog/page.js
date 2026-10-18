import PageHero from '@/components/PageHero';
import BlogIndex from '@/components/BlogIndex';
import { getArticles } from '@/lib/shopify';

export const metadata = {
  title: 'Journal · Himalayan Drop',
  description: 'Guides and stories about shilajit: origin, quality, lab reports and the daily ritual.',
};

export default async function BlogPage() {
  const posts = await getArticles();
  return (
    <>
      <PageHero eyebrow="The journal" title="Notes from" accent="the mountains." lead="Guides on origin, quality and the daily ritual. Read, then choose with confidence." />
      <section className="section blog-section">
        <div className="container">
          <BlogIndex posts={posts} />
        </div>
      </section>
    </>
  );
}
