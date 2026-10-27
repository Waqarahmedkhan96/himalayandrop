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

const T = {
  en: { eyebrow: 'The Skardu Collection', l1: 'Born above', l2: 'the clouds.', lead: 'Pure Himalayan shilajit, hand-collected above 5,000 metres in Skardu. As resin, gummies, drops or capsules.', shop: 'Shop the collection', alt: 'Himalayan Drop shilajit collection: capsules, gummies, drops and two resin jars on a stone pedestal' },
  da: { eyebrow: 'Skardu-kollektionen', l1: 'Født over', l2: 'skyerne.', lead: 'Ren Himalaya shilajit, håndindsamlet over 5.000 meter i Skardu. Som resin, vingummi, dråber eller kapsler.', shop: 'Se kollektionen', alt: 'Himalayan Drop shilajit kollektion: kapsler, vingummi, dråber og to krukker resin på en stensokkel' },
  de: { eyebrow: 'Die Skardu-Kollektion', l1: 'Geboren über', l2: 'den Wolken.', lead: 'Reines Himalaya-Shilajit, von Hand gesammelt über 5.000 Metern in Skardu. Als Harz, Gummies, Tropfen oder Kapseln.', shop: 'Zur Kollektion', alt: 'Himalayan Drop Shilajit-Kollektion: Kapseln, Gummies, Tropfen und zwei Harzgläser auf einem Steinsockel' },
  fr: { eyebrow: 'La collection Skardu', l1: 'Né au-dessus', l2: 'des nuages.', lead: 'Shilajit pur de l’Himalaya, récolté à la main au-dessus de 5 000 mètres à Skardu. En résine, gommes, gouttes ou gélules.', shop: 'Découvrir la collection', alt: 'Collection de shilajit Himalayan Drop : gélules, gommes, gouttes et deux pots de résine sur un socle en pierre' },
  es: { eyebrow: 'La colección Skardu', l1: 'Nacido sobre', l2: 'las nubes.', lead: 'Shilajit puro del Himalaya, recolectado a mano a más de 5.000 metros en Skardu. En resina, gominolas, gotas o cápsulas.', shop: 'Ver la colección', alt: 'Colección de shilajit Himalayan Drop: cápsulas, gominolas, gotas y dos tarros de resina sobre un pedestal de piedra' },
  ar: { eyebrow: 'مجموعة سكاردو', l1: 'وُلد فوق', l2: 'الغيوم.', lead: 'شيلاجيت هيمالايا نقي، يُجمع يدوياً فوق 5000 متر في سكاردو. راتنج أو علكات أو قطرات أو كبسولات.', shop: 'تسوّق المجموعة', alt: 'مجموعة شيلاجيت Himalayan Drop: كبسولات وعلكات وقطرات وبرطمانا راتنج على قاعدة حجرية' },
  ur: { eyebrow: 'اسکردو کلیکشن', l1: 'بادلوں سے', l2: 'اوپر جنم۔', lead: 'خالص ہمالیائی شلاجیت، اسکردو میں 5,000 میٹر سے اوپر ہاتھ سے جمع کیا گیا۔ ریزن، گمیز، ڈراپس یا کیپسول میں۔', shop: 'کلیکشن دیکھیں', alt: 'Himalayan Drop شلاجیت کلیکشن: کیپسول، گمیز، ڈراپس اور ریزن کے دو جار پتھر کے اسٹینڈ پر' },
};

export default function Hero() {
  const root = useRef(null);
  const t = useT(T);
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
        .from('.hero-lead, .hero-ctas > *', { y: 20, opacity: 0, stagger: 0.08, duration: 1.1 }, 0.75)
        .from('.hero-product img', { y: 120, scale: 0.86, opacity: 0, duration: 1.8 }, 0.55)
        .from('.hero-shadow', { scaleX: 0.3, opacity: 0, duration: 1.6 }, 0.75);

      // Gentle float after it lands.
      gsap.to('.hero-product img', { y: -12, duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2.4 });
      gsap.to('.hero-shadow', { scaleX: 0.9, opacity: 0.75, duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2.4 });

      // Scroll: product lifts, line-art and glow drift slower than the page.
      const st = { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true };
      gsap.to('.hero-product', { yPercent: -10, scale: 0.94, ease: 'none', scrollTrigger: st });
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
    <section className="hero" ref={root}>
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
            <span className="line"><span>{t.l1}</span></span>
            <span className="line"><span><em className="gold-text">{t.l2}</em></span></span>
          </h1>
          <p className="hero-lead">{t.lead}</p>
          <div className="hero-ctas">
            <Link href="/#collection" className="btn gold">
              {t.shop} <Arrow />
            </Link>
          </div>
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
