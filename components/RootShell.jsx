// The page frame shared by every language's root layout.
import SmoothScroll from './SmoothScroll';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import OfferPopup from './OfferPopup';
import JsonLd from './JsonLd';
import { LangProvider } from './LangProvider';
import { CartProvider } from '@/lib/cart';
import { organizationLd } from '@/lib/seo';
import { LANGS } from '@/lib/i18n';

const SKIP = { en: 'Skip to content', da: 'Gå til indhold', de: 'Zum Inhalt springen', fr: 'Aller au contenu', es: 'Ir al contenido', ar: 'انتقل إلى المحتوى', ur: 'مواد پر جائیں' };

export default function RootShell({ lang, children }) {
  return (
    <html lang={LANGS[lang]?.hreflang || lang} dir={LANGS[lang]?.dir || 'ltr'} data-lang={lang}>
      <body>
        <a href="#main" className="skip-link">{SKIP[lang] || SKIP.en}</a>
        <JsonLd data={organizationLd(lang)} />
        <LangProvider lang={lang}>
          <CartProvider>
            <SmoothScroll />
            <Header />
            <main id="main" tabIndex={-1}>{children}</main>
            <Footer />
            <CartDrawer />
            <OfferPopup />
          </CartProvider>
        </LangProvider>
      </body>
    </html>
  );
}
