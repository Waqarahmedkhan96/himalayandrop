import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { SectionHead, FeatureGrid, CtaCards } from '@/components/Blocks';
import { Icon } from '@/components/Icons';
import Sources from '@/components/Sources';
import { refs } from '@/lib/sources';
import { pageMeta } from '@/lib/seo';
import { tr } from '@/lib/i18n';

export const meta = (lang) => pageMeta('our-shilajit', lang, '/our-shilajit/');

const T = {
  en: {
    hero: { eyebrow: 'Our shilajit', title: 'Pure, patient,', accent: 'proven.', lead: 'What sets Himalayan Drop apart is not one secret. It is many slow, careful steps, and proof at the end.' },
    s1: { eyebrow: 'What makes it ours', title: 'Six things we', accent: 'never rush.' },
    features: [
      { icon: 'mountain', title: 'Above 5,000 metres', text: 'Collected from high rock faces near Skardu, Pakistan, far from roads, towns and industry.' },
      { icon: 'hand', title: 'Collected by hand', text: 'Harvesters gather the shilajit-bearing stones by hand, a few at a time.' },
      { icon: 'filter', title: 'Filtered several times', text: 'Dissolved in pure water and filtered again and again until only the resin remains.' },
      { icon: 'sun', title: 'Sun-dried, up to 60 days', text: 'Dried slowly in UV-protected glass jars set in steel bowls. No ovens, no shortcuts.' },
      { icon: 'flask', title: 'Tested every batch', text: 'Heavy metals, overall quality and fulvic acid percentage, checked by a lab.' },
      { icon: 'jar', title: 'Sealed in UV-protected glass', text: 'Packed in light-protective glass, from our hands to yours.' },
    ],
    inside: {
      eyebrow: 'What’s inside', title: 'What shilajit', accent: 'contains.',
      lead: 'Shilajit is a natural complex of humic substances, minerals and organic compounds. Here is what research describes, and what we measure in our own.',
      stats: [['85+', 'Minerals & trace elements*'], ['70.1%', 'Fulvic acid, Gold Resin*'], ['5,000 m+', 'Harvest altitude'], ['60', 'Days of sun-drying, up to'], ['4', 'Lab checks per batch']],
      note: '*Specification of our shilajit raw material, confirmed on each batch report. Values vary naturally between batches.',
      parts: [
        { icon: 'flask', title: 'Humic substances', text: 'Fulvic and humic acids make up the largest share of shilajit. Fulvic acid is the most common quality marker, which is why we state it as a number.' },
        { icon: 'mountain', title: 'Minerals', text: 'Calcium, potassium and magnesium are among the main elements, alongside trace elements such as selenium, chromium and cobalt.' },
        { icon: 'leaf', title: 'Organic compounds', text: 'Amino acids (mainly glycine), fatty acids, phenolic compounds such as caffeic and gallic acid, and dibenzo-α-pyrones.' },
        { icon: 'shield', title: 'Why we test for metals', text: 'Because shilajit forms in rock, it can naturally contain lead, cadmium, mercury or arsenic. Every batch is tested against EU limits.' },
      ],
      sourcesTitle: 'Sources',
      sources: refs('kamgar2025', 'wilson2011', 'stohs2014', 'saper2008', 'reg2023915'),
    },
    s2: { eyebrow: 'Choose with confidence', title: 'What to look for', accent: 'in any shilajit.', lead: 'Six questions worth asking before you buy shilajit, and how we answer them.' },
    head: ['Himalayan Drop', 'Ask any seller'],
    compare: [
      ['Origin', 'Collected above 5,000 m near Skardu', 'Is the harvest region named, and how high is it?'],
      ['Purification', 'Dissolved in pure water and filtered several times', 'How is it cleaned, and how many times?'],
      ['Drying', 'Slow sun-drying for up to 60 days', 'Is it dried slowly, or with heat to save time?'],
      ['Testing', 'Lab report for every batch', 'Can you see the report for your own batch?'],
      ['Packaging', 'UV-protected glass', 'Does the packaging protect the resin from light?'],
      ['Transparency', 'Batch number on every pack', 'Can you trace your jar back to its batch?'],
    ],
    quote: '“Shilajit takes centuries to form in the rock. The least we can do is give it sixty days in the sun.”',
    quoteBy: 'The Himalayan Drop approach',
    ctas: [
      { eyebrow: 'Proof', title: 'Lab results', text: 'Look up the report for the batch number on your jar.', cta: 'See lab results', href: '/lab-results/', dark: true },
      { eyebrow: 'Ritual', title: 'How to use', text: 'Resin, gummies, drops and capsules, step by step.', cta: 'Read the guide', href: '/how-to-use/' },
      { eyebrow: 'Guide', title: 'Is it real?', text: 'Six checks to tell authentic shilajit from the rest.', cta: 'Read the guide', href: '/blog/how-to-tell-if-shilajit-is-real/' },
    ],
  },
  da: {
    hero: { eyebrow: 'Vores shilajit', title: 'Ren, tålmodig,', accent: 'dokumenteret.', lead: 'Det, der gør Himalayan Drop anderledes, er ikke én hemmelighed. Det er mange langsomme, omhyggelige trin, og bevis til sidst.' },
    s1: { eyebrow: 'Det gør den til vores', title: 'Seks ting, vi', accent: 'aldrig forhaster.' },
    features: [
      { icon: 'mountain', title: 'Over 5.000 meter', text: 'Samlet på høje klippevægge ved Skardu i Pakistan, langt fra veje, byer og industri.' },
      { icon: 'hand', title: 'Samlet med håndkraft', text: 'Høstfolkene samler de shilajit-holdige sten med hånden, få ad gangen.' },
      { icon: 'filter', title: 'Filtreret flere gange', text: 'Opløst i rent vand og filtreret igen og igen, til kun resinen er tilbage.' },
      { icon: 'sun', title: 'Soltørret i op til 60 dage', text: 'Tørret langsomt i UV-beskyttede glaskrukker i stålskåle. Ingen ovne, ingen genveje.' },
      { icon: 'flask', title: 'Hver batch testes', text: 'Tungmetaller, kvalitet og indhold af fulvinsyre, kontrolleret af et laboratorium.' },
      { icon: 'jar', title: 'Forseglet i UV-beskyttet glas', text: 'Pakket i lysbeskyttende glas, fra os til dig.' },
    ],
    inside: {
      eyebrow: 'Det er der i', title: 'Hvad shilajit', accent: 'indeholder.',
      lead: 'Shilajit er et naturligt kompleks af humusstoffer, mineraler og organiske forbindelser. Her er, hvad forskningen beskriver, og hvad vi selv måler.',
      stats: [['85+', 'Mineraler og sporstoffer*'], ['70,1 %', 'Fulvinsyre, Gold Resin*'], ['5.000 m+', 'Høsthøjde'], ['60', 'Dages soltørring, op til'], ['4', 'Laboratorietjek pr. batch']],
      note: '*Specifikation for vores råvare shilajit, bekræftet i rapporten for hver batch. Værdierne varierer naturligt fra batch til batch.',
      parts: [
        { icon: 'flask', title: 'Humusstoffer', text: 'Fulvinsyre og huminsyre udgør den største del af shilajit. Fulvinsyre er den mest brugte kvalitetsmarkør, og derfor angiver vi den som et tal.' },
        { icon: 'mountain', title: 'Mineraler', text: 'Calcium, kalium og magnesium er blandt de vigtigste grundstoffer, sammen med sporstoffer som selen, krom og kobolt.' },
        { icon: 'leaf', title: 'Organiske forbindelser', text: 'Aminosyrer (især glycin), fedtsyrer, fenoliske forbindelser som kaffesyre og gallussyre samt dibenzo-α-pyroner.' },
        { icon: 'shield', title: 'Derfor tester vi for metaller', text: 'Fordi shilajit dannes i klipper, kan den naturligt indeholde bly, cadmium, kviksølv eller arsen. Hver batch testes mod EU’s grænseværdier.' },
      ],
      sourcesTitle: 'Kilder',
      sources: refs('kamgar2025', 'wilson2011', 'stohs2014', 'saper2008', 'reg2023915'),
    },
    s2: { eyebrow: 'Vælg med ro i maven', title: 'Det skal du kigge efter', accent: 'i al shilajit.', lead: 'Seks spørgsmål, der er værd at stille, før du køber shilajit, og vores svar.' },
    head: ['Himalayan Drop', 'Spørg enhver forhandler'],
    compare: [
      ['Oprindelse', 'Samlet over 5.000 m ved Skardu', 'Er høstområdet navngivet, og hvor højt ligger det?'],
      ['Rensning', 'Opløst i rent vand og filtreret flere gange', 'Hvordan renses den, og hvor mange gange?'],
      ['Tørring', 'Langsom soltørring i op til 60 dage', 'Tørres den langsomt, eller med varme for at spare tid?'],
      ['Test', 'Laboratorierapport for hver batch', 'Kan du se rapporten for din egen batch?'],
      ['Emballage', 'UV-beskyttet glas', 'Beskytter emballagen resinen mod lys?'],
      ['Gennemsigtighed', 'Batchnummer på hver pakning', 'Kan du spore din krukke tilbage til dens batch?'],
    ],
    quote: '“Shilajit tager århundreder om at blive dannet i klippen. Det mindste, vi kan gøre, er at give den tres dage i solen.”',
    quoteBy: 'Himalayan Drops tilgang',
    ctas: [
      { eyebrow: 'Bevis', title: 'Laboratorieresultater', text: 'Find rapporten for batchnummeret på din krukke.', cta: 'Se resultaterne', href: '/lab-results/', dark: true },
      { eyebrow: 'Ritual', title: 'Sådan bruger du det', text: 'Resin, vingummi, dråber og kapsler, trin for trin.', cta: 'Læs guiden', href: '/how-to-use/' },
      { eyebrow: 'Guide', title: 'Er den ægte?', text: 'Seks tjek, der skiller ægte shilajit fra resten.', cta: 'Læs guiden', href: '/blog/saadan-ser-du-om-shilajit-er-aegte/' },
    ],
  },
};

