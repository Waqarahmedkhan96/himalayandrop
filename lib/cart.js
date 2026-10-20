'use client';
// Cart that lives in Shopify. We keep only the cart ID in the browser;
// checkout happens on Shopify's secure hosted checkout page.

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { isShopifyConnected, storefront } from './shopify';

const CART_FIELDS = `
  id
  checkoutUrl
  totalQuantity
  cost { totalAmount { amount currencyCode } }
  lines(first: 50) {
    nodes {
      id
      quantity
      sellingPlanAllocation { sellingPlan { name } }
      merchandise { ... on ProductVariant { id title product { title } image { url altText } } }
    }
  }
`;

// A cart line; with a selling plan it becomes a Subscribe & Save line.
const line = (merchandiseId, quantity, sellingPlanId) =>
  sellingPlanId ? { merchandiseId, quantity, sellingPlanId } : { merchandiseId, quantity };

const CartContext = createContext(null);
const STORAGE_KEY = 'hd_cart_id';

function readId() {
  try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
}
function saveId(id) {
  try { localStorage.setItem(STORAGE_KEY, id); } catch {}
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(null);
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);

  // Load an existing cart when the visitor comes back.
  useEffect(() => {
    const id = readId();
    if (!id || !isShopifyConnected) return;
    storefront(`query($id: ID!) { cart(id: $id) { ${CART_FIELDS} } }`, { id })
      .then((d) => d.cart && setCart(d.cart))
      .catch(() => {});
  }, []);

  const addItem = useCallback(
    async (variantId, quantity = 1, sellingPlanId = null) => {
      setOpen(true);
      if (!isShopifyConnected || !variantId) return;
      setBusy(true);
      try {
        const lines = [line(variantId, quantity, sellingPlanId)];
        if (cart?.id) {
          const d = await storefront(
            `mutation($cartId: ID!, $lines: [CartLineInput!]!) { cartLinesAdd(cartId: $cartId, lines: $lines) { cart { ${CART_FIELDS} } } }`,
            { cartId: cart.id, lines }
          );
          setCart(d.cartLinesAdd.cart);
        } else {
          const d = await storefront(
            `mutation($lines: [CartLineInput!]!) { cartCreate(input: { lines: $lines }) { cart { ${CART_FIELDS} } } }`,
            { lines }
          );
          setCart(d.cartCreate.cart);
          saveId(d.cartCreate.cart.id);
        }
      } finally {
        setBusy(false);
      }
    },
    [cart]
  );

  // Buy now: a fresh cart with just this item, straight to Shopify checkout.
  const buyNow = useCallback(async (variantId, quantity = 1, sellingPlanId = null) => {
    if (!isShopifyConnected || !variantId) {
      setOpen(true);
      return;
    }
    setBusy(true);
    try {
      const d = await storefront(
        `mutation($lines: [CartLineInput!]!) { cartCreate(input: { lines: $lines }) { cart { checkoutUrl } } }`,
        { lines: [line(variantId, quantity, sellingPlanId)] }
      );
      window.location.href = d.cartCreate.cart.checkoutUrl;
    } finally {
      setBusy(false);
    }
  }, []);

  const removeLine = useCallback(
    async (lineId) => {
      if (!cart) return;
      setBusy(true);
      try {
        const d = await storefront(
          `mutation($cartId: ID!, $lineIds: [ID!]!) { cartLinesRemove(cartId: $cartId, lineIds: $lineIds) { cart { ${CART_FIELDS} } } }`,
          { cartId: cart.id, lineIds: [lineId] }
        );
        setCart(d.cartLinesRemove.cart);
      } finally {
        setBusy(false);
      }
    },
    [cart]
  );

  return (
    <CartContext.Provider value={{ cart, open, setOpen, busy, addItem, buyNow, removeLine }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
