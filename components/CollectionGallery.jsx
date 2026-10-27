'use client';
// Home collection: five products in arched alcoves on one travertine shelf.
// Scroll-snap track with counter, arrows, drag (mouse) and a progress bar.
// One action per product: "Shop X", straight to its product page.
import { useCallback, useEffect, useRef, useState } from 'react';
import Link from './LLink';
import { useLang } from './LangProvider';
import { formatMoney } from '@/lib/shopify';

const ORDER = ['shilajit-gold-resin', 'shilajit-silver-resin', 'shilajit-gummies', 'shilajit-drops', 'shilajit-capsules'];

const T = {
  en: { eyebrow: 'The collection', title: 'Find your daily ritual.', sub: 'Resin, gummies, drops and capsules.', prev: 'Previous products', next: 'Next products', status: 'Showing {a} to {b} of {n}', shop: 'Shop {x}',
    names: ['Gold Resin', 'Silver Resin', 'Shilajit Gummies', 'Shilajit Drops', 'Shilajit Capsules'],
    short: ['Gold Resin', 'Silver Resin', 'Gummies', 'Drops', 'Capsules'],
    detail: ['Gold Edition · 30 g', 'Silver Edition · 30 g', 'Strawberry · 60 gummies', 'Elderberry · 30 ml', 'Daily formula · 60 capsules'] },
  da: { eyebrow: 'Kollektionen', title: 'Find dit daglige ritual.', sub: 'Resin, vingummi, dråber og kapsler.', prev: 'Forrige produkter', next: 'Næste produkter', status: 'Viser {a} til {b} af {n}', shop: 'Køb {x}',
    names: ['Guld Resin', 'Sølv Resin', 'Shilajit Vingummi', 'Shilajit Dråber', 'Shilajit Kapsler'],
    short: ['Guld Resin', 'Sølv Resin', 'Vingummi', 'Dråber', 'Kapsler'],
    detail: ['Guldudgave · 30 g', 'Sølvudgave · 30 g', 'Jordbær · 60 vingummier', 'Hyldebær · 30 ml', 'Daglig formel · 60 kapsler'] },
  de: { eyebrow: 'Die Kollektion', title: 'Finde dein tägliches Ritual.', sub: 'Harz, Gummies, Tropfen und Kapseln.', prev: 'Vorherige Produkte', next: 'Nächste Produkte', status: '{a} bis {b} von {n}', shop: '{x} kaufen',
    names: ['Gold Harz', 'Silber Harz', 'Shilajit Gummies', 'Shilajit Tropfen', 'Shilajit Kapseln'],
    short: ['Gold Harz', 'Silber Harz', 'Gummies', 'Tropfen', 'Kapseln'],
    detail: ['Gold Edition · 30 g', 'Silver Edition · 30 g', 'Erdbeere · 60 Gummies', 'Holunder · 30 ml', 'Tägliche Formel · 60 Kapseln'] },
  fr: { eyebrow: 'La collection', title: 'Trouvez votre rituel quotidien.', sub: 'Résine, gommes, gouttes et gélules.', prev: 'Produits précédents', next: 'Produits suivants', status: '{a} à {b} sur {n}', shop: 'Acheter {x}',
    names: ['Résine Or', 'Résine Argent', 'Gommes Shilajit', 'Gouttes Shilajit', 'Gélules Shilajit'],
    short: ['la Résine Or', 'la Résine Argent', 'les gommes', 'les gouttes', 'les gélules'],
    detail: ['Édition Or · 30 g', 'Édition Argent · 30 g', 'Fraise · 60 gommes', 'Sureau · 30 ml', 'Formule quotidienne · 60 gélules'] },
  es: { eyebrow: 'La colección', title: 'Encuentra tu ritual diario.', sub: 'Resina, gominolas, gotas y cápsulas.', prev: 'Productos anteriores', next: 'Productos siguientes', status: '{a} a {b} de {n}', shop: 'Comprar {x}',
    names: ['Resina Oro', 'Resina Plata', 'Gominolas Shilajit', 'Gotas Shilajit', 'Cápsulas Shilajit'],
    short: ['Resina Oro', 'Resina Plata', 'gominolas', 'gotas', 'cápsulas'],
    detail: ['Edición Oro · 30 g', 'Edición Plata · 30 g', 'Fresa · 60 gominolas', 'Saúco · 30 ml', 'Fórmula diaria · 60 cápsulas'] },
  ar: { eyebrow: 'المجموعة', title: 'اكتشف طقسك اليومي.', sub: 'راتنج وعلكات وقطرات وكبسولات.', prev: 'المنتجات السابقة', next: 'المنتجات التالية', status: '{a} إلى {b} من {n}', shop: 'تسوّق {x}',
    names: ['الراتنج الذهبي', 'الراتنج الفضي', 'علكات شيلاجيت', 'قطرات شيلاجيت', 'كبسولات شيلاجيت'],
    short: ['الراتنج الذهبي', 'الراتنج الفضي', 'العلكات', 'القطرات', 'الكبسولات'],
    detail: ['الإصدار الذهبي · 30 غ', 'الإصدار الفضي · 30 غ', 'فراولة · 60 علكة', 'بيلسان · 30 مل', 'تركيبة يومية · 60 كبسولة'] },
  ur: { eyebrow: 'کلیکشن', title: 'اپنی روزانہ کی رسم چنیں۔', sub: 'ریزن، گمیز، ڈراپس اور کیپسول۔', prev: 'پچھلی پروڈکٹس', next: 'اگلی پروڈکٹس', status: '{n} میں سے {a} تا {b}', shop: '{x} خریدیں',
    names: ['گولڈ ریزن', 'سلور ریزن', 'سلاجیت گمیز', 'سلاجیت ڈراپس', 'سلاجیت کیپسول'],
    short: ['گولڈ ریزن', 'سلور ریزن', 'گمیز', 'ڈراپس', 'کیپسول'],
    detail: ['گولڈ ایڈیشن · 30 گرام', 'سلور ایڈیشن · 30 گرام', 'اسٹرابیری · 60 گمیز', 'ایلڈربیری · 30 ملی لیٹر', 'روزانہ فارمولا · 60 کیپسول'] },
};

