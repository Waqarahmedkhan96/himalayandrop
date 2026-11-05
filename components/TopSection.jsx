'use client';
// Home top: hero, proof strip and certification ridge. A switch joins them into one burgundy
// section (the cream proof strip stays between the products and the certifications). The choice is
// remembered on this device. Styles: .hx in app/globals.css.
import { useEffect, useState } from 'react';
import { useT } from './LangProvider';

const T = {
  en: { label: 'Top section', sep: 'Separate', one: 'One section' },
  da: { label: 'Topsektion', sep: 'Adskilt', one: 'Én sektion' },
  de: { label: 'Kopfbereich', sep: 'Getrennt', one: 'Ein Bereich' },
  fr: { label: 'Haut de page', sep: 'Séparé', one: 'Une section' },
  es: { label: 'Parte superior', sep: 'Separado', one: 'Una sección' },
};

export default function TopSection({ children }) {
  const t = useT(T);
  const [joined, setJoined] = useState(false);
  useEffect(() => { try { if (localStorage.getItem('top-ver') === 'one') setJoined(true); } catch (e) {} }, []);
  const pick = (v) => { setJoined(v); try { localStorage.setItem('top-ver', v ? 'one' : 'sep'); } catch (e) {} };
  return (
    <>
      <div className={joined ? 'hx' : undefined}>{children}</div>
      <div className="why-switch top-switch" role="group" aria-label={t.label}>
        <span>{t.label}</span>
        <button type="button" aria-pressed={!joined} onClick={() => pick(false)}>{t.sep}</button>
        <button type="button" aria-pressed={joined} onClick={() => pick(true)}>{t.one}</button>
      </div>
    </>
  );
}
