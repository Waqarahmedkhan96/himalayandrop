'use client';
// Gummies spotlight: the tin floats and turns slightly as you scroll past.
import { useRef } from 'react';
import Link from './LLink';
import { useT } from './LangProvider';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { Arrow } from './Arrow';

const T = {
  en: {
    ingredients: ['Shilajit', 'L-Citrulline', 'Panax ginseng', 'Zinc', 'Selenium', 'Sea moss', 'Black seed'],
    alt: 'Himalayan Drop Shilajit Gummies Gold Edition tin, strawberry flavour', eyebrow: 'Gold Edition · Strawberry',
    p: '500 mg of our shilajit in every serving, in a soft strawberry gummy with six companion ingredients. An easy way to keep the ritual when you are on the move.',
    facts: [['60', 'Gummies'], ['30', 'Servings'], ['2', 'Per serving']], aria: 'Ingredients', cta: 'Discover gummies',
  },
  da: {
    ingredients: ['Shilajit', 'L-citrullin', 'Panax ginseng', 'Zink', 'Selen', 'Sea moss', 'Sortkommen'],
    alt: 'Himalayan Drop Shilajit Gummies Gold Edition dåse med jordbærsmag', eyebrow: 'Gold Edition · Jordbær',
    p: '500 mg af vores shilajit i hver portion, i en blød vingummi med jordbærsmag og seks aktive ingredienser. En nem måde at holde fast i ritualet, når du er på farten.',
    facts: [['60', 'Vingummi'], ['30', 'Portioner'], ['2', 'Pr. portion']], aria: 'Ingredienser', cta: 'Se shilajit vingummi',
  },
  de: {
    ingredients: ['Shilajit', 'L-Citrullin', 'Panax Ginseng', 'Zink', 'Selen', 'Seemoos', 'Schwarzkümmel'],
    alt: 'Himalayan Drop Shilajit Gummies Gold Edition Dose, Erdbeere', eyebrow: 'Gold Edition · Erdbeere',
    p: '500 mg unseres Shilajit in jeder Portion, in einem weichen Erdbeer-Gummy mit sechs begleitenden Zutaten. Ein einfacher Weg, dein Ritual auch unterwegs beizubehalten.',
    facts: [['60', 'Gummies'], ['30', 'Portionen'], ['2', 'Pro Portion']], aria: 'Zutaten', cta: 'Gummies entdecken',
  },
  fr: {
    ingredients: ['Shilajit', 'L-citrulline', 'Panax ginseng', 'Zinc', 'Sélénium', 'Mousse de mer', 'Nigelle'],
    alt: 'Boîte Himalayan Drop Shilajit Gummies Gold Edition, goût fraise', eyebrow: 'Gold Edition · Fraise',
    p: '500 mg de notre shilajit par portion, dans une gomme moelleuse à la fraise avec six ingrédients complémentaires. Une façon simple de garder le rituel en déplacement.',
    facts: [['60', 'Gommes'], ['30', 'Portions'], ['2', 'Par portion']], aria: 'Ingrédients', cta: 'Découvrir les gommes',
  },
  es: {
    ingredients: ['Shilajit', 'L-citrulina', 'Panax ginseng', 'Zinc', 'Selenio', 'Musgo marino', 'Comino negro'],
    alt: 'Lata Himalayan Drop Shilajit Gummies Gold Edition, sabor fresa', eyebrow: 'Gold Edition · Fresa',
    p: '500 mg de nuestro shilajit en cada porción, en una gominola suave de fresa con seis ingredientes que lo acompañan. Una forma fácil de mantener el ritual cuando estás fuera.',
    facts: [['60', 'Gominolas'], ['30', 'Porciones'], ['2', 'Por porción']], aria: 'Ingredientes', cta: 'Descubre las gominolas',
  },
  ar: {
    ingredients: ['شيلاجيت', 'إل-سيترولين', 'جينسنغ', 'زنك', 'سيلينيوم', 'طحلب بحري', 'حبة سوداء'],
    alt: 'علبة علكات شيلاجيت Himalayan Drop الإصدار الذهبي بنكهة الفراولة', eyebrow: 'الإصدار الذهبي · فراولة',
    p: '500 ملغ من الشيلاجيت في كل حصة، في علكة طرية بنكهة الفراولة مع ستة مكونات مرافقة. طريقة سهلة للحفاظ على طقسك أثناء التنقل.',
    facts: [['60', 'علكة'], ['30', 'حصة'], ['2', 'لكل حصة']], aria: 'المكونات', cta: 'اكتشف العلكات',
  },
  ur: {
    ingredients: ['سلاجیت', 'ایل-سٹرولین', 'جنسنگ', 'زنک', 'سیلینیم', 'سی ماس', 'کلونجی'],
    alt: 'Himalayan Drop سلاجیت گمیز گولڈ ایڈیشن ٹن، اسٹرابیری ذائقہ', eyebrow: 'گولڈ ایڈیشن · اسٹرابیری',
    p: 'ہر خوراک میں ہمارا 500 ملی گرام سلاجیت، نرم اسٹرابیری گمی میں چھ ساتھی اجزاء کے ساتھ۔ سفر میں بھی اپنا معمول برقرار رکھنے کا آسان طریقہ۔',
    facts: [['60', 'گمیز'], ['30', 'خوراکیں'], ['2', 'فی خوراک']], aria: 'اجزاء', cta: 'گمیز دیکھیں',
  },
};

export default function Spotlight() {
  const root = useRef(null);
  const t = useT(T);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        '.spot-media img',
        { y: 60, rotate: -6 },
        { y: -40, rotate: 4, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: 1 } }
      );
      gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top 75%', once: true } })
        .from('.spot', { clipPath: 'inset(8% 6% 8% 6% round 48px)', duration: 1.4, ease: 'expo.out' })
        .from('.spot-copy .line > span', { yPercent: 115, duration: 1.2, ease: 'expo.out' }, 0.2)
        .from('.spot-copy .eyebrow, .spot-copy p, .spot-facts, .chips li, .spot-copy .btn', { y: 20, opacity: 0, stagger: 0.05, duration: 1, ease: 'expo.out' }, 0.3);
    },
    { scope: root }
  );

  return (
    <section id="gummies" ref={root} style={{ scrollMarginTop: 80 }}>
      <div className="spot">
        <div className="spot-media">
          <img src="/images/cut-gummies-tin.webp" alt={t.alt} width="628" height="1100" loading="lazy" />
        </div>
        <div className="spot-copy">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2>
            <span className="line"><span>Shilajit Gummies</span></span>
          </h2>
          <p>{t.p}</p>
          <div className="spot-facts">
            {t.facts.map(([n, l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}
          </div>
          <ul className="chips" aria-label={t.aria}>
            {t.ingredients.map((i) => <li key={i}>{i}</li>)}
          </ul>
          <Link href="/products/shilajit-gummies/" className="btn">
            {t.cta} <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
