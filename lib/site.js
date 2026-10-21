// Site navigation per language: used by the header menus, the mobile menu and
// the footer. Links are written as English paths; on other languages they are
// automatically prefixed (/da, /de, /fr, /es, /ar, /ur).
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
        { label: 'Gold Resin', href: '/products/shilajit-gold-resin/', text: 'Gold Edition · 30 g', img: '/images/thumbs/pack-gold.webp', blurb: 'Pure shilajit for your daily ritual' },
        { label: 'Silver Resin', href: '/products/shilajit-silver-resin/', text: 'Silver Edition · 30 g', img: '/images/thumbs/pack-silver.webp', blurb: 'Everyday resin, one ingredient' },
        { label: 'Gummies', href: '/products/shilajit-gummies/', text: 'Gold Edition · Strawberry', img: '/images/thumbs/pack-gummies.webp', blurb: '500 mg shilajit, ready on the go' },
        { label: 'Drops', href: '/products/shilajit-drops/', text: 'Elderberry · 30 ml', img: '/images/thumbs/pack-drops.webp', blurb: 'Quick to mix, three drops a day' },
        { label: 'Capsules', href: '/products/shilajit-capsules/', text: 'Daily Wellness Formula · 60', img: '/images/thumbs/pack-capsules.webp', blurb: 'With zinc for normal testosterone levels' },
        { label: 'Bundles', href: '/bundles/', text: 'Save up to 23%', img: '/images/thumbs/bundle-summit-set.webp', blurb: 'Save up to 23% on sets' },
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
        { label: 'Distributors', href: '/distributors/', text: 'Find us in 11 countries' },
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
        { label: 'Gold Resin', href: '/products/shilajit-gold-resin/', text: 'Gold Edition · 30 g', img: '/images/thumbs/pack-gold.webp', blurb: 'Ren shilajit til dit daglige ritual' },
        { label: 'Silver Resin', href: '/products/shilajit-silver-resin/', text: 'Silver Edition · 30 g', img: '/images/thumbs/pack-silver.webp', blurb: 'Hverdagsresin, kun én ingrediens' },
        { label: 'Vingummi', href: '/products/shilajit-gummies/', text: 'Gold Edition · Jordbær', img: '/images/thumbs/pack-gummies.webp', blurb: '500 mg shilajit, klar til farten' },
        { label: 'Dråber', href: '/products/shilajit-drops/', text: 'Hyldebær · 30 ml', img: '/images/thumbs/pack-drops.webp', blurb: 'Hurtig at blande, tre dråber om dagen' },
        { label: 'Kapsler', href: '/products/shilajit-capsules/', text: 'Daily Wellness Formula · 60', img: '/images/thumbs/pack-capsules.webp', blurb: 'Med zink til et normalt testosteronniveau' },
        { label: 'Sæt', href: '/bundles/', text: 'Spar op til 23%', img: '/images/thumbs/bundle-summit-set.webp', blurb: 'Spar op til 23% på sæt' },
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
        { label: 'Forhandlere', href: '/distributors/', text: 'Find os i 11 lande' },
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

// German, French, Spanish, Arabic and Urdu share the English structure;
// only the words differ.
function build(w) {
  const [shop, ours, know] = en.menu;
  const L = w.labels;
  return {
    menu: [
      {
        ...shop, label: L.shop,
        feature: { ...shop.feature, text: w.shopFeature },
        items: shop.items.map((it, i) => ({ ...it, label: w.shopItems[i][0], text: w.shopItems[i][1], ...(it.blurb ? { blurb: w.shopItems[i][2] } : {}) })),
      },
      {
        ...ours, label: L.ours,
        feature: { ...ours.feature, title: w.oursFeature[0], text: w.oursFeature[1] },
        items: ours.items.map((it, i) => ({ ...it, label: w.oursItems[i][0], text: w.oursItems[i][1] })),
      },
      {
        ...know, label: L.know,
        feature: { ...know.feature, text: w.knowFeature },
        items: know.items.map((it, i) => ({ ...it, label: w.knowItems[i][0], text: w.knowItems[i][1] })),
      },
      { label: L.rewards, href: '/rewards/' },
    ],
    footer: [
      { title: L.shop, links: en.footer[0].links.map(([, h], i) => [[w.shopItems[0][0], ...w.shopItems.slice(1).map((x) => x[0])][i], h]) },
      { title: L.ours, links: en.footer[1].links.map(([, h], i) => [w.oursItems[i][0], h]) },
      { title: L.know, links: en.footer[2].links.map(([, h], i) => [[...w.knowItems.slice(0, 5).map((x) => x[0]), L.rewards][i], h]) },
      { title: L.help, links: en.footer[3].links.map(([, h], i) => [w.help[i], h]) },
    ],
    legal: en.legal.map(([, h], i) => [w.legal[i], h]),
  };
}

