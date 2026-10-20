// Demo products, used until Shopify is connected.
// Once connected, products come from your Shopify admin instead.
// Prices here are PLACEHOLDERS for the design. Once Shopify is connected,
// real prices and variants come from your Shopify admin.
//
// Formulas are taken from the current packaging designs. The labels mark
// these amounts as not yet final, so confirm every value (and the fulvic
// acid %) against the final label and batch documents before launch.

import { productText, productSeoMore } from './products-i18n';

const SPEC_NOTE = 'Minerals and fulvic acid refer to the shilajit raw material and are confirmed on each batch report.';

const gallery = (dir, alts) => alts.map((alt, i) => ({ src: `/images/products/${dir}/${String(i + 1).padStart(2, '0')}.webp`, alt }));

export const demoProducts = [
  {
    handle: 'shilajit-gold-resin',
    title: 'Shilajit Resin Gold Edition',
    subtitle: 'Gold Edition · 30 g · Skardu',
    description:
      'Pure shilajit resin from the heights of Skardu, Pakistan, harvested above 5,000 metres. One ingredient, one origin, sealed in light-protective glass. Dissolve a small amount in warm water or tea.',
    image: '/images/pack-gold.webp',
    imageAlt: 'Himalayan Drop Shilajit Resin Gold Edition box',
    tag: 'Gold Edition',
    badges: [['mountain', 'Skardu'], ['jar', 'Pure resin'], ['shield', 'Lab tested']],
    options: ['1 box', '2 boxes', '3 boxes'],
    cutout: true,
    facts: [['85+', 'Minerals*'], ['70.1%', 'Fulvic acid*'], ['30 g', 'Net weight']],
    formula: {
      title: 'Ingredients',
      serving: 'Single ingredient',
      rows: [['Shilajit resin', '100%']],
      note: SPEC_NOTE,
    },
    directions: 'Dissolve a pea-sized amount in a glass of warm (not boiling) water or tea. Follow the daily serving on your label.',
    storage: 'Store in a cool, dry place away from direct sunlight. Keep tightly closed.',
    caution: 'For adults. Not for children or pregnant or nursing women. Consult a healthcare professional if you take medication or have a medical condition.',
    gallery: gallery('gold-resin', [
      'Shilajit Resin Gold Edition box, three-quarter view',
      'Shilajit Resin box front: From the heights of Skardu',
      'Gold Grade Shilajit box lid with gold mountains',
      'Box side: A higher origin',
      'Box side: Rooted in Skardu, harvested above 5,000 m',
      'Box side: One ingredient, one origin',
      'Box back: ingredient, origin and net weight',
    ]),
    price: '499 kr',
    amount: 499, // PLACEHOLDER price for the design. Real prices come from Shopify.
    variantId: null,
    available: false,
  },
  {
    handle: 'shilajit-silver-resin',
    title: 'Shilajit Resin Silver Edition',
    subtitle: 'Silver Edition · 30 g',
    description:
      'Our everyday shilajit resin, sourced from high-altitude rock and packed in amber glass to protect it from light.',
    image: '/images/pack-silver.webp',
    imageAlt: 'Shilajit Resin Silver Edition jar and box',
    tag: 'Silver Edition',
    badges: [['mountain', 'Himalayan'], ['jar', 'Pure resin'], ['sun', 'Amber glass']],
    options: ['1 jar', '2 jars', '3 jars'],
    cutout: true,
    formula: {
      title: 'Ingredients',
      serving: 'Single ingredient',
      rows: [['Shilajit resin', '100%']],
      note: SPEC_NOTE,
    },
    directions: 'Dissolve a pea-sized amount in a glass of warm (not boiling) water or tea. Follow the daily serving on your label.',
    storage: 'Store in a cool, dry place away from direct sunlight. Keep tightly closed.',
    caution: 'For adults. Not for children or pregnant or nursing women. Consult a healthcare professional if you take medication or have a medical condition.',
    price: '399 kr',
    amount: 399, // PLACEHOLDER price for the design. Real prices come from Shopify.
    variantId: null,
    available: false,
  },
  {
    handle: 'shilajit-gummies',
    title: 'Shilajit Gummies',
    subtitle: 'Gold Edition · Strawberry · 60 gummies',
    description:
      'Strawberry shilajit gummies, Gold Edition, with L-citrulline, Panax ginseng, zinc, selenium, sea moss and black seed. Two gummies per serving, 30 servings in a metal tin.',
    image: '/images/pack-gummies.webp',
    imageAlt: 'Himalayan Drop Shilajit Gummies Gold Edition tin, strawberry flavour',
    tag: 'Strawberry',
    badges: [['berry', 'Strawberry'], ['leaf', '6 actives'], ['box', '60 gummies']],
    options: ['1 tin', '2 tins', '3 tins'],
    cutout: true,
    facts: [['85+', 'Minerals*'], ['83.1%', 'Fulvic acid*'], ['30', 'Servings']],
    formula: {
      title: 'Active ingredients',
      serving: 'Per 2 gummies',
      rows: [
        ['Shilajit', '500 mg'],
        ['L-Citrulline', '50 mg'],
        ['Panax ginseng extract', '20 mg'],
        ['Zinc', '1 mg'],
        ['Selenium', '5 µg'],
        ['Sea moss', '20 mg'],
        ['Black seed', '10 mg'],
      ],
      note: SPEC_NOTE,
    },
    directions: 'Adults: chew 2 gummies daily.',
    storage: 'Store in a dry place at up to 25 °C, away from sunlight. Keep the tin tightly closed.',
    caution: 'Not for children or pregnant women. Consult your doctor if you have a medical condition or take medication. Do not exceed the daily dose.',
    gallery: gallery('gummies', ['Shilajit Gummies Gold Edition tin, front', 'Shilajit Gummies tin, back with nutrition and active ingredients']),
    price: '299 kr',
    amount: 299, // PLACEHOLDER price for the design. Real prices come from Shopify.
    variantId: null,
    available: false,
  },
  {
    handle: 'shilajit-drops',
    title: 'Shilajit Drops',
    subtitle: 'Elderberry · 30 ml',
    description:
      'Elderberry-flavoured shilajit drops with L-citrulline, Panax ginseng, zinc, selenium, black seed and sea moss. Amber glass with a gold dropper, in a gift tube.',
    image: '/images/pack-drops.webp',
    imageAlt: 'Himalayan Drop Shilajit Drops tube and amber dropper bottle, elderberry flavour',
    tag: 'Elderberry',
    badges: [['drop', 'Elderberry'], ['leaf', '6 actives'], ['sun', 'Amber glass']],
    options: ['1 bottle', '2 bottles', '3 bottles'],
    cutout: true,
    facts: [['85+', 'Minerals*'], ['83.1%', 'Fulvic acid*'], ['30 ml', 'Net volume']],
    formula: {
      title: 'Active ingredients',
      serving: 'Per daily portion: 3 drops',
      rows: [
        ['Shilajit', '20 mg'],
        ['L-Citrulline', '5 mg'],
        ['Panax ginseng extract', '2 mg'],
        ['Zinc', '0.5 mg'],
        ['Selenium', '5 µg'],
        ['Black seed', '2 mg'],
        ['Sea moss', '2 mg'],
      ],
      note: SPEC_NOTE,
    },
    directions: 'Adults: take 3 drops daily, directly or in water or tea, 30 minutes before food. Shake well.',
    storage: 'Store at room temperature. Do not refrigerate. Keep tightly closed.',
    caution: 'Not for children or pregnant women. Consult your doctor if you have a medical condition or take medication. Do not exceed the daily dose.',
    gallery: gallery('drops', ['Shilajit Drops gift tube, front', 'Shilajit Drops amber bottles, front and back', 'Shilajit Drops tube, back with active ingredients']),
    price: '349 kr',
    amount: 349, // PLACEHOLDER price for the design. Real prices come from Shopify.
    variantId: null,
    available: false,
  },
  {
    handle: 'shilajit-capsules',
    title: 'Shilajit Capsules',
    subtitle: 'Daily Wellness Formula · 60 capsules',
    description:
      'Our daily formula in capsule form: shilajit with L-citrulline, Panax ginseng, zinc, selenium, black seed and sea moss. Two capsules a day with water. No taste, no measuring.',
    image: '/images/pack-capsules.webp',
    imageAlt: 'Himalayan Drop Shilajit Capsules box and bottle, 60 capsules',
    tag: 'New',
    badges: [['jar', '60 capsules'], ['leaf', '6 actives'], ['clock', '2 a day']],
    options: ['1 bottle', '2 bottles', '3 bottles'],
    cutout: true,
    facts: [['85+', 'Minerals*'], ['83.1%', 'Fulvic acid*'], ['60', 'Capsules']],
    formula: {
      title: 'Supplement facts',
      serving: 'Per 2 capsules',
      rows: [
        ['Shilajit', '500 mg'],
        ['L-Citrulline', '250 mg'],
        ['Panax ginseng extract', '100 mg'],
        ['Zinc', '5 mg'],
        ['Selenium', '55 µg'],
        ['Black seed', '100 mg'],
        ['Sea moss', '100 mg'],
      ],
      note: SPEC_NOTE,
    },
    directions: 'Adults: take 2 capsules daily with water.',
    storage: 'Store in a cool, dry place away from direct sunlight. Keep tightly closed.',
    caution: 'Not for children. If pregnant or nursing, taking medication or under medical care, consult a healthcare professional before use. Do not exceed the suggested serving.',
    gallery: gallery('capsules', [
      'Shilajit Capsules bottle, front',
      'Shilajit Capsules bottle with 85+ minerals and 83.1% fulvic acid',
      'Shilajit Capsules box, front',
      'Shilajit Capsules box, top',
      'Shilajit Capsules box, supplement facts',
      'Shilajit Capsules box, shilajit purity',
      'Shilajit Capsules box, how to use, caution and storage',
      'Shilajit Capsules bottle, back with supplement facts',
    ]),
    price: '329 kr',
    amount: 329, // PLACEHOLDER price for the design. Real prices come from Shopify.
    variantId: null,
    available: false,
  },
];

