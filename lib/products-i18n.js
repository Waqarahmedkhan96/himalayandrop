// Product text in German, French, Spanish and Arabic.
// Same fields as the Danish overrides in products.js: they replace the
// English text on /de/, /fr/, /es/ and /ar/ pages. Amounts stay the
// same as on the label; only the words change.

const ROWS = (n, amounts) => n.map((name, i) => [name, amounts[i]]);
const GUMMY_AMT = ['500 mg', '50 mg', '20 mg', '1 mg', '5 µg', '20 mg', '10 mg'];
const DROP_AMT = ['20 mg', '5 mg', '2 mg', '0.5 mg', '5 µg', '2 mg', '2 mg'];
const CAPS_AMT = ['500 mg', '250 mg', '100 mg', '5 mg', '55 µg', '100 mg', '100 mg'];

// w: the words for one language. Ingredient order: shilajit, L-citrulline,
// ginseng, zinc, selenium, sea moss, black seed (gummies order).
function build(w) {
  const ing = w.ing;
  const gummyRows = ROWS([ing.shilajit, ing.citrulline, ing.ginseng, ing.zinc, ing.selenium, ing.seaMoss, ing.blackSeed], GUMMY_AMT);
  const order2 = [ing.shilajit, ing.citrulline, ing.ginseng, ing.zinc, ing.selenium, ing.blackSeed, ing.seaMoss];
  const resin = { directions: w.resinDirections, storage: w.storageCool, caution: w.resinCaution };
  return {
    'shilajit-gold-resin': {
      subtitle: w.gold.subtitle,
      description: w.gold.description,
      imageAlt: w.gold.imageAlt,
      badges: [['mountain', w.skardu], ['jar', w.pureResin], ['shield', w.labTested]],
      options: w.boxes,
      facts: [['85+', w.minerals], [w.pct('83.1'), w.fulvic], ['30 g', w.netWeight]],
      formula: { title: w.ingredients, serving: w.single, rows: [[ing.resin, w.pct('100')]], note: w.note },
      ...resin,
      gallery: w.gold.gallery,
    },
    'shilajit-silver-resin': {
      subtitle: w.silver.subtitle,
      description: w.silver.description,
      imageAlt: w.silver.imageAlt,
      badges: [['mountain', w.himalayan], ['jar', w.pureResin], ['sun', w.amberGlass]],
      options: w.jars,
      facts: [['85+', w.minerals], [w.pct('83.1'), w.fulvic], ['30 g', w.netWeight]],
      formula: { title: w.ingredients, serving: w.single, rows: [[ing.resin, w.pct('100')]], note: w.note },
      ...resin,
    },
    'shilajit-gummies': {
      subtitle: w.gummies.subtitle,
      description: w.gummies.description,
      imageAlt: w.gummies.imageAlt,
      badges: [['berry', w.strawberry], ['leaf', w.actives], ['box', w.gummies.count]],
      options: w.tins,
      facts: [['85+', w.minerals], [w.pct('83.1'), w.fulvic], ['30', w.servings]],
      formula: { title: w.activeIngredients, serving: w.gummies.serving, rows: gummyRows, note: w.note },
      directions: w.gummies.directions,
      storage: w.gummies.storage,
      caution: w.cautionStd,
      gallery: w.gummies.gallery,
    },
    'shilajit-drops': {
      subtitle: w.drops.subtitle,
      description: w.drops.description,
      imageAlt: w.drops.imageAlt,
      badges: [['drop', w.elderberry], ['leaf', w.actives], ['sun', w.amberGlass]],
      options: w.bottles,
      facts: [['85+', w.minerals], [w.pct('83.1'), w.fulvic], ['30 ml', w.netVolume]],
      formula: { title: w.activeIngredients, serving: w.drops.serving, rows: ROWS(order2, DROP_AMT.map(w.num)), note: w.note },
      directions: w.drops.directions,
      storage: w.drops.storage,
      caution: w.cautionStd,
      gallery: w.drops.gallery,
    },
    'shilajit-capsules': {
      subtitle: w.capsules.subtitle,
      description: w.capsules.description,
      imageAlt: w.capsules.imageAlt,
      badges: [['jar', w.capsules.count], ['leaf', w.actives], ['clock', w.capsules.twice]],
      options: w.bottles,
      facts: [['85+', w.minerals], [w.pct('83.1'), w.fulvic], ['60', w.capsulesWord]],
      formula: { title: w.supplementFacts, serving: w.capsules.serving, rows: ROWS(order2, CAPS_AMT), note: w.note },
      directions: w.capsules.directions,
      storage: w.storageCool,
      caution: w.capsules.caution,
      gallery: w.capsules.gallery,
    },
  };
}

const comma = (n) => n.replace('.', ',');

