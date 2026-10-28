// Bundles: sets of Himalayan Drop products at a lower combined price.
//
// HOW TO SELL THEM IN SHOPIFY
// Create each bundle as its own product with the same handle (for example with
// the free Shopify Bundles app). Once Shopify is connected, the bundles page
// reads the real price, stock and variant from Shopify by handle, so Buy now
// and Add to cart put the bundle straight into the Shopify cart.
//
// Prices here are PLACEHOLDERS for the design, like the product prices.
// Names and tags describe the products, not health effects (EU rules).

import { demoProducts } from './products';

const price = (handle) => demoProducts.find((p) => p.handle === handle)?.amount || 0;

const RAW = [
  {
    handle: 'bundle-summit-set',
    image: '/images/bundles/summit-set.webp',
    items: ['shilajit-gold-resin', 'shilajit-gummies', 'shilajit-drops', 'shilajit-capsules'],
    amount: 1149,
    featured: true,
    en: { name: 'The Summit Set', tagline: 'Every format, one ritual', badge: 'Best value', tags: ['Resin', 'Gummies', 'Drops', 'Capsules'], text: 'Resin for slow mornings, gummies and capsules for busy days, drops for your tea. The whole range of formats in one set.' },
    da: { name: 'The Summit Set', tagline: 'Alle former, ét ritual', badge: 'Bedste værdi', tags: ['Resin', 'Vingummi', 'Dråber', 'Kapsler'], text: 'Resin til rolige morgener, vingummi og kapsler til travle dage, dråber til din te. Alle former samlet i ét sæt.' },
  },
  {
    handle: 'bundle-daily-ritual',
    image: '/images/bundles/daily-ritual.webp',
    items: ['shilajit-gold-resin', 'shilajit-gummies'],
    amount: 679,
    en: { name: 'The Daily Ritual', tagline: 'Resin at home, gummies on the go', badge: 'Most popular', tags: ['Pure resin', 'Strawberry', 'On the go'], text: 'Our Gold Edition resin for your morning cup, and strawberry gummies for the days you are away from home.' },
    da: { name: 'The Daily Ritual', tagline: 'Resin hjemme, vingummi på farten', badge: 'Mest populær', tags: ['Ren resin', 'Jordbær', 'På farten'], text: 'Vores Gold Edition resin til morgenkoppen og vingummi med jordbær til de dage, hvor du er hjemmefra.' },
  },
  {
    handle: 'bundle-home-and-away',
    image: '/images/bundles/home-and-away.webp',
    items: ['shilajit-gold-resin', 'shilajit-capsules'],
    amount: 699,
    en: { name: 'Home & Away', tagline: 'The ritual, wherever you are', tags: ['Pure resin', 'No taste', 'Travel'], text: 'Resin for calm mornings at home, capsules for travel and long days. No taste, no measuring when you are on the move.' },
    da: { name: 'Home & Away', tagline: 'Ritualet, uanset hvor du er', tags: ['Ren resin', 'Ingen smag', 'Rejse'], text: 'Resin til rolige morgener derhjemme, kapsler til rejser og lange dage. Ingen smag og ingen afmåling, når du er på farten.' },
  },
  {
    handle: 'bundle-ritual-duo',
    image: '/images/bundles/ritual-duo.webp',
    items: ['shilajit-gummies', 'shilajit-capsules'],
    amount: 529,
    en: { name: 'The Ritual Duo', tagline: 'Ready to take, morning to night', tags: ['Strawberry', 'No taste', 'Zero prep'], text: 'Two ready-to-take formats with 500 mg shilajit per serving: strawberry gummies and tasteless capsules.' },
    da: { name: 'The Ritual Duo', tagline: 'Klar til brug, morgen til aften', tags: ['Jordbær', 'Ingen smag', 'Ingen forberedelse'], text: 'To former, der er klar til brug, med 500 mg shilajit pr. portion: vingummi med jordbær og kapsler uden smag.' },
  },
  {
    handle: 'bundle-gift-of-the-mountain',
    image: '/images/bundles/gift-of-the-mountain.webp',
    items: ['shilajit-gold-resin', 'shilajit-silver-resin'],
    amount: 749,
    en: { name: 'Gift of the Mountain', tagline: 'Gold and Silver, side by side', badge: 'Gift set', tags: ['Gold Edition', 'Himalayan Edition', 'Gift-ready'], text: 'Both of our resins in their gift boxes. A thoughtful present, or one for you and one to share.' },
    da: { name: 'Gift of the Mountain', tagline: 'Gold og Silver, side om side', badge: 'Gavesæt', tags: ['Gold Edition', 'Himalayan Edition', 'Gaveklar'], text: 'Begge vores resiner i gaveæsker. En gennemtænkt gave, eller én til dig og én at dele.' },
  },
  {
    handle: 'bundle-complete-collection',
    image: '/images/bundles/complete-collection.webp',
    items: ['shilajit-gold-resin', 'shilajit-silver-resin', 'shilajit-gummies', 'shilajit-drops', 'shilajit-capsules'],
    amount: 1449,
    en: { name: 'The Complete Collection', tagline: 'All five, at our best price', badge: 'Biggest saving', tags: ['All products', 'Gift-ready'], text: 'Every Himalayan Drop product in one order: Gold and Silver Resin, Gummies, Drops and Capsules.' },
    da: { name: 'The Complete Collection', tagline: 'Alle fem, til vores bedste pris', badge: 'Største besparelse', tags: ['Alle produkter', 'Gaveklar'], text: 'Alle produkter fra Himalayan Drop i én ordre: Gold og Silver Resin, vingummi, dråber og kapsler.' },
  },
];

