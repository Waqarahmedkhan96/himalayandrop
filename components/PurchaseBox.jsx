'use client';
// Purchase box on product pages: One-time or Subscribe & Save, delivery
// interval, number of packs, a clear total, and Buy now / Add to cart.
// One-time is selected by default: under EU/Danish consumer rules a
// subscription must be an active choice, never pre-selected.
// Settings and the Shopify setup are in lib/subscription.js.
import { useState } from 'react';
import { useCart } from '@/lib/cart';
import { formatMoney } from '@/lib/shopify';
import { SUBSCRIBE_PCT, TIERS, DAYS_PER_PACK, showPerDay, demoPlans, defaultInterval } from '@/lib/subscription';
import { useT } from './LangProvider';
import { Arrow } from './Arrow';

const T = {
  en: {
    type: 'Purchase type', once: 'One-time purchase', sub: 'Subscribe & Save', save: (p) => `Save ${p}%`,
    perDay: '{p} per day', every: 'Deliver every', days: (d) => `${d} days`, rec: 'Recommended',
    qty: 'Quantity', packs: (n) => (n === 1 ? '1 pack' : `${n} packs`), each: '{p} each',
    total: 'Total', youSave: 'You save {p}',
    perks: ['{pct}% off every delivery', 'Change the interval whenever you like', 'Pause, skip or cancel anytime. No binding period'],
    terms: 'Renews automatically every {d} days at {p} until you cancel. Manage or cancel anytime in your account.',
    how: 'How Subscribe & Save works',
    steps: [
      ['Choose your interval', 'Pick how often you want a new delivery: every 30, 60 or 90 days.'],
      ['We deliver automatically', 'Your order ships on schedule at the subscription price.'],
      ['You stay in control', 'Skip a delivery, change the interval or cancel in your account. No fees, no binding period.'],
    ],
    buy: 'Buy now', subscribe: 'Subscribe now', add: 'Add to cart',
  },
  da: {
    type: 'Købstype', once: 'Engangskøb', sub: 'Abonnér & Spar', save: (p) => `Spar ${p}%`,
    perDay: '{p} pr. dag', every: 'Levering hver', days: (d) => `${d}. dag`, rec: 'Anbefalet',
    qty: 'Antal', packs: (n) => (n === 1 ? '1 pakke' : `${n} pakker`), each: '{p} pr. stk.',
    total: 'I alt', youSave: 'Du sparer {p}',
    perks: ['{pct} % rabat på hver levering', 'Skift interval, når du vil', 'Sæt på pause, spring over eller opsig når som helst. Ingen binding'],
    terms: 'Fornyes automatisk hver {d}. dag til {p}, indtil du opsiger. Administrér eller opsig når som helst på din konto.',
    how: 'Sådan fungerer Abonnér & Spar',
    steps: [
      ['Vælg dit interval', 'Vælg hvor ofte du vil have en ny levering: hver 30., 60. eller 90. dag.'],
      ['Vi leverer automatisk', 'Din ordre sendes til tiden til abonnementsprisen.'],
      ['Du har kontrollen', 'Spring en levering over, skift interval eller opsig på din konto. Ingen gebyrer og ingen binding.'],
    ],
    buy: 'Køb nu', subscribe: 'Abonnér nu', add: 'Læg i kurv',
  },
};

const fill = (s, v) => s.replace(/\{(\w+)\}/g, (_, k) => v[k] ?? '');
const round2 = (n) => Math.round(n * 100) / 100;