const de = build({
  labels: { shop: 'Shop', ours: 'Unser Shilajit', know: 'Über uns', rewards: 'Rewards', help: 'Hilfe' },
  shopFeature: 'Eine Zutat, ein Ursprung: Skardu, über 5.000 m.',
  shopItems: [
    ['Alle Produkte', 'Die gesamte Himalayan Drop Kollektion'],
    ['Gold Resin', 'Gold Edition · 30 g', 'Reines Shilajit Harz für dein tägliches Ritual'],
    ['Silver Resin', 'Silver Edition · 30 g', 'Harz für jeden Tag, eine Zutat'],
    ['Gummies', 'Gold Edition · Erdbeere', '500 mg Shilajit für unterwegs'],
    ['Tropfen', 'Holunder · 30 ml', 'Schnell gemischt, drei Tropfen am Tag'],
    ['Kapseln', 'Daily Wellness Formula · 60', 'Mit Zink für einen normalen Testosteronspiegel'],
    ['Sets', 'Bis zu 23 % sparen', 'Bis zu 23 % sparen mit Sets'],
  ],
  oursFeature: ['Vom Berg ins Glas', 'Sechs geduldige Schritte und bis zu 60 Tage in der Sonne.'],
  oursItems: [
    ['Unser Shilajit', 'Herkunft, Reinheit und was es besonders macht'],
    ['Der Prozess', 'Ernte, Filtern, Sonnentrocknung, Prüfung, Abfüllung'],
    ['Laborergebnisse', 'Finde den Bericht zu deiner Charge'],
    ['Anwendung', 'Harz, Gummies, Tropfen und Kapseln'],
    ['FAQ', 'Antworten auf häufige Fragen'],
  ],
  knowFeature: 'Gestaltet in Dänemark, gewonnen im Himalaya.',
  knowItems: [
    ['Unsere Geschichte', 'Warum wir Himalayan Drop gegründet haben'],
    ['Zertifikate', 'Standards, nach denen wir herstellen und prüfen'],
    ['Journal', 'Ratgeber und Wissen aus den Bergen'],
    ['Bewertungen', 'In den Worten unserer Kunden'],
    ['Händler', 'In 11 Ländern erhältlich'],
    ['Kontakt', 'Wir helfen gerne'],
  ],
  help: ['Kontakt', 'Versand', 'Rückgabe & Garantie', 'Anmelden', 'Registrieren'],
  legal: ['Datenschutzerklärung', 'AGB'],
});

const fr = build({
  labels: { shop: 'Boutique', ours: 'Notre shilajit', know: 'À propos', rewards: 'Récompenses', help: 'Aide' },
  shopFeature: 'Un ingrédient, une origine : Skardu, au-dessus de 5 000 m.',
  shopItems: [
    ['Tous les produits', 'Toute la collection Himalayan Drop'],
    ['Gold Resin', 'Gold Edition · 30 g', 'Résine de shilajit pure pour votre rituel'],
    ['Silver Resin', 'Silver Edition · 30 g', 'La résine du quotidien, un seul ingrédient'],
    ['Gommes', 'Gold Edition · Fraise', '500 mg de shilajit, à emporter partout'],
    ['Gouttes', 'Sureau · 30 ml', 'Faciles à mélanger, trois gouttes par jour'],
    ['Gélules', 'Daily Wellness Formula · 60', 'Avec du zinc pour un taux normal de testostérone'],
    ['Coffrets', 'Jusqu’à 23 % d’économie', 'Jusqu’à 23 % d’économie sur les coffrets'],
  ],
  oursFeature: ['De la montagne au pot', 'Six étapes patientes et jusqu’à 60 jours au soleil.'],
  oursItems: [
    ['Notre shilajit', 'Origine, pureté et ce qui le distingue'],
    ['Le processus', 'Récolte, filtration, séchage au soleil, tests, conditionnement'],
    ['Résultats de laboratoire', 'Consultez le rapport de votre lot'],
    ['Utilisation', 'Résine, gommes, gouttes et gélules'],
    ['FAQ', 'Réponses aux questions fréquentes'],
  ],
  knowFeature: 'Conçu au Danemark, récolté dans l’Himalaya.',
  knowItems: [
    ['Notre histoire', 'Pourquoi nous avons créé Himalayan Drop'],
    ['Certificats', 'Les normes de production et de contrôle'],
    ['Journal', 'Guides et notes venus des montagnes'],
    ['Avis', 'Avec les mots de nos clients'],
    ['Distributeurs', 'Présents dans 11 pays'],
    ['Contact', 'Nous sommes là pour vous aider'],
  ],
  help: ['Contact', 'Livraison', 'Retours et garantie', 'Connexion', 'Créer un compte'],
  legal: ['Politique de confidentialité', 'Conditions générales de vente'],
});

