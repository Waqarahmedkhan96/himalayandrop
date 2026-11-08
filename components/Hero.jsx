'use client';
// Hero: the collection on a stone pedestal in a maroon studio, with gold mountain line-art. The headline reveals
// line by line, the packaging rises into the centre and floats, and on scroll
// the product lifts while the mountains drift (parallax).
import { useMemo, useRef } from 'react';
import Link from './LLink';
import { useT } from './LangProvider';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { ridgePoints, toLine } from '@/lib/mountains';
import { Arrow } from './Arrow';

const ridges = [
  { seed: 7, base: 330, amp: 260, peaks: 3, op: 0.9, w: 1.4 },
  { seed: 19, base: 390, amp: 200, peaks: 5, op: 0.6, w: 1.1 },
  { seed: 31, base: 450, amp: 150, peaks: 7, op: 0.4, w: 1 },
];

export const T_NEW = {
  en: { eyebrow: 'The Skardu Collection', l1: 'Feel the energy', l2: 'Live the difference.', lead: 'Authentic Himalayan Shilajit', lead2: 'Hand-harvested at 5,000 m · 100% Natural', shop: 'Shop Premium Shilajit', lab: '3rd-Party Lab Tested', alt: 'Himalayan Drop shilajit collection: capsules, gummies, drops and two resin jars on a stone pedestal' },
  da: { eyebrow: 'Skardu-kollektionen', l1: 'Mærk energien', l2: 'Lev forskellen.', lead: 'Autentisk Himalaya-shilajit', lead2: 'Håndhøstet i 5.000 m højde · 100% naturlig', shop: 'Shop premium shilajit', lab: 'Testet af uafhængigt laboratorium', alt: 'Himalayan Drop shilajit kollektion: kapsler, vingummi, dråber og to krukker resin på en stensokkel' },
  de: { eyebrow: 'Die Skardu-Kollektion', l1: 'Spüre die Energie', l2: 'Lebe den Unterschied.', lead: 'Authentisches Himalaya-Shilajit', lead2: 'Handgeerntet auf 5.000 m · 100 % natürlich', shop: 'Premium-Shilajit shoppen', lab: 'Von unabhängigem Labor geprüft', alt: 'Himalayan Drop Shilajit-Kollektion: Kapseln, Gummies, Tropfen und zwei Harzgläser auf einem Steinsockel' },
  fr: { eyebrow: 'La collection Skardu', l1: 'Ressentez l’énergie', l2: 'Vivez la différence.', lead: 'Shilajit authentique de l’Himalaya', lead2: 'Récolté à la main à 5 000 m · 100 % naturel', shop: 'Découvrir le shilajit premium', lab: 'Testé par un laboratoire indépendant', alt: 'Collection de shilajit Himalayan Drop : gélules, gommes, gouttes et deux pots de résine sur un socle en pierre' },
  es: { eyebrow: 'La colección Skardu', l1: 'Siente la energía', l2: 'Vive la diferencia.', lead: 'Shilajit auténtico del Himalaya', lead2: 'Recolectado a mano a 5.000 m · 100 % natural', shop: 'Comprar shilajit premium', lab: 'Analizado por un laboratorio independiente', alt: 'Colección de shilajit Himalayan Drop: cápsulas, gominolas, gotas y dos tarros de resina sobre un pedestal de piedra' },
  ar: { eyebrow: 'مجموعة سكاردو', l1: 'اشعر بالطاقة', l2: 'عِش الفرق.', lead: 'شيلاجيت هيمالايا أصيل', lead2: 'محصود يدويًا على ارتفاع 5000 م · طبيعي 100%', shop: 'تسوّق الشيلاجيت الفاخر', lab: 'مفحوص في مختبر مستقل', alt: 'مجموعة شيلاجيت Himalayan Drop: كبسولات وعلكات وقطرات وبرطمانا راتنج على قاعدة حجرية' },
  ur: { eyebrow: 'اسکردو کلیکشن', l1: 'توانائی محسوس کریں', l2: 'فرق کو جیئیں۔', lead: 'خالص ہمالیائی شلاجیت', lead2: '5,000 میٹر پر ہاتھ سے چُنی گئی · 100% قدرتی', shop: 'پریمیم شلاجیت خریدیں', lab: 'آزاد لیب سے ٹیسٹ شدہ', alt: 'Himalayan Drop شلاجیت کلیکشن: کیپسول، گمیز، ڈراپس اور ریزن کے دو جار پتھر کے اسٹینڈ پر' },
};

