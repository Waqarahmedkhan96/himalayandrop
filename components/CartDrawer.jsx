'use client';
import { useEffect } from 'react';
import { useCart } from '@/lib/cart';
import { isShopifyConnected, formatMoney } from '@/lib/shopify';

export default function CartDrawer() {
  const { cart, open, setOpen, busy, removeLine } = useCart();

  // Pause page scrolling while the drawer is open, and close it with Escape.
  useEffect(() => {
    if (open) window.__lenis?.stop();
    else window.__lenis?.start();
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, setOpen]);

  const lines = cart?.lines?.nodes || [];
  const total = cart?.cost?.totalAmount;

  return (
    <>
      <div className={`drawer-backdrop ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`drawer ${open ? 'open' : ''}`} aria-label="Cart" aria-hidden={!open}>
        <div className="drawer-head">
          <h3>Your cart</h3>
          <button className="icon-btn" onClick={() => setOpen(false)} aria-label="Close cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6 6l12 12M18 6 6 18" /></svg>
          </button>
        </div>
        <div className="drawer-body" data-lenis-prevent>
          {!isShopifyConnected && (
            <p className="notice">
              Preview mode. Add your Shopify Storefront token to <code>.env.local</code> and this cart will
              create real Shopify carts and send customers to Shopify checkout.
            </p>
          )}
          {isShopifyConnected && lines.length === 0 && <p className="drawer-empty">Your cart is empty.</p>}
          {lines.map((l) => (
            <div className="drawer-line" key={l.id}>
              {l.merchandise.image && <img src={l.merchandise.image.url} alt={l.merchandise.image.altText || ''} />}
              <div>
                <strong>{l.merchandise.product.title}</strong>
                <div style={{ fontSize: 13, color: 'var(--muted)' }}>Qty {l.quantity}</div>
              </div>
              <button className="icon-btn" onClick={() => removeLine(l.id)} disabled={busy} aria-label="Remove">✕</button>
            </div>
          ))}
        </div>
        {lines.length > 0 && (
          <div className="drawer-foot">
            {total && (
              <div className="total-row">
                <span>Subtotal</span>
                <span>{formatMoney(total.amount, total.currencyCode)}</span>
              </div>
            )}
            <a className="btn block" href={cart.checkoutUrl}>Checkout securely</a>
          </div>
        )}
      </aside>
    </>
  );
}
