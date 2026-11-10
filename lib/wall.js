// Sample copy for the Wall of Wellness reviews page. Everything here is SAMPLE
// content for layout: invented names, no health claims. Replace with real,
// consented posts and verified reviews before launch, then set SAMPLE to false.

export const SAMPLE = true;

export const PEOPLE = [
  {
    "name": "Sofie L.",
    "handle": "@sofie.slowmornings",
    "city": "Copenhagen",
    "product": "Gold Resin",
    "hue": "#8a1c2e"
  },
  {
    "name": "Amir K.",
    "handle": "@amir.daily",
    "city": "Aarhus",
    "product": "Premium Skardu",
    "hue": "#b08a3e"
  },
  {
    "name": "Clara M.",
    "handle": "@clara.on.the.move",
    "city": "Berlin",
    "product": "Gummies",
    "hue": "#40010a"
  },
  {
    "name": "Jonas H.",
    "handle": "@jonas.at.home",
    "city": "Odense",
    "product": "Valhalla Gift Box",
    "hue": "#6a1422"
  },
  {
    "name": "Freja N.",
    "handle": "@freja.north",
    "city": "Oslo",
    "product": "Capsules",
    "hue": "#8a6a2a"
  },
  {
    "name": "Mikkel T.",
    "handle": "@mikkel.mornings",
    "city": "Aalborg",
    "product": "Drops",
    "hue": "#2f4a3a"
  }
];

export const PEOPLE_QUOTES = {
  "en": [
    "Warm tea, a small spoon of resin, ten quiet minutes. It has become the way my mornings start.",
    "The jar looks as good on the counter as it does in the bag. I like that the lab report is one click away.",
    "The gummies are the easiest way to keep my routine going when I travel."
  ],
  "da": [
    "Varm te, en lille ske resin, ti stille minutter. Det er blevet min måde at starte morgenen på.",
    "Krukken ser lige så godt ud på køkkenbordet som i posen. Jeg kan lide, at laboratorierapporten er et klik væk.",
    "Vingummierne er den nemmeste måde at holde min rutine, når jeg rejser."
  ],
  "de": [
    "Warmer Tee, ein kleiner Löffel Harz, zehn ruhige Minuten. So beginnen meine Morgen inzwischen.",
    "Das Glas sieht auf der Küchenzeile so gut aus wie in der Tüte. Ich mag, dass der Laborbericht nur einen Klick entfernt ist.",
    "Die Gummies sind die einfachste Art, meine Routine auf Reisen beizubehalten."
  ],
  "fr": [
    "Du thé chaud, une petite cuillère de résine, dix minutes de calme. C’est devenu ma façon de commencer la matinée.",
    "Le pot est aussi beau sur le plan de travail que dans le sac. J’aime que le rapport de laboratoire soit à un clic.",
    "Les gommes sont le moyen le plus simple de garder ma routine en voyage."
  ],
  "es": [
    "Té caliente, una cucharita de resina, diez minutos tranquilos. Así empiezan ahora mis mañanas.",
    "El frasco queda tan bien en la encimera como en la bolsa. Me gusta que el informe de laboratorio esté a un clic.",
    "Las gominolas son la forma más fácil de mantener mi rutina cuando viajo."
  ],
  "ar": [
    "شاي دافئ، ملعقة صغيرة من الراتنج، وعشر دقائق هادئة. صار هذا بداية صباحاتي.",
    "تبدو الجرّة جميلة على الطاولة كما هي في الكيس. يعجبني أن التقرير المخبري على بُعد نقرة.",
    "العلكات أسهل طريقة للحفاظ على روتيني أثناء السفر."
  ],
};

// Page copy, all seven languages.

