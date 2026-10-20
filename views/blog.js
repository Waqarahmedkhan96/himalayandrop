import PageHero from '@/components/PageHero';
import BlogIndex from '@/components/BlogIndex';
import { getArticles } from '@/lib/shopify';
import { pageMeta } from '@/lib/seo';
import { tr } from '@/lib/i18n';

export const meta = (lang) => pageMeta('blog', lang, '/blog/');

const T = {
  en: { eyebrow: 'The journal', title: 'Notes from', accent: 'the mountains.', lead: 'Guides on origin, quality and the daily ritual. Read, then choose with confidence.' },
  da: { eyebrow: 'Journalen', title: 'Noter fra', accent: 'bjergene.', lead: 'Guides om oprindelse, kvalitet og det daglige ritual. Læs, og vælg med ro i maven.' },
  de: { eyebrow: 'Das Journal', title: 'Notizen aus', accent: 'den Bergen.', lead: 'Ratgeber zu Herkunft, Qualität und dem täglichen Ritual. Lesen, dann mit Sicherheit wählen.' },
  fr: { eyebrow: 'Le journal', title: 'Notes venues', accent: 'des montagnes.', lead: 'Des guides sur l’origine, la qualité et le rituel quotidien. Lisez, puis choisissez en confiance.' },
  es: { eyebrow: 'El journal', title: 'Notas desde', accent: 'las montañas.', lead: 'Guías sobre origen, calidad y el ritual diario. Lee y elige con confianza.' },
  ar: { eyebrow: 'المدونة', title: 'ملاحظات من', accent: 'الجبال.', lead: 'أدلة عن المصدر والجودة والطقس اليومي. اقرأ ثم اختر بثقة.' },
  ur: { eyebrow: 'بلاگ', title: 'پہاڑوں سے', accent: 'نوٹس۔', lead: 'ماخذ، معیار اور روزمرہ معمول پر رہنمائی۔ پڑھیں اور اعتماد سے انتخاب کریں۔' },
};

export default async function BlogView({ lang }) {
  const t = tr(T, lang);
  const posts = await getArticles(lang);
  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} accent={t.accent} lead={t.lead} />
      <section className="section blog-section">
        <div className="container">
          <BlogIndex posts={posts} />
        </div>
      </section>
    </>
  );
}
