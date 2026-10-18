// Demo products, used until Shopify is connected.
// Once connected, products come from your Shopify admin instead.
// Prices here are PLACEHOLDERS for the design. Once Shopify is connected,
// real prices and variants come from your Shopify admin.

export const demoProducts = [
  {
    handle: 'shilajit-gold-resin',
    title: 'Shilajit Gold Resin',
    subtitle: 'Gold Edition · 30g',
    description:
      'Pure Himalayan shilajit resin in an amber glass jar with a gold lid. Take a small, pea-sized amount and dissolve it in warm water or tea.',
    image: '/images/pack-gold.webp',
    photo: '/images/card-gold-resin.webp',
    imageAlt: 'Shilajit Gold Resin jar and box',
    tag: 'Gold Edition',
    badges: [['mountain', 'Himalayan'], ['jar', 'Pure resin'], ['sun', 'Amber glass']],
    options: ['1 jar', '2 jars', '3 jars'],
    heroImage: '/images/cut-maroon-set.webp',
    cutout: true,
    price: '499 kr',
    amount: 499, // PLACEHOLDER price for the design. Real prices come from Shopify.
    variantId: null,
    available: false,
  },
  {
    handle: 'shilajit-silver-resin',
    title: 'Shilajit Silver Resin',
    subtitle: 'Silver Edition · 30g',
    description:
      'Our everyday shilajit resin, sourced from high-altitude rock and packed in amber glass to protect it from light.',
    image: '/images/pack-silver.webp',
    photo: '/images/card-silver-resin.webp',
    imageAlt: 'Shilajit Silver Resin jar and box',
    tag: 'Silver Edition',
    badges: [['mountain', 'Himalayan'], ['jar', 'Pure resin'], ['sun', 'Amber glass']],
    options: ['1 jar', '2 jars', '3 jars'],
    heroImage: '/images/pack-silver.webp',
    cutout: true,
    price: '399 kr',
    amount: 399, // PLACEHOLDER price for the design. Real prices come from Shopify.
    variantId: null,
    available: false,
  },
  {
    handle: 'shilajit-gummies',
    title: 'Shilajit Gummies',
    subtitle: 'Strawberry · 60 gummies',
    description:
      'Shilajit gummies with strawberry flavour, combined with ashwagandha, sea moss, lion’s mane, burdock root and black seed. Two gummies per serving.',
    image: '/images/pack-gummies.webp',
    photo: '/images/card-gummies.webp',
    imageAlt: 'Shilajit Gummies tube',
    tag: 'Strawberry',
    badges: [['berry', 'Strawberry'], ['leaf', '5 botanicals'], ['jar', '60 gummies']],
    options: ['1 pouch', '2 pouches', '3 pouches'],
    heroImage: '/images/cut-gummies-pouch.webp',
    cutout: true,
    price: '299 kr',
    amount: 299, // PLACEHOLDER price for the design. Real prices come from Shopify.
    variantId: null,
    available: false,
  },
  {
    handle: 'shilajit-drops',
    title: 'Shilajit Drops',
    subtitle: 'Liquid · dropper bottle',
    description: 'Shilajit in liquid form, measured with a glass dropper. Add to water, tea or a smoothie.',
    image: '/images/pack-drops.webp',
    photo: '/images/card-drops.webp',
    imageAlt: 'Shilajit Drops bottle and box',
    tag: 'Liquid',
    badges: [['drop', 'Liquid'], ['mountain', 'Himalayan'], ['sun', 'Amber glass']],
    options: ['1 bottle', '2 bottles', '3 bottles'],
    heroImage: '/images/pack-drops.webp',
    cutout: true,
    price: '349 kr',
    amount: 349, // PLACEHOLDER price for the design. Real prices come from Shopify.
    variantId: null,
    available: false,
  },
];
