import '@fontsource-variable/playfair-display';
import '@fontsource-variable/playfair-display/wght-italic.css';
import '@fontsource-variable/manrope';
import 'lenis/dist/lenis.css';
import '../globals.css';

import RootShell from '@/components/RootShell';
import { layoutMeta } from '@/lib/layoutMeta';

export const metadata = layoutMeta('en');
export const viewport = { themeColor: '#580f1b' };

export default function Layout({ children }) {
  return <RootShell lang="en">{children}</RootShell>;
}
