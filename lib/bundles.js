// Bundles: sets of Himalayan Drop products at a lower combined price.
//
// HOW TO SELL THEM IN SHOPIFY
// Create each bundle as its own product with the same handle (for example with
// the free Shopify Bundles app). Once Shopify is connected, the bundles page
// reads the real price, stock and variant from Shopify by handle, so Buy now
// and Add to cart put the bundle straight into the Shopify cart.
//
// Prices here are PLACEHOLDERS for the design, like the product prices.
// Names and tags describe the products, not health effects (EU rules).

import { demoProducts } from './products';

const price = (handle) => demoProducts.find((p) => p.handle === handle)?.amount || 0;

const RAW = [
  {
    handle: 'bundle-summit-set',
    image: '/images/bundles/summit-set.webp',
    items: ['shilajit-gold-resin', 'shilajit-gummies', 'shilajit-drops', 'shilajit-capsules'],
    amount: 1149,
    featured: true,
    en: { name: 'The Summit Set', tagline: 'Every format, one ritual', badge: 'Best value', tags: ['Resin', 'Gummies', 'Drops', 'Capsules'], text: 'Resin for slow mornings, gummies and capsules for busy days, drops for your tea. The whole range of formats in one set.' },
    da: { name: 'The Summit Set', tagline: 'Alle former, ét ritual', badge: 'Bedste værdi', tags: ['Resin', 'Vingummi', 'Dråber', 'Kapsler'], text: 'Resin til rolige morgener, vingummi og kapsler til travle dage, dråber til din te. Alle former samlet i ét sæt.' },
  },
  {
    handle: 'bundle-daily-ritual',
    image: '/images/bundles/daily-ritual.webp',
    items: ['shilajit-gold-resin', 'shilajit-gummies'],
    amount: 679,
    en: { name: 'The Daily Ritual', tagline: 'Resin at home, gummies on the go', badge: 'Most popular', tags: ['Pure resin', 'Strawberry', 'On the go'], text: 'Our Gold Edition resin for your morning cup, and strawberry gummies for the days you are away from home.' },
    da: { name: 'The Daily Ritual', tagline: 'Resin hjemme, vingummi på farten', badge: 'Mest populær', tags: ['Ren resin', 'Jordbær', 'På farten'], text: 'Vores Gold Edition resin til morgenkoppen og vingummi med jordbær til de dage, hvor du er hjemmefra.' },
  },
  {
    handle: 'bundle-home-and-away',
    image: '/images/bundles/home-and-away.webp',
    items: ['shilajit-gold-resin', 'shilajit-capsules'],
    amount: 699,
    en: { name: 'Home & Away', tagline: 'The ritual, wherever you are', tags: ['Pure resin', 'No taste', 'Travel'], text: 'Resin for calm mornings at home, capsules for travel and long days. No taste, no measuring when you are on the move.' },
    da: { name: 'Home & Away', tagline: 'Ritualet, uanset hvor du er', tags: ['Ren resin', 'Ingen smag', 'Rejse'], text: 'Resin til rolige morgener derhjemme, kapsler til rejser og lange dage. Ingen smag og ingen afmåling, når du er på farten.' },
  },
  {
    handle: 'bundle-ritual-duo',
    image: '/images/bundles/ritual-duo.webp',
    items: ['shilajit-gummies', 'shilajit-capsules'],
    amount: 529,
    en: { name: 'The Ritual Duo', tagline: 'Ready to take, morning to night', tags: ['Strawberry', 'No taste', 'Zero prep'], text: 'Two ready-to-take formats with 500 mg shilajit per serving: strawberry gummies and tasteless capsules.' },
    da: { name: 'The Ritual Duo', tagline: 'Klar til brug, morgen til aften', tags: ['Jordbær', 'Ingen smag', 'Ingen forberedelse'], text: 'To former, der er klar til brug, med 500 mg shilajit pr. portion: vingummi med jordbær og kapsler uden smag.' },
  },
  {
    handle: 'bundle-gift-of-the-mountain',
    image: '/images/bundles/gift-of-the-mountain.webp',
    items: ['shilajit-gold-resin', 'shilajit-silver-resin'],
    amount: 749,
    en: { name: 'Gift of the Mountain', tagline: 'Gold and Silver, side by side', badge: 'Gift set', tags: ['Gold Edition', 'Silver Edition', 'Gift-ready'], text: 'Both of our resins in their gift boxes. A thoughtful present, or one for you and one to share.' },
    da: { name: 'Gift of the Mountain', tagline: 'Gold og Silver, side om side', badge: 'Gavesæt', tags: ['Gold Edition', 'Silver Edition', 'Gaveklar'], text: 'Begge vores resiner i gaveæsker. En gennemtænkt gave, eller én til dig og én at dele.' },
  },
  {
    handle: 'bundle-complete-collection',
    image: '/images/bundles/complete-collection.webp',
    items: ['shilajit-gold-resin', 'shilajit-silver-resin', 'shilajit-gummies', 'shilajit-drops', 'shilajit-capsules'],
    amount: 1449,
    en: { name: 'The Complete Collection', tagline: 'All five, at our best price', badge: 'Biggest saving', tags: ['All products', 'Gift-ready'], text: 'Every Himalayan Drop product in one order: Gold and Silver Resin, Gummies, Drops and Capsules.' },
    da: { name: 'The Complete Collection', tagline: 'Alle fem, til vores bedste pris', badge: 'Største besparelse', tags: ['Alle produkter', 'Gaveklar'], text: 'Alle produkter fra Himalayan Drop i én ordre: Gold og Silver Resin, vingummi, dråber og kapsler.' },
  },
];

export function getDemoBundles(lang = 'en') {
  return RAW.map((b) => {
    const compare = b.items.reduce((s, h) => s + price(h), 0);
    return {
      handle: b.handle,
      image: b.image,
      items: b.items,
      featured: !!b.featured,
      amount: b.amount,
      compareAt: compare,
      currency: 'DKK',
      savePct: Math.round((1 - b.amount / compare) * 100),
      variantId: null,
      available: false,
      ...(b[lang] || b.en),
    };
  });
}

export const maxSaving = () => Math.max(...getDemoBundles().map((b) => b.savePct));
