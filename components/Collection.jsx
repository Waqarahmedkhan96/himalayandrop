'use client';
import Link from './LLink';
import { useT } from './LangProvider';

const T = {
  en: { eyebrow: 'The collection', title: 'Five ways to begin.', lead: 'Pure shilajit resin, gummies, drops and capsules, each lab-tested and in packaging made to keep.', more: 'Every product, every format, in one place.', cta: 'Explore the full collection' },
  da: { eyebrow: 'Kollektionen', title: 'Fem måder at begynde på.', lead: 'Ren shilajit resin, vingummi, dråber og kapsler, alle laboratorietestet og i emballage, der er værd at gemme.', more: 'Alle produkter, alle former, ét sted.', cta: 'Se hele kollektionen' },
  de: { eyebrow: 'Die Kollektion', title: 'Fünf Wege zum Start.', lead: 'Reines Shilajit Harz, Gummies, Tropfen und Kapseln, jedes laborgeprüft und in Verpackungen zum Aufbewahren.', more: 'Jedes Produkt, jede Form, an einem Ort.', cta: 'Die ganze Kollektion entdecken' },
  fr: { eyebrow: 'La collection', title: 'Cinq façons de commencer.', lead: 'Résine de shilajit pure, gommes, gouttes et gélules, chacune testée en laboratoire, dans un emballage qu’on garde.', more: 'Chaque produit, chaque format, au même endroit.', cta: 'Découvrir toute la collection' },
  es: { eyebrow: 'La colección', title: 'Cinco formas de empezar.', lead: 'Resina de shilajit pura, gominolas, gotas y cápsulas, cada una analizada en laboratorio y en un envase para conservar.', more: 'Cada producto, cada formato, en un solo lugar.', cta: 'Descubre toda la colección' },
  ar: { eyebrow: 'المجموعة', title: 'خمس طرق للبدء.', lead: 'راتنج شيلاجيت نقي وعلكات وقطرات وكبسولات، كلها مفحوصة مخبرياً وفي عبوات تستحق الاحتفاظ بها.', more: 'كل منتج وكل شكل في مكان واحد.', cta: 'اكتشف المجموعة كاملة' },
  ur: { eyebrow: 'کلیکشن', title: 'آغاز کے پانچ طریقے۔', lead: 'خالص سلاجیت ریزن، گمیز، ڈراپس اور کیپسول، ہر ایک لیب ٹیسٹڈ اور سنبھال کر رکھنے کے قابل پیکنگ میں۔', more: 'ہر پروڈکٹ، ہر شکل، ایک ہی جگہ۔', cta: 'مکمل کلیکشن دیکھیں' },
};
import Reveal from './Reveal';
import ShopCard from './ShopCard';
import { Arrow } from './Arrow';

export default function Collection({ products }) {
  const t = useT(T);
  return (
    <Reveal as="section" id="collection" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" data-reveal>{t.eyebrow}</span>
          <h2 data-reveal="lines">
            <span className="line"><span>{t.title}</span></span>
          </h2>
          <p data-reveal>{t.lead}</p>
        </div>
        <div className="shop-grid" data-reveal="stagger">
          {products.map((p) => (
            <ShopCard key={p.handle} product={p} />
          ))}
        </div>
        <div className="collection-more" data-reveal>
          <svg className="cm-peak" viewBox="0 0 120 36" aria-hidden="true">
            <path d="M0 35 L30 14 L40 21 L58 3 L76 22 L86 15 L120 35" fill="none" stroke="currentColor" strokeWidth="1.3" />
          </svg>
          <p>{t.more}</p>
          <Link href="/shop/" className="btn gold cm-btn">{t.cta} <Arrow /></Link>
        </div>
      </div>
    </Reveal>
  );
}
