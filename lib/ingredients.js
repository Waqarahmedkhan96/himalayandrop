// Ingredients page: one flip card per ingredient. Titles, short descriptions and the authorised
// zinc / selenium wording come from lib/pdp.js (all seven languages), amounts from the product
// formulas in lib/products.js. The longer "more" text is written for English and Danish; the
// other languages show the short description and the amounts.
// Wording rule (EU): describe what the ingredient is and how much is in each product. No health
// claims for shilajit. The only health wording is the authorised zinc and selenium claims from
// lib/pdp.js, which apply to the Capsules (they hold 15% or more of the reference value).
// Photos come straight from Unsplash (free licence). Swap any of them by changing the id here,
// or put your own file in /public/images/ingredients/ and use a path starting with "/".

const u = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=760&q=70`;

export const PHOTOS = {
  fulvic: u('1556010656-e60700d4c0d5'),
  minerals: u('1546608135-e5de34abc308'),
  humic: u('1522409640003-31c21bd5e696'),
  dbp: u('1686043626878-9e391a70632d'),
  amino: '/images/stones/t4.webp',
  origin: u('1753696252683-8e4d81bbc560'),
  shilajit: '/images/jars/resin-gold.webp',
  citrulline: u('1563114773-84221bd62daa'),
  ginseng: u('1695798790639-c3c4294373ab'),
  zinc: u('1645859420769-6bab07d29745'),
  selenium: u('1515799251528-8e14681f214e'),
  seamoss: u('1637715925533-4c33bd22908e'),
  blackseed: u('1608797179015-0f64ad48744b'),
};

// Per serving: Gummies = 2 gummies, Drops = daily portion of 3 drops, Capsules = 2 capsules.
export const AMOUNTS = {
  shilajit: ['500 mg', '20 mg', '500 mg'],
  citrulline: ['50 mg', '5 mg', '250 mg'],
  ginseng: ['20 mg', '2 mg', '100 mg'],
  zinc: ['1 mg', '0.5 mg', '5 mg'],
  selenium: ['5 µg', '5 µg', '55 µg'],
  seamoss: ['20 mg', '2 mg', '100 mg'],
  blackseed: ['10 mg', '2 mg', '100 mg'],
};
export const RESIN_ORDER = ['fulvic', 'minerals', 'humic', 'dbp', 'amino', 'origin'];
export const FORMULA_ORDER = ['shilajit', 'citrulline', 'ginseng', 'zinc', 'selenium', 'seamoss', 'blackseed'];
export const CLAIMS = { zinc: [0, 1], selenium: [2, 3] }; // indexes into pdp facts.claims

export const COPY = {
  en: {
    hero: { eyebrow: 'Ingredients', title: 'Every ingredient,', accent: 'in the open.', lead: 'Shilajit and six companion ingredients, each with its amount on the label. Turn a card to read more.' },
    s1: { eyebrow: 'The resin', title: 'What nature puts into shilajit.' },
    s2: { eyebrow: 'The formula', title: 'Gummies, drops and capsules.', text: 'Shilajit with six companion ingredients. Amounts are per serving and listed on every label.' },
    more: 'Read more', back: 'Back', credit: 'Photos: Unsplash',
  },
  da: {
    hero: { eyebrow: 'Ingredienser', title: 'Hver ingrediens,', accent: 'åbent og ærligt.', lead: 'Shilajit og seks følgeingredienser, hver med mængden på etiketten. Vend et kort for at læse mere.' },
    s1: { eyebrow: 'Resinen', title: 'Hvad naturen lægger i shilajit.' },
    s2: { eyebrow: 'Formlen', title: 'Vingummi, dråber og kapsler.', text: 'Shilajit med seks følgeingredienser. Mængderne gælder pr. portion og står på hver etiket.' },
    more: 'Læs mere', back: 'Tilbage', credit: 'Fotos: Unsplash',
  },
  de: {
    hero: { eyebrow: 'Inhaltsstoffe', title: 'Jeder Inhaltsstoff,', accent: 'offen gelegt.', lead: 'Shilajit und sechs Begleitstoffe, jeweils mit Menge auf dem Etikett. Dreh eine Karte um und lies mehr.' },
    s1: { eyebrow: 'Das Harz', title: 'Was die Natur in Shilajit legt.' },
    s2: { eyebrow: 'Die Formel', title: 'Gummies, Tropfen und Kapseln.', text: 'Shilajit mit sechs Begleitstoffen. Mengen pro Portion, auf jedem Etikett angegeben.' },
    more: 'Mehr lesen', back: 'Zurück', credit: 'Fotos: Unsplash',
  },
  fr: {
    hero: { eyebrow: 'Ingrédients', title: 'Chaque ingrédient,', accent: 'en toute transparence.', lead: 'Le shilajit et six ingrédients complémentaires, chacun avec sa quantité sur l’étiquette. Retournez une carte pour en savoir plus.' },
    s1: { eyebrow: 'La résine', title: 'Ce que la nature met dans le shilajit.' },
    s2: { eyebrow: 'La formule', title: 'Gommes, gouttes et gélules.', text: 'Du shilajit avec six ingrédients complémentaires. Quantités par portion, indiquées sur chaque étiquette.' },
    more: 'En savoir plus', back: 'Retour', credit: 'Photos : Unsplash',
  },
  es: {
    hero: { eyebrow: 'Ingredientes', title: 'Cada ingrediente,', accent: 'a la vista.', lead: 'Shilajit y seis ingredientes complementarios, cada uno con su cantidad en la etiqueta. Da la vuelta a una tarjeta para leer más.' },
    s1: { eyebrow: 'La resina', title: 'Lo que la naturaleza pone en el shilajit.' },
    s2: { eyebrow: 'La fórmula', title: 'Gominolas, gotas y cápsulas.', text: 'Shilajit con seis ingredientes complementarios. Cantidades por porción, indicadas en cada etiqueta.' },
    more: 'Leer más', back: 'Volver', credit: 'Fotos: Unsplash',
  },
  ar: {
    hero: { eyebrow: 'المكونات', title: 'كل مكوّن،', accent: 'بوضوح.', lead: 'الشيلاجيت وستة مكونات مرافقة، لكل منها كميته على الملصق. اقلب البطاقة لقراءة المزيد.' },
    s1: { eyebrow: 'الراتنج', title: 'ما تضعه الطبيعة في الشيلاجيت.' },
    s2: { eyebrow: 'التركيبة', title: 'العلكات والقطرات والكبسولات.', text: 'شيلاجيت مع ستة مكونات مرافقة. الكميات لكل حصة ومذكورة على كل ملصق.' },
    more: 'اقرأ المزيد', back: 'رجوع', credit: 'الصور: Unsplash',
  },
  ur: {
    hero: { eyebrow: 'اجزاء', title: 'ہر جزو،', accent: 'کھلے طور پر۔', lead: 'سلاجیت اور چھ ساتھی اجزاء، ہر ایک کی مقدار لیبل پر۔ مزید پڑھنے کے لیے کارڈ پلٹیں۔' },
    s1: { eyebrow: 'ریزن', title: 'قدرت سلاجیت میں کیا رکھتی ہے۔' },
    s2: { eyebrow: 'فارمولا', title: 'گمیز، ڈراپس اور کیپسول۔', text: 'سلاجیت چھ ساتھی اجزاء کے ساتھ۔ مقداریں فی خوراک ہیں اور ہر لیبل پر درج ہیں۔' },
    more: 'مزید پڑھیں', back: 'واپس', credit: 'تصاویر: Unsplash',
  },
};

// Longer text for the back of each card (English and Danish).
export const MORE = {
  en: {
    fulvic: 'Fulvic acids are the water-soluble organic acids shilajit is best known for. We have the percentage measured by an independent laboratory and print it on the pack. The lab report for your batch shows the result for that batch.',
    minerals: 'Shilajit seeps out of mountain rock, so it carries minerals and trace elements from that rock. Nothing is added. Every batch is screened for lead, cadmium and mercury against the EU maximum levels for food supplements.',
    humic: 'Humic substances are larger organic molecules formed over a very long time from plant matter. They give raw shilajit its deep brown-black colour and its thick, sticky texture.',
    dbp: 'Dibenzo-α-pyrones are marker compounds. Together with other tests, laboratories use them to tell authentic shilajit from imitations.',
    amino: 'Amino acids are present in shilajit in small, natural amounts. They are a trace, not a protein source.',
    origin: 'Our shilajit is hand-collected above 5,000 m near Skardu, Pakistan, far from roads and industry. It is then filtered, sun-dried for up to 60 days, tested and sealed in glass.',
    shilajit: 'Himalayan shilajit from Skardu is the heart of every serving. The resin is the whole product on its own, and the gummies, drops and capsules carry it together with six companion ingredients.',
    citrulline: 'L-citrulline is an amino acid that was first identified in watermelon. It is a companion ingredient in the gummies, drops and capsules, with its amount on every label.',
    ginseng: 'Panax ginseng extract is made from the root of Korean ginseng, a classic of East Asian tradition. It is added as a companion ingredient, with its amount on every label.',
    zinc: 'Zinc is an essential trace element. Two capsules give 5 mg of zinc, which is 50% of the nutrient reference value, so the authorised claims below can be shown for the Capsules.',
    selenium: 'Selenium is an essential trace element. Two capsules give 55 µg of selenium, which is 100% of the nutrient reference value, so the authorised claims below can be shown for the Capsules.',
    seamoss: 'Sea moss is a red seaweed, also called Irish moss, from the Atlantic coast. It is added as a companion ingredient, with its amount on every label.',
    blackseed: 'Black seed is the seed of Nigella sativa, used in kitchens from Morocco to India. It is added as a companion ingredient, with its amount on every label.',
  },
  da: {
    fulvic: 'Fulvinsyrer er de vandopløselige organiske syrer, som shilajit er mest kendt for. Vi får procentdelen målt af et uafhængigt laboratorium og trykker den på pakken. Laboratorierapporten for din batch viser resultatet for netop den batch.',
    minerals: 'Shilajit siver ud af bjergklippe, så den indeholder mineraler og sporstoffer fra klippen. Der tilsættes intet. Hver batch kontrolleres for bly, cadmium og kviksølv mod EU’s maksimalgrænser for kosttilskud.',
    humic: 'Humusstoffer er større organiske molekyler, der over meget lang tid er dannet af plantemateriale. De giver rå shilajit dens dybe brunsorte farve og tykke, klistrede konsistens.',
    dbp: 'Dibenzo-α-pyroner er markørstoffer. Sammen med andre test bruger laboratorier dem til at skelne ægte shilajit fra efterligninger.',
    amino: 'Aminosyrer findes i shilajit i små, naturlige mængder. De er et spor, ikke en proteinkilde.',
    origin: 'Vores shilajit samles i hånden over 5.000 m nær Skardu i Pakistan, langt fra veje og industri. Den filtreres derefter, soltørres i op til 60 dage, testes og forsegles i glas.',
    shilajit: 'Himalaya-shilajit fra Skardu er hjertet i hver portion. Resinen er hele produktet i sig selv, og vingummi, dråber og kapsler rummer den sammen med seks følgeingredienser.',
    citrulline: 'L-citrullin er en aminosyre, som først blev fundet i vandmelon. Den er en følgeingrediens i vingummi, dråber og kapsler, med mængden på hver etiket.',
    ginseng: 'Panax ginseng-ekstrakt udvindes af roden fra koreansk ginseng, en klassiker i østasiatisk tradition. Den er tilsat som følgeingrediens, med mængden på hver etiket.',
    zinc: 'Zink er et essentielt sporstof. To kapsler giver 5 mg zink, hvilket er 50 % af referenceindtaget, så de godkendte påstande nedenfor kan vises for kapslerne.',
    selenium: 'Selen er et essentielt sporstof. To kapsler giver 55 µg selen, hvilket er 100 % af referenceindtaget, så de godkendte påstande nedenfor kan vises for kapslerne.',
    seamoss: 'Havmos er en rød tang, også kaldet irsk mos, fra Atlanterhavskysten. Den er tilsat som følgeingrediens, med mængden på hver etiket.',
    blackseed: 'Sortkommen er frøet fra Nigella sativa, der bruges i køkkener fra Marokko til Indien. Den er tilsat som følgeingrediens, med mængden på hver etiket.',
  },
};