export default function PurchaseBox({ product }) {
  const t = useT(T);
  const { addItem, buyNow, busy } = useCart();
  const plans = product.plans?.length ? product.plans : demoPlans();
  const subPct = plans[0]?.pct ?? SUBSCRIBE_PCT;

  const [mode, setMode] = useState(product.requiresPlan ? 'sub' : 'once');
  const [days, setDays] = useState(() => defaultInterval(product.handle, plans));
  const [qty, setQty] = useState(1);

  const base = product.amount;
  const cur = product.currency || 'DKK';
  const money = (n) => formatMoney(round2(n), cur);
  const tierPct = (n) => TIERS.find((x) => x.qty === n)?.pct || 0;
  const unit = (m, n) => (base == null ? null : base * (1 - tierPct(n) / 100) * (m === 'sub' ? 1 - subPct / 100 : 1));
  const packDays = DAYS_PER_PACK[product.handle];
  const perDay = showPerDay.has(product.handle) && packDays;

  const plan = plans.find((p) => p.days === days) || plans[0];
  const total = base == null ? null : unit(mode, qty) * qty;
  const saved = base == null ? 0 : base * qty - total;
  const go = (fn) => fn(product.variantId, qty, mode === 'sub' ? plan?.id || null : null);

  if (base == null) return null;

  return (
    <div
      className="buybox"
      data-base={base}
      data-cur={cur}
      data-sub={subPct}
      data-tiers={TIERS.map((x) => `${x.qty}:${x.pct}`).join(',')}
      data-perday={perDay ? packDays : ''}
      data-mode={mode}
    >
      <p className="bb-label" id="bb-type">{t.type}</p>
      <div className="bb-types" role="radiogroup" aria-labelledby="bb-type">
        {product.requiresPlan ? null : (
          <button type="button" role="radio" aria-checked={mode === 'once'} className="bb-type" data-mode="once" onClick={() => setMode('once')}>
            <span className="bb-type-name">{t.once}</span>
            <span className="bb-type-price" data-role="price-once">{money(unit('once', qty))}</span>
            {perDay && <span className="bb-type-per" data-role="perday-once" data-tpl={t.perDay}>{fill(t.perDay, { p: money(unit('once', qty) / packDays) })}</span>}
          </button>
        )}
        <button type="button" role="radio" aria-checked={mode === 'sub'} className="bb-type" data-mode="sub" onClick={() => setMode('sub')}>
          <span className="bb-badge">{t.save(subPct)}</span>
          <span className="bb-type-name">{t.sub}</span>
          <span className="bb-type-price" data-role="price-sub">
            <span data-role="price-sub-now">{money(unit('sub', qty))}</span> <s data-role="price-sub-was">{money(unit('once', qty))}</s>
          </span>
          {perDay && <span className="bb-type-per" data-role="perday-sub" data-tpl={t.perDay}>{fill(t.perDay, { p: money(unit('sub', qty) / packDays) })}</span>}
        </button>
      </div>

      <div className="bb-sub" hidden={mode !== 'sub'}>
        <p className="bb-label" id="bb-every">{t.every}</p>
        <div className="bb-chips" role="radiogroup" aria-labelledby="bb-every">
          {plans.map((p) => (
            <button type="button" role="radio" key={p.days ?? p.id} aria-checked={p.days === days} className="bb-chip" data-days={p.days} onClick={() => setDays(p.days)}>
              {p.days ? t.days(p.days) : p.name}
              {p.days === packDays && <em>{t.rec}</em>}
            </button>
          ))}
        </div>
        <ul className="bb-perks">
          {t.perks.map((x) => <li key={x}>{fill(x, { pct: subPct })}</li>)}
        </ul>
      </div>

      <p className="bb-label" id="bb-qty">{t.qty}</p>
      <div className="bb-qtys" role="radiogroup" aria-labelledby="bb-qty">
        {TIERS.map(({ qty: n, pct }) => (
          <button type="button" role="radio" key={n} aria-checked={qty === n} className="bb-qty" data-qty={n} onClick={() => setQty(n)}>
            {pct > 0 && <span className="bb-qty-save">-{pct}%</span>}
            <span className="bb-qty-n">{t.packs(n)}</span>
            <span className="bb-qty-each" data-role={`each-${n}`} data-tpl={t.each}>{fill(t.each, { p: money(unit(mode, n)) })}</span>
          </button>
        ))}
      </div>

      <div className="bb-total" aria-live="polite">
        <span>{t.total}</span>
        <strong data-role="total">{money(total)}</strong>
        <em data-role="saved" hidden={saved < 0.5} data-tpl={t.youSave}>{fill(t.youSave, { p: money(saved) })}</em>
      </div>

      <div className="pdp-actions">
        <button className="btn gold block" onClick={() => go(buyNow)} disabled={busy}>
          <span data-role="buy" data-once={t.buy} data-sub={t.subscribe}>{mode === 'sub' ? t.subscribe : t.buy}</span> <Arrow />
        </button>
        <button className="btn outline block" onClick={() => go(addItem)} disabled={busy}>
          {t.add}
        </button>
      </div>

      <div className="bb-sub" hidden={mode !== 'sub'}>
        <p className="bb-terms" data-role="terms" data-tpl={t.terms}>{fill(t.terms, { d: plan?.days ?? '', p: money(total) })}</p>
        <details className="bb-how">
          <summary>{t.how}</summary>
          <ol>
            {t.steps.map(([h, x]) => (
              <li key={h}><strong>{h}</strong> {x}</li>
            ))}
          </ol>
        </details>
      </div>
    </div>
  );
}
