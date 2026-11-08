// Second round of IM8 home copy: proof strip, daily ritual, sample ambassadors,
// founder note. All seven languages. No health claims (EU rules): the text is
// about origin, testing and the daily moment only.
//
// SAMPLE = true shows a small "Sample" tag on the ambassador and founder blocks.
// Replace the people and the letter with real ones, then set SAMPLE to false.

export const SAMPLE = true;

// Photos come straight from Unsplash (free licence). Swap for your own photos
// by dropping files in /public/images/life/ and changing the paths here.
const u = (id, w = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
export const PHOTOS = {
  pour: { src: u('photo-1531969179221-3946e6b5a5e7', 900), by: 'ORIENTO' },
  cup: { src: u('photo-1759662510393-bb58988ebadb', 900), by: 'Stanislav Rozhkov' },
  peaks: { src: u('photo-1753696252612-47aae7f38341', 1600), by: 'Hasnain Ayaz' },
  valley: { src: u('photo-1753696252683-8e4d81bbc560', 1100), by: 'Hasnain Ayaz' },
};

// Sample ambassadors: invented names for layout only.
export const PEOPLE = [
  { name: 'Sofie L.', handle: '@sofie.slowmornings', city: 'Copenhagen', product: 'Gold Resin', hue: '#8a1c2e' },
  { name: 'Amir K.', handle: '@amir.daily', city: 'Aarhus', product: 'Premium Skardu', hue: '#b08a3e' },
  { name: 'Clara M.', handle: '@clara.on.the.move', city: 'Berlin', product: 'Gummies', hue: '#40010a' },
];

export const IM8H = {
  en: {
    proof: { stats: [['5,000 m', 'Harvested above, near Skardu'], ['Every batch', 'Tested by an independent lab'], ['Heavy metals', 'Lead, cadmium and mercury screened. Reports are public']], certs: 'Certified', link: 'Read a lab report' },
    ritual: { eyebrow: 'The daily ritual', title: 'Slow down the morning.', text: 'One quiet moment before the day starts. Something warm, your serving as described on the label, a minute to yourself.', steps: [['Pour something warm', 'Water or tea at a comfortable temperature, not boiling.'], ['Add your serving', 'Follow the serving size on the label of your format.'], ['Stir and take a minute', 'Stir until dissolved and enjoy it slowly.']], cta: 'Shop the Summit Set', credit: 'Photo' },
    people: { eyebrow: 'In their rituals', title: 'How it fits into their day.', sub: 'Quotes are about the routine, not about health.', quotes: ['Warm tea, a small spoon of resin, ten quiet minutes. It has become the way my mornings start.', 'The jar looks as good on the counter as it does in the bag. I like that the lab report is one click away.', 'The gummies are the easiest way to keep my routine going when I travel.'] },
    peaks: { caption: 'Gilgit-Baltistan, Pakistan' },
    founder: { eyebrow: 'A note from the founder', title: 'Why Skardu.', paras: ['We chose Skardu because the material is collected high up, above 5,000 m, by people who know the mountain. We bring it to Denmark, formulate it under GMP and ISO standards and send every batch to an independent lab.', 'We publish what the lab finds, because you should be able to check us. That is the whole idea behind Himalayan Drop.'], role: 'Founder, Himalayan Drop', cta: 'Read our story' },
  },
  da: {
    proof: { stats: [['5.000 m', 'Høstet over, nær Skardu'], ['Hver batch', 'Testet af uafhængigt laboratorium'], ['Tungmetaller', 'Bly, cadmium og kviksølv kontrolleres. Rapporterne er offentlige']], certs: 'Certificeret', link: 'Læs en laboratorierapport' },
    ritual: { eyebrow: 'Det daglige ritual', title: 'Sæt tempoet ned om morgenen.', text: 'Ét stille øjeblik før dagen begynder. Noget varmt, din portion som beskrevet på etiketten, et minut for dig selv.', steps: [['Hæld noget varmt op', 'Vand eller te i en behagelig temperatur, ikke kogende.'], ['Tilsæt din portion', 'Følg portionsstørrelsen på etiketten for din form.'], ['Rør rundt og tag et minut', 'Rør, til det er opløst, og nyd det langsomt.']], cta: 'Se The Summit Set', credit: 'Foto' },
    people: { eyebrow: 'I deres ritualer', title: 'Sådan passer det ind i deres dag.', sub: 'Citaterne handler om rutinen, ikke om helbred.', quotes: ['Varm te, en lille ske resin, ti stille minutter. Det er blevet min måde at starte morgenen på.', 'Krukken ser lige så godt ud på køkkenbordet som i posen. Jeg kan lide, at laboratorierapporten er et klik væk.', 'Vingummierne er den nemmeste måde at holde min rutine, når jeg rejser.'] },
    peaks: { caption: 'Gilgit-Baltistan, Pakistan' },
    founder: { eyebrow: 'Et ord fra grundlæggeren', title: 'Hvorfor Skardu.', paras: ['Vi valgte Skardu, fordi materialet indsamles højt oppe, over 5.000 m, af mennesker, der kender bjerget. Vi tager det med til Danmark, formulerer det efter GMP- og ISO-standarder og sender hver batch til et uafhængigt laboratorium.', 'Vi offentliggør, hvad laboratoriet finder, fordi du skal kunne tjekke os. Det er hele idéen bag Himalayan Drop.'], role: 'Grundlægger, Himalayan Drop', cta: 'Læs vores historie' },
  },
  de: {
    proof: { stats: [['5.000 m', 'Geerntet oberhalb, bei Skardu'], ['Jede Charge', 'Von unabhängigem Labor geprüft'], ['Schwermetalle', 'Blei, Cadmium und Quecksilber werden geprüft. Berichte sind öffentlich']], certs: 'Zertifiziert', link: 'Laborbericht lesen' },
    ritual: { eyebrow: 'Das tägliche Ritual', title: 'Den Morgen entschleunigen.', text: 'Ein ruhiger Moment, bevor der Tag beginnt. Etwas Warmes, deine Portion wie auf dem Etikett beschrieben, eine Minute für dich.', steps: [['Etwas Warmes eingießen', 'Wasser oder Tee in angenehmer Temperatur, nicht kochend.'], ['Portion hinzufügen', 'Halte dich an die Portionsgröße auf dem Etikett deiner Form.'], ['Umrühren und kurz innehalten', 'Rühre, bis es gelöst ist, und genieße es langsam.']], cta: 'The Summit Set entdecken', credit: 'Foto' },
    people: { eyebrow: 'In ihren Ritualen', title: 'So passt es in ihren Tag.', sub: 'Die Zitate handeln von der Routine, nicht von Gesundheit.', quotes: ['Warmer Tee, ein kleiner Löffel Harz, zehn ruhige Minuten. So beginnen meine Morgen inzwischen.', 'Das Glas sieht auf der Küchenzeile so gut aus wie in der Tüte. Ich mag, dass der Laborbericht nur einen Klick entfernt ist.', 'Die Gummies sind die einfachste Art, meine Routine auf Reisen beizubehalten.'] },
    peaks: { caption: 'Gilgit-Baltistan, Pakistan' },
    founder: { eyebrow: 'Ein Wort der Gründer', title: 'Warum Skardu.', paras: ['Wir haben Skardu gewählt, weil das Material hoch oben, über 5.000 m, von Menschen gesammelt wird, die den Berg kennen. Wir bringen es nach Dänemark, formulieren es nach GMP- und ISO-Standards und schicken jede Charge an ein unabhängiges Labor.', 'Wir veröffentlichen, was das Labor findet, denn du sollst uns prüfen können. Das ist die ganze Idee hinter Himalayan Drop.'], role: 'Gründer, Himalayan Drop', cta: 'Unsere Geschichte lesen' },
  },
  fr: {
    proof: { stats: [['5 000 m', 'Récolté au-dessus, près de Skardu'], ['Chaque lot', 'Testé par un laboratoire indépendant'], ['Métaux lourds', 'Plomb, cadmium et mercure contrôlés. Rapports publics']], certs: 'Certifié', link: 'Lire un rapport de laboratoire' },
    ritual: { eyebrow: 'Le rituel quotidien', title: 'Ralentir le matin.', text: 'Un moment calme avant que la journée commence. Quelque chose de chaud, votre portion comme indiqué sur l’étiquette, une minute pour vous.', steps: [['Versez quelque chose de chaud', 'Eau ou thé à une température agréable, pas bouillant.'], ['Ajoutez votre portion', 'Suivez la portion indiquée sur l’étiquette de votre format.'], ['Mélangez et prenez une minute', 'Remuez jusqu’à dissolution et savourez lentement.']], cta: 'Découvrir The Summit Set', credit: 'Photo' },
    people: { eyebrow: 'Dans leurs rituels', title: 'Comment il s’intègre à leur journée.', sub: 'Les citations parlent de la routine, pas de santé.', quotes: ['Du thé chaud, une petite cuillère de résine, dix minutes de calme. C’est devenu ma façon de commencer la matinée.', 'Le pot est aussi beau sur le plan de travail que dans le sac. J’aime que le rapport de laboratoire soit à un clic.', 'Les gommes sont le moyen le plus simple de garder ma routine en voyage.'] },
    peaks: { caption: 'Gilgit-Baltistan, Pakistan' },
    founder: { eyebrow: 'Un mot du fondateur', title: 'Pourquoi Skardu.', paras: ['Nous avons choisi Skardu car la matière est collectée en altitude, au-dessus de 5 000 m, par des gens qui connaissent la montagne. Nous la ramenons au Danemark, la formulons selon les normes GMP et ISO et envoyons chaque lot à un laboratoire indépendant.', 'Nous publions ce que trouve le laboratoire, car vous devez pouvoir nous vérifier. C’est toute l’idée de Himalayan Drop.'], role: 'Fondateur, Himalayan Drop', cta: 'Lire notre histoire' },
  },
  es: {
    proof: { stats: [['5.000 m', 'Recolectado por encima, cerca de Skardu'], ['Cada lote', 'Analizado por un laboratorio independiente'], ['Metales pesados', 'Se controlan plomo, cadmio y mercurio. Informes públicos']], certs: 'Certificado', link: 'Leer un informe de laboratorio' },
    ritual: { eyebrow: 'El ritual diario', title: 'Baja el ritmo de la mañana.', text: 'Un momento tranquilo antes de que empiece el día. Algo caliente, tu porción como indica la etiqueta, un minuto para ti.', steps: [['Sirve algo caliente', 'Agua o té a una temperatura agradable, sin hervir.'], ['Añade tu porción', 'Sigue la porción indicada en la etiqueta de tu formato.'], ['Remueve y tómate un minuto', 'Remueve hasta que se disuelva y disfrútalo despacio.']], cta: 'Descubrir The Summit Set', credit: 'Foto' },
    people: { eyebrow: 'En sus rituales', title: 'Cómo encaja en su día.', sub: 'Las citas hablan de la rutina, no de salud.', quotes: ['Té caliente, una cucharita de resina, diez minutos tranquilos. Así empiezan ahora mis mañanas.', 'El frasco queda tan bien en la encimera como en la bolsa. Me gusta que el informe de laboratorio esté a un clic.', 'Las gominolas son la forma más fácil de mantener mi rutina cuando viajo.'] },
    peaks: { caption: 'Gilgit-Baltistán, Pakistán' },
    founder: { eyebrow: 'Unas palabras del fundador', title: 'Por qué Skardu.', paras: ['Elegimos Skardu porque el material se recoge en lo alto, por encima de los 5.000 m, por gente que conoce la montaña. Lo traemos a Dinamarca, lo formulamos según normas GMP e ISO y enviamos cada lote a un laboratorio independiente.', 'Publicamos lo que encuentra el laboratorio, porque debes poder comprobarnos. Esa es toda la idea de Himalayan Drop.'], role: 'Fundador, Himalayan Drop', cta: 'Leer nuestra historia' },
  },
  ar: {
    proof: { stats: [['5,000 م', 'يُحصد فوق هذا الارتفاع قرب سكردو'], ['كل دفعة', 'مفحوصة في مختبر مستقل'], ['المعادن الثقيلة', 'يُفحص الرصاص والكادميوم والزئبق. التقارير متاحة للجميع']], certs: 'معتمد', link: 'اقرأ تقريراً مخبرياً' },
    ritual: { eyebrow: 'الطقس اليومي', title: 'أبطئ إيقاع الصباح.', text: 'لحظة هادئة قبل أن يبدأ اليوم. شيء دافئ، وحصتك كما هي موضحة على الملصق، ودقيقة لنفسك.', steps: [['اسكب شيئاً دافئاً', 'ماء أو شاي بدرجة حرارة مريحة، دون غليان.'], ['أضف حصتك', 'اتبع حجم الحصة المكتوب على ملصق المنتج.'], ['حرّك وخذ دقيقة', 'حرّك حتى يذوب واستمتع به ببطء.']], cta: 'تسوّق The Summit Set', credit: 'صورة' },
    people: { eyebrow: 'في طقوسهم', title: 'كيف يندمج في يومهم.', sub: 'الاقتباسات عن الروتين، لا عن الصحة.', quotes: ['شاي دافئ، ملعقة صغيرة من الراتنج، وعشر دقائق هادئة. صار هذا بداية صباحاتي.', 'تبدو الجرّة جميلة على الطاولة كما هي في الكيس. يعجبني أن التقرير المخبري على بُعد نقرة.', 'العلكات أسهل طريقة للحفاظ على روتيني أثناء السفر.'] },
    peaks: { caption: 'جلجت بلتستان، باكستان' },
    founder: { eyebrow: 'كلمة من المؤسس', title: 'لماذا سكردو.', paras: ['اخترنا سكردو لأن المادة تُجمع في الأعالي، فوق 5,000 متر، على يد أناس يعرفون الجبل. نحملها إلى الدنمارك ونصيغها وفق معايير GMP وISO ونرسل كل دفعة إلى مختبر مستقل.', 'ننشر ما يجده المختبر لأن من حقك أن تتحقق منا. هذه هي فكرة Himalayan Drop كلها.'], role: 'المؤسس، Himalayan Drop', cta: 'اقرأ قصتنا' },
  },
  ur: {
    proof: { stats: [['5,000 م', 'اسکردو کے قریب اس بلندی سے اوپر سے حاصل'], ['ہر بیچ', 'آزاد لیب سے ٹیسٹ شدہ'], ['بھاری دھاتیں', 'سیسہ، کیڈمیم اور پارہ جانچے جاتے ہیں۔ رپورٹس عام ہیں']], certs: 'سند یافتہ', link: 'لیب رپورٹ پڑھیں' },
    ritual: { eyebrow: 'روزانہ کی رسم', title: 'صبح کی رفتار آہستہ کریں۔', text: 'دن شروع ہونے سے پہلے ایک پرسکون لمحہ۔ کچھ گرم، لیبل کے مطابق آپ کی خوراک، اور اپنے لیے ایک منٹ۔', steps: [['کچھ گرم ڈالیں', 'آرام دہ درجہ حرارت کا پانی یا چائے، اُبلتی ہوئی نہیں۔'], ['اپنی خوراک شامل کریں', 'اپنی قسم کے لیبل پر درج مقدار کی پیروی کریں۔'], ['ہلائیں اور ایک منٹ لیں', 'گھلنے تک ہلائیں اور آہستہ آہستہ لطف اٹھائیں۔']], cta: 'The Summit Set دیکھیں', credit: 'تصویر' },
    people: { eyebrow: 'ان کی رسموں میں', title: 'یہ ان کے دن میں کیسے سماتا ہے۔', sub: 'اقتباسات معمول کے بارے میں ہیں، صحت کے بارے میں نہیں۔', quotes: ['گرم چائے، ریزن کا ایک چھوٹا چمچ، دس پرسکون منٹ۔ یہی اب میری صبح کا آغاز ہے۔', 'جار کاؤنٹر پر اتنا ہی اچھا لگتا ہے جتنا بیگ میں۔ مجھے پسند ہے کہ لیب رپورٹ ایک کلک پر ہے۔', 'سفر میں اپنا معمول برقرار رکھنے کا گمیز سب سے آسان طریقہ ہیں۔'] },
    peaks: { caption: 'گلگت بلتستان، پاکستان' },
    founder: { eyebrow: 'بانی کی طرف سے', title: 'اسکردو ہی کیوں۔', paras: ['ہم نے اسکردو کو اس لیے چنا کہ یہ مادہ بلندی پر، 5,000 میٹر سے اوپر، پہاڑ کو جاننے والے لوگ جمع کرتے ہیں۔ ہم اسے ڈنمارک لاتے ہیں، GMP اور ISO معیارات کے تحت تیار کرتے ہیں اور ہر بیچ آزاد لیب کو بھیجتے ہیں۔', 'لیب جو پاتی ہے ہم شائع کرتے ہیں، کیونکہ آپ ہمیں جانچ سکیں۔ Himalayan Drop کا پورا خیال یہی ہے۔'], role: 'بانی، Himalayan Drop', cta: 'ہماری کہانی پڑھیں' },
  },
};
