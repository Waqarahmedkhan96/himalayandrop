'use client';
// Premium contact form with floating labels.
// It validates in the browser and shows a thank-you state. To actually receive
// messages, send the data to a form service (e.g. Formspree, Resend, or Shopify
// Forms) inside onSubmit.
import { useState } from 'react';
import { Arrow } from './Arrow';
import { useLang } from './LangProvider';
import { validateForm } from '@/lib/validate';

const T = {
  en: { subjects: ['Order & delivery', 'Product question', 'Lab reports', 'Returns & guarantee', 'Wholesale & partners', 'Press'], thanks: 'Thank you.', thanksText: 'Your message is on its way. We’ll reply by email.', again: 'Send another message', first: 'First name', last: 'Last name', email: 'Email *', chooseSubject: 'Choose a subject', subject: 'Subject *', order: 'Order number (optional)', message: 'Message *', consent: 'I agree that Himalayan Drop may use my details to answer this message.', sending: 'Sending…', send: 'Send message' },
  da: { subjects: ['Ordre og levering', 'Spørgsmål om et produkt', 'Laboratorierapporter', 'Returnering og garanti', 'Forhandlere og samarbejde', 'Presse'], thanks: 'Tak.', thanksText: 'Din besked er sendt. Vi svarer på e-mail.', again: 'Send en ny besked', first: 'Fornavn', last: 'Efternavn', email: 'E-mail *', chooseSubject: 'Vælg et emne', subject: 'Emne *', order: 'Ordrenummer (valgfrit)', message: 'Besked *', consent: 'Jeg accepterer, at Himalayan Drop må bruge mine oplysninger til at besvare denne besked.', sending: 'Sender…', send: 'Send besked' },
  de: { subjects: ['Bestellung & Lieferung', 'Frage zum Produkt', 'Laborberichte', 'Rückgabe & Garantie', 'Großhandel & Partner', 'Presse'], thanks: 'Vielen Dank.', thanksText: 'Deine Nachricht ist unterwegs. Wir antworten per E-Mail.', again: 'Weitere Nachricht senden', first: 'Vorname', last: 'Nachname', email: 'E-Mail *', chooseSubject: 'Betreff wählen', subject: 'Betreff *', order: 'Bestellnummer (optional)', message: 'Nachricht *', consent: 'Ich bin einverstanden, dass Himalayan Drop meine Angaben zur Beantwortung dieser Nachricht verwendet.', sending: 'Wird gesendet…', send: 'Nachricht senden' },
  fr: { subjects: ['Commande et livraison', 'Question sur un produit', 'Rapports de laboratoire', 'Retours et garantie', 'Revendeurs et partenaires', 'Presse'], thanks: 'Merci.', thanksText: 'Votre message est en route. Nous vous répondrons par e-mail.', again: 'Envoyer un autre message', first: 'Prénom', last: 'Nom', email: 'E-mail *', chooseSubject: 'Choisissez un sujet', subject: 'Sujet *', order: 'Numéro de commande (facultatif)', message: 'Message *', consent: 'J’accepte que Himalayan Drop utilise mes données pour répondre à ce message.', sending: 'Envoi…', send: 'Envoyer le message' },
  es: { subjects: ['Pedido y entrega', 'Pregunta sobre un producto', 'Informes de laboratorio', 'Devoluciones y garantía', 'Mayoristas y socios', 'Prensa'], thanks: 'Gracias.', thanksText: 'Tu mensaje está en camino. Te responderemos por correo electrónico.', again: 'Enviar otro mensaje', first: 'Nombre', last: 'Apellidos', email: 'Correo electrónico *', chooseSubject: 'Elige un asunto', subject: 'Asunto *', order: 'Número de pedido (opcional)', message: 'Mensaje *', consent: 'Acepto que Himalayan Drop use mis datos para responder a este mensaje.', sending: 'Enviando…', send: 'Enviar mensaje' },
  ar: { subjects: ['الطلب والتوصيل', 'سؤال عن منتج', 'التقارير المخبرية', 'الإرجاع والضمان', 'البيع بالجملة والشركاء', 'الصحافة'], thanks: 'شكراً لك.', thanksText: 'رسالتك في طريقها إلينا. سنرد عليك عبر البريد الإلكتروني.', again: 'إرسال رسالة أخرى', first: 'الاسم الأول', last: 'اسم العائلة', email: 'البريد الإلكتروني *', chooseSubject: 'اختر الموضوع', subject: 'الموضوع *', order: 'رقم الطلب (اختياري)', message: 'الرسالة *', consent: 'أوافق على أن تستخدم Himalayan Drop بياناتي للرد على هذه الرسالة.', sending: 'جارٍ الإرسال…', send: 'إرسال الرسالة' },
  ur: { subjects: ['آرڈر اور ترسیل', 'پروڈکٹ کے بارے میں سوال', 'لیب رپورٹس', 'واپسی اور گارنٹی', 'ہول سیل اور پارٹنرز', 'میڈیا'], thanks: 'شکریہ۔', thanksText: 'آپ کا پیغام موصول ہو رہا ہے۔ ہم ای میل کے ذریعے جواب دیں گے۔', again: 'ایک اور پیغام بھیجیں', first: 'پہلا نام', last: 'آخری نام', email: 'ای میل *', chooseSubject: 'موضوع منتخب کریں', subject: 'موضوع *', order: 'آرڈر نمبر (اختیاری)', message: 'پیغام *', consent: 'میں اتفاق کرتا/کرتی ہوں کہ Himalayan Drop اس پیغام کا جواب دینے کے لیے میری معلومات استعمال کرے۔', sending: 'بھیجا جا رہا ہے…', send: 'پیغام بھیجیں' },
};

