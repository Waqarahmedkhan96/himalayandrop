// SEO: page titles and descriptions per language, canonical + hreflang links,
// Open Graph and structured data (JSON-LD).
//
// Keyword map (from research into what ranks in Denmark and the EU):
//  EN  shilajit · buy shilajit · pure Himalayan shilajit resin · lab-tested shilajit ·
//      shilajit gummies / drops / capsules · fulvic acid · heavy metals tested ·
//      what is shilajit · how to take shilajit · how to tell if shilajit is real
//  DA  shilajit · køb shilajit · ren shilajit · ægte shilajit · Himalaya shilajit ·
//      shilajit resin / harpiks · shilajit vingummi · shilajit dråber · shilajit kapsler ·
//      fulvinsyre · tungmetaller · laboratorietestet · kosttilskud · hvad er shilajit
//
//  DE  Shilajit kaufen · Shilajit Harz · reines Himalaya Shilajit · Mumijo ·
//      laborgeprüft · Fulvinsäure · Schwermetalle · Shilajit Gummies / Tropfen / Kapseln
//  FR  acheter shilajit · shilajit résine pure · shilajit de l'Himalaya ·
//      acide fulvique · testé en laboratoire · gommes / gouttes / gélules de shilajit
//  ES  comprar shilajit · shilajit resina pura · shilajit del Himalaya ·
//      ácido fúlvico · analizado en laboratorio · gominolas / gotas / cápsulas de shilajit
//  AR  (UAE) شيلاجيت · راتنج شيلاجيت · شيلاجيت الهيمالايا الأصلي · شيلاجيت نقي ·
//      حمض الفولفيك · مفحوص مخبرياً · شيلاجيت دبي / الإمارات
//  UR  (Pakistan) سلاجیت · اصلی سلاجیت · ہمالیائی سلاجیت · اسکردو سلاجیت ·
//      لیب ٹیسٹڈ · سلاجیت کی پہچان · سلاجیت استعمال کا طریقہ
//
// EU rules: no health claims for shilajit, so keywords focus on origin,
// format, purity and testing, never on effects.

import { SITE_URL, OG_LOCALE, LOCALES, LANGS, localizeHref } from './i18n';

export const BRAND = 'Himalayan Drop';
const DEFAULT_IMAGE = '/images/collection-lineup.webp';