// ───────── Danish product text ─────────
// Fields here replace the English ones on /da/ pages.

const NOTE_DA = 'Mineraler og fulvinsyre gælder råvaren shilajit og bekræftes i rapporten for hver batch.';
const RESIN_DA = {
  directions: 'Opløs en ærtestor mængde i et glas varmt (ikke kogende) vand eller te. Følg den daglige dosis på etiketten.',
  storage: 'Opbevares tørt og køligt, væk fra direkte sollys. Luk låget godt.',
  caution: 'Til voksne. Ikke til børn, gravide eller ammende. Tal med din læge, hvis du tager medicin eller har en sygdom.',
};

export const productDa = {
  'shilajit-gold-resin': {
    subtitle: 'Gold Edition · 30 g · Skardu',
    description: 'Ren shilajit resin fra højderne ved Skardu i Pakistan, høstet over 5.000 meter. Én ingrediens, én oprindelse, forseglet i lysbeskyttende glas. Opløs en lille mængde i varmt vand eller te.',
    imageAlt: 'Himalayan Drop Shilajit Resin Gold Edition æske',
    badges: [['mountain', 'Skardu'], ['jar', 'Ren resin'], ['shield', 'Laboratorietestet']],
    options: ['1 æske', '2 æsker', '3 æsker'],
    facts: [['85+', 'Mineraler*'], ['70,1 %', 'Fulvinsyre*'], ['30 g', 'Nettovægt']],
    formula: { title: 'Ingredienser', serving: 'Én ingrediens', rows: [['Shilajit resin', '100 %']], note: NOTE_DA },
    ...RESIN_DA,
    gallery: [
      'Shilajit Resin Gold Edition æske set skråt forfra',
      'Shilajit Resin æske forside: From the heights of Skardu',
      'Gold Grade Shilajit låg med guldbjerge',
      'Æskens side: A higher origin',
      'Æskens side: Rooted in Skardu, høstet over 5.000 m',
      'Æskens side: One ingredient, one origin',
      'Æskens bagside: ingrediens, oprindelse og nettovægt',
    ],
  },
  'shilajit-silver-resin': {
    subtitle: 'Silver Edition · 30 g',
    description: 'Vores shilajit resin til hverdagen, hentet fra klipper i stor højde og pakket i ravfarvet glas, der beskytter mod lys.',
    imageAlt: 'Shilajit Resin Silver Edition krukke og æske',
    badges: [['mountain', 'Himalaya'], ['jar', 'Ren resin'], ['sun', 'Ravfarvet glas']],
    options: ['1 krukke', '2 krukker', '3 krukker'],
    formula: { title: 'Ingredienser', serving: 'Én ingrediens', rows: [['Shilajit resin', '100 %']], note: NOTE_DA },
    ...RESIN_DA,
  },
  'shilajit-gummies': {
    subtitle: 'Gold Edition · Jordbær · 60 vingummi',
    description: 'Shilajit vingummi med jordbærsmag, Gold Edition, med L-citrullin, Panax ginseng, zink, selen, sea moss og sortkommen. To vingummi pr. portion, 30 portioner i en metaldåse.',
    imageAlt: 'Himalayan Drop Shilajit Gummies Gold Edition dåse med jordbærsmag',
    tag: 'Jordbær',
    badges: [['berry', 'Jordbær'], ['leaf', '6 aktive'], ['box', '60 vingummi']],
    options: ['1 dåse', '2 dåser', '3 dåser'],
    facts: [['85+', 'Mineraler*'], ['83,1 %', 'Fulvinsyre*'], ['30', 'Portioner']],
    formula: {
      title: 'Aktive ingredienser',
      serving: 'Pr. 2 vingummi',
      rows: [['Shilajit', '500 mg'], ['L-citrullin', '50 mg'], ['Panax ginseng-ekstrakt', '20 mg'], ['Zink', '1 mg'], ['Selen', '5 µg'], ['Sea moss', '20 mg'], ['Sortkommen', '10 mg']],
      note: NOTE_DA,
    },
    directions: 'Voksne: tyg 2 vingummi dagligt.',
    storage: 'Opbevares tørt ved højst 25 °C, væk fra sollys. Luk dåsen godt.',
    caution: 'Ikke til børn eller gravide. Tal med din læge, hvis du har en sygdom eller tager medicin. Overskrid ikke den anbefalede daglige dosis.',
    gallery: ['Shilajit Gummies Gold Edition dåse, forside', 'Shilajit Gummies dåse, bagside med næringsindhold og aktive ingredienser'],
  },
  'shilajit-drops': {
    subtitle: 'Hyldebær · 30 ml',
    description: 'Shilajit dråber med hyldebærsmag og L-citrullin, Panax ginseng, zink, selen, sortkommen og sea moss. Ravfarvet glas med guldpipette, i et gaverør.',
    imageAlt: 'Himalayan Drop Shilajit Drops gaverør og ravfarvet pipetteflaske med hyldebærsmag',
    tag: 'Hyldebær',
    badges: [['drop', 'Hyldebær'], ['leaf', '6 aktive'], ['sun', 'Ravfarvet glas']],
    options: ['1 flaske', '2 flasker', '3 flasker'],
    facts: [['85+', 'Mineraler*'], ['83,1 %', 'Fulvinsyre*'], ['30 ml', 'Indhold']],
    formula: {
      title: 'Aktive ingredienser',
      serving: 'Pr. daglig dosis: 3 dråber',
      rows: [['Shilajit', '20 mg'], ['L-citrullin', '5 mg'], ['Panax ginseng-ekstrakt', '2 mg'], ['Zink', '0,5 mg'], ['Selen', '5 µg'], ['Sortkommen', '2 mg'], ['Sea moss', '2 mg']],
      note: NOTE_DA,
    },
    directions: 'Voksne: tag 3 dråber dagligt, direkte eller i vand eller te, 30 minutter før et måltid. Omrystes godt.',
    storage: 'Opbevares ved stuetemperatur. Må ikke stå i køleskab. Luk flasken godt.',
    caution: 'Ikke til børn eller gravide. Tal med din læge, hvis du har en sygdom eller tager medicin. Overskrid ikke den anbefalede daglige dosis.',
    gallery: ['Shilajit Drops gaverør, forside', 'Shilajit Drops ravfarvede flasker, for- og bagside', 'Shilajit Drops gaverør, bagside med aktive ingredienser'],
  },
  'shilajit-capsules': {
    subtitle: 'Daily Wellness Formula · 60 kapsler',
    description: 'Vores daglige formel i kapselform: shilajit med L-citrullin, Panax ginseng, zink, selen, sortkommen og sea moss. To kapsler om dagen med vand. Ingen smag, ingen afmåling.',
    imageAlt: 'Himalayan Drop Shilajit Capsules æske og bøtte, 60 kapsler',
    tag: 'Nyhed',
    badges: [['jar', '60 kapsler'], ['leaf', '6 aktive'], ['clock', '2 om dagen']],
    options: ['1 bøtte', '2 bøtter', '3 bøtter'],
    facts: [['85+', 'Mineraler*'], ['83,1 %', 'Fulvinsyre*'], ['60', 'Kapsler']],
    formula: {
      title: 'Næringsindhold',
      serving: 'Pr. 2 kapsler',
      rows: [['Shilajit', '500 mg'], ['L-citrullin', '250 mg'], ['Panax ginseng-ekstrakt', '100 mg'], ['Zink', '5 mg'], ['Selen', '55 µg'], ['Sortkommen', '100 mg'], ['Sea moss', '100 mg']],
      note: NOTE_DA,
    },
    directions: 'Voksne: tag 2 kapsler dagligt med vand.',
    storage: 'Opbevares tørt og køligt, væk fra direkte sollys. Luk bøtten godt.',
    caution: 'Ikke til børn. Er du gravid eller ammer, tager du medicin eller er du under lægebehandling, så tal med din læge før brug. Overskrid ikke den anbefalede dosis.',
    gallery: [
      'Shilajit Capsules bøtte, forside',
      'Shilajit Capsules bøtte med 85+ mineraler og 83,1 % fulvinsyre',
      'Shilajit Capsules æske, forside',
      'Shilajit Capsules æske, set ovenfra',
      'Shilajit Capsules æske, næringsindhold',
      'Shilajit Capsules æske, renhed',
      'Shilajit Capsules æske, brug, advarsler og opbevaring',
      'Shilajit Capsules bøtte, bagside med næringsindhold',
    ],
  },
};

