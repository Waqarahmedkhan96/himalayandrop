import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SimpleForm from '@/components/SimpleForm';
import DistributorNetwork from '@/components/DistributorNetwork';
import JsonLd from '@/components/JsonLd';
import { SectionHead, FeatureGrid } from '@/components/Blocks';
import { COUNTRIES, networkStats, locationLabel } from '@/lib/distributors';
import { pageMeta, abs } from '@/lib/seo';
import { tr, localizeHref } from '@/lib/i18n';

export const meta = (lang) => pageMeta('distributors', lang, '/distributors/');

const T = {
  en: {
    hero: { eyebrow: 'Distributors', title: 'From Skardu', accent: 'to the world.', lead: 'Find Himalayan Drop near you through our partners across Europe, the Middle East and Pakistan, or join the network yourself.' },
    stats: (s) => [[s.countries, 'Countries'], [s.cities, 'Cities'], [s.regions, 'Regions'], [s.contacts, 'Local contacts']],
    net: { eyebrow: 'Our growing network', title: 'Wherever you are,', accent: 'we are close.', lead: 'Every route starts in Skardu, where our shilajit is harvested above 5,000 metres. Choose a country on the map or a region below.' },
    s: { eyebrow: 'Why partner with us', title: 'Built to sell', accent: 'with confidence.' },
    why: [
      { icon: 'star', title: 'A premium brand', text: 'Gift-ready packaging in maroon and gold that stands out on any shelf.' },
      { icon: 'shield', title: 'Proof built in', text: 'Batch numbers and lab reports your customers can check themselves.' },
      { icon: 'box', title: 'Four formats', text: 'Resin, gummies, drops and capsules, for every kind of customer.' },
      { icon: 'globe', title: 'Support from Denmark', text: 'Product training, marketing assets and a direct contact person.' },
    ],
    apply: 'Come on board', applyP: 'Looking for a partner near you, or want to become one? Tell us where you are and we will connect you within two working days.',
    form: {
      submit: 'Send message', thanks: 'Message received.', thanksText: 'Thank you. Our partner team will reply by email.',
      name: 'Your name', company: 'Company (optional)', email: 'Email', phone: 'Phone', location: 'Nearest location', other: 'Other / not listed',
      intent: 'I would like to', intents: ['Buy from a partner near me', 'Become a distributor', 'Stock Himalayan Drop in my store', 'Something else'],
      message: 'Message', consent: 'I agree that Himalayan Drop and the partner in my area may use my details to answer this message.',
    },
    become: 'Become a distributor', becomeP: 'Retailers, clinics, gyms and regional distributors who share our standards are welcome. Your city not on the map? Apply to be the first.',
    excl: 'Exclusive regions', exclP: 'Regional exclusivity is available for qualified distributors.',
  },
  da: {
    hero: { eyebrow: 'Forhandlere', title: 'Fra Skardu', accent: 'til hele verden.', lead: 'Find Himalayan Drop nær dig hos vores partnere i Europa, Mellemøsten og Pakistan, eller bliv selv en del af netværket.' },
    stats: (s) => [[s.countries, 'Lande'], [s.cities, 'Byer'], [s.regions, 'Regioner'], [s.contacts, 'Lokale kontakter']],
    net: { eyebrow: 'Vores voksende netværk', title: 'Uanset hvor du er,', accent: 'er vi tæt på.', lead: 'Hver rute starter i Skardu, hvor vores shilajit høstes over 5.000 meter. Vælg et land på kortet eller en region nedenfor.' },
    s: { eyebrow: 'Derfor skal du samarbejde med os', title: 'Skabt til at sælge', accent: 'med overbevisning.' },
    why: [
      { icon: 'star', title: 'Et premium-brand', text: 'Gaveklar emballage i bordeaux og guld, der skiller sig ud på enhver hylde.' },
      { icon: 'shield', title: 'Indbygget dokumentation', text: 'Batchnumre og laboratorierapporter, som dine kunder selv kan tjekke.' },
      { icon: 'box', title: 'Fire former', text: 'Resin, vingummi, dråber og kapsler, til alle typer kunder.' },
      { icon: 'globe', title: 'Support fra Danmark', text: 'Produkttræning, markedsføringsmateriale og en fast kontaktperson.' },
    ],
    apply: 'Bliv en del af det', applyP: 'Leder du efter en partner nær dig, eller vil du selv være en? Fortæl os, hvor du er, så sætter vi dig i forbindelse inden for to hverdage.',
    form: {
      submit: 'Send besked', thanks: 'Besked modtaget.', thanksText: 'Tak. Vores partnerteam svarer dig på e-mail.',
      name: 'Dit navn', company: 'Virksomhed (valgfri)', email: 'E-mail', phone: 'Telefon', location: 'Nærmeste lokation', other: 'Andet / ikke på listen',
      intent: 'Jeg vil gerne', intents: ['Købe hos en partner nær mig', 'Blive distributør', 'Forhandle Himalayan Drop i min butik', 'Noget andet'],
      message: 'Besked', consent: 'Jeg accepterer, at Himalayan Drop og partneren i mit område må bruge mine oplysninger til at besvare denne besked.',
    },
    become: 'Bliv forhandler', becomeP: 'Butikker, klinikker, træningscentre og regionale distributører, der deler vores standarder, er velkomne. Er din by ikke på kortet? Ansøg om at blive den første.',
    excl: 'Eksklusive regioner', exclP: 'Regional eksklusivitet er mulig for kvalificerede distributører.',
  },
};