export const pages = {
  home: {
    en: {
      title: 'Pure Himalayan Shilajit Resin, Gummies, Drops & Capsules',
      description: 'Lab-tested Himalayan shilajit from a Danish brand. Pure shilajit resin hand-harvested above 5,000 m in Skardu, plus shilajit gummies, drops and capsules.',
    },
    da: {
      title: 'Ren Himalaya Shilajit · Resin, Vingummi, Dråber & Kapsler',
      description: 'Køb laboratorietestet shilajit fra et dansk brand. Ren shilajit resin håndhøstet over 5.000 m i Skardu, samt shilajit vingummi, dråber og kapsler.',
    },
  },
  shop: {
    en: { title: 'Buy Shilajit Online · Resin, Gummies, Drops & Capsules', description: 'Shop lab-tested Himalayan shilajit: pure resin, strawberry gummies, elderberry drops and capsules. Batch report for every product, 60-day guarantee.' },
    da: { title: 'Køb Shilajit · Resin, Vingummi, Dråber og Kapsler', description: 'Køb laboratorietestet Himalaya shilajit: ren resin, vingummi med jordbær, dråber med hyldebær og kapsler. Rapport for hver batch og 60 dages garanti.' },
  },
  'our-shilajit': {
    en: { title: 'Our Shilajit · Authentic Himalayan Shilajit from Skardu', description: 'Hand-collected above 5,000 m near K2, filtered several times, sun-dried for up to 60 days and lab-tested for heavy metals and fulvic acid, batch by batch.' },
    da: { title: 'Vores Shilajit · Ægte Himalaya Shilajit fra Skardu', description: 'Håndsamlet over 5.000 m nær K2, filtreret flere gange, soltørret i op til 60 dage og testet for tungmetaller og fulvinsyre, batch for batch.' },
  },
  'lab-results': {
    en: { title: 'Lab-Tested Shilajit · Heavy Metals & Fulvic Acid Reports', description: 'Every Himalayan Drop batch is lab-tested for heavy metals, microbiology and fulvic acid %. Enter your batch number to see the report for your jar.' },
    da: { title: 'Laboratorietestet Shilajit · Tungmetaller og Fulvinsyre', description: 'Hver batch fra Himalayan Drop testes for tungmetaller, mikrobiologi og fulvinsyre. Indtast dit batchnummer og se rapporten for din krukke.' },
  },
  'how-to-use': {
    en: { title: 'How to Take Shilajit · Resin, Gummies, Drops & Capsules', description: 'How to take shilajit resin, gummies, drops and capsules, step by step: how much, when, and how to store it.' },
    da: { title: 'Sådan Tager Du Shilajit · Dosis og Vejledning', description: 'Sådan tager du shilajit resin, vingummi, dråber og kapsler trin for trin: hvor meget, hvornår, og hvordan du opbevarer det.' },
  },
  faq: {
    en: { title: 'Shilajit FAQ · Questions About Shilajit, Answered', description: 'What is shilajit, how do you take it, how can you tell if it is real, and is it lab-tested? Answers about our products, orders and guarantee.' },
    da: { title: 'Shilajit FAQ · Ofte Stillede Spørgsmål om Shilajit', description: 'Hvad er shilajit, hvordan tager man det, hvordan ser man om det er ægte, og er det laboratorietestet? Svar om produkter, ordrer og garanti.' },
  },
  'our-story': {
    en: { title: 'Our Story · A Danish Shilajit Brand', description: 'Himalayan Drop is a Danish shilajit brand: sourced above 5,000 m in Skardu, designed in Denmark, with a lab report behind every batch.' },
    da: { title: 'Vores Historie · Et Dansk Shilajit-Brand', description: 'Himalayan Drop er et dansk shilajit-brand: hentet over 5.000 m i Skardu, designet i Danmark og med en laboratorierapport bag hver batch.' },
  },
  certificates: {
    en: { title: 'Certificates · GMP, ISO 22000, ISO 9001 & Heavy Metal Testing', description: 'The quality standards behind Himalayan Drop shilajit: GMP, ISO 22000 and ISO 9001, heavy metal testing on every batch and a 60-day guarantee.' },
    da: { title: 'Certifikater · GMP, ISO 22000, ISO 9001 og Tungmetaltest', description: 'Kvalitetsstandarderne bag Himalayan Drop shilajit: GMP, ISO 22000 og ISO 9001, test for tungmetaller på hver batch og 60 dages garanti.' },
  },
  contact: {
    en: { title: 'Contact Us', description: 'Questions about an order, a shilajit product or a lab report? Write to Himalayan Drop. We answer in English and Danish.' },
    da: { title: 'Kontakt Os', description: 'Spørgsmål om en ordre, et shilajit-produkt eller en laboratorierapport? Skriv til Himalayan Drop. Vi svarer på dansk og engelsk.' },
  },
  reviews: {
    en: { title: 'Customer Reviews', description: 'What customers say about Himalayan Drop shilajit resin, gummies, drops and capsules.' },
    da: { title: 'Anmeldelser', description: 'Hvad kunderne siger om Himalayan Drop shilajit resin, vingummi, dråber og kapsler.' },
  },
  blog: {
    en: { title: 'Shilajit Guides & Journal', description: 'Guides about shilajit: what it is, how to take it, how to tell if it is real and how to read a lab report.' },
    da: { title: 'Shilajit Guides og Viden', description: 'Guides om shilajit: hvad det er, hvordan du tager det, hvordan du ser om det er ægte, og hvordan du læser en analyserapport.' },
  },
  bundles: {
    en: { title: 'Shilajit Bundles · Save up to 23% on Resin, Gummies & Capsules', description: 'Shilajit bundles from Himalayan Drop: resin, gummies, drops and capsules in sets that cost less than buying separately. Lab-tested, 60-day guarantee.' },
    da: { title: 'Shilajit Sæt · Spar op til 23% på Resin, Vingummi og Kapsler', description: 'Shilajit-sæt fra Himalayan Drop: resin, vingummi, dråber og kapsler i sæt, der koster mindre end hver for sig. Laboratorietestet, 60 dages garanti.' },
  },
  distributors: {
    en: { title: 'Shilajit Distributors · Denmark, UK, Europe, UAE & Pakistan', description: 'Find Himalayan Drop shilajit near you: partners in Copenhagen, Stockholm, Manchester, Berlin, Paris, Dubai, Islamabad and more. Or apply to become a distributor.' },
    da: { title: 'Shilajit Forhandlere · Danmark, Europa, Emiraterne og Pakistan', description: 'Find Himalayan Drop shilajit nær dig: partnere i København, Odense, Stockholm, Berlin, Paris, Dubai, Islamabad og flere byer. Eller ansøg om at blive forhandler.' },
  },
  rewards: {
    en: { title: 'Summit Rewards', description: 'Earn points with every order and climb from Base Camp to Summit.' },
    da: { title: 'Summit Rewards', description: 'Optjen point på hver ordre og klatr fra Base Camp til Summit.' },
  },
  login: { en: { title: 'Log In', description: 'Log in to your Himalayan Drop account.' }, da: { title: 'Log Ind', description: 'Log ind på din Himalayan Drop-konto.' } },
  register: { en: { title: 'Create Account', description: 'Create a Himalayan Drop account.' }, da: { title: 'Opret Konto', description: 'Opret en Himalayan Drop-konto.' } },
};

