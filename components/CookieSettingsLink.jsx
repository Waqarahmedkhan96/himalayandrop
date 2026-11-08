'use client';
// Footer link that reopens the cookie settings, so visitors can change or withdraw consent at any time.
import { useT } from './LangProvider';
import { T } from '@/lib/consentText';
import { openCookieSettings } from '@/lib/consent';

export default function CookieSettingsLink() {
  const t = useT(T);
  return <button type="button" className="ck-foot" onClick={openCookieSettings}>{t.settings}</button>;
}
