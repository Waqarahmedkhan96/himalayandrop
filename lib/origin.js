// Where each resin is harvested. The Skardu Collection (Premium Skardu, and every other format) is
// harvested above 5,000 m in Skardu with 83.1 % fulvic acid. The Himalayan Collection (the burgundy
// Himalayan Gold Edition resin) is harvested at 3,500 m with 71.3 % fulvic acid. The text for the
// Himalayan product is written once for Skardu and adjusted here, in every language.

export const HIMALAYAN = ['shilajit-gold-resin'];
export const isHimalayan = (handle) => HIMALAYAN.includes(handle);
export const FULVIC = { default: 83.1, himalayan: 71.3 };
export const fulvicOf = (handle) => (isHimalayan(handle) ? FULVIC.himalayan : FULVIC.default);

// Name of the place and of the collection, per language.
const PLACE = { en: 'the Himalayas', da: 'Himalaya', de: 'dem Himalaya', fr: 'l’Himalaya', es: 'el Himalaya', ar: 'الهيمالايا' };
const SHORT = { en: 'Himalayas', da: 'Himalaya', de: 'Himalaya', fr: 'Himalaya', es: 'Himalaya', ar: 'الهيمالايا' };
const PLACE_BARE = { en: 'Himalayan', da: 'Himalaya', de: 'Himalaya', fr: 'Himalaya', es: 'Himalaya', ar: 'الهيمالايا' };

// Ordered: specific phrases first, then the numbers, then the bare place name.
const STEPS = (lang) => [
  [/The Skardu Collection/g, 'The Himalayan Collection'],
  [/Skardu-kollektionen/g, 'Himalaya-kollektionen'],
  [/Die Skardu-Kollektion/g, 'Die Himalaya-Kollektion'],
  [/La collection Skardu/g, 'La collection Himalaya'],
  [/La colección Skardu/g, 'La colección Himalaya'],
  [/مجموعة سكردو/g, 'مجموعة الهيمالايا'],
  [/Premium Skardu/g, 'Himalayan Gold Edition'],
  [/· Skardu/g, `· ${SHORT[lang]}`],
  [/Skardu origin/g, 'Himalayan origin'],
  [/Fra Skardu/g, 'Fra Himalaya'],
  [/Herkunft Skardu/g, 'Herkunft Himalaya'],
  [/(?:Skardu|سكردو|سكاردو|سکردو)(?:،|,)? (?:in |i |en |à |au |im |في )?(?:Pakistan|Pakistán|باكستان)(?:(?:،|,)? (?:the )?(?:gateway to K2|porten til K2|dem Tor zum K2|la porte du K2|la puerta al K2|بوابة K2))?/g, PLACE[lang]],
  [/(?:the )?(?:gateway to K2|porten til K2|dem Tor zum K2|la porte du K2|la puerta al K2)/g, ''],
  [/83([.,])1/g, '71$13'],
  [/\b5([.,   ]?)000\b/g, '3$1500'],
  [/Skardu|سكردو|سكاردو|سکردو/g, PLACE[lang]],
];

export function localizeOrigin(value, lang = 'en') {
  const steps = STEPS(lang in PLACE ? lang : 'en');
  const walk = (v) => {
    if (typeof v === 'string') return steps.reduce((s, [re, to]) => s.replace(re, to), v).replace(/ ,/g, ',').replace(/,,/g, ',').replace(/\s{2,}/g, ' ');
    if (Array.isArray(v)) return v.map(walk);
    if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)]));
    return v;
  };
  return walk(value);
}
export const bareOrigin = (lang) => PLACE_BARE[lang] || PLACE_BARE.en;