export default function Hero() {
  const root = useRef(null);
  const t = useT(T_NEW);
  const lines = useMemo(() => ridges.map((r) => ({ ...r, d: toLine(ridgePoints(r.seed, r.base, r.amp, r.peaks)) })), []);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const paths = gsap.utils.toArray('.hero-lines path');
      paths.forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });

      gsap.timeline({ defaults: { ease: 'expo.out', duration: 1.4 } })
        .from('.hero-card', { scale: 0.96, borderRadius: 64, duration: 1.6 })
        .to(paths, { strokeDashoffset: 0, duration: 2.6, stagger: 0.25, ease: 'power2.inOut' }, 0.1)
        .from('.hero .eyebrow', { y: 14, opacity: 0, duration: 1 }, 0.3)
        .from('.hero h1 .line > span', { yPercent: 115, stagger: 0.12 }, 0.4)
        .fromTo('.hero-lead, .hero-ctas > *, .hero-lab', { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 1.1, clearProps: 'transform,opacity' }, 0.75);

      // The product picture is static on purpose (same as the light hero): no entrance, float or scroll movement.

      // Scroll: line-art and glow drift slower than the page.
      const st = { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true };
      gsap.to('.hero-lines', { yPercent: 14, ease: 'none', scrollTrigger: st });
      gsap.to('.hero-glow', { scale: 1.25, opacity: 0.6, ease: 'none', scrollTrigger: st });
      gsap.to('.hero-copy', { yPercent: -25, opacity: 0, ease: 'none', scrollTrigger: { ...st, end: '45% top' } });

      // Desktop: the glow follows the mouse a little.
      const glow = root.current.querySelector('.hero-glow');
      const xTo = gsap.quickTo(glow, 'x', { duration: 1.6, ease: 'power3' });
      const yTo = gsap.quickTo(glow, 'y', { duration: 1.6, ease: 'power3' });
      const onMove = (e) => {
        if (window.innerWidth < 1100) return;
        xTo((e.clientX / window.innerWidth - 0.5) * 120);
        yTo((e.clientY / window.innerHeight - 0.5) * 80);
      };
      window.addEventListener('mousemove', onMove);
      return () => window.removeEventListener('mousemove', onMove);
    },
    { scope: root }
  );

  return (
    <section className="hero is-new" ref={root}>
      <div className="hero-card">
        <div className="hero-glow" aria-hidden="true" />
        <svg className="hero-lines" viewBox="0 0 1200 460" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
          {lines.map((l) => (
            <path key={l.seed} d={l.d} fill="none" stroke="#cca25e" strokeOpacity={l.op} strokeWidth={l.w} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
          ))}
        </svg>

        <div className="hero-copy">
          <span className="eyebrow">{t.eyebrow}</span>
          <h1>
            <span className="sr-only">{t.lead}: </span>
            <span className="line"><span>{t.l1}</span></span>
            <span className="line"><span><em>{t.l2}</em></span></span>
          </h1>
          <p className="hero-lead"><span>{t.lead}</span><span>{t.lead2}</span></p>
          <div className="hero-ctas">
            <Link href="/#collection" className="btn hero-btn">
              {t.shop} <Arrow size={14} />
            </Link>
          </div>
          <p className="hero-lab">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 4.5 6v6c0 4.5 3.2 7.8 7.5 9 4.3-1.2 7.5-4.5 7.5-9V6Z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></svg>
            {t.lab}
          </p>
        </div>

        <div className="hero-product">
          <span className="hero-shadow" aria-hidden="true" />
          <img
            src="/images/hero/collection.webp"
            alt={t.alt}
            width="1332"
            height="998"
            fetchPriority="high"
          />
        </div>

      </div>
    </section>
  );
}
