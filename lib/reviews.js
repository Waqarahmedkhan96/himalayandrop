// SAMPLE REVIEWS — layout placeholders only.
// Replace these with real customer reviews before launch (for example from
// Judge.me, which works with headless Shopify). Never publish invented reviews
// as genuine: it misleads customers and is illegal under EU consumer law.
// While `sample` is true, every card shows a "Sample" label.

export const reviews = [
  { name: 'Customer name', place: 'Copenhagen', product: 'Himalayan Gold', rating: 5, text: 'Sample review. The gift box is beautiful and the jar feels genuinely premium.', sample: true },
  { name: 'Customer name', place: 'Aarhus', product: 'Gummies', rating: 5, text: 'Sample review. The strawberry flavour is pleasant and two gummies fit easily into my morning.', sample: true },
  { name: 'Customer name', place: 'Odense', product: 'Premium Skardu', rating: 5, text: 'Sample review. Dissolves well in warm tea. The dosing guide was clear.', sample: true },
  { name: 'Customer name', place: 'Vejle', product: 'Drops', rating: 4, text: 'Sample review. The dropper makes it easy to measure. Arrived quickly and well packed.', sample: true },
  { name: 'Customer name', place: 'Aalborg', product: 'Himalayan Gold', rating: 5, text: 'Sample review. I liked being able to read the lab report for my batch.', sample: true },
  { name: 'Customer name', place: 'Esbjerg', product: 'Gummies', rating: 5, text: 'Sample review. Bought it as a gift and the packaging made a real impression.', sample: true },
];

export const reviewsDa = [
  { name: 'Kundens navn', place: 'København', product: 'Himalayan Gold', rating: 5, text: 'Eksempel på anmeldelse. Gaveæsken er smuk, og krukken føles virkelig eksklusiv.', sample: true },
  { name: 'Kundens navn', place: 'Aarhus', product: 'Vingummi', rating: 5, text: 'Eksempel på anmeldelse. Jordbærsmagen er behagelig, og to vingummi passer nemt ind i min morgen.', sample: true },
  { name: 'Kundens navn', place: 'Odense', product: 'Premium Skardu', rating: 5, text: 'Eksempel på anmeldelse. Opløses fint i varm te. Doseringsguiden var tydelig.', sample: true },
  { name: 'Kundens navn', place: 'Vejle', product: 'Dråber', rating: 4, text: 'Eksempel på anmeldelse. Pipetten gør det nemt at afmåle. Kom hurtigt og godt pakket.', sample: true },
  { name: 'Kundens navn', place: 'Aalborg', product: 'Himalayan Gold', rating: 5, text: 'Eksempel på anmeldelse. Jeg kunne godt lide at kunne læse laboratorierapporten for min batch.', sample: true },
  { name: 'Kundens navn', place: 'Esbjerg', product: 'Vingummi', rating: 5, text: 'Eksempel på anmeldelse. Købt som gave, og emballagen gjorde virkelig indtryk.', sample: true },
];

// Other languages: same sample cards, with local cities and the word
// "Sample" in the text. Replace with real reviews before launch.
const local = (name, places, products, texts) => reviews.map((r, i) => ({ ...r, name, place: places[i], product: products[i], text: texts[i] }));
const byLang = {
  da: reviewsDa,
  de: local('Name des Kunden', ['Hamburg', 'Berlin', 'München', 'Köln', 'Frankfurt', 'Stuttgart'], ['Himalayan Gold', 'Gummies', 'Premium Skardu', 'Tropfen', 'Himalayan Gold', 'Gummies'], [
    'Beispielbewertung. Die Geschenkbox ist wunderschön und das Glas fühlt sich wirklich hochwertig an.',
    'Beispielbewertung. Der Erdbeergeschmack ist angenehm und zwei Gummies passen leicht in meinen Morgen.',
    'Beispielbewertung. Löst sich gut in warmem Tee. Die Dosierhilfe war klar.',
    'Beispielbewertung. Mit der Pipette lässt es sich leicht abmessen. Schnell und gut verpackt angekommen.',
    'Beispielbewertung. Mir gefiel, dass ich den Laborbericht meiner Charge lesen konnte.',
    'Beispielbewertung. Als Geschenk gekauft, und die Verpackung hat Eindruck gemacht.',
  ]),
  fr: local('Nom du client', ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Bordeaux', 'Nice'], ['Himalayan Gold', 'Gommes', 'Premium Skardu', 'Gouttes', 'Himalayan Gold', 'Gommes'], [
    'Exemple d’avis. Le coffret est magnifique et le pot fait vraiment haut de gamme.',
    'Exemple d’avis. Le goût fraise est agréable et deux gommes s’intègrent facilement à ma matinée.',
    'Exemple d’avis. Se dissout bien dans un thé chaud. Le guide de dosage est clair.',
    'Exemple d’avis. Le compte-gouttes facilite le dosage. Arrivé vite et bien emballé.',
    'Exemple d’avis. J’ai apprécié de pouvoir lire le rapport de laboratoire de mon lot.',
    'Exemple d’avis. Acheté en cadeau, l’emballage a fait forte impression.',
  ]),
  es: local('Nombre del cliente', ['Barcelona', 'Madrid', 'Valencia', 'Sevilla', 'Bilbao', 'Málaga'], ['Himalayan Gold', 'Gominolas', 'Premium Skardu', 'Gotas', 'Himalayan Gold', 'Gominolas'], [
    'Opinión de ejemplo. La caja regalo es preciosa y el tarro se siente realmente premium.',
    'Opinión de ejemplo. El sabor a fresa es agradable y dos gominolas encajan fácilmente en mi mañana.',
    'Opinión de ejemplo. Se disuelve bien en té caliente. La guía de dosis era clara.',
    'Opinión de ejemplo. El cuentagotas facilita medir. Llegó rápido y bien embalado.',
    'Opinión de ejemplo. Me gustó poder leer el informe de laboratorio de mi lote.',
    'Opinión de ejemplo. Lo compré como regalo y el envase causó muy buena impresión.',
  ]),
  ar: local('اسم العميل', ['دبي', 'أبوظبي', 'الشارقة', 'العين', 'عجمان', 'رأس الخيمة'], ['راتنج ذهبي', 'علكات', 'راتنج فضي', 'قطرات', 'راتنج ذهبي', 'علكات'], [
    'مثال على مراجعة. علبة الهدايا جميلة والبرطمان يبدو فاخراً حقاً.',
    'مثال على مراجعة. نكهة الفراولة لطيفة، وعلكتان تناسبان صباحي بسهولة.',
    'مثال على مراجعة. يذوب جيداً في الشاي الدافئ. دليل الجرعات كان واضحاً.',
    'مثال على مراجعة. القطّارة تسهّل القياس. وصل سريعاً ومغلفاً جيداً.',
    'مثال على مراجعة. أعجبني أنني استطعت قراءة التقرير المخبري لدفعتي.',
    'مثال على مراجعة. اشتريته هدية، والتغليف ترك انطباعاً رائعاً.',
  ]),
};

export const getReviews = (lang) => byLang[lang] || reviews;
