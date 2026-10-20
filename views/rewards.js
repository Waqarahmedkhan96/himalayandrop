import Link from '@/components/LLink';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { SectionHead } from '@/components/Blocks';
import { Icon } from '@/components/Icons';
import { Arrow } from '@/components/Arrow';
import { pageMeta } from '@/lib/seo';
import { tr } from '@/lib/i18n';

export const meta = (lang) => pageMeta('rewards', lang, '/rewards/');

// Concept: adjust the numbers and perks to your own programme.
// A loyalty app for Shopify (e.g. Smile.io or Rivo) can run the points behind it.
const T = {
  en: {
    hero: { eyebrow: 'Summit Rewards', title: 'Every ritual', accent: 'takes you higher.', lead: 'Earn points with every order and climb from Base Camp to Summit.' },
    join: 'Join for free', login: 'Log in',
    s1: { eyebrow: 'How it works', title: 'Join, earn,', accent: 'redeem.' },
    how: [
      { icon: 'user', title: 'Join', text: 'Create a free account and get points for signing up.' },
      { icon: 'star', title: 'Earn', text: 'Collect points on every order, review and birthday.' },
      { icon: 'gift', title: 'Redeem', text: 'Turn points into discounts on your next ritual.' },
    ],
    s2: { eyebrow: 'Three levels', title: 'The higher you climb,', accent: 'the more you get.' },
    tiers: [
      { name: 'Base Camp', alt: '0 m', need: 'When you join', perks: ['1 point per 1 kr spent', 'Birthday surprise', 'Early access to news'] },
      { name: 'Ridge', alt: '3,000 m', need: 'From 1,500 points', perks: ['1.25 points per 1 kr', 'Free shipping on every order', 'Members-only offers'], featured: true },
      { name: 'Summit', alt: '5,000 m', need: 'From 4,000 points', perks: ['1.5 points per 1 kr', 'Gift with every order', 'First access to new editions'] },
    ],
    s3: { eyebrow: 'Ways to earn', title: 'Points for the', accent: 'little things.' },
    earn: [['Create an account', '100 points'], ['Every 1 kr spent', '1 point+'], ['Write a review', '50 points'], ['Follow us on Instagram', '25 points'], ['Your birthday', '100 points'], ['Refer a friend', '250 points']],
  },
  da: {
    hero: { eyebrow: 'Summit Rewards', title: 'Hvert ritual', accent: 'bringer dig højere op.', lead: 'Optjen point på hver ordre, og klatr fra Base Camp til Summit.' },
    join: 'Bliv gratis medlem', login: 'Log ind',
    s1: { eyebrow: 'Sådan virker det', title: 'Tilmeld, optjen,', accent: 'indløs.' },
    how: [
      { icon: 'user', title: 'Tilmeld dig', text: 'Opret en gratis konto, og få point for at blive medlem.' },
      { icon: 'star', title: 'Optjen', text: 'Saml point på hver ordre, anmeldelse og fødselsdag.' },
      { icon: 'gift', title: 'Indløs', text: 'Brug dine point som rabat på dit næste ritual.' },
    ],
    s2: { eyebrow: 'Tre niveauer', title: 'Jo højere du klatrer,', accent: 'jo mere får du.' },
    tiers: [
      { name: 'Base Camp', alt: '0 m', need: 'Når du bliver medlem', perks: ['1 point pr. 1 kr.', 'Fødselsdagsoverraskelse', 'Først med nyhederne'] },
      { name: 'Ridge', alt: '3.000 m', need: 'Fra 1.500 point', perks: ['1,25 point pr. 1 kr.', 'Gratis fragt på alle ordrer', 'Tilbud kun for medlemmer'], featured: true },
      { name: 'Summit', alt: '5.000 m', need: 'Fra 4.000 point', perks: ['1,5 point pr. 1 kr.', 'Gave med hver ordre', 'Først til nye udgaver'] },
    ],
    s3: { eyebrow: 'Sådan optjener du', title: 'Point for de', accent: 'små ting.' },
    earn: [['Opret en konto', '100 point'], ['Hver 1 kr. du handler for', '1 point+'], ['Skriv en anmeldelse', '50 point'], ['Følg os på Instagram', '25 point'], ['Din fødselsdag', '100 point'], ['Anbefal en ven', '250 point']],
  },
};

export default function RewardsView({ lang }) {
  const t = tr(T, lang);
  return (
    <>
      <PageHero {...t.hero}>
        <div className="hero-ctas">
          <Link href="/account/register/" className="btn gold">{t.join} <Arrow /></Link>
          <Link href="/account/login/" className="btn ghost">{t.login}</Link>
        </div>
      </PageHero>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <SectionHead {...t.s1} />
          <ol className="how-steps" data-reveal="stagger">
            {t.how.map((h, i) => (
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
          <SectionHead {...t.s2} />
          <div className="tiers" data-reveal="stagger">
            {t.tiers.map((tier) => (
              <article className={`tier ${tier.featured ? 'featured' : ''}`} key={tier.name}>
                <svg className="tier-peak" viewBox="0 0 120 50" aria-hidden="true"><path d="M0 50 L34 18 L46 28 L66 4 L88 30 L98 22 L120 50" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
                <span className="tier-alt">{tier.alt}</span>
                <h3>{tier.name}</h3>
                <p className="tier-need">{tier.need}</p>
                <ul>{tier.perks.map((p) => <li key={p}><Icon name="shield" size={14} /> {p}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container narrow">
          <SectionHead {...t.s3} />
          <ul className="earn-list" data-reveal="stagger">
            {t.earn.map(([a, p]) => (
              <li key={a}><span>{a}</span><strong>{p}</strong></li>
            ))}
          </ul>
        </div>
      </Reveal>
    </>
  );
}
