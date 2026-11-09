// About page, modelled on a brand "about us" layout: three pillars, the team, the name, approach,
// quality, trusted-by videos, bundles and newsletter. English copy; other languages fall back to it.
import AboutTeam from '@/components/AboutTeam';
import AboutReels from '@/components/AboutReels';
import HomeBundlesSwitch from '@/components/HomeBundlesSwitch';
import Newsletter from '@/components/Newsletter';
import { getDemoBundles } from '@/lib/bundles';
import { getProduct, isShopifyConnected } from '@/lib/shopify';
import { pageMeta } from '@/lib/seo';

export const meta = (lang) => pageMeta('about', lang, '/about/');

const TOP3 = ['bundle-daily-ritual', 'bundle-summit-set', 'bundle-gift-of-the-mountain'];
async function getTop3(lang) {
  const demo = TOP3.map((h) => getDemoBundles(lang).find((b) => b.handle === h)).filter(Boolean)
    .map((b) => ({ ...b, jars: `/images/bundles/jars-${b.handle.replace('bundle-', '')}.webp` }));
  if (!isShopifyConnected) return demo;
  return Promise.all(demo.map(async (b) => {
    try {
      const p = await getProduct(b.handle, lang);
      return p ? { ...b, amount: p.amount ?? b.amount, currency: p.currency, variantId: p.variantId, available: p.available } : b;
    } catch { return b; }
  }));
}

const PILLARS = [
  ['/images/about/ayurveda.webp', 'Inspired by Ayurveda'],
  ['/images/about/nature.webp', 'Driven by Nature'],
  ['/images/about/passion.webp', 'Driven by a Passion for Life'],
];

export default async function AboutView({ lang }) {
  const top3 = await getTop3(lang);
  return (
    <div className="ab">
      <section className="ab-hero">
        <h1>Himalayan Drop brings together <em>Himalayan tradition</em> and <em>Danish care</em>, with independent testing behind every batch.</h1>
        <div className="ab-pillars">
          {PILLARS.map(([src, alt]) => <img key={alt} src={src} alt={alt} width="1100" height="733" loading="eager" />)}
        </div>
      </section>

      <section className="ab-sec ab-minds">
        <p className="ab-eyebrow">Driven by experience</p>
        <h2>Meet the brilliant minds behind Himalayan Drop</h2>
        <p className="ab-sub">A collaboration between traditional herbal knowledge, nutrition and the people who work on the mountain.</p>
        <AboutTeam />
      </section>

      <section className="ab-name">
        <div className="ab-word" aria-label="Himalayan Drop">
          <div><span>HIMALAYAN</span><i aria-hidden="true" /></div>
          <div><span>DROP</span><i aria-hidden="true" /></div>
        </div>
        <div className="ab-caps">
          <p>Inspired by the mountains and the origins of shilajit.</p>
          <p>A small part of nature, brought into your daily routine.</p>
        </div>
        <div className="ab-story">
          <h2>The story behind our name</h2>
          <p>Shilajit is a natural resin-like substance found in mountain regions. It has a long history in Ayurveda, a traditional system of wellness from South Asia.</p>
          <p>Himalayan Drop brings this heritage together with careful sourcing and independent testing, for a simple daily ritual.</p>
        </div>
      </section>

      <section className="ab-split">
        <div className="ab-copy">
          <p className="ab-eyebrow">Our approach</p>
          <h2>Rooted in tradition. Guided by care.</h2>
          <p>Inspired by the long history of shilajit in South Asian traditions, we bring together careful sourcing and independent testing. From the mountains to your daily ritual, every detail matters.</p>
        </div>
        <img className="ab-photo" src="/images/about/approach.webp" alt="A scientist pipetting a shilajit sample in a laboratory" width="850" height="674" loading="lazy" />
      </section>

      <section className="ab-split flip">
        <div className="ab-stack">
          <img className="a" src="/images/about/quality-1.webp" alt="Shilajit resin on mountain rock" width="463" height="730" loading="lazy" />
          <img className="b" src="/images/about/quality-2.webp" alt="A sample vial being filled with a dropper" width="369" height="367" loading="lazy" />
        </div>
        <div className="ab-copy">
          <p className="ab-eyebrow">Our commitment to quality</p>
          <h2>Carefully sourced. Independently tested.</h2>
          <p>We believe quality starts at the source. Our shilajit is carefully selected and independently tested, so you can explore the details behind every batch.</p>
        </div>
      </section>

      <section className="ab-sec ab-join">
        <Newsletter />
      </section>

      <section className="ab-sec ab-trust">
        <h2>Trusted by nutrition experts, athletes and more</h2>
        <AboutReels />
      </section>

      <HomeBundlesSwitch bundles={top3} />
    </div>
  );
}
