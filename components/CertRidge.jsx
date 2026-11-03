'use client';
// Certification ridge: a narrow band under the proof strip. A small button flips it
// between two views: mountains below the seals, or hanging above them.
// The ridge and the
// seals travel right to left without end; a resin drop runs the other way,
// left to right, and lights each seal as it passes. Seals stay lit while the
// band is on screen. They are not links.
import { useEffect, useRef, useState } from 'react';
import Link from './LLink';
import { useLang } from './LangProvider';

const SEALS = [
  { key: 'gmp', alt: 'GMP certified', peak: 100 },
  { key: 'iso22000', alt: 'ISO 22000 certified', peak: 94 },
  { key: 'iso9001', alt: 'ISO 9001 certified', peak: 104 },
  { key: 'lab-tested', alt: 'Lab tested for heavy metals', peak: 96 },
  { key: 'natural', alt: '100% natural', peak: 98 },
];
const FLIP = { en: 'Flip the view', da: 'Vend visningen', de: 'Ansicht umdrehen', fr: 'Inverser la vue', es: 'Invertir la vista', ar: 'اقلب العرض', ur: 'منظر الٹیں' };
const LABEL = {
  en: 'Certifications and lab testing', da: 'Certificeringer og laboratorietest', de: 'Zertifizierungen und Labortests',
  fr: 'Certifications et analyses en laboratoire', es: 'Certificaciones y análisis de laboratorio', ar: 'الشهادات والفحوصات المخبرية', ur: 'سرٹیفکیٹس اور لیب ٹیسٹ',
};

// Icon-led proof facts that sit in the top of the same dark band as the seals (one strip, not two).
const FACTS = {
  en: [['Skardu origin', 'Above 5,000 m'], ['Lab tested', 'Every batch'], ['Fulvic acid', 'Measured'], ['Pure resin', 'Nothing added'], ['Sun-dried', 'Hand-purified']],
  da: [['Skardu-oprindelse', 'Over 5.000 m'], ['Labtestet', 'Hver batch'], ['Fulvinsyre', 'Målt'], ['Ren resin', 'Intet tilsat'], ['Soltørret', 'Håndrenset']],
  de: [['Herkunft Skardu', 'Über 5.000 m'], ['Laborgeprüft', 'Jede Charge'], ['Fulvinsäure', 'Gemessen'], ['Reines Harz', 'Nichts zugesetzt'], ['Sonnengetrocknet', 'Handgereinigt']],
  fr: [['Origine Skardu', 'Au-dessus de 5 000 m'], ['Testé en labo', 'Chaque lot'], ['Acide fulvique', 'Mesuré'], ['Résine pure', 'Rien d’ajouté'], ['Séché au soleil', 'Purifié à la main']],
  es: [['Origen Skardu', 'A más de 5.000 m'], ['Analizado', 'Cada lote'], ['Ácido fúlvico', 'Medido'], ['Resina pura', 'Nada añadido'], ['Secado al sol', 'Purificado a mano']],
  ar: [['منشأ سكاردو', 'فوق 5000 م'], ['مفحوص مخبريًا', 'كل دفعة'], ['حمض الفولفيك', 'مُقاس'], ['راتنج نقي', 'دون إضافات'], ['مجفف بالشمس', 'منقّى يدويًا']],
  ur: [['اسکردو کا ماخذ', '5,000 میٹر سے اوپر'], ['لیب ٹیسٹ شدہ', 'ہر بیچ'], ['فلووک ایسڈ', 'ناپا گیا'], ['خالص ریزن', 'کچھ شامل نہیں'], ['دھوپ میں خشک', 'ہاتھ سے صاف']],
};
const FACT_HREF = ['/our-shilajit/', '/lab-results/', '/lab-results/', '/our-shilajit/', '/our-shilajit/'];
const FACT_ICONS = [
  <g key="m"><path d="M-30 14-10-14 0-2 10-18 30 14z" /><path d="M-14-8-6-2-2-8M6-6l4 3 4-4" /></g>,
  <g key="f"><path d="M-7-18h14M-5-18V-4L-22 16a4 4 0 0 0 3.500 6h37a4 4 0 0 0 3.500-6L5-4V-18" /><path d="M-16 8h32" /><circle cx="-4" cy="14" r="2" /></g>,
  <g key="o"><path d="M0-20 17-10V10L0 20-17 10V-10z" /><path d="M0-20V-6M17 10 6 4M-17 10-6 4" /><circle cx="0" cy="0" r="6" /></g>,
  <g key="d"><path d="M0-22C9-9 18-2 18 8a18 18 0 0 1-36 0C-18-2-9-9 0-22z" /><path d="M-8 10a9 9 0 0 0 9 9" /></g>,
  <g key="s"><circle cx="0" cy="0" r="11" /><path d="M0-24V-17M0 17V24M-24 0H-17M17 0H24M-17-17l5 5M12 12l5 5M-17 17l5-5M12-12l5-5" /></g>,
];
const N = SEALS.length;