const de = build({
  pct: (n) => `${comma(n)} %`, num: comma,
  ing: { resin: 'Shilajit-Harz', shilajit: 'Shilajit', citrulline: 'L-Citrullin', ginseng: 'Panax-Ginseng-Extrakt', zinc: 'Zink', selenium: 'Selen', seaMoss: 'Seemoos', blackSeed: 'Schwarzkümmel' },
  skardu: 'Skardu', pureResin: 'Reines Harz', labTested: 'Laborgeprüft', himalayan: 'Himalaya', amberGlass: 'Braunglas',
  strawberry: 'Erdbeere', elderberry: 'Holunder', actives: '6 Wirkstoffe',
  minerals: 'Mineralien*', fulvic: 'Fulvinsäure*', netWeight: 'Nettogewicht', netVolume: 'Inhalt', servings: 'Portionen', capsulesWord: 'Kapseln',
  ingredients: 'Zutaten', single: 'Eine einzige Zutat', activeIngredients: 'Wirkstoffe', supplementFacts: 'Nährwertangaben',
  boxes: ['1 Box', '2 Boxen', '3 Boxen'], jars: ['1 Glas', '2 Gläser', '3 Gläser'], tins: ['1 Dose', '2 Dosen', '3 Dosen'], bottles: ['1 Flasche', '2 Flaschen', '3 Flaschen'],
  note: 'Mineralien und Fulvinsäure beziehen sich auf den Rohstoff Shilajit und werden im Bericht jeder Charge bestätigt.',
  resinDirections: 'Eine erbsengroße Menge in einem Glas warmem (nicht kochendem) Wasser oder Tee auflösen. Die auf dem Etikett angegebene Tagesportion beachten.',
  storageCool: 'Kühl und trocken lagern, vor direktem Sonnenlicht geschützt. Gut verschlossen halten.',
  resinCaution: 'Für Erwachsene. Nicht für Kinder, Schwangere oder Stillende. Bei Einnahme von Medikamenten oder bei Erkrankungen bitte ärztlichen Rat einholen.',
  cautionStd: 'Nicht für Kinder oder Schwangere. Bei Erkrankungen oder Einnahme von Medikamenten ärztlichen Rat einholen. Die empfohlene Tagesdosis nicht überschreiten.',
  gold: {
    subtitle: 'Himalayan Gold Edition · 30 g · Skardu',
    description: 'Reines Shilajit Harz aus den Höhen von Skardu in Pakistan, geerntet über 5.000 Metern. Eine Zutat, ein Ursprung, abgefüllt in lichtschützendem Glas. Eine kleine Menge in warmem Wasser oder Tee auflösen.',
    imageAlt: 'Himalayan Drop Shilajit Resin Himalayan Gold Edition Box',
    gallery: ['Himalayan Gold Edition Glas in einer bordeauxroten Steinnische', 'Himalayan Gold Edition Box: A ritual, refined', 'Himalayan Gold Edition Glas mit einer goldenen Schale Harz und einem Glas Wasser', 'Himalayan Gold Edition Glas auf einem Berggestein bei Sonnenaufgang'],
  },
  silver: { subtitle: 'Premium Skardu · 30 g', description: 'Shilajit Harz aus The Skardu Collection, geerntet über 5.000 Metern in Skardu, Pakistan. Eine Zutat, abgefüllt in lichtschützendem Glas. Eine kleine Menge in warmem Wasser oder Tee auflösen.', imageAlt: 'Shilajit Resin Premium Skardu Glas und Box', gallery: ['Premium Skardu Box: The Skardu Collection, geerntet über 5.000 m', 'Seite der Premium Skardu Box: 83,1 % Fulvinsäure, 85+ Mineralien', 'Premium Skardu Glas auf Berggestein neben rohem Shilajit'] },
  gummies: {
    subtitle: 'Gold Edition · Erdbeere · 60 Gummies', count: '60 Gummies', serving: 'Pro 2 Gummies',
    description: 'Shilajit Gummies mit Erdbeergeschmack, Gold Edition, mit L-Citrullin, Panax Ginseng, Zink, Selen, Seemoos und Schwarzkümmel. Zwei Gummies pro Portion, 30 Portionen in einer Metalldose.',
    imageAlt: 'Himalayan Drop Shilajit Gummies Gold Edition Dose, Erdbeere',
    directions: 'Erwachsene: täglich 2 Gummies kauen.',
    storage: 'Trocken bei bis zu 25 °C und vor Sonnenlicht geschützt lagern. Die Dose gut verschlossen halten.',
    gallery: ['Shilajit Gummies Gold Edition Dose, Vorderseite', 'Shilajit Gummies Dose, Rückseite mit Nährwerten und Wirkstoffen'],
  },
  drops: {
    subtitle: 'Holunder · 30 ml', serving: 'Pro Tagesportion: 3 Tropfen',
    description: 'Shilajit Tropfen mit Holundergeschmack, L-Citrullin, Panax Ginseng, Zink, Selen, Schwarzkümmel und Seemoos. Braunglas mit goldener Pipette, in einer Geschenkrolle.',
    imageAlt: 'Himalayan Drop Shilajit Tropfen, Geschenkrolle und Pipettenflasche aus Braunglas, Holunder',
    directions: 'Erwachsene: täglich 3 Tropfen direkt oder in Wasser oder Tee einnehmen, 30 Minuten vor dem Essen. Gut schütteln.',
    storage: 'Bei Raumtemperatur lagern. Nicht im Kühlschrank aufbewahren. Gut verschlossen halten.',
    gallery: ['Shilajit Tropfen Geschenkrolle, Vorderseite', 'Shilajit Tropfen Braunglasflaschen, Vorder- und Rückseite', 'Shilajit Tropfen Rolle, Rückseite mit Wirkstoffen'],
  },
  capsules: {
    subtitle: 'Daily Wellness Formula · 60 Kapseln', count: '60 Kapseln', twice: '2 täglich', serving: 'Pro 2 Kapseln',
    description: 'Unsere tägliche Formel als Kapsel: Shilajit mit L-Citrullin, Panax Ginseng, Zink, Selen, Schwarzkümmel und Seemoos. Zwei Kapseln täglich mit Wasser. Kein Geschmack, kein Abmessen.',
    imageAlt: 'Himalayan Drop Shilajit Kapseln, Box und Flasche, 60 Kapseln',
    directions: 'Erwachsene: täglich 2 Kapseln mit Wasser einnehmen.',
    caution: 'Nicht für Kinder. Bei Schwangerschaft, in der Stillzeit, bei Einnahme von Medikamenten oder in ärztlicher Behandlung vor der Verwendung ärztlichen Rat einholen. Die empfohlene Verzehrmenge nicht überschreiten.',
    gallery: ['Shilajit Kapseln Flasche, Vorderseite', 'Shilajit Kapseln Flasche mit 85+ Mineralien und 83,1 % Fulvinsäure', 'Shilajit Kapseln Box, Vorderseite', 'Shilajit Kapseln Box, Oberseite', 'Shilajit Kapseln Box, Nährwertangaben', 'Shilajit Kapseln Box, Reinheit', 'Shilajit Kapseln Box, Anwendung, Hinweise und Lagerung', 'Shilajit Kapseln Flasche, Rückseite mit Nährwertangaben'],
  },
});

