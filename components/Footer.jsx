'use client';
// Footer. The top edge is a Himalayan ridge silhouette, and the divider above
// the small print is a gold mountain line that draws itself as you reach it.
import { useMemo, useRef } from 'react';
import Link from './LLink';
import Logo from './Logo';
import { site, SOCIAL } from '@/lib/site';
import { useLang } from './LangProvider';

const T = {
  en: {
    follow: 'Follow us',
    tagline: 'A modern approach to a timeless natural substance. Designed in Denmark.',
    disclaimer: 'Food supplement. Do not exceed the recommended daily dose. Food supplements should not be used as a substitute for a varied, balanced diet and a healthy lifestyle. Keep out of reach of children.',
    rights: 'All rights reserved.',
  },
  da: {
    follow: 'Følg os',
    tagline: 'En moderne tilgang til et tidløst naturstof. Designet i Danmark.',
    disclaimer: 'Kosttilskud. Den anbefalede daglige dosis bør ikke overskrides. Kosttilskud bør ikke anvendes som erstatning for en varieret og balanceret kost og en sund livsstil. Opbevares utilgængeligt for børn.',
    rights: 'Alle rettigheder forbeholdes.',
  },
  de: {
    follow: 'Folge uns',
    tagline: 'Ein moderner Zugang zu einer zeitlosen Naturessenz. Gestaltet in Dänemark.',
    disclaimer: 'Nahrungsergänzungsmittel. Die empfohlene tägliche Verzehrmenge nicht überschreiten. Nahrungsergänzungsmittel sind kein Ersatz für eine abwechslungsreiche und ausgewogene Ernährung und eine gesunde Lebensweise. Außerhalb der Reichweite von Kindern aufbewahren.',
    rights: 'Alle Rechte vorbehalten.',
  },
  fr: {
    follow: 'Suivez-nous',
    tagline: 'Une approche moderne d’une substance naturelle intemporelle. Conçu au Danemark.',
    disclaimer: 'Complément alimentaire. Ne pas dépasser la dose journalière recommandée. Les compléments alimentaires ne doivent pas être utilisés comme substituts d’un régime alimentaire varié et équilibré et d’un mode de vie sain. Tenir hors de portée des jeunes enfants.',
    rights: 'Tous droits réservés.',
  },
  es: {
    follow: 'Síguenos',
    tagline: 'Una mirada moderna a una sustancia natural atemporal. Diseñado en Dinamarca.',
    disclaimer: 'Complemento alimenticio. No superar la dosis diaria expresamente recomendada. Los complementos alimenticios no deben utilizarse como sustituto de una dieta variada y equilibrada y de un estilo de vida saludable. Mantener fuera del alcance de los niños más pequeños.',
    rights: 'Todos los derechos reservados.',
  },
  ar: {
    follow: 'تابعنا',
    tagline: 'رؤية عصرية لمادة طبيعية خالدة. مصمم في الدنمارك.',
    disclaimer: 'مكمل غذائي. لا تتجاوز الجرعة اليومية الموصى بها. لا تُستخدم المكملات الغذائية بديلاً عن نظام غذائي متنوع ومتوازن ونمط حياة صحي. يُحفظ بعيداً عن متناول الأطفال.',
    rights: 'جميع الحقوق محفوظة.',
  },
  ur: {
    follow: 'ہمیں فالو کریں',
    tagline: 'ایک لازوال قدرتی جزو کا جدید انداز۔ ڈنمارک میں ڈیزائن۔',
    disclaimer: 'غذائی سپلیمنٹ۔ تجویز کردہ روزانہ خوراک سے زیادہ استعمال نہ کریں۔ غذائی سپلیمنٹ متوازن اور متنوع غذا اور صحت مند طرزِ زندگی کا متبادل نہیں ہیں۔ بچوں کی پہنچ سے دور رکھیں۔',
    rights: 'جملہ حقوق محفوظ ہیں۔',
  },
};
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { ridgePoints, toLine, toShape } from '@/lib/mountains';

function SocialIcon({ name }) {
  if (name === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8ZM10 15V9l5.2 3Z" />
    </svg>
  );
}

export default function Footer() {
  const root = useRef(null);
  const lang = useLang();
  const t = T[lang];
  const { footer, legal } = site[lang];
  const { back, front, frontLine, divider } = useMemo(() => {
    const b = ridgePoints(101, 120, 105, 5, 1200, 0.3);
    const f = ridgePoints(202, 135, 80, 8, 1200, 0.3);
    return {
      back: toShape(b, 1200, 140),
      front: toShape(f, 1200, 140),
      frontLine: toLine(f),
      divider: toLine(ridgePoints(303, 46, 38, 7, 1200, 0.3)),
    };
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      root.current.querySelectorAll('.draw').forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(p, { strokeDashoffset: 0, duration: 2.4, ease: 'power2.inOut', scrollTrigger: { trigger: p.closest('svg'), start: 'top 95%', once: true } });
      });
      gsap.from('.footer-ridge .ridge-back', { yPercent: 30, duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: root.current, start: 'top 95%', once: true } });
    },
    { scope: root }
  );

  return (
    <footer className="footer" ref={root}>
      <svg className="footer-ridge" viewBox="0 0 1200 140" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
        <path className="ridge-back" d={back} fill="#580f1b" />
        <path d={front} fill="#40010a" />
        <path className="draw" d={frontLine} fill="none" stroke="#cca25e" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="footer-body">
        <div className="container">
          <div className="footer-top">
            <div>
              <Logo size={28} />
              <p className="tagline">{t.tagline}</p>
              <div className="social" aria-label={t.follow}>
                <span className="social-label">{t.follow}</span>
                {SOCIAL.map((x) => (
                  <a key={x.key} href={x.href} target="_blank" rel="noopener noreferrer" aria-label={x.label} className={`social-${x.key}`}>
                    <SocialIcon name={x.key} />
                  </a>
                ))}
              </div>
            </div>
            <div className="footer-cols">
              {footer.map((col) => (
                <div className="footer-col" key={col.title}>
                  <h4>{col.title}</h4>
                  {col.links.map(([label, href]) => (
                    <Link key={label} href={href}>{label}</Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <svg className="footer-divider" viewBox="0 0 1200 50" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <path className="draw" d={divider} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
          </svg>

          <p className="disclaimer">{t.disclaimer}</p>
          <div className="footer-bottom">
            <span suppressHydrationWarning><bdi dir="ltr">© 2024–{new Date().getFullYear()} Himalayan Drop.</bdi> {t.rights}</span>
            <span className="legal-links">{legal.map(([l, h]) => <Link key={l} href={h}>{l}</Link>)}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
