'use client';
// Certificate vault: engraved plaques on the left, the certificate in a brass frame on the right.
// Only show a certificate you actually hold. Add `img` (a scan of the certificate) to an item below to
// replace the drawn placeholder paper in the frame.
import { useState } from 'react';
import Link from './LLink';
import { useLang } from './LangProvider';
import { getSeals } from './Seal';
import { CERT_TEXT } from '@/lib/certText';

const ITEMS = [
  { id: 'gmp', seal: '/images/certs/gmp.webp', href: '/certificates/', img: null },
  { id: 'iso22000', seal: '/images/certs/iso22000.webp', href: '/certificates/', img: null },
  { id: 'iso9001', seal: '/images/certs/iso9001.webp', href: '/certificates/', img: null },
];
const SAMPLE = {
  en: 'Sample test report · PCSIR Karachi · Nov 2023', da: 'Eksempel på testrapport · PCSIR Karachi · nov. 2023', de: 'Beispiel-Prüfbericht · PCSIR Karachi · Nov. 2023',
  fr: 'Exemple de rapport d’essai · PCSIR Karachi · nov. 2023', es: 'Informe de ensayo de muestra · PCSIR Karachi · nov. 2023',
  ar: 'نموذج تقرير اختبار · PCSIR كراتشي · نوفمبر 2023', ur: 'نمونہ ٹیسٹ رپورٹ · PCSIR کراچی · نومبر 2023',
};

export default function CertVault({ cream = false }) {
  const lang = useLang();
  const t = CERT_TEXT[lang] || CERT_TEXT.en;
  const seals = getSeals(lang).slice(0, 3);
  const [i, setI] = useState(0);
  const pick = (k) => setI((k + ITEMS.length) % ITEMS.length);

  const cur = ITEMS[i];
  const code = (k) => seals[k].main.join(' ');

  return (
    <section id="certifications" className={`cv${cream ? ' cv-cream' : ''}`} aria-label={`${t.title} ${t.accent}`}>
      <svg className="cv-ridge" viewBox="0 0 1440 400" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 400V300l90-50 90-30 90-80 70 50 80-110 90 150 70-60 90 105 100 75 80-30 90-55 90 60 80-75 90-130 70 110 90-40 100 80 70 55 80-40 90 40V400Z" fill="rgba(120,30,45,.35)" />
        <path d="M0 300l90-50 90-30 90-80 70 50 80-110 90 150 70-60 90 105 100 75 80-30 90-55 90 60 80-75 90-130 70 110 90-40 100 80 70 55 80-40 90 40" fill="none" stroke="rgba(204,162,94,.4)" strokeWidth="1.2" />
      </svg>
      <div className="cv-in">
        <div className="cv-stage">
          <div className="cv-left">
            <p className="cv-eyebrow">{t.eyebrow}</p>
            <h2>{t.title} <em>{t.accent}</em></h2>
            <p className="cv-lead">{t.lead}</p>
            <div className="cv-list" role="tablist" aria-label={t.eyebrow}>
              {ITEMS.map((it, k) => (
                <div key={it.id} role="tab" tabIndex={0} aria-selected={i === k} className="cv-pl" onClick={() => pick(k)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(k); } }}>
                  <span className="cv-pl-h">
                    <img src={it.seal} alt="" width="56" height="56" loading="lazy" />
                    <span><span className="cv-pl-n">{t.items[k][0]}</span><span className="cv-pl-s">{seals[k].ring.replace(/ · $/, '')}</span></span>
                    <span className="cv-pl-a"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M6 2v8M2 6h8" /></svg></span>
                  </span>
                  <span className="cv-pl-b"><span><p>{t.items[k][1]}</p><Link className="cv-more" href={it.href} tabIndex={i === k ? 0 : -1}>{t.view}</Link></span></span>
                  
                </div>
              ))}
            </div>
          </div>
          <div className="cv-display">
            <div className="cv-spot" />
            <div className="cv-mark"><img loading="lazy" decoding="async" src={cur.seal} alt="" /></div>
            <div className="cv-frame">
              <div className="cv-mat">
                {cur.img ? (
                  <a className="cv-scan-a" href={cur.img} target="_blank" rel="noopener" aria-label={`${t.items[i][0]}: ${SAMPLE[lang] || SAMPLE.en}`}>
                    <img loading="lazy" decoding="async" className="cv-scan" src={cur.img} alt={t.items[i][0]} />
                  </a>
                ) : (
                  <div className="cv-paper" aria-hidden="true">
                    <span className="cv-k">{t.eyebrow}</span>
                    <h3 className="cv-t">{code(i)}</h3>
                    <span className="cv-l" /><span className="cv-b" /><span className="cv-b cv-s" /><span className="cv-b" /><span className="cv-b cv-s" /><span className="cv-l" /><span className="cv-b cv-s" /><span className="cv-b" />
                    <div className="cv-sig"><i /><span className="cv-qr" /></div>
                    <span className="cv-sheen" />
                  </div>
                )}
              </div>
              <div className="cv-medal"><img loading="lazy" decoding="async" src={cur.seal} alt={t.items[i][0]} /></div>
            </div>
            {cur.caption && <p className="cv-cap">{SAMPLE[lang] || SAMPLE.en}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
