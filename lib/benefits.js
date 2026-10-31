// Benefits + "vs the market" content for each product family.
// Wording note: in the EU (incl. Denmark), food supplements may only make
// health claims that are authorised, and shilajit has none. The English and
// Danish cards below were rewritten to name the benefits of shilajit, using
// only "traditionally used", "studied for" and "early research". That is
// still health wording next to a product, so have it checked by a regulatory
// adviser before it goes live. The other languages (benefits-i18n.js) still
// describe the product, its origin and its quality, and keep their old icons.

import { benefitText } from './benefits-i18n';

// Icons the other languages keep, in item order (their text has not changed).
const legacyIcons = {
  resin: ['pin', 'mountain', 'jar', 'flask', 'sun'],
  gummies: ['berry', 'leaf', 'flask', 'box', 'shield'],
  drops: ['berry', 'drop', 'leaf', 'sun', 'shield'],
  capsules: ['capsule', 'flask', 'leaf', 'box', 'shield'],
};

export const kinds = [
  { key: 'resin', label: 'Resin', thumb: '/images/thumbs/pack-gold.webp', image: '/images/pack-gold.webp', href: '/products/shilajit-gold-resin/' },
  { key: 'gummies', label: 'Gummies', thumb: '/images/thumbs/pack-gummies.webp', image: '/images/pack-gummies.webp', href: '/products/shilajit-gummies/' },
  { key: 'drops', label: 'Drops', thumb: '/images/thumbs/pack-drops.webp', image: '/images/pack-drops.webp', href: '/products/shilajit-drops/' },
  { key: 'capsules', label: 'Capsules', thumb: '/images/thumbs/pack-capsules.webp', image: '/images/pack-capsules.webp', href: '/products/shilajit-capsules/' },
];

// The four benefits of shilajit shown on every product, then one benefit
// that is specific to the format. Each states what shilajit is traditionally
// used for or what research has looked at, never a promise.
const shilajitBenefits = [
  { icon: 'bolt', title: 'Energy and stamina', text: 'Traditionally used to support vitality. Studied for muscle fatigue.' },
  { icon: 'user', title: 'Male vitality', text: 'Early studies looked at testosterone levels in healthy men.' },
  { icon: 'bone', title: 'Bone health', text: 'Studied for slowing bone density loss after menopause.' },
  { icon: 'brain', title: 'Mental clarity', text: 'Early research on fulvic acid and the ageing brain.' },
];

export const benefits = {
  resin: {
    title: 'Shilajit Resin',
    tagline: 'One ingredient. One origin.',
    items: [
      ...shilajitBenefits,
      { icon: 'flask', title: 'Pure resin, fully measured', text: 'Fulvic acid and 85+ minerals, measured on every batch.' },
    ],
  },
  gummies: {
    title: 'Shilajit Gummies',
    tagline: 'Himalayan Gold Edition, ready to go.',
    items: [
      ...shilajitBenefits,
      { icon: 'berry', title: 'Easy to take daily', text: '500 mg of shilajit per serving of two strawberry gummies.' },
    ],
  },
  drops: {
    title: 'Shilajit Drops',
    tagline: 'Three drops, in a moment.',
    items: [
      ...shilajitBenefits,
      { icon: 'drop', title: 'Measured in three drops', text: 'A gold glass dropper, with a light elderberry flavour.' },
    ],
  },
  capsules: {
    title: 'Shilajit Capsules',
    tagline: 'Daily Wellness Formula.',
    items: [
      ...shilajitBenefits,
      { icon: 'capsule', title: 'No taste, no fuss', text: '500 mg of shilajit in two capsules, taken with water.' },
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

const shilajitBenefitsDa = [
  { icon: 'bolt', title: 'Energi og udholdenhed', text: 'Traditionelt brugt til at understøtte vitalitet. Undersøgt for muskeltræthed.' },
  { icon: 'user', title: 'Mandlig vitalitet', text: 'Tidlige studier har set på testosteronniveauet hos raske mænd.' },
  { icon: 'bone', title: 'Knoglesundhed', text: 'Undersøgt for at bremse tab af knogletæthed efter overgangsalderen.' },
  { icon: 'brain', title: 'Mental klarhed', text: 'Tidlig forskning i fulvinsyre og hjernens aldring.' },
];

const benefitsDa = {
  resin: {
    title: 'Shilajit Resin',
    tagline: 'Én ingrediens. Én oprindelse.',
    items: [
      ...shilajitBenefitsDa,
      { icon: 'flask', title: 'Ren resin, fuldt målt', text: 'Fulvinsyre og 85+ mineraler måles i hver batch.' },
    ],
  },
  gummies: {
    title: 'Shilajit Gummies',
    tagline: 'Himalayan Gold Edition, klar til at tage med.',
    items: [
      ...shilajitBenefitsDa,
      { icon: 'berry', title: 'Nem at tage hver dag', text: '500 mg shilajit pr. portion á to vingummi med jordbærsmag.' },
    ],
  },
  drops: {
    title: 'Shilajit Drops',
    tagline: 'Tre dråber, på et øjeblik.',
    items: [
      ...shilajitBenefitsDa,
      { icon: 'drop', title: 'Afmålt i tre dråber', text: 'En pipette i guld og glas, med mild hyldebærsmag.' },
    ],
  },
  capsules: {
    title: 'Shilajit Capsules',
    tagline: 'Daily Wellness Formula.',
    items: [
      ...shilajitBenefitsDa,
      { icon: 'capsule', title: 'Ingen smag, ingen besvær', text: '500 mg shilajit i to kapsler, taget med vand.' },
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
    benefits: Object.fromEntries(KEYS.map((k) => [k, { ...t.benefits[k], items: t.benefits[k].items.map((it, i) => ({ icon: legacyIcons[k][i], title: it[0], text: it[1] })) }])),
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
