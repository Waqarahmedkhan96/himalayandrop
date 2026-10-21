import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { SectionHead, FeatureGrid, CtaCards } from '@/components/Blocks';
import { Icon } from '@/components/Icons';
import Sources from '@/components/Sources';
import { refs } from '@/lib/sources';
import { pageMeta } from '@/lib/seo';
import { POST_SLUGS } from '@/lib/postSlugs';
import { tr } from '@/lib/i18n';

export const meta = (lang) => pageMeta('our-shilajit', lang, '/our-shilajit/');

const T = {
  en: {
    hero: { eyebrow: 'Our shilajit', title: 'Pure, patient,', accent: 'proven.', lead: 'What sets Himalayan Drop apart is not one secret. It is many slow, careful steps, and proof at the end.' },
    s1: { eyebrow: 'What makes it ours', title: 'Six things we', accent: 'never rush.' },
    features: [
      { icon: 'mountain', title: 'Above 5,000 metres', text: 'Collected from high rock faces near Skardu, Pakistan, far from roads, towns and industry.' },
      { icon: 'hand', title: 'Collected by hand', text: 'Harvesters gather the shilajit-bearing stones by hand, a few at a time.' },
      { icon: 'filter', title: 'Filtered several times', text: 'Dissolved in pure water and filtered again and again until only the resin remains.' },
      { icon: 'sun', title: 'Sun-dried, up to 60 days', text: 'Dried slowly in UV-protected glass jars set in steel bowls. No ovens, no shortcuts.' },
      { icon: 'flask', title: 'Tested every batch', text: 'Heavy metals, overall quality and fulvic acid percentage, checked by a lab.' },
      { icon: 'jar', title: 'Sealed in UV-protected glass', text: 'Packed in light-protective glass, from our hands to yours.' },
    ],
    inside: {
      eyebrow: 'What’s inside', title: 'What shilajit', accent: 'contains.',
      lead: 'Shilajit is a natural complex of humic substances, minerals and organic compounds. Here is what research describes, and what we measure in our own.',
      stats: [['85+', 'Minerals & trace elements*'], ['83.1%', 'Fulvic acid, Gold Resin*'], ['5,000 m+', 'Harvest altitude'], ['60', 'Days of sun-drying, up to'], ['4', 'Lab checks per batch']],
      note: '*Specification of our shilajit raw material, confirmed on each batch report. Values vary naturally between batches.',
      parts: [
        { icon: 'flask', title: 'Humic substances', text: 'Fulvic and humic acids make up the largest share of shilajit. Fulvic acid is the most common quality marker, which is why we state it as a number.' },
        { icon: 'mountain', title: 'Minerals', text: 'Calcium, potassium and magnesium are among the main elements, alongside trace elements such as selenium, chromium and cobalt.' },
        { icon: 'leaf', title: 'Organic compounds', text: 'Amino acids (mainly glycine), fatty acids, phenolic compounds such as caffeic and gallic acid, and dibenzo-α-pyrones.' },
        { icon: 'shield', title: 'Why we test for metals', text: 'Because shilajit forms in rock, it can naturally contain lead, cadmium, mercury or arsenic. Every batch is tested against EU limits.' },
      ],
      sourcesTitle: 'Sources',
      sources: refs('kamgar2025', 'wilson2011', 'stohs2014', 'saper2008', 'reg2023915'),
    },
    s2: { eyebrow: 'Choose with confidence', title: 'What to look for', accent: 'in any shilajit.', lead: 'Six questions worth asking before you buy shilajit, and how we answer them.' },
    head: ['Himalayan Drop', 'Ask any seller'],
    compare: [
      ['Origin', 'Collected above 5,000 m near Skardu', 'Is the harvest region named, and how high is it?'],
      ['Purification', 'Dissolved in pure water and filtered several times', 'How is it cleaned, and how many times?'],
      ['Drying', 'Slow sun-drying for up to 60 days', 'Is it dried slowly, or with heat to save time?'],
      ['Testing', 'Lab report for every batch', 'Can you see the report for your own batch?'],
      ['Packaging', 'UV-protected glass', 'Does the packaging protect the resin from light?'],
      ['Transparency', 'Batch number on every pack', 'Can you trace your jar back to its batch?'],
    ],
    quote: '“Shilajit takes centuries to form in the rock. The least we can do is give it sixty days in the sun.”',
    quoteBy: 'The Himalayan Drop approach',
    ctas: [
      { eyebrow: 'Proof', title: 'Lab results', text: 'Look up the report for the batch number on your jar.', cta: 'See lab results', href: '/lab-results/', dark: true },
      { eyebrow: 'Ritual', title: 'How to use', text: 'Resin, gummies, drops and capsules, step by step.', cta: 'Read the guide', href: '/how-to-use/' },
      { eyebrow: 'Guide', title: 'Is it real?', text: 'Six checks to tell authentic shilajit from the rest.', cta: 'Read the guide', href: '/blog/how-to-tell-if-shilajit-is-real/' },
    ],
  },
  da: {
    hero: { eyebrow: 'Vores shilajit', title: 'Ren, tålmodig,', accent: 'dokumenteret.', lead: 'Det, der gør Himalayan Drop anderledes, er ikke én hemmelighed. Det er mange langsomme, omhyggelige trin, og bevis til sidst.' },
    s1: { eyebrow: 'Det gør den til vores', title: 'Seks ting, vi', accent: 'aldrig forhaster.' },
    features: [
      { icon: 'mountain', title: 'Over 5.000 meter', text: 'Samlet på høje klippevægge ved Skardu i Pakistan, langt fra veje, byer og industri.' },
      { icon: 'hand', title: 'Samlet med håndkraft', text: 'Høstfolkene samler de shilajit-holdige sten med hånden, få ad gangen.' },
      { icon: 'filter', title: 'Filtreret flere gange', text: 'Opløst i rent vand og filtreret igen og igen, til kun resinen er tilbage.' },
      { icon: 'sun', title: 'Soltørret i op til 60 dage', text: 'Tørret langsomt i UV-beskyttede glaskrukker i stålskåle. Ingen ovne, ingen genveje.' },
      { icon: 'flask', title: 'Hver batch testes', text: 'Tungmetaller, kvalitet og indhold af fulvinsyre, kontrolleret af et laboratorium.' },
      { icon: 'jar', title: 'Forseglet i UV-beskyttet glas', text: 'Pakket i lysbeskyttende glas, fra os til dig.' },
    ],
    inside: {
      eyebrow: 'Det er der i', title: 'Hvad shilajit', accent: 'indeholder.',
      lead: 'Shilajit er et naturligt kompleks af humusstoffer, mineraler og organiske forbindelser. Her er, hvad forskningen beskriver, og hvad vi selv måler.',
      stats: [['85+', 'Mineraler og sporstoffer*'], ['83,1 %', 'Fulvinsyre, Gold Resin*'], ['5.000 m+', 'Høsthøjde'], ['60', 'Dages soltørring, op til'], ['4', 'Laboratorietjek pr. batch']],
      note: '*Specifikation for vores råvare shilajit, bekræftet i rapporten for hver batch. Værdierne varierer naturligt fra batch til batch.',
      parts: [
        { icon: 'flask', title: 'Humusstoffer', text: 'Fulvinsyre og huminsyre udgør den største del af shilajit. Fulvinsyre er den mest brugte kvalitetsmarkør, og derfor angiver vi den som et tal.' },
        { icon: 'mountain', title: 'Mineraler', text: 'Calcium, kalium og magnesium er blandt de vigtigste grundstoffer, sammen med sporstoffer som selen, krom og kobolt.' },
        { icon: 'leaf', title: 'Organiske forbindelser', text: 'Aminosyrer (især glycin), fedtsyrer, fenoliske forbindelser som kaffesyre og gallussyre samt dibenzo-α-pyroner.' },
        { icon: 'shield', title: 'Derfor tester vi for metaller', text: 'Fordi shilajit dannes i klipper, kan den naturligt indeholde bly, cadmium, kviksølv eller arsen. Hver batch testes mod EU’s grænseværdier.' },
      ],
      sourcesTitle: 'Kilder',
      sources: refs('kamgar2025', 'wilson2011', 'stohs2014', 'saper2008', 'reg2023915'),
    },
    s2: { eyebrow: 'Vælg med ro i maven', title: 'Det skal du kigge efter', accent: 'i al shilajit.', lead: 'Seks spørgsmål, der er værd at stille, før du køber shilajit, og vores svar.' },
    head: ['Himalayan Drop', 'Spørg enhver forhandler'],
    compare: [
      ['Oprindelse', 'Samlet over 5.000 m ved Skardu', 'Er høstområdet navngivet, og hvor højt ligger det?'],
      ['Rensning', 'Opløst i rent vand og filtreret flere gange', 'Hvordan renses den, og hvor mange gange?'],
      ['Tørring', 'Langsom soltørring i op til 60 dage', 'Tørres den langsomt, eller med varme for at spare tid?'],
      ['Test', 'Laboratorierapport for hver batch', 'Kan du se rapporten for din egen batch?'],
      ['Emballage', 'UV-beskyttet glas', 'Beskytter emballagen resinen mod lys?'],
      ['Gennemsigtighed', 'Batchnummer på hver pakning', 'Kan du spore din krukke tilbage til dens batch?'],
    ],
    quote: '“Shilajit tager århundreder om at blive dannet i klippen. Det mindste, vi kan gøre, er at give den tres dage i solen.”',
    quoteBy: 'Himalayan Drops tilgang',
    ctas: [
      { eyebrow: 'Bevis', title: 'Laboratorieresultater', text: 'Find rapporten for batchnummeret på din krukke.', cta: 'Se resultaterne', href: '/lab-results/', dark: true },
      { eyebrow: 'Ritual', title: 'Sådan bruger du det', text: 'Resin, vingummi, dråber og kapsler, trin for trin.', cta: 'Læs guiden', href: '/how-to-use/' },
      { eyebrow: 'Guide', title: 'Er den ægte?', text: 'Seks tjek, der skiller ægte shilajit fra resten.', cta: 'Læs guiden', href: '/blog/saadan-ser-du-om-shilajit-er-aegte/' },
    ],
  },
  de: {
    hero: { eyebrow: 'Unser Shilajit', title: 'Rein, geduldig,', accent: 'bewiesen.', lead: 'Was Himalayan Drop auszeichnet, ist kein einzelnes Geheimnis. Es sind viele langsame, sorgfältige Schritte und am Ende ein Beweis.' },
    s1: { eyebrow: 'Was es zu unserem macht', title: 'Sechs Dinge, die wir', accent: 'nie überstürzen.' },
    features: [
      { icon: 'mountain', title: 'Über 5.000 Meter', text: 'Gesammelt an hohen Felswänden nahe Skardu in Pakistan, fern von Straßen, Städten und Industrie.' },
      { icon: 'hand', title: 'Von Hand gesammelt', text: 'Die Sammler lesen die Shilajit-haltigen Steine von Hand, wenige auf einmal.' },
      { icon: 'filter', title: 'Mehrfach gefiltert', text: 'In reinem Wasser gelöst und immer wieder gefiltert, bis nur das Harz bleibt.' },
      { icon: 'sun', title: 'Bis zu 60 Tage sonnengetrocknet', text: 'Langsam in UV-geschützten Glasgefäßen in Stahlschalen getrocknet. Keine Öfen, keine Abkürzungen.' },
      { icon: 'flask', title: 'Jede Charge geprüft', text: 'Schwermetalle, Gesamtqualität und Fulvinsäure-Anteil, von einem Labor kontrolliert.' },
      { icon: 'jar', title: 'In UV-geschütztem Glas', text: 'In lichtschützendes Glas abgefüllt, von unseren Händen in deine.' },
    ],
    inside: {
      eyebrow: 'Was drin ist', title: 'Was Shilajit', accent: 'enthält.',
      lead: 'Shilajit (Mumijo) ist ein natürlicher Komplex aus Huminstoffen, Mineralien und organischen Verbindungen. Das beschreibt die Forschung, und das messen wir in unserem.',
      stats: [['85+', 'Mineralien & Spurenelemente*'], ['83,1 %', 'Fulvinsäure, Gold Resin*'], ['5.000 m+', 'Erntehöhe'], ['60', 'Tage Sonnentrocknung, bis zu'], ['4', 'Laborprüfungen je Charge']],
      note: '*Spezifikation unseres Shilajit-Rohstoffs, bestätigt im Bericht jeder Charge. Die Werte schwanken natürlich zwischen den Chargen.',
      parts: [
        { icon: 'flask', title: 'Huminstoffe', text: 'Fulvin- und Huminsäuren machen den größten Teil von Shilajit aus. Fulvinsäure ist das häufigste Qualitätsmerkmal, deshalb geben wir sie als Zahl an.' },
        { icon: 'mountain', title: 'Mineralien', text: 'Calcium, Kalium und Magnesium gehören zu den Hauptelementen, dazu Spurenelemente wie Selen, Chrom und Kobalt.' },
        { icon: 'leaf', title: 'Organische Verbindungen', text: 'Aminosäuren (vor allem Glycin), Fettsäuren, phenolische Verbindungen wie Kaffee- und Gallussäure sowie Dibenzo-α-pyrone.' },
        { icon: 'shield', title: 'Warum wir auf Metalle prüfen', text: 'Da Shilajit im Gestein entsteht, kann es natürlicherweise Blei, Cadmium, Quecksilber oder Arsen enthalten. Jede Charge wird gegen die EU-Grenzwerte geprüft.' },
      ],
      sourcesTitle: 'Quellen',
      sources: refs('kamgar2025', 'wilson2011', 'stohs2014', 'saper2008', 'reg2023915'),
    },
    s2: { eyebrow: 'Mit Sicherheit wählen', title: 'Worauf du achten solltest,', accent: 'bei jedem Shilajit.', lead: 'Sechs Fragen, die du vor dem Kauf von Shilajit stellen solltest, und wie wir sie beantworten.' },
    head: ['Himalayan Drop', 'Frag jeden Anbieter'],
    compare: [
      ['Herkunft', 'Gesammelt über 5.000 m nahe Skardu', 'Ist die Ernteregion benannt, und wie hoch liegt sie?'],
      ['Reinigung', 'In reinem Wasser gelöst und mehrfach gefiltert', 'Wie wird es gereinigt, und wie oft?'],
      ['Trocknung', 'Langsame Sonnentrocknung bis zu 60 Tage', 'Wird es langsam getrocknet oder mit Hitze, um Zeit zu sparen?'],
      ['Prüfung', 'Laborbericht für jede Charge', 'Kannst du den Bericht deiner eigenen Charge sehen?'],
      ['Verpackung', 'UV-geschütztes Glas', 'Schützt die Verpackung das Harz vor Licht?'],
      ['Transparenz', 'Chargennummer auf jeder Packung', 'Lässt sich dein Glas bis zur Charge zurückverfolgen?'],
    ],
    quote: '„Shilajit braucht Jahrhunderte, um im Gestein zu entstehen. Das Mindeste, was wir tun können, ist ihm sechzig Tage Sonne zu geben.“',
    quoteBy: 'Der Himalayan Drop Ansatz',
    ctas: [
      { eyebrow: 'Beweis', title: 'Laborergebnisse', text: 'Finde den Bericht zur Chargennummer auf deinem Glas.', cta: 'Laborergebnisse ansehen', href: '/lab-results/', dark: true },
      { eyebrow: 'Ritual', title: 'Anwendung', text: 'Harz, Gummies, Tropfen und Kapseln, Schritt für Schritt.', cta: 'Anleitung lesen', href: '/how-to-use/' },
      { eyebrow: 'Ratgeber', title: 'Ist es echt?', text: 'Sechs Prüfungen, um echtes Shilajit zu erkennen.', cta: 'Ratgeber lesen', href: `/blog/${POST_SLUGS.real.de}/` },
    ],
  },
  fr: {
    hero: { eyebrow: 'Notre shilajit', title: 'Pur, patient,', accent: 'prouvé.', lead: 'Ce qui distingue Himalayan Drop n’est pas un secret unique. Ce sont de nombreuses étapes lentes et soignées, et une preuve à la fin.' },
    s1: { eyebrow: 'Ce qui le rend unique', title: 'Six choses que nous', accent: 'ne précipitons jamais.' },
    features: [
      { icon: 'mountain', title: 'Au-dessus de 5 000 mètres', text: 'Récolté sur de hautes parois rocheuses près de Skardu, au Pakistan, loin des routes, des villes et de l’industrie.' },
      { icon: 'hand', title: 'Récolté à la main', text: 'Les récolteurs ramassent les pierres porteuses de shilajit à la main, quelques-unes à la fois.' },
      { icon: 'filter', title: 'Filtré plusieurs fois', text: 'Dissous dans de l’eau pure et filtré encore et encore jusqu’à ce qu’il ne reste que la résine.' },
      { icon: 'sun', title: 'Séché au soleil jusqu’à 60 jours', text: 'Séché lentement dans des bocaux en verre anti-UV posés dans des bassines en acier. Sans four, sans raccourci.' },
      { icon: 'flask', title: 'Chaque lot testé', text: 'Métaux lourds, qualité globale et taux d’acide fulvique, contrôlés par un laboratoire.' },
      { icon: 'jar', title: 'Scellé dans du verre anti-UV', text: 'Conditionné dans un verre qui protège de la lumière, de nos mains aux vôtres.' },
    ],
    inside: {
      eyebrow: 'Composition', title: 'Ce que contient', accent: 'le shilajit.',
      lead: 'Le shilajit est un complexe naturel de substances humiques, de minéraux et de composés organiques. Voici ce que décrit la recherche, et ce que nous mesurons dans le nôtre.',
      stats: [['85+', 'Minéraux et oligo-éléments*'], ['83,1 %', 'Acide fulvique, Gold Resin*'], ['5 000 m+', 'Altitude de récolte'], ['60', 'Jours de séchage, jusqu’à'], ['4', 'Contrôles de labo par lot']],
      note: '*Spécification de notre matière première shilajit, confirmée dans le rapport de chaque lot. Les valeurs varient naturellement d’un lot à l’autre.',
      parts: [
        { icon: 'flask', title: 'Substances humiques', text: 'Les acides fulviques et humiques constituent la plus grande part du shilajit. L’acide fulvique est le marqueur de qualité le plus courant, c’est pourquoi nous l’indiquons en chiffres.' },
        { icon: 'mountain', title: 'Minéraux', text: 'Le calcium, le potassium et le magnésium font partie des éléments principaux, avec des oligo-éléments comme le sélénium, le chrome et le cobalt.' },
        { icon: 'leaf', title: 'Composés organiques', text: 'Acides aminés (surtout la glycine), acides gras, composés phénoliques comme les acides caféique et gallique, et dibenzo-α-pyrones.' },
        { icon: 'shield', title: 'Pourquoi tester les métaux', text: 'Comme le shilajit se forme dans la roche, il peut naturellement contenir du plomb, du cadmium, du mercure ou de l’arsenic. Chaque lot est testé selon les limites européennes.' },
      ],
      sourcesTitle: 'Sources',
      sources: refs('kamgar2025', 'wilson2011', 'stohs2014', 'saper2008', 'reg2023915'),
    },
    s2: { eyebrow: 'Choisir en confiance', title: 'Ce qu’il faut vérifier', accent: 'pour tout shilajit.', lead: 'Six questions à poser avant d’acheter du shilajit, et nos réponses.' },
    head: ['Himalayan Drop', 'À demander à tout vendeur'],
    compare: [
      ['Origine', 'Récolté au-dessus de 5 000 m près de Skardu', 'La région de récolte est-elle indiquée, et à quelle altitude ?'],
      ['Purification', 'Dissous dans de l’eau pure et filtré plusieurs fois', 'Comment est-il purifié, et combien de fois ?'],
      ['Séchage', 'Séchage lent au soleil jusqu’à 60 jours', 'Est-il séché lentement, ou à la chaleur pour gagner du temps ?'],
      ['Tests', 'Rapport de laboratoire pour chaque lot', 'Pouvez-vous voir le rapport de votre propre lot ?'],
      ['Emballage', 'Verre anti-UV', 'L’emballage protège-t-il la résine de la lumière ?'],
      ['Transparence', 'Numéro de lot sur chaque produit', 'Pouvez-vous remonter de votre pot à son lot ?'],
    ],
    quote: '« Le shilajit met des siècles à se former dans la roche. Le moins que nous puissions faire, c’est de lui accorder soixante jours de soleil. »',
    quoteBy: 'L’approche Himalayan Drop',
    ctas: [
      { eyebrow: 'Preuve', title: 'Résultats de laboratoire', text: 'Consultez le rapport du numéro de lot de votre pot.', cta: 'Voir les résultats', href: '/lab-results/', dark: true },
      { eyebrow: 'Rituel', title: 'Utilisation', text: 'Résine, gommes, gouttes et gélules, étape par étape.', cta: 'Lire le guide', href: '/how-to-use/' },
      { eyebrow: 'Guide', title: 'Est-il authentique ?', text: 'Six vérifications pour reconnaître un vrai shilajit.', cta: 'Lire le guide', href: `/blog/${POST_SLUGS.real.fr}/` },
    ],
  },
  es: {
    hero: { eyebrow: 'Nuestro shilajit', title: 'Puro, paciente,', accent: 'probado.', lead: 'Lo que distingue a Himalayan Drop no es un único secreto. Son muchos pasos lentos y cuidadosos, y una prueba al final.' },
    s1: { eyebrow: 'Lo que lo hace nuestro', title: 'Seis cosas que', accent: 'nunca apresuramos.' },
    features: [
      { icon: 'mountain', title: 'Más de 5.000 metros', text: 'Recogido en altas paredes de roca cerca de Skardu, Pakistán, lejos de carreteras, pueblos e industria.' },
      { icon: 'hand', title: 'Recogido a mano', text: 'Los recolectores reúnen a mano las piedras con shilajit, unas pocas cada vez.' },
      { icon: 'filter', title: 'Filtrado varias veces', text: 'Disuelto en agua pura y filtrado una y otra vez hasta que solo queda la resina.' },
      { icon: 'sun', title: 'Secado al sol hasta 60 días', text: 'Secado despacio en tarros de vidrio con protección UV dentro de cuencos de acero. Sin hornos ni atajos.' },
      { icon: 'flask', title: 'Cada lote analizado', text: 'Metales pesados, calidad general y porcentaje de ácido fúlvico, comprobados por un laboratorio.' },
      { icon: 'jar', title: 'Sellado en vidrio con protección UV', text: 'Envasado en vidrio que lo protege de la luz, de nuestras manos a las tuyas.' },
    ],
    inside: {
      eyebrow: 'Qué contiene', title: 'Lo que contiene', accent: 'el shilajit.',
      lead: 'El shilajit es un complejo natural de sustancias húmicas, minerales y compuestos orgánicos. Esto es lo que describe la investigación, y lo que medimos en el nuestro.',
      stats: [['85+', 'Minerales y oligoelementos*'], ['83,1 %', 'Ácido fúlvico, Gold Resin*'], ['5.000 m+', 'Altitud de recolección'], ['60', 'Días de secado al sol, hasta'], ['4', 'Controles de laboratorio por lote']],
      note: '*Especificación de nuestra materia prima de shilajit, confirmada en el informe de cada lote. Los valores varían de forma natural entre lotes.',
      parts: [
        { icon: 'flask', title: 'Sustancias húmicas', text: 'Los ácidos fúlvicos y húmicos forman la mayor parte del shilajit. El ácido fúlvico es el indicador de calidad más habitual, por eso lo damos como cifra.' },
        { icon: 'mountain', title: 'Minerales', text: 'Calcio, potasio y magnesio están entre los elementos principales, junto con oligoelementos como el selenio, el cromo y el cobalto.' },
        { icon: 'leaf', title: 'Compuestos orgánicos', text: 'Aminoácidos (sobre todo glicina), ácidos grasos, compuestos fenólicos como los ácidos cafeico y gálico, y dibenzo-α-pironas.' },
        { icon: 'shield', title: 'Por qué analizamos metales', text: 'Como el shilajit se forma en la roca, puede contener de forma natural plomo, cadmio, mercurio o arsénico. Cada lote se analiza frente a los límites de la UE.' },
      ],
      sourcesTitle: 'Fuentes',
      sources: refs('kamgar2025', 'wilson2011', 'stohs2014', 'saper2008', 'reg2023915'),
    },
    s2: { eyebrow: 'Elige con confianza', title: 'Qué buscar', accent: 'en cualquier shilajit.', lead: 'Seis preguntas que conviene hacer antes de comprar shilajit, y cómo las respondemos.' },
    head: ['Himalayan Drop', 'Pregunta a cualquier vendedor'],
    compare: [
      ['Origen', 'Recogido a más de 5.000 m cerca de Skardu', '¿Se indica la región de recolección y a qué altitud está?'],
      ['Purificación', 'Disuelto en agua pura y filtrado varias veces', '¿Cómo se limpia y cuántas veces?'],
      ['Secado', 'Secado lento al sol hasta 60 días', '¿Se seca despacio o con calor para ahorrar tiempo?'],
      ['Análisis', 'Informe de laboratorio de cada lote', '¿Puedes ver el informe de tu propio lote?'],
      ['Envase', 'Vidrio con protección UV', '¿Protege el envase la resina de la luz?'],
      ['Transparencia', 'Número de lote en cada envase', '¿Puedes rastrear tu tarro hasta su lote?'],
    ],
    quote: '«El shilajit tarda siglos en formarse en la roca. Lo mínimo que podemos hacer es darle sesenta días de sol.»',
    quoteBy: 'El enfoque de Himalayan Drop',
    ctas: [
      { eyebrow: 'Pruebas', title: 'Resultados de laboratorio', text: 'Consulta el informe del número de lote de tu tarro.', cta: 'Ver resultados', href: '/lab-results/', dark: true },
      { eyebrow: 'Ritual', title: 'Modo de uso', text: 'Resina, gominolas, gotas y cápsulas, paso a paso.', cta: 'Leer la guía', href: '/how-to-use/' },
      { eyebrow: 'Guía', title: '¿Es auténtico?', text: 'Seis comprobaciones para distinguir el shilajit auténtico.', cta: 'Leer la guía', href: `/blog/${POST_SLUGS.real.es}/` },
    ],
  },
  ar: {
    hero: { eyebrow: 'الشيلاجيت لدينا', title: 'نقي، متأنٍّ،', accent: 'ومُثبت.', lead: 'ما يميز Himalayan Drop ليس سراً واحداً، بل خطوات كثيرة بطيئة ومتأنية، وإثبات في النهاية.' },
    s1: { eyebrow: 'ما يجعله مميزاً', title: 'ستة أشياء', accent: 'لا نستعجلها أبداً.' },
    features: [
      { icon: 'mountain', title: 'فوق 5000 متر', text: 'يُجمع من واجهات صخرية عالية قرب سكردو في باكستان، بعيداً عن الطرق والمدن والصناعة.' },
      { icon: 'hand', title: 'جمع يدوي', text: 'يجمع العمال الأحجار الحاملة للشيلاجيت بأيديهم، قليلاً في كل مرة.' },
      { icon: 'filter', title: 'مُصفّى عدة مرات', text: 'يُذاب في ماء نقي ويُصفّى مراراً حتى لا يبقى سوى الراتنج.' },
      { icon: 'sun', title: 'تجفيف بالشمس حتى 60 يوماً', text: 'يجف ببطء في أوانٍ زجاجية محمية من الأشعة داخل أوعية فولاذية. بلا أفران وبلا اختصارات.' },
      { icon: 'flask', title: 'فحص كل دفعة', text: 'المعادن الثقيلة والجودة العامة ونسبة حمض الفولفيك، يفحصها مختبر.' },
      { icon: 'jar', title: 'محفوظ في زجاج محمي', text: 'معبأ في زجاج يحميه من الضوء، من أيدينا إلى يديك.' },
    ],
    inside: {
      eyebrow: 'المكونات', title: 'مما يتكوّن', accent: 'الشيلاجيت.',
      lead: 'الشيلاجيت مركّب طبيعي من المواد الدبالية والمعادن والمركبات العضوية. هذا ما تصفه الأبحاث، وما نقيسه في منتجنا.',
      stats: [['+85', 'معدناً وعنصراً نادراً*'], ['83.1%', 'حمض الفولفيك، الراتنج الذهبي*'], ['+5,000 م', 'ارتفاع الجمع'], ['60', 'يوماً من التجفيف بالشمس، حتى'], ['4', 'فحوص مخبرية لكل دفعة']],
      note: '*مواصفات مادة الشيلاجيت الخام لدينا، مؤكدة في تقرير كل دفعة. تختلف القيم طبيعياً بين الدفعات.',
      parts: [
        { icon: 'flask', title: 'المواد الدبالية', text: 'يشكّل حمضا الفولفيك والهيوميك الجزء الأكبر من الشيلاجيت. حمض الفولفيك هو مؤشر الجودة الأكثر شيوعاً، ولذلك نذكره رقماً.' },
        { icon: 'mountain', title: 'المعادن', text: 'الكالسيوم والبوتاسيوم والمغنيسيوم من أهم العناصر، إلى جانب عناصر نادرة مثل السيلينيوم والكروم والكوبالت.' },
        { icon: 'leaf', title: 'المركبات العضوية', text: 'أحماض أمينية (أبرزها الجلايسين)، وأحماض دهنية، ومركبات فينولية مثل حمض الكافيك والغاليك، والديبنزو-ألفا-بيرونات.' },
        { icon: 'shield', title: 'لماذا نفحص المعادن', text: 'لأن الشيلاجيت يتكوّن في الصخور، فقد يحتوي طبيعياً على الرصاص أو الكادميوم أو الزئبق أو الزرنيخ. تُفحص كل دفعة وفق الحدود الأوروبية.' },
      ],
      sourcesTitle: 'المصادر',
      sources: refs('kamgar2025', 'wilson2011', 'stohs2014', 'saper2008', 'reg2023915'),
    },
    s2: { eyebrow: 'اختر بثقة', title: 'ما الذي تبحث عنه', accent: 'في أي شيلاجيت.', lead: 'ستة أسئلة تستحق أن تطرحها قبل شراء الشيلاجيت، وكيف نجيب عنها.' },
    head: ['Himalayan Drop', 'اسأل أي بائع'],
    compare: [
      ['المصدر', 'يُجمع فوق 5000 متر قرب سكردو', 'هل منطقة الجمع محددة، وما ارتفاعها؟'],
      ['التنقية', 'يُذاب في ماء نقي ويُصفّى عدة مرات', 'كيف يُنظّف، وكم مرة؟'],
      ['التجفيف', 'تجفيف بطيء بالشمس حتى 60 يوماً', 'هل يُجفف ببطء، أم بالحرارة لتوفير الوقت؟'],
      ['الفحص', 'تقرير مخبري لكل دفعة', 'هل يمكنك رؤية تقرير دفعتك تحديداً؟'],
      ['التغليف', 'زجاج محمي من الأشعة فوق البنفسجية', 'هل يحمي التغليف الراتنج من الضوء؟'],
      ['الشفافية', 'رقم دفعة على كل عبوة', 'هل يمكنك تتبع عبوتك حتى دفعتها؟'],
    ],
    quote: '«يحتاج الشيلاجيت قروناً ليتكوّن في الصخر. أقل ما يمكننا فعله أن نمنحه ستين يوماً تحت الشمس.»',
    quoteBy: 'نهج Himalayan Drop',
    ctas: [
      { eyebrow: 'الإثبات', title: 'نتائج المختبر', text: 'اعثر على تقرير رقم الدفعة المدون على عبوتك.', cta: 'عرض النتائج', href: '/lab-results/', dark: true },
      { eyebrow: 'الطقس', title: 'طريقة الاستخدام', text: 'الراتنج والعلكات والقطرات والكبسولات، خطوة بخطوة.', cta: 'اقرأ الدليل', href: '/how-to-use/' },
      { eyebrow: 'دليل', title: 'هل هو أصلي؟', text: 'ستة فحوص لتمييز الشيلاجيت الأصلي.', cta: 'اقرأ الدليل', href: `/blog/${POST_SLUGS.real.ar}/` },
    ],
  },
  ur: {
    hero: { eyebrow: 'ہمارا سلاجیت', title: 'خالص، صبر سے تیار،', accent: 'ثابت شدہ۔', lead: 'Himalayan Drop کی انفرادیت کوئی ایک راز نہیں، بلکہ بہت سے آہستہ اور محتاط مراحل اور آخر میں ثبوت ہے۔' },
    s1: { eyebrow: 'اسے ہمارا کیا بناتا ہے', title: 'چھ چیزیں جن میں ہم', accent: 'کبھی جلدی نہیں کرتے۔' },
    features: [
      { icon: 'mountain', title: '5,000 میٹر سے بلند', text: 'اسکردو، پاکستان کے قریب اونچی چٹانوں سے حاصل، سڑکوں، شہروں اور صنعت سے دور۔' },
      { icon: 'hand', title: 'ہاتھ سے چنا گیا', text: 'چننے والے سلاجیت والے پتھر ہاتھ سے، تھوڑے تھوڑے کر کے جمع کرتے ہیں۔' },
      { icon: 'filter', title: 'کئی بار فلٹر', text: 'خالص پانی میں حل کر کے بار بار چھانا جاتا ہے یہاں تک کہ صرف ریزن رہ جائے۔' },
      { icon: 'sun', title: '60 دن تک دھوپ میں خشک', text: 'اسٹیل کے پیالوں میں رکھے UV سے محفوظ شیشے کے برتنوں میں آہستہ خشک۔ نہ اوون، نہ شارٹ کٹ۔' },
      { icon: 'flask', title: 'ہر بیچ کا ٹیسٹ', text: 'بھاری دھاتیں، مجموعی معیار اور فلوک ایسڈ کی فیصد، لیبارٹری سے جانچ۔' },
      { icon: 'jar', title: 'UV سے محفوظ شیشے میں بند', text: 'روشنی سے محفوظ شیشے میں پیک، ہمارے ہاتھوں سے آپ تک۔' },
    ],
    inside: {
      eyebrow: 'اس میں کیا ہے', title: 'سلاجیت میں', accent: 'کیا ہوتا ہے۔',
      lead: 'سلاجیت ہیومک مادوں، معدنیات اور نامیاتی مرکبات کا قدرتی مجموعہ ہے۔ تحقیق یہ بتاتی ہے، اور ہم اپنے سلاجیت میں یہی ناپتے ہیں۔',
      stats: [['85+', 'معدنیات اور ٹریس عناصر*'], ['83.1%', 'فلوک ایسڈ، گولڈ ریزن*'], ['5,000 م+', 'چناؤ کی بلندی'], ['60', 'دن تک دھوپ میں خشک'], ['4', 'ہر بیچ کے لیب ٹیسٹ']],
      note: '*ہمارے خام سلاجیت کی تفصیلات، ہر بیچ کی رپورٹ میں تصدیق شدہ۔ مقداریں بیچ کے حساب سے قدرتی طور پر مختلف ہوتی ہیں۔',
      parts: [
        { icon: 'flask', title: 'ہیومک مادے', text: 'فلوک اور ہیومک ایسڈ سلاجیت کا سب سے بڑا حصہ ہیں۔ فلوک ایسڈ معیار کی سب سے عام نشانی ہے، اسی لیے ہم اسے عدد میں بتاتے ہیں۔' },
        { icon: 'mountain', title: 'معدنیات', text: 'کیلشیم، پوٹاشیم اور میگنیشیم اہم عناصر ہیں، ساتھ ہی سیلینیم، کرومیم اور کوبالٹ جیسے ٹریس عناصر۔' },
        { icon: 'leaf', title: 'نامیاتی مرکبات', text: 'امائنو ایسڈز (زیادہ تر گلائسین)، فیٹی ایسڈز، کیفک اور گیلک ایسڈ جیسے فینولک مرکبات، اور ڈائی بینزو الفا پائرونز۔' },
        { icon: 'shield', title: 'ہم دھاتوں کا ٹیسٹ کیوں کرتے ہیں', text: 'چونکہ سلاجیت چٹان میں بنتا ہے، اس میں قدرتی طور پر سیسہ، کیڈمیم، پارہ یا سنکھیا ہو سکتا ہے۔ ہر بیچ یورپی حدود کے مطابق ٹیسٹ ہوتا ہے۔' },
      ],
      sourcesTitle: 'حوالہ جات',
      sources: refs('kamgar2025', 'wilson2011', 'stohs2014', 'saper2008', 'reg2023915'),
    },
    s2: { eyebrow: 'اعتماد سے انتخاب کریں', title: 'کسی بھی سلاجیت میں', accent: 'کیا دیکھیں۔', lead: 'سلاجیت خریدنے سے پہلے پوچھنے کے چھ سوال، اور ہمارے جوابات۔' },
    head: ['Himalayan Drop', 'ہر بیچنے والے سے پوچھیں'],
    compare: [
      ['ماخذ', 'اسکردو کے قریب 5,000 میٹر سے بلند سے حاصل', 'کیا علاقے کا نام بتایا گیا ہے، اور بلندی کتنی ہے؟'],
      ['صفائی', 'خالص پانی میں حل اور کئی بار فلٹر', 'اسے کیسے اور کتنی بار صاف کیا جاتا ہے؟'],
      ['خشک کرنا', '60 دن تک دھوپ میں آہستہ خشک', 'کیا یہ آہستہ خشک ہوتا ہے، یا وقت بچانے کے لیے آنچ پر؟'],
      ['ٹیسٹ', 'ہر بیچ کی لیب رپورٹ', 'کیا آپ اپنے بیچ کی رپورٹ دیکھ سکتے ہیں؟'],
      ['پیکنگ', 'UV سے محفوظ شیشہ', 'کیا پیکنگ ریزن کو روشنی سے بچاتی ہے؟'],
      ['شفافیت', 'ہر پیک پر بیچ نمبر', 'کیا آپ اپنے برتن کا بیچ تک سراغ لگا سکتے ہیں؟'],
    ],
    quote: '«سلاجیت کو چٹان میں بننے میں صدیاں لگتی ہیں۔ کم از کم ہم اسے ساٹھ دن کی دھوپ تو دے سکتے ہیں۔»',
    quoteBy: 'Himalayan Drop کا انداز',
    ctas: [
      { eyebrow: 'ثبوت', title: 'لیب رپورٹس', text: 'اپنے برتن کے بیچ نمبر کی رپورٹ دیکھیں۔', cta: 'لیب رپورٹس دیکھیں', href: '/lab-results/', dark: true },
      { eyebrow: 'معمول', title: 'استعمال کا طریقہ', text: 'ریزن، گمیز، ڈراپس اور کیپسول، مرحلہ وار۔', cta: 'رہنمائی پڑھیں', href: '/how-to-use/' },
      { eyebrow: 'رہنمائی', title: 'کیا یہ اصلی ہے؟', text: 'اصلی سلاجیت پہچاننے کی چھ جانچیں۔', cta: 'رہنمائی پڑھیں', href: `/blog/${POST_SLUGS.real.ur}/` },
    ],
  },
};