export default function OurShilajitView({ lang }) {
  const t = tr(T, lang);
  return (
    <>
      <PageHero {...t.hero} />

      <Reveal as="section" className="section">
        <div className="container">
          <SectionHead {...t.s1} />
          <FeatureGrid items={t.features} />
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top" id="whats-inside">
        <div className="container">
          <SectionHead eyebrow={t.inside.eyebrow} title={t.inside.title} accent={t.inside.accent} lead={t.inside.lead} />
          <div className="stat-band" data-reveal>
            <svg className="stat-lines" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
              <path d="M0 200 L160 110 L230 150 L380 40 L500 130 L560 100 L720 170 L820 120 L1000 180 L1200 140" fill="none" stroke="#cca25e" strokeWidth="1.2" />
            </svg>
            <dl>
              {t.inside.stats.map(([v, l]) => (
                <div key={l}><dt>{v}</dt><dd>{l}</dd></div>
              ))}
            </dl>
          </div>
          <p className="stat-note">{t.inside.note}</p>
          <div className="inside-grid" data-reveal="stagger">
            {t.inside.parts.map((x) => (
              <div className="inside-item" key={x.title}>
                <span className="feature-icon"><Icon name={x.icon} size={22} /></span>
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </div>
            ))}
          </div>
          <Sources items={t.inside.sources} title={t.inside.sourcesTitle} id="inside-sources" />
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <SectionHead {...t.s2} />
          <div className="compare" data-reveal>
            <div className="compare-head">
              <span />
              <span className="ours"><img src="/images/logo-mark.png" alt="" width="22" height="27" /> {t.head[0]}</span>
              <span>{t.head[1]}</span>
            </div>
            {t.compare.map(([k, ours, ask]) => (
              <div className="compare-row" key={k}>
                <span className="compare-k">{k}</span>
                <span className="ours"><Icon name="shield" size={16} /> {ours}</span>
                <span className="ask">{ask}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <div className="quote-band" data-reveal>
            <svg viewBox="0 0 220 60" width="160" height="44" fill="none" stroke="#cca25e" strokeWidth="1.4" aria-hidden="true"><path d="M0 58 L52 22 L70 34 L104 4 L136 36 L152 26 L220 58" /></svg>
            <p>{t.quote}</p>
            <span>{t.quoteBy}</span>
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
