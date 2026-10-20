import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import HowToTabs from '@/components/HowToTabs';
import { SectionHead, CtaCards } from '@/components/Blocks';
import { pageMeta } from '@/lib/seo';
import { tr } from '@/lib/i18n';

export const meta = (lang) => pageMeta('how-to-use', lang, '/how-to-use/');

const T = {
  en: {
    hero: { eyebrow: 'How to use', title: 'Your ritual,', accent: 'step by step.', lead: 'Choose your format below. Each takes less than a minute to prepare.' },
    s: { eyebrow: 'Good to know', title: 'Five simple', accent: 'notes.' },
    notes: [
      ['Warm, never boiling', 'Dissolve resin and drops in warm liquid. Boiling water is not needed and not recommended.'],
      ['Follow your label', 'Always follow the daily dose printed on your product. Do not exceed it.'],
      ['Store it well', 'Keep it closed, at room temperature and out of direct sunlight.'],
      ['Make it a habit', 'Same time, same cup. Consistency is what turns a product into a ritual.'],
      ['Ask your doctor first', 'If you are pregnant, breastfeeding, take medication or have a medical condition.'],
    ],
    tip: 'Ritual tip', tipText: 'Pair it with something you already do every morning, like your first tea. The ritual sticks when it has a place in your day.',
    ctas: [
      { eyebrow: 'Shop', title: 'Choose your format', text: 'Resin, gummies, drops or capsules.', cta: 'Shop now', href: '/shop/', dark: true },
      { eyebrow: 'Journal', title: 'Which one suits you?', text: 'A simple comparison of the four formats.', cta: 'Read article', href: '/blog/resin-gummies-or-drops/' },
      { eyebrow: 'Questions', title: 'FAQ', text: 'Answers about using, storing and ordering.', cta: 'Read FAQ', href: '/faq/' },
    ],
  },
  da: {
    hero: { eyebrow: 'Sådan bruger du det', title: 'Dit ritual,', accent: 'trin for trin.', lead: 'Vælg din form nedenfor. Hver af dem tager under et minut at forberede.' },
    s: { eyebrow: 'Godt at vide', title: 'Fem enkle', accent: 'råd.' },
    notes: [
      ['Varmt, aldrig kogende', 'Opløs resin og dråber i varm væske. Kogende vand er ikke nødvendigt og frarådes.'],
      ['Følg etiketten', 'Følg altid den daglige dosis, der står på produktet. Overskrid den ikke.'],
      ['Opbevar det godt', 'Hold det lukket, ved stuetemperatur og væk fra direkte sollys.'],
      ['Gør det til en vane', 'Samme tid, samme kop. Det er gentagelsen, der gør et produkt til et ritual.'],
      ['Spørg din læge først', 'Hvis du er gravid, ammer, tager medicin eller har en sygdom.'],
    ],
    tip: 'Tip til ritualet', tipText: 'Kobl det til noget, du allerede gør hver morgen, som din første kop te. Ritualet holder, når det har en fast plads i din dag.',
    ctas: [
      { eyebrow: 'Shop', title: 'Vælg din form', text: 'Resin, vingummi, dråber eller kapsler.', cta: 'Køb nu', href: '/shop/', dark: true },
      { eyebrow: 'Journal', title: 'Hvad passer til dig?', text: 'En enkel sammenligning af de fire former.', cta: 'Læs artiklen', href: '/blog/resin-vingummi-draaber-eller-kapsler/' },
      { eyebrow: 'Spørgsmål', title: 'FAQ', text: 'Svar om brug, opbevaring og bestilling.', cta: 'Læs FAQ', href: '/faq/' },
    ],
  },
};

export default function HowToUseView({ lang }) {
  const t = tr(T, lang);
  return (
    <>
      <PageHero {...t.hero} />

      <Reveal as="section" className="section tight-top">
        <div className="container" data-reveal>
          <HowToTabs />
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <div className="notes-card" data-reveal>
            <SectionHead {...t.s} align="left" />
            <ol className="notes-list">
              {t.notes.map(([title, d], i) => (
                <li key={title}>
                  <span className="howto-num">{i + 1}</span>
                  <div><strong>{title}</strong><p>{d}</p></div>
                </li>
              ))}
            </ol>
            <div className="pro-tip">
              <span className="eyebrow">{t.tip}</span>
              <p>{t.tipText}</p>
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