// German, French, Spanish, Arabic (UAE) and Urdu (Pakistan), written with
// each country's search terms.
const MORE = {
  home: {
    de: { title: 'Reines Himalaya Shilajit Harz, Gummies, Tropfen & Kapseln', description: 'Laborgeprüftes Himalaya Shilajit (Mumijo) von einer dänischen Marke. Reines Shilajit Harz, von Hand geerntet über 5.000 m in Skardu, dazu Gummies, Tropfen und Kapseln.' },
    fr: { title: 'Shilajit Pur de l’Himalaya · Résine, Gommes, Gouttes et Gélules', description: 'Shilajit de l’Himalaya testé en laboratoire, par une marque danoise. Résine de shilajit pure récoltée à la main au-dessus de 5 000 m à Skardu, ainsi que gommes, gouttes et gélules.' },
    es: { title: 'Shilajit Puro del Himalaya · Resina, Gominolas, Gotas y Cápsulas', description: 'Shilajit del Himalaya analizado en laboratorio, de una marca danesa. Resina de shilajit pura recolectada a mano a más de 5.000 m en Skardu, además de gominolas, gotas y cápsulas.' },
    ar: { title: 'شيلاجيت الهيمالايا الأصلي · راتنج وعلكات وقطرات وكبسولات', description: 'شيلاجيت هيمالايا نقي ومفحوص مخبرياً من علامة دنماركية. راتنج شيلاجيت يُجمع يدوياً على ارتفاع يزيد عن 5000 متر في سكردو، مع علكات وقطرات وكبسولات. متوفر في دبي والإمارات.' },
    ur: { title: 'اصلی ہمالیائی سلاجیت · ریزن، گمیز، ڈراپس اور کیپسول', description: 'اسکردو کا خالص سلاجیت، 5,000 میٹر سے زیادہ بلندی سے ہاتھ سے چنا گیا اور ہر بیچ لیب ٹیسٹڈ۔ ڈنمارک کا برانڈ: سلاجیت ریزن، گمیز، ڈراپس اور کیپسول۔' },
  },
  shop: {
    de: { title: 'Shilajit kaufen · Harz, Gummies, Tropfen & Kapseln', description: 'Laborgeprüftes Himalaya Shilajit online kaufen: reines Harz, Gummies mit Erdbeere, Tropfen mit Holunder und Kapseln. Prüfbericht für jede Charge, 60 Tage Geld-zurück-Garantie.' },
    fr: { title: 'Acheter du Shilajit · Résine, Gommes, Gouttes et Gélules', description: 'Achetez du shilajit de l’Himalaya testé en laboratoire : résine pure, gommes à la fraise, gouttes au sureau et gélules. Rapport pour chaque lot, garantie 60 jours.' },
    es: { title: 'Comprar Shilajit · Resina, Gominolas, Gotas y Cápsulas', description: 'Compra shilajit del Himalaya analizado en laboratorio: resina pura, gominolas de fresa, gotas de saúco y cápsulas. Informe de cada lote y garantía de 60 días.' },
    ar: { title: 'شراء الشيلاجيت أونلاين · راتنج وعلكات وقطرات وكبسولات', description: 'اشترِ شيلاجيت الهيمالايا المفحوص مخبرياً: راتنج نقي، علكات بالفراولة، قطرات بالبلسان وكبسولات. تقرير لكل دفعة وضمان استرداد لمدة 60 يوماً.' },
    ur: { title: 'سلاجیت خریدیں · ریزن، گمیز، ڈراپس اور کیپسول', description: 'لیب ٹیسٹڈ ہمالیائی سلاجیت آن لائن خریدیں: خالص ریزن، اسٹرابیری گمیز، ایلڈربیری ڈراپس اور کیپسول۔ ہر بیچ کی رپورٹ اور 60 دن کی منی بیک گارنٹی۔' },
  },
  'our-shilajit': {
    de: { title: 'Unser Shilajit · Echtes Himalaya Shilajit aus Skardu', description: 'Von Hand gesammelt über 5.000 m nahe dem K2, mehrfach gefiltert, bis zu 60 Tage sonnengetrocknet und Charge für Charge auf Schwermetalle und Fulvinsäure geprüft.' },
    fr: { title: 'Notre Shilajit · Authentique Shilajit de l’Himalaya de Skardu', description: 'Récolté à la main au-dessus de 5 000 m près du K2, filtré plusieurs fois, séché au soleil jusqu’à 60 jours et testé lot par lot pour les métaux lourds et l’acide fulvique.' },
    es: { title: 'Nuestro Shilajit · Shilajit Auténtico del Himalaya de Skardu', description: 'Recolectado a mano a más de 5.000 m cerca del K2, filtrado varias veces, secado al sol hasta 60 días y analizado lote a lote en metales pesados y ácido fúlvico.' },
    ar: { title: 'الشيلاجيت لدينا · شيلاجيت هيمالايا أصلي من سكردو', description: 'يُجمع يدوياً على ارتفاع يزيد عن 5000 متر قرب قمة K2، ويُصفّى عدة مرات ويُجفف بالشمس حتى 60 يوماً، ويُفحص كل دفعة للمعادن الثقيلة وحمض الفولفيك.' },
    ur: { title: 'ہمارا سلاجیت · اسکردو کا اصلی ہمالیائی سلاجیت', description: 'کے ٹو کے قریب 5,000 میٹر سے زیادہ بلندی سے ہاتھ سے چنا گیا، کئی بار صاف کیا گیا، 60 دن تک دھوپ میں سکھایا گیا اور ہر بیچ میں بھاری دھاتوں اور فلوک ایسڈ کا ٹیسٹ۔' },
  },
  'lab-results': {
    de: { title: 'Laborgeprüftes Shilajit · Schwermetalle & Fulvinsäure', description: 'Jede Charge von Himalayan Drop wird im Labor auf Schwermetalle, Mikrobiologie und Fulvinsäure geprüft. Gib deine Chargennummer ein und sieh den Bericht zu deinem Glas.' },
    fr: { title: 'Shilajit Testé en Laboratoire · Métaux Lourds et Acide Fulvique', description: 'Chaque lot Himalayan Drop est testé en laboratoire : métaux lourds, microbiologie et acide fulvique. Saisissez votre numéro de lot pour voir le rapport de votre pot.' },
    es: { title: 'Shilajit Analizado en Laboratorio · Metales Pesados y Ácido Fúlvico', description: 'Cada lote de Himalayan Drop se analiza en metales pesados, microbiología y ácido fúlvico. Introduce tu número de lote y consulta el informe de tu tarro.' },
    ar: { title: 'شيلاجيت مفحوص مخبرياً · تقارير المعادن الثقيلة وحمض الفولفيك', description: 'تُفحص كل دفعة من Himalayan Drop في المختبر للمعادن الثقيلة والميكروبات ونسبة حمض الفولفيك. أدخل رقم الدفعة لعرض تقرير عبوتك.' },
    ur: { title: 'لیب ٹیسٹڈ سلاجیت · بھاری دھاتیں اور فلوک ایسڈ رپورٹ', description: 'Himalayan Drop کا ہر بیچ بھاری دھاتوں، مائیکروبیالوجی اور فلوک ایسڈ کے لیے لیبارٹری میں ٹیسٹ ہوتا ہے۔ اپنا بیچ نمبر درج کریں اور رپورٹ دیکھیں۔' },
  },
  'how-to-use': {
    de: { title: 'Shilajit Einnahme · Harz, Gummies, Tropfen & Kapseln', description: 'So nimmst du Shilajit Harz, Gummies, Tropfen und Kapseln ein, Schritt für Schritt: wie viel, wann und wie du es aufbewahrst.' },
    fr: { title: 'Comment Prendre le Shilajit · Résine, Gommes, Gouttes, Gélules', description: 'Comment prendre la résine de shilajit, les gommes, les gouttes et les gélules, étape par étape : quelle quantité, quand et comment la conserver.' },
    es: { title: 'Cómo Tomar Shilajit · Resina, Gominolas, Gotas y Cápsulas', description: 'Cómo tomar resina de shilajit, gominolas, gotas y cápsulas paso a paso: cuánto, cuándo y cómo conservarlo.' },
    ar: { title: 'طريقة استخدام الشيلاجيت · الراتنج والعلكات والقطرات والكبسولات', description: 'كيف تستخدم راتنج الشيلاجيت والعلكات والقطرات والكبسولات خطوة بخطوة: الكمية والتوقيت وطريقة الحفظ.' },
    ur: { title: 'سلاجیت استعمال کرنے کا طریقہ · ریزن، گمیز، ڈراپس، کیپسول', description: 'سلاجیت ریزن، گمیز، ڈراپس اور کیپسول کو مرحلہ وار کیسے استعمال کریں: کتنی مقدار، کب، اور کیسے محفوظ رکھیں۔' },
  },
  faq: {
    de: { title: 'Shilajit FAQ · Häufige Fragen zu Shilajit', description: 'Was ist Shilajit, wie nimmt man es ein, woran erkennt man echtes Shilajit und ist es laborgeprüft? Antworten zu Produkten, Bestellungen und Garantie.' },
    fr: { title: 'FAQ Shilajit · Vos Questions sur le Shilajit', description: 'Qu’est-ce que le shilajit, comment le prendre, comment reconnaître un vrai shilajit, est-il testé en laboratoire ? Réponses sur nos produits, commandes et garantie.' },
    es: { title: 'Preguntas Frecuentes sobre el Shilajit', description: '¿Qué es el shilajit, cómo se toma, cómo saber si es auténtico y está analizado en laboratorio? Respuestas sobre productos, pedidos y garantía.' },
    ar: { title: 'الأسئلة الشائعة عن الشيلاجيت', description: 'ما هو الشيلاجيت، وكيف يُستخدم، وكيف تميّز الشيلاجيت الأصلي، وهل هو مفحوص مخبرياً؟ إجابات عن منتجاتنا والطلبات والضمان.' },
    ur: { title: 'سلاجیت کے بارے میں عام سوالات', description: 'سلاجیت کیا ہے، اسے کیسے استعمال کریں، اصلی سلاجیت کی پہچان کیا ہے اور کیا یہ لیب ٹیسٹڈ ہے؟ مصنوعات، آرڈر اور گارنٹی کے بارے میں جوابات۔' },
  },
  'our-story': {
    de: { title: 'Unsere Geschichte · Eine dänische Shilajit-Marke', description: 'Himalayan Drop ist eine dänische Shilajit-Marke: gewonnen über 5.000 m in Skardu, gestaltet in Dänemark, mit einem Laborbericht hinter jeder Charge.' },
    fr: { title: 'Notre Histoire · Une Marque Danoise de Shilajit', description: 'Himalayan Drop est une marque danoise de shilajit : récolté au-dessus de 5 000 m à Skardu, conçu au Danemark, avec un rapport de laboratoire pour chaque lot.' },
    es: { title: 'Nuestra Historia · Una Marca Danesa de Shilajit', description: 'Himalayan Drop es una marca danesa de shilajit: recolectado a más de 5.000 m en Skardu, diseñado en Dinamarca y con un informe de laboratorio para cada lote.' },
    ar: { title: 'قصتنا · علامة دنماركية للشيلاجيت', description: 'Himalayan Drop علامة دنماركية للشيلاجيت: يُجمع على ارتفاع يزيد عن 5000 متر في سكردو، ومصمم في الدنمارك، مع تقرير مخبري لكل دفعة.' },
    ur: { title: 'ہماری کہانی · اسکردو سے ڈنمارک تک', description: 'Himalayan Drop ڈنمارک کا سلاجیت برانڈ ہے: اسکردو میں 5,000 میٹر سے زیادہ بلندی سے حاصل کردہ، ڈنمارک میں ڈیزائن اور ہر بیچ کے ساتھ لیب رپورٹ۔' },
  },
  certificates: {
    de: { title: 'Zertifikate · GMP, ISO 22000, ISO 9001 & Schwermetallprüfung', description: 'Die Qualitätsstandards hinter Himalayan Drop Shilajit: GMP, ISO 22000 und ISO 9001, Schwermetallprüfung jeder Charge und 60 Tage Garantie.' },
    fr: { title: 'Certificats · GMP, ISO 22000, ISO 9001 et Métaux Lourds', description: 'Les normes de qualité du shilajit Himalayan Drop : GMP, ISO 22000 et ISO 9001, test des métaux lourds sur chaque lot et garantie de 60 jours.' },
    es: { title: 'Certificados · GMP, ISO 22000, ISO 9001 y Metales Pesados', description: 'Las normas de calidad del shilajit Himalayan Drop: GMP, ISO 22000 e ISO 9001, análisis de metales pesados en cada lote y garantía de 60 días.' },
    ar: { title: 'الشهادات · GMP وISO 22000 وISO 9001 وفحص المعادن الثقيلة', description: 'معايير الجودة وراء شيلاجيت Himalayan Drop: ‏GMP وISO 22000 وISO 9001، وفحص المعادن الثقيلة لكل دفعة، وضمان 60 يوماً.' },
    ur: { title: 'سرٹیفکیٹس · GMP، ISO 22000، ISO 9001 اور بھاری دھاتوں کا ٹیسٹ', description: 'Himalayan Drop سلاجیت کے معیار: GMP، ISO 22000 اور ISO 9001، ہر بیچ میں بھاری دھاتوں کا ٹیسٹ اور 60 دن کی گارنٹی۔' },
  },
  contact: {
    de: { title: 'Kontakt', description: 'Fragen zu einer Bestellung, einem Shilajit-Produkt oder einem Laborbericht? Schreib Himalayan Drop. Wir antworten auf Deutsch und Englisch.' },
    fr: { title: 'Contact', description: 'Une question sur une commande, un produit au shilajit ou un rapport de laboratoire ? Écrivez à Himalayan Drop.' },
    es: { title: 'Contacto', description: '¿Preguntas sobre un pedido, un producto de shilajit o un informe de laboratorio? Escribe a Himalayan Drop.' },
    ar: { title: 'اتصل بنا', description: 'لديك سؤال عن طلب أو منتج شيلاجيت أو تقرير مخبري؟ راسل Himalayan Drop. نرد بالعربية والإنجليزية.' },
    ur: { title: 'رابطہ کریں', description: 'آرڈر، سلاجیت کی کسی پروڈکٹ یا لیب رپورٹ کے بارے میں سوال ہے؟ Himalayan Drop کو لکھیں۔ ہم اردو اور انگریزی میں جواب دیتے ہیں۔' },
  },
  reviews: {
    de: { title: 'Kundenbewertungen', description: 'Was Kunden über Himalayan Drop Shilajit Harz, Gummies, Tropfen und Kapseln sagen.' },
    fr: { title: 'Avis Clients', description: 'Ce que nos clients disent de la résine, des gommes, des gouttes et des gélules de shilajit Himalayan Drop.' },
    es: { title: 'Opiniones de Clientes', description: 'Lo que dicen los clientes de la resina, las gominolas, las gotas y las cápsulas de shilajit Himalayan Drop.' },
    ar: { title: 'آراء العملاء', description: 'ماذا يقول العملاء عن راتنج وعلكات وقطرات وكبسولات شيلاجيت Himalayan Drop.' },
    ur: { title: 'گاہکوں کے ریویوز', description: 'Himalayan Drop سلاجیت ریزن، گمیز، ڈراپس اور کیپسول کے بارے میں گاہک کیا کہتے ہیں۔' },
  },
  blog: {
    de: { title: 'Shilajit Ratgeber & Journal', description: 'Ratgeber zu Shilajit: was es ist, wie man es einnimmt, woran man echtes Shilajit erkennt und wie man einen Laborbericht liest.' },
    fr: { title: 'Guides et Journal du Shilajit', description: 'Guides sur le shilajit : ce que c’est, comment le prendre, comment reconnaître un vrai shilajit et lire un rapport de laboratoire.' },
    es: { title: 'Guías y Journal sobre Shilajit', description: 'Guías sobre el shilajit: qué es, cómo tomarlo, cómo saber si es auténtico y cómo leer un informe de laboratorio.' },
    ar: { title: 'أدلة ومقالات عن الشيلاجيت', description: 'أدلة عن الشيلاجيت: ما هو، وكيف تستخدمه، وكيف تميّز الأصلي، وكيف تقرأ التقرير المخبري.' },
    ur: { title: 'سلاجیت گائیڈز اور بلاگ', description: 'سلاجیت کے بارے میں رہنمائی: یہ کیا ہے، کیسے استعمال کریں، اصلی سلاجیت کی پہچان اور لیب رپورٹ کیسے پڑھیں۔' },
  },
  bundles: {
    de: { title: 'Shilajit Sets · Bis zu 23 % sparen auf Harz, Gummies & Kapseln', description: 'Shilajit Sets von Himalayan Drop: Harz, Gummies, Tropfen und Kapseln günstiger als einzeln. Laborgeprüft, 60 Tage Garantie.' },
    fr: { title: 'Coffrets Shilajit · Jusqu’à 23 % d’Économie', description: 'Coffrets de shilajit Himalayan Drop : résine, gommes, gouttes et gélules moins chers qu’à l’unité. Testés en laboratoire, garantie 60 jours.' },
    es: { title: 'Packs de Shilajit · Ahorra hasta un 23 %', description: 'Packs de shilajit Himalayan Drop: resina, gominolas, gotas y cápsulas más baratos que por separado. Analizados en laboratorio, garantía de 60 días.' },
    ar: { title: 'مجموعات الشيلاجيت · وفّر حتى 23%', description: 'مجموعات شيلاجيت Himalayan Drop: راتنج وعلكات وقطرات وكبسولات بسعر أقل من شرائها منفردة. مفحوصة مخبرياً مع ضمان 60 يوماً.' },
    ur: { title: 'سلاجیت بنڈلز · 23% تک بچت', description: 'Himalayan Drop سلاجیت سیٹس: ریزن، گمیز، ڈراپس اور کیپسول الگ خریدنے سے سستے۔ لیب ٹیسٹڈ، 60 دن کی گارنٹی۔' },
  },
  distributors: {
    de: { title: 'Shilajit Händler · Hamburg, Berlin & ganz Europa', description: 'Himalayan Drop Shilajit in deiner Nähe: Partner in Hamburg, Berlin, Kopenhagen, Paris, Warschau und weiteren Städten. Oder werde selbst Händler.' },
    fr: { title: 'Distributeurs de Shilajit · Paris et toute l’Europe', description: 'Trouvez le shilajit Himalayan Drop près de chez vous : partenaires à Paris, Barcelone, Rome, Berlin, Copenhague et plus. Ou devenez distributeur.' },
    es: { title: 'Distribuidores de Shilajit · Barcelona y toda Europa', description: 'Encuentra shilajit Himalayan Drop cerca de ti: socios en Barcelona, Lisboa, París, Roma, Berlín y más ciudades. O hazte distribuidor.' },
    ar: { title: 'موزعو الشيلاجيت في الإمارات · دبي، أبوظبي، الشارقة، العين', description: 'اعثر على شيلاجيت Himalayan Drop بالقرب منك: شركاء في دبي وأبوظبي والشارقة والعين، وفي أوروبا وباكستان. أو انضم إلينا كموزّع.' },
    ur: { title: 'سلاجیت ڈسٹری بیوٹرز · اسکردو، اسلام آباد، اٹک', description: 'اپنے قریب Himalayan Drop سلاجیت تلاش کریں: اسکردو، اسلام آباد اور اٹک سٹی کے علاوہ یورپ اور امارات میں پارٹنرز۔ یا ڈسٹری بیوٹر بنیں۔' },
  },
  rewards: {
    de: { title: 'Summit Rewards', description: 'Sammle Punkte bei jeder Bestellung und steige vom Base Camp bis zum Summit auf.' },
    fr: { title: 'Summit Rewards', description: 'Gagnez des points à chaque commande et grimpez du Camp de base au Sommet.' },
    es: { title: 'Summit Rewards', description: 'Suma puntos con cada pedido y sube del Campo Base a la Cumbre.' },
    ar: { title: 'مكافآت Summit', description: 'اجمع النقاط مع كل طلب واصعد من المخيم الأساسي إلى القمة.' },
    ur: { title: 'سمٹ ریوارڈز', description: 'ہر آرڈر پر پوائنٹس جمع کریں اور بیس کیمپ سے سمٹ تک پہنچیں۔' },
  },
  login: {
    de: { title: 'Anmelden', description: 'Melde dich bei deinem Himalayan Drop Konto an.' },
    fr: { title: 'Connexion', description: 'Connectez-vous à votre compte Himalayan Drop.' },
    es: { title: 'Iniciar sesión', description: 'Inicia sesión en tu cuenta de Himalayan Drop.' },
    ar: { title: 'تسجيل الدخول', description: 'سجّل الدخول إلى حسابك في Himalayan Drop.' },
    ur: { title: 'لاگ ان', description: 'اپنے Himalayan Drop اکاؤنٹ میں لاگ ان کریں۔' },
  },
  register: {
    de: { title: 'Konto erstellen', description: 'Erstelle ein Himalayan Drop Konto.' },
    fr: { title: 'Créer un compte', description: 'Créez un compte Himalayan Drop.' },
    es: { title: 'Crear cuenta', description: 'Crea una cuenta de Himalayan Drop.' },
    ar: { title: 'إنشاء حساب', description: 'أنشئ حساباً في Himalayan Drop.' },
    ur: { title: 'اکاؤنٹ بنائیں', description: 'Himalayan Drop اکاؤنٹ بنائیں۔' },
  },
};
for (const [k, v] of Object.entries(MORE)) Object.assign(pages[k], v);

