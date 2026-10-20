'use client';
import Link from './LLink';
import { useLang } from './LangProvider';

const HOME = { en: 'Himalayan Drop home', da: 'Himalayan Drop forside', de: 'Himalayan Drop Startseite', fr: 'Accueil Himalayan Drop', es: 'Inicio de Himalayan Drop', ar: 'الصفحة الرئيسية لـ Himalayan Drop', ur: 'Himalayan Drop ہوم' };

export default function Logo({ size = 32 }) {
  const lang = useLang();
  return (
    <Link href="/" className="brand" aria-label={HOME[lang] || HOME.en}>
      <img src="/images/logo-mark.png" alt="" width={size} height={Math.round(size * 1.24)} style={{ width: size }} />
      <span>
        HIMALAYAN <span className="drop">DROP</span>
        <sup>®</sup>
      </span>
    </Link>
  );
}
