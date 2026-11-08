'use client';
// Cookie banner and settings window. Equal buttons for accept and reject, as the EU requires.
// The choice is saved by lib/consent.js; analytics start only after "Accept".
import { useEffect, useRef, useState } from 'react';
import Link from './LLink';
import { useT } from './LangProvider';
import { T } from '@/lib/consentText';
import { applyConsent, getConsent, setConsent } from '@/lib/consent';

export default function CookieConsent() {
  const t = useT(T);
  const [banner, setBanner] = useState(false);
  const [prefs, setPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const dialog = useRef(null);
  const lastFocus = useRef(null);

  useEffect(() => {
    const saved = getConsent();
    if (saved) applyConsent(saved);
    else setBanner(true);
    const open = () => {
      lastFocus.current = document.activeElement;
      setAnalytics(!!getConsent()?.analytics);
      setPrefs(true);
    };
    window.addEventListener('hd:cookie-settings', open);
    return () => window.removeEventListener('hd:cookie-settings', open);
  }, []);

  useEffect(() => {
    if (!prefs) return;
    dialog.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') setPrefs(false); };
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); lastFocus.current?.focus?.(); };
  }, [prefs]);

  const choose = (value) => { setConsent(value); setBanner(false); setPrefs(false); };

  return (
    <>
      {banner && !prefs && (
        <div className="ckb" role="region" aria-label={t.title}>
          <h2 className="ck-title">{t.title}</h2>
          <p className="ck-text">
            {t.text}{' '}
            <Link href="/policies/cookie-policy/" className="ck-link">{t.policy}</Link>
          </p>
          <div className="ck-actions">
            <button type="button" className="ck-btn is-solid" onClick={() => choose(true)}>{t.accept}</button>
            <button type="button" className="ck-btn" onClick={() => choose(false)}>{t.reject}</button>
          </div>
          <button type="button" className="ck-more" onClick={() => { setAnalytics(false); setPrefs(true); }}>{t.settings}</button>
        </div>
      )}
      {prefs && (
        <div className="ck-back" onMouseDown={(e) => { if (e.target === e.currentTarget) setPrefs(false); }}>
          <div className="ck-dlg" role="dialog" aria-modal="true" aria-labelledby="ck-dlg-title" tabIndex={-1} ref={dialog}>
            <div className="ck-dlg-head">
              <h2 id="ck-dlg-title">{t.prefTitle}</h2>
              <button type="button" className="ck-x" onClick={() => setPrefs(false)} aria-label={t.close}>×</button>
            </div>
            <p className="ck-text">{t.prefIntro} <Link href="/policies/cookie-policy/" className="ck-link">{t.policy}</Link></p>
            <div className="ck-row">
              <div><strong>{t.nec}</strong><span>{t.necText}</span></div>
              <span className="ck-always">{t.always}</span>
            </div>
            <div className="ck-row">
              <div><strong>{t.ana}</strong><span>{t.anaText}</span></div>
              <button type="button" role="switch" aria-checked={analytics} aria-label={t.ana} className={`ck-sw${analytics ? ' is-on' : ''}`} onClick={() => setAnalytics((a) => !a)} />
            </div>
            <div className="ck-actions is-three">
              <button type="button" className="ck-btn is-solid" onClick={() => choose(true)}>{t.accept}</button>
              <button type="button" className="ck-btn" onClick={() => choose(false)}>{t.rejectAll}</button>
              <button type="button" className="ck-btn" onClick={() => choose(analytics)}>{t.save}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