const es = build({
  labels: { shop: 'Tienda', ours: 'Nuestro shilajit', know: 'Conócenos', rewards: 'Recompensas', help: 'Ayuda' },
  shopFeature: 'Un ingrediente, un origen: Skardu, a más de 5.000 m.',
  shopItems: [
    ['Todos los productos', 'Toda la colección Himalayan Drop'],
    ['Gold Resin', 'Gold Edition · 30 g', 'Resina de shilajit pura para tu ritual diario'],
    ['Silver Resin', 'Silver Edition · 30 g', 'Resina para cada día, un solo ingrediente'],
    ['Gominolas', 'Gold Edition · Fresa', '500 mg de shilajit, listas para llevar'],
    ['Gotas', 'Saúco · 30 ml', 'Fáciles de mezclar, tres gotas al día'],
    ['Cápsulas', 'Daily Wellness Formula · 60', 'Con zinc para niveles normales de testosterona'],
    ['Packs', 'Ahorra hasta un 23 %', 'Ahorra hasta un 23 % en packs'],
  ],
  oursFeature: ['De la montaña al tarro', 'Seis pasos pacientes y hasta 60 días al sol.'],
  oursItems: [
    ['Nuestro shilajit', 'Origen, pureza y lo que lo hace único'],
    ['El proceso', 'Recolección, filtrado, secado al sol, análisis, envasado'],
    ['Resultados de laboratorio', 'Consulta el informe de tu lote'],
    ['Modo de uso', 'Resina, gominolas, gotas y cápsulas'],
    ['Preguntas frecuentes', 'Respuestas a las dudas más comunes'],
  ],
  knowFeature: 'Diseñado en Dinamarca, recolectado en el Himalaya.',
  knowItems: [
    ['Nuestra historia', 'Por qué creamos Himalayan Drop'],
    ['Certificados', 'Las normas con las que producimos y analizamos'],
    ['Journal', 'Guías y notas desde las montañas'],
    ['Opiniones', 'En palabras de nuestros clientes'],
    ['Distribuidores', 'Presentes en 11 países'],
    ['Contacto', 'Estamos aquí para ayudarte'],
  ],
  help: ['Contacto', 'Envíos', 'Devoluciones y garantía', 'Iniciar sesión', 'Crear cuenta'],
  legal: ['Política de privacidad', 'Términos y condiciones'],
});

const ar = build({
  labels: { shop: 'المتجر', ours: 'الشيلاجيت لدينا', know: 'تعرّف علينا', rewards: 'المكافآت', help: 'المساعدة' },
  shopFeature: 'مكوّن واحد ومصدر واحد: سكردو، على ارتفاع يزيد عن 5000 متر.',
  shopItems: [
    ['جميع المنتجات', 'مجموعة Himalayan Drop الكاملة'],
    ['راتنج ذهبي', 'Gold Edition · 30 غ', 'راتنج شيلاجيت نقي لطقسك اليومي'],
    ['راتنج فضي', 'Silver Edition · 30 غ', 'راتنج لكل يوم، مكوّن واحد'],
    ['علكات', 'Gold Edition · فراولة', '500 ملغ شيلاجيت، جاهزة أينما كنت'],
    ['قطرات', 'البلسان · 30 مل', 'سهلة المزج، ثلاث قطرات يومياً'],
    ['كبسولات', 'Daily Wellness Formula · 60', 'مع الزنك للحفاظ على مستوى طبيعي من التستوستيرون'],
    ['المجموعات', 'وفّر حتى 23%', 'وفّر حتى 23% على المجموعات'],
  ],
  oursFeature: ['من الجبل إلى العبوة', 'ست خطوات متأنية وحتى 60 يوماً تحت الشمس.'],
  oursItems: [
    ['الشيلاجيت لدينا', 'المصدر والنقاء وما يميّزه'],
    ['مراحل الإنتاج', 'الجمع والتصفية والتجفيف بالشمس والفحص والتعبئة'],
    ['نتائج المختبر', 'اعثر على تقرير دفعتك'],
    ['طريقة الاستخدام', 'الراتنج والعلكات والقطرات والكبسولات'],
    ['الأسئلة الشائعة', 'إجابات عن الأسئلة المتكررة'],
  ],
  knowFeature: 'مصمم في الدنمارك، ومن قلب جبال الهيمالايا.',
  knowItems: [
    ['قصتنا', 'لماذا أسسنا Himalayan Drop'],
    ['الشهادات', 'المعايير التي ننتج ونفحص وفقها'],
    ['المدونة', 'أدلة ومعرفة من الجبال'],
    ['آراء العملاء', 'بكلمات عملائنا'],
    ['الموزعون', 'متوفر في 11 دولة'],
    ['اتصل بنا', 'نحن هنا لمساعدتك'],
  ],
  help: ['اتصل بنا', 'الشحن', 'الإرجاع والضمان', 'تسجيل الدخول', 'إنشاء حساب'],
  legal: ['سياسة الخصوصية', 'الشروط والأحكام'],
});

