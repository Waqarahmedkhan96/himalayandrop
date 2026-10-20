'use client';
// Email signup. Right now it only shows a thank-you message.
// To collect emails for real, connect Klaviyo or Shopify's customer API in onSubmit.
import { useMemo, useState } from 'react';
import Reveal from './Reveal';
import { Arrow } from './Arrow';
import { ridgePoints, toLine } from '@/lib/mountains';
import { useLang } from './LangProvider';

const T = {
  en: { eyebrow: 'Letters from Himalayan Drop', h: 'Stay close to', hg: 'the source.', lead: 'Launch news and stories, delivered thoughtfully.', thanks: 'Thank you. We’ll be in touch.', invalid: 'Please enter a valid email address.', label: 'Email address', ph: 'Your email address', btn: 'Subscribe', note: 'By subscribing, you agree to receive our emails. Unsubscribe anytime.' },
  da: { eyebrow: 'Breve fra Himalayan Drop', h: 'Hold dig tæt på', hg: 'kilden.', lead: 'Nyheder om lanceringen og historier fra bjergene, sendt med omtanke.', thanks: 'Tak. Vi skriver snart.', invalid: 'Skriv en gyldig e-mailadresse.', label: 'E-mailadresse', ph: 'Din e-mailadresse', btn: 'Tilmeld', note: 'Ved at tilmelde dig accepterer du at modtage vores e-mails. Du kan altid afmelde dig.' },
  de: { eyebrow: 'Post von Himalayan Drop', h: 'Bleib nah an', hg: 'der Quelle.', lead: 'Neuigkeiten zum Start und Geschichten, mit Bedacht verschickt.', thanks: 'Danke. Wir melden uns.', invalid: 'Bitte gib eine gültige E-Mail-Adresse ein.', label: 'E-Mail-Adresse', ph: 'Deine E-Mail-Adresse', btn: 'Abonnieren', note: 'Mit dem Abonnieren stimmst du dem Empfang unserer E-Mails zu. Abmeldung jederzeit möglich.' },
  fr: { eyebrow: 'Lettres de Himalayan Drop', h: 'Restez proche de', hg: 'la source.', lead: 'Nouveautés et histoires, envoyées avec soin.', thanks: 'Merci. Nous vous écrirons bientôt.', invalid: 'Veuillez saisir une adresse e-mail valide.', label: 'Adresse e-mail', ph: 'Votre adresse e-mail', btn: 'S’abonner', note: 'En vous abonnant, vous acceptez de recevoir nos e-mails. Désabonnement à tout moment.' },
  es: { eyebrow: 'Cartas de Himalayan Drop', h: 'Mantente cerca de', hg: 'la fuente.', lead: 'Novedades e historias, enviadas con cuidado.', thanks: 'Gracias. Te escribiremos pronto.', invalid: 'Introduce una dirección de correo válida.', label: 'Correo electrónico', ph: 'Tu correo electrónico', btn: 'Suscribirme', note: 'Al suscribirte aceptas recibir nuestros correos. Puedes darte de baja cuando quieras.' },
  ar: { eyebrow: 'رسائل من Himalayan Drop', h: 'ابقَ قريباً من', hg: 'المصدر.', lead: 'أخبار الإطلاق وقصص مختارة بعناية.', thanks: 'شكراً لك. سنتواصل معك قريباً.', invalid: 'يرجى إدخال بريد إلكتروني صحيح.', label: 'البريد الإلكتروني', ph: 'بريدك الإلكتروني', btn: 'اشترك', note: 'باشتراكك توافق على تلقي رسائلنا. يمكنك إلغاء الاشتراك في أي وقت.' },
  ur: { eyebrow: 'Himalayan Drop کی طرف سے خطوط', h: 'جڑے رہیں', hg: 'ماخذ سے۔', lead: 'لانچ کی خبریں اور کہانیاں، سوچ سمجھ کر بھیجی گئیں۔', thanks: 'شکریہ۔ ہم رابطے میں رہیں گے۔', invalid: 'براہِ کرم درست ای میل ایڈریس درج کریں۔', label: 'ای میل ایڈریس', ph: 'آپ کا ای میل ایڈریس', btn: 'سبسکرائب کریں', note: 'سبسکرائب کر کے آپ ہماری ای میلز وصول کرنے پر رضامند ہیں۔ کسی بھی وقت ان سبسکرائب کریں۔' },
};

export default function Newsletter() {
  const t = T[useLang()] || T.en;
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const lines = useMemo(() => [
    toLine(ridgePoints(5, 300, 220, 4)),
    toLine(ridgePoints(9, 340, 160, 6)),
  ], []);

  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setError(t.invalid);
      e.target.email.focus();
      return;
    }
    setError('');
    // Connect your email tool (Klaviyo / Shopify Email) here and send `email`.
    setSent(true);
  };

  return (
    <Reveal as="section" className="newsletter">
      <div className="nl-card" data-reveal>
        <svg className="nl-lines" viewBox="0 0 1200 360" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
          {lines.map((d, i) => (
            <path key={i} d={d} fill="none" stroke="#e2c487" strokeWidth={i ? 1 : 1.4} vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
        <span className="eyebrow">{t.eyebrow}</span>
        <h2>{t.h} <em className="gold-text">{t.hg}</em></h2>
        <p className="lead">{t.lead}</p>
        {sent ? (
          <p className="nl-thanks" role="status">{t.thanks}</p>
        ) : (
          <form className="nl-form" onSubmit={onSubmit} noValidate>
            <label htmlFor="email" className="sr-only">{t.label}</label>
            <input id="email" name="email" type="email" required placeholder={t.ph} autoComplete="email" aria-invalid={!!error} aria-describedby={error ? 'nl-error' : undefined} />
            <button className="btn gold" type="submit">{t.btn} <Arrow size={14} /></button>
          </form>
        )}
        {error && !sent && <p className="form-error nl-error" id="nl-error" role="alert">{error}</p>}
        <p className="nl-note">{t.note}</p>
      </div>
    </Reveal>
  );
}
