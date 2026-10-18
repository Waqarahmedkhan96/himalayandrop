import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { seals, Seal } from '@/components/Seal';
import { CtaCards, Notice } from '@/components/Blocks';

export const metadata = {
  title: 'Certificates · Himalayan Drop',
  description: 'GMP, ISO 22000 and ISO 9001 standards, heavy metal testing on every batch and a 60-day money-back guarantee.',
};

// Replace `file` with a link to each certificate PDF. Remove any you do not hold.
const details = {
  gmp: { title: 'GMP certified', text: 'Good Manufacturing Practice: production follows documented, hygienic and consistent procedures, checked by audit.', file: null },
  iso22000: { title: 'ISO 22000', text: 'An international standard for food safety management, covering every step from raw material to packing.', file: null },
  iso9001: { title: 'ISO 9001', text: 'An international standard for quality management: clear processes, traceability and continuous improvement.', file: null },
  metals: { title: 'Heavy metals tested', text: 'Every batch is tested by an independent laboratory for lead, cadmium, mercury and arsenic.', file: '/lab-results/' },
  guarantee: { title: '60-day guarantee', text: 'Not satisfied? Contact us within 60 days of delivery and we refund your purchase.', file: '/policies/refund-policy/' },
};

export default function CertificatesPage() {
  return (
    <>
      <PageHero eyebrow="Certificates" title="Standards you" accent="can check." lead="The quality systems we produce under, the tests every batch passes, and the promise behind every jar." />
      <Reveal as="section" className="section tight-top">
        <div className="container">
          <div className="cert-grid" data-reveal="stagger">
            {seals.map((s) => {
              const d = details[s.id];
              return (
                <article className="cert-item" key={s.id}>
                  <div className="cert-seal"><Seal s={s} prefix="cp" /></div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  {d.file ? (
                    <a className="btn small outline" href={d.file}>{d.file.endsWith('.pdf') ? 'View certificate' : 'Learn more'}</a>
                  ) : (
                    <span className="btn small outline is-static">Certificate on request</span>
                  )}
                </article>
              );
            })}
          </div>
          <Notice>Certificate PDFs can be requested through our contact page.</Notice>
        </div>
      </Reveal>
      <Reveal as="section" className="section tight-top">
        <div className="container">
          <CtaCards
            items={[
              { eyebrow: 'Every batch', title: 'Lab results', text: 'Look up the report for your jar.', cta: 'See lab results', href: '/lab-results/', dark: true },
              { eyebrow: 'Process', title: 'Our shilajit', text: 'Origin, purification and drying.', cta: 'Learn more', href: '/our-shilajit/' },
              { eyebrow: 'Help', title: 'Request a certificate', text: 'We’ll email the PDF you need.', cta: 'Contact us', href: '/contact/' },
            ]}
          />
        </div>
      </Reveal>
    </>
  );
}
