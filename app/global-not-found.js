import '@fontsource-variable/rosario';
import '@fontsource-variable/rosario/wght-italic.css';
import '@fontsource-variable/albert-sans';
import '@fontsource/space-mono/latin-700.css';
import 'lenis/dist/lenis.css';
import './globals.css';

import RootShell from '@/components/RootShell';
import NotFoundView from '@/components/NotFoundView';

export const metadata = {
  title: 'Page not found | Himalayan Drop',
  description: 'The page you were looking for does not exist.',
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <RootShell lang="en">
      <NotFoundView />
    </RootShell>
  );
}
