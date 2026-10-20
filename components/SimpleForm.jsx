'use client';
// Reusable premium form (floating labels) with a thank-you state.
// Connect `onSend` to a form service or Shopify when you go live.
import { useState } from 'react';
import { Arrow } from './Arrow';
import { useLang } from './LangProvider';

const T = {
  en: { send: 'Send', thanks: 'Thank you. We’ll be in touch.', error: 'Something went wrong. Please try again.', choose: 'Choose', wait: 'Please wait…' },
  da: { send: 'Send', thanks: 'Tak. Vi vender tilbage.', error: 'Noget gik galt. Prøv igen.', choose: 'Vælg', wait: 'Vent venligst…' },
};

export default function SimpleForm({ id, fields, submit, thanks, thanksText, consent, onSend }) {
  const t = T[useLang()];
  submit = submit || t.send;
  thanks = thanks || t.thanks;
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const handle = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      const data = Object.fromEntries(new FormData(e.target));
      if (onSend) await onSend(data);
      else await new Promise((r) => setTimeout(r, 600));
      setSent(true);
    } catch (err) {
      setError(err.message || t.error);
    } finally {
      setBusy(false);
    }
  };

  if (sent) {
    return (
      <div className="contact-thanks" role="status">
        <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r="30" fill="none" stroke="#cca25e" strokeWidth="1.5" />
          <path d="M20 33l8 8 16-17" fill="none" stroke="#cca25e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3>{thanks}</h3>
        {thanksText && <p>{thanksText}</p>}
      </div>
    );
  }

  return (
    <form className="contact-form demo-form" onSubmit={handle} data-thanks={thanks} data-thanks-text={thanksText || ''}>
      {fields.map((row, ri) => (
        <div className={Array.isArray(row) ? 'field-row' : undefined} key={ri} style={Array.isArray(row) ? undefined : { display: 'contents' }}>
          {(Array.isArray(row) ? row : [row]).map((f) => {
            const fid = `${id}-${f.name}`;
            if (f.type === 'select') {
              return (
                <div className="field select" key={f.name}>
                  <select id={fid} name={f.name} defaultValue="" required={f.required}>
                    <option value="" disabled>{f.placeholder || t.choose}</option>
                    {f.options.map((o) => <option key={o}>{o}</option>)}
                  </select>
                  <label htmlFor={fid}>{f.label}{f.required ? ' *' : ''}</label>
                  <svg className="chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
                </div>
              );
            }
            if (f.type === 'textarea') {
              return (
                <div className="field" key={f.name}>
                  <textarea id={fid} name={f.name} rows="4" required={f.required} placeholder=" " />
                  <label htmlFor={fid}>{f.label}{f.required ? ' *' : ''}</label>
                </div>
              );
            }
            return (
              <div className="field" key={f.name}>
                <input id={fid} name={f.name} type={f.type || 'text'} required={f.required} placeholder=" " autoComplete={f.autoComplete} minLength={f.minLength} />
                <label htmlFor={fid}>{f.label}{f.required ? ' *' : ''}</label>
              </div>
            );
          })}
        </div>
      ))}
      {consent && (
        <label className="consent">
          <input type="checkbox" required={consent.required} name="consent" />
          <span>{consent.text}</span>
        </label>
      )}
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="btn gold block" type="submit" disabled={busy}>
        {busy ? t.wait : submit} <Arrow />
      </button>
    </form>
  );
}
