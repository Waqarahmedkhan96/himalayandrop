import '@fontsource-variable/playfair-display';
import '@fontsource-variable/playfair-display/wght-italic.css';
import '@fontsource-variable/manrope';
import '@fontsource-variable/noto-naskh-arabic';
import '@fontsource-variable/noto-nastaliq-urdu';
import 'lenis/dist/lenis.css';
import '../../globals.css';

import RootShell from '@/components/RootShell';
import { layoutMeta } from '@/lib/layoutMeta';
import { INTL_LOCALES } from '@/lib/i18n';

// German, French, Spanish, Arabic and Urdu: /de/, /fr/, /es/, /ar/, /ur/.
export const generateStaticParams = () => INTL_LOCALES.map((lang) => ({ lang }));
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return layoutMeta(lang);
}
export const viewport = { themeColor: '#580f1b' };

export default async function Layout({ children, params }) {
  const { lang } = await params;
  return <RootShell lang={lang}>{children}</RootShell>;
}
