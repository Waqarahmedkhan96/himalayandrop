'use client';
// Language picker with round flags.
// Desktop: a flag + code button that opens a list (native name, then
// language · country in the visitor's own language, gold check on the current).
// Phone menu (className "m-lang"): all seven flags in one row.
// Each link goes to the same page in that language (articles have their own
// slug per language).
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { counterpartSlug } from '@/lib/postSlugs';
import { stripLocale, localizeHref, LANGS, LOCALES } from '@/lib/i18n';
import { useLang } from './LangProvider';

const T = {
  en: { label: 'Language', choose: 'Choose language', intl: 'International' },
  da: { label: 'Sprog', choose: 'Vælg sprog', intl: 'International' },
  de: { label: 'Sprache', choose: 'Sprache wählen', intl: 'International' },
  fr: { label: 'Langue', choose: 'Choisir la langue', intl: 'International' },
  es: { label: 'Idioma', choose: 'Elegir idioma', intl: 'Internacional' },
  ar: { label: 'اللغة', choose: 'اختر اللغة', intl: 'دولي' },
  ur: { label: 'زبان', choose: 'زبان منتخب کریں', intl: 'بین الاقوامی' },
};

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

// "Arabic · United Arab Emirates", written in the visitor's language.
function describe(code, viewer, intl) {
  const { country } = LANGS[code];
  try {
    const locale = LANGS[viewer].locale;
    const langName = new Intl.DisplayNames([locale], { type: 'language' }).of(code);
    const place = country ? new Intl.DisplayNames([locale], { type: 'region' }).of(country) : intl;
    return `${langName.charAt(0).toLocaleUpperCase(locale) + langName.slice(1)} · ${place}`;
  } catch {
    return country || intl;
  }
}

const Flag = ({ code, size }) => (
  <img className="lang-flag" src={`/images/flags/${LANGS[code].flag}.svg`} alt="" width={size} height={size} />
);

function Check() {
  return (
    <svg className="lang-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export default function LangSwitch({ className = '', onNavigate, tabIndex }) {
  const lang = useLang();
  const pathname = usePathname();
  const t = T[lang] || T.en;
  const [open, setOpen] = useState(false);
  const box = useRef(null);
  const rail = className.includes('m-lang');

  useEffect(() => {
    if (!open) return;
    const off = (e) => { if (!box.current?.contains(e.target)) setOpen(false); };
    const esc = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('pointerdown', off);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('pointerdown', off); document.removeEventListener('keydown', esc); };
  }, [open]);

  const common = (code) => ({
    href: targetFor(pathname, code, lang),
    hrefLang: LANGS[code].hreflang,
    lang: LANGS[code].hreflang,
    'aria-current': lang === code ? 'true' : undefined,
    className: lang === code ? 'on' : '',
  });

  // Phone menu: one row of round flags. Plain <a>: languages have separate root layouts.
  if (rail) {
    return (
      <div className={`lang-rail-wrap ${className}`}>
        <div className="lang-rail-head">
          <span>{t.label}</span>
          <em dir={LANGS[lang].dir}>{LANGS[lang].name}</em>
        </div>
        <div className="lang-rail" role="group" aria-label={t.label}>
          {LOCALES.map((code) => (
            <a key={code} {...common(code)} onClick={onNavigate} tabIndex={tabIndex} aria-label={LANGS[code].name}>
              <Flag code={code} size={34} />
              <span dir={LANGS[code].dir}>{LANGS[code].name}</span>
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`lang-pick ${className} ${open ? 'is-open' : ''}`} ref={box}>
      <button type="button" className="lang-btn" aria-expanded={open} aria-haspopup="true" aria-label={`${t.label}: ${LANGS[lang].name}`} onClick={() => setOpen((o) => !o)} tabIndex={tabIndex}>
        <Flag code={lang} size={22} /> {LANGS[lang].short}
        <svg className="chev" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
      </button>
      <div className="lang-menu" role="group" aria-label={t.label} hidden={!open}>
        <p className="lang-menu-head">{t.choose}</p>
        {LOCALES.map((code) => (
          <a key={code} {...common(code)} onClick={() => { setOpen(false); onNavigate?.(); }}>
            <Flag code={code} size={28} />
            <span className="lang-name">{LANGS[code].name}</span>
            <span className="lang-sub" suppressHydrationWarning>{describe(code, lang, t.intl)}</span>
            {lang === code && <Check />}
          </a>
        ))}
      </div>
    </div>
  );
}
