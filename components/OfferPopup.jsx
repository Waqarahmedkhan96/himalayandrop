'use client';
// First-order offer: "Would you like 10% off?" → email → code.
// Shown once per visitor, after a short delay or a bit of scrolling, never on
// account pages. Remembers the answer in the browser.
//
// SET UP BEFORE LAUNCH
// 1. Shopify admin → Discounts: create the code below (10 %, once per
//    customer, first order only).
// 2. Send the email to your list (Klaviyo / Shopify Email) in `subscribe`.
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useT } from './LangProvider';
import { Arrow } from './Arrow';
import Link from './LLink';

export const OFFER_CODE = 'WELCOME10';
const KEY = 'hd_offer_v1';

const T = {
  en: {
    label: 'First order offer', close: 'Close',
    q1: 'Would you', q2: 'like', pct: '10%', off: 'off?', sub: 'On your first order.',
    yes: 'Yes, please', no: 'No, thanks',
    emailTitle: 'Where should we send it?', email: 'Your email address', send: 'Get my 10% code', wait: 'Please wait…', invalid: 'Please enter a valid email address.', failed: 'Something went wrong. Please try again.',
    consent: 'By signing up you agree to receive emails from Himalayan Drop. Unsubscribe anytime.',
    done: 'Welcome to the mountain.', codeText: 'Use this code at checkout:', copy: 'Copy code', copied: 'Copied', shop: 'Shop now',
    terms: 'One use per customer, first order only.',
  },
  da: {
    label: 'Tilbud på første ordre', close: 'Luk',
    q1: 'Vil du', q2: 'have', pct: '10%', off: 'rabat?', sub: 'På din første ordre.',
    yes: 'Ja tak', no: 'Nej tak',
    emailTitle: 'Hvor skal vi sende den hen?', email: 'Din e-mailadresse', send: 'Få min rabatkode', wait: 'Vent venligst…', invalid: 'Skriv en gyldig e-mailadresse.', failed: 'Noget gik galt. Prøv igen.',
    consent: 'Ved at tilmelde dig accepterer du at modtage e-mails fra Himalayan Drop. Du kan altid afmelde dig.',
    done: 'Velkommen til bjerget.', codeText: 'Brug denne kode i checkout:', copy: 'Kopiér kode', copied: 'Kopieret', shop: 'Køb nu',
    terms: 'Kan bruges én gang pr. kunde, kun på første ordre.',
  },
  de: {
    label: 'Angebot für die erste Bestellung', close: 'Schließen',
    q1: 'Möchtest du', q2: '', pct: '10 %', off: 'Rabatt?', sub: 'Auf deine erste Bestellung.',
    yes: 'Ja, gerne', no: 'Nein, danke',
    emailTitle: 'Wohin sollen wir ihn senden?', email: 'Deine E-Mail-Adresse', send: 'Meinen 10 %-Code erhalten', wait: 'Bitte warten…', invalid: 'Bitte gib eine gültige E-Mail-Adresse ein.', failed: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
    consent: 'Mit der Anmeldung stimmst du zu, E-Mails von Himalayan Drop zu erhalten. Abmeldung jederzeit möglich.',
    done: 'Willkommen am Berg.', codeText: 'Nutze diesen Code an der Kasse:', copy: 'Code kopieren', copied: 'Kopiert', shop: 'Jetzt shoppen',
    terms: 'Einmal pro Kunde, nur für die erste Bestellung.',
  },
  fr: {
    label: 'Offre première commande', close: 'Fermer',
    q1: 'Envie de', q2: '', pct: '10 %', off: 'de réduction ?', sub: 'Sur votre première commande.',
    yes: 'Oui, avec plaisir', no: 'Non, merci',
    emailTitle: 'Où devons-nous l’envoyer ?', email: 'Votre adresse e-mail', send: 'Recevoir mon code -10 %', wait: 'Veuillez patienter…', invalid: 'Veuillez saisir une adresse e-mail valide.', failed: 'Une erreur est survenue. Veuillez réessayer.',
    consent: 'En vous inscrivant, vous acceptez de recevoir les e-mails de Himalayan Drop. Désabonnement à tout moment.',
    done: 'Bienvenue sur la montagne.', codeText: 'Utilisez ce code lors du paiement :', copy: 'Copier le code', copied: 'Copié', shop: 'Découvrir la boutique',
    terms: 'Une utilisation par client, première commande uniquement.',
  },
  es: {
    label: 'Oferta de primer pedido', close: 'Cerrar',
    q1: '¿Quieres un', q2: '', pct: '10 %', off: 'de descuento?', sub: 'En tu primer pedido.',
    yes: 'Sí, por favor', no: 'No, gracias',
    emailTitle: '¿Dónde te lo enviamos?', email: 'Tu correo electrónico', send: 'Quiero mi código del 10 %', wait: 'Espera un momento…', invalid: 'Introduce una dirección de correo válida.', failed: 'Algo ha salido mal. Inténtalo de nuevo.',
    consent: 'Al suscribirte aceptas recibir correos de Himalayan Drop. Puedes darte de baja cuando quieras.',
    done: 'Bienvenido a la montaña.', codeText: 'Usa este código al pagar:', copy: 'Copiar código', copied: 'Copiado', shop: 'Comprar ahora',
    terms: 'Un uso por cliente, solo en el primer pedido.',
  },
  ar: {
    label: 'عرض الطلب الأول', close: 'إغلاق',
    q1: 'هل تريد', q2: 'خصم', pct: '10%', off: '؟', sub: 'على طلبك الأول.',
    yes: 'نعم، من فضلك', no: 'لا، شكراً',
    emailTitle: 'إلى أين نرسله؟', email: 'بريدك الإلكتروني', send: 'احصل على كود خصم 10%', wait: 'يرجى الانتظار…', invalid: 'يرجى إدخال بريد إلكتروني صحيح.', failed: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
    consent: 'بالتسجيل توافق على تلقي رسائل من Himalayan Drop. يمكنك إلغاء الاشتراك في أي وقت.',
    done: 'مرحباً بك في الجبل.', codeText: 'استخدم هذا الكود عند الدفع:', copy: 'نسخ الكود', copied: 'تم النسخ', shop: 'تسوّق الآن',
    terms: 'استخدام واحد لكل عميل، للطلب الأول فقط.',
  },
  ur: {
    label: 'پہلے آرڈر کی پیشکش', close: 'بند کریں',
    q1: 'کیا آپ', q2: 'چاہیں گے', pct: '10%', off: 'رعایت؟', sub: 'اپنے پہلے آرڈر پر۔',
    yes: 'جی ہاں', no: 'نہیں، شکریہ',
    emailTitle: 'ہم اسے کہاں بھیجیں؟', email: 'آپ کا ای میل ایڈریس', send: 'میرا 10% کوڈ حاصل کریں', wait: 'براہِ کرم انتظار کریں…', invalid: 'براہِ کرم درست ای میل ایڈریس درج کریں۔', failed: 'کچھ غلط ہو گیا۔ دوبارہ کوشش کریں۔',
    consent: 'سائن اپ کر کے آپ Himalayan Drop کی ای میلز وصول کرنے پر رضامند ہیں۔ کسی بھی وقت ان سبسکرائب کریں۔',
    done: 'پہاڑ پر خوش آمدید۔', codeText: 'چیک آؤٹ پر یہ کوڈ استعمال کریں:', copy: 'کوڈ کاپی کریں', copied: 'کاپی ہو گیا', shop: 'ابھی خریدیں',
    terms: 'ہر گاہک کے لیے ایک بار، صرف پہلے آرڈر پر۔',
  },
};

