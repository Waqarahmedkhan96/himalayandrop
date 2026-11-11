'use client';
// Review tool for phones and tablets: flips between the new header (default) and the previous one,
// so the two can be compared side by side. The choice is saved in the browser and can be forced
// with ?hdr=old or ?hdr=new in the address. HDR_SCRIPT sets the attribute on <html> before first
// paint, so there is no flash. Remove this component (and the html[data-hdr='old'] rules in
// app/header-cart.css) once one version has been chosen.
import { useEffect, useState } from 'react';

export const HDR_SCRIPT = `(function(){try{var d=document.documentElement,q=new URLSearchParams(location.search).get('hdr'),s=localStorage.getItem('hd_hdr');if(q==='old'||q==='new'){localStorage.setItem('hd_hdr',q);s=q}d.setAttribute('data-hdr',s==='old'?'old':'new')}catch(e){document.documentElement.setAttribute('data-hdr','new')}})();`;

export default function HeaderSwitch() {
  const [v, setV] = useState('new');

  useEffect(() => {
    setV(document.documentElement.getAttribute('data-hdr') === 'old' ? 'old' : 'new');
  }, []);

  const pick = (next) => {
    if (next === v) return;
    document.documentElement.setAttribute('data-hdr', next);
    try { localStorage.setItem('hd_hdr', next); } catch {}
    setV(next);
  };

  return (
    <div className="hdsw" role="group" aria-label="Header version">
      <span>Header</span>
      <button type="button" aria-pressed={v === 'old'} onClick={() => pick('old')}>Old</button>
      <button type="button" aria-pressed={v === 'new'} onClick={() => pick('new')}>New</button>
    </div>
  );
}
