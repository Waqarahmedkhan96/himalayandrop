import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Link from '@/components/LLink';
import { getSeals, Seal } from '@/components/Seal';
import { CtaCards, Notice } from '@/components/Blocks';
import { pageMeta } from '@/lib/seo';
import { tr } from '@/lib/i18n';

export const meta = (lang) => pageMeta('certificates', lang, '/certificates/');

// Replace `file` with a link to each certificate PDF. Remove any you do not hold.
const T = {
  en: {
    hero: { eyebrow: 'Certificates', title: 'Standards you', accent: 'can check.', lead: 'The quality systems we produce under, the tests every batch passes, and the promise behind every jar.' },
    details: {
      gmp: { title: 'GMP certified', text: 'Good Manufacturing Practice: production follows documented, hygienic and consistent procedures, checked by audit.', file: null },
      iso22000: { title: 'ISO 22000', text: 'An international standard for food safety management, covering every step from raw material to packing.', file: null },
      iso9001: { title: 'ISO 9001', text: 'An international standard for quality management: clear processes, traceability and continuous improvement.', file: null },
      metals: { title: 'Heavy metals tested', text: 'Every batch is tested by an independent laboratory for lead, cadmium, mercury and arsenic.', file: '/lab-results/' },
      guarantee: { title: '60-day guarantee', text: 'Not satisfied? Contact us within 60 days of delivery and we refund your purchase.', file: '/policies/refund-policy/' },
    },
    view: 'View certificate', more: 'Learn more', onRequest: 'Certificate on request', notice: 'Certificate PDFs can be requested through our contact page.',
    ctas: [
      { eyebrow: 'Every batch', title: 'Lab results', text: 'Look up the report for your jar.', cta: 'See lab results', href: '/lab-results/', dark: true },
      { eyebrow: 'Process', title: 'Our shilajit', text: 'Origin, purification and drying.', cta: 'Learn more', href: '/our-shilajit/' },
      { eyebrow: 'Help', title: 'Request a certificate', text: 'We’ll email the PDF you need.', cta: 'Contact us', href: '/contact/' },
    ],
  },
  da: {
    hero: { eyebrow: 'Certifikater', title: 'Standarder, du', accent: 'kan tjekke.', lead: 'Kvalitetssystemerne vi producerer under, testene hver batch består, og løftet bag hver krukke.' },
    details: {
      gmp: { title: 'GMP-certificeret', text: 'God fremstillingspraksis: produktionen følger dokumenterede, hygiejniske og ensartede procedurer, kontrolleret ved audit.', file: null },
      iso22000: { title: 'ISO 22000', text: 'En international standard for ledelse af fødevaresikkerhed, der dækker hvert trin fra råvare til pakning.', file: null },
      iso9001: { title: 'ISO 9001', text: 'En international standard for kvalitetsledelse: klare processer, sporbarhed og løbende forbedring.', file: null },
      metals: { title: 'Testet for tungmetaller', text: 'Hver batch testes af et uafhængigt laboratorium for bly, cadmium, kviksølv og arsen.', file: '/lab-results/' },
      guarantee: { title: '60 dages garanti', text: 'Ikke tilfreds? Kontakt os inden for 60 dage efter levering, så refunderer vi dit køb.', file: '/policies/refund-policy/' },
    },
    view: 'Se certifikatet', more: 'Læs mere', onRequest: 'Certifikat på forespørgsel', notice: 'Certifikater som PDF kan bestilles via vores kontaktside.',
    ctas: [
      { eyebrow: 'Hver batch', title: 'Laboratorieresultater', text: 'Find rapporten for din krukke.', cta: 'Se resultaterne', href: '/lab-results/', dark: true },
      { eyebrow: 'Proces', title: 'Vores shilajit', text: 'Oprindelse, rensning og tørring.', cta: 'Læs mere', href: '/our-shilajit/' },
      { eyebrow: 'Hjælp', title: 'Bestil et certifikat', text: 'Vi mailer den PDF, du har brug for.', cta: 'Kontakt os', href: '/contact/' },
    ],
  },
};

export default function CertificatesView({ lang }) {
  const t = tr(T, lang);
  const seals = getSeals(lang);
  return (
    <>
      <PageHero {...t.hero} />
      <Reveal as="section" className="section tight-top">
        <div className="container">
          <div className="cert-grid" data-reveal="stagger">
            {seals.map((s) => {
              const d = t.details[s.id];
              return (
                <article className="cert-item" key={s.id}>
                  <div className="cert-seal"><Seal s={s} prefix="cp" /></div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  {d.file ? (
                    <Link className="btn small outline" href={d.file}>{d.file.endsWith('.pdf') ? t.view : t.more}</Link>
                  ) : (
                    <span className="btn small outline is-static">{t.onRequest}</span>
                  )}
                </article>
              );
            })}
          </div>
          <Notice>{t.notice}</Notice>
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
