import { notFound } from 'next/navigation';
import ProductView from '@/components/ProductView';
import BenefitsExplorer from '@/components/BenefitsExplorer';
import Comparison from '@/components/Comparison';
import JsonLd from '@/components/JsonLd';
import { getProduct, getProducts, isShopifyConnected } from '@/lib/shopify';
import { productSeo } from '@/lib/products';
import { kindOf } from '@/lib/benefits';
import { buildMeta, breadcrumbLd, abs, BRAND } from '@/lib/seo';
import { localizeHref } from '@/lib/i18n';

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
    category: lang === 'da' ? 'Kosttilskud' : 'Food supplement',
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
    [lang === 'da' ? 'Forside' : 'Home', localizeHref('/', lang)],
    ['Shop', localizeHref('/shop/', lang)],
    [product.title, localizeHref(`/products/${handle}/`, lang)],
  ]);

  return (
    <>
      <JsonLd data={productLd} />
      <JsonLd data={crumbs} />
      <ProductView product={product} />
      <BenefitsExplorer initial={kind} />
      <Comparison initial={kind} />
    </>
  );
}
