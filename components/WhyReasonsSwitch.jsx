'use client';
// Home "Why Himalayan Drop": three layouts, one switch. The choice is remembered on this device.
import { useEffect, useState } from 'react';
import { useT } from './LangProvider';
import WhyAscent from './WhyAscent';
import WhyStrata from './WhyStrata';
import WhyCore from './WhyCore';

const T = {
  en: { layout: 'Layout' },
  da: { layout: 'Layout' },
  de: { layout: 'Layout' },
  fr: { layout: 'Mise en page' },
  es: { layout: 'Diseño' },
  ar: { layout: 'التصميم' },
  ur: { layout: 'ڈیزائن' },
};
const VERS = [['core', 'Core Sample', WhyCore], ['strata', 'Strata', WhyStrata], ['ascent', 'Ascent', WhyAscent]];

export default function WhyReasonsSwitch() {
  const t = useT(T);
  const [ver, setVer] = useState('core');
  useEffect(() => { try { const v = localStorage.getItem('why-ver'); if (VERS.some((x) => x[0] === v)) setVer(v); } catch (e) {} }, []);
  const pick = (v) => { setVer(v); try { localStorage.setItem('why-ver', v); } catch (e) {} };
  const View = VERS.find((x) => x[0] === ver)[2];
  return (
    <div className="why-wrap">
      <View key={ver} />
      <div className="why-switch" role="group" aria-label={t.layout}>
        <span>{t.layout}</span>
        {VERS.map(([id, label]) => (
          <button key={id} type="button" aria-pressed={ver === id} onClick={() => pick(id)}>{label}</button>
        ))}
      </div>
    </div>
  );
}