// Bundle names stay in English (they are product names); taglines, tags and
// texts per language, in the same order as RAW.
const MORE = {
  de: [
    ['Jede Form, ein Ritual', 'Bestes Angebot', ['Harz', 'Gummies', 'Tropfen', 'Kapseln'], 'Harz für ruhige Morgen, Gummies und Kapseln für volle Tage, Tropfen für deinen Tee. Alle Formen in einem Set.'],
    ['Harz zu Hause, Gummies unterwegs', 'Am beliebtesten', ['Reines Harz', 'Erdbeere', 'Unterwegs'], 'Unser Gold Edition Harz für deine Morgentasse und Erdbeer-Gummies für die Tage, an denen du unterwegs bist.'],
    ['Das Ritual, wo immer du bist', null, ['Reines Harz', 'Ohne Geschmack', 'Reisen'], 'Harz für ruhige Morgen zu Hause, Kapseln für Reisen und lange Tage. Kein Geschmack, kein Abmessen unterwegs.'],
    ['Sofort bereit, morgens bis abends', null, ['Erdbeere', 'Ohne Geschmack', 'Ohne Zubereitung'], 'Zwei sofort einnehmbare Formen mit 500 mg Shilajit pro Portion: Erdbeer-Gummies und geschmacksneutrale Kapseln.'],
    ['Gold und Silver, Seite an Seite', 'Geschenkset', ['Gold Edition', 'Himalayan Edition', 'Geschenkfertig'], 'Unsere beiden Harze in ihren Geschenkboxen. Ein durchdachtes Geschenk, oder eins für dich und eins zum Teilen.'],
    ['Alle fünf, zu unserem besten Preis', 'Größte Ersparnis', ['Alle Produkte', 'Geschenkfertig'], 'Jedes Himalayan Drop Produkt in einer Bestellung: Gold und Silver Resin, Gummies, Tropfen und Kapseln.'],
  ],
  fr: [
    ['Tous les formats, un rituel', 'Meilleure offre', ['Résine', 'Gommes', 'Gouttes', 'Gélules'], 'La résine pour les matins calmes, les gommes et gélules pour les journées chargées, les gouttes pour votre thé. Tous les formats en un coffret.'],
    ['La résine chez soi, les gommes en route', 'Le plus populaire', ['Résine pure', 'Fraise', 'Nomade'], 'Notre résine Gold Edition pour votre tasse du matin, et des gommes à la fraise pour les jours loin de chez vous.'],
    ['Le rituel, où que vous soyez', null, ['Résine pure', 'Sans goût', 'Voyage'], 'La résine pour les matins calmes à la maison, les gélules pour les voyages et les longues journées. Sans goût, sans dosage en déplacement.'],
    ['Prêt à prendre, du matin au soir', null, ['Fraise', 'Sans goût', 'Sans préparation'], 'Deux formats prêts à l’emploi avec 500 mg de shilajit par portion : gommes à la fraise et gélules sans goût.'],
    ['Gold et Silver, côte à côte', 'Coffret cadeau', ['Gold Edition', 'Himalayan Edition', 'Prêt à offrir'], 'Nos deux résines dans leurs boîtes cadeau. Un présent attentionné, ou une pour vous et une à partager.'],
    ['Les cinq, à notre meilleur prix', 'Plus grande économie', ['Tous les produits', 'Prêt à offrir'], 'Tous les produits Himalayan Drop en une commande : Gold et Silver Resin, gommes, gouttes et gélules.'],
  ],
  es: [
    ['Todos los formatos, un ritual', 'Mejor valor', ['Resina', 'Gominolas', 'Gotas', 'Cápsulas'], 'Resina para mañanas tranquilas, gominolas y cápsulas para días ocupados, gotas para tu té. Todos los formatos en un pack.'],
    ['Resina en casa, gominolas fuera', 'El más popular', ['Resina pura', 'Fresa', 'Para llevar'], 'Nuestra resina Gold Edition para tu taza de la mañana y gominolas de fresa para los días fuera de casa.'],
    ['El ritual, estés donde estés', null, ['Resina pura', 'Sin sabor', 'Viajes'], 'Resina para mañanas tranquilas en casa, cápsulas para viajes y días largos. Sin sabor y sin medir cuando estás fuera.'],
    ['Listo para tomar, de la mañana a la noche', null, ['Fresa', 'Sin sabor', 'Sin preparación'], 'Dos formatos listos para tomar con 500 mg de shilajit por porción: gominolas de fresa y cápsulas sin sabor.'],
    ['Gold y Silver, juntos', 'Pack regalo', ['Gold Edition', 'Himalayan Edition', 'Listo para regalar'], 'Nuestras dos resinas en sus cajas regalo. Un regalo cuidado, o una para ti y otra para compartir.'],
    ['Los cinco, a nuestro mejor precio', 'Mayor ahorro', ['Todos los productos', 'Listo para regalar'], 'Todos los productos Himalayan Drop en un pedido: Gold y Silver Resin, gominolas, gotas y cápsulas.'],
  ],
  ar: [
    ['كل الأشكال، طقس واحد', 'أفضل قيمة', ['راتنج', 'علكات', 'قطرات', 'كبسولات'], 'راتنج للصباحات الهادئة، وعلكات وكبسولات للأيام المزدحمة، وقطرات لشايك. كل الأشكال في مجموعة واحدة.'],
    ['راتنج في المنزل وعلكات أثناء التنقل', 'الأكثر طلباً', ['راتنج نقي', 'فراولة', 'للتنقل'], 'راتنج الإصدار الذهبي لكوب الصباح، وعلكات الفراولة للأيام التي تكون فيها خارج المنزل.'],
    ['الطقس أينما كنت', null, ['راتنج نقي', 'بلا طعم', 'للسفر'], 'راتنج للصباحات الهادئة في المنزل، وكبسولات للسفر والأيام الطويلة. بلا طعم وبلا قياس أثناء التنقل.'],
    ['جاهز للتناول من الصباح إلى المساء', null, ['فراولة', 'بلا طعم', 'بلا تحضير'], 'شكلان جاهزان للتناول مع 500 ملغ شيلاجيت لكل حصة: علكات بالفراولة وكبسولات بلا طعم.'],
    ['الذهبي والفضي جنباً إلى جنب', 'مجموعة هدايا', ['الإصدار الذهبي', 'إصدار الهيمالايا', 'جاهزة للإهداء'], 'راتنجانا في علب الهدايا. هدية مدروسة، أو واحدة لك وأخرى لتشاركها.'],
    ['الخمسة كلها بأفضل سعر', 'أكبر توفير', ['جميع المنتجات', 'جاهزة للإهداء'], 'كل منتجات Himalayan Drop في طلب واحد: الراتنج الذهبي والفضي والعلكات والقطرات والكبسولات.'],
  ],
  ur: [
    ['ہر شکل، ایک معمول', 'بہترین قیمت', ['ریزن', 'گمیز', 'ڈراپس', 'کیپسول'], 'پُرسکون صبح کے لیے ریزن، مصروف دنوں کے لیے گمیز اور کیپسول، چائے کے لیے ڈراپس۔ تمام شکلیں ایک سیٹ میں۔'],
    ['گھر پر ریزن، سفر میں گمیز', 'سب سے مقبول', ['خالص ریزن', 'اسٹرابیری', 'سفر کے لیے'], 'صبح کی چائے کے لیے ہمارا گولڈ ایڈیشن ریزن، اور گھر سے دور دنوں کے لیے اسٹرابیری گمیز۔'],
    ['معمول، جہاں بھی ہوں', null, ['خالص ریزن', 'بغیر ذائقہ', 'سفر'], 'گھر پر پُرسکون صبح کے لیے ریزن، سفر اور لمبے دنوں کے لیے کیپسول۔ سفر میں نہ ذائقہ، نہ ناپ تول۔'],
    ['صبح سے شام تک تیار', null, ['اسٹرابیری', 'بغیر ذائقہ', 'بغیر تیاری'], 'فی خوراک 500 ملی گرام سلاجیت والی دو تیار شکلیں: اسٹرابیری گمیز اور بغیر ذائقے کے کیپسول۔'],
    ['گولڈ اور سلور، ساتھ ساتھ', 'گفٹ سیٹ', ['گولڈ ایڈیشن', 'ہمالین ایڈیشن', 'تحفے کے لیے تیار'], 'ہمارے دونوں ریزن ان کے گفٹ باکس میں۔ ایک خوبصورت تحفہ، یا ایک اپنے لیے اور ایک بانٹنے کے لیے۔'],
    ['پانچوں، ہماری بہترین قیمت پر', 'سب سے بڑی بچت', ['تمام مصنوعات', 'تحفے کے لیے تیار'], 'Himalayan Drop کی ہر پروڈکٹ ایک آرڈر میں: گولڈ اور سلور ریزن، گمیز، ڈراپس اور کیپسول۔'],
  ],
};
for (const [lang, rows] of Object.entries(MORE)) {
  RAW.forEach((b, i) => {
    const [tagline, badge, tags, text] = rows[i];
    b[lang] = { name: b.en.name, tagline, tags, text, ...(badge ? { badge } : {}) };
  });
}

export function getDemoBundles(lang = 'en') {
  return RAW.map((b) => {
    const compare = b.items.reduce((s, h) => s + price(h), 0);
    return {
      handle: b.handle,
      image: b.image,
      items: b.items,
      featured: !!b.featured,
      amount: b.amount,
      compareAt: compare,
      currency: 'DKK',
      savePct: Math.round((1 - b.amount / compare) * 100),
      variantId: null,
      available: false,
      ...(b[lang] || b.en),
    };
  });
}

export const maxSaving = () => Math.max(...getDemoBundles().map((b) => b.savePct));
