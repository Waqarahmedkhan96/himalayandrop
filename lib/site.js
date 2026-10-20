// Site navigation: used by the header menus, the mobile menu and the footer.

export const menu = [
  {
    label: 'Shop',
    href: '/shop/',
    feature: { img: '/images/pack-gold.webp', title: 'Shilajit Resin Gold Edition', text: 'One ingredient, one origin: Skardu, above 5,000 m.', href: '/products/shilajit-gold-resin/' },
    items: [
      { label: 'All products', href: '/shop/', text: 'The full Himalayan Drop collection' },
      { label: 'Gold Resin', href: '/products/shilajit-gold-resin/', text: 'Gold Edition · 30 g' },
      { label: 'Silver Resin', href: '/products/shilajit-silver-resin/', text: 'Silver Edition · 30 g' },
      { label: 'Gummies', href: '/products/shilajit-gummies/', text: 'Gold Edition · Strawberry' },
      { label: 'Drops', href: '/products/shilajit-drops/', text: 'Elderberry · 30 ml' },
      { label: 'Capsules', href: '/products/shilajit-capsules/', text: 'Daily Wellness Formula · 60' },
    ],
  },
  {
    label: 'Our Shilajit',
    href: '/our-shilajit/',
    feature: { img: '/images/cut-resin-box.webp', title: 'From mountain to jar', text: 'Six patient steps and up to 60 days in the sun.', href: '/#process' },
    items: [
      { label: 'Our shilajit', href: '/our-shilajit/', text: 'Origin, purity and what sets it apart' },
      { label: 'The process', href: '/#process', text: 'Harvest, filter, sun-dry, test, pack' },
      { label: 'Lab results', href: '/lab-results/', text: 'Look up the report for your batch' },
      { label: 'How to use', href: '/how-to-use/', text: 'Resin, gummies, drops and capsules' },
      { label: 'FAQ', href: '/faq/', text: 'Answers to common questions' },
    ],
  },
  {
    label: 'Know us',
    href: '/our-story/',
    feature: { img: '/images/pillar-ritual.webp', title: 'The Mountain within', text: 'Designed in Denmark, sourced in the Himalayas.', href: '/our-story/' },
    items: [
      { label: 'Our story', href: '/our-story/', text: 'Why we started Himalayan Drop' },
      { label: 'Certificates', href: '/certificates/', text: 'Standards we produce and test to' },
      { label: 'Journal', href: '/blog/', text: 'Guides and notes from the mountains' },
      { label: 'Reviews', href: '/reviews/', text: 'In our customers’ own words' },
      { label: 'Distributors', href: '/distributors/', text: 'Stock Himalayan Drop' },
      { label: 'Contact', href: '/contact/', text: 'We’re here to help' },
    ],
  },
  { label: 'Rewards', href: '/rewards/' },
];

export const footer = [
  { title: 'Shop', links: [['All products', '/shop/'], ['Gold Resin', '/products/shilajit-gold-resin/'], ['Silver Resin', '/products/shilajit-silver-resin/'], ['Gummies', '/products/shilajit-gummies/'], ['Drops', '/products/shilajit-drops/'], ['Capsules', '/products/shilajit-capsules/']] },
  { title: 'Our shilajit', links: [['Our shilajit', '/our-shilajit/'], ['The process', '/#process'], ['Lab results', '/lab-results/'], ['How to use', '/how-to-use/'], ['FAQ', '/faq/']] },
  { title: 'Know us', links: [['Our story', '/our-story/'], ['Certificates', '/certificates/'], ['Journal', '/blog/'], ['Reviews', '/reviews/'], ['Distributors', '/distributors/'], ['Rewards', '/rewards/']] },
  { title: 'Help', links: [['Contact', '/contact/'], ['Shipping', '/policies/shipping-policy/'], ['Returns & guarantee', '/policies/refund-policy/'], ['Login', '/account/login/'], ['Register', '/account/register/']] },
];

export const legal = [['Privacy policy', '/policies/privacy-policy/'], ['Terms & conditions', '/policies/terms-of-service/']];
