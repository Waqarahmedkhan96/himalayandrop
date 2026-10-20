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
  de: { eyebrow: 'Bewertungen', title: 'In ihren', accent: 'eigenen Worten.', sample: 'Beispielbewertungen zur Darstellung. Echte, verifizierte Kundenbewertungen erscheinen hier nach dem Start.', real: 'Verifizierte Bewertungen von Himalayan Drop Kunden.' },
  fr: { eyebrow: 'Avis', title: 'Avec leurs', accent: 'propres mots.', sample: 'Avis d’exemple pour la mise en page. Les vrais avis clients vérifiés apparaîtront ici après le lancement.', real: 'Avis vérifiés de clients Himalayan Drop.' },
  es: { eyebrow: 'Opiniones', title: 'En sus', accent: 'propias palabras.', sample: 'Opiniones de ejemplo para el diseño. Las opiniones verificadas de clientes aparecerán aquí tras el lanzamiento.', real: 'Opiniones verificadas de clientes de Himalayan Drop.' },
  ar: { eyebrow: 'آراء العملاء', title: 'بكلماتهم', accent: 'الخاصة.', sample: 'آراء تجريبية لعرض التصميم. ستظهر آراء العملاء الحقيقية الموثقة هنا بعد الإطلاق.', real: 'آراء موثقة من عملاء Himalayan Drop.' },
  ur: { eyebrow: 'ریویوز', title: 'ان کے', accent: 'اپنے الفاظ میں۔', sample: 'ڈیزائن کے لیے نمونہ ریویوز۔ اصل تصدیق شدہ ریویوز لانچ کے بعد یہاں آئیں گے۔', real: 'Himalayan Drop کے گاہکوں کے تصدیق شدہ ریویوز۔' },
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
