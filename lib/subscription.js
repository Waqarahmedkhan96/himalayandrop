// Subscribe & Save: settings for the purchase box on product pages.
//
// HOW IT WORKS IN SHOPIFY
// 1. Install a subscription app that uses Shopify selling plans, for example
//    the free "Shopify Subscriptions" app (or Appstle / Recharge / Seal).
// 2. For each product create a subscription plan with the discount below
//    (15 %) and the delivery intervals below (every 30, 60 and 90 days).
// 3. That's it: the product page reads the plans from Shopify, and Buy now /
//    Add to cart send the chosen plan to checkout. Customers pause, skip or
//    cancel in their Shopify customer account.
//
// MULTI-BUY: the quantity savings (2 and 3 packs) must ALSO be created in
// Shopify admin → Discounts as an automatic "amount off products" discount
// (minimum quantity 2 → 10 %, 3 → 15 %), set to apply to one-time purchases
// and subscriptions. Keep the numbers here and in Shopify the same.
//
// Without Shopify connected, the demo values below are shown.

export const SUBSCRIBE_PCT = 15;

// Delivery intervals in days. The first one that matches how long a pack
// lasts is pre-selected for each product.
export const INTERVALS = [30, 60, 90];

// Multi-buy savings per number of packs.
export const TIERS = [
  { qty: 1, pct: 0 },
  { qty: 2, pct: 10 },
  { qty: 3, pct: 15 },
];

// Days one pack lasts at the daily serving on the label. Used for the default
// delivery interval and the "per day" price. Leave out a product to hide
// its per-day price.
export const DAYS_PER_PACK = {
  'shilajit-gummies': 30, // 30 servings
  'shilajit-capsules': 30, // 60 capsules, 2 a day
  'shilajit-gold-resin': 60,
  'shilajit-silver-resin': 60,
  'shilajit-drops': 60,
};

export const showPerDay = new Set(['shilajit-gummies', 'shilajit-capsules']);

// Shopify selling plans → our simple shape: { id, days, pct }.
// Reads "every N days / weeks / months" from the plan's option or name.
export function plansFromShopify(groups) {
  const out = [];
  for (const g of groups || []) {
    for (const p of g.sellingPlans?.nodes || []) {
      const label = [p.name, ...(p.options || []).map((o) => o.value)].join(' ');
      const m = label.match(/(\d+)\s*(day|week|month)/i) || label.match(/(day|week|month)/i);
      let days = null;
      if (m) {
        const n = m.length === 3 ? Number(m[1]) : 1;
        const unit = (m.length === 3 ? m[2] : m[1]).toLowerCase();
        days = unit === 'week' ? n * 7 : unit === 'month' ? n * 30 : n;
      }
      const adj = p.priceAdjustments?.[0]?.adjustmentValue;
      out.push({ id: p.id, name: p.name, days, pct: adj?.adjustmentPercentage ?? SUBSCRIBE_PCT });
    }
  }
  return out.sort((a, b) => (a.days || 0) - (b.days || 0));
}

export function demoPlans() {
  return INTERVALS.map((d) => ({ id: null, name: `Every ${d} days`, days: d, pct: SUBSCRIBE_PCT }));
}

export function defaultInterval(handle, plans) {
  const want = DAYS_PER_PACK[handle] || 30;
  const exact = plans.find((p) => p.days === want);
  return (exact || plans[0])?.days ?? null;
}
