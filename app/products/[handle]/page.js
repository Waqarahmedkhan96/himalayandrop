import { notFound } from 'next/navigation';
import { getProduct, getProducts } from '@/lib/shopify';
import ProductView from '@/components/ProductView';
import BenefitsExplorer from '@/components/BenefitsExplorer';
import Comparison from '@/components/Comparison';
import { kindOf } from '@/lib/benefits';

// Pre-build a page for every product.
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({ params }) {
  const { handle } = await params;
  const product = await getProduct(handle);
  if (!product) return {};
  return {
    title: `${product.title} · Himalayan Drop`,
    description: product.description?.slice(0, 155),
  };
}

export default async function ProductPage({ params }) {
  const { handle } = await params;
  const product = await getProduct(handle);
  if (!product) notFound();
  const kind = kindOf(handle);
  return (
    <>
      <ProductView product={product} />
      <BenefitsExplorer initial={kind} />
      <Comparison initial={kind} />
    </>
  );
}
