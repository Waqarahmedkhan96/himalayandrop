// Benefits + "vs the market" content for each product family.
// Wording note: in the EU (incl. Denmark), food supplements may only make
// health claims that are authorised. Shilajit has none, so these benefits
// describe the product, its origin and its quality, not health effects.
// Have any new health wording checked before adding it.

import { benefitText } from './benefits-i18n';

export const kinds = [
  { key: 'resin', label: 'Resin', thumb: '/images/thumbs/pack-gold.webp', image: '/images/pack-gold.webp', href: '/products/shilajit-gold-resin/' },
  { key: 'gummies', label: 'Gummies', thumb: '/images/thumbs/pack-gummies.webp', image: '/images/pack-gummies.webp', href: '/products/shilajit-gummies/' },
  { key: 'drops', label: 'Drops', thumb: '/images/thumbs/pack-drops.webp', image: '/images/pack-drops.webp', href: '/products/shilajit-drops/' },
  { key: 'capsules', label: 'Capsules', thumb: '/images/thumbs/pack-capsules.webp', image: '/images/pack-capsules.webp', href: '/products/shilajit-capsules/' },
];

export const benefits = {
  resin: {
    title: 'Shilajit Resin',
    tagline: 'One ingredient. One origin.',
    items: [
      { icon: 'pin', title: 'Rooted in Skardu', text: 'From the heights of Skardu, Pakistan, the gateway to K2.' },
      { icon: 'mountain', title: 'Above 5,000 m', text: 'Hand-collected from high mountain rock, far from roads and towns.' },
      { icon: 'jar', title: 'Single ingredient', text: 'Pure shilajit resin. No fillers, carriers or flavours.' },
      { icon: 'flask', title: '85+ minerals, fulvic acid', text: 'Minerals and fulvic acid % measured on every batch.' },
      { icon: 'sun', title: 'Sun-dried, up to 60 days', text: 'Dried slowly in UV-protected glass, never rushed with heat.' },
    ],
  },
  gummies: {
    title: 'Shilajit Gummies',
    tagline: 'Himalayan Gold Edition, ready to go.',
    items: [
      { icon: 'berry', title: 'Strawberry flavour', text: 'A soft gummy that makes the ritual easy to keep.' },
      { icon: 'leaf', title: 'Six companion ingredients', text: 'L-citrulline, Panax ginseng, zinc, selenium, sea moss and black seed.' },
      { icon: 'flask', title: '500 mg shilajit', text: 'Per serving of two gummies, every amount on the label.' },
      { icon: 'box', title: '60 gummies · 30 servings', text: 'In a metal tin that closes tightly and keeps.' },
      { icon: 'shield', title: 'Lab-tested per batch', text: 'Checked for heavy metals and quality before release.' },
    ],
  },
  drops: {
    title: 'Shilajit Drops',
    tagline: 'Three drops, in a moment.',
    items: [
      { icon: 'berry', title: 'Elderberry flavour', text: 'Directly, or in water or tea.' },
      { icon: 'drop', title: '3 drops a day', text: 'A gold glass dropper for a measured amount.' },
      { icon: 'leaf', title: 'Six companion ingredients', text: 'L-citrulline, Panax ginseng, zinc, selenium, black seed and sea moss.' },
      { icon: 'sun', title: 'Amber glass, gift tube', text: 'Keeps light out, from our hands to yours.' },
      { icon: 'shield', title: 'Lab-tested per batch', text: 'Heavy metals, quality and fulvic acid %.' },
    ],
  },
  capsules: {
    title: 'Shilajit Capsules',
    tagline: 'Daily Wellness Formula.',
    items: [
      { icon: 'capsule', title: '2 capsules a day', text: 'With water. No taste, no measuring.' },
      { icon: 'flask', title: '500 mg shilajit', text: 'Per serving, every amount listed on the label.' },
      { icon: 'leaf', title: 'Six companion ingredients', text: 'L-citrulline, Panax ginseng, zinc, selenium, black seed and sea moss.' },
      { icon: 'box', title: '60 capsules · 30 servings', text: 'A sealed bottle in a protective outer box.' },
      { icon: 'shield', title: 'Lab-tested per batch', text: 'Heavy metals, quality and fulvic acid %.' },
    ],
  },
};

