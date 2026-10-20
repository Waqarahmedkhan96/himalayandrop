'use client';
// Shown if something unexpected goes wrong while rendering a page.
import Link from './LLink';
import { useLang } from './LangProvider';
import { Arrow } from './Arrow';

const T = {
  en: { eyebrow: 'Something went wrong', h: 'A small slip', hg: 'on the trail.', p: 'This page could not load properly. Please try again; if it keeps happening, let us know.', retry: 'Try again', home: 'Back to home' },
  da: { eyebrow: 'Noget gik galt', h: 'Et lille fejltrin', hg: 'på stien.', p: 'Siden kunne ikke indlæses korrekt. Prøv igen; sker det igen, så skriv til os.', retry: 'Prøv igen', home: 'Til forsiden' },
  de: { eyebrow: 'Etwas ist schiefgelaufen', h: 'Ein kleiner Ausrutscher', hg: 'auf dem Weg.', p: 'Diese Seite konnte nicht richtig geladen werden. Bitte versuche es erneut; wenn es weiter passiert, sag uns Bescheid.', retry: 'Erneut versuchen', home: 'Zur Startseite' },
  fr: { eyebrow: 'Un problème est survenu', h: 'Un petit faux pas', hg: 'sur le sentier.', p: 'Cette page n’a pas pu se charger correctement. Réessayez ; si le problème persiste, prévenez-nous.', retry: 'Réessayer', home: 'Retour à l’accueil' },
  es: { eyebrow: 'Algo ha salido mal', h: 'Un pequeño tropiezo', hg: 'en el sendero.', p: 'Esta página no se ha podido cargar bien. Inténtalo de nuevo; si sigue pasando, avísanos.', retry: 'Reintentar', home: 'Volver al inicio' },
  ar: { eyebrow: 'حدث خطأ ما', h: 'تعثّر بسيط', hg: 'على الطريق.', p: 'تعذّر تحميل هذه الصفحة بشكل صحيح. يرجى المحاولة مرة أخرى، وإن تكرر الأمر فأخبرنا.', retry: 'حاول مجدداً', home: 'العودة إلى الرئيسية' },
  ur: { eyebrow: 'کچھ غلط ہو گیا', h: 'راستے میں', hg: 'ایک چھوٹی سی لغزش۔', p: 'یہ صفحہ درست طریقے سے لوڈ نہیں ہو سکا۔ دوبارہ کوشش کریں؛ اگر مسئلہ برقرار رہے تو ہمیں بتائیں۔', retry: 'دوبارہ کوشش کریں', home: 'ہوم پر واپس جائیں' },
};

export default function ErrorView({ reset }) {
  const t = T[useLang()] || T.en;
  return (
    <section className="page-hero nf">
      <div className="page-hero-card nf-card">
        <span className="eyebrow">{t.eyebrow}</span>
        <h1>{t.h} <em className="gold-text">{t.hg}</em></h1>
        <p>{t.p}</p>
        <div className="hero-ctas">
          <button type="button" className="btn gold" onClick={() => reset()}>{t.retry} <Arrow /></button>
          <Link href="/" className="btn ghost">{t.home}</Link>
        </div>
      </div>
    </section>
  );
}
