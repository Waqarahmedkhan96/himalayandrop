// Distributor network: countries, cities and local contact persons.
// To add a partner: add a city (and `contact` if there is a named person).
// `lat` / `lng` place the pin on the map. Street addresses, phone numbers
// and e-mails can be added per city later (address, phone, email).

export const REGIONS = [
  { id: 'europe', en: 'Europe', da: 'Europa', de: 'Europa', fr: 'Europe', es: 'Europa', ar: 'أوروبا', ur: 'یورپ' },
  { id: 'gulf', en: 'Middle East', da: 'Mellemøsten', de: 'Naher Osten', fr: 'Moyen-Orient', es: 'Oriente Medio', ar: 'الشرق الأوسط', ur: 'مشرقِ وسطیٰ' },
  { id: 'asia', en: 'South Asia', da: 'Sydasien', de: 'Südasien', fr: 'Asie du Sud', es: 'Asia del Sur', ar: 'جنوب آسيا', ur: 'جنوبی ایشیا' },
];

export const COUNTRIES = [
  {
    code: 'dk', region: 'europe', en: 'Denmark', da: 'Danmark', home: true,
    cities: [
      { en: 'Copenhagen', da: 'København', lat: 55.676, lng: 12.568 },
      { en: 'Odense', da: 'Odense', lat: 55.403, lng: 10.402 },
    ],
  },
  {
    code: 'se', region: 'europe', en: 'Sweden', da: 'Sverige',
    cities: [
      { en: 'Stockholm', da: 'Stockholm', lat: 59.329, lng: 18.069 },
      { en: 'Malmö', da: 'Malmö', lat: 55.605, lng: 13.003, contact: 'Bilal' },
    ],
  },
  {
    code: 'gb', region: 'europe', en: 'United Kingdom', da: 'Storbritannien',
    cities: [
      { en: 'Bradford', da: 'Bradford', lat: 53.795, lng: -1.759 },
      { en: 'Manchester', da: 'Manchester', lat: 53.48, lng: -2.242 },
    ],
  },
  {
    code: 'de', region: 'europe', en: 'Germany', da: 'Tyskland',
    cities: [
      { en: 'Hamburg', da: 'Hamborg', lat: 53.551, lng: 9.993 },
      { en: 'Berlin', da: 'Berlin', lat: 52.52, lng: 13.405 },
    ],
  },
  {
    code: 'pl', region: 'europe', en: 'Poland', da: 'Polen',
    cities: [{ en: 'Warsaw', da: 'Warszawa', lat: 52.23, lng: 21.012, contact: 'Piotr Gala' }],
  },
  {
    code: 'fr', region: 'europe', en: 'France', da: 'Frankrig',
    cities: [{ en: 'Paris', da: 'Paris', lat: 48.857, lng: 2.352 }],
  },
  {
    code: 'es', region: 'europe', en: 'Spain', da: 'Spanien',
    cities: [{ en: 'Barcelona', da: 'Barcelona', lat: 41.385, lng: 2.173, contact: 'Guillermo' }],
  },
  {
    code: 'pt', region: 'europe', en: 'Portugal', da: 'Portugal',
    cities: [{ en: 'Lisbon', da: 'Lissabon', lat: 38.722, lng: -9.139, contact: 'Gean' }],
  },
  {
    code: 'it', region: 'europe', en: 'Italy', da: 'Italien',
    cities: [{ en: 'Rome', da: 'Rom', lat: 41.903, lng: 12.496, contact: 'Felipe' }],
  },
  {
    code: 'ae', region: 'gulf', en: 'United Arab Emirates', da: 'De Forenede Arabiske Emirater',
    cities: [
      { en: 'Dubai (DIC)', da: 'Dubai (DIC)', lat: 25.07, lng: 55.17 },
      { en: 'Sharjah', da: 'Sharjah', lat: 25.346, lng: 55.421 },
      { en: 'Abu Dhabi', da: 'Abu Dhabi', lat: 24.453, lng: 54.377 },
      { en: 'Al Ain', da: 'Al Ain', lat: 24.207, lng: 55.744 },
    ],
  },
  {
    code: 'pk', region: 'asia', en: 'Pakistan', da: 'Pakistan', origin: true, contact: 'Iftikhar',
    cities: [
      { en: 'Skardu', da: 'Skardu', lat: 35.297, lng: 75.633, origin: true },
      { en: 'Islamabad', da: 'Islamabad', lat: 33.684, lng: 73.048 },
      { en: 'Attock City', da: 'Attock City', lat: 33.766, lng: 72.36 },
    ],
  },
];