export default function OurShilajitView({ lang }) {
  const t = tr(T, lang);
  return (
    <>
      <PageHero {...t.hero} />

      <Reveal as="section" className="section">
        <div className="container">
          <SectionHead {...t.s1} />
          <FeatureGrid items={t.features} />
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top" id="whats-inside">
        <div className="container">
          <SectionHead eyebrow={t.inside.eyebrow} title={t.inside.title} accent={t.inside.accent} lead={t.inside.lead} />
          <div className="stat-band" data-reveal>
            <svg className="stat-lines" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
              <path d="M0 200 L160 110 L230 150 L380 40 L500 130 L560 100 L720 170 L820 120 L1000 180 L1200 140" fill="none" stroke="#cca25e" strokeWidth="1.2" />
            </svg>
            <dl>
              {t.inside.stats.map(([v, l]) => (
                <div key={l}><dt>{v}</dt><dd>{l}</dd></div>
              ))}
            </dl>
          </div>
          <p className="stat-note">{t.inside.note}</p>
          <div className="inside-grid" data-reveal="stagger">
            {t.inside.parts.map((x) => (
              <div className="inside-item" key={x.title}>
                <span className="feature-icon"><Icon name={x.icon} size={22} /></span>
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </div>
            ))}
          </div>
          <Sources items={t.inside.sources} title={t.inside.sourcesTitle} id="inside-sources" />
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <SectionHead {...t.s2} />
          <div className="compare" data-reveal>
            <div className="compare-head">
              <span />
              <span className="ours"><img src="/images/logo-mark.png" alt="" width="22" height="27" /> {t.head[0]}</span>
              <span>{t.head[1]}</span>
            </div>
            {t.compare.map(([k, ours, ask]) => (
              <div className="compare-row" key={k}>
                <span className="compare-k">{k}</span>
                <span className="ours"><Icon name="shield" size={16} /> {ours}</span>
                <span className="ask">{ask}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <div className="quote-band" data-reveal>
            <svg viewBox="0 0 220 60" width="160" height="44" fill="none" stroke="#cca25e" strokeWidth="1.4" aria-hidden="true"><path d="M0 58 L52 22 L70 34 L104 4 L136 36 L152 26 L220 58" /></svg>
            <p>{t.quote}</p>
            <span>{t.quoteBy}</span>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <CtaCards items={t.ctas} />
        </div>
      </Reveal>
    </>
  );
}
