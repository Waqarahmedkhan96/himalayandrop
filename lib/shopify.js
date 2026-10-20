// Shopify Storefront API client.
// Shopify is the backend (products, cart, checkout); this file is the bridge to it.
// If no Shopify credentials are set, the site falls back to the local demo products
// in lib/products.js so you can design and develop before the store is ready.

import { demoProducts, localizeProduct } from './products';
import { getPosts } from './posts';
import { DATE_LOCALE } from './i18n';
import { plansFromShopify } from './subscription';

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;
const version = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION || '2026-07';

export const isShopifyConnected = Boolean(domain && token && !domain.startsWith('your-store'));

export async function storefront(query, variables = {}) {
  const res = await fetch(`https://${domain}/api/${version}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 }, // refresh product data at most once a minute
  });
  if (!res.ok) throw new Error(`Shopify request failed: ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(json.errors.map((e) => e.message).join(', '));
  return json.data;
}

// Ask Shopify for Danish content (Shopify admin → Settings → Languages, with
// translations added e.g. in Translate & Adapt) and Danish market prices.
const ctx = (lang) => (lang === 'da' ? '@inContext(language: DA, country: DK)' : '');

const PRODUCT_FIELDS = `
  id
  handle
  title
  description
  availableForSale
  featuredImage { url altText width height }
  priceRange { minVariantPrice { amount currencyCode } }
  variants(first: 1) { nodes { id } }
  requiresSellingPlan
  sellingPlanGroups(first: 5) {
    nodes {
      name
      sellingPlans(first: 10) {
        nodes {
          id
          name
          options { name value }
          priceAdjustments { adjustmentValue { ... on SellingPlanPercentagePriceAdjustment { adjustmentPercentage } } }
        }
      }
    }
  }
  subtitle: metafield(namespace: "custom", key: "subtitle") { value }
`;

// Turn Shopify's response into the same simple shape as the demo products.
// Content Shopify doesn't hold yet (formula, gallery, directions...) is
// kept from the local product file, matched by handle.
const LOCAL_ONLY = ['formula', 'facts', 'gallery', 'directions', 'storage', 'caution', 'badges', 'options', 'tag'];

function normalize(p, lang = 'en') {
  const price = p.priceRange?.minVariantPrice;
  const local = localizeProduct(demoProducts.find((d) => d.handle === p.handle), lang) || {};
  return {
    ...Object.fromEntries(LOCAL_ONLY.filter((k) => k in local).map((k) => [k, local[k]])),
    handle: p.handle,
    title: p.title,
    subtitle: p.subtitle?.value || '',
    description: p.description,
    image: p.featuredImage?.url,
    imageAlt: p.featuredImage?.altText || p.title,
    price: price ? formatMoney(price.amount, price.currencyCode) : null,
    amount: price ? Number(price.amount) : null,
    currency: price?.currencyCode || 'DKK',
    variantId: p.variants?.nodes?.[0]?.id || null,
    available: p.availableForSale,
    plans: plansFromShopify(p.sellingPlanGroups?.nodes),
    requiresPlan: !!p.requiresSellingPlan,
  };
}

export function formatMoney(amount, currencyCode = 'DKK') {
  const n = Number(amount);
  return new Intl.NumberFormat('da-DK', { style: 'currency', currency: currencyCode, minimumFractionDigits: n % 1 ? 2 : 0 }).format(n);
}

export async function getProducts(lang = 'en') {
  if (!isShopifyConnected) return demoProducts.map((p) => localizeProduct(p, lang));
  const data = await storefront(`query Products ${ctx(lang)} { products(first: 24) { nodes { ${PRODUCT_FIELDS} } } }`);
  return data.products.nodes.map((p) => normalize(p, lang));
}

export async function getProduct(handle, lang = 'en') {
  if (!isShopifyConnected) return localizeProduct(demoProducts.find((p) => p.handle === handle), lang) || null;
  const data = await storefront(
    `query Product($handle: String!) ${ctx(lang)} { product(handle: $handle) { ${PRODUCT_FIELDS} } }`,
    { handle }
  );
  return data.product ? normalize(data.product, lang) : null;
}

// ───────── Journal (Shopify blog) ─────────

const BLOG_HANDLE = 'journal';
const ARTICLE_FIELDS = `handle title excerpt publishedAt contentHtml tags image { url altText }`;

function normalizeArticle(a) {
  const words = (a.contentHtml || '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return {
    slug: a.handle,
    title: a.title,
    excerpt: a.excerpt || '',
    category: a.tags?.[0] || 'Journal',
    date: a.publishedAt?.slice(0, 10),
    readMin: Math.max(1, Math.round(words / 220)),
    cover: a.image?.url || '/images/collection-lineup.webp',
    html: a.contentHtml,
  };
}

export async function getArticles(lang = 'en') {
  const demoPosts = getPosts(lang);
  if (!isShopifyConnected) return demoPosts;
  const data = await storefront(
    `query($h: String!) ${ctx(lang)} { blog(handle: $h) { articles(first: 30, sortKey: PUBLISHED_AT, reverse: true) { nodes { ${ARTICLE_FIELDS} } } } }`,
    { h: BLOG_HANDLE }
  );
  const nodes = data.blog?.articles?.nodes || [];
  return nodes.length ? nodes.map(normalizeArticle) : demoPosts;
}

export async function getArticle(slug, lang = 'en') {
  const demoPosts = getPosts(lang);
  if (!isShopifyConnected) return demoPosts.find((p) => p.slug === slug) || null;
  const data = await storefront(
    `query($h: String!, $a: String!) ${ctx(lang)} { blog(handle: $h) { articleByHandle(handle: $a) { ${ARTICLE_FIELDS} } } }`,
    { h: BLOG_HANDLE, a: slug }
  );
  const a = data.blog?.articleByHandle;
  return a ? normalizeArticle(a) : demoPosts.find((p) => p.slug === slug) || null;
}

export function formatDate(iso, lang = 'en') {
  return new Date(iso + 'T12:00:00Z').toLocaleDateString(DATE_LOCALE[lang] || 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

// ───────── Policies (Shopify admin → Settings → Policies) ─────────
const POLICY_FIELD = {
  'privacy-policy': 'privacyPolicy',
  'terms-of-service': 'termsOfService',
  'shipping-policy': 'shippingPolicy',
  'refund-policy': 'refundPolicy',
};

export async function getPolicy(slug, lang = 'en') {
  const field = POLICY_FIELD[slug];
  if (!field || !isShopifyConnected) return null;
  const data = await storefront(`query ${ctx(lang)} { shop { ${field} { title body } } }`);
  return data.shop?.[field] || null;
}