// Country and city names in German, French, Spanish, Arabic and Urdu
// (by English name). Missing ones fall back to English.
const NAMES = {
  Denmark: ['Dänemark', 'Danemark', 'Dinamarca', 'الدنمارك', 'ڈنمارک'],
  Sweden: ['Schweden', 'Suède', 'Suecia', 'السويد', 'سویڈن'],
  'United Kingdom': ['Vereinigtes Königreich', 'Royaume-Uni', 'Reino Unido', 'المملكة المتحدة', 'برطانیہ'],
  Germany: ['Deutschland', 'Allemagne', 'Alemania', 'ألمانيا', 'جرمنی'],
  Poland: ['Polen', 'Pologne', 'Polonia', 'بولندا', 'پولینڈ'],
  France: ['Frankreich', 'France', 'Francia', 'فرنسا', 'فرانس'],
  Spain: ['Spanien', 'Espagne', 'España', 'إسبانيا', 'اسپین'],
  Portugal: ['Portugal', 'Portugal', 'Portugal', 'البرتغال', 'پرتگال'],
  Italy: ['Italien', 'Italie', 'Italia', 'إيطاليا', 'اٹلی'],
  'United Arab Emirates': ['Vereinigte Arabische Emirate', 'Émirats arabes unis', 'Emiratos Árabes Unidos', 'الإمارات العربية المتحدة', 'متحدہ عرب امارات'],
  Pakistan: ['Pakistan', 'Pakistan', 'Pakistán', 'باكستان', 'پاکستان'],
  Copenhagen: ['Kopenhagen', 'Copenhague', 'Copenhague', 'كوبنهاغن', 'کوپن ہیگن'],
  Odense: ['Odense', 'Odense', 'Odense', 'أودنسه', 'اوڈینسے'],
  Stockholm: ['Stockholm', 'Stockholm', 'Estocolmo', 'ستوكهولم', 'اسٹاک ہوم'],
  'Malmö': ['Malmö', 'Malmö', 'Malmö', 'مالمو', 'مالمو'],
  Bradford: ['Bradford', 'Bradford', 'Bradford', 'برادفورد', 'بریڈفورڈ'],
  Manchester: ['Manchester', 'Manchester', 'Mánchester', 'مانشستر', 'مانچسٹر'],
  Hamburg: ['Hamburg', 'Hambourg', 'Hamburgo', 'هامبورغ', 'ہیمبرگ'],
  Berlin: ['Berlin', 'Berlin', 'Berlín', 'برلين', 'برلن'],
  Warsaw: ['Warschau', 'Varsovie', 'Varsovia', 'وارسو', 'وارسا'],
  Paris: ['Paris', 'Paris', 'París', 'باريس', 'پیرس'],
  Barcelona: ['Barcelona', 'Barcelone', 'Barcelona', 'برشلونة', 'بارسلونا'],
  Lisbon: ['Lissabon', 'Lisbonne', 'Lisboa', 'لشبونة', 'لزبن'],
  Rome: ['Rom', 'Rome', 'Roma', 'روما', 'روم'],
  'Dubai (DIC)': ['Dubai (DIC)', 'Dubaï (DIC)', 'Dubái (DIC)', 'دبي (DIC)', 'دبئی (DIC)'],
  Sharjah: ['Schardscha', 'Charjah', 'Sharjah', 'الشارقة', 'شارجہ'],
  'Abu Dhabi': ['Abu Dhabi', 'Abou Dabi', 'Abu Dabi', 'أبوظبي', 'ابوظہبی'],
  'Al Ain': ['Al Ain', 'Al-Aïn', 'Al Ain', 'العين', 'العین'],
  Skardu: ['Skardu', 'Skardu', 'Skardu', 'سكردو', 'اسکردو'],
  Islamabad: ['Islamabad', 'Islamabad', 'Islamabad', 'إسلام آباد', 'اسلام آباد'],
  'Attock City': ['Attock', 'Attock', 'Attock', 'أتوك', 'اٹک سٹی'],
};
const MORE_LANGS = ['de', 'fr', 'es', 'ar', 'ur'];
const fillNames = (o) => MORE_LANGS.forEach((l, i) => { if (!o[l]) o[l] = NAMES[o.en]?.[i] || o.en; });
COUNTRIES.forEach((c) => { fillNames(c); c.cities.forEach(fillNames); });

// Map frame. Must match the generator of /public/images/world-dots.svg.
export const MAP = { west: -12, east: 78, north: 64, south: 18, k: Math.cos((42 * Math.PI) / 180) };

// Position of a point on the map, in % of width / height.
export function project(lat, lng) {
  const w = (MAP.east - MAP.west) * MAP.k;
  return {
    x: (((lng - MAP.west) * MAP.k) / w) * 100,
    y: ((MAP.north - lat) / (MAP.north - MAP.south)) * 100,
  };
}

// One pin per country, at the centre of its cities.
export function countryPin(c) {
  const lat = c.cities.reduce((s, x) => s + x.lat, 0) / c.cities.length;
  const lng = c.cities.reduce((s, x) => s + x.lng, 0) / c.cities.length;
  return project(lat, lng);
}

export function networkStats() {
  return {
    countries: COUNTRIES.length,
    cities: COUNTRIES.reduce((s, c) => s + c.cities.length, 0),
    contacts: new Set(COUNTRIES.flatMap((c) => [c.contact, ...c.cities.map((x) => x.contact)]).filter(Boolean)).size,
    regions: REGIONS.length,
  };
}

export const locationLabel = (c, city, lang) => `${city[lang]}, ${c[lang]}`;