// "Ours vs the market". Market column describes common practices, hedged
// with "often", never a named competitor.
export const comparison = {
  resin: [
    ['Origin', 'Named: Skardu, Pakistan, above 5,000 m', 'Origin and altitude often not stated'],
    ['Ingredients', 'Single ingredient: pure shilajit resin', 'Fillers or carriers are sometimes added'],
    ['Purification', 'Dissolved in pure water and filtered several times', 'Purification method rarely explained'],
    ['Drying', 'Sun-dried slowly, for up to 60 days', 'Often dried quickly with heat'],
    ['Testing', 'Every batch lab-tested: heavy metals, quality, fulvic acid %', 'Testing vague, or results not shared'],
    ['Transparency', 'Batch number on every box, report on request', 'Batch traceability often missing'],
  ],
  gummies: [
    ['Shilajit source', 'Collected above 5,000 m in Skardu, Pakistan', 'Source of the shilajit often unclear'],
    ['Formula', 'Every ingredient and amount on the label', 'Proprietary blends often hide amounts'],
    ['Shilajit per serving', '500 mg in every 2 gummies', 'Shilajit content often low or not stated'],
    ['Testing', 'Every batch checked for heavy metals and quality', 'Testing vague, or results not shared'],
    ['Packaging', 'Metal tin that closes tightly', 'Thin, single-use packaging is common'],
  ],
  drops: [
    ['Shilajit source', 'Collected above 5,000 m in Skardu, Pakistan', 'Source of the shilajit often unclear'],
    ['Formula', 'Every ingredient and amount on the label', 'Proprietary blends often hide amounts'],
    ['Dosing', '3 drops with a glass dropper', 'Inconsistent servings are common'],
    ['Storage', 'Amber glass bottle in a gift tube', 'Plastic bottles are common'],
    ['Testing', 'Every batch lab-tested: heavy metals, quality, fulvic acid %', 'Testing vague, or results not shared'],
  ],
  capsules: [
    ['Shilajit source', 'Collected above 5,000 m in Skardu, Pakistan', 'Source of the shilajit often unclear'],
    ['Formula', 'Every ingredient and amount on the label', 'Proprietary blends often hide amounts'],
    ['Shilajit per serving', '500 mg in every 2 capsules', 'Shilajit content often low or not stated'],
    ['Testing', 'Every batch lab-tested: heavy metals, quality, fulvic acid %', 'Testing vague, or results not shared'],
    ['Transparency', 'Batch number on every bottle, report on request', 'Batch traceability often missing'],
  ],
};

export function kindOf(handle = '') {
  if (handle.includes('gumm')) return 'gummies';
  if (handle.includes('drop')) return 'drops';
  if (handle.includes('caps')) return 'capsules';
  return 'resin';
}

// ───────── Danish ─────────
const kindLabelsDa = { resin: 'Resin', gummies: 'Vingummi', drops: 'Dråber', capsules: 'Kapsler' };

const benefitsDa = {
  resin: {
    title: 'Shilajit Resin',
    tagline: 'Én ingrediens. Én oprindelse.',
    items: [
      { icon: 'pin', title: 'Fra Skardu', text: 'Fra højderne ved Skardu i Pakistan, porten til K2.' },
      { icon: 'mountain', title: 'Over 5.000 m', text: 'Håndsamlet på høje klippevægge, langt fra veje og byer.' },
      { icon: 'jar', title: 'Kun én ingrediens', text: 'Ren shilajit resin. Ingen fyldstoffer, bærestoffer eller smag.' },
      { icon: 'flask', title: '85+ mineraler, fulvinsyre', text: 'Mineraler og fulvinsyre måles i hver batch.' },
      { icon: 'sun', title: 'Soltørret i op til 60 dage', text: 'Tørret langsomt i UV-beskyttet glas, aldrig med varme.' },
    ],
  },
  gummies: {
    title: 'Shilajit Gummies',
    tagline: 'Himalayan Gold Edition, klar til at tage med.',
    items: [
      { icon: 'berry', title: 'Jordbærsmag', text: 'En blød vingummi, der gør ritualet nemt at holde fast i.' },
      { icon: 'leaf', title: 'Seks aktive ingredienser', text: 'L-citrullin, Panax ginseng, zink, selen, sea moss og sortkommen.' },
      { icon: 'flask', title: '500 mg shilajit', text: 'Pr. portion á to vingummi, alle mængder står på etiketten.' },
      { icon: 'box', title: '60 vingummi · 30 portioner', text: 'I en metaldåse, der lukker tæt.' },
      { icon: 'shield', title: 'Laboratorietestet', text: 'Hver batch testes for tungmetaller og kvalitet.' },
    ],
  },
  drops: {
    title: 'Shilajit Drops',
    tagline: 'Tre dråber, på et øjeblik.',
    items: [
      { icon: 'berry', title: 'Hyldebærsmag', text: 'Direkte, eller i vand eller te.' },
      { icon: 'drop', title: '3 dråber om dagen', text: 'En pipette i guld og glas giver den rette mængde.' },
      { icon: 'leaf', title: 'Seks aktive ingredienser', text: 'L-citrullin, Panax ginseng, zink, selen, sortkommen og sea moss.' },
      { icon: 'sun', title: 'Ravfarvet glas, gaverør', text: 'Holder lyset ude, fra os til dig.' },
      { icon: 'shield', title: 'Laboratorietestet', text: 'Tungmetaller, kvalitet og fulvinsyre.' },
    ],
  },
  capsules: {
    title: 'Shilajit Capsules',
    tagline: 'Daily Wellness Formula.',
    items: [
      { icon: 'capsule', title: '2 kapsler om dagen', text: 'Med vand. Ingen smag, ingen afmåling.' },
      { icon: 'flask', title: '500 mg shilajit', text: 'Pr. portion, alle mængder står på etiketten.' },
      { icon: 'leaf', title: 'Seks aktive ingredienser', text: 'L-citrullin, Panax ginseng, zink, selen, sortkommen og sea moss.' },
      { icon: 'box', title: '60 kapsler · 30 portioner', text: 'En forseglet bøtte i en beskyttende æske.' },
      { icon: 'shield', title: 'Laboratorietestet', text: 'Tungmetaller, kvalitet og fulvinsyre.' },
    ],
  },
};

