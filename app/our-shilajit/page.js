import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { SectionHead, FeatureGrid, CtaCards } from '@/components/Blocks';
import { Icon } from '@/components/Icons';

export const metadata = {
  title: 'Our Shilajit · Himalayan Drop',
  description: 'Hand-collected above 5,000 m, filtered several times, sun-dried for up to 60 days and lab-tested batch by batch.',
};

const features = [
  { icon: 'mountain', title: 'Above 5,000 metres', text: 'Collected from high Himalayan rock faces, far from roads, towns and industry.' },
  { icon: 'hand', title: 'Collected by hand', text: 'Harvesters gather the shilajit-bearing stones by hand, a few at a time.' },
  { icon: 'filter', title: 'Filtered several times', text: 'Dissolved in pure water and filtered again and again until only the resin remains.' },
  { icon: 'sun', title: 'Sun-dried, up to 60 days', text: 'Dried slowly in UV-protected glass jars set in steel bowls. No ovens, no shortcuts.' },
  { icon: 'flask', title: 'Tested every batch', text: 'Heavy metals, overall quality and fulvic acid percentage, checked by a lab.' },
  { icon: 'jar', title: 'Sealed in UV-protected glass', text: 'Packed in premium jars that keep light out, from our hands to yours.' },
];

const compare = [
  ['Origin', 'Collected above 5,000 m in the Himalayas', 'Is the harvest region named, and how high is it?'],
  ['Purification', 'Dissolved in pure water and filtered several times', 'How is it cleaned, and how many times?'],
  ['Drying', 'Slow sun-drying for up to 60 days', 'Is it dried slowly, or with heat to save time?'],
  ['Testing', 'Lab report for every batch', 'Can you see the report for your own batch?'],
  ['Packaging', 'UV-protected glass jars', 'Does the jar protect the resin from light?'],
  ['Transparency', 'Batch number on every jar', 'Can you trace your jar back to its batch?'],
];

export default function OurShilajitPage() {
  return (
    <>
      <PageHero eyebrow="Our shilajit" title="Pure, patient," accent="proven." lead="What sets Himalayan Drop apart is not one secret. It is many slow, careful steps, and proof at the end." />

      <Reveal as="section" className="section">
        <div className="container">
          <SectionHead eyebrow="What makes it ours" title="Six things we" accent="never rush." />
          <FeatureGrid items={features} />
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <SectionHead eyebrow="Choose with confidence" title="What to look for" accent="in any shilajit." lead="Six questions worth asking before you buy, and how we answer them." />
          <div className="compare" data-reveal>
            <div className="compare-head">
              <span />
              <span className="ours"><img src="/images/logo-mark.png" alt="" width="22" height="27" /> Himalayan Drop</span>
              <span>Ask any seller</span>
            </div>
            {compare.map(([k, ours, ask]) => (
              <div className="compare-row" key={k}>
                <span className="compare-k">{k}</span>
                <span className="ours"><Icon name="shield" size={16} /> {ours}</span>
                <span className="ask">{ask}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <div className="quote-band" data-reveal>
            <svg viewBox="0 0 220 60" width="160" height="44" fill="none" stroke="#cca25e" strokeWidth="1.4" aria-hidden="true"><path d="M0 58 L52 22 L70 34 L104 4 L136 36 L152 26 L220 58" /></svg>
            <p>“Shilajit takes centuries to form in the rock. The least we can do is give it sixty days in the sun.”</p>
            <span>The Himalayan Drop approach</span>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <CtaCards
            items={[
              { eyebrow: 'Proof', title: 'Lab results', text: 'Look up the report for the batch number on your jar.', cta: 'See lab results', href: '/lab-results/', dark: true },
              { eyebrow: 'Ritual', title: 'How to use', text: 'Resin, gummies, drops and capsules, step by step.', cta: 'Read the guide', href: '/how-to-use/' },
              { eyebrow: 'Journey', title: 'The process', text: 'Follow the six steps from mountain to jar.', cta: 'Watch the story', href: '/#process' },
            ]}
          />
        </div>
      </Reveal>
    </>
  );
}
