'use client';
// Shown if something unexpected goes wrong while rendering a page.
import Link from './LLink';
import { useLang } from './LangProvider';
import { Arrow } from './Arrow';

const T = {
  en: { eyebrow: 'Something went wrong', h: 'A small slip', hg: 'on the trail.', p: 'This page could not load properly. Please try again; if it keeps happening, let us know.', retry: 'Try again', home: 'Back to home' },
  da: { eyebrow: 'Noget gik galt', h: 'Et lille fejltrin', hg: 'på stien.', p: 'Siden kunne ikke indlæses korrekt. Prøv igen; sker det igen, så skriv til os.', retry: 'Prøv igen', home: 'Til forsiden' },
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
