// Demo products, used until Shopify is connected.
// Once connected, products come from your Shopify admin instead.
// Prices here are PLACEHOLDERS for the design. Once Shopify is connected,
// real prices and variants come from your Shopify admin.
//
// Formulas are taken from the current packaging designs. The labels mark
// these amounts as not yet final, so confirm every value (and the fulvic
// acid %) against the final label and batch documents before launch.

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