const fr = build({
  pct: (n) => `${comma(n)} %`, num: comma,
  ing: { resin: 'Résine de shilajit', shilajit: 'Shilajit', citrulline: 'L-citrulline', ginseng: 'Extrait de Panax ginseng', zinc: 'Zinc', selenium: 'Sélénium', seaMoss: 'Mousse de mer', blackSeed: 'Nigelle' },
  skardu: 'Skardu', pureResin: 'Résine pure', labTested: 'Testé en labo', himalayan: 'Himalaya', amberGlass: 'Verre ambré',
  strawberry: 'Fraise', elderberry: 'Sureau', actives: '6 actifs',
  minerals: 'Minéraux*', fulvic: 'Acide fulvique*', netWeight: 'Poids net', netVolume: 'Contenance', servings: 'Portions', capsulesWord: 'Gélules',
  ingredients: 'Ingrédients', single: 'Un seul ingrédient', activeIngredients: 'Ingrédients actifs', supplementFacts: 'Composition',
  boxes: ['1 boîte', '2 boîtes', '3 boîtes'], jars: ['1 pot', '2 pots', '3 pots'], tins: ['1 boîte', '2 boîtes', '3 boîtes'], bottles: ['1 flacon', '2 flacons', '3 flacons'],
  note: 'Les minéraux et l’acide fulvique concernent la matière première shilajit et sont confirmés dans le rapport de chaque lot.',
  resinDirections: 'Dissoudre une quantité de la taille d’un petit pois dans un verre d’eau chaude (non bouillante) ou de thé. Respecter la portion journalière indiquée sur l’étiquette.',
  storageCool: 'Conserver dans un endroit frais et sec, à l’abri de la lumière directe du soleil. Bien refermer.',
  resinCaution: 'Réservé aux adultes. Déconseillé aux enfants et aux femmes enceintes ou allaitantes. Demandez l’avis d’un professionnel de santé si vous prenez des médicaments ou avez un problème de santé.',
  cautionStd: 'Déconseillé aux enfants et aux femmes enceintes. Demandez l’avis de votre médecin en cas de problème de santé ou de traitement médicamenteux. Ne pas dépasser la dose journalière.',
  gold: {
    subtitle: 'Himalayan Gold Edition · 30 g · Skardu',
    description: 'Résine de shilajit pure des hauteurs de Skardu, au Pakistan, récoltée au-dessus de 5 000 mètres. Un ingrédient, une origine, dans un verre qui protège de la lumière. Dissoudre une petite quantité dans de l’eau chaude ou du thé.',
    imageAlt: 'Boîte Himalayan Drop Shilajit Resin Himalayan Gold Edition',
    gallery: ['Pot Himalayan Gold Edition dans une niche de pierre bordeaux', 'Boîte Himalayan Gold Edition : A ritual, refined', 'Pot Himalayan Gold Edition avec une coupelle dorée de résine et un verre d’eau', 'Pot Himalayan Gold Edition sur un rocher de montagne au lever du soleil'],
  },
  silver: { subtitle: 'Premium Skardu · 30 g', description: 'Résine de shilajit de The Skardu Collection, récoltée au-dessus de 5 000 mètres à Skardu, au Pakistan. Un seul ingrédient, conditionné dans un verre qui protège de la lumière. Dissolvez-en une petite quantité dans de l’eau chaude ou du thé.', imageAlt: 'Pot et boîte Shilajit Resin Premium Skardu', gallery: ['Boîte Premium Skardu : The Skardu Collection, récoltée au-dessus de 5 000 m', 'Côté de la boîte Premium Skardu : 83,1 % d’acide fulvique, 85+ minéraux', 'Pot Premium Skardu sur un rocher de montagne à côté de shilajit brut'] },
  gummies: {
    subtitle: 'Gold Edition · Fraise · 60 gommes', count: '60 gommes', serving: 'Pour 2 gommes',
    description: 'Gommes au shilajit goût fraise, Gold Edition, avec L-citrulline, Panax ginseng, zinc, sélénium, mousse de mer et nigelle. Deux gommes par portion, 30 portions dans une boîte en métal.',
    imageAlt: 'Boîte Himalayan Drop Shilajit Gummies Gold Edition, goût fraise',
    directions: 'Adultes : mâcher 2 gommes par jour.',
    storage: 'Conserver au sec, à 25 °C maximum, à l’abri du soleil. Bien refermer la boîte.',
    gallery: ['Boîte Shilajit Gummies Gold Edition, face avant', 'Boîte Shilajit Gummies, dos avec valeurs nutritionnelles et actifs'],
  },
  drops: {
    subtitle: 'Sureau · 30 ml', serving: 'Par portion journalière : 3 gouttes',
    description: 'Gouttes de shilajit au goût de sureau, avec L-citrulline, Panax ginseng, zinc, sélénium, nigelle et mousse de mer. Flacon en verre ambré avec compte-gouttes doré, dans un tube cadeau.',
    imageAlt: 'Tube et flacon compte-gouttes ambré Himalayan Drop Shilajit Drops, sureau',
    directions: 'Adultes : prendre 3 gouttes par jour, pures ou dans de l’eau ou du thé, 30 minutes avant le repas. Bien agiter.',
    storage: 'Conserver à température ambiante. Ne pas mettre au réfrigérateur. Bien refermer.',
    gallery: ['Tube cadeau Shilajit Drops, face avant', 'Flacons ambrés Shilajit Drops, face et dos', 'Tube Shilajit Drops, dos avec ingrédients actifs'],
  },
  capsules: {
    subtitle: 'Daily Wellness Formula · 60 gélules', count: '60 gélules', twice: '2 par jour', serving: 'Pour 2 gélules',
    description: 'Notre formule quotidienne en gélules : shilajit avec L-citrulline, Panax ginseng, zinc, sélénium, nigelle et mousse de mer. Deux gélules par jour avec de l’eau. Sans goût, sans dosage.',
    imageAlt: 'Boîte et flacon Himalayan Drop Shilajit Capsules, 60 gélules',
    directions: 'Adultes : prendre 2 gélules par jour avec de l’eau.',
    caution: 'Déconseillé aux enfants. En cas de grossesse, d’allaitement, de traitement médicamenteux ou de suivi médical, demandez l’avis d’un professionnel de santé avant utilisation. Ne pas dépasser la dose recommandée.',
    gallery: ['Flacon Shilajit Capsules, face avant', 'Flacon Shilajit Capsules avec 85+ minéraux et 83,1 % d’acide fulvique', 'Boîte Shilajit Capsules, face avant', 'Boîte Shilajit Capsules, dessus', 'Boîte Shilajit Capsules, composition', 'Boîte Shilajit Capsules, pureté du shilajit', 'Boîte Shilajit Capsules, utilisation, précautions et conservation', 'Flacon Shilajit Capsules, dos avec composition'],
  },
});

