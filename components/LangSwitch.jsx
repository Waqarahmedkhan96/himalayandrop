'use client';
// EN / DA switch. Links to the same page in the other language
// (articles have their own slug in each language).
import { usePathname } from 'next/navigation';
import { counterpartSlug } from '@/lib/posts';
import { stripLocale, localizeHref } from '@/lib/i18n';
import { useLang } from './LangProvider';

function targetFor(pathname, to, current) {
  if (to === current) return pathname || '/';
  let base = stripLocale(pathname || '/');
  const m = base.match(/^\/blog\/([^/]+)\/?$/);
  if (m) {
    const slug = counterpartSlug(m[1], to);
    base = slug ? `/blog/${slug}/` : '/blog/';
  }
  return to === 'da' ? localizeHref(base, 'da') : base;
}

export default function LangSwitch({ className = '', onNavigate, tabIndex }) {
  const lang = useLang();
  const pathname = usePathname();
  return (
    <div className={`lang-switch ${className}`} role="group" aria-label={lang === 'da' ? 'Sprog' : 'Language'}>
      {[['en', 'EN', 'English'], ['da', 'DA', 'Dansk']].map(([code, short, name]) => (
        // Plain <a> on purpose: the two languages have separate root layouts.
        <a
          key={code}
          href={targetFor(pathname, code, lang)}
          hrefLang={code}
          lang={code}
          aria-label={name}
          aria-current={lang === code ? 'true' : undefined}
          className={lang === code ? 'on' : ''}
          onClick={onNavigate}
          tabIndex={tabIndex}
        >
          {short}
        </a>
      ))}
    </div>
  );
}
