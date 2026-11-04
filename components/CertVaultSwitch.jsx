'use client';
// Home certificate section: the original burgundy design and a cream one, with a switch. The choice is remembered.
import { useEffect, useState } from 'react';
import { useT } from './LangProvider';
import CertTabs from './CertTabs';

const T = {
  en: { dark: 'Burgundy', cream: 'Cream', label: 'Style' },
  da: { dark: 'Bordeaux', cream: 'Creme', label: 'Stil' },
  de: { dark: 'Burgunder', cream: 'Creme', label: 'Stil' },
  fr: { dark: 'Bordeaux', cream: 'Crème', label: 'Style' },
  es: { dark: 'Burdeos', cream: 'Crema', label: 'Estilo' },
  ar: { dark: 'عنابي', cream: 'كريمي', label: 'النمط' },
  ur: { dark: 'مرون', cream: 'کریم', label: 'انداز' },
};

export default function CertVaultSwitch() {
  const t = useT(T);
  const [cream, setCream] = useState(false);
  useEffect(() => { try { if (localStorage.getItem('cv-tone') === 'cream') setCream(true); } catch (e) {} }, []);
  const pick = (v) => { setCream(v); try { localStorage.setItem('cv-tone', v ? 'cream' : 'dark'); } catch (e) {} };
  return (
    <>
      <CertTabs cream={cream} />
      <div className="why-switch" role="group" aria-label={t.label} style={{ marginTop: 14, paddingBottom: 0 }}>
        <span>{t.label}</span>
        <button type="button" aria-pressed={!cream} onClick={() => pick(false)}>{t.dark}</button>
        <button type="button" aria-pressed={cream} onClick={() => pick(true)}>{t.cream}</button>
      </div>
    </>
  );
}
