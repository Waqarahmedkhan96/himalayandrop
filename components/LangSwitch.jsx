'use client';
// Language picker. Desktop: a small globe button that opens a list.
// Phone menu (className "m-lang"): every language as a button in a grid.
// Each link goes to the same page in that language (articles have their own
// slug per language).
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { counterpartSlug } from '@/lib/postSlugs';
import { stripLocale, localizeHref, LANGS, LOCALES } from '@/lib/i18n';
import { useLang } from './LangProvider';

const LABEL = { en: 'Language', da: 'Sprog', de: 'Sprache', fr: 'Langue', es: 'Idioma', ar: 'اللغة', ur: 'زبان' };

function targetFor(pathname, to, current) {
  if (to === current) return pathname || '/';
  let base = stripLocale(pathname || '/');
  const m = base.match(/^\/blog\/([^/]+)\/?$/);
  if (m) {
    const slug = counterpartSlug(m[1], to, current);
    base = slug ? `/blog/${slug}/` : '/blog/';
  }
  return localizeHref(base, to);
}

function Globe() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9Z" />
    </svg>
  );
}

export default function LangSwitch({ className = '', onNavigate, tabIndex }) {
  const lang = useLang();
  const pathname = usePathname();
  const label = LABEL[lang] || LABEL.en;
  const [open, setOpen] = useState(false);
  const box = useRef(null);
  const grid = className.includes('m-lang');

  useEffect(() => {
    if (!open) return;
    const off = (e) => { if (!box.current?.contains(e.target)) setOpen(false); };
    const esc = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('pointerdown', off);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('pointerdown', off); document.removeEventListener('keydown', esc); };
  }, [open]);

  // Plain <a> on purpose: languages have separate root layouts.
  const links = LOCALES.map((code) => (
    <a
      key={code}
      href={targetFor(pathname, code, lang)}
      hrefLang={LANGS[code].hreflang}
      lang={LANGS[code].hreflang}
      aria-current={lang === code ? 'true' : undefined}
      className={lang === code ? 'on' : ''}
      onClick={onNavigate}
      tabIndex={grid ? tabIndex : undefined}
    >
      <b>{LANGS[code].short}</b>
      <span dir={LANGS[code].dir}>{LANGS[code].name}</span>
    </a>
  ));

  if (grid) {
    return (
      <div className={`lang-grid ${className}`} role="group" aria-label={label}>
        {links}
      </div>
    );
  }

  return (
    <div className={`lang-pick ${className} ${open ? 'is-open' : ''}`} ref={box}>
      <button type="button" className="lang-btn" aria-expanded={open} aria-haspopup="true" aria-label={`${label}: ${LANGS[lang].name}`} onClick={() => setOpen((o) => !o)} tabIndex={tabIndex}>
        <Globe /> {LANGS[lang].short}
        <svg className="chev" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
      </button>
      <div className="lang-menu" role="group" aria-label={label} hidden={!open}>
        {links}
      </div>
    </div>
  );
}
