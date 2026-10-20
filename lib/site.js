// Site navigation per language: used by the header menus, the mobile menu and
// the footer. Links are written as English paths; on Danish pages they are
// automatically prefixed with /da.
//
// Menu blurbs: EU rules allow no health claims for shilajit, so they describe
// the product. The Capsules line uses the EU-authorised zinc claim, which
// applies because 2 capsules give 5 mg zinc (50% of the reference intake).
// If the final formula changes, check this wording again.

const en = {
  menu: [
    {
      label: 'Shop',
      href: '/shop/',
      feature: { img: '/images/pack-gold.webp', title: 'Shilajit Resin Gold Edition', text: 'One ingredient, one origin: Skardu, above 5,000 m.', href: '/products/shilajit-gold-resin/' },
      items: [
        { label: 'All products', href: '/shop/', text: 'The full Himalayan Drop collection' },
        { label: 'Gold Resin', href: '/products/shilajit-gold-resin/', text: 'Gold Edition · 30 g', img: '/images/pack-gold.webp', blurb: 'Pure shilajit for your daily ritual' },
        { label: 'Silver Resin', href: '/products/shilajit-silver-resin/', text: 'Silver Edition · 30 g', img: '/images/pack-silver.webp', blurb: 'Everyday resin, one ingredient' },
        { label: 'Gummies', href: '/products/shilajit-gummies/', text: 'Gold Edition · Strawberry', img: '/images/pack-gummies.webp', blurb: '500 mg shilajit, ready on the go' },
        { label: 'Drops', href: '/products/shilajit-drops/', text: 'Elderberry · 30 ml', img: '/images/pack-drops.webp', blurb: 'Quick to mix, three drops a day' },
        { label: 'Capsules', href: '/products/shilajit-capsules/', text: 'Daily Wellness Formula · 60', img: '/images/pack-capsules.webp', blurb: 'With zinc for normal testosterone levels' },
        { label: 'Bundles', href: '/bundles/', text: 'Save up to 23%', img: '/images/bundles/summit-set.webp', blurb: 'Save up to 23% on sets' },
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
  ],
  footer: [
    { title: 'Shop', links: [['All products', '/shop/'], ['Gold Resin', '/products/shilajit-gold-resin/'], ['Silver Resin', '/products/shilajit-silver-resin/'], ['Gummies', '/products/shilajit-gummies/'], ['Drops', '/products/shilajit-drops/'], ['Capsules', '/products/shilajit-capsules/'], ['Bundles', '/bundles/']] },
    { title: 'Our shilajit', links: [['Our shilajit', '/our-shilajit/'], ['The process', '/#process'], ['Lab results', '/lab-results/'], ['How to use', '/how-to-use/'], ['FAQ', '/faq/']] },
    { title: 'Know us', links: [['Our story', '/our-story/'], ['Certificates', '/certificates/'], ['Journal', '/blog/'], ['Reviews', '/reviews/'], ['Distributors', '/distributors/'], ['Rewards', '/rewards/']] },
    { title: 'Help', links: [['Contact', '/contact/'], ['Shipping', '/policies/shipping-policy/'], ['Returns & guarantee', '/policies/refund-policy/'], ['Login', '/account/login/'], ['Register', '/account/register/']] },
  ],
  legal: [['Privacy policy', '/policies/privacy-policy/'], ['Terms & conditions', '/policies/terms-of-service/']],
};

const da = {
  menu: [
    {
      label: 'Shop',
      href: '/shop/',
      feature: { img: '/images/pack-gold.webp', title: 'Shilajit Resin Gold Edition', text: 'Én ingrediens, én oprindelse: Skardu, over 5.000 m.', href: '/products/shilajit-gold-resin/' },
      items: [
        { label: 'Alle produkter', href: '/shop/', text: 'Hele Himalayan Drop-kollektionen' },
        { label: 'Gold Resin', href: '/products/shilajit-gold-resin/', text: 'Gold Edition · 30 g', img: '/images/pack-gold.webp', blurb: 'Ren shilajit til dit daglige ritual' },
        { label: 'Silver Resin', href: '/products/shilajit-silver-resin/', text: 'Silver Edition · 30 g', img: '/images/pack-silver.webp', blurb: 'Hverdagsresin, kun én ingrediens' },
        { label: 'Vingummi', href: '/products/shilajit-gummies/', text: 'Gold Edition · Jordbær', img: '/images/pack-gummies.webp', blurb: '500 mg shilajit, klar til farten' },
        { label: 'Dråber', href: '/products/shilajit-drops/', text: 'Hyldebær · 30 ml', img: '/images/pack-drops.webp', blurb: 'Hurtig at blande, tre dråber om dagen' },
        { label: 'Kapsler', href: '/products/shilajit-capsules/', text: 'Daily Wellness Formula · 60', img: '/images/pack-capsules.webp', blurb: 'Med zink til et normalt testosteronniveau' },
        { label: 'Sæt', href: '/bundles/', text: 'Spar op til 23%', img: '/images/bundles/summit-set.webp', blurb: 'Spar op til 23% på sæt' },
      ],
    },
    {
      label: 'Vores shilajit',
      href: '/our-shilajit/',
      feature: { img: '/images/cut-resin-box.webp', title: 'Fra bjerg til krukke', text: 'Seks tålmodige trin og op til 60 dage i solen.', href: '/#process' },
      items: [
        { label: 'Vores shilajit', href: '/our-shilajit/', text: 'Oprindelse, renhed og hvad der gør den unik' },
        { label: 'Processen', href: '/#process', text: 'Høst, filtrering, soltørring, test, pakning' },
        { label: 'Laboratorieresultater', href: '/lab-results/', text: 'Find rapporten for din batch' },
        { label: 'Sådan bruger du det', href: '/how-to-use/', text: 'Resin, vingummi, dråber og kapsler' },
        { label: 'FAQ', href: '/faq/', text: 'Svar på de mest stillede spørgsmål' },
      ],
    },
    {
      label: 'Om os',
      href: '/our-story/',
      feature: { img: '/images/pillar-ritual.webp', title: 'The Mountain within', text: 'Designet i Danmark, hentet i bjergene.', href: '/our-story/' },
      items: [
        { label: 'Vores historie', href: '/our-story/', text: 'Hvorfor vi startede Himalayan Drop' },
        { label: 'Certifikater', href: '/certificates/', text: 'Standarderne vi producerer og tester efter' },
        { label: 'Journal', href: '/blog/', text: 'Guides og viden om shilajit' },
        { label: 'Anmeldelser', href: '/reviews/', text: 'Med kundernes egne ord' },
        { label: 'Forhandlere', href: '/distributors/', text: 'Forhandl Himalayan Drop' },
        { label: 'Kontakt', href: '/contact/', text: 'Vi er her for at hjælpe' },
      ],
    },
    { label: 'Rewards', href: '/rewards/' },
  ],
  footer: [
    { title: 'Shop', links: [['Alle produkter', '/shop/'], ['Gold Resin', '/products/shilajit-gold-resin/'], ['Silver Resin', '/products/shilajit-silver-resin/'], ['Vingummi', '/products/shilajit-gummies/'], ['Dråber', '/products/shilajit-drops/'], ['Kapsler', '/products/shilajit-capsules/'], ['Sæt', '/bundles/']] },
    { title: 'Vores shilajit', links: [['Vores shilajit', '/our-shilajit/'], ['Processen', '/#process'], ['Laboratorieresultater', '/lab-results/'], ['Sådan bruger du det', '/how-to-use/'], ['FAQ', '/faq/']] },
    { title: 'Om os', links: [['Vores historie', '/our-story/'], ['Certifikater', '/certificates/'], ['Journal', '/blog/'], ['Anmeldelser', '/reviews/'], ['Forhandlere', '/distributors/'], ['Rewards', '/rewards/']] },
    { title: 'Hjælp', links: [['Kontakt', '/contact/'], ['Levering', '/policies/shipping-policy/'], ['Returnering og garanti', '/policies/refund-policy/'], ['Log ind', '/account/login/'], ['Opret konto', '/account/register/']] },
  ],
  legal: [['Privatlivspolitik', '/policies/privacy-policy/'], ['Handelsbetingelser', '/policies/terms-of-service/']],
};

export const site = { en, da };
