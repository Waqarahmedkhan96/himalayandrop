// Benefits + "vs the market" content for each product family.
// Wording note: in the EU (incl. Denmark), food supplements may only make
// health claims that are authorised. Shilajit has none, so these benefits
// describe the product, its origin and its quality, not health effects.
// Have any new health wording checked before adding it.

export const kinds = [
  { key: 'resin', label: 'Resin', thumb: '/images/pack-gold.webp', image: '/images/pack-gold.webp', href: '/products/shilajit-gold-resin/' },
  { key: 'gummies', label: 'Gummies', thumb: '/images/pack-gummies.webp', image: '/images/pack-gummies.webp', href: '/products/shilajit-gummies/' },
  { key: 'drops', label: 'Drops', thumb: '/images/pack-drops.webp', image: '/images/pack-drops.webp', href: '/products/shilajit-drops/' },
  { key: 'capsules', label: 'Capsules', thumb: '/images/pack-capsules.webp', image: '/images/pack-capsules.webp', href: '/products/shilajit-capsules/' },
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
    tagline: 'Gold Edition, ready to go.',
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