export default function ContactForm() {
  const lang = useLang();
  const t = T[lang] || T.en;
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const bad = validateForm(e.target, lang);
    if (bad) {
      setError(bad.msg);
      bad.el.focus();
      return;
    }
    setError('');
    setBusy(true);
    // const data = Object.fromEntries(new FormData(e.target));
    // await fetch('https://formspree.io/f/your-id', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
    setTimeout(() => {
      setBusy(false);
      setSent(true);
    }, 600);
  };

  if (sent) {
    return (
      <div className="contact-thanks" role="status">
        <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r="30" fill="none" stroke="#cca25e" strokeWidth="1.5" />
          <path d="M20 33l8 8 16-17" fill="none" stroke="#cca25e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3>{t.thanks}</h3>
        <p>{t.thanksText}</p>
        <button type="button" className="btn ghost small" onClick={() => setSent(false)}>{t.again}</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="field-row">
        <div className="field">
          <input id="first" name="first" placeholder=" " autoComplete="given-name" />
          <label htmlFor="first">{t.first}</label>
        </div>
        <div className="field">
          <input id="last" name="last" placeholder=" " autoComplete="family-name" />
          <label htmlFor="last">{t.last}</label>
        </div>
      </div>
      <div className="field">
        <input id="cemail" name="email" type="email" required placeholder=" " autoComplete="email" />
        <label htmlFor="cemail">{t.email}</label>
      </div>
      <div className="field select">
        <select id="subject" name="subject" defaultValue="" required>
          <option value="" disabled>{t.chooseSubject}</option>
          {t.subjects.map((s) => <option key={s}>{s}</option>)}
        </select>
        <label htmlFor="subject">{t.subject}</label>
        <svg className="chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
      </div>
      <div className="field">
        <input id="order" name="order" placeholder=" " />
        <label htmlFor="order">{t.order}</label>
      </div>
      <div className="field">
        <textarea id="message" name="message" rows="5" required placeholder=" " />
        <label htmlFor="message">{t.message}</label>
      </div>
      <label className="consent">
        <input type="checkbox" name="consent" required />
        <span>{t.consent}</span>
      </label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="btn gold block" type="submit" disabled={busy}>
        {busy ? t.sending : t.send} <Arrow />
      </button>
    </form>
  );
}
