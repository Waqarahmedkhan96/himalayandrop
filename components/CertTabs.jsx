'use client';
// Burgundy certificate section, tabbed: a slim tab row on top, the selected certificate below. No motion, one screen.
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

export default function CertTabs() {
  const lang = useLang();
  const t = CERT_TEXT[lang] || CERT_TEXT.en;
  const seals = getSeals(lang).slice(0, 3);
  const [i, setI] = useState(0);
  const cur = ITEMS[i];
  const key = (e, k) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); setI((k + 1) % 3); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); setI((k + 2) % 3); }
  };
  return (
    <section id="certifications" className="ct" aria-label={`${t.title} ${t.accent}`}>
      <div className="ct-in">
        <header className="ct-top">
          <div>
            <p className="ct-eyebrow">{t.eyebrow}</p>
            <h2>{t.title} <em>{t.accent}</em></h2>
          </div>
          <div className="ct-tabs" role="tablist" aria-label={t.eyebrow}>
            {ITEMS.map((it, k) => (
              <button key={it.id} type="button" role="tab" aria-selected={i === k} tabIndex={i === k ? 0 : -1} className="ct-tab" onClick={() => setI(k)} onKeyDown={(e) => key(e, k)}>
                <img src={it.seal} alt="" width="22" height="22" />
                <span>{t.items[k][0]}</span>
              </button>
            ))}
          </div>
        </header>
        <div className="ct-body" role="tabpanel">
          <div className="ct-copy">
            <p className="ct-idx"><b>0{i + 1}</b><span>/ 03</span></p>
            <p className="ct-ring">{seals[i].ring.replace(/ · $/, '')}</p>
            <h3>{t.items[i][0]}</h3>
            <p className="ct-desc">{t.items[i][1]}</p>
            <Link className="ct-more" href={cur.href}>{t.view}</Link>
          </div>
          <div className="ct-show">
            <div className="ct-spot" />
            <div className="ct-wm"><img src={cur.seal} alt="" /></div>
            <div className="ct-frame">
              <div className="ct-mat">
                {cur.img ? (
                  <a href={cur.img} target="_blank" rel="noopener" aria-label={`${t.items[i][0]}: ${SAMPLE[lang] || SAMPLE.en}`}>
                    <img className="ct-scan" src={cur.img} alt={t.items[i][0]} />
                  </a>
                ) : (
                  <div className="ct-paper ct-fill" aria-hidden="true">
                    <span className="ct-k">{t.eyebrow}</span>
                    <b>{seals[i].main.join(' ')}</b>
                    <i /><i className="s" /><i /><i className="s" /><i />
                    <span className="ct-qr" />
                  </div>
                )}
              </div>
              <div className="ct-medal"><img src={cur.seal} alt={t.items[i][0]} /></div>
            </div>
            {cur.caption && <p className="ct-cap">{SAMPLE[lang] || SAMPLE.en}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
