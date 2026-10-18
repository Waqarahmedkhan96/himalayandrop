import PageHero from '@/components/PageHero';
import ReviewCard from '@/components/ReviewCard';
import Reveal from '@/components/Reveal';
import { reviews } from '@/lib/reviews';

export const metadata = {
  title: 'Reviews · Himalayan Drop',
  description: 'What customers say about Himalayan Drop shilajit.',
};

export default function ReviewsPage() {
  const isSample = reviews.some((r) => r.sample);
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="In their"
        accent="own words."
        lead={isSample ? 'Sample reviews shown for layout. Real, verified customer reviews appear here after launch.' : 'Verified reviews from Himalayan Drop customers.'}
      />
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
