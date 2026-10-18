import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';

export const metadata = {
  title: 'Contact · Himalayan Drop',
  description: 'Questions about an order, a product or our lab reports? Write to Himalayan Drop.',
};

const topics = [
  { t: 'Orders & delivery', d: 'Tracking, changes to an order, or a parcel that has not arrived.' },
  { t: 'Lab reports', d: 'Ask for the certificate of analysis for your batch number.' },
  { t: 'Returns & guarantee', d: 'Our 60-day money-back guarantee, explained step by step.' },
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="We’re here" accent="to help." lead="Questions about an order, a product or a lab report. Send us a message and we’ll reply by email." />
      <Reveal as="section" className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-card" data-reveal>
            <h2>Send a message</h2>
            <p className="muted">Fields marked * are required.</p>
            <ContactForm />
          </div>
          <aside className="contact-aside" data-reveal="stagger">
            {topics.map((x) => (
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
                <h3>Designed in Denmark</h3>
                <p>Himalayan Drop is a Danish brand. We answer in English and Danish.</p>
              </div>
            </div>
          </aside>
        </div>
      </Reveal>
    </>
  );
}
