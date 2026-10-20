import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SimpleForm from '@/components/SimpleForm';
import { SectionHead, FeatureGrid } from '@/components/Blocks';
import { pageMeta } from '@/lib/seo';
import { tr } from '@/lib/i18n';

export const meta = (lang) => pageMeta('distributors', lang, '/distributors/');

const T = {
  en: {
    hero: { eyebrow: 'Distributors', title: 'Bring the mountain', accent: 'to your shelf.', lead: 'We are looking for retailers, clinics, gyms and regional distributors who share our standards.' },
    s: { eyebrow: 'Why partner with us', title: 'Built to sell', accent: 'with confidence.' },
    why: [
      { icon: 'star', title: 'A premium brand', text: 'Gift-ready packaging in maroon and gold that stands out on any shelf.' },
      { icon: 'shield', title: 'Proof built in', text: 'Batch numbers and lab reports your customers can check themselves.' },
      { icon: 'box', title: 'Four formats', text: 'Resin, gummies, drops and capsules, for every kind of customer.' },
      { icon: 'globe', title: 'Support from Denmark', text: 'Product training, marketing assets and a direct contact person.' },
    ],
    apply: 'Apply to stock Himalayan Drop', applyP: 'Tell us about your business. We reply to every application.',
    form: {
      submit: 'Send application', thanks: 'Application received.', thanksText: 'Thank you. Our partner team will review it and reply by email.',
      name: 'Your name', company: 'Company', email: 'Email', phone: 'Phone', country: 'Country / region', type: 'Business type',
      types: ['Retail store', 'Online shop', 'Clinic or therapist', 'Gym or studio', 'Regional distributor', 'Other'],
      message: 'Tell us about your business', consent: 'I agree that Himalayan Drop may use my details to answer this application.',
    },
    find: 'Find a stockist', findP: 'Our first partners are joining now. Their stores will be listed here as they open.',
    excl: 'Exclusive regions', exclP: 'Regional exclusivity is available for qualified distributors.',
  },
  da: {
    hero: { eyebrow: 'Forhandlere', title: 'Bring bjerget', accent: 'ud på hylden.', lead: 'Vi søger butikker, klinikker, træningscentre og regionale distributører, der deler vores standarder.' },
    s: { eyebrow: 'Derfor skal du samarbejde med os', title: 'Skabt til at sælge', accent: 'med overbevisning.' },
    why: [
      { icon: 'star', title: 'Et premium-brand', text: 'Gaveklar emballage i bordeaux og guld, der skiller sig ud på enhver hylde.' },
      { icon: 'shield', title: 'Indbygget dokumentation', text: 'Batchnumre og laboratorierapporter, som dine kunder selv kan tjekke.' },
      { icon: 'box', title: 'Fire former', text: 'Resin, vingummi, dråber og kapsler, til alle typer kunder.' },
      { icon: 'globe', title: 'Support fra Danmark', text: 'Produkttræning, markedsføringsmateriale og en fast kontaktperson.' },
    ],
    apply: 'Ansøg om at forhandle Himalayan Drop', applyP: 'Fortæl os om din virksomhed. Vi svarer på alle ansøgninger.',
    form: {
      submit: 'Send ansøgning', thanks: 'Ansøgning modtaget.', thanksText: 'Tak. Vores partnerteam gennemgår den og svarer på e-mail.',
      name: 'Dit navn', company: 'Virksomhed', email: 'E-mail', phone: 'Telefon', country: 'Land / region', type: 'Virksomhedstype',
      types: ['Fysisk butik', 'Webshop', 'Klinik eller behandler', 'Træningscenter eller studie', 'Regional distributør', 'Andet'],
      message: 'Fortæl os om din virksomhed', consent: 'Jeg accepterer, at Himalayan Drop må bruge mine oplysninger til at besvare denne ansøgning.',
    },
    find: 'Find en forhandler', findP: 'Vores første partnere er på vej. Deres butikker vises her, efterhånden som de åbner.',
    excl: 'Eksklusive regioner', exclP: 'Regional eksklusivitet er mulig for kvalificerede distributører.',
  },
};

export default function DistributorsView({ lang }) {
  const t = tr(T, lang);
  const f = t.form;
  return (
    <>
      <PageHero {...t.hero} />
      <Reveal as="section" className="section tight-top">
        <div className="container">
          <SectionHead {...t.s} />
          <FeatureGrid items={t.why} />
        </div>
      </Reveal>
      <Reveal as="section" className="section tight-top">
        <div className="container contact-grid">
          <div className="contact-card" data-reveal>
            <h2>{t.apply}</h2>
            <p className="muted">{t.applyP}</p>
            <SimpleForm
              id="dist"
              submit={f.submit}
              thanks={f.thanks}
              thanksText={f.thanksText}
              fields={[
                [{ name: 'name', label: f.name, required: true, autoComplete: 'name' }, { name: 'company', label: f.company, required: true, autoComplete: 'organization' }],
                [{ name: 'email', label: f.email, type: 'email', required: true, autoComplete: 'email' }, { name: 'phone', label: f.phone, type: 'tel', autoComplete: 'tel' }],
                [{ name: 'country', label: f.country, required: true, autoComplete: 'country-name' }, { name: 'type', label: f.type, type: 'select', required: true, options: f.types }],
                { name: 'message', label: f.message, type: 'textarea' },
              ]}
              consent={{ required: true, text: f.consent }}
            />
          </div>
          <aside className="contact-aside" data-reveal="stagger">
            <div className="topic dark">
              <div>
                <h3>{t.find}</h3>
                <p>{t.findP}</p>
              </div>
            </div>
            <div className="topic">
              <span className="topic-peak" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 19 9.5 8l3.5 6 2.5-4L21 19Z" /></svg></span>
              <div><h3>{t.excl}</h3><p>{t.exclP}</p></div>
            </div>
          </aside>
        </div>
      </Reveal>
    </>
  );
}