// SEO title + description per product and language (other languages are
// merged in from products-i18n.js below).
export const productSeo = {
  'shilajit-gold-resin': {
    en: { title: 'Shilajit Resin Gold Edition · Pure Himalayan Shilajit 30 g', description: 'Pure shilajit resin, hand-harvested above 5,000 m in Skardu. One ingredient, 85+ minerals, fulvic acid tested per batch. 30 g in light-protective glass.' },
    da: { title: 'Shilajit Resin Gold Edition · Ren Himalaya Shilajit 30 g', description: 'Ren shilajit resin, håndhøstet over 5.000 m i Skardu. Én ingrediens, 85+ mineraler og fulvinsyre testet for hver batch. 30 g i lysbeskyttende glas.' },
  },
  'shilajit-silver-resin': {
    en: { title: 'Shilajit Resin Silver Edition · Himalayan Shilajit 30 g', description: 'Everyday Himalayan shilajit resin in amber glass. Lab-tested for heavy metals and fulvic acid, batch by batch.' },
    da: { title: 'Shilajit Resin Silver Edition · Himalaya Shilajit 30 g', description: 'Shilajit resin til hverdagen i ravfarvet glas. Testet for tungmetaller og fulvinsyre, batch for batch.' },
  },
  'shilajit-gummies': {
    en: { title: 'Shilajit Gummies · Strawberry, 60 Gummies (500 mg Shilajit)', description: 'Strawberry shilajit gummies with 500 mg shilajit per serving, plus L-citrulline, Panax ginseng, zinc, selenium, sea moss and black seed. 60 gummies in a tin.' },
    da: { title: 'Shilajit Vingummi · Jordbær, 60 stk. (500 mg Shilajit)', description: 'Shilajit vingummi med jordbærsmag og 500 mg shilajit pr. portion, plus L-citrullin, Panax ginseng, zink, selen, sea moss og sortkommen. 60 stk. i dåse.' },
  },
  'shilajit-drops': {
    en: { title: 'Shilajit Drops · Elderberry Liquid Shilajit 30 ml', description: 'Liquid shilajit drops with elderberry flavour, L-citrulline, Panax ginseng, zinc, selenium, black seed and sea moss. 3 drops a day, amber glass.' },
    da: { title: 'Shilajit Dråber · Flydende Shilajit med Hyldebær 30 ml', description: 'Flydende shilajit dråber med hyldebærsmag, L-citrullin, Panax ginseng, zink, selen, sortkommen og sea moss. 3 dråber om dagen, ravfarvet glas.' },
  },
  'shilajit-capsules': {
    en: { title: 'Shilajit Capsules · 60 Capsules, 500 mg Shilajit per Serving', description: 'Shilajit capsules with 500 mg shilajit per serving, plus L-citrulline, Panax ginseng, zinc, selenium, black seed and sea moss. No taste, 2 a day.' },
    da: { title: 'Shilajit Kapsler · 60 Kapsler, 500 mg Shilajit pr. Portion', description: 'Shilajit kapsler med 500 mg shilajit pr. portion, plus L-citrullin, Panax ginseng, zink, selen, sortkommen og sea moss. Ingen smag, 2 om dagen.' },
  },
};

// Product in the requested language (English is the base).
export function localizeProduct(p, lang) {
  if (!p || !lang || lang === 'en') return p;
  const d = lang === 'da' ? productDa[p.handle] : productText[lang]?.[p.handle];
  if (!d) return p;
  const { gallery: galleryAlts, ...rest } = d;
  return {
    ...p,
    ...rest,
    gallery: p.gallery && galleryAlts ? p.gallery.map((g, i) => ({ ...g, alt: galleryAlts[i] || g.alt })) : p.gallery,
  };
}

for (const [h, v] of Object.entries(productSeoMore)) Object.assign(productSeo[h], v);