export const WALL = {
  en: { eyebrow: 'Reviews', title: 'Wall of Wellness', sub: 'Daily moments from our community, in their own words.', sample: 'Sample content shown for layout. Real, verified reviews and creator posts appear here after launch.', based: (n) => `Based on ${n} reviews`, join: 'Join the community', joinSub: 'Stories and launch news from Himalayan Drop.', quotes: ['The box felt considered, down to the tissue paper. It made a lovely gift.', 'I like seeing the batch number and being able to open the lab report.', 'A small ritual I look forward to: kettle on, jar open, five quiet minutes.'] },
  da: { eyebrow: 'Anmeldelser', title: 'Wall of Wellness', sub: 'Daglige øjeblikke fra vores fællesskab, med deres egne ord.', sample: 'Eksempelindhold vist til layout. Rigtige, verificerede anmeldelser og opslag vises her efter lanceringen.', based: (n) => `Baseret på ${n} anmeldelser`, join: 'Bliv en del af fællesskabet', joinSub: 'Historier og nyheder fra Himalayan Drop.', quotes: ['Æsken føltes gennemtænkt, helt ned til silkepapiret. Det blev en dejlig gave.', 'Jeg kan lide at se batchnummeret og kunne åbne laboratorierapporten.', 'Et lille ritual, jeg glæder mig til: kedlen på, krukken åben, fem rolige minutter.'] },
  de: { eyebrow: 'Bewertungen', title: 'Wall of Wellness', sub: 'Tägliche Momente aus unserer Community, in ihren eigenen Worten.', sample: 'Beispielinhalte zur Darstellung. Echte, verifizierte Bewertungen und Creator-Beiträge erscheinen hier nach dem Start.', based: (n) => `Basierend auf ${n} Bewertungen`, join: 'Der Community beitreten', joinSub: 'Geschichten und Neuigkeiten von Himalayan Drop.', quotes: ['Die Box wirkte durchdacht, bis zum Seidenpapier. Ein schönes Geschenk.', 'Ich mag es, die Chargennummer zu sehen und den Laborbericht öffnen zu können.', 'Ein kleines Ritual, auf das ich mich freue: Wasserkocher an, Glas auf, fünf ruhige Minuten.'] },
  fr: { eyebrow: 'Avis', title: 'Wall of Wellness', sub: 'Des moments du quotidien de notre communauté, avec leurs propres mots.', sample: 'Contenu d’exemple pour la mise en page. Les vrais avis vérifiés et publications de créateurs apparaîtront ici après le lancement.', based: (n) => `Basé sur ${n} avis`, join: 'Rejoindre la communauté', joinSub: 'Histoires et actualités de Himalayan Drop.', quotes: ['Le coffret était soigné jusque dans le papier de soie. Un très beau cadeau.', 'J’aime voir le numéro de lot et pouvoir ouvrir le rapport de laboratoire.', 'Un petit rituel que j’attends : bouilloire en route, pot ouvert, cinq minutes de calme.'] },
  es: { eyebrow: 'Opiniones', title: 'Wall of Wellness', sub: 'Momentos diarios de nuestra comunidad, con sus propias palabras.', sample: 'Contenido de ejemplo para el diseño. Las opiniones verificadas y publicaciones reales aparecerán aquí tras el lanzamiento.', based: (n) => `Basado en ${n} opiniones`, join: 'Únete a la comunidad', joinSub: 'Historias y novedades de Himalayan Drop.', quotes: ['La caja se sentía cuidada, hasta el papel de seda. Un regalo precioso.', 'Me gusta ver el número de lote y poder abrir el informe de laboratorio.', 'Un pequeño ritual que espero: hervidor en marcha, frasco abierto, cinco minutos tranquilos.'] },
  ar: { eyebrow: 'آراء العملاء', title: 'Wall of Wellness', sub: 'لحظات يومية من مجتمعنا، بكلماتهم الخاصة.', sample: 'محتوى تجريبي لعرض التصميم. ستظهر هنا بعد الإطلاق آراء حقيقية موثقة ومنشورات حقيقية.', based: (n) => `بناءً على ${n} تقييم`, join: 'انضم إلى المجتمع', joinSub: 'قصص وأخبار من Himalayan Drop.', quotes: ['بدت العلبة مدروسة حتى ورق التغليف. كانت هدية جميلة.', 'يعجبني أن أرى رقم الدفعة وأفتح التقرير المخبري.', 'طقس صغير أتطلع إليه: الغلاية تعمل، الجرّة مفتوحة، وخمس دقائق هادئة.'] },
};