const es = build({
  pct: (n) => `${comma(n)} %`, num: comma,
  ing: { resin: 'Resina de shilajit', shilajit: 'Shilajit', citrulline: 'L-citrulina', ginseng: 'Extracto de Panax ginseng', zinc: 'Zinc', selenium: 'Selenio', seaMoss: 'Musgo marino', blackSeed: 'Comino negro' },
  skardu: 'Skardu', pureResin: 'Resina pura', labTested: 'Analizado', himalayan: 'Himalaya', amberGlass: 'Vidrio ámbar',
  strawberry: 'Fresa', elderberry: 'Saúco', actives: '6 activos',
  minerals: 'Minerales*', fulvic: 'Ácido fúlvico*', netWeight: 'Peso neto', netVolume: 'Contenido', servings: 'Porciones', capsulesWord: 'Cápsulas',
  ingredients: 'Ingredientes', single: 'Un solo ingrediente', activeIngredients: 'Ingredientes activos', supplementFacts: 'Información nutricional',
  boxes: ['1 caja', '2 cajas', '3 cajas'], jars: ['1 tarro', '2 tarros', '3 tarros'], tins: ['1 lata', '2 latas', '3 latas'], bottles: ['1 frasco', '2 frascos', '3 frascos'],
  note: 'Los minerales y el ácido fúlvico se refieren a la materia prima shilajit y se confirman en el informe de cada lote.',
  resinDirections: 'Disuelve una cantidad del tamaño de un guisante en un vaso de agua caliente (no hirviendo) o té. Sigue la porción diaria indicada en la etiqueta.',
  storageCool: 'Conservar en un lugar fresco y seco, protegido de la luz solar directa. Mantener bien cerrado.',
  resinCaution: 'Para adultos. No apto para niños ni para mujeres embarazadas o en periodo de lactancia. Consulta a un profesional sanitario si tomas medicación o tienes alguna enfermedad.',
  cautionStd: 'No apto para niños ni mujeres embarazadas. Consulta a tu médico si tienes alguna enfermedad o tomas medicación. No superar la dosis diaria.',
  gold: {
    subtitle: 'Himalayan Gold Edition · 30 g · Skardu',
    description: 'Resina de shilajit pura de las alturas de Skardu, Pakistán, recolectada a más de 5.000 metros. Un ingrediente, un origen, en vidrio que la protege de la luz. Disuelve una pequeña cantidad en agua caliente o té.',
    imageAlt: 'Caja Himalayan Drop Shilajit Resin Himalayan Gold Edition',
    gallery: ['Tarro Himalayan Gold Edition en una hornacina de piedra burdeos', 'Caja Himalayan Gold Edition: A ritual, refined', 'Tarro Himalayan Gold Edition con un cuenco dorado de resina y un vaso de agua', 'Tarro Himalayan Gold Edition sobre una roca de montaña al amanecer'],
  },
  silver: { subtitle: 'Premium Skardu · 30 g', description: 'Resina de shilajit de The Skardu Collection, recolectada a más de 5.000 metros en Skardu, Pakistán. Un solo ingrediente, envasado en vidrio que la protege de la luz. Disuelve una pequeña cantidad en agua caliente o té.', imageAlt: 'Tarro y caja Shilajit Resin Premium Skardu', gallery: ['Caja Premium Skardu: The Skardu Collection, recolectada a más de 5.000 m', 'Lateral de la caja Premium Skardu: 83,1 % de ácido fúlvico, 85+ minerales', 'Tarro Premium Skardu sobre roca de montaña junto a shilajit en bruto'] },
  gummies: {
    subtitle: 'Gold Edition · Fresa · 60 gominolas', count: '60 gominolas', serving: 'Por 2 gominolas',
    description: 'Gominolas de shilajit sabor fresa, Gold Edition, con L-citrulina, Panax ginseng, zinc, selenio, musgo marino y comino negro. Dos gominolas por porción, 30 porciones en una lata metálica.',
    imageAlt: 'Lata Himalayan Drop Shilajit Gummies Gold Edition, sabor fresa',
    directions: 'Adultos: masticar 2 gominolas al día.',
    storage: 'Conservar en un lugar seco a un máximo de 25 °C, protegido del sol. Mantener la lata bien cerrada.',
    gallery: ['Lata Shilajit Gummies Gold Edition, frontal', 'Lata Shilajit Gummies, reverso con información nutricional y activos'],
  },
  drops: {
    subtitle: 'Saúco · 30 ml', serving: 'Por porción diaria: 3 gotas',
    description: 'Gotas de shilajit sabor saúco con L-citrulina, Panax ginseng, zinc, selenio, comino negro y musgo marino. Vidrio ámbar con cuentagotas dorado, en un tubo de regalo.',
    imageAlt: 'Tubo y frasco cuentagotas ámbar Himalayan Drop Shilajit Drops, saúco',
    directions: 'Adultos: tomar 3 gotas al día, directamente o en agua o té, 30 minutos antes de comer. Agitar bien.',
    storage: 'Conservar a temperatura ambiente. No refrigerar. Mantener bien cerrado.',
    gallery: ['Tubo de regalo Shilajit Drops, frontal', 'Frascos ámbar Shilajit Drops, frontal y reverso', 'Tubo Shilajit Drops, reverso con ingredientes activos'],
  },
  capsules: {
    subtitle: 'Daily Wellness Formula · 60 cápsulas', count: '60 cápsulas', twice: '2 al día', serving: 'Por 2 cápsulas',
    description: 'Nuestra fórmula diaria en cápsulas: shilajit con L-citrulina, Panax ginseng, zinc, selenio, comino negro y musgo marino. Dos cápsulas al día con agua. Sin sabor, sin medir.',
    imageAlt: 'Caja y frasco Himalayan Drop Shilajit Capsules, 60 cápsulas',
    directions: 'Adultos: tomar 2 cápsulas al día con agua.',
    caution: 'No apto para niños. En caso de embarazo, lactancia, medicación o tratamiento médico, consulta a un profesional sanitario antes de usarlo. No superar la dosis recomendada.',
    gallery: ['Frasco Shilajit Capsules, frontal', 'Frasco Shilajit Capsules con 85+ minerales y 83,1 % de ácido fúlvico', 'Caja Shilajit Capsules, frontal', 'Caja Shilajit Capsules, parte superior', 'Caja Shilajit Capsules, información nutricional', 'Caja Shilajit Capsules, pureza del shilajit', 'Caja Shilajit Capsules, modo de uso, advertencias y conservación', 'Frasco Shilajit Capsules, reverso con información nutricional'],
  },
});

