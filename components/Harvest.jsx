'use client';
// "Harvested above 5,000 m": a contour-line mountain in gold, drawn after the
// silhouette of K2 with its Bottleneck couloir and Shoulder. The lines draw in
// from the front, the summit marker pulses and the altitude counts up.
import { useMemo, useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { useLang } from './LangProvider';

const T = {
  en: {
    eyebrow: 'Where it comes from', h: 'Harvested high in', hg: 'the Himalayas.',
    p: 'Shilajit forms slowly in high mountain rock, far above roads and towns. Ours is hand-collected above 5,000 metres near Skardu, in the shadow of K2, then purified and lab-tested before it is sealed in glass.',
    alt: 'Harvest altitude', num: '5,000', facts: [['Skardu', 'Origin'], ['Per batch', 'Lab tested'], ['UV glass', 'Light protected']],
    aria: 'Contour line drawing of a peak inspired by K2, with the Bottleneck marked and the harvest zone above 5,000 metres',
    zone: 'HARVEST ZONE · 5,000 M+', bneck: '≈ 8,200 M', peak: 'K2 · 8,611 M', cap: 'Illustration inspired by K2 and its Bottleneck', locale: 'en-US',
  },
  da: {
    eyebrow: 'Hvor den kommer fra', h: 'Høstet højt oppe i', hg: 'Himalaya.',
    p: 'Shilajit dannes langsomt i klipper højt oppe i bjergene, langt over veje og byer. Vores samles med håndkraft over 5.000 meter ved Skardu, i skyggen af K2, og renses og testes i laboratoriet, før den forsegles i glas.',
    alt: 'Høsthøjde', num: '5.000', facts: [['Skardu', 'Oprindelse'], ['Hver batch', 'Laboratorietestet'], ['UV-glas', 'Lysbeskyttet']],
    aria: 'Konturtegning af en top inspireret af K2, med Bottleneck markeret og høstzonen over 5.000 meter',
    zone: 'HØSTZONE · 5.000 M+', bneck: '≈ 8.200 M', peak: 'K2 · 8.611 M', cap: 'Illustration inspireret af K2 og dens Bottleneck', locale: 'da-DK',
  },
  de: {
    eyebrow: 'Woher es kommt', h: 'Geerntet hoch oben im', hg: 'Himalaya.',
    p: 'Shilajit entsteht langsam in hohem Gebirgsgestein, weit oberhalb von Straßen und Städten. Unseres wird von Hand über 5.000 Metern nahe Skardu gesammelt, im Schatten des K2, dann gereinigt und im Labor geprüft, bevor es in Glas versiegelt wird.',
    alt: 'Erntehöhe', num: '5.000', facts: [['Skardu', 'Herkunft'], ['Je Charge', 'Laborgeprüft'], ['UV-Glas', 'Lichtgeschützt']],
    aria: 'Höhenlinien-Zeichnung eines Gipfels nach dem Vorbild des K2, mit markiertem Flaschenhals und der Erntezone über 5.000 Metern',
    zone: 'ERNTEZONE · 5.000 M+', bneck: '≈ 8.200 M', peak: 'K2 · 8.611 M', cap: 'Illustration nach dem Vorbild des K2 und seines Flaschenhalses', locale: 'de-DE',
  },
  fr: {
    eyebrow: 'D’où il vient', h: 'Récolté au cœur de', hg: 'l’Himalaya.',
    p: 'Le shilajit se forme lentement dans la roche de haute montagne, bien au-dessus des routes et des villes. Le nôtre est récolté à la main au-dessus de 5 000 mètres près de Skardu, à l’ombre du K2, puis purifié et testé en laboratoire avant d’être scellé dans le verre.',
    alt: 'Altitude de récolte', num: '5 000', facts: [['Skardu', 'Origine'], ['Par lot', 'Testé en labo'], ['Verre UV', 'Protégé de la lumière']],
    aria: 'Dessin en courbes de niveau d’un sommet inspiré du K2, avec le Goulet marqué et la zone de récolte au-dessus de 5 000 mètres',
    zone: 'ZONE DE RÉCOLTE · 5 000 M+', bneck: '≈ 8 200 M', peak: 'K2 · 8 611 M', cap: 'Illustration inspirée du K2 et de son Goulet', locale: 'fr-FR',
  },
  es: {
    eyebrow: 'De dónde viene', h: 'Recolectado en lo alto del', hg: 'Himalaya.',
    p: 'El shilajit se forma lentamente en la roca de alta montaña, muy por encima de carreteras y pueblos. El nuestro se recoge a mano a más de 5.000 metros cerca de Skardu, a la sombra del K2, y se purifica y analiza en laboratorio antes de sellarse en vidrio.',
    alt: 'Altitud de recolección', num: '5.000', facts: [['Skardu', 'Origen'], ['Por lote', 'Analizado'], ['Vidrio UV', 'Protegido de la luz']],
    aria: 'Dibujo de curvas de nivel de una cumbre inspirada en el K2, con el Cuello de Botella marcado y la zona de recolección por encima de 5.000 metros',
    zone: 'ZONA DE RECOLECCIÓN · 5.000 M+', bneck: '≈ 8.200 M', peak: 'K2 · 8.611 M', cap: 'Ilustración inspirada en el K2 y su Cuello de Botella', locale: 'es-ES',
  },
  ar: {
    eyebrow: 'من أين يأتي', h: 'يُجمع في أعالي', hg: 'جبال الهيمالايا.',
    p: 'يتكوّن الشيلاجيت ببطء في صخور الجبال العالية، بعيداً عن الطرق والمدن. يُجمع الشيلاجيت لدينا يدوياً على ارتفاع يزيد عن 5000 متر قرب سكردو، في ظل قمة K2، ثم يُنقّى ويُفحص مخبرياً قبل أن يُحفظ في الزجاج.',
    alt: 'ارتفاع الجمع', num: '5,000', facts: [['سكردو', 'المصدر'], ['لكل دفعة', 'مفحوص مخبرياً'], ['زجاج UV', 'محمي من الضوء']],
    aria: 'رسم بخطوط الكنتور لقمة مستوحاة من K2، مع تحديد عنق الزجاجة ومنطقة الجمع فوق 5000 متر',
    zone: 'منطقة الجمع · +5,000 م', bneck: '≈ 8,200 م', peak: 'K2 · 8,611 م', cap: 'رسم مستوحى من قمة K2 وعنق الزجاجة', locale: 'en-US',
  },
  ur: {
    eyebrow: 'یہ کہاں سے آتا ہے', h: 'ہمالیہ کی', hg: 'بلندیوں سے۔',
    p: 'سلاجیت اونچے پہاڑی پتھروں میں سڑکوں اور شہروں سے بہت دور آہستہ آہستہ بنتا ہے۔ ہمارا سلاجیت اسکردو کے قریب، کے ٹو کے سائے میں 5,000 میٹر سے زیادہ بلندی سے ہاتھ سے چنا جاتا ہے، پھر صاف کر کے لیب میں ٹیسٹ کیا جاتا ہے اور شیشے میں بند کیا جاتا ہے۔',
    alt: 'چناؤ کی بلندی', num: '5,000', facts: [['اسکردو', 'ماخذ'], ['ہر بیچ', 'لیب ٹیسٹڈ'], ['UV شیشہ', 'روشنی سے محفوظ']],
    aria: 'کے ٹو سے متاثر چوٹی کا کنٹور ڈرائنگ، جس میں باٹل نیک اور 5,000 میٹر سے اوپر چناؤ کا علاقہ دکھایا گیا ہے',
    zone: 'چناؤ کا علاقہ · +5,000 میٹر', bneck: '≈ 8,200 میٹر', peak: 'K2 · 8,611 میٹر', cap: 'کے ٹو اور اس کے باٹل نیک سے متاثر خاکہ', locale: 'en-US',
  },
};

const W = 600;
const H = 380;

// K2 profile: steep pyramid summit, the narrow Bottleneck just below it on
// the right, then the broad Shoulder before the ridge falls away.
const K2 = [
  [0.0, 0.03], [0.08, 0.08], [0.14, 0.17], [0.19, 0.22], [0.24, 0.34], [0.28, 0.4],
  [0.33, 0.56], [0.37, 0.66], [0.41, 0.82], [0.44, 0.93], [0.465, 1.0],
  [0.49, 0.95], [0.505, 0.905], [0.52, 0.895], [0.54, 0.86], [0.575, 0.8],
  [0.62, 0.785], [0.67, 0.77], [0.71, 0.7], [0.75, 0.56], [0.8, 0.42],
  [0.85, 0.3], [0.9, 0.17], [0.95, 0.08], [1.0, 0.03],
];

function profile(x, k) {
  let i = 1;
  while (i < K2.length - 1 && K2[i][0] < x) i++;
  const [x0, y0] = K2[i - 1];
  const [x1, y1] = K2[i];
  const h = y0 + ((y1 - y0) * (x - x0)) / (x1 - x0 || 1);
  return h + 0.012 * Math.sin(x * 55 + k * 0.9) * (1 - h * 0.6);
}

// Altitude scale used for the labels (base of the drawing ≈ 3,500 m).
const BASE_M = 3500;
const TOP_M = 8611;
const yAt = (m) => 300 - ((m - BASE_M) / (TOP_M - BASE_M)) * 250;

function contourLines(count = 34) {
  const lines = [];
  for (let k = 0; k < count; k++) {
    const t = k / (count - 1); // 0 = back (top), 1 = front
    const base = 300 + t * 60;
    const height = 250 * (1 - t * 0.85);
    let d = '';
    for (let i = 0; i <= 200; i++) {
      const x = i / 200;
      const y = base - profile(x, k) * height;
      d += `${i ? 'L' : 'M'}${(x * W).toFixed(1)} ${y.toFixed(1)}`;
    }
    lines.push({ d, op: 0.25 + t * 0.75 });
  }
  return lines;
}

export default function Harvest() {
  const root = useRef(null);
  const t = T[useLang()];
  const lines = useMemo(() => contourLines(), []);
  const peakY = 300 - 250;
  const harvestY = yAt(5000);
  const bottleY = yAt(8250);

  useGSAP(
    () => {
      const num = root.current.querySelector('.alt-num');
      if (prefersReducedMotion()) return;
      const paths = gsap.utils.toArray('.contour path');
      paths.forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      });
      const counter = { v: 0 };
      gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top 70%', once: true } })
        .from('.harvest-card', { clipPath: 'inset(8% 6% 8% 6% round 48px)', duration: 1.4, ease: 'expo.out' })
        .to(paths.slice().reverse(), { strokeDashoffset: 0, duration: 1.6, stagger: 0.03, ease: 'power2.out' }, 0.1)
        .from('.harvest-copy > *', { y: 24, opacity: 0, stagger: 0.08, duration: 1, ease: 'expo.out' }, 0.3)
        .from('.summit', { scale: 0, transformOrigin: 'center', duration: 0.8, ease: 'back.out(3)' }, 1.4)
        .from('.k2-label', { opacity: 0, x: 12, stagger: 0.2, duration: 0.9, ease: 'expo.out' }, 1.6)
        .from('.harvest-zone', { scaleX: 0, transformOrigin: 'left center', duration: 1.4, ease: 'expo.inOut' }, 1.2)
        .to(counter, { v: 5000, duration: 2, ease: 'power3.out', onUpdate: () => (num.textContent = Math.round(counter.v).toLocaleString(t.locale)) }, 0.6);
      gsap.to('.contour', { yPercent: -6, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: 1 } });
    },
    { scope: root }
  );

  return (
    <section id="harvest" className="harvest-section" ref={root}>
      <div className="harvest-card">
        <div className="harvest-copy">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2>{t.h} <em className="gold-text">{t.hg}</em></h2>
          <p>{t.p}</p>
          <div className="alt">
            <span className="alt-label">{t.alt}</span>
            <span className="alt-value">
              <span className="alt-gt">›</span>
              <span className="alt-num">{t.num}</span>
              <span className="alt-unit">m</span>
            </span>
          </div>
          <ul className="harvest-facts">
            {t.facts.map(([a, b]) => <li key={a}><strong>{a}</strong><span>{b}</span></li>)}
          </ul>
        </div>

        <div className="harvest-art">
          <svg viewBox={`0 -80 ${W} ${H + 80}`} role="img" aria-label={t.aria}>
            <defs>
              <linearGradient id="contour-gold" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#a8803f" />
                <stop offset="0.45" stopColor="#eed9a6" />
                <stop offset="1" stopColor="#b88f4d" />
              </linearGradient>
              <radialGradient id="summit-glow">
                <stop offset="0" stopColor="#fff3d6" stopOpacity="0.9" />
                <stop offset="1" stopColor="#fff3d6" stopOpacity="0" />
              </radialGradient>
            </defs>
            <g className="contour">
              {lines.map((l, i) => (
                <path key={i} d={l.d} fill="none" stroke="url(#contour-gold)" strokeOpacity={l.op} strokeWidth="1" vectorEffect="non-scaling-stroke" />
              ))}
              <line x1="0" y1="360" x2={W} y2="360" stroke="#cca25e" strokeWidth="1.5" />
            </g>
            <g className="harvest-zone">
              <line x1="0" y1={harvestY} x2={W} y2={harvestY} stroke="#e2c487" strokeWidth="1" strokeDasharray="6 6" opacity="0.7" />
              <rect x="0" y={harvestY - 28} width="190" height="22" rx="11" fill="rgba(42,1,7,0.75)" />
              <text x="12" y={harvestY - 13} fill="#eed9a6" fontSize="11.5" fontWeight="700" letterSpacing="1.8" fontFamily="Manrope Variable, Manrope, sans-serif">{t.zone}</text>
            </g>
            <g className="k2-label">
              <path d={`M ${0.515 * W + 6} ${bottleY} L ${0.515 * W + 70} ${bottleY - 22} L ${0.515 * W + 120} ${bottleY - 22}`} fill="none" stroke="#e2c487" strokeWidth="1" />
              <circle cx={0.515 * W} cy={bottleY + 2} r="4" fill="#eed9a6" />
              <text x={0.515 * W + 126} y={bottleY - 18} fill="#eed9a6" fontSize="13" fontStyle="italic" fontFamily="Playfair Display Variable, Playfair Display, serif">The Bottleneck</text>
              <text x={0.515 * W + 126} y={bottleY - 3} fill="rgba(247,241,232,0.6)" fontSize="10" letterSpacing="1.5" fontFamily="Manrope Variable, Manrope, sans-serif">{t.bneck}</text>
            </g>
            <g className="summit" transform={`translate(${0.465 * W} ${peakY - 4})`}>
              <circle r="26" fill="url(#summit-glow)" className="summit-pulse" />
              <circle r="5.5" fill="#fff6e2" />
              <line x1="0" y1="-10" x2="0" y2="-44" stroke="#e2c487" strokeWidth="1" strokeDasharray="3 3" />
              <text y="-52" textAnchor="middle" fill="#eed9a6" fontSize="13" fontWeight="700" letterSpacing="2" fontFamily="Manrope Variable, Manrope, sans-serif">{t.peak}</text>
            </g>
          </svg>
          <p className="art-caption">{t.cap}</p>
        </div>
      </div>
    </section>
  );
}
