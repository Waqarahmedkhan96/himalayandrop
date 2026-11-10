// Star rating line shown above the hero text and on the reviews page.
// verified:false shows a "Sample" tag next to it, as the review cards do.
// Set verified to true ONLY when the numbers come from real, verified customer
// reviews (for example Judge.me). Showing a rating that is not real is illegal
// under EU consumer law. No review schema is published for these numbers.

export const RATING = { value: 4.7, count: 570, verified: false };

export const RATING_COPY = {
  en: { reviews: 'reviews', sample: 'Sample' },
  da: { reviews: 'anmeldelser', sample: 'Eksempel' },
  de: { reviews: 'Bewertungen', sample: 'Beispiel' },
  fr: { reviews: 'avis', sample: 'Exemple' },
  es: { reviews: 'opiniones', sample: 'Ejemplo' },
  ar: { reviews: 'تقييم', sample: 'مثال' },
};
