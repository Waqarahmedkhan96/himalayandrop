import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import BatchLookup from '@/components/BatchLookup';
import { SectionHead, FeatureGrid, CtaCards } from '@/components/Blocks';
import { pageMeta } from '@/lib/seo';
import { tr } from '@/lib/i18n';

export const meta = (lang) => pageMeta('lab-results', lang, '/lab-results/');

const T = {
  en: {
    hero: { eyebrow: 'Lab results', title: 'Proof for', accent: 'every batch.', lead: 'Every batch is tested before it reaches you. Enter the batch number from the bottom of your jar to see its report.' },
    s: { eyebrow: 'What we test', title: 'Four checks,', accent: 'every time.' },
    tests: [
      { icon: 'shield', title: 'Heavy metals', text: 'Lead, cadmium, mercury and arsenic, each reported against its legal limit.' },
      { icon: 'flask', title: 'Fulvic acid %', text: 'The fulvic acid percentage of every batch is measured and printed on the report.' },
      { icon: 'leaf', title: 'Microbiology', text: 'Bacteria, yeasts and moulds, to confirm clean handling and packing.' },
      { icon: 'star', title: 'Overall quality', text: 'Identity and purity checks before a batch is released for sale.' },
    ],
    find: 'Where to find it', findH: 'Your batch number is on the bottom of the jar.', findP: 'It starts with HD. Can’t find it, or need the full certificate as a PDF? Write to us and we’ll send it.',
    ctas: [
      { eyebrow: 'Standards', title: 'Certificates', text: 'The quality standards we produce and test to.', cta: 'See certificates', href: '/certificates/', dark: true },
      { eyebrow: 'Guide', title: 'Read a lab report', text: 'What heavy metal limits and results actually mean.', cta: 'Read the guide', href: '/blog/how-to-read-a-certificate-of-analysis/' },
      { eyebrow: 'Help', title: 'Request a report', text: 'Send us your batch number and we’ll email the PDF.', cta: 'Contact us', href: '/contact/' },
    ],
  },
  da: {
    hero: { eyebrow: 'Laboratorieresultater', title: 'Bevis for', accent: 'hver batch.', lead: 'Hver batch testes, før den når frem til dig. Indtast batchnummeret fra bunden af din krukke og se rapporten.' },
    s: { eyebrow: 'Det tester vi', title: 'Fire tjek,', accent: 'hver gang.' },
    tests: [
      { icon: 'shield', title: 'Tungmetaller', text: 'Bly, cadmium, kviksølv og arsen, hver især målt mod den lovlige grænseværdi.' },
      { icon: 'flask', title: 'Fulvinsyre %', text: 'Indholdet af fulvinsyre måles i hver batch og står i rapporten.' },
      { icon: 'leaf', title: 'Mikrobiologi', text: 'Bakterier, gær og skimmel, så vi ved, at håndtering og pakning er hygiejnisk.' },
      { icon: 'star', title: 'Samlet kvalitet', text: 'Kontrol af identitet og renhed, før en batch frigives til salg.' },
    ],
    find: 'Her finder du det', findH: 'Dit batchnummer står i bunden af krukken.', findP: 'Det starter med HD. Kan du ikke finde det, eller vil du have hele certifikatet som PDF? Skriv til os, så sender vi det.',
    ctas: [
      { eyebrow: 'Standarder', title: 'Certifikater', text: 'Kvalitetsstandarderne, vi producerer og tester efter.', cta: 'Se certifikaterne', href: '/certificates/', dark: true },
      { eyebrow: 'Guide', title: 'Læs en analyserapport', text: 'Hvad grænseværdier og resultater for tungmetaller betyder.', cta: 'Læs guiden', href: '/blog/saadan-laeser-du-en-analyserapport/' },
      { eyebrow: 'Hjælp', title: 'Bestil en rapport', text: 'Send os dit batchnummer, så mailer vi PDF’en.', cta: 'Kontakt os', href: '/contact/' },
    ],
  },
};

export default function LabResultsView({ lang }) {
  const t = tr(T, lang);
  return (
    <>
      <PageHero {...t.hero} />

      <Reveal as="section" className="section tight-top">
        <div className="container narrow" data-reveal>
          <BatchLookup />
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <SectionHead {...t.s} />
          <FeatureGrid items={t.tests} />
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
              <span className="eyebrow">{t.find}</span>
              <h3>{t.findH}</h3>
              <p>{t.findP}</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <CtaCards items={t.ctas} />
        </div>
      </Reveal>
    </>
  );
}
