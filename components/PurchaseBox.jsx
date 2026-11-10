'use client';
// Purchase box on product pages, in two simple steps:
//   1. Quantity: 1, 2 or 3 packs, shown with the pack picture.
//   2. Purchase option: Subscribe & Save (with what you get) or One-time.
// Then one button with the total.
// One-time is selected by default: under EU/Danish consumer rules a
// subscription must be an active choice, never pre-selected.
// Badges only state facts we can back up (the saving, the lowest price per
// pack); no "best seller" claims. Settings live in lib/subscription.js.
import { useState } from 'react';
import { useCart } from '@/lib/cart';
import { formatMoney } from '@/lib/shopify';
import { SUBSCRIBE_PCT, TIERS, DAYS_PER_PACK, demoPlans, defaultInterval } from '@/lib/subscription';
import { useT } from './LangProvider';

const T = {
  en: {
    qty: 'Choose quantity', packs: (n) => (n === 1 ? '1 pack' : `${n} packs`), supply: '{d}-day supply', each: '{p} each',
    saveTag: (p) => `Save ${p}%`, bestValue: 'Best value',
    type: 'Purchase option', banner: 'Best price: save {pct}% on every order',
    sub: 'Subscribe & Save', every: 'Delivered every', days: (d) => `${d} days`, rec: 'Recommended',
    perks: ['Save {pct}% on every order', 'You choose how often it arrives', 'Skip, pause or cancel anytime. No commitment'],
    once: 'One-time purchase', onceLine: 'A single order, no subscription',
    youSave: 'Save {p}',
    add: 'Add to cart', subAdd: 'Subscribe & add to cart',
    terms: 'Renews automatically every {d} days at {p} until you cancel. Manage or cancel anytime in your account.',
    how: 'How Subscribe & Save works',
    steps: [
      ['Choose how often', 'Every 30, 60 or 90 days. You can change it later.'],
      ['We deliver automatically', 'Each order ships on time at the subscription price.'],
      ['You stay in control', 'Skip, pause or cancel in your account. No fees, no commitment.'],
    ],
  },
  da: {
    qty: 'Vælg antal', packs: (n) => (n === 1 ? '1 pakke' : `${n} pakker`), supply: 'Rækker {d} dage', each: '{p} pr. stk.',
    saveTag: (p) => `Spar ${p} %`, bestValue: 'Bedste pris',
    type: 'Købsmulighed', banner: 'Bedste pris: spar {pct} % på hver ordre',
    sub: 'Abonnér & Spar', every: 'Levering hver', days: (d) => `${d}. dag`, rec: 'Anbefalet',
    perks: ['Spar {pct} % på hver ordre', 'Du bestemmer, hvor ofte den kommer', 'Spring over, sæt på pause eller opsig når som helst. Ingen binding'],
    once: 'Engangskøb', onceLine: 'Én ordre, intet abonnement',
    youSave: 'Spar {p}',
    add: 'Læg i kurv', subAdd: 'Abonnér og læg i kurv',
    terms: 'Fornyes automatisk hver {d}. dag til {p}, indtil du opsiger. Administrér eller opsig når som helst på din konto.',
    how: 'Sådan fungerer Abonnér & Spar',
    steps: [
      ['Vælg hvor ofte', 'Hver 30., 60. eller 90. dag. Du kan ændre det senere.'],
      ['Vi leverer automatisk', 'Hver ordre sendes til tiden til abonnementsprisen.'],
      ['Du har kontrollen', 'Spring over, sæt på pause eller opsig på din konto. Ingen gebyrer, ingen binding.'],
    ],
  },
  de: {
    qty: 'Menge wählen', packs: (n) => (n === 1 ? '1 Packung' : `${n} Packungen`), supply: 'Reicht {d} Tage', each: '{p} pro Stück',
    saveTag: (p) => `${p} % sparen`, bestValue: 'Bester Preis',
    type: 'Kaufoption', banner: 'Bester Preis: {pct} % auf jede Bestellung',
    sub: 'Abo & Sparen', every: 'Lieferung alle', days: (d) => `${d} Tage`, rec: 'Empfohlen',
    perks: ['{pct} % Rabatt auf jede Bestellung', 'Du bestimmst, wie oft geliefert wird', 'Jederzeit überspringen, pausieren oder kündigen. Keine Mindestlaufzeit'],
    once: 'Einmalkauf', onceLine: 'Eine Bestellung, kein Abo',
    youSave: '{p} sparen',
    add: 'In den Warenkorb', subAdd: 'Abonnieren & in den Warenkorb',
    terms: 'Verlängert sich automatisch alle {d} Tage zum Preis von {p}, bis du kündigst. Verwalten oder kündigen jederzeit in deinem Konto.',
    how: 'So funktioniert Abo & Sparen',
    steps: [
      ['Wähle, wie oft', 'Alle 30, 60 oder 90 Tage. Du kannst es später ändern.'],
      ['Wir liefern automatisch', 'Jede Bestellung wird pünktlich zum Abo-Preis versendet.'],
      ['Du behältst die Kontrolle', 'Überspringen, pausieren oder kündigen in deinem Konto. Keine Gebühren, keine Mindestlaufzeit.'],
    ],
  },
  fr: {
    qty: 'Choisissez la quantité', packs: (n) => (n === 1 ? '1 unité' : `${n} unités`), supply: 'Pour {d} jours', each: '{p} l’unité',
    saveTag: (p) => `-${p} %`, bestValue: 'Meilleur prix',
    type: 'Option d’achat', banner: 'Meilleur prix : -{pct} % sur chaque commande',
    sub: 'Abonnement', every: 'Livré tous les', days: (d) => `${d} jours`, rec: 'Recommandé',
    perks: ['-{pct} % sur chaque commande', 'Vous choisissez la fréquence de livraison', 'Report, pause ou résiliation à tout moment. Sans engagement'],
    once: 'Achat unique', onceLine: 'Une seule commande, sans abonnement',
    youSave: 'Économisez {p}',
    add: 'Ajouter au panier', subAdd: 'S’abonner et ajouter au panier',
    terms: 'Renouvelé automatiquement tous les {d} jours au prix de {p} jusqu’à résiliation. Gérez ou résiliez à tout moment depuis votre compte.',
    how: 'Comment fonctionne l’abonnement',
    steps: [
      ['Choisissez la fréquence', 'Tous les 30, 60 ou 90 jours. Modifiable à tout moment.'],
      ['Livraison automatique', 'Chaque commande part à temps, au prix de l’abonnement.'],
      ['Vous gardez le contrôle', 'Reportez, mettez en pause ou résiliez depuis votre compte. Sans frais, sans engagement.'],
    ],
  },
  es: {
    qty: 'Elige la cantidad', packs: (n) => (n === 1 ? '1 unidad' : `${n} unidades`), supply: 'Para {d} días', each: '{p} cada uno',
    saveTag: (p) => `Ahorra ${p} %`, bestValue: 'Mejor precio',
    type: 'Opción de compra', banner: 'Mejor precio: ahorra {pct} % en cada pedido',
    sub: 'Suscríbete y ahorra', every: 'Entrega cada', days: (d) => `${d} días`, rec: 'Recomendado',
    perks: ['Ahorra {pct} % en cada pedido', 'Tú eliges cada cuánto llega', 'Salta, pausa o cancela cuando quieras. Sin permanencia'],
    once: 'Compra única', onceLine: 'Un solo pedido, sin suscripción',
    youSave: 'Ahorras {p}',
    add: 'Añadir al carrito', subAdd: 'Suscribirme y añadir al carrito',
    terms: 'Se renueva automáticamente cada {d} días por {p} hasta que canceles. Gestiona o cancela cuando quieras desde tu cuenta.',
    how: 'Cómo funciona Suscríbete y ahorra',
    steps: [
      ['Elige cada cuánto', 'Cada 30, 60 o 90 días. Puedes cambiarlo después.'],
      ['Enviamos automáticamente', 'Cada pedido sale a tiempo con el precio de suscripción.'],
      ['Tú tienes el control', 'Salta, pausa o cancela desde tu cuenta. Sin comisiones ni permanencia.'],
    ],
  },
  ar: {
    qty: 'اختر الكمية', packs: (n) => (n === 1 ? 'عبوة واحدة' : n === 2 ? 'عبوتان' : `${n} عبوات`), supply: 'تكفي {d} يوماً', each: '{p} للعبوة',
    saveTag: (p) => `وفّر ${p}%`, bestValue: 'أفضل سعر',
    type: 'خيار الشراء', banner: 'أفضل سعر: وفّر {pct}% على كل طلب',
    sub: 'اشترك ووفّر', every: 'التوصيل كل', days: (d) => `${d} يوماً`, rec: 'موصى به',
    perks: ['وفّر {pct}% على كل طلب', 'أنت تختار مدى تكرار التوصيل', 'تخطَّ أو أوقف مؤقتاً أو ألغِ في أي وقت. بلا التزام'],
    once: 'شراء لمرة واحدة', onceLine: 'طلب واحد، بلا اشتراك',
    youSave: 'وفّر {p}',
    add: 'أضف إلى السلة', subAdd: 'اشترك وأضف إلى السلة',
    terms: 'يتجدد تلقائياً كل {d} يوماً بسعر {p} حتى تلغيه. يمكنك الإدارة أو الإلغاء في أي وقت من حسابك.',
    how: 'كيف يعمل الاشتراك والتوفير',
    steps: [
      ['اختر مدى التكرار', 'كل 30 أو 60 أو 90 يوماً. يمكنك تغييره لاحقاً.'],
      ['نوصل تلقائياً', 'يُشحن كل طلب في موعده بسعر الاشتراك.'],
      ['التحكم بيدك', 'تخطَّ أو أوقف مؤقتاً أو ألغِ من حسابك. بلا رسوم وبلا التزام.'],
    ],
  },
};

