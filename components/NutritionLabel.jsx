'use client';
// "View nutrition label" button under the product gallery. Opens the supplement facts (formulas) or the
// typical analysis (resin) in a dialog, with the free-from list or the authorised claims under it.
import { useEffect, useRef, useState } from 'react';
import { useLang } from './LangProvider';
import { pdpText } from '@/lib/pdp';
import { FORMULA_KEYS, nrvPct } from '@/lib/labdata';

const BTN = {
  en: { open: 'View nutrition label', close: 'Close' },
  da: { open: 'Se næringsdeklaration', close: 'Luk' },
  de: { open: 'Nährwertangaben ansehen', close: 'Schließen' },
  fr: { open: 'Voir les valeurs nutritionnelles', close: 'Fermer' },
  es: { open: 'Ver información nutricional', close: 'Cerrar' },
  ar: { open: 'عرض القيم الغذائية', close: 'إغلاق' },
};

export default function NutritionLabel({ product, kind }) {
  const lang = useLang();
  const b = BTN[lang] || BTN.en;
  const t = pdpText(lang).facts;
  const [open, setOpen] = useState(false);
  const back = useRef(null);
  const x = useRef(null);
  const f = product.formula;
  const keys = FORMULA_KEYS[kind];
  const isFormula = kind !== 'resin' && f && keys;

  useEffect(() => {
    if (!open) return;
    const k = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.__lenis?.stop();
    x.current?.focus();
    return () => { document.removeEventListener('keydown', k); document.body.style.overflow = prev; window.__lenis?.start(); back.current?.focus(); };
  }, [open]);

  return (
    <>
      <button type="button" className="nl-btn" ref={back} onClick={() => setOpen(true)} aria-haspopup="dialog">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 3h8l4 4v14H7z" /><path d="M14 3v5h5M10 12h6M10 16h6" /></svg>
        {b.open}
      </button>
      {open && (
        <div className="nl-modal" onMouseDown={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
          <div className="nl-dlg" role="dialog" aria-modal="true" aria-label={isFormula ? f.title : t.resinH} data-lenis-prevent>
            <button type="button" className="nl-x" ref={x} onClick={() => setOpen(false)} aria-label={b.close}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
            </button>
            <div className="facts-label nl-label">
              <div className="fl-head">
                <span className="fl-brand">Himalayan Drop<sup>®</sup></span>
                <h3>{isFormula ? f.title : t.resinH}</h3>
                <p>{isFormula ? f.serving : product.subtitle}</p>
              </div>
              <table>
                <thead>
                  <tr>
                    <th scope="col">{isFormula ? t.perServing : t.resinServing}</th>
                    <th scope="col">{t.amount}</th>
                    {isFormula && <th scope="col">{t.nrv}</th>}
                  </tr>
                </thead>
                <tbody>
                  {isFormula
                    ? f.rows.map(([n, a], i) => {
                        const p = nrvPct(keys[i], a);
                        return (
                          <tr key={n}>
                            <th scope="row">{n}</th>
                            <td><bdi>{a}</bdi></td>
                            <td>
                              {p != null ? (
                                <span className="nrv"><span className="nrv-bar"><span className="nrv-fill" style={{ width: `${Math.min(100, p)}%` }} /></span><bdi>{p}%</bdi></span>
                              ) : '†'}
                            </td>
                          </tr>
                        );
                      })
                    : t.resinRows.map(([n, a]) => (
                        <tr key={n}><th scope="row">{n}</th><td><bdi>{a}</bdi></td></tr>
                      ))}
                </tbody>
              </table>
              <p className="fl-note">{isFormula ? t.nrvNote : `*${f?.note || ''}`}</p>
              {isFormula && f.note && <p className="fl-note">{f.note}</p>}
            </div>
            {kind === 'resin' && (
              <ul className="free-list">
                {t.free.map((y) => <li key={y}><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>{y}</li>)}
              </ul>
            )}
            {kind === 'capsules' && (
              <div className="claims">
                <h3>{t.claimsH}</h3>
                <ul>{t.claims.map((c) => <li key={c}>{c}</li>)}</ul>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
