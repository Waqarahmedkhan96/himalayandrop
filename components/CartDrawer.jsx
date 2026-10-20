'use client';
import { useEffect } from 'react';
import { useCart } from '@/lib/cart';
import { isShopifyConnected, formatMoney } from '@/lib/shopify';
import Link from './LLink';
import { Arrow } from './Arrow';
import { useT } from './LangProvider';

const T = {
  en: { cart: 'Cart', title: 'Your cart', close: 'Close cart', preview: 'Preview mode. Add your Shopify Storefront token to .env.local and this cart will create real Shopify carts and send customers to Shopify checkout.', empty: 'Your cart is empty.', emptyText: 'Find your ritual in resin, gummies, drops or capsules.', browse: 'Browse the shop', qty: 'Qty', remove: 'Remove', subtotal: 'Subtotal', checkout: 'Checkout securely' },
  da: { cart: 'Kurv', title: 'Din kurv', close: 'Luk kurven', preview: 'Forhåndsvisning. Tilføj din Shopify Storefront-token i .env.local, så opretter kurven rigtige Shopify-kurve og sender kunderne til Shopify checkout.', empty: 'Din kurv er tom.', emptyText: 'Find dit ritual i resin, vingummi, dråber eller kapsler.', browse: 'Se shoppen', qty: 'Antal', remove: 'Fjern', subtotal: 'Subtotal', checkout: 'Gå sikkert til kassen' },
};

export default function CartDrawer() {
  const { cart, open, setOpen, busy, removeLine } = useCart();
  const t = useT(T);

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
      <aside className={`drawer ${open ? 'open' : ''}`} aria-label={t.cart} aria-hidden={!open} inert={!open}>
        <div className="drawer-head">
          <h3>{t.title}</h3>
          <button className="icon-btn" onClick={() => setOpen(false)} aria-label={t.close}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6 6l12 12M18 6 6 18" /></svg>
          </button>
        </div>
        <div className="drawer-body" data-lenis-prevent>
          {!isShopifyConnected && (
            <p className="notice">{t.preview}</p>
          )}
          {lines.length === 0 && (
            <div className="drawer-empty">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>
              <strong>{t.empty}</strong>
              <p>{t.emptyText}</p>
              <Link href="/shop/" className="btn small" onClick={() => setOpen(false)}>{t.browse} <Arrow size={14} /></Link>
            </div>
          )}
          {lines.map((l) => (
            <div className="drawer-line" key={l.id}>
              {l.merchandise.image && <img src={l.merchandise.image.url} alt={l.merchandise.image.altText || ''} />}
              <div>
                <strong>{l.merchandise.product.title}</strong>
                <div style={{ fontSize: 13, color: 'var(--muted)' }}>{t.qty} {l.quantity}</div>
                {l.sellingPlanAllocation && <div className="drawer-sub">↻ {l.sellingPlanAllocation.sellingPlan.name}</div>}
              </div>
              <button className="icon-btn" onClick={() => removeLine(l.id)} disabled={busy} aria-label={t.remove}>✕</button>
            </div>
          ))}
        </div>
        {lines.length > 0 && (
          <div className="drawer-foot">
            {total && (
              <div className="total-row">
                <span>{t.subtotal}</span>
                <span>{formatMoney(total.amount, total.currencyCode)}</span>
              </div>
            )}
            <a className="btn block" href={cart.checkoutUrl}>{t.checkout}</a>
          </div>
        )}
      </aside>
    </>
  );
}
