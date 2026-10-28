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
    detail: ['Gold Edition · 30 g', 'Himalayan Edition · 30 g', 'Strawberry · 60 gummies', 'Elderberry · 30 ml', 'Daily formula · 60 capsules'] },
  da: { eyebrow: 'Kollektionen', title: 'Find dit daglige ritual.', sub: 'Resin, vingummi, dråber og kapsler.', prev: 'Forrige produkter', next: 'Næste produkter', status: 'Viser {a} til {b} af {n}', shop: 'Køb {x}',
    names: ['Guld Resin', 'Sølv Resin', 'Shilajit Vingummi', 'Shilajit Dråber', 'Shilajit Kapsler'],
    short: ['Guld Resin', 'Sølv Resin', 'Vingummi', 'Dråber', 'Kapsler'],
    detail: ['Guldudgave · 30 g', 'Himalaya-udgave · 30 g', 'Jordbær · 60 vingummier', 'Hyldebær · 30 ml', 'Daglig formel · 60 kapsler'] },
  de: { eyebrow: 'Die Kollektion', title: 'Finde dein tägliches Ritual.', sub: 'Harz, Gummies, Tropfen und Kapseln.', prev: 'Vorherige Produkte', next: 'Nächste Produkte', status: '{a} bis {b} von {n}', shop: '{x} kaufen',
    names: ['Gold Harz', 'Silber Harz', 'Shilajit Gummies', 'Shilajit Tropfen', 'Shilajit Kapseln'],
    short: ['Gold Harz', 'Silber Harz', 'Gummies', 'Tropfen', 'Kapseln'],
    detail: ['Gold Edition · 30 g', 'Himalayan Edition · 30 g', 'Erdbeere · 60 Gummies', 'Holunder · 30 ml', 'Tägliche Formel · 60 Kapseln'] },
  fr: { eyebrow: 'La collection', title: 'Trouvez votre rituel quotidien.', sub: 'Résine, gommes, gouttes et gélules.', prev: 'Produits précédents', next: 'Produits suivants', status: '{a} à {b} sur {n}', shop: 'Acheter {x}',
    names: ['Résine Or', 'Résine Argent', 'Gommes Shilajit', 'Gouttes Shilajit', 'Gélules Shilajit'],
    short: ['la Résine Or', 'la Résine Argent', 'les gommes', 'les gouttes', 'les gélules'],
    detail: ['Édition Or · 30 g', 'Édition Himalaya · 30 g', 'Fraise · 60 gommes', 'Sureau · 30 ml', 'Formule quotidienne · 60 gélules'] },
  es: { eyebrow: 'La colección', title: 'Encuentra tu ritual diario.', sub: 'Resina, gominolas, gotas y cápsulas.', prev: 'Productos anteriores', next: 'Productos siguientes', status: '{a} a {b} de {n}', shop: 'Comprar {x}',
    names: ['Resina Oro', 'Resina Plata', 'Gominolas Shilajit', 'Gotas Shilajit', 'Cápsulas Shilajit'],
    short: ['Resina Oro', 'Resina Plata', 'gominolas', 'gotas', 'cápsulas'],
    detail: ['Edición Oro · 30 g', 'Edición Himalaya · 30 g', 'Fresa · 60 gominolas', 'Saúco · 30 ml', 'Fórmula diaria · 60 cápsulas'] },
  ar: { eyebrow: 'المجموعة', title: 'اكتشف طقسك اليومي.', sub: 'راتنج وعلكات وقطرات وكبسولات.', prev: 'المنتجات السابقة', next: 'المنتجات التالية', status: '{a} إلى {b} من {n}', shop: 'تسوّق {x}',
    names: ['الراتنج الذهبي', 'الراتنج الفضي', 'علكات شيلاجيت', 'قطرات شيلاجيت', 'كبسولات شيلاجيت'],
    short: ['الراتنج الذهبي', 'الراتنج الفضي', 'العلكات', 'القطرات', 'الكبسولات'],
    detail: ['الإصدار الذهبي · 30 غ', 'إصدار الهيمالايا · 30 غ', 'فراولة · 60 علكة', 'بيلسان · 30 مل', 'تركيبة يومية · 60 كبسولة'] },
  ur: { eyebrow: 'کلیکشن', title: 'اپنی روزانہ کی رسم چنیں۔', sub: 'ریزن، گمیز، ڈراپس اور کیپسول۔', prev: 'پچھلی پروڈکٹس', next: 'اگلی پروڈکٹس', status: '{n} میں سے {a} تا {b}', shop: '{x} خریدیں',
    names: ['گولڈ ریزن', 'سلور ریزن', 'سلاجیت گمیز', 'سلاجیت ڈراپس', 'سلاجیت کیپسول'],
    short: ['گولڈ ریزن', 'سلور ریزن', 'گمیز', 'ڈراپس', 'کیپسول'],
    detail: ['گولڈ ایڈیشن · 30 گرام', 'ہمالین ایڈیشن · 30 گرام', 'اسٹرابیری · 60 گمیز', 'ایلڈربیری · 30 ملی لیٹر', 'روزانہ فارمولا · 60 کیپسول'] },
};

// Each product's display plate: one third of the reference artwork (alcove,
// shelf and props) at 1:1, with the real pack standing on the same footprint.
// x/y place the alcove number on the back wall, as a share of the plate.
const SCENE = {
  'shilajit-gold-resin': { img: '/images/collection/gold.webp', x: 30.3, y: 24.6, dx: 18, wine: true },
  'shilajit-silver-resin': { img: '/images/collection/silver.webp', x: 21.3, y: 24.6, dx: 1 },
  'shilajit-gummies': { img: '/images/collection/gummies.webp', x: 14.9, y: 24.6, dx: -10 },
  'shilajit-drops': { img: '/images/collection/drops.webp', x: 13.4, y: 24.6, dx: -10 },
  'shilajit-capsules': { img: '/images/collection/capsules.webp', x: 12.6, y: 24.6, dx: -10 },
};

const pad = (n) => String(n).padStart(2, '0');

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
    el.scrollTo({ left: to * w, behavior: reduce ? 'auto' : 'smooth' });
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
      <div className="cg-in">
        <header className="cg-head">
          <div className="cg-titles">
            <span className="cg-eyebrow">{t.eyebrow}</span>
            <h2 id="cg-title">{t.title}</h2>
            <p>{t.sub}</p>
          </div>
          <div className="cg-controls" dir="ltr">
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

        <div
          className="cg-track"
          dir="ltr"
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
                  <img src={s.img} alt="" width="1024" height="1200" loading={p.i < 3 ? 'eager' : 'lazy'} draggable="false" />
                  <span className="cg-num">{pad(p.i + 1)}</span>
                </Link>
                <div className="cg-info" dir={rtl ? 'rtl' : undefined} style={{ '--dx': s.dx || 0 }}>
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

        <div className="cg-progress" dir="ltr" aria-hidden="true">
          <span style={{ '--w': `${100 / Math.max(1, n - view.per + 1)}%`, '--x': `${view.first * 100}%` }} />
        </div>
        <p className="sr-only" aria-live="polite">{status}</p>
      </div>
    </section>
  );
}