const fill = (s, v) => s.replace(/\{(\w+)\}/g, (_, k) => v[k] ?? '');
// Same as fill, but the value is wrapped in an element (e.g. a bold price).
const fillEl = (s, k, el) => s.split(`{${k}}`).flatMap((part, i) => (i ? [el, part] : [part]));

// The resins come as jar + box; the quantity cards show just the jars.
const JARS = { 'shilajit-gold-resin': '/images/jar-gold.webp', 'shilajit-silver-resin': '/images/jar-silver.webp' };
const round2 = (n) => Math.round(n * 100) / 100;

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

// 1, 2 or 3 copies of the pack picture, overlapping like jars on a shelf.
function Packs({ src, n, wide }) {
  return (
    <span className={`bx-packs n${n}${wide ? ' is-wide' : ''}`} aria-hidden="true">
      {Array.from({ length: n }, (_, i) => (
        <img key={i} src={src} alt="" loading="lazy" decoding="async" style={{ '--i': i }} />
      ))}
    </span>
  );
}

export default function PurchaseBox({ product }) {
  const t = useT(T);
  const { addItem, busy } = useCart();
  const plans = product.plans?.length ? product.plans : demoPlans();
  const subPct = plans[0]?.pct ?? SUBSCRIBE_PCT;

  const [mode, setMode] = useState(product.requiresPlan ? 'sub' : 'once');
  const [days, setDays] = useState(() => defaultInterval(product.handle, plans));
  const [qty, setQty] = useState(1);

  const base = product.amount;
  if (base == null) return null;

  const cur = product.currency || 'DKK';
  const money = (n) => formatMoney(round2(n), cur);
  const tierPct = (n) => TIERS.find((x) => x.qty === n)?.pct || 0;
  const unit = (m, n) => base * (1 - tierPct(n) / 100) * (m === 'sub' ? 1 - subPct / 100 : 1);
  const packDays = DAYS_PER_PACK[product.handle];
  const maxTier = Math.max(...TIERS.map((x) => x.qty));
  const packImg = JARS[product.handle] || product.image;
  const wide = /pack-(drops|capsules)/.test(packImg || '');

  const plan = plans.find((p) => p.days === days) || plans[0];
  const subTotal = unit('sub', qty) * qty;
  const onceTotal = unit('once', qty) * qty;
  const total = mode === 'sub' ? subTotal : onceTotal;
  const subSaved = onceTotal - subTotal;

  const add = () => addItem(product.variantId, qty, mode === 'sub' ? plan?.id || null : null);

  return (
    <div className="bx" data-mode={mode}>
      {/* Step 1: quantity */}
      <p className="bx-label" id="bx-qty">{t.qty}</p>
      <div className="bx-qtys" role="radiogroup" aria-labelledby="bx-qty">
        {TIERS.map(({ qty: n, pct }) => (
          <button type="button" role="radio" key={n} aria-checked={qty === n} className="bx-qty" onClick={() => setQty(n)}>
            {pct > 0 && <span className={`bx-tag${n === maxTier ? ' is-best' : ''}`}>{n === maxTier ? t.bestValue : t.saveTag(pct)}</span>}
            {packImg && <Packs src={packImg} n={n} wide={wide} />}
            <span className="bx-qty-name">{t.packs(n)}</span>
            {packDays && <span className="bx-qty-supply">{fill(t.supply, { d: packDays * n })}</span>}
            <span className="bx-qty-each">{fillEl(t.each, 'p', <b key="p">{money(unit(mode, n))}</b>)}</span>
          </button>
        ))}
      </div>

      {/* Step 2: purchase option */}
      <p className="bx-label" id="bx-type">{t.type}</p>
      <div className="bx-opts" role="radiogroup" aria-labelledby="bx-type">
        <div className={`bx-opt is-sub${mode === 'sub' ? ' is-on' : ''}`}>
          <p className="bx-banner">{fill(t.banner, { pct: subPct })}</p>
          <button type="button" role="radio" aria-checked={mode === 'sub'} className="bx-opt-head" onClick={() => setMode('sub')}>
            <span className="bx-radio" aria-hidden="true" />
            <span className="bx-opt-name">
              <strong>{t.sub}</strong>
              <small>{t.every} {plan?.days ? t.days(plan.days) : plan?.name}</small>
            </span>
            <span className="bx-opt-price">
              <strong>{money(subTotal)}</strong>
              <s>{money(onceTotal)}</s>
              {subSaved >= 0.5 && <em>{fill(t.youSave, { p: money(subSaved) })}</em>}
            </span>
          </button>
          <ul className="bx-perks">
            {t.perks.map((x) => <li key={x}><Check />{fill(x, { pct: subPct })}</li>)}
          </ul>
          {mode === 'sub' && (
            <div className="bx-every">
              <p className="bx-every-label" id="bx-every">{t.every}</p>
              <div className="bx-chips" role="radiogroup" aria-labelledby="bx-every">
                {plans.map((p) => (
                  <button type="button" role="radio" key={p.days ?? p.id} aria-checked={p.days === days} className="bx-chip" onClick={() => setDays(p.days)}>
                    {p.days ? t.days(p.days) : p.name}
                    {p.days === packDays && <em>{t.rec}</em>}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {product.requiresPlan ? null : (
          <div className={`bx-opt is-once${mode === 'once' ? ' is-on' : ''}`}>
            <button type="button" role="radio" aria-checked={mode === 'once'} className="bx-opt-head" onClick={() => setMode('once')}>
              <span className="bx-radio" aria-hidden="true" />
              <span className="bx-opt-name">
                <strong>{t.once}</strong>
                <small>{t.onceLine}</small>
              </span>
              <span className="bx-opt-price"><strong>{money(onceTotal)}</strong></span>
            </button>
          </div>
        )}
      </div>

      <button className="btn block bx-cta" onClick={add} disabled={busy}>
        <span>{mode === 'sub' ? t.subAdd : t.add}</span>
        <span className="bx-cta-dot" aria-hidden="true">·</span>
        <span className="bx-cta-price">{money(total)}</span>
      </button>

      {mode === 'sub' && (
        <div className="bx-sub-info">
          <p className="bx-terms">{fill(t.terms, { d: plan?.days ?? '', p: money(subTotal) })}</p>
          <details className="bx-how">
            <summary>{t.how}</summary>
            <ol>
              {t.steps.map(([h, x]) => (
                <li key={h}><strong>{h}</strong> {x}</li>
              ))}
            </ol>
          </details>
        </div>
      )}
    </div>
  );
}
