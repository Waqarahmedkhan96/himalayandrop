'use client';
// Review tool: flips the whole site between the current design ("classic")
// and the IM8-inspired design ("im8"). The choice is saved in the browser and
// can be forced with ?v=im8 or ?v=classic in the address. The attribute on <html>
// is set before first paint by VERSION_SCRIPT, so there is no flash.
import { useEffect, useState } from 'react';

export const VERSION_SCRIPT = `(function(){try{var d=document.documentElement,q=new URLSearchParams(location.search).get('v'),s=localStorage.getItem('hd_version');if(q==='im8'||q==='classic'){localStorage.setItem('hd_version',q);s=q}d.setAttribute('data-version',s==='im8'?'im8':'classic')}catch(e){document.documentElement.setAttribute('data-version','classic')}})();`;

export default function VersionSwitch() {
  const [v, setV] = useState('classic');

  useEffect(() => {
    setV(document.documentElement.getAttribute('data-version') === 'im8' ? 'im8' : 'classic');
  }, []);

  const pick = (next) => {
    if (next === v) return;
    document.documentElement.setAttribute('data-version', next);
    try { localStorage.setItem('hd_version', next); } catch {}
    setV(next);
    // Let GSAP / ScrollTrigger re-measure the page that just became visible.
    requestAnimationFrame(() => window.dispatchEvent(new Event('resize')));
  };

  return (
    <div className="vswitch" role="group" aria-label="Design version">
      <button type="button" aria-pressed={v === 'classic'} onClick={() => pick('classic')}>Current</button>
      <button type="button" aria-pressed={v === 'im8'} onClick={() => pick('im8')}>IM8 inspired</button>
    </div>
  );
}