const comparisonDa = {
  resin: [
    ['Oprindelse', 'Navngivet: Skardu, Pakistan, over 5.000 m', 'Oprindelse og højde oplyses ofte ikke'],
    ['Ingredienser', 'Kun én ingrediens: ren shilajit resin', 'Fyldstoffer eller bærestoffer tilsættes nogle gange'],
    ['Rensning', 'Opløst i rent vand og filtreret flere gange', 'Rensningsmetoden forklares sjældent'],
    ['Tørring', 'Langsomt soltørret i op til 60 dage', 'Tørres ofte hurtigt med varme'],
    ['Test', 'Hver batch testes: tungmetaller, kvalitet, fulvinsyre', 'Uklar test, eller resultater deles ikke'],
    ['Gennemsigtighed', 'Batchnummer på hver æske, rapport på forespørgsel', 'Sporbarhed mangler ofte'],
  ],
  gummies: [
    ['Kilde', 'Høstet over 5.000 m i Skardu, Pakistan', 'Kilden til shilajit er ofte uklar'],
    ['Formel', 'Alle ingredienser og mængder på etiketten', 'Blandinger skjuler ofte mængderne'],
    ['Shilajit pr. portion', '500 mg i hver portion á 2 vingummi', 'Indholdet af shilajit er ofte lavt eller ukendt'],
    ['Test', 'Hver batch testes for tungmetaller og kvalitet', 'Uklar test, eller resultater deles ikke'],
    ['Emballage', 'Metaldåse, der lukker tæt', 'Tynd engangsemballage er almindelig'],
  ],
  drops: [
    ['Kilde', 'Høstet over 5.000 m i Skardu, Pakistan', 'Kilden til shilajit er ofte uklar'],
    ['Formel', 'Alle ingredienser og mængder på etiketten', 'Blandinger skjuler ofte mængderne'],
    ['Dosering', '3 dråber med glaspipette', 'Uens portioner er almindelige'],
    ['Opbevaring', 'Ravfarvet glasflaske i gaverør', 'Plastflasker er almindelige'],
    ['Test', 'Hver batch testes: tungmetaller, kvalitet, fulvinsyre', 'Uklar test, eller resultater deles ikke'],
  ],
  capsules: [
    ['Kilde', 'Høstet over 5.000 m i Skardu, Pakistan', 'Kilden til shilajit er ofte uklar'],
    ['Formel', 'Alle ingredienser og mængder på etiketten', 'Blandinger skjuler ofte mængderne'],
    ['Shilajit pr. portion', '500 mg i hver portion á 2 kapsler', 'Indholdet af shilajit er ofte lavt eller ukendt'],
    ['Test', 'Hver batch testes: tungmetaller, kvalitet, fulvinsyre', 'Uklar test, eller resultater deles ikke'],
    ['Gennemsigtighed', 'Batchnummer på hver bøtte, rapport på forespørgsel', 'Sporbarhed mangler ofte'],
  ],
};

// Other languages: same icons, new words (benefits-i18n.js).
const KEYS = ['resin', 'gummies', 'drops', 'capsules'];
function fromText(lang) {
  const t = benefitText[lang];
  if (!t) return null;
  return {
    kinds: kinds.map((k, i) => ({ ...k, label: t.labels[i] })),
    benefits: Object.fromEntries(KEYS.map((k) => [k, { ...t.benefits[k], items: benefits[k].items.map((it, i) => ({ ...it, title: t.benefits[k].items[i][0], text: t.benefits[k].items[i][1] })) }])),
    comparison: t.comparison,
  };
}

export function getKinds(lang) {
  if (lang === 'da') return kinds.map((k) => ({ ...k, label: kindLabelsDa[k.key] }));
  return fromText(lang)?.kinds || kinds;
}
export function getBenefits(lang) {
  if (lang === 'da') return benefitsDa;
  return fromText(lang)?.benefits || benefits;
}
export function getComparison(lang) {
  if (lang === 'da') return comparisonDa;
  return fromText(lang)?.comparison || comparison;
}
