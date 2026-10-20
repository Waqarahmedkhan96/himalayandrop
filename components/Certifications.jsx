'use client';
// Certification seals, drawn in code in the brand's maroon and gold.
// Only show a certification you actually hold, and link the certificate.
import { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { getSeals, Seal } from './Seal';
import { useLang } from './LangProvider';

const T = {
  en: { eyebrow: 'Proof, not promises', h: 'Certified &', hg: 'tested.', p: 'Produced under recognised quality standards, tested for heavy metals batch by batch, and backed by a 60-day money-back guarantee.' },
  da: { eyebrow: 'Bevis, ikke løfter', h: 'Certificeret og', hg: 'testet.', p: 'Produceret efter anerkendte kvalitetsstandarder, testet for tungmetaller batch for batch og med 60 dages penge-tilbage-garanti.' },
  de: { eyebrow: 'Beweise statt Versprechen', h: 'Zertifiziert &', hg: 'geprüft.', p: 'Hergestellt nach anerkannten Qualitätsstandards, Charge für Charge auf Schwermetalle geprüft und mit 60 Tagen Geld-zurück-Garantie.' },
  fr: { eyebrow: 'Des preuves, pas des promesses', h: 'Certifié et', hg: 'testé.', p: 'Produit selon des normes de qualité reconnues, testé lot par lot pour les métaux lourds et couvert par une garantie satisfait ou remboursé de 60 jours.' },
  es: { eyebrow: 'Pruebas, no promesas', h: 'Certificado y', hg: 'analizado.', p: 'Producido bajo normas de calidad reconocidas, analizado lote a lote en metales pesados y con garantía de devolución de 60 días.' },
  ar: { eyebrow: 'إثبات لا وعود', h: 'معتمد', hg: 'ومفحوص.', p: 'يُنتج وفق معايير جودة معترف بها، ويُفحص للمعادن الثقيلة دفعة بدفعة، مع ضمان استرداد المال لمدة 60 يوماً.' },
  ur: { eyebrow: 'وعدے نہیں، ثبوت', h: 'سرٹیفائیڈ اور', hg: 'ٹیسٹڈ۔', p: 'تسلیم شدہ معیار کے تحت تیار، ہر بیچ میں بھاری دھاتوں کا ٹیسٹ اور 60 دن کی منی بیک گارنٹی۔' },
};

export default function Certifications() {
  const root = useRef(null);
  const lang = useLang();
  const t = T[lang];
  const seals = getSeals(lang);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top 75%', once: true } })
        .from('.cert-card', { clipPath: 'inset(8% 6% 8% 6% round 48px)', duration: 1.4, ease: 'expo.out' })
        .from('.cert-head > *', { y: 24, opacity: 0, stagger: 0.08, duration: 1, ease: 'expo.out' }, 0.2)
        .from('.seal', { scale: 0.4, rotate: -120, opacity: 0, stagger: 0.1, duration: 1.4, ease: 'expo.out' }, 0.3);
      gsap.to('.seal-ring', { rotation: 360, svgOrigin: '100 100', duration: 40, repeat: -1, ease: 'none' });
    },
    { scope: root }
  );

  return (
    <section id="certifications" ref={root} className="cert-section">
      <div className="cert-card">
        <div className="cert-head">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2>{t.h} <em className="gold-text">{t.hg}</em></h2>
          <p>{t.p}</p>
        </div>
        <ul className="seals">
          {seals.map((s) => (
            <li className="seal" key={s.id}>
              <Seal s={s} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
