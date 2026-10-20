import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';
import { pageMeta } from '@/lib/seo';
import { tr } from '@/lib/i18n';

export const meta = (lang) => pageMeta('contact', lang, '/contact/');

const T = {
  en: {
    eyebrow: 'Contact', title: 'We’re here', accent: 'to help.', lead: 'Questions about an order, a product or a lab report. Send us a message and we’ll reply by email.',
    send: 'Send a message', req: 'Fields marked * are required.',
    topics: [
      { t: 'Orders & delivery', d: 'Tracking, changes to an order, or a parcel that has not arrived.' },
      { t: 'Lab reports', d: 'Ask for the certificate of analysis for your batch number.' },
      { t: 'Returns & guarantee', d: 'Our 60-day money-back guarantee, explained step by step.' },
    ],
    dk: 'Designed in Denmark', dkText: 'Himalayan Drop is a Danish brand. We answer in English and Danish.',
  },
  da: {
    eyebrow: 'Kontakt', title: 'Vi er her', accent: 'for at hjælpe.', lead: 'Spørgsmål om en ordre, et produkt eller en laboratorierapport. Send os en besked, så svarer vi på e-mail.',
    send: 'Send en besked', req: 'Felter markeret med * skal udfyldes.',
    topics: [
      { t: 'Ordre og levering', d: 'Sporing, ændringer i en ordre eller en pakke, der ikke er kommet frem.' },
      { t: 'Laboratorierapporter', d: 'Bed om analysecertifikatet for dit batchnummer.' },
      { t: 'Returnering og garanti', d: 'Vores 60 dages penge-tilbage-garanti, forklaret trin for trin.' },
    ],
    dk: 'Designet i Danmark', dkText: 'Himalayan Drop er et dansk brand. Vi svarer på dansk og engelsk.',
  },
};

export default function ContactView({ lang }) {
  const t = tr(T, lang);
  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} accent={t.accent} lead={t.lead} />
      <Reveal as="section" className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-card" data-reveal>
            <h2>{t.send}</h2>
            <p className="muted">{t.req}</p>
            <ContactForm />
          </div>
          <aside className="contact-aside" data-reveal="stagger">
            {t.topics.map((x) => (
              <div className="topic" key={x.t}>
                <span className="topic-peak" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 19 9.5 8l3.5 6 2.5-4L21 19Z" /></svg>
                </span>
                <div>
                  <h3>{x.t}</h3>
                  <p>{x.d}</p>
                </div>
              </div>
            ))}
            <div className="topic dark">
              <div>
                <h3>{t.dk}</h3>
                <p>{t.dkText}</p>
              </div>
            </div>
          </aside>
        </div>
      </Reveal>
    </>
  );
}
