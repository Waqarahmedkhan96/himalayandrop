import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import BundleCard from '@/components/BundleCard';
import JsonLd from '@/components/JsonLd';
import Accordion from '@/components/Accordion';
import { SectionHead, FeatureGrid } from '@/components/Blocks';
import { Icon } from '@/components/Icons';
import { getDemoBundles, maxSaving } from '@/lib/bundles';
import { getProduct, isShopifyConnected } from '@/lib/shopify';
import { pageMeta, abs } from '@/lib/seo';
import { tr, localizeHref } from '@/lib/i18n';

export const meta = (lang) => pageMeta('bundles', lang, '/bundles/');

// With Shopify connected, each bundle's price, stock and variant come from the
// Shopify product with the same handle.
async function getBundles(lang) {
  const demo = getDemoBundles(lang);
  if (!isShopifyConnected) return demo;
  return Promise.all(
    demo.map(async (b) => {
      try {
        const p = await getProduct(b.handle, lang);
        return p ? { ...b, amount: p.amount ?? b.amount, currency: p.currency, variantId: p.variantId, available: p.available } : b;
      } catch {
        return b;
      }
    })
  );
}

const T = {
  en: {
    hero: (n) => ({ eyebrow: 'Bundles', title: 'Save up to', accent: `${n}%.`, lead: 'Our products, paired into sets for every kind of day. One order, one parcel, and a better price than buying separately.' }),
    trust: ['Lab report for every batch', '60-day money-back guarantee', 'Shipped together in one parcel'],
    s1: { eyebrow: 'Choose your bundle', title: 'Sets made', accent: 'to be shared.' },
    s2: { eyebrow: 'Why a bundle', title: 'More ritual,', accent: 'less spend.' },
    why: [
      { icon: 'star', title: 'A better price', text: 'Every bundle costs less than buying the same products one by one.' },
      { icon: 'sun', title: 'Formats that fit your day', text: 'Resin for slow mornings at home, gummies, capsules or drops for busy days and travel.' },
      { icon: 'gift', title: 'Ready to give', text: 'Our products come in gift-ready packaging, so a bundle makes an easy, thoughtful present.' },
    ],
    s3: { eyebrow: 'Questions', title: 'Good to know', accent: 'about bundles.' },
    faq: [
      { q: 'Can I use two formats on the same day?', a: 'Each product has its own daily dose on the label. Most people use one format per day, for example resin at home and gummies when they travel. Do not take the full daily dose of several shilajit products on the same day, and ask your doctor if you are unsure.' },
      { q: 'Does every product in a bundle have a lab report?', a: 'Yes. Each product carries its own batch number, and you can look up its report on our Lab results page.' },
      { q: 'Does the 60-day guarantee apply to bundles?', a: 'Yes. If you are not satisfied, contact us within 60 days of delivery and we refund your purchase.' },
      { q: 'Can I send a bundle as a gift?', a: 'Yes. Gift of the Mountain is made for it, and every product comes in gift-ready packaging. Add the recipient’s address at checkout.' },
    ],
  },
  da: {
    hero: (n) => ({ eyebrow: 'Sæt', title: 'Spar op til', accent: `${n}%.`, lead: 'Vores produkter samlet i sæt til alle slags dage. Én ordre, én pakke og en bedre pris end at købe dem hver for sig.' }),
    trust: ['Laboratorierapport for hver batch', '60 dages penge-tilbage-garanti', 'Sendes samlet i én pakke'],
    s1: { eyebrow: 'Vælg dit sæt', title: 'Sæt skabt', accent: 'til at deles.' },
    s2: { eyebrow: 'Hvorfor et sæt', title: 'Mere ritual,', accent: 'mindre forbrug.' },
    why: [
      { icon: 'star', title: 'En bedre pris', text: 'Hvert sæt koster mindre end de samme produkter købt hver for sig.' },
      { icon: 'sun', title: 'Former, der passer til din dag', text: 'Resin til rolige morgener derhjemme, vingummi, kapsler eller dråber til travle dage og rejser.' },
      { icon: 'gift', title: 'Klar til at give', text: 'Vores produkter kommer i gaveklar emballage, så et sæt er en nem og gennemtænkt gave.' },
    ],
    s3: { eyebrow: 'Spørgsmål', title: 'Godt at vide', accent: 'om sæt.' },
    faq: [
      { q: 'Kan jeg bruge to former samme dag?', a: 'Hvert produkt har sin egen daglige dosis på etiketten. De fleste bruger én form om dagen, for eksempel resin derhjemme og vingummi på rejsen. Tag ikke den fulde daglige dosis af flere shilajit-produkter samme dag, og spørg din læge, hvis du er i tvivl.' },
      { q: 'Har alle produkter i et sæt en laboratorierapport?', a: 'Ja. Hvert produkt har sit eget batchnummer, og du kan finde rapporten på siden Laboratorieresultater.' },
      { q: 'Gælder 60 dages garanti også for sæt?', a: 'Ja. Er du ikke tilfreds, så kontakt os inden for 60 dage efter levering, så refunderer vi dit køb.' },
      { q: 'Kan jeg sende et sæt som gave?', a: 'Ja. Gift of the Mountain er lavet til det, og alle produkter kommer i gaveklar emballage. Skriv modtagerens adresse i checkout.' },
    ],
  },
};

export default async function BundlesView({ lang }) {
  const t = tr(T, lang);
  const bundles = await getBundles(lang);
  const list = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: bundles.map((b, i) => ({ '@type': 'ListItem', position: i + 1, name: b.name, url: abs(`${localizeHref('/bundles/', lang)}#${b.handle}`) })),
  };
  return (
    <>
      <JsonLd data={list} />
      <PageHero {...t.hero(maxSaving())} />

      <section className="section tight-top bundles-trust-wrap">
        <ul className="bundles-trust container">
          {t.trust.map((x, i) => (
            <li key={x}><Icon name={['flask', 'shield', 'box'][i]} size={16} /> {x}</li>
          ))}
        </ul>
      </section>

      <Reveal as="section" className="section tight-top" id="choose">
        <div className="container">
          <SectionHead {...t.s1} />
          <div className="bundle-grid" data-reveal="stagger">
            {bundles.map((b) => <BundleCard key={b.handle} bundle={b} />)}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <SectionHead {...t.s2} />
          <FeatureGrid items={t.why} />
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container narrow">
          <SectionHead {...t.s3} />
          <div className="faq-list" data-reveal>
            <Accordion items={t.faq} idPrefix="bfaq" />
          </div>
        </div>
      </Reveal>
    </>
  );
}
