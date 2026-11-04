import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Process from '@/components/Process';
import { CtaCards } from '@/components/Blocks';
import { pageMeta } from '@/lib/seo';
import { tr } from '@/lib/i18n';

export const meta = (lang) => pageMeta('process', lang, '/process/');

const T = {
  en: {
    hero: { eyebrow: 'The process', title: 'Slow by', accent: 'design.', lead: 'Hand-collected high in the Himalayas, then filtered, sun-dried, tested and sealed in glass.' },
    ctas: [
      { eyebrow: 'Proof', title: 'Lab results', text: 'Look up the report for your batch.', cta: 'Read the results', href: '/lab-results/', dark: true },
      { eyebrow: 'Origin', title: 'Our shilajit', text: 'Where it comes from and what sets it apart.', cta: 'Learn more', href: '/our-shilajit/' },
      { eyebrow: 'Shop', title: 'Begin your ritual', text: 'Resin, gummies, drops or capsules.', cta: 'Shop now', href: '/shop/' },
    ],
  },
  da: {
    hero: { eyebrow: 'Processen', title: 'Langsom', accent: 'med vilje.', lead: 'Håndsamlet højt i Himalaya, derefter filtreret, soltørret, testet og forseglet i glas.' },
    ctas: [
      { eyebrow: 'Bevis', title: 'Laboratorieresultater', text: 'Find rapporten for din batch.', cta: 'Se resultaterne', href: '/lab-results/', dark: true },
      { eyebrow: 'Oprindelse', title: 'Vores shilajit', text: 'Hvor den kommer fra, og hvad der gør den unik.', cta: 'Læs mere', href: '/our-shilajit/' },
      { eyebrow: 'Shop', title: 'Begynd dit ritual', text: 'Resin, vingummi, dråber eller kapsler.', cta: 'Shop nu', href: '/shop/' },
    ],
  },
  de: {
    hero: { eyebrow: 'Der Prozess', title: 'Langsam,', accent: 'mit Absicht.', lead: 'Von Hand hoch im Himalaya gesammelt, dann gefiltert, sonnengetrocknet, geprüft und in Glas versiegelt.' },
    ctas: [
      { eyebrow: 'Beweis', title: 'Laborergebnisse', text: 'Finde den Bericht für deine Charge.', cta: 'Ergebnisse ansehen', href: '/lab-results/', dark: true },
      { eyebrow: 'Ursprung', title: 'Unser Shilajit', text: 'Woher es kommt und was es besonders macht.', cta: 'Mehr erfahren', href: '/our-shilajit/' },
      { eyebrow: 'Shop', title: 'Beginne dein Ritual', text: 'Resin, Fruchtgummis, Tropfen oder Kapseln.', cta: 'Jetzt kaufen', href: '/shop/' },
    ],
  },
  fr: {
    hero: { eyebrow: 'Le processus', title: 'Lent,', accent: 'par choix.', lead: 'Récolté à la main en haute montagne, puis filtré, séché au soleil, testé et scellé en verre.' },
    ctas: [
      { eyebrow: 'Preuve', title: 'Résultats de laboratoire', text: 'Retrouvez le rapport de votre lot.', cta: 'Voir les résultats', href: '/lab-results/', dark: true },
      { eyebrow: 'Origine', title: 'Notre shilajit', text: 'D’où il vient et ce qui le distingue.', cta: 'En savoir plus', href: '/our-shilajit/' },
      { eyebrow: 'Boutique', title: 'Commencez votre rituel', text: 'Résine, gommes, gouttes ou gélules.', cta: 'Acheter', href: '/shop/' },
    ],
  },
  es: {
    hero: { eyebrow: 'El proceso', title: 'Lento,', accent: 'a propósito.', lead: 'Recolectado a mano en lo alto del Himalaya, luego filtrado, secado al sol, analizado y sellado en vidrio.' },
    ctas: [
      { eyebrow: 'Prueba', title: 'Resultados de laboratorio', text: 'Consulta el informe de tu lote.', cta: 'Ver resultados', href: '/lab-results/', dark: true },
      { eyebrow: 'Origen', title: 'Nuestro shilajit', text: 'De dónde viene y qué lo distingue.', cta: 'Saber más', href: '/our-shilajit/' },
      { eyebrow: 'Tienda', title: 'Empieza tu ritual', text: 'Resina, gominolas, gotas o cápsulas.', cta: 'Comprar', href: '/shop/' },
    ],
  },
  ar: {
    hero: { eyebrow: 'مراحل الإنتاج', title: 'بطيء', accent: 'عن قصد.', lead: 'يُجمع يدوياً في أعالي الهيمالايا، ثم يُرشَّح ويُجفَّف بالشمس ويُفحص ويُغلق في الزجاج.' },
    ctas: [
      { eyebrow: 'الإثبات', title: 'نتائج المختبر', text: 'ابحث عن تقرير دفعتك.', cta: 'اقرأ النتائج', href: '/lab-results/', dark: true },
      { eyebrow: 'المصدر', title: 'الشيلاجيت لدينا', text: 'من أين يأتي وما الذي يميّزه.', cta: 'اعرف المزيد', href: '/our-shilajit/' },
      { eyebrow: 'المتجر', title: 'ابدأ طقسك', text: 'راتنج أو علكات أو قطرات أو كبسولات.', cta: 'تسوّق الآن', href: '/shop/' },
    ],
  },
  ur: {
    hero: { eyebrow: 'تیاری کا طریقہ', title: 'سست رفتار', accent: 'جان بوجھ کر۔', lead: 'ہمالیہ کی بلندیوں سے ہاتھ سے جمع، پھر فلٹر، دھوپ میں خشک، ٹیسٹ اور شیشے میں بند۔' },
    ctas: [
      { eyebrow: 'ثبوت', title: 'لیب کے نتائج', text: 'اپنے بیچ کی رپورٹ دیکھیں۔', cta: 'نتائج دیکھیں', href: '/lab-results/', dark: true },
      { eyebrow: 'ماخذ', title: 'ہمارا سلاجیت', text: 'یہ کہاں سے آتا ہے اور اسے کیا منفرد بناتا ہے۔', cta: 'مزید جانیں', href: '/our-shilajit/' },
      { eyebrow: 'شاپ', title: 'اپنی رسم شروع کریں', text: 'ریزن، گمیز، ڈراپس یا کیپسول۔', cta: 'ابھی خریدیں', href: '/shop/' },
    ],
  },
};

export default function ProcessView({ lang }) {
  const t = tr(T, lang);
  return (
    <>
      <PageHero {...t.hero} />
      <Process />
      <Reveal as="section" className="section tight-top">
        <div className="container">
          <CtaCards items={t.ctas} />
        </div>
      </Reveal>
    </>
  );
}