const ur = build({
  labels: { shop: 'شاپ', ours: 'ہمارا سلاجیت', know: 'ہمارے بارے میں', rewards: 'انعامات', help: 'مدد' },
  shopFeature: 'ایک جزو، ایک ماخذ: اسکردو، 5,000 میٹر سے بلند۔',
  shopItems: [
    ['تمام مصنوعات', 'Himalayan Drop کا مکمل کلیکشن'],
    ['گولڈ ریزن', 'Gold Edition · 30 گرام', 'روزمرہ معمول کے لیے خالص سلاجیت'],
    ['سلور ریزن', 'Silver Edition · 30 گرام', 'روزانہ کے لیے ریزن، صرف ایک جزو'],
    ['گمیز', 'Gold Edition · اسٹرابیری', '500 ملی گرام سلاجیت، سفر میں ساتھ'],
    ['ڈراپس', 'ایلڈربیری · 30 ملی لیٹر', 'آسانی سے ملائیں، دن میں تین قطرے'],
    ['کیپسول', 'Daily Wellness Formula · 60', 'زنک کے ساتھ، ٹیسٹوسٹیرون کی نارمل سطح کے لیے'],
    ['بنڈلز', '23% تک بچت', 'سیٹس پر 23% تک بچت'],
  ],
  oursFeature: ['پہاڑ سے برتن تک', 'چھ صبر آزما مراحل اور 60 دن تک دھوپ میں۔'],
  oursItems: [
    ['ہمارا سلاجیت', 'ماخذ، خالص پن اور اس کی انفرادیت'],
    ['تیاری کا طریقہ', 'چناؤ، صفائی، دھوپ میں سکھانا، ٹیسٹ، پیکنگ'],
    ['لیب رپورٹس', 'اپنے بیچ کی رپورٹ دیکھیں'],
    ['استعمال کا طریقہ', 'ریزن، گمیز، ڈراپس اور کیپسول'],
    ['عام سوالات', 'اکثر پوچھے جانے والے سوالات کے جوابات'],
  ],
  knowFeature: 'ڈنمارک میں ڈیزائن، ہمالیہ سے حاصل کردہ۔',
  knowItems: [
    ['ہماری کہانی', 'ہم نے Himalayan Drop کیوں شروع کیا'],
    ['سرٹیفکیٹس', 'وہ معیار جن پر ہم تیار اور ٹیسٹ کرتے ہیں'],
    ['بلاگ', 'پہاڑوں سے رہنمائی اور معلومات'],
    ['ریویوز', 'ہمارے گاہکوں کی زبانی'],
    ['ڈسٹری بیوٹرز', '11 ممالک میں دستیاب'],
    ['رابطہ', 'ہم مدد کے لیے حاضر ہیں'],
  ],
  help: ['رابطہ', 'ترسیل', 'واپسی اور گارنٹی', 'لاگ ان', 'اکاؤنٹ بنائیں'],
  legal: ['پرائیویسی پالیسی', 'شرائط و ضوابط'],
});

export const site = { en, da, de, fr, es, ar, ur };

// Social profiles shown in the footer. PLACEHOLDER links: replace with your
// real profile addresses.
export const SOCIAL = [
  { key: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/himalayandrop' },
  { key: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/himalayandrop' },
  { key: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@himalayandrop' },
];
