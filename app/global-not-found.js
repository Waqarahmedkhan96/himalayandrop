import '@fontsource-variable/playfair-display';
import '@fontsource-variable/playfair-display/wght-italic.css';
import '@fontsource-variable/manrope';
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
