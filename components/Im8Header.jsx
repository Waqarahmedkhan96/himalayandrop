'use client';
// IM8-inspired chrome: rotating announcement bar, a clean sticky header with a
// picture-tile Shop menu, and a full-screen phone menu led by the bundles tile.
// Only visible when <html data-version="im8"> (see im8.css).
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from './LLink';
import Logo from './Logo';
import LangSwitch from './LangSwitch';
import { Arrow } from './Arrow';
import { useCart } from '@/lib/cart';
import { site } from '@/lib/site';
import { IM8 } from '@/lib/im8-i18n';
import { useLang } from './LangProvider';

function Chevron() {
  return (
    <svg className="chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Im8Header() {
  const lang = useLang();
  const t = (IM8[lang] || IM8.en).chrome;
  const announce = (IM8[lang] || IM8.en).announce;
  const { cart, setOpen } = useCart();
  const pathname = usePathname();
  const [open, setMenu] = useState(false);
  const [i, setI] = useState(0);
  const [hold, setHold] = useState(false);

  const shopGroup = site[lang].menu[0];
  const products = shopGroup.items.filter((it) => it.img && it.href.startsWith('/products/'));
  const all = site[lang].menu.flatMap((g) => g.items || []);
  const faq = all.find((it) => it.href === '/faq/');
  const rewards = site[lang].menu.find((g) => g.href === '/rewards/');
  const count = cart?.totalQuantity || 0;

  useEffect(() => { setMenu(false); }, [pathname]);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % announce.length), 4200);
    return () => clearInterval(id);
  }, [announce.length]);
  useEffect(() => {
    if (open) window.__lenis?.stop(); else window.__lenis?.start();
  }, [open]);

  const close = () => setMenu(false);
  const tab = open ? 0 : -1;
  const links = [
    { href: '/bundles/', label: t.bundles },
    { href: '/our-shilajit/', label: t.source },
    { href: '/lab-results/', label: t.lab },
    { href: '/reviews/', label: t.reviews },
    { href: '/our-story/', label: t.story },
  ];

  return (
    <>
      <div className="im8-top">
      <div className="im8-announce" role="region" aria-live="polite">
        <p key={i}>{announce[i]}</p>
      </div>

      <header className="im8-header">
        <div className="im8-header-in">
          <button type="button" className="im8-burger" onClick={() => setMenu((o) => !o)} aria-label={open ? t.close : t.menu} aria-expanded={open}>
            <span className={open ? 'is-open' : ''} aria-hidden="true"><i /><i /><i /></span>
          </button>

          <div className="im8-brand"><Logo size={26} /></div>

          <nav className={`im8-nav ${hold ? 'hold' : ''}`} aria-label={t.menu} onMouseLeave={() => setHold(false)} onClickCapture={(e) => { if (e.target.closest('a')) { setHold(true); document.activeElement?.blur?.(); } }}>
            <div className="im8-nav-group">
              <Link href="/shop/" className="im8-nav-top">{shopGroup.label} <Chevron /></Link>
              <div className="im8-mega">
                <div className="im8-mega-in">
                  <Link href="/bundles/" className="im8-tile big">
                    <img src="/images/bundles/complete-collection.webp" alt="" loading="lazy" />
                    <span><strong>{t.bundles}</strong><em>{t.bundlesSub}</em></span>
                  </Link>
                  {products.map((p) => (
                    <Link key={p.href} href={p.href} className="im8-tile">
                      <img src={p.img} alt="" loading="lazy" />
                      <span><strong>{p.label}</strong><em>{p.blurb}</em></span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {links.map((l) => <Link key={l.href} href={l.href} className="im8-nav-top">{l.label}</Link>)}
          </nav>

          <div className="im8-actions">
            <LangSwitch className="d-lang" />
            <Link href="/account/login/" className="im8-icon im8-account" aria-label={t.account}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" /></svg>
            </Link>
            <button type="button" className="im8-icon im8-cart" onClick={() => setOpen(true)} aria-label={t.cart(count)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>
              <span className="im8-count">{count}</span>
            </button>
          </div>
        </div>
      </header>
      </div>

      <nav className={`im8-drawer ${open ? 'open' : ''}`} aria-label={t.menu} aria-hidden={!open} inert={!open} data-lenis-prevent>
        <div className="im8-drawer-in">
          <Link href="/bundles/" onClick={close} tabIndex={tab} className="im8-dtile feature">
            <span className="im8-dtext"><strong>{t.bundles}</strong><em>{t.bundlesSub}</em></span>
            <img src="/images/bundles/complete-collection.webp" alt="" loading="lazy" />
          </Link>
          {products.map((p) => (
            <Link key={p.href} href={p.href} onClick={close} tabIndex={tab} className="im8-dtile">
              <span className="im8-dtext"><strong>{p.label}</strong><em>{p.blurb}</em></span>
              <img src={p.img} alt="" loading="lazy" />
            </Link>
          ))}
          <Link href="/shop/" onClick={close} tabIndex={tab} className="im8-dall">{t.viewAll} <Arrow size={12} /></Link>

          <div className="im8-drows">
            {links.slice(1).map((l) => (
              <Link key={l.href} href={l.href} onClick={close} tabIndex={tab}>{l.label}<Arrow size={12} /></Link>
            ))}
            {faq && <Link href={faq.href} onClick={close} tabIndex={tab}>{faq.label}<Arrow size={12} /></Link>}
            {rewards && <Link href={rewards.href} onClick={close} tabIndex={tab}>{rewards.label}<Arrow size={12} /></Link>}
          </div>

          <div className="im8-dacct">
            <Link href="/account/login/" onClick={close} tabIndex={tab}>{t.login}</Link>
            <Link href="/account/register/" onClick={close} tabIndex={tab}>{t.create}</Link>
          </div>
          <div className="im8-dlang"><LangSwitch className="m-lang" onNavigate={close} tabIndex={tab} /></div>
        </div>
      </nav>
    </>
  );
}