const ar = build({
  pct: (n) => `${n}%`, num: (n) => n,
  ing: { resin: 'راتنج الشيلاجيت', shilajit: 'شيلاجيت', citrulline: 'إل-سيترولين', ginseng: 'مستخلص الجينسنغ (Panax)', zinc: 'الزنك', selenium: 'السيلينيوم', seaMoss: 'الطحلب البحري', blackSeed: 'الحبة السوداء' },
  skardu: 'سكردو', pureResin: 'راتنج نقي', labTested: 'مفحوص مخبرياً', himalayan: 'الهيمالايا', amberGlass: 'زجاج كهرماني',
  strawberry: 'فراولة', elderberry: 'البلسان', actives: '6 مكونات فعالة',
  minerals: 'معدناً*', fulvic: 'حمض الفولفيك*', netWeight: 'الوزن الصافي', netVolume: 'الحجم', servings: 'حصة', capsulesWord: 'كبسولة',
  ingredients: 'المكونات', single: 'مكوّن واحد فقط', activeIngredients: 'المكونات الفعالة', supplementFacts: 'القيم الغذائية',
  boxes: ['علبة واحدة', 'علبتان', '3 علب'], jars: ['برطمان واحد', 'برطمانان', '3 برطمانات'], tins: ['علبة واحدة', 'علبتان', '3 علب'], bottles: ['زجاجة واحدة', 'زجاجتان', '3 زجاجات'],
  note: 'تشير المعادن وحمض الفولفيك إلى مادة الشيلاجيت الخام، ويتم تأكيدها في تقرير كل دفعة.',
  resinDirections: 'أذب كمية بحجم حبة البازلاء في كوب من الماء الدافئ (غير المغلي) أو الشاي. التزم بالحصة اليومية المذكورة على الملصق.',
  storageCool: 'يُحفظ في مكان بارد وجاف بعيداً عن أشعة الشمس المباشرة. يُغلق بإحكام.',
  resinCaution: 'للبالغين. غير مناسب للأطفال أو للحوامل أو المرضعات. استشر مختصاً صحياً إذا كنت تتناول أدوية أو تعاني من حالة صحية.',
  cautionStd: 'غير مناسب للأطفال أو الحوامل. استشر طبيبك إذا كنت تعاني من حالة صحية أو تتناول أدوية. لا تتجاوز الجرعة اليومية.',
  gold: {
    subtitle: 'Himalayan Gold Edition · 30 غ · سكردو',
    description: 'راتنج شيلاجيت نقي من مرتفعات سكردو في باكستان، يُجمع على ارتفاع يزيد عن 5000 متر. مكوّن واحد ومصدر واحد، في زجاج يحميه من الضوء. أذب كمية صغيرة في ماء دافئ أو شاي.',
    imageAlt: 'علبة راتنج شيلاجيت Himalayan Drop إصدار الهيمالايا الذهبي',
    gallery: ['برطمان إصدار الهيمالايا الذهبي في كوة حجرية عنابية', 'علبة إصدار الهيمالايا الذهبي: A ritual, refined', 'برطمان إصدار الهيمالايا الذهبي مع وعاء ذهبي من الراتنج وكأس ماء', 'برطمان إصدار الهيمالايا الذهبي على صخرة جبلية عند الشروق'],
  },
  silver: { subtitle: 'Premium Skardu · 30 غ', description: 'راتنج شيلاجيت من The Skardu Collection، يُجمع فوق 5000 متر في سكردو، باكستان. مكوّن واحد معبأ في زجاج يحميه من الضوء. أذب كمية صغيرة في ماء دافئ أو شاي.', imageAlt: 'برطمان وعلبة راتنج الشيلاجيت سكردو الفاخر', gallery: ['علبة سكردو الفاخر: The Skardu Collection، يُجمع فوق 5000 متر', 'جانب علبة سكردو الفاخر: 83.1% حمض الفولفيك، أكثر من 85 معدناً', 'برطمان سكردو الفاخر على صخرة جبلية بجانب شيلاجيت خام'] },
  gummies: {
    subtitle: 'Gold Edition · فراولة · 60 علكة', count: '60 علكة', serving: 'لكل علكتين',
    description: 'علكات شيلاجيت بنكهة الفراولة، الإصدار الذهبي، مع إل-سيترولين والجينسنغ والزنك والسيلينيوم والطحلب البحري والحبة السوداء. علكتان لكل حصة، 30 حصة في علبة معدنية.',
    imageAlt: 'علبة علكات شيلاجيت Himalayan Drop الإصدار الذهبي بنكهة الفراولة',
    directions: 'للبالغين: امضغ علكتين يومياً.',
    storage: 'يُحفظ في مكان جاف بدرجة حرارة لا تتجاوز 25 درجة مئوية بعيداً عن الشمس. أغلق العلبة بإحكام.',
    gallery: ['علبة علكات الشيلاجيت الإصدار الذهبي، الواجهة', 'علبة علكات الشيلاجيت، الظهر مع القيم الغذائية والمكونات الفعالة'],
  },
  drops: {
    subtitle: 'البلسان · 30 مل', serving: 'لكل حصة يومية: 3 قطرات',
    description: 'قطرات شيلاجيت بنكهة البلسان مع إل-سيترولين والجينسنغ والزنك والسيلينيوم والحبة السوداء والطحلب البحري. زجاج كهرماني مع قطّارة ذهبية، في أنبوب هدايا.',
    imageAlt: 'أنبوب وزجاجة قطّارة كهرمانية لقطرات شيلاجيت Himalayan Drop بنكهة البلسان',
    directions: 'للبالغين: تناول 3 قطرات يومياً مباشرة أو في الماء أو الشاي، قبل الطعام بـ30 دقيقة. رجّ جيداً.',
    storage: 'يُحفظ في درجة حرارة الغرفة. لا يوضع في الثلاجة. يُغلق بإحكام.',
    gallery: ['أنبوب هدايا قطرات الشيلاجيت، الواجهة', 'زجاجات قطرات الشيلاجيت الكهرمانية، الأمام والخلف', 'أنبوب قطرات الشيلاجيت، الظهر مع المكونات الفعالة'],
  },
  capsules: {
    subtitle: 'Daily Wellness Formula · 60 كبسولة', count: '60 كبسولة', twice: 'كبسولتان يومياً', serving: 'لكل كبسولتين',
    description: 'تركيبتنا اليومية في كبسولات: شيلاجيت مع إل-سيترولين والجينسنغ والزنك والسيلينيوم والحبة السوداء والطحلب البحري. كبسولتان يومياً مع الماء. بلا طعم وبلا قياس.',
    imageAlt: 'علبة وزجاجة كبسولات شيلاجيت Himalayan Drop، ‏60 كبسولة',
    directions: 'للبالغين: تناول كبسولتين يومياً مع الماء.',
    caution: 'غير مناسب للأطفال. في حال الحمل أو الرضاعة أو تناول أدوية أو الخضوع لعلاج طبي، استشر مختصاً صحياً قبل الاستخدام. لا تتجاوز الحصة الموصى بها.',
    gallery: ['زجاجة كبسولات الشيلاجيت، الواجهة', 'زجاجة كبسولات الشيلاجيت مع أكثر من 85 معدناً و83.1% حمض الفولفيك', 'علبة كبسولات الشيلاجيت، الواجهة', 'علبة كبسولات الشيلاجيت، من الأعلى', 'علبة كبسولات الشيلاجيت، القيم الغذائية', 'علبة كبسولات الشيلاجيت، نقاء الشيلاجيت', 'علبة كبسولات الشيلاجيت، طريقة الاستخدام والتحذيرات والحفظ', 'زجاجة كبسولات الشيلاجيت، الظهر مع القيم الغذائية'],
  },
});

