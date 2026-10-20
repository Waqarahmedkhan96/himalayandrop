'use client';
import Link from './LLink';
import { Icon } from './Icons';
import { useT } from './LangProvider';

const T = {
  en: { h: 'Members climb', hg: 'higher.', perks: ['Points on every order', 'Faster checkout', 'Order history and tracking'] },
  da: { h: 'Medlemmer når', hg: 'højere.', perks: ['Point på hver ordre', 'Hurtigere checkout', 'Ordrehistorik og sporing'] },
  de: { h: 'Mitglieder steigen', hg: 'höher.', perks: ['Punkte bei jeder Bestellung', 'Schnellerer Checkout', 'Bestellverlauf und Sendungsverfolgung'] },
  fr: { h: 'Les membres montent', hg: 'plus haut.', perks: ['Des points à chaque commande', 'Paiement plus rapide', 'Historique et suivi des commandes'] },
  es: { h: 'Los miembros llegan', hg: 'más alto.', perks: ['Puntos en cada pedido', 'Pago más rápido', 'Historial y seguimiento de pedidos'] },
  ar: { h: 'الأعضاء يصعدون', hg: 'أعلى.', perks: ['نقاط مع كل طلب', 'دفع أسرع', 'سجل الطلبات وتتبعها'] },
  ur: { h: 'ممبرز پہنچتے ہیں', hg: 'مزید بلندی تک۔', perks: ['ہر آرڈر پر پوائنٹس', 'تیز چیک آؤٹ', 'آرڈر ہسٹری اور ٹریکنگ'] },
};

// Split layout for login/register: brand panel on one side, form on the other.
export default function AuthLayout({ title, accent, lead, children, switchText, switchHref, switchLabel }) {
  const t = useT(T);
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
          <h2>{t.h} <em className="gold-text">{t.hg}</em></h2>
          <ul>
            <li><Icon name="star" size={16} /> {t.perks[0]}</li>
            <li><Icon name="truck" size={16} /> {t.perks[1]}</li>
            <li><Icon name="clock" size={16} /> {t.perks[2]}</li>
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
