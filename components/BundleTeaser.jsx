'use client';
// Shop page banner that leads to the bundles page.
import Link from './LLink';
import { useT } from './LangProvider';
import { Arrow } from './Arrow';
import { maxSaving } from '@/lib/bundles';

const T = {
  en: { eyebrow: 'Bundles', h: (n) => `Save up to ${n}%`, hg: 'with a set.', p: 'Resin, gummies, drops and capsules, paired for every kind of day. One order, one parcel.', cta: 'Shop bundles' },
  da: { eyebrow: 'Sæt', h: (n) => `Spar op til ${n}%`, hg: 'med et sæt.', p: 'Resin, vingummi, dråber og kapsler, samlet til alle slags dage. Én ordre, én pakke.', cta: 'Se alle sæt' },
  de: { eyebrow: 'Sets', h: (n) => `Bis zu ${n} % sparen`, hg: 'mit einem Set.', p: 'Harz, Gummies, Tropfen und Kapseln, kombiniert für jeden Tag. Eine Bestellung, ein Paket.', cta: 'Sets entdecken' },
  fr: { eyebrow: 'Coffrets', h: (n) => `Jusqu’à ${n} % d’économie`, hg: 'avec un coffret.', p: 'Résine, gommes, gouttes et gélules, associées pour chaque type de journée. Une commande, un colis.', cta: 'Voir les coffrets' },
  es: { eyebrow: 'Packs', h: (n) => `Ahorra hasta un ${n} %`, hg: 'con un pack.', p: 'Resina, gominolas, gotas y cápsulas, combinadas para cada tipo de día. Un pedido, un paquete.', cta: 'Ver packs' },
  ar: { eyebrow: 'المجموعات', h: (n) => `وفّر حتى ${n}%`, hg: 'مع مجموعة.', p: 'راتنج وعلكات وقطرات وكبسولات، منسقة لكل أنواع الأيام. طلب واحد وطرد واحد.', cta: 'تسوّق المجموعات' },
  ur: { eyebrow: 'بنڈلز', h: (n) => `${n}% تک بچت`, hg: 'سیٹ کے ساتھ۔', p: 'ریزن، گمیز، ڈراپس اور کیپسول، ہر طرح کے دن کے لیے۔ ایک آرڈر، ایک پارسل۔', cta: 'بنڈلز دیکھیں' },
};

export default function BundleTeaser() {
  const t = useT(T);
  return (
    <section className="section tight-top">
      <div className="container">
        <Link href="/bundles/" className="bundle-teaser" data-reveal>
          <div className="bt-copy">
            <span className="eyebrow">{t.eyebrow}</span>
            <h2>{t.h(maxSaving())} <em className="gold-text">{t.hg}</em></h2>
            <p>{t.p}</p>
            <span className="btn gold">{t.cta} <Arrow /></span>
          </div>
          <div className="bt-media"><img src="/images/bundles/complete-collection.webp" alt="" loading="lazy" /></div>
        </Link>
      </div>
    </section>
  );
}
