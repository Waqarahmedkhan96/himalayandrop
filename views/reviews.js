import WallReviews from '@/components/WallReviews';
import { getReviews } from '@/lib/reviews';
import { pageMeta } from '@/lib/seo';

export const meta = (lang) => pageMeta('reviews', lang, '/reviews/');

// No review schema is added while reviews are samples: publishing invented
// ratings to search engines is against Google's rules and EU law.
export default function ReviewsView({ lang }) {
  return <WallReviews reviews={getReviews(lang)} />;
}
