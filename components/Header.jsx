'use client';
// Floating pill header with dropdown menus (desktop) and a grouped full-screen
// menu (phones). Hides when you scroll down, comes back when you scroll up.
import { useEffect, useState } from 'react';
import Link from './LLink';
import Logo from './Logo';
import LangSwitch from './LangSwitch';
import { useCart } from '@/lib/cart';
import { site } from '@/lib/site';
import { useLang, useT } from './LangProvider';
import { Arrow } from './Arrow';

const T = {
  en: { mobile: 'Mobile', main: 'Main', login: 'Login', create: 'Create account', discover: 'Discover', account: 'Account', cart: (n) => `Open cart, ${n} items`, menu: 'Menu' },
  da: { mobile: 'Mobil', main: 'Hovedmenu', login: 'Log ind', create: 'Opret konto', discover: 'Se mere', account: 'Konto', cart: (n) => `Åbn kurv, ${n} varer`, menu: 'Menu' },
};

function Chevron() {
  return (
    <svg className="chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Header() {
  const { cart, setOpen } = useCart();
  const lang = useLang();
  const t = useT(T);
  const { menu } = site[lang];
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 300 && y > last);
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) window.__lenis?.stop();
    else window.__lenis?.start();
  }, [menuOpen]);

  const close = () => setMenuOpen(false);
  const count = cart?.totalQuantity || 0;

  return (
    <>
      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`} aria-label={t.mobile} aria-hidden={!menuOpen} data-lenis-prevent>
        {menu.map((g) =>
          g.items ? (
            <div className="m-group" key={g.label}>
              <p className="m-title">{g.label}</p>
              {g.items.map((it) => (
                <Link key={it.href + it.label} href={it.href} onClick={close} tabIndex={menuOpen ? 0 : -1}>{it.label}</Link>
              ))}
            </div>
          ) : (
            <Link key={g.label} className="m-single" href={g.href} onClick={close} tabIndex={menuOpen ? 0 : -1}>{g.label}</Link>
          )
        )}
        <div className="m-account">
          <Link href="/account/login/" onClick={close} tabIndex={menuOpen ? 0 : -1}>{t.login}</Link>
          <Link href="/account/register/" onClick={close} tabIndex={menuOpen ? 0 : -1}>{t.create}</Link>
        </div>
        <LangSwitch className="m-lang" onNavigate={close} />
      </nav>

      <header className={`header ${hidden && !menuOpen ? 'hidden' : ''}`}>
        <div className="header-inner">
          <Logo size={26} />
          <nav className="nav" aria-label={t.main}>
            {menu.map((g) =>
              g.items ? (
                <div className="nav-group" key={g.label}>
                  <Link href={g.href} className="nav-top" aria-haspopup="true">
                    {g.label} <Chevron />
                  </Link>
                  <div className="nav-panel">
                    <div className="nav-panel-card">
                      <ul className="nav-links">
                        {g.items.map((it) => (
                          <li key={it.href + it.label}>
                            <Link href={it.href}>
                              <strong>{it.label}</strong>
                              <span>{it.text}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      {g.feature && (
                        <Link href={g.feature.href} className="nav-feature">
                          <span className="nav-feature-img"><img src={g.feature.img} alt="" loading="lazy" /></span>
                          <strong>{g.feature.title}</strong>
                          <span>{g.feature.text}</span>
                          <em>{t.discover} <Arrow size={12} /></em>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={g.label} href={g.href} className="nav-top">{g.label}</Link>
              )
            )}
          </nav>
          <div className="header-actions">
            <LangSwitch className="d-lang" />
            <Link href="/account/login/" className="icon-btn account-btn" aria-label={t.account}>
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
              </svg>
            </Link>
            <button className="icon-btn cart-btn" onClick={() => setOpen(true)} aria-label={t.cart(count)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M5 8h14l-1 12H6L5 8Z" />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" />
              </svg>
              {count > 0 && <span className="cart-count">{count}</span>}
            </button>
            <button className="icon-btn menu-btn" onClick={() => setMenuOpen((m) => !m)} aria-label={t.menu} aria-expanded={menuOpen}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                {menuOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 9h16M8 15h12" />}
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
