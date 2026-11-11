'use client';
// Product page lab sections.
//  · LabSpotlight: the measured fulvic acid figure as one big number, the pack in front of it and an
//    example report card tilted over the corner.
//  · HeavyMetals: one metal per tab (lead, cadmium, mercury) in the same burgundy tabbed layout as the
//    certificates section on the home page.
// Figures come from lib/labdata.js and are PLACEHOLDERS until the real batch report is entered there.
import { useRef, useState } from 'react';
import Link from './LLink';
import { Arrow } from './Arrow';
import { useLang } from './LangProvider';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { pdpText } from '@/lib/pdp';
import { LAB } from '@/lib/labdata';
import { LANGS } from '@/lib/i18n';

const nf = (lang, n, d = 1) =>
  new Intl.NumberFormat(`${LANGS[lang]?.locale || 'en-GB'}-u-nu-latn`, { minimumFractionDigits: d, maximumFractionDigits: d }).format(n);

const HM = {
  en: { eyebrow: 'Heavy metal screening', h: 'Far below', hg: 'EU limits.', measured: 'Measured', report: 'View lab report', rep: 'Lab report' },
  da: { eyebrow: 'Screening for tungmetaller', h: 'Langt under', hg: 'EU-grænserne.', measured: 'Målt', report: 'Se laboratorierapport', rep: 'Laboratorierapport' },
  de: { eyebrow: 'Schwermetall-Prüfung', h: 'Weit unter den', hg: 'EU-Grenzwerten.', measured: 'Gemessen', report: 'Laborbericht ansehen', rep: 'Laborbericht' },
  fr: { eyebrow: 'Contrôle des métaux lourds', h: 'Très en dessous des', hg: 'limites de l’UE.', measured: 'Mesuré', report: 'Voir le rapport de laboratoire', rep: 'Rapport de laboratoire' },
  es: { eyebrow: 'Control de metales pesados', h: 'Muy por debajo de los', hg: 'límites de la UE.', measured: 'Medido', report: 'Ver informe de laboratorio', rep: 'Informe de laboratorio' },
  ar: { eyebrow: 'فحص المعادن الثقيلة', h: 'أقل بكثير من', hg: 'حدود الاتحاد الأوروبي.', measured: 'القياس', report: 'عرض تقرير المختبر', rep: 'تقرير المختبر' },
};

export function LabSpotlight({ product }) {
  const lang = useLang();
  const t = pdpText(lang).lab;
  const root = useRef(null);
  const num = useRef(null);
  const date = new Intl.DateTimeFormat(`${LANGS[lang]?.locale || 'en-GB'}-u-nu-latn`, { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(LAB.date));

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const o = { v: 0 };
      const tl = gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top 72%', once: true } });
      tl.from('.lr-copy > *', { y: 22, opacity: 0, stagger: 0.07, duration: 1, ease: 'expo.out' })
        .to(o, { v: LAB.fulvic, duration: 2, ease: 'power3.out', onUpdate: () => { if (num.current) num.current.textContent = nf(lang, o.v); } }, 0.1)
        .from('.lr-jar', { y: 50, opacity: 0, duration: 1.3, ease: 'expo.out' }, 0.2)
        .from('.lr-report', { y: 50, x: -24, rotate: -14, opacity: 0, duration: 1.3, ease: 'expo.out' }, 0.4);
    },
    { scope: root }
  );

  return (
    <section className="section lr" ref={root} id="lab">
      <div className="lr-card">
        <div className="lr-stage">
          <div className="lr-big" aria-label={`${nf(lang, LAB.fulvic)}% ${t.fulvicLabel}`}>
            <strong aria-hidden="true"><span ref={num}>{nf(lang, LAB.fulvic)}</span><small>%</small></strong>
            <span className="lr-unit">{t.fulvicLabel}</span>
          </div>
          <img className="lr-jar" src={product.image} alt="" loading="lazy" />
          <div className="lr-report" aria-hidden="true">
            <b className="lr-rh">{HM[lang]?.rep || HM.en.rep}</b>
            <span className="lr-rn"><bdi>{LAB.report}</bdi> · {date}</span>
            <dl>
              <div><dt>{t.fulvicLabel}</dt><dd><bdi dir="ltr">{nf(lang, LAB.fulvic)} ± {nf(lang, LAB.fulvicMargin)} %</bdi></dd></div>
              <div><dt>{t.method}</dt><dd>{LAB.method}</dd></div>
              <div><dt>{t.lab}</dt><dd>{t.labName}</dd></div>
            </dl>
            <i className="lr-ex">{t.example}</i>
          </div>
        </div>
        <div className="lr-copy">
          <p className="lr-eyebrow"><i aria-hidden="true" /> {t.eyebrow}</p>
          <h2>{t.hg}</h2>
          <p className="lr-lead">{t.p}</p>
          <Link href="/lab-results/" className="btn gold">{t.cta} <Arrow /></Link>
        </div>
      </div>
    </section>
  );
}

export function HeavyMetals() {
  const lang = useLang();
  const t = pdpText(lang).lab;
  const h = HM[lang] || HM.en;
  const [i, setI] = useState(0);
  const m = LAB.metals[i];
  const share = Math.max(2, Math.round((m.value / m.limit) * 100));
  const key = (e, k) => {
    const n = LAB.metals.length;
    if (e.key === 'ArrowRight') { e.preventDefault(); setI((k + 1) % n); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); setI((k + n - 1) % n); }
  };
  return (
    <section id="heavy-metals" className="ct hm" aria-label={`${h.h} ${h.hg}`}>
      <div className="ct-in">
        <header className="ct-top">
          <div>
            <p className="ct-eyebrow">{h.eyebrow}</p>
            <h2>{h.h} <em>{h.hg}</em></h2>
          </div>
          <div className="ct-tabs" role="tablist" aria-label={h.eyebrow}>
            {LAB.metals.map((x, k) => (
              <button key={x.key} type="button" role="tab" aria-selected={i === k} tabIndex={i === k ? 0 : -1} className="ct-tab" onClick={() => setI(k)} onKeyDown={(e) => key(e, k)}>
                <b className="hm-sym">{x.sym}</b>
                <span>{t.metals[x.key]}</span>
              </button>
            ))}
          </div>
        </header>
        <div className="ct-body" role="tabpanel">
          <div className="ct-copy">
            <p className="ct-idx"><b>0{i + 1}</b><span>/ 0{LAB.metals.length}</span></p>
            <p className="ct-ring">{t.ofLimit(share)}</p>
            <h3>{t.metals[m.key]}</h3>
            <p className="ct-desc">{t.metalsP}</p>
            <Link className="ct-more" href="/lab-results/">{h.report}</Link>
          </div>
          <div className="ct-show">
            <div className="ct-frame">
              <div className="ct-mat">
                <div className="hm-paper">
                  <span className="hm-k">{h.measured}</span>
                  <b className="hm-s">{m.sym}</b>
                  <strong className="hm-v"><bdi dir="ltr">{nf(lang, m.value, m.value < 0.1 ? 3 : 2)}</bdi><small> mg/kg</small></strong>
                  <div className="hm-bar" role="img" aria-label={t.ofLimit(share)}><span style={{ width: `${share}%` }} /></div>
                  <span className="hm-lim">{t.limit}: <bdi dir="ltr">{nf(lang, m.limit, m.limit < 1 ? 2 : 1)} mg/kg</bdi></span>
                </div>
              </div>
            </div>
            <p className="ct-cap">{t.example} · <bdi>{LAB.report}</bdi></p>
          </div>
        </div>
      </div>
    </section>
  );
}
