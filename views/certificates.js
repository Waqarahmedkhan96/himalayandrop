import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Link from '@/components/LLink';
import { getSeals, Seal } from '@/components/Seal';
import { CtaCards, Notice } from '@/components/Blocks';
import { pageMeta } from '@/lib/seo';
import { tr } from '@/lib/i18n';

export const meta = (lang) => pageMeta('certificates', lang, '/certificates/');

// Replace `file` with a link to each certificate PDF. Remove any you do not hold.
const T = {
  en: {
    hero: { eyebrow: 'Certificates', title: 'Standards you', accent: 'can check.', lead: 'The quality systems we produce under, the tests every batch passes, and the promise behind every jar.' },
    details: {
      gmp: { title: 'GMP certified', text: 'Good Manufacturing Practice: production follows documented, hygienic and consistent procedures, checked by audit.', file: null },
      iso22000: { title: 'ISO 22000', text: 'An international standard for food safety management, covering every step from raw material to packing.', file: null },
      iso9001: { title: 'ISO 9001', text: 'An international standard for quality management: clear processes, traceability and continuous improvement.', file: null },
      metals: { title: 'Heavy metals tested', text: 'Every batch is tested by an independent laboratory for lead, cadmium, mercury and arsenic.', file: '/lab-results/' },
      guarantee: { title: '60-day guarantee', text: 'Not satisfied? Contact us within 60 days of delivery and we refund your purchase.', file: '/policies/refund-policy/' },
    },
    view: 'View certificate', more: 'Learn more', onRequest: 'Certificate on request', notice: 'Certificate PDFs can be requested through our contact page.',
    ctas: [
      { eyebrow: 'Every batch', title: 'Lab results', text: 'Look up the report for your jar.', cta: 'See lab results', href: '/lab-results/', dark: true },
      { eyebrow: 'Process', title: 'Our shilajit', text: 'Origin, purification and drying.', cta: 'Learn more', href: '/our-shilajit/' },
      { eyebrow: 'Help', title: 'Request a certificate', text: 'We’ll email the PDF you need.', cta: 'Contact us', href: '/contact/' },
    ],
  },
  da: {
    hero: { eyebrow: 'Certifikater', title: 'Standarder, du', accent: 'kan tjekke.', lead: 'Kvalitetssystemerne vi producerer under, testene hver batch består, og løftet bag hver krukke.' },
    details: {
      gmp: { title: 'GMP-certificeret', text: 'God fremstillingspraksis: produktionen følger dokumenterede, hygiejniske og ensartede procedurer, kontrolleret ved audit.', file: null },
      iso22000: { title: 'ISO 22000', text: 'En international standard for ledelse af fødevaresikkerhed, der dækker hvert trin fra råvare til pakning.', file: null },
      iso9001: { title: 'ISO 9001', text: 'En international standard for kvalitetsledelse: klare processer, sporbarhed og løbende forbedring.', file: null },
      metals: { title: 'Testet for tungmetaller', text: 'Hver batch testes af et uafhængigt laboratorium for bly, cadmium, kviksølv og arsen.', file: '/lab-results/' },
      guarantee: { title: '60 dages garanti', text: 'Ikke tilfreds? Kontakt os inden for 60 dage efter levering, så refunderer vi dit køb.', file: '/policies/refund-policy/' },
    },
    view: 'Se certifikatet', more: 'Læs mere', onRequest: 'Certifikat på forespørgsel', notice: 'Certifikater som PDF kan bestilles via vores kontaktside.',
    ctas: [
      { eyebrow: 'Hver batch', title: 'Laboratorieresultater', text: 'Find rapporten for din krukke.', cta: 'Se resultaterne', href: '/lab-results/', dark: true },
      { eyebrow: 'Proces', title: 'Vores shilajit', text: 'Oprindelse, rensning og tørring.', cta: 'Læs mere', href: '/our-shilajit/' },
      { eyebrow: 'Hjælp', title: 'Bestil et certifikat', text: 'Vi mailer den PDF, du har brug for.', cta: 'Kontakt os', href: '/contact/' },
    ],
  },
  de: {
    hero: { eyebrow: 'Zertifikate', title: 'Standards, die du', accent: 'prüfen kannst.', lead: 'Die Qualitätssysteme, nach denen wir herstellen, die Prüfungen jeder Charge und das Versprechen hinter jedem Glas.' },
    details: {
      gmp: { title: 'GMP-zertifiziert', text: 'Gute Herstellungspraxis: Die Produktion folgt dokumentierten, hygienischen und gleichbleibenden Abläufen, kontrolliert durch Audits.', file: null },
      iso22000: { title: 'ISO 22000', text: 'Internationaler Standard für Lebensmittelsicherheits-Management, vom Rohstoff bis zur Abfüllung.', file: null },
      iso9001: { title: 'ISO 9001', text: 'Internationaler Standard für Qualitätsmanagement: klare Abläufe, Rückverfolgbarkeit und stetige Verbesserung.', file: null },
      metals: { title: 'Auf Schwermetalle geprüft', text: 'Jede Charge wird von einem unabhängigen Labor auf Blei, Cadmium, Quecksilber und Arsen geprüft.', file: '/lab-results/' },
      guarantee: { title: '60 Tage Garantie', text: 'Nicht zufrieden? Melde dich innerhalb von 60 Tagen nach Lieferung und wir erstatten deinen Kauf.', file: '/policies/refund-policy/' },
    },
    view: 'Zertifikat ansehen', more: 'Mehr erfahren', onRequest: 'Zertifikat auf Anfrage', notice: 'Zertifikate als PDF kannst du über unsere Kontaktseite anfordern.',
    ctas: [
      { eyebrow: 'Jede Charge', title: 'Laborergebnisse', text: 'Finde den Bericht zu deinem Glas.', cta: 'Laborergebnisse ansehen', href: '/lab-results/', dark: true },
      { eyebrow: 'Prozess', title: 'Unser Shilajit', text: 'Herkunft, Reinigung und Trocknung.', cta: 'Mehr erfahren', href: '/our-shilajit/' },
      { eyebrow: 'Hilfe', title: 'Zertifikat anfordern', text: 'Wir senden dir das benötigte PDF per E-Mail.', cta: 'Kontakt', href: '/contact/' },
    ],
  },
  fr: {
    hero: { eyebrow: 'Certificats', title: 'Des normes', accent: 'vérifiables.', lead: 'Les systèmes qualité de notre production, les tests réussis par chaque lot et la promesse derrière chaque pot.' },
    details: {
      gmp: { title: 'Certifié GMP', text: 'Bonnes pratiques de fabrication : une production qui suit des procédures documentées, hygiéniques et constantes, contrôlées par audit.', file: null },
      iso22000: { title: 'ISO 22000', text: 'Norme internationale de management de la sécurité des aliments, de la matière première au conditionnement.', file: null },
      iso9001: { title: 'ISO 9001', text: 'Norme internationale de management de la qualité : processus clairs, traçabilité et amélioration continue.', file: null },
      metals: { title: 'Métaux lourds testés', text: 'Chaque lot est testé par un laboratoire indépendant pour le plomb, le cadmium, le mercure et l’arsenic.', file: '/lab-results/' },
      guarantee: { title: 'Garantie 60 jours', text: 'Pas satisfait ? Contactez-nous dans les 60 jours suivant la livraison et nous vous remboursons.', file: '/policies/refund-policy/' },
    },
    view: 'Voir le certificat', more: 'En savoir plus', onRequest: 'Certificat sur demande', notice: 'Les certificats en PDF peuvent être demandés via notre page contact.',
    ctas: [
      { eyebrow: 'Chaque lot', title: 'Résultats de laboratoire', text: 'Consultez le rapport de votre pot.', cta: 'Voir les résultats', href: '/lab-results/', dark: true },
      { eyebrow: 'Processus', title: 'Notre shilajit', text: 'Origine, purification et séchage.', cta: 'En savoir plus', href: '/our-shilajit/' },
      { eyebrow: 'Aide', title: 'Demander un certificat', text: 'Nous vous enverrons le PDF par e-mail.', cta: 'Nous contacter', href: '/contact/' },
    ],
  },
  es: {
    hero: { eyebrow: 'Certificados', title: 'Estándares que', accent: 'puedes comprobar.', lead: 'Los sistemas de calidad con los que producimos, los análisis que supera cada lote y la promesa detrás de cada tarro.' },
    details: {
      gmp: { title: 'Certificado GMP', text: 'Buenas prácticas de fabricación: la producción sigue procedimientos documentados, higiénicos y constantes, verificados por auditoría.', file: null },
      iso22000: { title: 'ISO 22000', text: 'Norma internacional de gestión de la seguridad alimentaria, desde la materia prima hasta el envasado.', file: null },
      iso9001: { title: 'ISO 9001', text: 'Norma internacional de gestión de la calidad: procesos claros, trazabilidad y mejora continua.', file: null },
      metals: { title: 'Metales pesados analizados', text: 'Un laboratorio independiente analiza cada lote en plomo, cadmio, mercurio y arsénico.', file: '/lab-results/' },
      guarantee: { title: 'Garantía de 60 días', text: '¿No estás satisfecho? Escríbenos en los 60 días siguientes a la entrega y te devolvemos el dinero.', file: '/policies/refund-policy/' },
    },
    view: 'Ver certificado', more: 'Saber más', onRequest: 'Certificado a petición', notice: 'Puedes pedir los certificados en PDF a través de nuestra página de contacto.',
    ctas: [
      { eyebrow: 'Cada lote', title: 'Resultados de laboratorio', text: 'Consulta el informe de tu tarro.', cta: 'Ver resultados', href: '/lab-results/', dark: true },
      { eyebrow: 'Proceso', title: 'Nuestro shilajit', text: 'Origen, purificación y secado.', cta: 'Saber más', href: '/our-shilajit/' },
      { eyebrow: 'Ayuda', title: 'Pedir un certificado', text: 'Te enviamos por correo el PDF que necesites.', cta: 'Contacto', href: '/contact/' },
    ],
  },
  ar: {
    hero: { eyebrow: 'الشهادات', title: 'معايير يمكنك', accent: 'التحقق منها.', lead: 'أنظمة الجودة التي ننتج وفقها، والفحوص التي تجتازها كل دفعة، والوعد خلف كل عبوة.' },
    details: {
      gmp: { title: 'معتمد GMP', text: 'ممارسات التصنيع الجيدة: إنتاج يتبع إجراءات موثقة وصحية وثابتة، تخضع للتدقيق.', file: null },
      iso22000: { title: 'ISO 22000', text: 'معيار دولي لإدارة سلامة الغذاء، يغطي كل خطوة من المادة الخام إلى التعبئة.', file: null },
      iso9001: { title: 'ISO 9001', text: 'معيار دولي لإدارة الجودة: عمليات واضحة وتتبع وتحسين مستمر.', file: null },
      metals: { title: 'مفحوص للمعادن الثقيلة', text: 'يفحص مختبر مستقل كل دفعة للرصاص والكادميوم والزئبق والزرنيخ.', file: '/lab-results/' },
      guarantee: { title: 'ضمان 60 يوماً', text: 'غير راضٍ؟ تواصل معنا خلال 60 يوماً من الاستلام وسنعيد لك المبلغ.', file: '/policies/refund-policy/' },
    },
    view: 'عرض الشهادة', more: 'اعرف المزيد', onRequest: 'الشهادة عند الطلب', notice: 'يمكن طلب الشهادات بصيغة PDF عبر صفحة التواصل.',
    ctas: [
      { eyebrow: 'كل دفعة', title: 'نتائج المختبر', text: 'اعثر على تقرير عبوتك.', cta: 'عرض النتائج', href: '/lab-results/', dark: true },
      { eyebrow: 'مراحل الإنتاج', title: 'الشيلاجيت لدينا', text: 'المصدر والتنقية والتجفيف.', cta: 'اعرف المزيد', href: '/our-shilajit/' },
      { eyebrow: 'المساعدة', title: 'اطلب شهادة', text: 'سنرسل لك ملف PDF الذي تحتاجه.', cta: 'اتصل بنا', href: '/contact/' },
    ],
  },
  ur: {
    hero: { eyebrow: 'سرٹیفکیٹس', title: 'ایسے معیار جنہیں آپ', accent: 'جانچ سکتے ہیں۔', lead: 'وہ معیاری نظام جن کے تحت ہم تیار کرتے ہیں، ہر بیچ کے ٹیسٹ اور ہر برتن کے پیچھے ہمارا وعدہ۔' },
    details: {
      gmp: { title: 'GMP سرٹیفائیڈ', text: 'گڈ مینوفیکچرنگ پریکٹس: پیداوار دستاویزی، صاف ستھرے اور یکساں طریقوں سے، آڈٹ کے ذریعے جانچی جاتی ہے۔', file: null },
      iso22000: { title: 'ISO 22000', text: 'فوڈ سیفٹی مینجمنٹ کا بین الاقوامی معیار، خام مال سے پیکنگ تک ہر مرحلے کے لیے۔', file: null },
      iso9001: { title: 'ISO 9001', text: 'کوالٹی مینجمنٹ کا بین الاقوامی معیار: واضح طریقہ کار، ٹریس ایبلٹی اور مسلسل بہتری۔', file: null },
      metals: { title: 'بھاری دھاتوں کا ٹیسٹ', text: 'ہر بیچ ایک آزاد لیبارٹری میں سیسے، کیڈمیم، پارے اور سنکھیا کے لیے ٹیسٹ ہوتا ہے۔', file: '/lab-results/' },
      guarantee: { title: '60 دن کی گارنٹی', text: 'مطمئن نہیں؟ ترسیل کے 60 دن کے اندر رابطہ کریں اور ہم رقم واپس کر دیں گے۔', file: '/policies/refund-policy/' },
    },
    view: 'سرٹیفکیٹ دیکھیں', more: 'مزید جانیں', onRequest: 'سرٹیفکیٹ درخواست پر', notice: 'سرٹیفکیٹس کی PDF ہمارے رابطہ صفحے سے منگوائی جا سکتی ہے۔',
    ctas: [
      { eyebrow: 'ہر بیچ', title: 'لیب رپورٹس', text: 'اپنے برتن کی رپورٹ دیکھیں۔', cta: 'لیب رپورٹس دیکھیں', href: '/lab-results/', dark: true },
      { eyebrow: 'طریقہ', title: 'ہمارا سلاجیت', text: 'ماخذ، صفائی اور خشک کرنا۔', cta: 'مزید جانیں', href: '/our-shilajit/' },
      { eyebrow: 'مدد', title: 'سرٹیفکیٹ منگوائیں', text: 'ہم آپ کو مطلوبہ PDF ای میل کر دیں گے۔', cta: 'رابطہ کریں', href: '/contact/' },
    ],
  },
};

export default function CertificatesView({ lang }) {
  const t = tr(T, lang);
  const seals = getSeals(lang);
  return (
    <>
      <PageHero {...t.hero} />
      <Reveal as="section" className="section tight-top">
        <div className="container">
          <div className="cert-grid" data-reveal="stagger">
            {seals.map((s) => {
              const d = t.details[s.id];
              return (
                <article className="cert-item" key={s.id}>
                  <div className="cert-seal"><Seal s={s} prefix="cp" /></div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  {d.file ? (
                    <Link className="btn small outline" href={d.file}>{d.file.endsWith('.pdf') ? t.view : t.more}</Link>
                  ) : (
                    <span className="btn small outline is-static">{t.onRequest}</span>
                  )}
                </article>
              );
            })}
          </div>
          <Notice>{t.notice}</Notice>
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
