// Journal articles used until Shopify's blog is connected.
// Once connected, articles come from Shopify admin → Online Store → Blog posts
// (blog handle: "journal"). Keep wording factual: EU rules do not allow
// health claims for shilajit unless they are authorised.

export const posts = [
  {
    slug: 'what-is-shilajit',
    title: 'What is shilajit? A short guide',
    excerpt: 'Where it forms, how it is collected and purified, and what to look for when you choose a resin.',
    category: 'Origin',
    date: '2026-10-12',
    readMin: 5,
    cover: '/images/collection-lineup.webp',
    body: [
      { t: 'p', text: 'Shilajit is a dark, sticky resin that seeps from rock faces high in mountain ranges such as the Himalayas. It forms slowly over many years, as plant matter is pressed and transformed between layers of rock.' },
      { t: 'p', text: 'For generations it has been part of traditional practices across the region. Today it is sold in several forms, and the quality varies widely from one seller to the next.' },
      { t: 'h2', text: 'Where it comes from' },
      { t: 'p', text: 'Shilajit is found at high altitude, where summers are short and the rock is exposed to strong sun. In warm months the resin softens and appears in cracks in the rock, where it is collected by hand.' },
      { t: 'quote', text: 'Altitude, patience and careful purification are what separate a fine resin from an ordinary one.' },
      { t: 'h2', text: 'How it is purified' },
      { t: 'p', text: 'Raw shilajit contains stone, sand and other impurities. It is dissolved in water, filtered several times and slowly reduced until only the resin remains. Good producers do this at low temperatures to protect the resin.' },
      { t: 'h2', text: 'What to look for' },
      { t: 'list', items: ['A clear origin and harvest area', 'A certificate of analysis (COA) for every batch', 'Testing for heavy metals by an independent lab', 'Light-protecting packaging, such as amber or violet glass'] },
      { t: 'tip', title: 'Our approach', text: 'Every Himalayan Drop batch has its own lab report. Ask us for yours with the batch number printed on your jar.' },
    ],
  },
  {
    slug: 'how-to-take-shilajit-resin',
    title: 'How to take shilajit resin, step by step',
    excerpt: 'A pea-sized amount, warm water and a few minutes. Here is how to make it part of your day.',
    category: 'Ritual',
    date: '2026-10-05',
    readMin: 3,
    cover: '/images/resin-cream.webp',
    body: [
      { t: 'p', text: 'Resin is the most traditional form of shilajit. It takes a moment longer than a capsule, and many people enjoy that small daily ritual.' },
      { t: 'h2', text: 'The four steps' },
      { t: 'steps', items: [
        ['Measure', 'Take a pea-sized amount with the spoon. Follow the daily dose printed on the label.'],
        ['Dissolve', 'Stir it into a glass of warm water or tea. Avoid boiling water: warm is enough.'],
        ['Wait', 'Let it dissolve for a few minutes, stirring now and then until no resin is left on the spoon.'],
        ['Enjoy', 'Drink it slowly. The taste is earthy and smoky, and many people add a little honey.'],
      ] },
      { t: 'h2', text: 'Make it a habit' },
      { t: 'p', text: 'Same time, same cup. Pairing it with something you already do every morning, like your first tea, is the easiest way to keep the ritual.' },
      { t: 'tip', title: 'Storage', text: 'Close the jar after use and keep it at room temperature, away from direct sunlight. If the resin becomes hard in the cold, warm the jar in your hands for a minute.' },
    ],
  },
  {
    slug: 'how-to-read-a-certificate-of-analysis',
    title: 'How to read a certificate of analysis',
    excerpt: 'Heavy metals, microbiology and limits explained, so you can check any shilajit lab report yourself.',
    category: 'Quality',
    date: '2026-09-28',
    readMin: 6,
    cover: '/images/hero-resin-maroon.webp',
    body: [
      { t: 'p', text: 'A certificate of analysis, or COA, is a lab report for one specific batch. It shows what was tested, which method was used and whether each result is within the allowed limit.' },
      { t: 'h2', text: 'Check the basics first' },
      { t: 'list', items: ['The batch number matches the one on your jar', 'The lab is named and independent from the seller', 'The report is dated and signed'] },
      { t: 'h2', text: 'Heavy metals' },
      { t: 'p', text: 'Lead, cadmium, mercury and arsenic are the four metals to look for. Each result should be shown next to its limit, usually in milligrams per kilogram. "Not detected" or a value below the limit is what you want to see.' },
      { t: 'quote', text: 'A report without a batch number tells you about someone’s product. Not necessarily yours.' },
      { t: 'h2', text: 'Microbiology' },
      { t: 'p', text: 'Tests for bacteria, yeasts and moulds show that the resin was handled and packed hygienically. Again, look for each value next to its limit.' },
      { t: 'tip', title: 'Ask us', text: 'Write to us with your batch number and we will send you the full certificate for your jar.' },
    ],
  },
  {
    slug: 'resin-gummies-or-drops',
    title: 'Resin, gummies, drops or capsules: which one suits you?',
    excerpt: 'Four formats, one origin. A simple comparison to help you choose your ritual.',
    category: 'Guide',
    date: '2026-09-20',
    readMin: 4,
    cover: '/images/blog-gummies.webp',
    body: [
      { t: 'p', text: 'Every Himalayan Drop format starts with the same shilajit, harvested above 5,000 metres near Skardu, Pakistan. The difference is how you take it and how it fits into your day.' },
      { t: 'h2', text: 'Resin' },
      { t: 'p', text: 'The traditional form, and a single ingredient: pure shilajit resin. You dissolve a small amount in warm water or tea. Best if you enjoy a slow morning ritual and want to adjust the amount yourself.' },
      { t: 'h2', text: 'Gummies' },
      { t: 'p', text: 'Strawberry gummies in a metal tin, with shilajit, L-citrulline, Panax ginseng, zinc, selenium, sea moss and black seed. Two gummies make one serving. Best when you are travelling or simply prefer something ready to take.' },
      { t: 'h2', text: 'Drops' },
      { t: 'p', text: 'Elderberry-flavoured liquid shilajit in an amber glass bottle with a gold dropper. Three drops, directly or in water or tea.' },
      { t: 'h2', text: 'Capsules' },
      { t: 'p', text: 'Our daily formula in capsule form: two capsules with water. No taste, no measuring, the same shilajit and the same six companion ingredients.' },
      { t: 'list', items: ['Resin: most traditional, single ingredient', 'Gummies: easiest on the go', 'Drops: quickest to mix', 'Capsules: no taste, no preparation'] },
      { t: 'tip', title: 'Still unsure?', text: 'Many people start with gummies or capsules for convenience and move to resin once the ritual becomes a habit.' },
    ],
  },
];

export const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category)))];
