import '@fontsource-variable/playfair-display';
import '@fontsource-variable/playfair-display/wght-italic.css';
import '@fontsource-variable/manrope';
import 'lenis/dist/lenis.css';
import './globals.css';

import SmoothScroll from '@/components/SmoothScroll';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { CartProvider } from '@/lib/cart';

export const metadata = {
  title: 'Himalayan Drop · Shilajit Resin, Gummies & Drops',
  description:
    'Himalayan Drop is a Danish shilajit brand. Discover our shilajit resin, gummies and drops, sourced from the Himalayas and lab tested.',
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: 'Himalayan Drop',
    description: 'A grounded daily ritual. Shilajit resin, gummies and drops.',
    images: ['/images/hero-resin-maroon.webp'],
  },
};

export const viewport = { themeColor: '#580f1b' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <SmoothScroll />
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
