'use client';
// Certificate split: burgundy and cream halves with the certificate paper laid across the seam.
// A gold thread runs from the paper to the open standard in the list. Only show a certificate you
// actually hold. Add `img` (a scan of the certificate) to an item to replace the drawn paper.
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from './LLink';
import { useLang } from './LangProvider';
import { getSeals } from './Seal';
import { CERT_TEXT } from '@/lib/certText';

const ITEMS = [
  { id: 'gmp', seal: '/images/certs/gmp.webp', href: '/certificates/', img: null },
  { id: 'iso22000', seal: '/images/certs/iso22000.webp', href: '/certificates/', img: null },
  { id: 'iso9001', seal: '/images/certs/iso9001.webp', href: '/certificates/', img: null },
  { id: 'metals', seal: '/images/certs/lab-tested.webp', href: '/lab-results/', img: null },
];
const ROTATE_MS = 7500;
const pad = (n) => String(n).padStart(2, '0');

export default function CertSplit() {
  const lang = useLang();
  const t = CERT_TEXT[lang] || CERT_TEXT.en;
  const seals = getSeals(lang).slice(0, 4);
  const [i, setI] = useState(0);
  const [stamp, setStamp] = useState(false);
  const [hold, setHold] = useState(false);
  const [seen, setSeen] = useState(true);
  const root = useRef(null), paper = useRef(null), thread = useRef(null), dots = useRef([]);
  const first = useRef(true);
  const pick = (k) => setI((k + ITEMS.length) % ITEMS.length);

  // the seal is stamped onto the paper each time the standard changes
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    setStamp(false);
    const id = requestAnimationFrame(() => setStamp(true));
    return () => cancelAnimationFrame(id);
  }, [i]);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setSeen(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (hold || !seen || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setTimeout(() => pick(i + 1), ROTATE_MS);
    return () => clearTimeout(id);
  }, [i, hold, seen]);

  // gold thread from the paper to the open standard (desktop only)
  useLayoutEffect(() => {
    const draw = (animate) => {
      const r = root.current, p = paper.current, d = dots.current[i], th = thread.current;
      if (!r || !p || !d || !th) return;
      if (window.innerWidth < 900) { th.style.display = 'none'; return; }
      th.style.display = '';
      const rb = r.getBoundingClientRect(), pb = p.getBoundingClientRect(), db = d.getBoundingClientRect();
      const x1 = pb.right - rb.left - 6, y1 = pb.top - rb.top + pb.height * 0.62;
      const x2 = db.left - rb.left - 10, y2 = db.top - rb.top + db.height / 2;
      const path = th.querySelector('path'), end = th.querySelector('circle');
      path.setAttribute('d', `M${x1} ${y1}C${x1 + 70} ${y1},${x2 - 70} ${y2},${x2} ${y2}`);
      end.setAttribute('cx', x2); end.setAttribute('cy', y2);
      const len = path.getTotalLength();
      path.style.transition = 'none';
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = animate ? len : 0;
      end.style.opacity = animate ? 0 : 1;
      if (animate) {
        requestAnimationFrame(() => requestAnimationFrame(() => {
          path.style.transition = 'stroke-dashoffset 1s cubic-bezier(.3,.7,.2,1)';
          path.style.strokeDashoffset = 0;
          end.style.transition = 'opacity .4s .8s';
          end.style.opacity = 1;
        }));
      }
    };
    draw(true);
    const onR = () => draw(false);
    window.addEventListener('resize', onR);
    const t1 = setTimeout(() => draw(false), 700); // after the list finishes opening
    return () => { window.removeEventListener('resize', onR); clearTimeout(t1); };
  }, [i]);

  const cur = ITEMS[i];
  const code = seals[i].main.join(' ');

  return (
    <section id="certifications" className="cs" ref={root} onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)} aria-label={`${t.title} ${t.accent}`}>
      <div className="cs-left">
        <svg className="cs-topo" viewBox="0 0 600 400" preserveAspectRatio="xMinYMax slice" aria-hidden="true">
          <g fill="none" stroke="rgba(204,162,94,.28)" strokeWidth="1">
            <path d="M-20 360C80 330 140 380 240 340S400 300 460 330 580 350 640 320" />
            <path d="M-20 330C90 296 150 346 250 306S410 268 470 296 590 318 640 288" />
            <path d="M-20 300C100 262 160 312 260 272S420 236 480 262 600 286 640 256" />
            <path d="M-20 270C110 228 170 278 270 238S430 204 490 228 610 254 640 224" />
            <path d="M-20 240C120 194 180 244 280 204S440 172 500 194 620 222 640 192" />
          </g>
        </svg>
        <p className="cs-eyebrow">{t.eyebrow}</p>
        <h2>{t.title} <em>{t.accent}</em></h2>
        <p className="cs-lead">{t.lead}</p>
        <div className="cs-count" aria-hidden="true"><i /><span>{pad(i + 1)} / {pad(ITEMS.length)}</span><b>{t.items[i][0]}</b></div>
      </div>

      <div className={`cs-paperwrap${stamp ? ' cs-stamp' : ''}`}>
        <div className="cs-sheet cs-s3" /><div className="cs-sheet cs-s2" />
        <div className="cs-paper" ref={paper}>
          {cur.img ? (
            <img className="cs-scan" src={cur.img} alt={t.items[i][0]} />
          ) : (
            <>
              <span className="cs-doc">{t.eyebrow}</span>
              <span className="cs-rule" />
              <h3 className="cs-code">{code}</h3>
              <p className="cs-name">{t.items[i][0]}</p>
              <div className="cs-seal"><img src={cur.seal} alt={t.items[i][0]} /></div>
              <div className="cs-fields"><span /><span /><span /></div>
            </>
          )}
          <span className="cs-curl" />
        </div>
      </div>

      <div className="cs-right">
        <ul className="cs-list" role="tablist" aria-label={t.eyebrow}>
          {ITEMS.map((it, k) => (
            <li key={it.id} className={i === k ? 'on' : ''}>
              <div role="tab" tabIndex={0} aria-selected={i === k} className="cs-row" onClick={() => pick(k)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(k); } }}>
                <span className="cs-num" ref={(n) => (dots.current[k] = n)}>{pad(k + 1)}</span>
                <span className="cs-main">
                  <span className="cs-title">{t.items[k][0]}</span>
                  <span className="cs-sub">{seals[k].ring.replace(/ · $/, '')}</span>
                  <span className="cs-more"><span><p>{t.items[k][1]}</p><Link href={it.href} tabIndex={i === k ? 0 : -1}>{t.view} <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 9l6-6M4 3h5v5" /></svg></Link></span></span>
                </span>
                <span className="cs-pm" aria-hidden="true" />
              </div>
            </li>
          ))}
        </ul>
        <span className="cs-prog" key={i} style={{ animationPlayState: hold ? 'paused' : 'running' }} aria-hidden="true" />
      </div>

      <svg className="cs-thread" ref={thread} aria-hidden="true">
        <path fill="none" stroke="#b0843f" strokeWidth="1.4" strokeLinecap="round" />
        <circle r="4" fill="#b0843f" />
      </svg>
    </section>
  );
}
