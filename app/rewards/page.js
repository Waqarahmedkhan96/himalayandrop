import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { SectionHead } from '@/components/Blocks';
import { Icon } from '@/components/Icons';
import { Arrow } from '@/components/Arrow';

export const metadata = {
  title: 'Summit Rewards · Himalayan Drop',
  description: 'Earn points with every order and climb from Base Camp to Summit.',
};

// Concept: adjust the numbers and perks to your own programme.
// A loyalty app for Shopify (e.g. Smile.io or Rivo) can run the points behind it.
const how = [
  { icon: 'user', title: 'Join', text: 'Create a free account and get points for signing up.' },
  { icon: 'star', title: 'Earn', text: 'Collect points on every order, review and birthday.' },
  { icon: 'gift', title: 'Redeem', text: 'Turn points into discounts on your next ritual.' },
];

const tiers = [
  { name: 'Base Camp', alt: '0 m', need: 'When you join', perks: ['1 point per 1 kr spent', 'Birthday surprise', 'Early access to news'] },
  { name: 'Ridge', alt: '3,000 m', need: 'From 1,500 points', perks: ['1.25 points per 1 kr', 'Free shipping on every order', 'Members-only offers'], featured: true },
  { name: 'Summit', alt: '5,000 m', need: 'From 4,000 points', perks: ['1.5 points per 1 kr', 'Gift with every order', 'First access to new editions'] },
];

const earn = [
  ['Create an account', '100 points'],
  ['Every 1 kr spent', '1 point+'],
  ['Write a review', '50 points'],
  ['Follow us on Instagram', '25 points'],
  ['Your birthday', '100 points'],
  ['Refer a friend', '250 points'],
];

export default function RewardsPage() {
  return (
    <>
      <PageHero eyebrow="Summit Rewards" title="Every ritual" accent="takes you higher." lead="Earn points with every order and climb from Base Camp to Summit.">
        <div className="hero-ctas">
          <Link href="/account/register/" className="btn gold">Join for free <Arrow /></Link>
          <Link href="/account/login/" className="btn ghost">Log in</Link>
        </div>
      </PageHero>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <SectionHead eyebrow="How it works" title="Join, earn," accent="redeem." />
          <ol className="how-steps" data-reveal="stagger">
            {how.map((h, i) => (
              <li key={h.title}>
                <span className="howto-num">{i + 1}</span>
                <span className="howto-icon"><Icon name={h.icon} size={22} /></span>
                <strong>{h.title}</strong>
                <p>{h.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <SectionHead eyebrow="Three levels" title="The higher you climb," accent="the more you get." />
          <div className="tiers" data-reveal="stagger">
            {tiers.map((t) => (
              <article className={`tier ${t.featured ? 'featured' : ''}`} key={t.name}>
                <svg className="tier-peak" viewBox="0 0 120 50" aria-hidden="true"><path d="M0 50 L34 18 L46 28 L66 4 L88 30 L98 22 L120 50" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
                <span className="tier-alt">{t.alt}</span>
                <h3>{t.name}</h3>
                <p className="tier-need">{t.need}</p>
                <ul>{t.perks.map((p) => <li key={p}><Icon name="shield" size={14} /> {p}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container narrow">
          <SectionHead eyebrow="Ways to earn" title="Points for the" accent="little things." />
          <ul className="earn-list" data-reveal="stagger">
            {earn.map(([a, p]) => (
              <li key={a}><span>{a}</span><strong>{p}</strong></li>
            ))}
          </ul>
        </div>
      </Reveal>
    </>
  );
}