// Each product's display plate: its alcove, shelf and real pack, rendered
// once to an image. x/y place the gold alcove number on the back wall.
const SCENE = {
  'shilajit-gold-resin': { img: '/images/collection/gold.webp', x: 29.9, y: 16.2, wine: true },
  'shilajit-silver-resin': { img: '/images/collection/silver.webp', x: 21.1, y: 16.2 },
  'shilajit-gummies': { img: '/images/collection/gummies.webp', x: 16.4, y: 16.2 },
  'shilajit-drops': { img: '/images/collection/drops.webp', x: 14.6, y: 16.2 },
  'shilajit-capsules': { img: '/images/collection/capsules.webp', x: 14.6, y: 16.2 },
};

const pad = (n) => String(n).padStart(2, '0');

// Soft leaf shadows falling across the wall from an unseen branch.
const LEAVES = (() => {
  const out = [];
  const branch = (x, y, a, len, n, s) => {
    for (let i = 0; i < n; i++) {
      const t = i / n;
      const px = x + Math.cos(a) * len * t;
      const py = y + Math.sin(a) * len * t;
      const side = i % 2 ? 1 : -1;
      const la = a + side * 0.9 + Math.sin(i * 1.7) * 0.2;
      const r = (s * (1 - t * 0.45)).toFixed(1);
      out.push(`<ellipse cx="${(px + Math.cos(la) * r).toFixed(1)}" cy="${(py + Math.sin(la) * r).toFixed(1)}" rx="${r}" ry="${(r * 0.38).toFixed(1)}" transform="rotate(${((la * 180) / Math.PI).toFixed(0)} ${(px + Math.cos(la) * r).toFixed(1)} ${(py + Math.sin(la) * r).toFixed(1)})"/>`);
    }
    out.push(`<path d="M${x} ${y} L${(x + Math.cos(a) * len).toFixed(1)} ${(y + Math.sin(a) * len).toFixed(1)}" stroke="currentColor" stroke-width="3" fill="none"/>`);
  };
  branch(-20, 40, 0.55, 330, 12, 34);
  branch(40, -10, 1.15, 260, 9, 30);
  branch(10, 260, -0.2, 220, 8, 26);
  return out.join('');
})();

function Leaves({ className }) {
  return (
    <svg className={className} viewBox="0 0 420 420" aria-hidden="true">
      <defs><filter id={`${className}-b`} x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="16" /></filter></defs>
      <g fill="currentColor" filter={`url(#${className}-b)`} dangerouslySetInnerHTML={{ __html: LEAVES }} />
    </svg>
  );
}

