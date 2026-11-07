'use client';
// IM8-inspired footer: calm and flat, guarantee row first, four link
// columns, social links and the legal line. Hidden unless
// <html data-version="im8">.
import Link from './LLink';
import Logo from './Logo';
import { SocialIcon, FOOTER_T } from './Footer';
import { site, SOCIAL } from '@/lib/site';
import { useLang } from './LangProvider';
import { Icon } from './Icons';
import { IM8, IM8X } from '@/lib/im8-i18n';

export default function Im8Footer() {
  const lang = useLang();
  const t = FOOTER_T[lang] || FOOTER_T.en;
  const x = IM8X[lang] || IM8X.en;
  const i = IM8[lang] || IM8.en;
  const { footer, legal } = site[lang];
  return (
    <footer className="im8-footer">
      <div className="im8-footer-in">
        <ul className="im8-fassure">
          <li><Icon name="shield" size={20} />{i.hero.chips[0]}</li>
          <li><Icon name="flask" size={20} />{i.hero.chips[1]}</li>
          <li><Icon name="truck" size={20} />{x.ship}</li>
          <li><Icon name="mountain" size={20} />{i.hero.chips[2]}</li>
        </ul>
        <div className="im8-ftop">
          <div className="im8-fbrand">
            <Logo size={28} />
            <p>{t.tagline}</p>
            <div className="im8-fsocial" aria-label={t.follow}>
              {SOCIAL.map((s) => (
                <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}><SocialIcon name={s.key} /></a>
              ))}
            </div>
          </div>
          <div className="im8-fcols">
            {footer.map((col) => (
              <div key={col.title}>
                <h3>{col.title}</h3>
                {col.links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
              </div>
            ))}
          </div>
        </div>
        <p className="im8-fdisc">{t.disclaimer}</p>
        <div className="im8-fbottom">
          <span suppressHydrationWarning><bdi dir="ltr">© 2024–{new Date().getFullYear()} Himalayan Drop.</bdi> {t.rights}</span>
          <span>{legal.map(([l, h]) => <Link key={l} href={h}>{l}</Link>)}</span>
        </div>
      </div>
    </footer>
  );
}
