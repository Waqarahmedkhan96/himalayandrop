import '@fontsource-variable/rosario';
import '@fontsource-variable/rosario/wght-italic.css';
import '@fontsource-variable/albert-sans';
import '@fontsource/space-mono/latin-700.css';
import 'lenis/dist/lenis.css';
import '../globals.css';

import RootShell from '@/components/RootShell';
import { layoutMeta } from '@/lib/layoutMeta';

export const metadata = layoutMeta('da');
export const viewport = { themeColor: '#580f1b' };

export default function Layout({ children }) {
  return <RootShell lang="da">{children}</RootShell>;
}
