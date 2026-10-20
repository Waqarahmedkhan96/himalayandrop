'use client';
import Reveal from './Reveal';
import Accordion from './Accordion';
import { useT } from './LangProvider';

const T = {
  en: {
    eyebrow: 'Questions',
    h: 'Good to know.',
    faqs: [
      { q: 'What is shilajit?', a: 'Shilajit is a dark, resin-like substance that forms slowly in high mountain rock over many years. It has been part of traditional practices across the Himalayas and the Karakoram for generations.' },
      { q: 'How can I tell if shilajit is real?', a: 'Look for a named origin and altitude, a lab report for your batch number, a fulvic acid percentage, and every ingredient listed with its amount. Pure resin is firm when cold and softens in the warmth of your hand.' },
      { q: 'Where can I see lab results?', a: 'Every batch is tested by an independent laboratory for heavy metals, quality and fulvic acid. Enter the batch number from your jar on our Lab results page.' },
      { q: 'How do I take it?', a: 'Dissolve a pea-sized amount of resin in warm water or tea, take three drops, two gummies or two capsules. Follow the daily dose on the label.' },
      { q: 'How can I contact Himalayan Drop?', a: 'Send us a message through our contact page and our team will get back to you, in English or Danish.' },
    ],
  },
  da: {
    eyebrow: 'Spørgsmål',
    h: 'Godt at vide.',
    faqs: [
      { q: 'Hvad er shilajit?', a: 'Shilajit er et mørkt, resinagtigt stof, der dannes langsomt i klipper højt oppe i bjergene over mange år. I generationer har det været en del af traditionel praksis i Himalaya og Karakoram.' },
      { q: 'Hvordan ser jeg, om shilajit er ægte?', a: 'Kig efter en navngivet oprindelse og højde, en laboratorierapport for dit batchnummer, en procentsats for fulvinsyre og alle ingredienser med mængde. Ren resin er fast, når den er kold, og bliver blød i varmen fra din hånd.' },
      { q: 'Hvor kan jeg se laboratorieresultaterne?', a: 'Hver batch testes af et uafhængigt laboratorium for tungmetaller, kvalitet og fulvinsyre. Indtast batchnummeret fra din krukke på siden Laboratorieresultater.' },
      { q: 'Hvordan tager jeg det?', a: 'Opløs en ærtestor mængde resin i varmt vand eller te, eller tag tre dråber, to vingummi eller to kapsler. Følg den daglige dosis på etiketten.' },
      { q: 'Hvordan kontakter jeg Himalayan Drop?', a: 'Send os en besked via kontaktsiden, så vender vi tilbage, på dansk eller engelsk.' },
    ],
  },
};

export default function Faq() {
  const t = useT(T);
  return (
    <Reveal as="section" id="faq" className="faq" style={{ scrollMarginTop: 90 }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" data-reveal>{t.eyebrow}</span>
          <h2 data-reveal="lines">
            <span className="line"><span>{t.h}</span></span>
          </h2>
        </div>
        <div className="faq-list" data-reveal="stagger">
          <Accordion items={t.faqs} />
        </div>
      </div>
    </Reveal>
  );
}