export const productText = { de, fr, es, ar };

// SEO title and description per product, with each country's search terms.
export const productSeoMore = {
  'shilajit-gold-resin': {
    de: { title: 'Shilajit Harz Himalayan Gold Edition · 30 g', description: 'Reines Shilajit Harz (Mumijo), von Hand geerntet über 5.000 m in Skardu. Eine Zutat, 85+ Mineralien, Fulvinsäure je Charge laborgeprüft. 30 g im lichtschützenden Glas.' },
    fr: { title: 'Résine de Shilajit Himalayan Gold Edition · 30 g', description: 'Résine de shilajit pure, récoltée à la main au-dessus de 5 000 m à Skardu. Un ingrédient, 85+ minéraux, acide fulvique testé pour chaque lot. 30 g en verre protecteur.' },
    es: { title: 'Resina de Shilajit Himalayan Gold Edition · 30 g', description: 'Resina de shilajit pura, recolectada a mano a más de 5.000 m en Skardu. Un ingrediente, 85+ minerales, ácido fúlvico analizado en cada lote. 30 g en vidrio protector.' },
    ar: { title: 'راتنج شيلاجيت إصدار الهيمالايا الذهبي · 30 غ', description: 'راتنج شيلاجيت نقي يُجمع يدوياً فوق 5000 متر في سكردو. مكوّن واحد، أكثر من 85 معدناً، وحمض الفولفيك مفحوص لكل دفعة. 30 غ في زجاج واقٍ من الضوء.' },
  },
  'shilajit-silver-resin': {
    de: { title: 'Shilajit Harz Premium Skardu · Himalaya Shilajit 30 g', description: 'Himalaya Shilajit Harz für jeden Tag in Braunglas. Charge für Charge auf Schwermetalle und Fulvinsäure laborgeprüft.' },
    fr: { title: 'Résine de Shilajit Premium Skardu · Shilajit de l’Himalaya 30 g', description: 'Résine de shilajit de l’Himalaya pour tous les jours, en verre ambré. Testée lot par lot pour les métaux lourds et l’acide fulvique.' },
    es: { title: 'Resina de Shilajit Premium Skardu · Shilajit del Himalaya 30 g', description: 'Resina de shilajit del Himalaya para cada día, en vidrio ámbar. Analizada lote a lote en metales pesados y ácido fúlvico.' },
    ar: { title: 'راتنج شيلاجيت سكردو الفاخر · شيلاجيت الهيمالايا 30 غ', description: 'راتنج شيلاجيت الهيمالايا للاستخدام اليومي في زجاج كهرماني. مفحوص للمعادن الثقيلة وحمض الفولفيك، دفعة بدفعة.' },
  },
  'shilajit-gummies': {
    de: { title: 'Aura Shilajit Gummies · Erdbeere, 60 Stück (500 mg Shilajit)', description: 'Shilajit Gummies mit Erdbeergeschmack und 500 mg Shilajit pro Portion, dazu L-Citrullin, Panax Ginseng, Zink, Selen, Seemoos und Schwarzkümmel. 60 Stück in der Dose.' },
    fr: { title: 'Aura Gommes au Shilajit · Fraise, 60 Gommes (500 mg de Shilajit)', description: 'Gommes au shilajit goût fraise avec 500 mg de shilajit par portion, L-citrulline, Panax ginseng, zinc, sélénium, mousse de mer et nigelle. 60 gommes.' },
    es: { title: 'Aura Gominolas de Shilajit · Fresa, 60 Unidades (500 mg de Shilajit)', description: 'Gominolas de shilajit sabor fresa con 500 mg de shilajit por porción, L-citrulina, Panax ginseng, zinc, selenio, musgo marino y comino negro. 60 unidades.' },
    ar: { title: 'Aura علكات الشيلاجيت · فراولة، 60 علكة (500 ملغ شيلاجيت)', description: 'علكات شيلاجيت بنكهة الفراولة مع 500 ملغ شيلاجيت لكل حصة، وإل-سيترولين والجينسنغ والزنك والسيلينيوم والطحلب البحري والحبة السوداء. 60 علكة.' },
  },
  'shilajit-drops': {
    de: { title: 'Élan Shilajit Tropfen · Flüssiges Shilajit mit Holunder 30 ml', description: 'Flüssige Shilajit Tropfen mit Holundergeschmack, L-Citrullin, Panax Ginseng, Zink, Selen, Schwarzkümmel und Seemoos. 3 Tropfen täglich, Braunglas.' },
    fr: { title: 'Élan Gouttes de Shilajit · Shilajit Liquide au Sureau 30 ml', description: 'Gouttes de shilajit liquide au sureau, avec L-citrulline, Panax ginseng, zinc, sélénium, nigelle et mousse de mer. 3 gouttes par jour, verre ambré.' },
    es: { title: 'Élan Gotas de Shilajit · Shilajit Líquido con Saúco 30 ml', description: 'Gotas de shilajit líquido sabor saúco con L-citrulina, Panax ginseng, zinc, selenio, comino negro y musgo marino. 3 gotas al día, vidrio ámbar.' },
    ar: { title: 'Élan قطرات الشيلاجيت · شيلاجيت سائل بنكهة البلسان 30 مل', description: 'قطرات شيلاجيت سائلة بنكهة البلسان مع إل-سيترولين والجينسنغ والزنك والسيلينيوم والحبة السوداء والطحلب البحري. 3 قطرات يومياً.' },
  },
  'shilajit-capsules': {
    de: { title: 'Viva Shilajit Kapseln · 60 Kapseln, 500 mg Shilajit pro Portion', description: 'Shilajit Kapseln mit 500 mg Shilajit pro Portion, dazu L-Citrullin, Panax Ginseng, Zink, Selen, Schwarzkümmel und Seemoos. Geschmacksneutral, 2 täglich.' },
    fr: { title: 'Viva Gélules de Shilajit · 60 Gélules, 500 mg de Shilajit par Portion', description: 'Gélules de shilajit avec 500 mg de shilajit par portion, L-citrulline, Panax ginseng, zinc, sélénium, nigelle et mousse de mer. Sans goût, 2 par jour.' },
    es: { title: 'Viva Cápsulas de Shilajit · 60 Cápsulas, 500 mg de Shilajit por Porción', description: 'Cápsulas de shilajit con 500 mg de shilajit por porción, L-citrulina, Panax ginseng, zinc, selenio, comino negro y musgo marino. Sin sabor, 2 al día.' },
    ar: { title: 'Viva كبسولات الشيلاجيت · 60 كبسولة، 500 ملغ شيلاجيت لكل حصة', description: 'كبسولات شيلاجيت مع 500 ملغ شيلاجيت لكل حصة، وإل-سيترولين والجينسنغ والزنك والسيلينيوم والحبة السوداء والطحلب البحري. بلا طعم، كبسولتان يومياً.' },
  },
};
