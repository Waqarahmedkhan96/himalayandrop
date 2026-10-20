import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import HowToTabs from '@/components/HowToTabs';
import { SectionHead, CtaCards } from '@/components/Blocks';

export const metadata = {
  title: 'How to Use · Himalayan Drop',
  description: 'How to take Himalayan Drop shilajit resin, gummies, drops and capsules, step by step.',
};

const notes = [
  ['Warm, never boiling', 'Dissolve resin and drops in warm liquid. Boiling water is not needed and not recommended.'],
  ['Follow your label', 'Always follow the daily dose printed on your product. Do not exceed it.'],
  ['Store it well', 'Keep jars closed, at room temperature and out of direct sunlight.'],
  ['Make it a habit', 'Same time, same cup. Consistency is what turns a product into a ritual.'],
  ['Ask your doctor first', 'If you are pregnant, breastfeeding, take medication or have a medical condition.'],
];

export default function HowToUsePage() {
  return (
    <>
      <PageHero eyebrow="How to use" title="Your ritual," accent="step by step." lead="Choose your format below. Each takes less than a minute to prepare." />

      <Reveal as="section" className="section tight-top">
        <div className="container" data-reveal>
          <HowToTabs />
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <div className="notes-card" data-reveal>
            <SectionHead eyebrow="Good to know" title="Five simple" accent="notes." align="left" />
            <ol className="notes-list">
              {notes.map(([t, d], i) => (
                <li key={t}>
                  <span className="howto-num">{i + 1}</span>
                  <div><strong>{t}</strong><p>{d}</p></div>
                </li>
              ))}
            </ol>
            <div className="pro-tip">
              <span className="eyebrow">Ritual tip</span>
              <p>Pair it with something you already do every morning, like your first tea. The ritual sticks when it has a place in your day.</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <CtaCards
            items={[
              { eyebrow: 'Shop', title: 'Choose your format', text: 'Resin, gummies or drops.', cta: 'Shop now', href: '/shop/', dark: true },
              { eyebrow: 'Journal', title: 'Which one suits you?', text: 'A simple comparison of the four formats.', cta: 'Read article', href: '/blog/resin-gummies-or-drops/' },
              { eyebrow: 'Questions', title: 'FAQ', text: 'Answers about using, storing and ordering.', cta: 'Read FAQ', href: '/faq/' },
            ]}
          />
        </div>
      </Reveal>
    </>
  );
}
