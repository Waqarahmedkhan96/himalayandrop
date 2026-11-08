// Display names for the bundles in the IM8 version (Nordic naming), plus the
// rating line shown in the hero and on product pages.
// The names are brand names, so they are the same in every language.
// Shopify bundle products keep their own titles: rename them there too.

export const IM8_NAMES = {
  'bundle-complete-collection': 'The Viking Stack',
  'bundle-summit-set': 'The Nordlys Stack',
  'bundle-daily-ritual': 'The Hygge Duo',
  'bundle-home-and-away': 'The Rejse Duo',
  'bundle-ritual-duo': 'The Skål Duo',
  'bundle-gift-of-the-mountain': 'The Valhalla Gift Box',
};
export const FLAGSHIP = 'bundle-complete-collection';
export const nameOf = (b) => IM8_NAMES[b.handle] || b.name;

// Star rating line. verified:false shows a "Sample" tag next to it, as the
// review cards do. Set verified to true ONLY when the numbers come from real,
// verified customer reviews (for example Judge.me). Showing a rating that is
// not real is illegal under EU consumer law. No review schema is published.
export const RATING = { value: 4.7, count: 570, verified: false };

export const RATING_COPY = {
  en: { reviews: 'reviews', sample: 'Sample' },
  da: { reviews: 'anmeldelser', sample: 'Eksempel' },
  de: { reviews: 'Bewertungen', sample: 'Beispiel' },
  fr: { reviews: 'avis', sample: 'Exemple' },
  es: { reviews: 'opiniones', sample: 'Ejemplo' },
  ar: { reviews: 'تقييم', sample: 'مثال' },
  ur: { reviews: 'ریویوز', sample: 'نمونہ' },
};
