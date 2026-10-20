import PageHero from '@/components/PageHero';
import ReviewCard from '@/components/ReviewCard';
import Reveal from '@/components/Reveal';
import { getReviews } from '@/lib/reviews';
import { pageMeta } from '@/lib/seo';
import { tr } from '@/lib/i18n';

export const meta = (lang) => pageMeta('reviews', lang, '/reviews/');

const T = {
  en: { eyebrow: 'Reviews', title: 'In their', accent: 'own words.', sample: 'Sample reviews shown for layout. Real, verified customer reviews appear here after launch.', real: 'Verified reviews from Himalayan Drop customers.' },
  da: { eyebrow: 'Anmeldelser', title: 'Med deres', accent: 'egne ord.', sample: 'Eksempler på anmeldelser vist til layout. Rigtige, verificerede kundeanmeldelser vises her efter lanceringen.', real: 'Verificerede anmeldelser fra Himalayan Drops kunder.' },
};

// No review schema is added while reviews are samples: publishing invented
// ratings to search engines is against Google's rules and EU law.
export default function ReviewsView({ lang }) {
  const t = tr(T, lang);
  const reviews = getReviews(lang);
  const isSample = reviews.some((r) => r.sample);
  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} accent={t.accent} lead={isSample ? t.sample : t.real} />
      <Reveal as="section" className="section">
        <div className="container">
          <div className="reviews-grid" data-reveal="stagger">
            {reviews.map((r, i) => (
              <ReviewCard key={i} r={r} />
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
}