export default function CertRidge() {
  const lang = useLang();
  const root = useRef(null);
  const [flip, setFlip] = useState(false);

  // remember the viewer's choice
  useEffect(() => { try { if (localStorage.getItem('cr-flip') === '1') setFlip(true); } catch (e) {} }, []);
  const toggle = () => setFlip((f) => { try { localStorage.setItem('cr-flip', f ? '0' : '1'); } catch (e) {} return !f; });

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const q = (s) => el.querySelector(s);
    const svg = q('.cr-svg'), world = q('.cr-world'), nearG = q('.cr-nearg'), farG = q('.cr-farg');
    const drop = q('.cr-drop'), lit = q('.cr-lit');
    const gates = [...el.querySelectorAll('.cr-gate')]; // two copies of the four seals
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // px per second: ridge and seals go right to left, the drop left to right (slower on phones)
    const speeds = () => (W <= 767 ? { VB: 24, VD: 70 } : { VB: 44, VD: 150 });
    const TAU = Math.PI * 2;
    let W = 0, P = 0, H = 150, xs = [], ys = [], cum = [], total = 0, gx = [];
    let hover = false, off = 0, farOff = 0, xd = 0, prev = new Array(N * 2).fill(0), visible = true, raf = 0, last = 0;

    const sx = (i) => gx[i % N] + Math.floor(i / N) * P - off; // screen x of a seal

    const rearm = () => {
      xd = -50;
      prev = gates.map((_, i) => xd - sx(i));
    };

    const build = () => {
      W = el.clientWidth;
      if (!W) return;
      const phone = W <= 767, sz = phone ? 76 : 96;
      H = phone ? 178 : 200;
      const dy = H - 150; // the ridge sits lower so the larger seals fit above it
      el.style.height = H + 'px';
      el.style.setProperty('--s', sz + 'px');
      // One period holds all the seals; on a phone it is wider than the screen so the seals keep their space.
      P = Math.max(W, N * (sz + 34));
      svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
      gx = SEALS.map((_, k) => P * ((k + 0.5) / N));
      // One period of ridge is exactly W wide, so it repeats without a seam.
      const keys = [];
      for (let c = -1; c <= 2; c++) SEALS.forEach((s, k) => { keys.push([(P * k) / N + c * P, 128 + dy - (k % 2) * 4], [gx[k] + c * P, s.peak + dy]); });
      const h1 = Math.max(1, Math.round((0.31 * P) / TAU)), h2 = Math.max(1, Math.round((0.83 * P) / TAU));
      let pts = [];
      for (let x = 0; x <= 2 * P; x += 3) {
        let j = 1;
        while (j < keys.length - 1 && keys[j][0] < x) j++;
        const a = keys[j - 1], b = keys[j];
        const f = Math.min(1, Math.max(0, (x - a[0]) / Math.max(1, b[0] - a[0])));
        pts.push([x, a[1] + (b[1] - a[1]) * f + 2.2 * Math.sin((TAU * h1 * x) / P) + 1.4 * Math.sin((TAU * h2 * x) / P)]);
      }
      for (let p = 0; p < 3; p++) {
        const src = pts;
        pts = src.map((qq, i) => {
          if (i < 2 || i > src.length - 3) return qq;
          let t = 0;
          for (let d = -2; d <= 2; d++) t += src[i + d][1];
          return [qq[0], (qq[1] * 2 + (t / 5) * 3) / 5];
        });
      }
      if (flip) pts = pts.map((p) => [p[0], H - p[1]]); // turn the ridge upside down: it hangs from the top
      xs = pts.map((p) => p[0]); ys = pts.map((p) => p[1]);
      cum = [0];
      for (let i = 1; i < xs.length; i++) cum.push(cum[i - 1] + Math.hypot(xs[i] - xs[i - 1], ys[i] - ys[i - 1]));
      total = cum[cum.length - 1];
      const d = 'M' + pts.map((p) => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join('L');
      q('.cr-edge').setAttribute('d', d);
      lit.setAttribute('d', d);
      q('.cr-near').setAttribute('d', flip ? `${d}L${2 * P} 0L0 0Z` : `${d}L${2 * P} ${H}L0 ${H}Z`);
      const far = [];
      for (let x = 0; x <= 2 * P; x += 6) {
        const fy = 94 + dy + 16 * Math.sin((TAU * 2 * x) / P + 1) + 9 * Math.sin((TAU * 5 * x) / P) + 4 * Math.sin((TAU * 11 * x) / P);
        far.push(`${x} ${(flip ? H - fy : fy).toFixed(1)}`);
      }
      q('.cr-far').setAttribute('d', `M${far.join('L')}L${2 * P} ${flip ? 0 : H}L0 ${flip ? 0 : H}Z`);
      world.style.width = 2 * P + 'px';
      gates.forEach((g, i) => {
        const wx = gx[i % N] + Math.floor(i / N) * P;
        const y = ys[Math.round(wx / 3)];
        g.style.left = wx + 'px';
        g.querySelector('.cr-pin').style.top = y - 4 + 'px';
        g.querySelector('.cr-ring').style.top = y - 4 + 'px';
        const stem = g.querySelector('.cr-stem');
        if (flip) {
          stem.style.top = y + 6 + 'px';
          stem.style.height = Math.max(10, H - 12 - sz - 10 - (y + 6)) + 'px';
        } else {
          stem.style.top = sz + 14 + 'px';
          stem.style.height = Math.max(10, y - sz - 20) + 'px';
        }
      });
      rearm();
    };

    const interp = (arr, x) => {
      const f = Math.min(arr.length - 1.001, Math.max(0, x / 3)), i = Math.floor(f);
      return arr[i] + (arr[i + 1] - arr[i]) * (f - i);
    };
    const place = () => {
      nearG.setAttribute('transform', `translate(${(-off).toFixed(2)} 0)`);
      farG.setAttribute('transform', `translate(${(-farOff).toFixed(2)} 0)`);
      world.style.transform = `translate3d(${(-off).toFixed(2)}px,0,0)`;
    };
    const setDrop = () => {
      const wx = xd + off, y = interp(ys, wx), L = interp(cum, wx);
      const o = Math.max(0, Math.min(1, (xd + 20) / 70, (W + 70 - xd) / 70));
      drop.setAttribute('transform', `translate(${xd.toFixed(1)} ${(y + (flip ? 9 : -9)).toFixed(1)})`);
      drop.setAttribute('opacity', o.toFixed(2));
      lit.setAttribute('stroke-dasharray', `110 ${total * 3}`);
      lit.setAttribute('stroke-dashoffset', (110 - L).toFixed(1));
      lit.setAttribute('opacity', o.toFixed(2));
    };

    const reset = () => {
      gates.forEach((g) => g.classList.remove('on'));
      rearm();
    };

    const frame = (now) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!visible || hover || document.hidden || !total) return;
      const { VB, VD } = speeds();
      off += VB * dt;
      farOff = (farOff + VB * 0.45 * dt) % P;
      if (off >= P) { // the second copy has become the first: carry its state across
        off -= P;
        for (let k = 0; k < N; k++) {
          gates[k].classList.toggle('on', gates[k + N].classList.contains('on'));
          gates[k + N].classList.remove('on');
          prev[k] = prev[k + N];
          prev[k + N] = xd - sx(k + N);
        }
      }
      xd += VD * dt;
      if (xd > W + 50) rearm();
      gates.forEach((g, i) => {
        const dd = xd - sx(i);
        if (prev[i] < 0 && dd >= 0) g.classList.add('on');
        prev[i] = dd;
      });
      place();
      setDrop();
    };

    // a few twinkling stars
    const sky = q('.cr-sky');
    sky.innerHTML = '';
    for (let i = 0; i < 24; i++) {
      const s = document.createElement('i');
      s.style.cssText = `left:${(i * 37 + 11) % 100}%;top:${flip ? 34 + ((i * 53) % 60) : (i * 53) % 42}%;animation-delay:${(i % 7) * 0.6}s;animation-duration:${3 + (i % 4)}s`;
      sky.appendChild(s);
    }

    build();
    place();
    if (reduce) {
      gates.forEach((g) => g.classList.add('on'));
      drop.setAttribute('opacity', 0);
      lit.setAttribute('opacity', 0);
    } else {
      setDrop();
      raf = requestAnimationFrame((n) => { last = n; frame(n); });
    }
    const ro = new ResizeObserver(() => { build(); place(); });
    ro.observe(el);
    const io = new IntersectionObserver(([e]) => {
      const was = visible;
      visible = e.isIntersecting;
      if (was && !visible && !reduce) reset();
    }, { threshold: 0.2 });
    io.observe(el);
    // pointing at (or tabbing to) a seal holds everything still so it can be read
    const hold = () => { hover = true; }, free = () => { hover = false; };
    const canHover = window.matchMedia('(hover: hover)').matches;
    const over = (e) => { if (canHover && e.target.closest('.cr-lab')) hold(); };
    const out = (e) => { if (e.target.closest('.cr-lab')) free(); };
    world.addEventListener('mouseover', over);
    world.addEventListener('mouseout', out);
    world.addEventListener('focusin', hold);
    world.addEventListener('focusout', free);
    return () => {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
      world.removeEventListener('mouseover', over); world.removeEventListener('mouseout', out);
      world.removeEventListener('focusin', hold); world.removeEventListener('focusout', free);
    };
  }, [flip]);

  return (
    <section className="cr" aria-label={LABEL[lang] || LABEL.en}>
      <ul className="cr-facts">
        {(FACTS[lang] || FACTS.en).map(([h, sub], i) => (
          <li key={i}>
            <Link href={FACT_HREF[i]} className="cr-fact">
              <span className="cr-fact-ic">
                <svg viewBox="-34 -30 68 60" aria-hidden="true">
                  <defs><linearGradient id="cr-fg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#F8E6B4" /><stop offset=".55" stopColor="#D9B26A" /><stop offset="1" stopColor="#B58A42" /></linearGradient></defs>
                  <g fill="none" stroke="url(#cr-fg)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">{FACT_ICONS[i]}</g>
                </svg>
              </span>
              <strong>{h}</strong>
              <small>{sub}</small>
            </Link>
          </li>
        ))}
      </ul>
      <div className={`cr-band${flip ? ' is-flip' : ''}`} ref={root}>
        <div className="cr-sky" aria-hidden="true" />
        <svg className="cr-svg" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="cr-nf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4b0b1a" /><stop offset="1" stopColor="#1c0207" /></linearGradient>
            <linearGradient id="cr-nf2" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#4b0b1a" /><stop offset="1" stopColor="#1c0207" /></linearGradient>
            <radialGradient id="cr-dg" cx=".38" cy=".32" r=".8"><stop offset="0" stopColor="#FFF8DC" /><stop offset=".4" stopColor="#FFC25C" /><stop offset="1" stopColor="#B9620F" /></radialGradient>
            <filter id="cr-bl" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="6" /></filter>
          </defs>
          <g className="cr-farg"><path className="cr-far" /></g>
          <g className="cr-nearg"><path className="cr-near" /><path className="cr-edge" /><path className="cr-lit" /></g>
          <g className="cr-drop" opacity="0">
            <circle r="14" fill="#FFB347" opacity=".45" filter="url(#cr-bl)" />
            <path d="M0 -9 C4 -3 6 0 6 3 A6 6 0 0 1 -6 3 C-6 0 -4 -3 0 -9Z" fill="url(#cr-dg)" />
            <ellipse cx="-2" cy="1" rx="1.4" ry="2.2" fill="#fff" opacity=".7" />
          </g>
        </svg>
        <button type="button" className="cr-flip" onClick={toggle} aria-pressed={flip} aria-label={FLIP[lang] || FLIP.en} title={FLIP[lang] || FLIP.en}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 13V3M2.5 5.5 5 3l2.5 2.5M11 3v10M8.5 10.5 11 13l2.5-2.5" /></svg>
        </button>
        <div className="cr-world">
          {[0, 1].flatMap((c) =>
            SEALS.map((s) => (
              <div className="cr-gate" key={`${c}-${s.key}`} aria-hidden={c ? 'true' : undefined}>
                <div className="cr-lab">
                  <img className="cr-seal" src={`/images/certs/${s.key}.webp`} alt={c ? '' : s.alt} width="96" height="96" loading="lazy" decoding="async" />
                </div>
                <span className="cr-stem" /><span className="cr-ring" /><span className="cr-pin" />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
