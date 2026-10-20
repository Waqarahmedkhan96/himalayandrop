import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import BatchLookup from '@/components/BatchLookup';
import { SectionHead, FeatureGrid, CtaCards } from '@/components/Blocks';
import { pageMeta } from '@/lib/seo';
import { POST_SLUGS } from '@/lib/postSlugs';
import { tr } from '@/lib/i18n';

export const meta = (lang) => pageMeta('lab-results', lang, '/lab-results/');

const T = {
  en: {
    hero: { eyebrow: 'Lab results', title: 'Proof for', accent: 'every batch.', lead: 'Every batch is tested before it reaches you. Enter the batch number from the bottom of your jar to see its report.' },
    s: { eyebrow: 'What we test', title: 'Four checks,', accent: 'every time.' },
    tests: [
      { icon: 'shield', title: 'Heavy metals', text: 'Lead, cadmium, mercury and arsenic, each reported against its legal limit.' },
      { icon: 'flask', title: 'Fulvic acid %', text: 'The fulvic acid percentage of every batch is measured and printed on the report.' },
      { icon: 'leaf', title: 'Microbiology', text: 'Bacteria, yeasts and moulds, to confirm clean handling and packing.' },
      { icon: 'star', title: 'Overall quality', text: 'Identity and purity checks before a batch is released for sale.' },
    ],
    find: 'Where to find it', findH: 'Your batch number is on the bottom of the jar.', findP: 'It starts with HD. Can’t find it, or need the full certificate as a PDF? Write to us and we’ll send it.',
    ctas: [
      { eyebrow: 'Standards', title: 'Certificates', text: 'The quality standards we produce and test to.', cta: 'See certificates', href: '/certificates/', dark: true },
      { eyebrow: 'Guide', title: 'Read a lab report', text: 'What heavy metal limits and results actually mean.', cta: 'Read the guide', href: '/blog/how-to-read-a-certificate-of-analysis/' },
      { eyebrow: 'Help', title: 'Request a report', text: 'Send us your batch number and we’ll email the PDF.', cta: 'Contact us', href: '/contact/' },
    ],
  },
  da: {
    hero: { eyebrow: 'Laboratorieresultater', title: 'Bevis for', accent: 'hver batch.', lead: 'Hver batch testes, før den når frem til dig. Indtast batchnummeret fra bunden af din krukke og se rapporten.' },
    s: { eyebrow: 'Det tester vi', title: 'Fire tjek,', accent: 'hver gang.' },
    tests: [
      { icon: 'shield', title: 'Tungmetaller', text: 'Bly, cadmium, kviksølv og arsen, hver især målt mod den lovlige grænseværdi.' },
      { icon: 'flask', title: 'Fulvinsyre %', text: 'Indholdet af fulvinsyre måles i hver batch og står i rapporten.' },
      { icon: 'leaf', title: 'Mikrobiologi', text: 'Bakterier, gær og skimmel, så vi ved, at håndtering og pakning er hygiejnisk.' },
      { icon: 'star', title: 'Samlet kvalitet', text: 'Kontrol af identitet og renhed, før en batch frigives til salg.' },
    ],
    find: 'Her finder du det', findH: 'Dit batchnummer står i bunden af krukken.', findP: 'Det starter med HD. Kan du ikke finde det, eller vil du have hele certifikatet som PDF? Skriv til os, så sender vi det.',
    ctas: [
      { eyebrow: 'Standarder', title: 'Certifikater', text: 'Kvalitetsstandarderne, vi producerer og tester efter.', cta: 'Se certifikaterne', href: '/certificates/', dark: true },
      { eyebrow: 'Guide', title: 'Læs en analyserapport', text: 'Hvad grænseværdier og resultater for tungmetaller betyder.', cta: 'Læs guiden', href: '/blog/saadan-laeser-du-en-analyserapport/' },
      { eyebrow: 'Hjælp', title: 'Bestil en rapport', text: 'Send os dit batchnummer, så mailer vi PDF’en.', cta: 'Kontakt os', href: '/contact/' },
    ],
  },
  de: {
    hero: { eyebrow: 'Laborergebnisse', title: 'Ein Beweis für', accent: 'jede Charge.', lead: 'Jede Charge wird geprüft, bevor sie dich erreicht. Gib die Chargennummer vom Boden deines Glases ein und sieh den Bericht.' },
    s: { eyebrow: 'Was wir prüfen', title: 'Vier Prüfungen,', accent: 'jedes Mal.' },
    tests: [
      { icon: 'shield', title: 'Schwermetalle', text: 'Blei, Cadmium, Quecksilber und Arsen, jeweils im Vergleich zum gesetzlichen Grenzwert.' },
      { icon: 'flask', title: 'Fulvinsäure %', text: 'Der Fulvinsäure-Anteil jeder Charge wird gemessen und im Bericht angegeben.' },
      { icon: 'leaf', title: 'Mikrobiologie', text: 'Bakterien, Hefen und Schimmelpilze, als Nachweis sauberer Verarbeitung und Abfüllung.' },
      { icon: 'star', title: 'Gesamtqualität', text: 'Identitäts- und Reinheitsprüfungen, bevor eine Charge in den Verkauf geht.' },
    ],
    find: 'Wo du sie findest', findH: 'Deine Chargennummer steht auf dem Boden des Glases.', findP: 'Sie beginnt mit HD. Nicht gefunden oder brauchst du das vollständige Zertifikat als PDF? Schreib uns, wir schicken es dir.',
    ctas: [
      { eyebrow: 'Standards', title: 'Zertifikate', text: 'Die Qualitätsstandards, nach denen wir herstellen und prüfen.', cta: 'Zertifikate ansehen', href: '/certificates/', dark: true },
      { eyebrow: 'Ratgeber', title: 'Einen Laborbericht lesen', text: 'Was Grenzwerte und Ergebnisse für Schwermetalle bedeuten.', cta: 'Ratgeber lesen', href: `/blog/${POST_SLUGS.coa.de}/` },
      { eyebrow: 'Hilfe', title: 'Bericht anfordern', text: 'Schick uns deine Chargennummer, wir senden das PDF per E-Mail.', cta: 'Kontakt', href: '/contact/' },
    ],
  },
  fr: {
    hero: { eyebrow: 'Résultats de laboratoire', title: 'La preuve pour', accent: 'chaque lot.', lead: 'Chaque lot est testé avant de vous parvenir. Saisissez le numéro de lot inscrit sous votre pot pour voir son rapport.' },
    s: { eyebrow: 'Ce que nous testons', title: 'Quatre contrôles,', accent: 'à chaque fois.' },
    tests: [
      { icon: 'shield', title: 'Métaux lourds', text: 'Plomb, cadmium, mercure et arsenic, chacun comparé à sa limite réglementaire.' },
      { icon: 'flask', title: 'Acide fulvique %', text: 'Le taux d’acide fulvique de chaque lot est mesuré et indiqué dans le rapport.' },
      { icon: 'leaf', title: 'Microbiologie', text: 'Bactéries, levures et moisissures, pour confirmer une manipulation et un conditionnement propres.' },
      { icon: 'star', title: 'Qualité globale', text: 'Contrôles d’identité et de pureté avant la mise en vente d’un lot.' },
    ],
    find: 'Où le trouver', findH: 'Votre numéro de lot se trouve sous le pot.', findP: 'Il commence par HD. Vous ne le trouvez pas, ou vous voulez le certificat complet en PDF ? Écrivez-nous et nous vous l’enverrons.',
    ctas: [
      { eyebrow: 'Normes', title: 'Certificats', text: 'Les normes de qualité de notre production et de nos tests.', cta: 'Voir les certificats', href: '/certificates/', dark: true },
      { eyebrow: 'Guide', title: 'Lire un rapport de laboratoire', text: 'Ce que signifient vraiment les limites et résultats pour les métaux lourds.', cta: 'Lire le guide', href: `/blog/${POST_SLUGS.coa.fr}/` },
      { eyebrow: 'Aide', title: 'Demander un rapport', text: 'Envoyez-nous votre numéro de lot, nous vous enverrons le PDF.', cta: 'Nous contacter', href: '/contact/' },
    ],
  },
  es: {
    hero: { eyebrow: 'Resultados de laboratorio', title: 'Pruebas de', accent: 'cada lote.', lead: 'Cada lote se analiza antes de llegar a ti. Introduce el número de lote de la base del tarro para ver su informe.' },
    s: { eyebrow: 'Qué analizamos', title: 'Cuatro controles,', accent: 'siempre.' },
    tests: [
      { icon: 'shield', title: 'Metales pesados', text: 'Plomo, cadmio, mercurio y arsénico, cada uno frente a su límite legal.' },
      { icon: 'flask', title: 'Ácido fúlvico %', text: 'El porcentaje de ácido fúlvico de cada lote se mide y figura en el informe.' },
      { icon: 'leaf', title: 'Microbiología', text: 'Bacterias, levaduras y mohos, para confirmar una manipulación y un envasado limpios.' },
      { icon: 'star', title: 'Calidad general', text: 'Controles de identidad y pureza antes de poner un lote a la venta.' },
    ],
    find: 'Dónde encontrarlo', findH: 'Tu número de lote está en la base del tarro.', findP: 'Empieza por HD. ¿No lo encuentras o necesitas el certificado completo en PDF? Escríbenos y te lo enviamos.',
    ctas: [
      { eyebrow: 'Estándares', title: 'Certificados', text: 'Las normas de calidad con las que producimos y analizamos.', cta: 'Ver certificados', href: '/certificates/', dark: true },
      { eyebrow: 'Guía', title: 'Leer un informe de laboratorio', text: 'Qué significan de verdad los límites y resultados de metales pesados.', cta: 'Leer la guía', href: `/blog/${POST_SLUGS.coa.es}/` },
      { eyebrow: 'Ayuda', title: 'Pedir un informe', text: 'Envíanos tu número de lote y te mandamos el PDF.', cta: 'Contacto', href: '/contact/' },
    ],
  },
  ar: {
    hero: { eyebrow: 'نتائج المختبر', title: 'إثبات', accent: 'لكل دفعة.', lead: 'تُفحص كل دفعة قبل أن تصلك. أدخل رقم الدفعة الموجود أسفل عبوتك لعرض تقريرها.' },
    s: { eyebrow: 'ماذا نفحص', title: 'أربعة فحوص،', accent: 'في كل مرة.' },
    tests: [
      { icon: 'shield', title: 'المعادن الثقيلة', text: 'الرصاص والكادميوم والزئبق والزرنيخ، كلٌّ مقارنة بحده القانوني.' },
      { icon: 'flask', title: 'نسبة حمض الفولفيك', text: 'تُقاس نسبة حمض الفولفيك في كل دفعة وتُذكر في التقرير.' },
      { icon: 'leaf', title: 'الميكروبيولوجيا', text: 'البكتيريا والخمائر والعفن، للتأكد من نظافة المعالجة والتعبئة.' },
      { icon: 'star', title: 'الجودة العامة', text: 'فحوص الهوية والنقاء قبل طرح الدفعة للبيع.' },
    ],
    find: 'أين تجده', findH: 'رقم الدفعة موجود أسفل العبوة.', findP: 'يبدأ بـ HD. لم تجده، أو تحتاج الشهادة كاملة بصيغة PDF؟ راسلنا وسنرسلها إليك.',
    ctas: [
      { eyebrow: 'المعايير', title: 'الشهادات', text: 'معايير الجودة التي ننتج ونفحص وفقها.', cta: 'عرض الشهادات', href: '/certificates/', dark: true },
      { eyebrow: 'دليل', title: 'اقرأ التقرير المخبري', text: 'ماذا تعني حدود ونتائج المعادن الثقيلة فعلاً.', cta: 'اقرأ الدليل', href: `/blog/${POST_SLUGS.coa.ar}/` },
      { eyebrow: 'المساعدة', title: 'اطلب تقريراً', text: 'أرسل لنا رقم دفعتك وسنرسل لك ملف PDF.', cta: 'اتصل بنا', href: '/contact/' },
    ],
  },
  ur: {
    hero: { eyebrow: 'لیب رپورٹس', title: 'ہر بیچ کا', accent: 'ثبوت۔', lead: 'ہر بیچ آپ تک پہنچنے سے پہلے ٹیسٹ ہوتا ہے۔ اپنے برتن کے نیچے درج بیچ نمبر لکھیں اور اس کی رپورٹ دیکھیں۔' },
    s: { eyebrow: 'ہم کیا ٹیسٹ کرتے ہیں', title: 'چار جانچیں،', accent: 'ہر بار۔' },
    tests: [
      { icon: 'shield', title: 'بھاری دھاتیں', text: 'سیسہ، کیڈمیم، پارہ اور سنکھیا، ہر ایک اپنی قانونی حد کے مقابلے میں۔' },
      { icon: 'flask', title: 'فلوک ایسڈ %', text: 'ہر بیچ میں فلوک ایسڈ کی فیصد ناپی جاتی ہے اور رپورٹ میں درج ہوتی ہے۔' },
      { icon: 'leaf', title: 'مائیکروبیالوجی', text: 'بیکٹیریا، خمیر اور پھپھوندی، صاف تیاری اور پیکنگ کی تصدیق کے لیے۔' },
      { icon: 'star', title: 'مجموعی معیار', text: 'بیچ کو فروخت کے لیے جاری کرنے سے پہلے شناخت اور خالص پن کی جانچ۔' },
    ],
    find: 'یہ کہاں ملے گا', findH: 'آپ کا بیچ نمبر برتن کے نیچے درج ہے۔', findP: 'یہ HD سے شروع ہوتا ہے۔ نہیں ملا، یا مکمل سرٹیفکیٹ PDF میں چاہیے؟ ہمیں لکھیں، ہم بھیج دیں گے۔',
    ctas: [
      { eyebrow: 'معیار', title: 'سرٹیفکیٹس', text: 'وہ معیار جن پر ہم تیار اور ٹیسٹ کرتے ہیں۔', cta: 'سرٹیفکیٹس دیکھیں', href: '/certificates/', dark: true },
      { eyebrow: 'رہنمائی', title: 'لیب رپورٹ پڑھیں', text: 'بھاری دھاتوں کی حدود اور نتائج کا اصل مطلب۔', cta: 'رہنمائی پڑھیں', href: `/blog/${POST_SLUGS.coa.ur}/` },
      { eyebrow: 'مدد', title: 'رپورٹ منگوائیں', text: 'اپنا بیچ نمبر بھیجیں، ہم PDF ای میل کر دیں گے۔', cta: 'رابطہ کریں', href: '/contact/' },
    ],
  },
};

export default function LabResultsView({ lang }) {
  const t = tr(T, lang);
  return (
    <>
      <PageHero {...t.hero} />

      <Reveal as="section" className="section tight-top">
        <div className="container narrow" data-reveal>
          <BatchLookup />
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <SectionHead {...t.s} />
          <FeatureGrid items={t.tests} />
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <div className="find-batch" data-reveal>
            <div className="find-batch-art" aria-hidden="true">
              <svg viewBox="0 0 220 160">
                <ellipse cx="110" cy="80" rx="96" ry="64" fill="#40010a" />
                <ellipse cx="110" cy="80" rx="80" ry="52" fill="none" stroke="#cca25e" strokeDasharray="3 5" />
                <rect x="58" y="62" width="104" height="36" rx="8" fill="#f7f1e8" />
                <text x="110" y="85" textAnchor="middle" fontFamily="Manrope Variable, Manrope, sans-serif" fontWeight="800" fontSize="15" fill="#580f1b" letterSpacing="1.5">HD-G-2611</text>
              </svg>
            </div>
            <div>
              <span className="eyebrow">{t.find}</span>
              <h3>{t.findH}</h3>
              <p>{t.findP}</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <CtaCards items={t.ctas} />
        </div>
      </Reveal>
    </>
  );
}
