import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { policies } from '@/lib/policies';
import { getPolicy } from '@/lib/shopify';

export function generateStaticParams() {
  return Object.keys(policies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return { title: `${policies[slug]?.title || 'Policy'} · Himalayan Drop` };
}

export default async function PolicyPage({ params }) {
  const { slug } = await params;
  const template = policies[slug];
  if (!template) notFound();
  const shopify = await getPolicy(slug);

  return (
    <>
      <PageHero eyebrow="Policies" title={shopify?.title || template.title} />
      <section className="section tight-top">
        <div className="container policy">
          <nav className="policy-nav" aria-label="Policies">
            {Object.entries(policies).map(([s, p]) => (
              <Link key={s} href={`/policies/${s}/`} className={s === slug ? 'on' : ''}>{p.title}</Link>
            ))}
          </nav>
          <article className="policy-body">
            {shopify ? (
              <div dangerouslySetInnerHTML={{ __html: shopify.body }} />
            ) : (
              <>
                <p className="page-notice">Template text. Replace it with your own policy in Shopify admin → Settings → Policies, checked by a legal adviser.</p>
                {template.sections.map(([h, t]) => (
                  <section key={h}>
                    <h2>{h}</h2>
                    <p>{t}</p>
                  </section>
                ))}
              </>
            )}
          </article>
        </div>
      </section>
    </>
  );
}
