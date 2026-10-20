// Benefits + "vs the market" content for each product family.
// Wording note: in the EU (incl. Denmark), food supplements may only make
// health claims that are authorised. Shilajit has none, so these benefits
// describe the product, its origin and its quality, not health effects.
// Have any new health wording checked before adding it.

export const kinds = [
  { key: 'resin', label: 'Resin', thumb: '/images/pack-gold.webp', image: '/images/pack-gold.webp', href: '/products/shilajit-gold-resin/' },
  { key: 'gummies', label: 'Gummies', thumb: '/images/pack-gummies.webp', image: '/images/cut-gummies-pouch.webp', href: '/products/shilajit-gummies/' },
  { key: 'drops', label: 'Drops', thumb: '/images/pack-drops.webp', image: '/images/pack-drops.webp', href: '/products/shilajit-drops/' },
];

export const benefits = {
  resin: {
    title: 'Shilajit Resin',
    tagline: 'The original, in its purest form.',
    items: [
      { icon: 'mountain', title: 'Above 5,000 m', text: 'Hand-collected from high Himalayan rock, far from roads and towns.' },
      { icon: 'flask', title: 'Fulvic acid, measured', text: 'The fulvic acid percentage is tested in every batch.' },
      { icon: 'leaf', title: 'Naturally mineral-rich', text: 'A resin formed slowly in mountain rock over many years.' },
      { icon: 'jar', title: 'Pure resin, nothing added', text: 'No fillers or carriers. Dissolve a little in warm water.' },
      { icon: 'sun', title: 'Sun-dried, up to 60 days', text: 'Dried slowly in UV-protected glass, never rushed with heat.' },
    ],
  },
  gummies: {
    title: 'Shilajit Gummies',
    tagline: 'The same ritual, ready to go.',
    items: [
      { icon: 'berry', title: 'Strawberry flavour', text: 'A soft gummy that makes the ritual easy to keep.' },
      { icon: 'leaf', title: 'Five botanicals', text: 'Ashwagandha, sea moss, lion’s mane, burdock root and black seed.' },
      { icon: 'clock', title: 'No spoon, no water', text: 'Two gummies, wherever your day takes you.' },
      { icon: 'box', title: '60 gummies · 30 servings', text: 'A clear serving size in a resealable pouch.' },
      { icon: 'shield', title: 'Lab-tested per batch', text: 'Checked for heavy metals and quality before release.' },
    ],
  },
  drops: {
    title: 'Shilajit Drops',
    tagline: 'Measured in a moment.',
    items: [
      { icon: 'drop', title: 'Measured dropper', text: 'A consistent amount, every single time.' },
      { icon: 'filter', title: 'Mixes in seconds', text: 'Stir into water, tea or a smoothie.' },
      { icon: 'mountain', title: 'Same Himalayan source', text: 'Collected above 5,000 m, purified and sun-dried.' },
      { icon: 'sun', title: 'Amber glass bottle', text: 'Keeps light out, from our hands to yours.' },
      { icon: 'shield', title: 'Lab-tested per batch', text: 'Heavy metals, quality and fulvic acid %.' },
    ],
  },
};

// "Ours vs the market". Market column describes common practices, hedged
// with "often", never a named competitor.
export const comparison = {
  resin: [
    ['Harvest source', 'Hand-collected above 5,000 m in the Himalayas', 'Origin and altitude often not stated'],
    ['Purification', 'Dissolved in pure water and filtered several times', 'Purification method rarely explained'],
    ['Drying', 'Sun-dried slowly, for up to 60 days', 'Often dried quickly with heat'],
    ['Testing', 'Every batch lab-tested: heavy metals, quality, fulvic acid %', 'Testing vague, or results not shared'],
    ['Storage', 'Premium UV-protected glass jar', 'Plastic or clear packaging is common'],
    ['Transparency', 'Batch number on every jar, report on request', 'Batch traceability often missing'],
  ],
  gummies: [
    ['Shilajit source', 'Himalayan shilajit, collected above 5,000 m', 'Source of the shilajit often unclear'],
    ['Formula', 'Shilajit with five named botanicals', 'Ingredient amounts often vague'],
    ['Serving', 'Clear serving: 2 gummies, 30 servings per pouch', 'Serving size often hard to find'],
    ['Testing', 'Every batch checked for heavy metals and quality', 'Testing vague, or results not shared'],
    ['Packaging', 'Resealable premium pouch', 'Thin, single-use packaging is common'],
  ],
  drops: [
    ['Shilajit source', 'Himalayan shilajit, collected above 5,000 m', 'Source of the shilajit often unclear'],
    ['Dosing', 'Glass dropper for a measured amount', 'Inconsistent servings are common'],
    ['Storage', 'Amber glass bottle that keeps light out', 'Plastic bottles are common'],
    ['Testing', 'Every batch lab-tested: heavy metals, quality, fulvic acid %', 'Testing vague, or results not shared'],
    ['Transparency', 'Batch number on every bottle, report on request', 'Batch traceability often missing'],
  ],
};

export function kindOf(handle = '') {
  if (handle.includes('gumm')) return 'gummies';
  if (handle.includes('drop')) return 'drops';
  return 'resin';
}
