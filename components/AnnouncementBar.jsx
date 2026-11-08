'use client';
// Thin bar above the floating header: free delivery, the 60-day guarantee, lab testing.
// The header sits below it at the top of the page and slides up to its normal place as you scroll
// (the scroll position is passed to the CSS in --sy; see .header in app/globals.css).
import { useEffect } from 'react';
import Link from './LLink';
import { useLang } from './LangProvider';

const T = {
  en: [['Free delivery', 'nationwide'], ['60-day', 'money-back guarantee'], ['Lab tested', 'every batch']],
  da: [['Gratis levering', 'i hele Danmark'], ['60 dages', 'pengene-tilbage-garanti'], ['Labtestet', 'hver batch']],
  de: [['Kostenlose Lieferung', 'landesweit'], ['60 Tage', 'Geld-zurück-Garantie'], ['Laborgeprüft', 'jede Charge']],
  fr: [['Livraison offerte', 'dans tout le pays'], ['60 jours', 'satisfait ou remboursé'], ['Testé en laboratoire', 'chaque lot']],
  es: [['Envío gratis', 'en todo el país'], ['60 días', 'garantía de devolución'], ['Probado en laboratorio', 'cada lote']],
  ar: [['توصيل مجاني', 'في جميع أنحاء البلاد'], ['60 يومًا', 'ضمان استرداد الأموال'], ['مُختبَر في المختبر', 'كل دفعة']],
  ur: [['مفت ڈیلیوری', 'پورے ملک میں'], ['60 دن', 'رقم واپسی کی ضمانت'], ['لیب ٹیسٹڈ', 'ہر بیچ']],
};
const HREF = ['/policies/shipping-policy/', '/policies/refund-policy/', '/lab-results/'];
const ICON = [
  <path key="a" d="M3 6h11v10H3zM14 9h4l3 3v4h-7M7 18h.01M17 18h.01" />,
  <g key="b"><path d="M12 3 5 6v6c0 4.5 3 7.8 7 9 4-1.2 7-4.5 7-9V6Z" /><path d="m9 12 2 2 4-4" /></g>,
  <path key="c" d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" />,
];

export default function AnnouncementBar() {
  const lang = useLang();
  const items = T[lang] || T.en;
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    const set = () => { raf = 0; root.style.setProperty('--sy', `${Math.round(window.scrollY)}px`); };
    const on = () => { if (!raf) raf = requestAnimationFrame(set); };
    set();
    window.addEventListener('scroll', on, { passive: true });
    return () => { window.removeEventListener('scroll', on); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return (
    <div className="abar">
      <ul>
        {items.map(([b, r], i) => (
          <li key={i}>
            <Link href={HREF[i]}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ICON[i]}</svg>
              <span><strong>{b}</strong> {r}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
