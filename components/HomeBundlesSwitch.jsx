'use client';
// Home bundles: two layouts, one switch. "Choose your ritual" is shown first; the choice is remembered.
import { useEffect, useState } from 'react';
import { useT } from './LangProvider';
import HomeBundles from './HomeBundles';
import HomeBundlesCards from './HomeBundlesCards';

const T = {
  en: { toCards: 'Switch to cards', toRitual: 'Switch to ritual view' },
  da: { toCards: 'Skift til kort', toRitual: 'Skift til ritualvisning' },
  de: { toCards: 'Zu Karten wechseln', toRitual: 'Zur Ritual-Ansicht wechseln' },
  fr: { toCards: 'Passer aux cartes', toRitual: 'Passer à la vue rituel' },
  es: { toCards: 'Cambiar a tarjetas', toRitual: 'Cambiar a vista ritual' },
  ar: { toCards: 'التبديل إلى البطاقات', toRitual: 'التبديل إلى عرض الطقس' },
};

export default function HomeBundlesSwitch({ bundles }) {
  const t = useT(T);
  const [ver, setVer] = useState('ritual');
  useEffect(() => { try { if (localStorage.getItem('bundles-ver') === 'cards') setVer('cards'); } catch (e) {} }, []);
  const flip = () => { const n = ver === 'ritual' ? 'cards' : 'ritual'; setVer(n); try { localStorage.setItem('bundles-ver', n); } catch (e) {} };
  return (
    <div className="hb-wrap">
      {ver === 'ritual' ? <HomeBundles bundles={bundles} /> : <HomeBundlesCards bundles={bundles} />}
      <div className="hb-switch" style={{ padding: '14px var(--frame) 0' }}>
        <button type="button" onClick={flip}>{ver === 'ritual' ? t.toCards : t.toRitual}</button>
      </div>
    </div>
  );
}
