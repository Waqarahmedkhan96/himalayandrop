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
  de: {
    type: 'Kaufart', once: 'Einmalkauf', sub: 'Abo & Sparen', save: (p) => `${p} % sparen`,
    perDay: '{p} pro Tag', every: 'Lieferung alle', days: (d) => `${d} Tage`, rec: 'Empfohlen',
    qty: 'Menge', packs: (n) => (n === 1 ? '1 Packung' : `${n} Packungen`), each: '{p} pro Stück',
    total: 'Gesamt', youSave: 'Du sparst {p}',
    perks: ['{pct} % Rabatt auf jede Lieferung', 'Intervall jederzeit ändern', 'Jederzeit pausieren, überspringen oder kündigen. Keine Mindestlaufzeit'],
    terms: 'Verlängert sich automatisch alle {d} Tage zum Preis von {p}, bis du kündigst. Verwalten oder kündigen jederzeit in deinem Konto.',
    how: 'So funktioniert Abo & Sparen',
    steps: [
      ['Wähle dein Intervall', 'Bestimme, wie oft du eine neue Lieferung möchtest: alle 30, 60 oder 90 Tage.'],
      ['Wir liefern automatisch', 'Deine Bestellung wird pünktlich zum Abo-Preis versendet.'],
      ['Du behältst die Kontrolle', 'Lieferung überspringen, Intervall ändern oder kündigen in deinem Konto. Keine Gebühren, keine Mindestlaufzeit.'],
    ],
    buy: 'Jetzt kaufen', subscribe: 'Jetzt abonnieren', add: 'In den Warenkorb',
  },
  fr: {
    type: 'Type d’achat', once: 'Achat unique', sub: 'Abonnement', save: (p) => `-${p} %`,
    perDay: '{p} par jour', every: 'Livraison tous les', days: (d) => `${d} jours`, rec: 'Recommandé',
    qty: 'Quantité', packs: (n) => (n === 1 ? '1 unité' : `${n} unités`), each: '{p} l’unité',
    total: 'Total', youSave: 'Vous économisez {p}',
    perks: ['{pct} % de réduction sur chaque livraison', 'Changez la fréquence quand vous voulez', 'Pause, report ou résiliation à tout moment. Sans engagement'],
    terms: 'Renouvelé automatiquement tous les {d} jours au prix de {p} jusqu’à résiliation. Gérez ou résiliez à tout moment depuis votre compte.',
    how: 'Comment fonctionne l’abonnement',
    steps: [
      ['Choisissez votre fréquence', 'Indiquez à quel rythme vous souhaitez être livré : tous les 30, 60 ou 90 jours.'],
      ['Livraison automatique', 'Votre commande est expédiée à la date prévue, au prix de l’abonnement.'],
      ['Vous gardez le contrôle', 'Reportez une livraison, changez la fréquence ou résiliez depuis votre compte. Sans frais, sans engagement.'],
    ],
    buy: 'Acheter', subscribe: 'S’abonner', add: 'Ajouter au panier',
  },
  es: {
    type: 'Tipo de compra', once: 'Compra única', sub: 'Suscríbete y ahorra', save: (p) => `Ahorra ${p} %`,
    perDay: '{p} al día', every: 'Entrega cada', days: (d) => `${d} días`, rec: 'Recomendado',
    qty: 'Cantidad', packs: (n) => (n === 1 ? '1 unidad' : `${n} unidades`), each: '{p} cada uno',
    total: 'Total', youSave: 'Ahorras {p}',
    perks: ['{pct} % de descuento en cada envío', 'Cambia la frecuencia cuando quieras', 'Pausa, salta o cancela cuando quieras. Sin permanencia'],
    terms: 'Se renueva automáticamente cada {d} días por {p} hasta que canceles. Gestiona o cancela cuando quieras desde tu cuenta.',
    how: 'Cómo funciona Suscríbete y ahorra',
    steps: [
      ['Elige la frecuencia', 'Decide cada cuánto quieres recibir un envío: cada 30, 60 o 90 días.'],
      ['Enviamos automáticamente', 'Tu pedido sale a tiempo con el precio de suscripción.'],
      ['Tú tienes el control', 'Salta un envío, cambia la frecuencia o cancela desde tu cuenta. Sin comisiones ni permanencia.'],
    ],
    buy: 'Comprar ahora', subscribe: 'Suscribirme', add: 'Añadir al carrito',
  },
  ar: {
    type: 'نوع الشراء', once: 'شراء لمرة واحدة', sub: 'اشترك ووفّر', save: (p) => `وفّر ${p}%`,
    perDay: '{p} يومياً', every: 'التوصيل كل', days: (d) => `${d} يوماً`, rec: 'موصى به',
    qty: 'الكمية', packs: (n) => (n === 1 ? 'عبوة واحدة' : n === 2 ? 'عبوتان' : `${n} عبوات`), each: '{p} للعبوة',
    total: 'الإجمالي', youSave: 'توفّر {p}',
    perks: ['خصم {pct}% على كل توصيلة', 'غيّر الفترة متى شئت', 'أوقف مؤقتاً أو تخطَّ أو ألغِ في أي وقت. بلا التزام'],
    terms: 'يتجدد تلقائياً كل {d} يوماً بسعر {p} حتى تلغيه. يمكنك الإدارة أو الإلغاء في أي وقت من حسابك.',
    how: 'كيف يعمل الاشتراك والتوفير',
    steps: [
      ['اختر الفترة', 'حدد عدد مرات التوصيل: كل 30 أو 60 أو 90 يوماً.'],
      ['نوصل تلقائياً', 'يُشحن طلبك في موعده بسعر الاشتراك.'],
      ['التحكم بيدك', 'تخطَّ توصيلة أو غيّر الفترة أو ألغِ من حسابك. بلا رسوم وبلا التزام.'],
    ],
    buy: 'اشترِ الآن', subscribe: 'اشترك الآن', add: 'أضف إلى السلة',
  },
  ur: {
    type: 'خریداری کی قسم', once: 'ایک بار خریداری', sub: 'سبسکرائب کریں اور بچت کریں', save: (p) => `${p}% بچت`,
    perDay: '{p} روزانہ', every: 'ترسیل ہر', days: (d) => `${d} دن`, rec: 'تجویز کردہ',
    qty: 'تعداد', packs: (n) => `${n} پیک`, each: '{p} فی پیک',
    total: 'کل', youSave: 'آپ کی بچت {p}',
    perks: ['ہر ترسیل پر {pct}% رعایت', 'جب چاہیں وقفہ تبدیل کریں', 'کسی بھی وقت روکیں، چھوڑیں یا منسوخ کریں۔ کوئی پابندی نہیں'],
    terms: 'ہر {d} دن بعد {p} پر خود بخود تجدید ہوتی ہے جب تک آپ منسوخ نہ کریں۔ اپنے اکاؤنٹ سے کسی بھی وقت تبدیل یا منسوخ کریں۔',
    how: 'سبسکرپشن کیسے کام کرتی ہے',
    steps: [
      ['وقفہ منتخب کریں', 'طے کریں کہ نئی ترسیل کتنی بار چاہیے: ہر 30، 60 یا 90 دن۔'],
      ['خودکار ترسیل', 'آپ کا آرڈر وقت پر سبسکرپشن قیمت پر بھیجا جاتا ہے۔'],
      ['اختیار آپ کے پاس', 'اپنے اکاؤنٹ سے ترسیل چھوڑیں، وقفہ بدلیں یا منسوخ کریں۔ کوئی فیس نہیں، کوئی پابندی نہیں۔'],
    ],
    buy: 'ابھی خریدیں', subscribe: 'ابھی سبسکرائب کریں', add: 'کارٹ میں شامل کریں',
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
