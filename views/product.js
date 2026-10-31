import { notFound } from 'next/navigation';
import ProductView from '@/components/ProductView';
import MythDeck from '@/components/MythDeck';
import ShilajitAnatomy from '@/components/ShilajitAnatomy';
import BenefitsExplorer from '@/components/BenefitsExplorer';
import FormulaBenefits from '@/components/FormulaBenefits';
import Comparison from '@/components/Comparison';
import JsonLd from '@/components/JsonLd';
import { ProofStrip, LabSpotlight, LabelPanel, ProductReviews, Guarantee, ProductFaq, StickyBuy, RefreshOnLoad } from '@/components/ProductSections';
import { faqItems } from '@/lib/pdp';
import { getProduct, getProducts, isShopifyConnected } from '@/lib/shopify';
import { productSeo } from '@/lib/products';
import { kindOf } from '@/lib/benefits';
import { buildMeta, breadcrumbLd, abs, BRAND } from '@/lib/seo';
import { localizeHref, tr } from '@/lib/i18n';

const CATEGORY = { en: 'Food supplement', da: 'Kosttilskud', de: 'Nahrungsergänzungsmittel', fr: 'Complément alimentaire', es: 'Complemento alimenticio', ar: 'مكمل غذائي', ur: 'غذائی سپلیمنٹ' };
const HOME = { en: 'Home', da: 'Forside', de: 'Startseite', fr: 'Accueil', es: 'Inicio', ar: 'الرئيسية', ur: 'ہوم' };
const SHOP = { en: 'Shop', da: 'Shop', de: 'Shop', fr: 'Boutique', es: 'Tienda', ar: 'المتجر', ur: 'شاپ' };

export async function params() {
  const products = await getProducts();
  return products.map((p) => ({ handle: p.handle }));
}

export async function meta(lang, handle) {
  const product = await getProduct(handle, lang);
  if (!product) return {};
  const s = productSeo[handle]?.[lang];
  return buildMeta({
    lang,
    path: `/products/${handle}/`,
    title: s?.title || product.title,
    description: s?.description || product.description?.slice(0, 155),
    image: product.image,
  });
}

export default async function ProductPageView({ lang, handle }) {
  const product = await getProduct(handle, lang);
  if (!product) notFound();
  const kind = kindOf(handle);
  const url = abs(localizeHref(`/products/${handle}/`, lang));

  const productLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    sku: handle,
    url,
    image: [product.image, ...(product.gallery || []).map((g) => g.src)].filter(Boolean).map((src) => (src.startsWith('http') ? src : abs(src))),
    brand: { '@type': 'Brand', name: BRAND },
    category: tr(CATEGORY, lang),
    // Price and stock are only published once they come from Shopify, so
    // search results never show placeholder prices.
    ...(isShopifyConnected && product.amount != null
      ? {
          offers: {
            '@type': 'Offer',
            url,
            priceCurrency: product.currency || 'DKK',
            price: product.amount,
            availability: product.available ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
            seller: { '@type': 'Organization', name: BRAND },
          },
        }
      : {}),
  };
  const crumbs = breadcrumbLd([
    [tr(HOME, lang), localizeHref('/', lang)],
    [tr(SHOP, lang), localizeHref('/shop/', lang)],
    [product.title, localizeHref(`/products/${handle}/`, lang)],
  ]);

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems(product, kind, lang).map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };

  return (
    <>
      <JsonLd data={productLd} />
      <JsonLd data={crumbs} />
      <JsonLd data={faqLd} />
      <ProductView product={product} />
      <ProofStrip />
      <LabSpotlight product={product} />
      <LabelPanel product={product} kind={kind} />
      <ShilajitAnatomy product={product} kind={kind} />
      <BenefitsExplorer initial={kind} id="product-benefits" />
      {kind === 'capsules' && <FormulaBenefits product={product} />}
      <MythDeck kind={kind} />
      <ProductReviews product={product} kind={kind} />
      <Comparison initial={kind} />
      <Guarantee product={product} kind={kind} />
      <ProductFaq product={product} kind={kind} />
      <StickyBuy product={product} />
      <RefreshOnLoad />
    </>
  );
}
