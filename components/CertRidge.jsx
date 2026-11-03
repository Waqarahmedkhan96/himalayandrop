'use client';
// Certification ridge: a narrow band under the proof strip. A resin drop
// travels a Himalayan ridge line and lights each certification seal as it
// arrives. Seals link to the certificate and lab pages.
import { useEffect, useRef } from 'react';
import Link from './LLink';
import { useLang } from './LangProvider';

const SEALS = [
  { key: 'gmp', alt: 'GMP certified', href: '/certificates/', peak: 100 },
  { key: 'iso22000', alt: 'ISO 22000 certified', href: '/certificates/', peak: 94 },
  { key: 'iso9001', alt: 'ISO 9001 certified', href: '/certificates/', peak: 104 },
  { key: 'lab-tested', alt: 'Lab tested for heavy metals', href: '/lab-results/', peak: 96 },
];
const LABEL = {
  en: 'Certifications and lab testing', da: 'Certificeringer og laboratorietest', de: 'Zertifizierungen und Labortests',
  fr: 'Certifications et analyses en laboratoire', es: 'Certificaciones y análisis de laboratorio', ar: 'الشهادات والفحوصات المخبرية', ur: 'سرٹیفکیٹس اور لیب ٹیسٹ',
};
const H = 150;

export default function CertRidge() {
  const lang = useLang();
  const root = useRef(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const q = (s) => el.querySelector(s);
    const svg = q('.cr-svg');
    const gates = [...el.querySelectorAll('.cr-gate')];
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0, xs = [], ys = [], cum = [], total = 0, gl = [], L = 0, looped = false;
    let visible = true, raf = 0, last = 0;

    const build = () => {
      W = el.clientWidth;
      if (!W) return;
      svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
      const gx = SEALS.map((_, k) => W * (0.125 + 0.25 * k));
      const keys = [[0, 126]];
      SEALS.forEach((s, k) => {
        keys.push(k === 0 ? [gx[0] - W * 0.09, 118] : [(gx[k - 1] + gx[k]) / 2, 128 - (k % 2) * 4]);
        keys.push([gx[k], s.peak]);
      });
      keys.push([W * 0.965, 124], [W, 120]);
      let pts = [];
      for (let x = 0; x <= W; x += 3) {
        let j = 1;
        while (j < keys.length - 1 && keys[j][0] < x) j++;
        const a = keys[j - 1], b = keys[j];
        const f = Math.min(1, Math.max(0, (x - a[0]) / Math.max(1, b[0] - a[0])));
        pts.push([x, a[1] + (b[1] - a[1]) * f + 2.2 * Math.sin(x * 0.31) + 1.4 * Math.sin(x * 0.83)]);
      }
      for (let p = 0; p < 3; p++) {
        const src = pts;
        pts = src.map((q, i) => {
          if (i < 2 || i > src.length - 3) return q;
          let s = 0;
          for (let d = -2; d <= 2; d++) s += src[i + d][1];
          return [q[0], (q[1] * 2 + (s / 5) * 3) / 5];
        });
      }
      xs = pts.map((p) => p[0]); ys = pts.map((p) => p[1]);
      cum = [0];
      for (let i = 1; i < xs.length; i++) cum.push(cum[i - 1] + Math.hypot(xs[i] - xs[i - 1], ys[i] - ys[i - 1]));
      total = cum[cum.length - 1];
      const d = 'M' + pts.map((p) => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join('L');
      q('.cr-edge').setAttribute('d', d);
      q('.cr-lit').setAttribute('d', d);
      q('.cr-near').setAttribute('d', `${d}L${W} ${H}L0 ${H}Z`);
      const far = [];
      for (let x = 0; x <= W; x += 6) far.push(`${x} ${(94 + 16 * Math.sin(x * 0.012 + 1) + 9 * Math.sin(x * 0.031) + 4 * Math.sin(x * 0.07)).toFixed(1)}`);
      q('.cr-far').setAttribute('d', `M${far.join('L')}L${W} ${H}L0 ${H}Z`);
      gl = gx.map((x) => { let i = 0; while (i < xs.length - 1 && xs[i] < x) i++; return cum[i]; });
      const sz = W <= 767 ? 52 : 64;
      gates.forEach((g, k) => {
        const y = ys[Math.round(gx[k] / 3)];
        g.style.left = gx[k] + 'px';
        g.querySelector('.cr-pin').style.top = y - 4 + 'px';
        g.querySelector('.cr-ring').style.top = y - 4 + 'px';
        g.querySelector('.cr-stem').style.height = Math.max(10, y - sz - 24) + 'px';
      });
      if (reduce) put(total, 0, true);
    };

    const at = (L) => {
      let i = 0, hi = cum.length - 1;
      while (i < hi - 1) { const m = (i + hi) >> 1; if (cum[m] < L) i = m; else hi = m; }
      const f = (L - cum[i]) / Math.max(0.001, cum[hi] - cum[i]);
      return [xs[i] + (xs[hi] - xs[i]) * f, ys[i] + (ys[hi] - ys[i]) * f];
    };
    const drop = q('.cr-drop'), lit = q('.cr-lit');
    const put = (L, o, full) => {
      const p = at(L);
      drop.setAttribute('transform', `translate(${p[0].toFixed(1)} ${(p[1] - 9).toFixed(1)})`);
      drop.setAttribute('opacity', o);
      lit.style.strokeDasharray = full ? `${total} 1` : `${L} ${total * 2}`;
    };
    // The drop never stops: it glides along the ridge at a steady pace, and each
    // seal lights up the moment the drop passes it and stays lit while on screen.
    const PASS = 7.5; // seconds for one pass
    const reset = () => {
      L = 0; looped = false;
      gates.forEach((g) => g.classList.remove('on'));
      put(0, 0); lit.style.strokeDasharray = `0 ${total * 2}`;
    };
    const frame = (now) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!visible || document.hidden || !total) return;
      const tail = total * 0.07, cycle = total + tail;
      L += (total / PASS) * dt;
      if (L >= cycle) { L -= cycle; looped = true; }
      const p = Math.min(L, total);
      const o = Math.min(1, L / 40) * (L > total ? 1 - (L - total) / tail : 1);
      put(p, Math.max(0, o), looped);
      gl.forEach((g, k) => { if (L >= g - 6) gates[k].classList.add('on'); });
    };

    // a few twinkling stars
    const sky = q('.cr-sky');
    sky.innerHTML = '';
    for (let i = 0; i < 24; i++) {
      const s = document.createElement('i');
      s.style.cssText = `left:${(i * 37 + 11) % 100}%;top:${(i * 53) % 42}%;animation-delay:${(i % 7) * 0.6}s;animation-duration:${3 + (i % 4)}s`;
      sky.appendChild(s);
    }

    build();
    if (reduce) gates.forEach((g) => g.classList.add('on'));
    else { put(0, 0); raf = requestAnimationFrame((n) => { last = n; frame(n); }); }
    const ro = new ResizeObserver(() => { build(); });
    ro.observe(el);
    const io = new IntersectionObserver(([e]) => { const was = visible; visible = e.isIntersecting; if (was && !visible && !reduce) reset(); }, { threshold: 0.2 });
    io.observe(el);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); };
  }, []);

  return (
    <section className="cr" aria-label={LABEL[lang] || LABEL.en}>
      <div className="cr-band" ref={root}>
        <div className="cr-sky" aria-hidden="true" />
        <svg className="cr-svg" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="cr-nf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4b0b1a" /><stop offset="1" stopColor="#1c0207" /></linearGradient>
            <linearGradient id="cr-tg" x1="0" x2="1"><stop offset="0" stopColor="#8A6429" /><stop offset="1" stopColor="#F6E3AE" /></linearGradient>
            <radialGradient id="cr-dg" cx=".38" cy=".32" r=".8"><stop offset="0" stopColor="#FFF8DC" /><stop offset=".4" stopColor="#FFC25C" /><stop offset="1" stopColor="#B9620F" /></radialGradient>
            <filter id="cr-bl" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="6" /></filter>
          </defs>
          <path className="cr-far" /><path className="cr-near" /><path className="cr-edge" /><path className="cr-lit" />
          <g className="cr-drop" opacity="0">
            <circle r="14" fill="#FFB347" opacity=".45" filter="url(#cr-bl)" />
            <path d="M0 -9 C4 -3 6 0 6 3 A6 6 0 0 1 -6 3 C-6 0 -4 -3 0 -9Z" fill="url(#cr-dg)" />
            <ellipse cx="-2" cy="1" rx="1.4" ry="2.2" fill="#fff" opacity=".7" />
          </g>
        </svg>
        {SEALS.map((s) => (
          <div className="cr-gate" key={s.key}>
            <Link href={s.href} className="cr-lab">
              <img className="cr-seal" src={`/images/certs/${s.key}.webp`} alt={s.alt} width="64" height="64" loading="lazy" decoding="async" />
            </Link>
            <span className="cr-stem" /><span className="cr-ring" /><span className="cr-pin" />
          </div>
        ))}
      </div>
    </section>
  );
}
