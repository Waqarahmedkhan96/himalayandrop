'use client';
// Light version of the home hero and proof strip: cream background, the same text and product
// image as the burgundy hero, and a plain white strip with the same three facts plus the
// certificate seals. Shown when <html data-hero="light"> (see app/light.css and HeroSwitch).
import Link from './LLink';
import RatingLine from './RatingLine';
import { Arrow } from './Arrow';
import { useLang, useT } from './LangProvider';
import { T_NEW } from './Hero';
import { PROOF_T } from './ProofThread';

const SEALS = [['gmp', 'GMP'], ['iso22000', 'ISO 22000'], ['iso9001', 'ISO 9001']];

// The hero block on its own. tone="burgundy" gives the same layout in burgundy colours (see .lh-burg
// in app/light.css); it is used inside the burgundy home section.
export function LightHeroSection({ tone }) {
  const t = useT(T_NEW);
  return (
      <section className={`lh${tone === 'burgundy' ? ' lh-burg' : ''}`}>
        <div className="lh-in">
          <div className="lh-copy">
            <RatingLine />
            <span className="lh-eyebrow">{t.eyebrow}</span>
            <h1>
              <span className="sr-only">{t.lead}: </span>
              <span aria-hidden="true">{t.l1}</span>
              <em aria-hidden="true">{t.l2}</em>
            </h1>
            <p className="lh-lead"><span>{t.lead}</span><span>{t.lead2}</span></p>
            <div className="lh-ctas">
              <Link href="/#collection" className="lh-btn">{t.shop} <Arrow size={14} /></Link>
            </div>
            <p className="lh-lab">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 4.5 6v6c0 4.5 3.2 7.8 7.5 9 4.3-1.2 7.5-4.5 7.5-9V6Z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></svg>
              {t.lab}
            </p>
          </div>
          <div className="lh-art">
            <span className="lh-ring" aria-hidden="true" />
            <img src="/images/hero/collection.webp" alt={t.alt} width="1332" height="998" fetchPriority="high" />
          </div>
        </div>
      </section>
  );
}

export default function LightHero() {
  const lang = useLang();
  const p = PROOF_T[lang] || PROOF_T.en;

  return (
    <>
      <LightHeroSection />

      <section className="ls" aria-label={`${p.place}. ${p.lab}. ${p.std}.`}>
        <ul>
          <li><Link href="/our-shilajit/"><strong>{p.place}</strong><span>{p.alt}</span></Link></li>
          <li><Link href="/lab-results/"><strong>{p.lab}</strong><span>{p.labCta} <Arrow size={12} /></span></Link></li>
          <li><Link href="/certificates/"><strong>{p.std}</strong><span>{p.stdCta} <Arrow size={12} /></span></Link></li>
          <li className="ls-seals">
            <span className="ls-seal-row">
              {SEALS.map(([k, alt]) => <img key={k} src={`/images/certs/${k}.webp`} alt={alt} width="52" height="52" loading="lazy" />)}
            </span>
            <span>GMP · ISO 22000 · ISO 9001</span>
          </li>
        </ul>
      </section>
    </>
  );
}
