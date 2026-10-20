import PageHero from '@/components/PageHero';
import BlogIndex from '@/components/BlogIndex';
import { getArticles } from '@/lib/shopify';
import { pageMeta } from '@/lib/seo';
import { tr } from '@/lib/i18n';

export const meta = (lang) => pageMeta('blog', lang, '/blog/');

const T = {
  en: { eyebrow: 'The journal', title: 'Notes from', accent: 'the mountains.', lead: 'Guides on origin, quality and the daily ritual. Read, then choose with confidence.' },
  da: { eyebrow: 'Journalen', title: 'Noter fra', accent: 'bjergene.', lead: 'Guides om oprindelse, kvalitet og det daglige ritual. Læs, og vælg med ro i maven.' },
};

export default async function BlogView({ lang }) {
  const t = tr(T, lang);
  const posts = await getArticles(lang);
  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} accent={t.accent} lead={t.lead} />
      <section className="section blog-section">
        <div className="container">
          <BlogIndex posts={posts} />
        </div>
      </section>
    </>
  );
}
