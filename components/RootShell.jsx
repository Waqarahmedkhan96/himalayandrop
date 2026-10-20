// The page frame shared by the English and Danish root layouts.
import SmoothScroll from './SmoothScroll';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import OfferPopup from './OfferPopup';
import JsonLd from './JsonLd';
import { LangProvider } from './LangProvider';
import { CartProvider } from '@/lib/cart';
import { organizationLd } from '@/lib/seo';

export default function RootShell({ lang, children }) {
  return (
    <html lang={lang}>
      <body>
        <JsonLd data={organizationLd(lang)} />
        <LangProvider lang={lang}>
          <CartProvider>
            <SmoothScroll />
            <Header />
            <main>{children}</main>
            <Footer />
            <CartDrawer />
            <OfferPopup />
          </CartProvider>
        </LangProvider>
      </body>
    </html>
  );
}