export default function CollectionGallery({ products }) {
  const lang = useLang();
  const t = T[lang] || T.en;
  const rtl = lang === 'ar' || lang === 'ur';
  const track = useRef(null);
  const drag = useRef(null);
  const [view, setView] = useState({ first: 0, per: 3 });

  const items = ORDER.map((h, i) => {
    const p = products.find((x) => x.handle === h);
    return p ? { ...p, i } : null;
  }).filter(Boolean);
  const n = items.length;

  const measure = useCallback(() => {
    const el = track.current;
    if (!el || !el.firstElementChild) return;
    const w = el.firstElementChild.getBoundingClientRect().width;
    const per = Math.max(1, Math.round(el.clientWidth / w));
    const first = Math.min(n - per, Math.max(0, Math.round(Math.abs(el.scrollLeft) / w)));
    setView((v) => (v.first === first && v.per === per ? v : { first, per }));
  }, [n]);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    measure();
    el.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      el.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  // Step one card from where the track is heading, so fast clicks never
  // leave it between two cards.
  const aim = useRef(null);
  const go = (dir) => {
    const el = track.current;
    const w = el.firstElementChild.getBoundingClientRect().width;
    const per = Math.max(1, Math.round(el.clientWidth / w));
    const from = aim.current ?? Math.round(Math.abs(el.scrollLeft) / w);
    const to = Math.min(n - per, Math.max(0, from + dir));
    aim.current = to;
    clearTimeout(aim.t);
    aim.t = setTimeout(() => { aim.current = null; }, 700);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollTo({ left: to * w * (rtl ? -1 : 1), behavior: reduce ? 'auto' : 'smooth' });
  };

  // Mouse drag (touch already scrolls natively).
  const onDown = (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    drag.current = { x: e.clientX, left: track.current.scrollLeft, moved: false };
  };
  const onMove = (e) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    if (!d.moved && Math.abs(dx) > 5) {
      d.moved = true;
      track.current.classList.add('is-drag');
    }
    if (d.moved) track.current.scrollLeft = d.left - dx;
  };
  const onUp = () => {
    const d = drag.current;
    drag.current = null;
    if (!d || !d.moved) return;
    const el = track.current;
    const w = el.firstElementChild.getBoundingClientRect().width;
    const sign = el.scrollLeft < 0 ? -1 : 1;
    const target = Math.round(Math.abs(el.scrollLeft) / w) * w * sign;
    el.classList.remove('is-drag');
    el.scrollTo({ left: target, behavior: 'smooth' });
    // Swallow the click that ends a drag so it doesn't open a product.
    el.addEventListener('click', (ev) => { ev.preventDefault(); ev.stopPropagation(); }, { capture: true, once: true });
  };

  const last = Math.min(n, view.first + view.per);
  const atStart = view.first <= 0;
  const atEnd = last >= n;
  const status = t.status.replace('{a}', view.first + 1).replace('{b}', last).replace('{n}', n);

  return (
    <section id="collection" className="cg" aria-labelledby="cg-title">
      <Leaves className="cg-leaves cg-leaves-l" />
      <Leaves className="cg-leaves cg-leaves-r" />
      <div className="container">
        <header className="cg-head">
          <div>
            <span className="cg-eyebrow">{t.eyebrow}</span>
            <h2 id="cg-title">{t.title}</h2>
            <p>{t.sub}</p>
          </div>
          <div className="cg-controls">
            <span className="cg-count" aria-hidden="true">
              <span dir="ltr">{view.per > 1 ? `${pad(view.first + 1)} — ${pad(last)}` : pad(view.first + 1)} / {pad(n)}</span>
            </span>
            <button type="button" className="cg-arrow cg-prev" onClick={() => go(-1)} disabled={atStart} aria-label={t.prev}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 6 8.5 12l6 6" /></svg>
            </button>
            <button type="button" className="cg-arrow cg-next" onClick={() => go(1)} disabled={atEnd} aria-label={t.next}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9.5 6 6 6-6 6" /></svg>
            </button>
          </div>
        </header>
      </div>

      <div
          className="cg-track"
          ref={track}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerLeave={onUp}
          onDragStart={(e) => e.preventDefault()}
        >
          {items.map((p) => {
            const s = SCENE[p.handle] || {};
            const href = `/products/${p.handle}/`;
            const price = p.amount != null ? formatMoney(p.amount, p.currency) : p.price;
            return (
              <article className="cg-card" key={p.handle} aria-labelledby={`cg-${p.handle}`}>
                <Link href={href} className={`cg-scene${s.wine ? ' is-wine' : ''}`} tabIndex={-1} aria-hidden="true" style={{ '--nx': `${s.x}%`, '--ny': `${s.y}%` }}>
                  <img src={s.img} alt="" width="1024" height="1088" loading={p.i < 3 ? 'eager' : 'lazy'} draggable="false" />
                  <span className="cg-num">{pad(p.i + 1)}</span>
                </Link>
                <div className="cg-info">
                  <h3 id={`cg-${p.handle}`}>{t.names[p.i]}</h3>
                  <p>{t.detail[p.i]}</p>
                  <b className="cg-price">{price}</b>
                  <Link href={href} className="cg-shop">
                    {t.shop.replace('{x}', t.short[p.i])}
                    <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10h13M11 5l5 5-5 5" /></svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

      <div className="container">
        <div className="cg-progress" aria-hidden="true">
          <span style={{ '--w': `${(view.per / n) * 100}%`, '--x': `${(view.first / view.per) * 100}%` }} />
        </div>
        <p className="sr-only" aria-live="polite">{status}</p>
      </div>
    </section>
  );
}
