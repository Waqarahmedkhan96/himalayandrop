'use client';
import Link from './LLink';
import { useLang } from './LangProvider';

export default function Logo({ size = 32 }) {
  const lang = useLang();
  return (
    <Link href="/" className="brand" aria-label={lang === 'da' ? 'Himalayan Drop forside' : 'Himalayan Drop home'}>
      <img src="/images/logo-mark.png" alt="" width={size} height={Math.round(size * 1.24)} style={{ width: size }} />
      <span>
        HIMALAYAN <span className="drop">DROP</span>
        <sup>®</sup>
      </span>
    </Link>
  );
}
