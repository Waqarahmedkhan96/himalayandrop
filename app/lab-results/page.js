import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import BatchLookup from '@/components/BatchLookup';
import { SectionHead, FeatureGrid, CtaCards } from '@/components/Blocks';

export const metadata = {
  title: 'Lab Results · Himalayan Drop',
  description: 'Every Himalayan Drop batch is lab-tested for heavy metals, quality and fulvic acid. Look up the report for your jar.',
};

const tests = [
  { icon: 'shield', title: 'Heavy metals', text: 'Lead, cadmium, mercury and arsenic, each reported against its legal limit.' },
  { icon: 'flask', title: 'Fulvic acid %', text: 'The fulvic acid percentage of every batch is measured and printed on the report.' },
  { icon: 'leaf', title: 'Microbiology', text: 'Bacteria, yeasts and moulds, to confirm clean handling and packing.' },
  { icon: 'star', title: 'Overall quality', text: 'Identity and purity checks before a batch is released for sale.' },
];

export default function LabResultsPage() {
  return (
    <>
      <PageHero eyebrow="Lab results" title="Proof for" accent="every batch." lead="Every batch is tested before it reaches you. Enter the batch number from the bottom of your jar to see its report." />

      <Reveal as="section" className="section tight-top">
        <div className="container narrow" data-reveal>
          <BatchLookup />
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <SectionHead eyebrow="What we test" title="Four checks," accent="every time." />
          <FeatureGrid items={tests} />
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <div className="find-batch" data-reveal>
            <div className="find-batch-art" aria-hidden="true">
              <svg viewBox="0 0 220 160">
                <ellipse cx="110" cy="80" rx="96" ry="64" fill="#40010a" />
                <ellipse cx="110" cy="80" rx="80" ry="52" fill="none" stroke="#cca25e" strokeDasharray="3 5" />
                <rect x="58" y="62" width="104" height="36" rx="8" fill="#f7f1e8" />
                <text x="110" y="85" textAnchor="middle" fontFamily="Manrope Variable, Manrope, sans-serif" fontWeight="800" fontSize="15" fill="#580f1b" letterSpacing="1.5">HD-G-2611</text>
              </svg>
            </div>
            <div>
              <span className="eyebrow">Where to find it</span>
              <h3>Your batch number is on the bottom of the jar.</h3>
              <p>It starts with HD. Can’t find it, or need the full certificate as a PDF? Write to us and we’ll send it.</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <CtaCards
            items={[
              { eyebrow: 'Standards', title: 'Certificates', text: 'The quality standards we produce and test to.', cta: 'See certificates', href: '/certificates/', dark: true },
              { eyebrow: 'Guide', title: 'Read a lab report', text: 'What heavy metal limits and results actually mean.', cta: 'Read the guide', href: '/blog/how-to-read-a-certificate-of-analysis/' },
              { eyebrow: 'Help', title: 'Request a report', text: 'Send us your batch number and we’ll email the PDF.', cta: 'Contact us', href: '/contact/' },
            ]}
          />
        </div>
      </Reveal>
    </>
  );
}
