'use client';
// Process page: two layouts, one switch. The choice is remembered on this device.
import { useEffect, useState } from 'react';
import { useT } from './LangProvider';
import Process from './Process';
import ProcessDescent from './ProcessDescent';

const T = {
  en: { layout: 'Layout', a: 'The Descent', b: 'Scroll story' },
  da: { layout: 'Layout', a: 'Nedstigningen', b: 'Scroll-fortælling' },
  de: { layout: 'Layout', a: 'Der Abstieg', b: 'Scroll-Story' },
  fr: { layout: 'Mise en page', a: 'La descente', b: 'Récit au scroll' },
  es: { layout: 'Diseño', a: 'El descenso', b: 'Relato al scroll' },
  ar: { layout: 'التصميم', a: 'الهبوط', b: 'قصة التمرير' },
  ur: { layout: 'ڈیزائن', a: 'اترائی', b: 'اسکرول کہانی' },
};

export default function ProcessSwitch() {
  const t = useT(T);
  const [ver, setVer] = useState('descent');
  useEffect(() => { try { const v = localStorage.getItem('process-ver'); if (v === 'story' || v === 'descent') setVer(v); } catch (e) {} }, []);
  const pick = (v) => { setVer(v); try { localStorage.setItem('process-ver', v); } catch (e) {} };
  return (
    <>
      <div className="why-switch" role="group" aria-label={t.layout} style={{ marginTop: 28, paddingBottom: 0 }}>
        <span>{t.layout}</span>
        <button type="button" aria-pressed={ver === 'descent'} onClick={() => pick('descent')}>{t.a}</button>
        <button type="button" aria-pressed={ver === 'story'} onClick={() => pick('story')}>{t.b}</button>
      </div>
      {ver === 'descent' ? <ProcessDescent key="d" /> : <Process key="s" />}
    </>
  );
}
