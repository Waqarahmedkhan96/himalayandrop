'use client';
import Link from './LLink';
import { useT } from './LangProvider';
import Reveal from './Reveal';
import JournalCard from './JournalCard';
import { Arrow } from './Arrow';

// "From the journal" on the homepage: the three newest articles.
const T = {
  en: { eyebrow: 'The journal', a: 'Notes from', b: 'the mountains.', all: 'All articles' },
  da: { eyebrow: 'Journalen', a: 'Noter fra', b: 'bjergene.', all: 'Alle artikler' },
  de: { eyebrow: 'Das Journal', a: 'Notizen aus', b: 'den Bergen.', all: 'Alle Artikel' },
  fr: { eyebrow: 'Le journal', a: 'Notes venues', b: 'des montagnes.', all: 'Tous les articles' },
  es: { eyebrow: 'El journal', a: 'Notas desde', b: 'las montañas.', all: 'Todos los artículos' },
  ar: { eyebrow: 'المدونة', a: 'ملاحظات من', b: 'الجبال.', all: 'جميع المقالات' },
  ur: { eyebrow: 'بلاگ', a: 'پہاڑوں سے', b: 'نوٹس۔', all: 'تمام مضامین' },
};

export default function JournalSection({ posts }) {
  const t = useT(T);
  return (
    <Reveal as="section" id="journal" className="section journal-section">
      <div className="container">
        <div className="journal-head">
          <div>
            <span className="eyebrow" data-reveal>{t.eyebrow}</span>
            <h2 data-reveal="lines">
              <span className="line"><span>{t.a} <em className="gold-text">{t.b}</em></span></span>
            </h2>
          </div>
          <Link href="/blog/" className="btn ghost small journal-all" data-reveal>
            {t.all} <Arrow size={14} />
          </Link>
        </div>
        <div className="journal-grid" data-reveal="stagger">
          {posts.slice(0, 3).map((p) => (
            <JournalCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
