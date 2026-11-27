// The benefit cards of the "One mountain, four rituals" section.
// Every card has a gold icon (public/images/benefits) and a short line in
// each language. Resin uses five icons drawn for it; Capsules, Gummies and
// Drops use the icon sets from the product labels.
//
// Wording: shilajit lines say "traditionally used" or "early research";
// the zinc and selenium lines follow the wording of the EU authorised
// claims. Both still need a check by a regulatory adviser before launch.

const L = ['en', 'da', 'de', 'fr', 'es', 'ar'];
const I = (img, titles, texts) => ({
  img: `/images/benefits/${img}`,
  text: Object.fromEntries(L.map((l, i) => [l, [titles[i], texts[i]]])),
});

const A = {
  // Resin (drawn for it)
  vitality: I('r-vitality.svg',
    ['Boost vitality', 'Styrk vitaliteten', 'Vitalität stärken', 'Booster la vitalité', 'Impulsa la vitalidad', 'تعزيز الحيوية'],
    ['Traditionally used to support everyday vitality.', 'Traditionelt brugt til at understøtte den daglige vitalitet.', 'Traditionell zur Unterstützung der täglichen Vitalität verwendet.', 'Traditionnellement utilisé pour soutenir la vitalité au quotidien.', 'Usado tradicionalmente para apoyar la vitalidad diaria.', 'يُستخدم تقليدياً لدعم الحيوية اليومية.']),
  energy: I('r-energy.svg',
    ['Improve energy', 'Mere energi', 'Energie verbessern', 'Améliorer l’énergie', 'Mejora la energía', 'تحسين الطاقة'],
    ['Traditionally taken to support energy and stamina.', 'Traditionelt taget for at understøtte energi og udholdenhed.', 'Traditionell zur Unterstützung von Energie und Ausdauer eingenommen.', 'Traditionnellement pris pour soutenir l’énergie et l’endurance.', 'Tomado tradicionalmente para apoyar la energía y la resistencia.', 'يُتناول تقليدياً لدعم الطاقة والقدرة على التحمّل.']),
  sleep: I('r-sleep.svg',
    ['Better sleep', 'Bedre søvn', 'Besserer Schlaf', 'Meilleur sommeil', 'Mejor sueño', 'نوم أفضل'],
    ['Traditionally used to support a calm, restful night.', 'Traditionelt brugt til at understøtte en rolig nattesøvn.', 'Traditionell für eine ruhige, erholsame Nacht verwendet.', 'Traditionnellement utilisé pour soutenir une nuit calme et reposante.', 'Usado tradicionalmente para apoyar una noche tranquila y reparadora.', 'يُستخدم تقليدياً لدعم ليلة هادئة ومريحة.']),
  male: I('r-male.svg',
    ['Male fertility and testosterone', 'Mandlig fertilitet og testosteron', 'Männliche Fruchtbarkeit und Testosteron', 'Fertilité masculine et testostérone', 'Fertilidad masculina y testosterona', 'الخصوبة الذكورية والتستوستيرون'],
    ['Early studies looked at testosterone levels and fertility in men.', 'Tidlige studier har set på testosteron og fertilitet hos mænd.', 'Frühe Studien untersuchten Testosteronspiegel und Fruchtbarkeit bei Männern.', 'Les premières études ont porté sur la testostérone et la fertilité chez l’homme.', 'Los primeros estudios analizaron la testosterona y la fertilidad en hombres.', 'نظرت دراسات أولية في مستويات التستوستيرون والخصوبة لدى الرجال.']),
  brain: I('r-brain.svg',
    ['Brain health and cognition', 'Hjernesundhed og kognition', 'Gehirngesundheit und Kognition', 'Santé du cerveau et cognition', 'Salud cerebral y cognición', 'صحة الدماغ والإدراك'],
    ['Early research on fulvic acid, focus and the ageing brain.', 'Tidlig forskning i fulvinsyre, fokus og hjernens aldring.', 'Frühe Forschung zu Fulvinsäure, Fokus und dem alternden Gehirn.', 'Premières recherches sur l’acide fulvique, la concentration et le cerveau vieillissant.', 'Primeras investigaciones sobre el ácido fúlvico, el enfoque y el cerebro que envejece.', 'أبحاث أولية حول حمض الفولفيك والتركيز والدماغ مع التقدم في العمر.']),

  // Sheet icons (capsules, gummies)
  immune: I('immune.webp',
    ['Immune function', 'Immunfunktion', 'Immunfunktion', 'Fonction immunitaire', 'Función inmunitaria', 'وظيفة المناعة'],
    ['Zinc and selenium contribute to the normal function of the immune system.', 'Zink og selen bidrager til et normalt immunforsvar.', 'Zink und Selen tragen zu einer normalen Funktion des Immunsystems bei.', 'Le zinc et le sélénium contribuent à une fonction immunitaire normale.', 'El zinc y el selenio contribuyen al funcionamiento normal del sistema inmunitario.', 'يساهم الزنك والسيلينيوم في الأداء الطبيعي لجهاز المناعة.']),
  cognitive: I('cognitive.webp',
    ['Cognitive function', 'Kognitiv funktion', 'Kognitive Funktion', 'Fonction cognitive', 'Función cognitiva', 'الوظيفة الإدراكية'],
    ['Zinc contributes to normal cognitive function.', 'Zink bidrager til normal kognitiv funktion.', 'Zink trägt zu einer normalen kognitiven Funktion bei.', 'Le zinc contribue à une fonction cognitive normale.', 'El zinc contribuye a la función cognitiva normal.', 'يساهم الزنك في الوظيفة الإدراكية الطبيعية.']),
  nutrient: I('nutrient.webp',
    ['Nutrient metabolism', 'Næringsstofomsætning', 'Nährstoffstoffwechsel', 'Métabolisme des nutriments', 'Metabolismo de nutrientes', 'استقلاب العناصر الغذائية'],
    ['Zinc contributes to normal macronutrient metabolism.', 'Zink bidrager til en normal omsætning af makronæringsstoffer.', 'Zink trägt zu einem normalen Stoffwechsel der Makronährstoffe bei.', 'Le zinc contribue au métabolisme normal des macronutriments.', 'El zinc contribuye al metabolismo normal de los macronutrientes.', 'يساهم الزنك في الاستقلاب الطبيعي للمغذيات الكبرى.']),
  thyroid: I('thyroid.webp',
    ['Thyroid function', 'Skjoldbruskkirtlens funktion', 'Schilddrüsenfunktion', 'Fonction thyroïdienne', 'Función tiroidea', 'وظيفة الغدة الدرقية'],
    ['Selenium contributes to normal thyroid function.', 'Selen bidrager til en normal skjoldbruskkirtelfunktion.', 'Selen trägt zu einer normalen Schilddrüsenfunktion bei.', 'Le sélénium contribue à une fonction thyroïdienne normale.', 'El selenio contribuye al funcionamiento normal de la tiroides.', 'يساهم السيلينيوم في الوظيفة الطبيعية للغدة الدرقية.']),
  bone: I('bone.webp',
    ['Bone health', 'Knoglesundhed', 'Knochengesundheit', 'Santé des os', 'Salud ósea', 'صحة العظام'],
    ['Zinc contributes to the maintenance of normal bones.', 'Zink bidrager til vedligeholdelse af normale knogler.', 'Zink trägt zum Erhalt normaler Knochen bei.', 'Le zinc contribue au maintien d’os normaux.', 'El zinc contribuye al mantenimiento de huesos normales.', 'يساهم الزنك في الحفاظ على صحة العظام الطبيعية.']),
  testosterone: I('testosterone.webp',
    ['Testosterone support', 'Støtte til testosteron', 'Testosteron-Unterstützung', 'Soutien à la testostérone', 'Apoyo a la testosterona', 'دعم التستوستيرون'],
    ['Zinc contributes to normal testosterone levels in the blood.', 'Zink bidrager til normale testosteronniveauer i blodet.', 'Zink trägt zu einem normalen Testosteronspiegel im Blut bei.', 'Le zinc contribue à un taux normal de testostérone dans le sang.', 'El zinc contribuye a mantener niveles normales de testosterona en sangre.', 'يساهم الزنك في الحفاظ على المستوى الطبيعي للتستوستيرون في الدم.']),
  skin: I('skin.webp',
    ['Skin', 'Hud', 'Haut', 'Peau', 'Piel', 'البشرة'],
    ['Zinc contributes to the maintenance of normal skin.', 'Zink bidrager til vedligeholdelse af normal hud.', 'Zink trägt zum Erhalt normaler Haut bei.', 'Le zinc contribue au maintien d’une peau normale.', 'El zinc contribuye al mantenimiento de la piel normal.', 'يساهم الزنك في الحفاظ على بشرة طبيعية.']),
  hair: I('hair.webp',
    ['Hair', 'Hår', 'Haare', 'Cheveux', 'Cabello', 'الشعر'],
    ['Zinc and selenium contribute to the maintenance of normal hair.', 'Zink og selen bidrager til vedligeholdelse af normalt hår.', 'Zink und Selen tragen zum Erhalt normaler Haare bei.', 'Le zinc et le sélénium contribuent au maintien de cheveux normaux.', 'El zinc y el selenio contribuyen al mantenimiento del cabello normal.', 'يساهم الزنك والسيلينيوم في الحفاظ على شعر طبيعي.']),
  nails: I('nails.webp',
    ['Nails', 'Negle', 'Nägel', 'Ongles', 'Uñas', 'الأظافر'],
    ['Zinc and selenium contribute to the maintenance of normal nails.', 'Zink og selen bidrager til vedligeholdelse af normale negle.', 'Zink und Selen tragen zum Erhalt normaler Nägel bei.', 'Le zinc et le sélénium contribuent au maintien d’ongles normaux.', 'El zinc y el selenio contribuyen al mantenimiento de las uñas normales.', 'يساهم الزنك والسيلينيوم في الحفاظ على أظافر طبيعية.']),
  cell: I('cell.webp',
    ['Cell protection', 'Cellebeskyttelse', 'Zellschutz', 'Protection des cellules', 'Protección celular', 'حماية الخلايا'],
    ['Zinc and selenium contribute to the protection of cells from oxidative stress.', 'Zink og selen bidrager til at beskytte cellerne mod oxidativt stress.', 'Zink und Selen tragen zum Schutz der Zellen vor oxidativem Stress bei.', 'Le zinc et le sélénium contribuent à protéger les cellules contre le stress oxydatif.', 'El zinc y el selenio contribuyen a proteger las células frente al daño oxidativo.', 'يساهم الزنك والسيلينيوم في حماية الخلايا من الإجهاد التأكسدي.']),

  // Drops (badges from the Élan drops label)
  higherEnergy: I('bolt.webp',
    ['Higher energy', 'Mere energi', 'Mehr Energie', 'Plus d’énergie', 'Más energía', 'طاقة أعلى'],
    ['Traditionally taken to support energy and drive.', 'Traditionelt taget for at understøtte energi og gå-på-mod.', 'Traditionell zur Unterstützung von Energie und Antrieb eingenommen.', 'Traditionnellement pris pour soutenir l’énergie et la motivation.', 'Tomado tradicionalmente para apoyar la energía y el impulso.', 'يُتناول تقليدياً لدعم الطاقة والحافز.']),
  stamina: I('stamina.webp',
    ['Strong stamina', 'Stærk udholdenhed', 'Starke Ausdauer', 'Endurance solide', 'Resistencia fuerte', 'قدرة تحمّل قوية'],
    ['Traditionally used to support stamina and endurance.', 'Traditionelt brugt til at understøtte udholdenhed.', 'Traditionell zur Unterstützung der Ausdauer verwendet.', 'Traditionnellement utilisé pour soutenir l’endurance.', 'Usado tradicionalmente para apoyar la resistencia.', 'يُستخدم تقليدياً لدعم القدرة على التحمّل.']),
  immuneSupport: I('shield.webp',
    ['Immune support', 'Immunforsvar', 'Immununterstützung', 'Soutien immunitaire', 'Apoyo inmunitario', 'دعم المناعة'],
    ['Zinc and selenium contribute to the normal function of the immune system.', 'Zink og selen bidrager til et normalt immunforsvar.', 'Zink und Selen tragen zu einer normalen Funktion des Immunsystems bei.', 'Le zinc et le sélénium contribuent à une fonction immunitaire normale.', 'El zinc y el selenio contribuyen al funcionamiento normal del sistema inmunitario.', 'يساهم الزنك والسيلينيوم في الأداء الطبيعي لجهاز المناعة.']),
  brainHealth: I('brain-solid.webp',
    ['Brain health', 'Hjernesundhed', 'Gehirngesundheit', 'Santé du cerveau', 'Salud cerebral', 'صحة الدماغ'],
    ['Zinc contributes to normal cognitive function.', 'Zink bidrager til normal kognitiv funktion.', 'Zink trägt zu einer normalen kognitiven Funktion bei.', 'Le zinc contribue à une fonction cognitive normale.', 'El zinc contribuye a la función cognitiva normal.', 'يساهم الزنك في الوظيفة الإدراكية الطبيعية.']),
  gut: I('gut.webp',
    ['Gut health', 'Tarmsundhed', 'Darmgesundheit', 'Santé intestinale', 'Salud intestinal', 'صحة الأمعاء'],
    ['Black seed and sea moss, traditionally used to support digestive comfort.', 'Sort kommen og søgræs, traditionelt brugt til at understøtte fordøjelsen.', 'Schwarzkümmel und Seemoos, traditionell für das Verdauungswohl verwendet.', 'Nigelle et mousse de mer, traditionnellement utilisées pour le confort digestif.', 'Comino negro y musgo marino, usados tradicionalmente para el bienestar digestivo.', 'الحبة السوداء والطحلب البحري، يُستخدمان تقليدياً لدعم راحة الهضم.']),
};

const PLAN = {
  resin: ['vitality', 'energy', 'sleep', 'male', 'brain'],
  capsules: ['immune', 'cognitive', 'nutrient', 'thyroid', 'bone', 'testosterone'],
  gummies: ['skin', 'hair', 'nails', 'immune', 'cognitive', 'cell'],
  drops: ['higherEnergy', 'stamina', 'immuneSupport', 'brainHealth', 'gut'],
};

export function benefitItems(kind, lang) {
  const i = Math.max(0, L.indexOf(lang));
  return PLAN[kind].map((k) => ({ img: A[k].img, title: A[k].text[L[i]][0], text: A[k].text[L[i]][1] }));
}
