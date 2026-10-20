import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SimpleForm from '@/components/SimpleForm';
import { SectionHead, FeatureGrid } from '@/components/Blocks';

export const metadata = {
  title: 'Distributors · Himalayan Drop',
  description: 'Stock Himalayan Drop in your store, clinic, gym or region. Apply to become a distribution partner.',
};

const why = [
  { icon: 'star', title: 'A premium brand', text: 'Gift-ready packaging in maroon and gold that stands out on any shelf.' },
  { icon: 'shield', title: 'Proof built in', text: 'Batch numbers and lab reports your customers can check themselves.' },
  { icon: 'box', title: 'Four formats', text: 'Resin, gummies, drops and capsules, for every kind of customer.' },
  { icon: 'globe', title: 'Support from Denmark', text: 'Product training, marketing assets and a direct contact person.' },
];

export default function DistributorsPage() {
  return (
    <>
      <PageHero eyebrow="Distributors" title="Bring the mountain" accent="to your shelf." lead="We are looking for retailers, clinics, gyms and regional distributors who share our standards." />
      <Reveal as="section" className="section tight-top">
        <div className="container">
          <SectionHead eyebrow="Why partner with us" title="Built to sell" accent="with confidence." />
          <FeatureGrid items={why} />
        </div>
      </Reveal>
      <Reveal as="section" className="section tight-top">
        <div className="container contact-grid">
          <div className="contact-card" data-reveal>
            <h2>Apply to stock Himalayan Drop</h2>
            <p className="muted">Tell us about your business. We reply to every application.</p>
            <SimpleForm
              id="dist"
              submit="Send application"
              thanks="Application received."
              thanksText="Thank you. Our partner team will review it and reply by email."
              fields={[
                [{ name: 'name', label: 'Your name', required: true, autoComplete: 'name' }, { name: 'company', label: 'Company', required: true, autoComplete: 'organization' }],
                [{ name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' }, { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel' }],
                [{ name: 'country', label: 'Country / region', required: true, autoComplete: 'country-name' }, { name: 'type', label: 'Business type', type: 'select', required: true, options: ['Retail store', 'Online shop', 'Clinic or therapist', 'Gym or studio', 'Regional distributor', 'Other'] }],
                { name: 'message', label: 'Tell us about your business', type: 'textarea' },
              ]}
              consent={{ required: true, text: 'I agree that Himalayan Drop may use my details to answer this application.' }}
            />
          </div>
          <aside className="contact-aside" data-reveal="stagger">
            <div className="topic dark">
              <div>
                <h3>Find a stockist</h3>
                <p>Our first partners are joining now. Their stores will be listed here as they open.</p>
              </div>
            </div>
            <div className="topic">
              <span className="topic-peak" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 19 9.5 8l3.5 6 2.5-4L21 19Z" /></svg></span>
              <div><h3>Exclusive regions</h3><p>Regional exclusivity is available for qualified distributors.</p></div>
            </div>
          </aside>
        </div>
      </Reveal>
    </>
  );
}
