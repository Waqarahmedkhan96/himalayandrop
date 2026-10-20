// Branded 404: shown for any address that does not exist, in both languages.
import Link from './LLink';
import { Arrow } from './Arrow';

export default function NotFoundView() {
  return (
    <section className="page-hero nf">
      <div className="page-hero-card nf-card">
        <svg className="page-hero-lines" viewBox="0 0 1200 360" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
          <path d="M0 360 L180 210 L260 260 L430 90 L560 230 L640 180 L820 300 L940 240 L1200 340" fill="none" stroke="#cca25e" strokeOpacity="0.8" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
          <path d="M0 360 L140 300 L330 330 L520 270 L700 320 L880 290 L1200 350" fill="none" stroke="#cca25e" strokeOpacity="0.45" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
        </svg>
        <span className="eyebrow">404</span>
        <h1>This path leads <em className="gold-text">off the map.</em></h1>
        <p>The page you were looking for has moved or does not exist.</p>
        <p className="nf-da" lang="da">Siden findes ikke, eller den er flyttet.</p>
        <div className="hero-ctas">
          <Link href="/" className="btn gold">Back to home <Arrow /></Link>
          <Link href="/shop/" className="btn ghost">Shop the collection</Link>
        </div>
        <p className="nf-links">
          <a href="/da/" lang="da">Til den danske side</a> · <Link href="/contact/">Contact us</Link>
        </p>
      </div>
    </section>
  );
}
