import Reveal from './Reveal';
import Accordion from './Accordion';

const faqs = [
  {
    q: 'What is shilajit?',
    a: 'Shilajit is a dark, resin-like substance that forms slowly in high mountain rock over many years. It has been part of traditional practices across the Himalayas for generations.',
  },
  {
    q: 'Where can I see lab results?',
    a: 'Every batch is tested by an independent laboratory. The certificate of analysis for each batch will be linked on its product page.',
  },
  {
    q: 'How do I take it?',
    a: 'Dissolve a pea-sized amount of resin or one dropper of drops in warm water or tea, or take two gummies. Follow the daily dose on the label.',
  },
  {
    q: 'How can I contact Himalayan Drop?',
    a: 'Send us a message through our contact page and our team will get back to you.',
  },
];

export default function Faq() {
  return (
    <Reveal as="section" id="faq" className="faq" style={{ scrollMarginTop: 90 }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" data-reveal>Questions</span>
          <h2 data-reveal="lines">
            <span className="line"><span>Good to know.</span></span>
          </h2>
        </div>
        <div className="faq-list" data-reveal="stagger">
          <Accordion items={faqs} />
        </div>
      </div>
    </Reveal>
  );
}