export const abs = (path) => `${SITE_URL}${path}`;

// Metadata for one page. `path` is the English path (e.g. '/shop/').
// For pages whose slug differs per language (articles), pass `paths`.
export function buildMeta({ lang, path, paths, title, description, image = DEFAULT_IMAGE, type = 'website', noindex = false }) {
  const urlFor = (l) => (paths ? paths[l] : localizeHref(path, l));
  const languages = {};
  for (const l of LOCALES) {
    const u = urlFor(l);
    if (u) languages[LANGS[l].hreflang] = u;
  }
  languages['x-default'] = urlFor('en');
  const self = urlFor(lang) || urlFor('en');
  return {
    title,
    description,
    alternates: { canonical: self, languages },
    openGraph: {
      type,
      url: self,
      siteName: BRAND,
      title: `${title} | ${BRAND}`,
      description,
      locale: OG_LOCALE[lang],
      alternateLocale: LOCALES.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
      images: [{ url: image }],
    },
    twitter: { card: 'summary_large_image', title: `${title} | ${BRAND}`, description, images: [image] },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export function pageMeta(key, lang, path, extra = {}) {
  const p = pages[key][lang] || pages[key].en;
  return buildMeta({ lang, path, title: p.title, description: p.description, ...extra });
}

// ───────── Structured data ─────────

const ORG_DESC = {
  en: 'Danish shilajit brand. Pure Himalayan shilajit, harvested above 5,000 m and lab-tested batch by batch.',
  da: 'Dansk shilajit-brand. Ren Himalaya shilajit, høstet over 5.000 m og laboratorietestet batch for batch.',
  de: 'Dänische Shilajit-Marke. Reines Himalaya-Shilajit, geerntet über 5.000 m und Charge für Charge im Labor geprüft.',
  fr: 'Marque danoise de shilajit. Shilajit pur de l’Himalaya, récolté au-dessus de 5 000 m et testé en laboratoire lot par lot.',
  es: 'Marca danesa de shilajit. Shilajit puro del Himalaya, recolectado a más de 5.000 m y analizado en laboratorio lote a lote.',
  ar: 'علامة دنماركية للشيلاجيت. شيلاجيت هيمالايا نقي، يُجمع على ارتفاع يزيد عن 5000 متر ويُفحص مخبرياً دفعة بدفعة.',
  ur: 'ڈنمارک کا سلاجیت برانڈ۔ خالص ہمالیائی سلاجیت، 5,000 میٹر سے زیادہ بلندی سے حاصل کردہ اور ہر بیچ لیبارٹری سے ٹیسٹ شدہ۔',
};

export function organizationLd(lang) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BRAND,
        url: SITE_URL,
        logo: abs('/images/logo-mark.png'),
        description: ORG_DESC[lang] || ORG_DESC.en,
        address: { '@type': 'PostalAddress', addressCountry: 'DK' },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: BRAND,
        url: SITE_URL,
        inLanguage: LOCALES.map((l) => LANGS[l].hreflang),
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  };
}

export function breadcrumbLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(path) })),
  };
}
