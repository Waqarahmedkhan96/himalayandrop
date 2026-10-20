import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import FaqBrowser from '@/components/FaqBrowser';
import { Arrow } from '@/components/Arrow';

export const metadata = {
  title: 'FAQ · Himalayan Drop',
  description: 'Answers about Himalayan Drop shilajit: the product, how to use it, lab testing, orders, shipping and our guarantee.',
};

const groups = [
  {
    title: 'The product',
    items: [
      { q: 'What is shilajit?', a: 'A dark, resin-like substance that forms slowly in high mountain rock over many years. It has been part of traditional practices across the Himalayas for generations.' },
      { q: 'Where does Himalayan Drop shilajit come from?', a: 'From the heights of Skardu, Pakistan, the gateway to K2. It is collected by hand above 5,000 metres, then purified, sun-dried and tested before packing.' },
      { q: 'What is the difference between Gold and Silver Resin?', a: 'Both are Himalayan shilajit resin in UV-protected glass. The Gold Edition is our signature resin in a gift-ready box; the Silver Edition is our everyday resin.' },
      { q: 'What is in the gummies, drops and capsules?', a: 'All three combine shilajit with L-citrulline, Panax ginseng, zinc, selenium, sea moss and black seed. The gummies are strawberry, the drops elderberry, and the capsules have no taste. Each product page lists every ingredient and amount.' },
      { q: 'What is in the resin?', a: 'Only one thing: pure shilajit resin. No fillers, carriers or flavours.' },
    ],
  },
  {
    title: 'Using it',
    items: [
      { q: 'How do I take the resin?', a: 'Dissolve a pea-sized amount in warm water or tea and drink it slowly. Our How to use page shows every step.' },
      { q: 'When is the best time to take it?', a: 'Whenever it fits your routine. Many people pair it with their first tea of the day, which makes it easy to remember.' },
      { q: 'Can I take it if I am pregnant or on medication?', a: 'Please ask your doctor first if you are pregnant, breastfeeding, take medication or have a medical condition.' },
      { q: 'The resin has become hard. Is that normal?', a: 'Yes. Resin firms up in the cold and softens with warmth. Hold the jar in your hands for a minute.' },
    ],
  },
  {
    title: 'Quality & testing',
    items: [
      { q: 'Is every batch tested?', a: 'Yes. Each batch is lab-tested for heavy metals and overall quality, and its fulvic acid percentage is measured.' },
      { q: 'Where can I see my lab report?', a: 'Find the batch number on the bottom of your jar and enter it on our Lab results page, or ask us for the PDF.' },
      { q: 'Why UV-protected glass?', a: 'Light can affect natural products over time. UV-protected glass keeps the resin as it was when it left the mountain.' },
    ],
  },
  {
    title: 'Orders & shipping',
    items: [
      { q: 'Where do you ship?', a: 'Available countries, delivery times and costs are shown at checkout before you pay.' },
      { q: 'How can I track my order?', a: 'You receive a confirmation email with tracking as soon as your order ships.' },
      { q: 'Which payment methods do you accept?', a: 'All payment methods available in our secure Shopify checkout, shown when you check out.' },
    ],
  },
  {
    title: 'Returns & guarantee',
    items: [
      { q: 'What is the 60-day money-back guarantee?', a: 'If you are not satisfied, contact us within 60 days of delivery and we will refund your purchase. See our Returns & guarantee policy for the details.' },
      { q: 'My order arrived damaged. What now?', a: 'We are sorry. Send us a photo through the contact page and we will replace it.' },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Questions," accent="answered." lead="Everything about the product, using it, our lab testing, orders and the guarantee." />
      <Reveal as="section" className="section tight-top">
        <div className="container narrow" data-reveal>
          <FaqBrowser groups={groups} />
          <div className="faq-help">
            <p>Didn’t find your answer?</p>
            <Link href="/contact/" className="btn">Contact us <Arrow /></Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}
