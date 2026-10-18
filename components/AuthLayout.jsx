import Link from 'next/link';
import { Icon } from './Icons';

// Split layout for login/register: brand panel on one side, form on the other.
export default function AuthLayout({ title, accent, lead, children, switchText, switchHref, switchLabel }) {
  return (
    <section className="auth">
      <div className="auth-card">
        <div className="auth-art">
          <svg className="auth-lines" viewBox="0 0 400 300" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
            <path d="M0 300 L70 200 L100 225 L160 120 L210 190 L240 165 L300 230 L340 200 L400 260" fill="none" stroke="#cca25e" strokeWidth="1.4" />
            <path d="M0 300 L50 250 L120 270 L190 215 L260 260 L330 230 L400 290" fill="none" stroke="#cca25e" strokeOpacity="0.4" strokeWidth="1" />
          </svg>
          <img src="/images/logo-mark.png" alt="" width="48" height="59" />
          <p className="eyebrow">Summit Rewards</p>
          <h2>Members climb <em className="gold-text">higher.</em></h2>
          <ul>
            <li><Icon name="star" size={16} /> Points on every order</li>
            <li><Icon name="truck" size={16} /> Faster checkout</li>
            <li><Icon name="clock" size={16} /> Order history and tracking</li>
          </ul>
        </div>
        <div className="auth-form">
          <h1>{title} <em className="gold-text">{accent}</em></h1>
          {lead && <p className="muted">{lead}</p>}
          {children}
          <p className="auth-switch">{switchText} <Link href={switchHref}>{switchLabel}</Link></p>
        </div>
      </div>
    </section>
  );
}
