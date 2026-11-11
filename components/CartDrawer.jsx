'use client';
import { useEffect } from 'react';
import { useCart } from '@/lib/cart';
import { isShopifyConnected, formatMoney } from '@/lib/shopify';
import Link from './LLink';
import { Arrow } from './Arrow';
import { useT } from './LangProvider';

const T = {
  en: { cart: 'Cart', title: 'Your cart', close: 'Close cart', preview: 'Preview mode. Add your Shopify Storefront token to .env.local and this cart will create real Shopify carts and send customers to Shopify checkout.', emptyHead: 'Your cart is empty, but your ritual is just a drop away.', shopNow: 'Shop now', emptyNote: 'Harvested above 5,000 m in Skardu. Independently lab-tested, batch by batch.', emptyTag: 'Skardu · 5,000 m+ · Lab-tested', qty: 'Qty', remove: 'Remove', subtotal: 'Subtotal', checkout: 'Checkout securely' },
  da: { cart: 'Kurv', title: 'Din kurv', close: 'Luk kurven', preview: 'Forhåndsvisning. Tilføj din Shopify Storefront-token i .env.local, så opretter kurven rigtige Shopify-kurve og sender kunderne til Shopify checkout.', emptyHead: 'Din kurv er tom, men dit ritual er kun en dråbe væk.', shopNow: 'Shop nu', emptyNote: 'Høstet over 5.000 m i Skardu. Uafhængigt laboratorietestet, batch for batch.', emptyTag: 'Skardu · 5.000 m+ · Labtestet', qty: 'Antal', remove: 'Fjern', subtotal: 'Subtotal', checkout: 'Gå sikkert til kassen' },
  de: { cart: 'Warenkorb', title: 'Dein Warenkorb', close: 'Warenkorb schließen', preview: 'Vorschaumodus. Füge deinen Shopify Storefront Token in .env.local ein, dann erstellt dieser Warenkorb echte Shopify-Warenkörbe und leitet zur Shopify-Kasse weiter.', emptyHead: 'Dein Warenkorb ist leer, aber dein Ritual ist nur einen Tropfen entfernt.', shopNow: 'Jetzt shoppen', emptyNote: 'Geerntet über 5.000 m in Skardu. Unabhängig laborgeprüft, Charge für Charge.', emptyTag: 'Skardu · 5.000 m+ · Laborgeprüft', qty: 'Menge', remove: 'Entfernen', subtotal: 'Zwischensumme', checkout: 'Sicher zur Kasse' },
  fr: { cart: 'Panier', title: 'Votre panier', close: 'Fermer le panier', preview: 'Mode aperçu. Ajoutez votre jeton Shopify Storefront dans .env.local pour créer de vrais paniers Shopify et rediriger vers le paiement Shopify.', emptyHead: 'Votre panier est vide, mais votre rituel n’est qu’à une goutte.', shopNow: 'Acheter', emptyNote: 'Récolté à plus de 5 000 m à Skardu. Testé en laboratoire indépendant, lot après lot.', emptyTag: 'Skardu · 5 000 m+ · Testé en labo', qty: 'Qté', remove: 'Retirer', subtotal: 'Sous-total', checkout: 'Paiement sécurisé' },
  es: { cart: 'Carrito', title: 'Tu carrito', close: 'Cerrar carrito', preview: 'Modo vista previa. Añade tu token de Shopify Storefront en .env.local y este carrito creará carritos reales de Shopify y llevará al pago de Shopify.', emptyHead: 'Tu carrito está vacío, pero tu ritual está a solo una gota.', shopNow: 'Comprar ahora', emptyNote: 'Recolectado a más de 5.000 m en Skardu. Analizado en laboratorio independiente, lote a lote.', emptyTag: 'Skardu · 5.000 m+ · Analizado en laboratorio', qty: 'Cant.', remove: 'Eliminar', subtotal: 'Subtotal', checkout: 'Pagar de forma segura' },
  ar: { cart: 'السلة', title: 'سلة التسوق', close: 'إغلاق السلة', preview: 'وضع المعاينة. أضف رمز Shopify Storefront إلى ‎.env.local لتُنشئ هذه السلة سلات Shopify حقيقية وتنقل العملاء إلى الدفع في Shopify.', emptyHead: 'سلتك فارغة، لكن طقسك على بعد قطرة واحدة.', shopNow: 'تسوق الآن', emptyNote: 'يُحصد على ارتفاع يزيد عن 5000 متر في سكردو. مفحوص مخبرياً بشكل مستقل، دفعة بعد دفعة.', emptyTag: 'سكردو · +5000 م · مفحوص مخبرياً', qty: 'الكمية', remove: 'إزالة', subtotal: 'المجموع الفرعي', checkout: 'الدفع الآمن' },
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
          {!isShopifyConnected && lines.length > 0 && (
            <p className="notice">{t.preview}</p>
          )}
          {lines.length === 0 && (
            <div className="cart-empty">
              <figure className="cart-empty-img">
                <img src="/images/hero/collection.webp" alt="" width="1332" height="998" loading="lazy" decoding="async" />
              </figure>
              <h4>{t.emptyHead}</h4>
              <Link href="/shop/" className="btn block cart-shop" onClick={() => setOpen(false)}>{t.shopNow} <Arrow size={14} /></Link>
              <div className="cart-note">
                <svg className="drop-mark" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true"><path d="M24 3C24 3 7 22 7 34a17 17 0 0 0 34 0C41 22 24 3 24 3Z" /></svg>
                <p>{t.emptyNote}</p>
                <small>{t.emptyTag}</small>
              </div>
            </div>
          )}
          {lines.map((l) => (
            <div className="drawer-line" key={l.id}>
              {l.merchandise.image && <img loading="lazy" decoding="async" src={l.merchandise.image.url} alt={l.merchandise.image.altText || ''} />}
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