async function subscribe(email) {
  // TODO: send `email` to Klaviyo or Shopify Email here.
  void email;
  return new Promise((r) => setTimeout(r, 500));
}

export default function OfferPopup() {
  const t = useT(T);
  const pathname = usePathname() || '';
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState('ask'); // ask | email | code
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const card = useRef(null);
  const lastFocus = useRef(null);

  const blocked = /\/account\//.test(pathname);

  useEffect(() => {
    if (blocked) return;
    let seen = null;
    try { seen = localStorage.getItem(KEY); } catch {}
    if (seen) return;
    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      lastFocus.current = document.activeElement;
      setOpen(true);
    };
    const timer = setTimeout(show, 9000);
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max > 0.35) show();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { clearTimeout(timer); window.removeEventListener('scroll', onScroll); };
  }, [blocked]);

  // Pause smooth scrolling, focus the dialog, close on Escape.
  useEffect(() => {
    if (!open) return;
    window.__lenis?.stop();
    const id = requestAnimationFrame(() => card.current?.querySelector('button, input, a')?.focus());
    const onKey = (e) => {
      if (e.key === 'Escape') close('dismissed');
      if (e.key === 'Tab' && card.current) {
        const f = card.current.querySelectorAll('button, input, a[href]');
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => { cancelAnimationFrame(id); window.removeEventListener('keydown', onKey); window.__lenis?.start(); };
  }, [open, step]);

  const remember = (v) => { try { localStorage.setItem(KEY, v); } catch {} };
  function close(reason) {
    remember(reason || 'dismissed');
    setOpen(false);
    lastFocus.current?.focus?.();
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = String(new FormData(e.target).get('email') || '').trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setError(t.invalid);
      e.target.email.focus();
      return;
    }
    setError('');
    setBusy(true);
    try {
      await subscribe(email);
      remember('claimed');
      setStep('code');
    } catch {
      setError(t.failed);
    } finally {
      setBusy(false);
    }
  };

  const copy = async () => {
    try { await navigator.clipboard.writeText(OFFER_CODE); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {}
  };

  if (!open) return null;

  return (
    <div className="offer" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && close('dismissed')}>
      <div className="offer-card" role="dialog" aria-modal="true" aria-label={t.label} ref={card} data-lenis-prevent>
        <svg className="offer-lines" viewBox="0 0 400 160" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
          <path d="M0 160 L60 98 L88 118 L150 40 L196 96 L226 74 L290 132 L330 104 L400 150" fill="none" stroke="#cca25e" strokeWidth="1.3" />
          <path d="M0 160 L46 130 L118 146 L186 110 L252 140 L322 120 L400 158" fill="none" stroke="#cca25e" strokeOpacity="0.45" strokeWidth="1" />
        </svg>
        <button type="button" className="offer-close" onClick={() => close('dismissed')} aria-label={t.close}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
        </button>
        <img className="offer-mark" src="/images/logo-mark.png" alt="" width="40" height="50" />

        {step === 'code' ? (
          <div className="offer-body">
            <p className="offer-done">{t.done}</p>
            <p className="offer-sub">{t.codeText}</p>
            <button type="button" className="offer-code" onClick={copy} aria-label={`${t.copy}: ${OFFER_CODE}`}>
              <span>{OFFER_CODE}</span>
              <em>{copied ? t.copied : t.copy}</em>
            </button>
            <Link href="/shop/" className="btn gold block offer-yes" onClick={() => close('claimed')}>{t.shop} <Arrow /></Link>
            <p className="offer-terms">{t.terms}</p>
          </div>
        ) : (
          <div className="offer-body">
            <h2 className="offer-title">
              <span>{t.q1} {t.q2}</span>
              <strong className="gold-text">{t.pct}</strong>
              <span>{t.off}</span>
            </h2>
            <p className="offer-sub">{t.sub}</p>
            {step === 'ask' ? (
              <>
                <button type="button" className="btn gold block offer-yes" onClick={() => setStep('email')}>{t.yes} <Arrow /></button>
                <button type="button" className="offer-no" onClick={() => close('declined')}>{t.no}</button>
              </>
            ) : (
              <form className="offer-form" onSubmit={onSubmit} noValidate>
                <label htmlFor="offer-email" className="offer-label">{t.emailTitle}</label>
                <input id="offer-email" name="email" type="email" required autoComplete="email" placeholder={t.email} aria-invalid={!!error} aria-describedby={error ? 'offer-error' : undefined} />
                {error && <p className="form-error offer-error" id="offer-error" role="alert">{error}</p>}
                <button type="submit" className="btn gold block offer-yes" disabled={busy}>{busy ? t.wait : t.send} <Arrow /></button>
                <p className="offer-terms">{t.consent}</p>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
