import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { Manifesto, Route } from '@/components/StoryBlocks';
import { SectionHead, FeatureGrid, CtaCards } from '@/components/Blocks';

export const metadata = {
  title: 'Our Story · Himalayan Drop',
  description: 'Himalayan Drop: designed in Denmark, sourced high in the Himalayas. The Mountain within.',
};

const values = [
  { icon: 'clock', title: 'Patience', text: 'Shilajit forms over centuries. We give it the time it needs: up to 60 days in the sun, never rushed with heat.' },
  { icon: 'shield', title: 'Proof', text: 'A lab report for every batch, and a batch number on every jar. Trust should be something you can check.' },
  { icon: 'mountain', title: 'Place', text: 'High Himalayan rock, collected by hand above 5,000 metres. Where it comes from is half of what it is.' },
];

export default function OurStoryPage() {
  return (
    <>
      <PageHero eyebrow="Our story" title="The Mountain" accent="within." lead="A Danish brand with its roots high in the Himalayas." />

      <section className="section">
        <div className="container narrow">
          <span className="eyebrow manifesto-eyebrow">Why we began</span>
          <Manifesto text="We started Himalayan Drop because we wanted shilajit we could trust. Not another unmarked tub with a story, but a resin with an origin, a process and a lab report behind it. So we went to the source: high Himalayan rock, hand-collected stones, water, sun and time. Then we packed it the way something this old deserves." />
        </div>
      </section>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <div className="route-card" data-reveal>
            <div className="route-copy">
              <span className="eyebrow">Two places, one ritual</span>
              <h2>Sourced in the Himalayas. <em className="gold-text">Designed in Denmark.</em></h2>
              <p>The resin comes from the mountains. The care, the design and the standards come from Scandinavia: simple, honest, built to last.</p>
            </div>
            <Route />
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <SectionHead eyebrow="What we stand for" title="Patience, proof" accent="and place." />
          <FeatureGrid items={values} />
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <div className="quote-band" data-reveal>
            <svg viewBox="0 0 220 60" width="160" height="44" fill="none" stroke="#cca25e" strokeWidth="1.4" aria-hidden="true"><path d="M0 58 L52 22 L70 34 L104 4 L136 36 L152 26 L220 58" /></svg>
            <p>“Every jar carries a little of the mountain. We call it the Mountain within.”</p>
            <span>Himalayan Drop</span>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <CtaCards
            items={[
              { eyebrow: 'The process', title: 'From mountain to jar', text: 'Six patient steps, told in motion.', cta: 'Watch the story', href: '/#process', dark: true },
              { eyebrow: 'Proof', title: 'Certificates', text: 'The standards behind every batch.', cta: 'See certificates', href: '/certificates/' },
              { eyebrow: 'Shop', title: 'Begin your ritual', text: 'Resin, gummies or drops.', cta: 'Shop now', href: '/shop/' },
            ]}
          />
        </div>
      </Reveal>
    </>
  );
}