export default function DistributorsView({ lang }) {
  const t = tr(T, lang);
  const f = t.form;
  const stats = t.stats(networkStats());
  const locations = [...COUNTRIES.flatMap((c) => c.cities.map((city) => locationLabel(c, city, lang))), f.other];
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Himalayan Drop',
    url: abs(localizeHref('/distributors/', lang)),
    areaServed: COUNTRIES.flatMap((c) => c.cities.map((city) => ({ '@type': 'City', name: city.en, containedInPlace: { '@type': 'Country', name: c.en } }))),
  };

  return (
    <>
      <JsonLd data={ld} />
      <PageHero {...t.hero} />

      <section className="section tight-top">
        <div className="container">
          <div className="stat-band stat-band-4" data-reveal>
            <svg className="stat-lines" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
              <path d="M0 200 L160 110 L230 150 L380 40 L500 130 L560 100 L720 170 L820 120 L1000 180 L1200 140" fill="none" stroke="#cca25e" strokeWidth="1.2" />
            </svg>
            <dl>
              {stats.map(([v, l]) => (
                <div key={l}><dt>{v}</dt><dd>{l}</dd></div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Reveal as="section" className="section tight-top" id="network">
        <div className="container">
          <SectionHead {...t.net} />
          <DistributorNetwork formId="dist" />
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <SectionHead {...t.s} />
          <FeatureGrid items={t.why} />
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top" id="apply">
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
                [{ name: 'name', label: f.name, required: true, autoComplete: 'name' }, { name: 'company', label: f.company, autoComplete: 'organization' }],
                [{ name: 'email', label: f.email, type: 'email', required: true, autoComplete: 'email' }, { name: 'phone', label: f.phone, type: 'tel', autoComplete: 'tel' }],
                [{ name: 'location', label: f.location, type: 'select', required: true, options: locations }, { name: 'intent', label: f.intent, type: 'select', required: true, options: f.intents }],
                { name: 'message', label: f.message, type: 'textarea' },
              ]}
              consent={{ required: true, text: f.consent }}
            />
          </div>
          <aside className="contact-aside" data-reveal="stagger">
            <div className="topic dark">
              <div>
                <h3>{t.become}</h3>
                <p>{t.becomeP}</p>
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
