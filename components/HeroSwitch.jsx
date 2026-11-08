'use client';
// Review tool on the home page: flips the top of the page between the burgundy hero (default)
// and the light hero. The choice is saved in the browser and can be forced with ?hero=light or
// ?hero=burgundy in the address. HERO_SCRIPT sets the attribute on <html> before first paint,
// so there is no flash. Remove this component once one version has been chosen.
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const HERO_SCRIPT = `(function(){try{var d=document.documentElement,q=new URLSearchParams(location.search).get('hero'),s=localStorage.getItem('hd_hero');if(q==='light'||q==='burgundy'){localStorage.setItem('hd_hero',q);s=q}d.setAttribute('data-hero',s==='light'?'light':'burgundy')}catch(e){document.documentElement.setAttribute('data-hero','burgundy')}})();`;

const HOME = /^\/(da|de|fr|es|ar|ur)?\/?$/;

export default function HeroSwitch() {
  const path = usePathname();
  const [v, setV] = useState('burgundy');

  useEffect(() => {
    setV(document.documentElement.getAttribute('data-hero') === 'light' ? 'light' : 'burgundy');
  }, [path]);

  if (!HOME.test(path || '/')) return null;

  const pick = (next) => {
    if (next === v) return;
    document.documentElement.setAttribute('data-hero', next);
    try { localStorage.setItem('hd_hero', next); } catch {}
    setV(next);
    // Let GSAP / ScrollTrigger re-measure the part of the page that just became visible.
    requestAnimationFrame(() => window.dispatchEvent(new Event('resize')));
  };

  return (
    <div className="hsw" role="group" aria-label="Hero version">
      <button type="button" aria-pressed={v === 'burgundy'} onClick={() => pick('burgundy')}>Burgundy</button>
      <button type="button" aria-pressed={v === 'light'} onClick={() => pick('light')}>Light</button>
    </div>
  );
}
