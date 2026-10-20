import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';
import { pageMeta } from '@/lib/seo';
import { tr } from '@/lib/i18n';

export const meta = (lang) => pageMeta('contact', lang, '/contact/');

const T = {
  en: {
    eyebrow: 'Contact', title: 'We’re here', accent: 'to help.', lead: 'Questions about an order, a product or a lab report. Send us a message and we’ll reply by email.',
    send: 'Send a message', req: 'Fields marked * are required.',
    topics: [
      { t: 'Orders & delivery', d: 'Tracking, changes to an order, or a parcel that has not arrived.' },
      { t: 'Lab reports', d: 'Ask for the certificate of analysis for your batch number.' },
      { t: 'Returns & guarantee', d: 'Our 60-day money-back guarantee, explained step by step.' },
    ],
    dk: 'Designed in Denmark', dkText: 'Himalayan Drop is a Danish brand. We answer in English and Danish.',
  },
  da: {
    eyebrow: 'Kontakt', title: 'Vi er her', accent: 'for at hjælpe.', lead: 'Spørgsmål om en ordre, et produkt eller en laboratorierapport. Send os en besked, så svarer vi på e-mail.',
    send: 'Send en besked', req: 'Felter markeret med * skal udfyldes.',
    topics: [
      { t: 'Ordre og levering', d: 'Sporing, ændringer i en ordre eller en pakke, der ikke er kommet frem.' },
      { t: 'Laboratorierapporter', d: 'Bed om analysecertifikatet for dit batchnummer.' },
      { t: 'Returnering og garanti', d: 'Vores 60 dages penge-tilbage-garanti, forklaret trin for trin.' },
    ],
    dk: 'Designet i Danmark', dkText: 'Himalayan Drop er et dansk brand. Vi svarer på dansk og engelsk.',
  },
  de: {
    eyebrow: 'Kontakt', title: 'Wir sind', accent: 'für dich da.', lead: 'Fragen zu einer Bestellung, einem Produkt oder einem Laborbericht? Schreib uns, wir antworten per E-Mail.',
    send: 'Nachricht senden', req: 'Mit * markierte Felder sind Pflichtfelder.',
    topics: [
      { t: 'Bestellung & Lieferung', d: 'Sendungsverfolgung, Änderungen an einer Bestellung oder ein Paket, das nicht angekommen ist.' },
      { t: 'Laborberichte', d: 'Fordere das Analysezertifikat zu deiner Chargennummer an.' },
      { t: 'Rückgabe & Garantie', d: 'Unsere 60 Tage Geld-zurück-Garantie, Schritt für Schritt erklärt.' },
    ],
    dk: 'Gestaltet in Dänemark', dkText: 'Himalayan Drop ist eine dänische Marke. Wir antworten auf Deutsch, Englisch und Dänisch.',
  },
  fr: {
    eyebrow: 'Contact', title: 'Nous sommes là', accent: 'pour vous.', lead: 'Une question sur une commande, un produit ou un rapport de laboratoire ? Écrivez-nous, nous répondrons par e-mail.',
    send: 'Envoyer un message', req: 'Les champs marqués * sont obligatoires.',
    topics: [
      { t: 'Commande et livraison', d: 'Suivi, modification d’une commande ou colis non arrivé.' },
      { t: 'Rapports de laboratoire', d: 'Demandez le certificat d’analyse de votre numéro de lot.' },
      { t: 'Retours et garantie', d: 'Notre garantie satisfait ou remboursé de 60 jours, expliquée étape par étape.' },
    ],
    dk: 'Conçu au Danemark', dkText: 'Himalayan Drop est une marque danoise. Nous répondons en français, en anglais et en danois.',
  },
  es: {
    eyebrow: 'Contacto', title: 'Estamos aquí', accent: 'para ayudarte.', lead: '¿Preguntas sobre un pedido, un producto o un informe de laboratorio? Escríbenos y te responderemos por correo.',
    send: 'Enviar un mensaje', req: 'Los campos marcados con * son obligatorios.',
    topics: [
      { t: 'Pedido y entrega', d: 'Seguimiento, cambios en un pedido o un paquete que no ha llegado.' },
      { t: 'Informes de laboratorio', d: 'Pide el certificado de análisis de tu número de lote.' },
      { t: 'Devoluciones y garantía', d: 'Nuestra garantía de devolución de 60 días, explicada paso a paso.' },
    ],
    dk: 'Diseñado en Dinamarca', dkText: 'Himalayan Drop es una marca danesa. Respondemos en español, inglés y danés.',
  },
  ar: {
    eyebrow: 'اتصل بنا', title: 'نحن هنا', accent: 'لمساعدتك.', lead: 'لديك سؤال عن طلب أو منتج أو تقرير مخبري؟ راسلنا وسنرد عليك عبر البريد الإلكتروني.',
    send: 'أرسل رسالة', req: 'الحقول المميزة بـ * مطلوبة.',
    topics: [
      { t: 'الطلبات والتوصيل', d: 'تتبع الشحنة، أو تعديل طلب، أو طرد لم يصل.' },
      { t: 'التقارير المخبرية', d: 'اطلب شهادة التحليل لرقم دفعتك.' },
      { t: 'الإرجاع والضمان', d: 'ضمان استرداد المال لمدة 60 يوماً، مشروح خطوة بخطوة.' },
    ],
    dk: 'مصمم في الدنمارك', dkText: 'Himalayan Drop علامة دنماركية. نرد بالعربية والإنجليزية.',
  },
  ur: {
    eyebrow: 'رابطہ', title: 'ہم مدد کے لیے', accent: 'حاضر ہیں۔', lead: 'آرڈر، پروڈکٹ یا لیب رپورٹ کے بارے میں سوال؟ ہمیں پیغام بھیجیں، ہم ای میل پر جواب دیں گے۔',
    send: 'پیغام بھیجیں', req: '* والے خانے ضروری ہیں۔',
    topics: [
      { t: 'آرڈر اور ترسیل', d: 'ٹریکنگ، آرڈر میں تبدیلی یا پارسل جو نہیں پہنچا۔' },
      { t: 'لیب رپورٹس', d: 'اپنے بیچ نمبر کا تجزیاتی سرٹیفکیٹ منگوائیں۔' },
      { t: 'واپسی اور گارنٹی', d: 'ہماری 60 دن کی منی بیک گارنٹی، مرحلہ وار۔' },
    ],
    dk: 'ڈنمارک میں ڈیزائن', dkText: 'Himalayan Drop ڈنمارک کا برانڈ ہے۔ ہم اردو اور انگریزی میں جواب دیتے ہیں۔',
  },
};

export default function ContactView({ lang }) {
  const t = tr(T, lang);
  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} accent={t.accent} lead={t.lead} />
      <Reveal as="section" className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-card" data-reveal>
            <h2>{t.send}</h2>
            <p className="muted">{t.req}</p>
            <ContactForm />
          </div>
          <aside className="contact-aside" data-reveal="stagger">
            {t.topics.map((x) => (
              <div className="topic" key={x.t}>
                <span className="topic-peak" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 19 9.5 8l3.5 6 2.5-4L21 19Z" /></svg>
                </span>
                <div>
                  <h3>{x.t}</h3>
                  <p>{x.d}</p>
                </div>
              </div>
            ))}
            <div className="topic dark">
              <div>
                <h3>{t.dk}</h3>
                <p>{t.dkText}</p>
              </div>
            </div>
          </aside>
        </div>
      </Reveal>
    </>
  );
}
