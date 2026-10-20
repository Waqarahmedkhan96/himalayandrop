import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { Manifesto, Route } from '@/components/StoryBlocks';
import { SectionHead, FeatureGrid, CtaCards } from '@/components/Blocks';
import { pageMeta } from '@/lib/seo';
import { tr } from '@/lib/i18n';

export const meta = (lang) => pageMeta('our-story', lang, '/our-story/');

const T = {
  en: {
    hero: { eyebrow: 'Our story', title: 'The Mountain', accent: 'within.', lead: 'A Danish brand with its roots high in the Himalayas.' },
    why: 'Why we began',
    manifesto: 'We started Himalayan Drop because we wanted shilajit we could trust. Not another unmarked tub with a story, but a resin with an origin, a process and a lab report behind it. So we went to the source: high mountain rock near Skardu, hand-collected stones, water, sun and time. Then we packed it the way something this old deserves.',
    route: { eyebrow: 'Two places, one ritual', h: 'Sourced in the Himalayas.', hg: 'Designed in Denmark.', p: 'The resin comes from the mountains. The care, the design and the standards come from Scandinavia: simple, honest, built to last.' },
    s: { eyebrow: 'What we stand for', title: 'Patience, proof', accent: 'and place.' },
    values: [
      { icon: 'clock', title: 'Patience', text: 'Shilajit forms over centuries. We give it the time it needs: up to 60 days in the sun, never rushed with heat.' },
      { icon: 'shield', title: 'Proof', text: 'A lab report for every batch, and a batch number on every jar. Trust should be something you can check.' },
      { icon: 'mountain', title: 'Place', text: 'High mountain rock near Skardu, collected by hand above 5,000 metres. Where it comes from is half of what it is.' },
    ],
    quote: '“Every jar carries a little of the mountain. We call it the Mountain within.”',
    ctas: [
      { eyebrow: 'The process', title: 'From mountain to jar', text: 'Six patient steps, told in motion.', cta: 'Watch the story', href: '/#process', dark: true },
      { eyebrow: 'Proof', title: 'Certificates', text: 'The standards behind every batch.', cta: 'See certificates', href: '/certificates/' },
      { eyebrow: 'Shop', title: 'Begin your ritual', text: 'Resin, gummies, drops or capsules.', cta: 'Shop now', href: '/shop/' },
    ],
  },
  da: {
    hero: { eyebrow: 'Vores historie', title: 'The Mountain', accent: 'within.', lead: 'Et dansk brand med rødder højt oppe i bjergene.' },
    why: 'Hvorfor vi begyndte',
    manifesto: 'Vi startede Himalayan Drop, fordi vi ville have shilajit, vi kunne stole på. Ikke endnu en umærket bøtte med en historie, men en resin med en oprindelse, en proces og en laboratorierapport bag sig. Så vi tog til kilden: høje klipper ved Skardu, sten samlet med håndkraft, vand, sol og tid. Og så pakkede vi den, som noget så gammelt fortjener.',
    route: { eyebrow: 'To steder, ét ritual', h: 'Hentet i bjergene.', hg: 'Designet i Danmark.', p: 'Resinen kommer fra bjergene. Omhuen, designet og standarderne kommer fra Skandinavien: enkelt, ærligt og bygget til at holde.' },
    s: { eyebrow: 'Det står vi for', title: 'Tålmodighed, bevis', accent: 'og sted.' },
    values: [
      { icon: 'clock', title: 'Tålmodighed', text: 'Shilajit dannes over århundreder. Vi giver den den tid, den behøver: op til 60 dage i solen, aldrig forceret med varme.' },
      { icon: 'shield', title: 'Bevis', text: 'En laboratorierapport for hver batch og et batchnummer på hver krukke. Tillid skal være noget, du kan tjekke.' },
      { icon: 'mountain', title: 'Sted', text: 'Høje klipper ved Skardu, samlet med håndkraft over 5.000 meter. Hvor den kommer fra, er halvdelen af, hvad den er.' },
    ],
    quote: '“Hver krukke bærer lidt af bjerget i sig. Vi kalder det the Mountain within.”',
    ctas: [
      { eyebrow: 'Processen', title: 'Fra bjerg til krukke', text: 'Seks tålmodige trin, fortalt i bevægelse.', cta: 'Se historien', href: '/#process', dark: true },
      { eyebrow: 'Bevis', title: 'Certifikater', text: 'Standarderne bag hver batch.', cta: 'Se certifikaterne', href: '/certificates/' },
      { eyebrow: 'Shop', title: 'Begynd dit ritual', text: 'Resin, vingummi, dråber eller kapsler.', cta: 'Køb nu', href: '/shop/' },
    ],
  },
};

export default function OurStoryView({ lang }) {
  const t = tr(T, lang);
  return (
    <>
      <PageHero {...t.hero} />

      <section className="section">
        <div className="container narrow">
          <span className="eyebrow manifesto-eyebrow">{t.why}</span>
          <Manifesto text={t.manifesto} />
        </div>
      </section>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <div className="route-card" data-reveal>
            <div className="route-copy">
              <span className="eyebrow">{t.route.eyebrow}</span>
              <h2>{t.route.h} <em className="gold-text">{t.route.hg}</em></h2>
              <p>{t.route.p}</p>
            </div>
            <Route />
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <SectionHead {...t.s} />
          <FeatureGrid items={t.values} />
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <div className="quote-band" data-reveal>
            <svg viewBox="0 0 220 60" width="160" height="44" fill="none" stroke="#cca25e" strokeWidth="1.4" aria-hidden="true"><path d="M0 58 L52 22 L70 34 L104 4 L136 36 L152 26 L220 58" /></svg>
            <p>{t.quote}</p>
            <span>Himalayan Drop</span>
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
