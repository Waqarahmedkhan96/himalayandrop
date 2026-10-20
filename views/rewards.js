import Link from '@/components/LLink';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { SectionHead } from '@/components/Blocks';
import { Icon } from '@/components/Icons';
import { Arrow } from '@/components/Arrow';
import { pageMeta } from '@/lib/seo';
import { tr } from '@/lib/i18n';

export const meta = (lang) => pageMeta('rewards', lang, '/rewards/');

// Concept: adjust the numbers and perks to your own programme.
// A loyalty app for Shopify (e.g. Smile.io or Rivo) can run the points behind it.
const T = {
  en: {
    hero: { eyebrow: 'Summit Rewards', title: 'Every ritual', accent: 'takes you higher.', lead: 'Earn points with every order and climb from Base Camp to Summit.' },
    join: 'Join for free', login: 'Log in',
    s1: { eyebrow: 'How it works', title: 'Join, earn,', accent: 'redeem.' },
    how: [
      { icon: 'user', title: 'Join', text: 'Create a free account and get points for signing up.' },
      { icon: 'star', title: 'Earn', text: 'Collect points on every order, review and birthday.' },
      { icon: 'gift', title: 'Redeem', text: 'Turn points into discounts on your next ritual.' },
    ],
    s2: { eyebrow: 'Three levels', title: 'The higher you climb,', accent: 'the more you get.' },
    tiers: [
      { name: 'Base Camp', alt: '0 m', need: 'When you join', perks: ['1 point per 1 kr spent', 'Birthday surprise', 'Early access to news'] },
      { name: 'Ridge', alt: '3,000 m', need: 'From 1,500 points', perks: ['1.25 points per 1 kr', 'Free shipping on every order', 'Members-only offers'], featured: true },
      { name: 'Summit', alt: '5,000 m', need: 'From 4,000 points', perks: ['1.5 points per 1 kr', 'Gift with every order', 'First access to new editions'] },
    ],
    s3: { eyebrow: 'Ways to earn', title: 'Points for the', accent: 'little things.' },
    earn: [['Create an account', '100 points'], ['Every 1 kr spent', '1 point+'], ['Write a review', '50 points'], ['Follow us on Instagram', '25 points'], ['Your birthday', '100 points'], ['Refer a friend', '250 points']],
  },
  da: {
    hero: { eyebrow: 'Summit Rewards', title: 'Hvert ritual', accent: 'bringer dig højere op.', lead: 'Optjen point på hver ordre, og klatr fra Base Camp til Summit.' },
    join: 'Bliv gratis medlem', login: 'Log ind',
    s1: { eyebrow: 'Sådan virker det', title: 'Tilmeld, optjen,', accent: 'indløs.' },
    how: [
      { icon: 'user', title: 'Tilmeld dig', text: 'Opret en gratis konto, og få point for at blive medlem.' },
      { icon: 'star', title: 'Optjen', text: 'Saml point på hver ordre, anmeldelse og fødselsdag.' },
      { icon: 'gift', title: 'Indløs', text: 'Brug dine point som rabat på dit næste ritual.' },
    ],
    s2: { eyebrow: 'Tre niveauer', title: 'Jo højere du klatrer,', accent: 'jo mere får du.' },
    tiers: [
      { name: 'Base Camp', alt: '0 m', need: 'Når du bliver medlem', perks: ['1 point pr. 1 kr.', 'Fødselsdagsoverraskelse', 'Først med nyhederne'] },
      { name: 'Ridge', alt: '3.000 m', need: 'Fra 1.500 point', perks: ['1,25 point pr. 1 kr.', 'Gratis fragt på alle ordrer', 'Tilbud kun for medlemmer'], featured: true },
      { name: 'Summit', alt: '5.000 m', need: 'Fra 4.000 point', perks: ['1,5 point pr. 1 kr.', 'Gave med hver ordre', 'Først til nye udgaver'] },
    ],
    s3: { eyebrow: 'Sådan optjener du', title: 'Point for de', accent: 'små ting.' },
    earn: [['Opret en konto', '100 point'], ['Hver 1 kr. du handler for', '1 point+'], ['Skriv en anmeldelse', '50 point'], ['Følg os på Instagram', '25 point'], ['Din fødselsdag', '100 point'], ['Anbefal en ven', '250 point']],
  },
  de: {
    hero: { eyebrow: 'Summit Rewards', title: 'Jedes Ritual', accent: 'bringt dich höher.', lead: 'Sammle Punkte bei jeder Bestellung und steige vom Base Camp bis zum Summit auf.' },
    join: 'Kostenlos beitreten', login: 'Anmelden',
    s1: { eyebrow: 'So funktioniert es', title: 'Beitreten, sammeln,', accent: 'einlösen.' },
    how: [
      { icon: 'user', title: 'Beitreten', text: 'Erstelle ein kostenloses Konto und erhalte Punkte für die Anmeldung.' },
      { icon: 'star', title: 'Sammeln', text: 'Sammle Punkte bei jeder Bestellung, Bewertung und zum Geburtstag.' },
      { icon: 'gift', title: 'Einlösen', text: 'Mach aus Punkten Rabatte auf dein nächstes Ritual.' },
    ],
    s2: { eyebrow: 'Drei Stufen', title: 'Je höher du steigst,', accent: 'desto mehr bekommst du.' },
    tiers: [
      { name: 'Base Camp', alt: '0 m', need: 'Bei der Anmeldung', perks: ['1 Punkt pro 1 kr', 'Geburtstagsüberraschung', 'Früher Zugang zu Neuigkeiten'] },
      { name: 'Ridge', alt: '3.000 m', need: 'Ab 1.500 Punkten', perks: ['1,25 Punkte pro 1 kr', 'Kostenloser Versand bei jeder Bestellung', 'Angebote nur für Mitglieder'], featured: true },
      { name: 'Summit', alt: '5.000 m', need: 'Ab 4.000 Punkten', perks: ['1,5 Punkte pro 1 kr', 'Geschenk zu jeder Bestellung', 'Erster Zugang zu neuen Editionen'] },
    ],
    s3: { eyebrow: 'Punkte sammeln', title: 'Punkte für die', accent: 'kleinen Dinge.' },
    earn: [['Konto erstellen', '100 Punkte'], ['Pro ausgegebener 1 kr', '1 Punkt+'], ['Bewertung schreiben', '50 Punkte'], ['Uns auf Instagram folgen', '25 Punkte'], ['Dein Geburtstag', '100 Punkte'], ['Freunde empfehlen', '250 Punkte']],
  },
  fr: {
    hero: { eyebrow: 'Summit Rewards', title: 'Chaque rituel', accent: 'vous élève.', lead: 'Gagnez des points à chaque commande et grimpez du Camp de base au Sommet.' },
    join: 'Rejoindre gratuitement', login: 'Connexion',
    s1: { eyebrow: 'Comment ça marche', title: 'Rejoindre, gagner,', accent: 'utiliser.' },
    how: [
      { icon: 'user', title: 'Rejoindre', text: 'Créez un compte gratuit et recevez des points à l’inscription.' },
      { icon: 'star', title: 'Gagner', text: 'Cumulez des points à chaque commande, avis et anniversaire.' },
      { icon: 'gift', title: 'Utiliser', text: 'Transformez vos points en réductions sur votre prochain rituel.' },
    ],
    s2: { eyebrow: 'Trois niveaux', title: 'Plus vous montez,', accent: 'plus vous recevez.' },
    tiers: [
      { name: 'Base Camp', alt: '0 m', need: 'À l’inscription', perks: ['1 point pour 1 kr dépensée', 'Surprise d’anniversaire', 'Accès anticipé aux nouveautés'] },
      { name: 'Ridge', alt: '3 000 m', need: 'Dès 1 500 points', perks: ['1,25 point pour 1 kr', 'Livraison offerte sur chaque commande', 'Offres réservées aux membres'], featured: true },
      { name: 'Summit', alt: '5 000 m', need: 'Dès 4 000 points', perks: ['1,5 point pour 1 kr', 'Un cadeau avec chaque commande', 'Accès en avant-première aux nouvelles éditions'] },
    ],
    s3: { eyebrow: 'Gagner des points', title: 'Des points pour', accent: 'les petites choses.' },
    earn: [['Créer un compte', '100 points'], ['Chaque 1 kr dépensée', '1 point+'], ['Laisser un avis', '50 points'], ['Nous suivre sur Instagram', '25 points'], ['Votre anniversaire', '100 points'], ['Parrainer un ami', '250 points']],
  },
  es: {
    hero: { eyebrow: 'Summit Rewards', title: 'Cada ritual', accent: 'te lleva más alto.', lead: 'Suma puntos con cada pedido y sube del Campo Base a la Cumbre.' },
    join: 'Únete gratis', login: 'Iniciar sesión',
    s1: { eyebrow: 'Cómo funciona', title: 'Únete, suma,', accent: 'canjea.' },
    how: [
      { icon: 'user', title: 'Únete', text: 'Crea una cuenta gratis y recibe puntos por registrarte.' },
      { icon: 'star', title: 'Suma', text: 'Acumula puntos con cada pedido, opinión y en tu cumpleaños.' },
      { icon: 'gift', title: 'Canjea', text: 'Convierte tus puntos en descuentos para tu próximo ritual.' },
    ],
    s2: { eyebrow: 'Tres niveles', title: 'Cuanto más subes,', accent: 'más recibes.' },
    tiers: [
      { name: 'Base Camp', alt: '0 m', need: 'Al registrarte', perks: ['1 punto por cada 1 kr', 'Sorpresa de cumpleaños', 'Acceso anticipado a novedades'] },
      { name: 'Ridge', alt: '3.000 m', need: 'Desde 1.500 puntos', perks: ['1,25 puntos por cada 1 kr', 'Envío gratis en cada pedido', 'Ofertas solo para miembros'], featured: true },
      { name: 'Summit', alt: '5.000 m', need: 'Desde 4.000 puntos', perks: ['1,5 puntos por cada 1 kr', 'Regalo con cada pedido', 'Primer acceso a nuevas ediciones'] },
    ],
    s3: { eyebrow: 'Formas de sumar', title: 'Puntos por las', accent: 'pequeñas cosas.' },
    earn: [['Crear una cuenta', '100 puntos'], ['Cada 1 kr gastada', '1 punto+'], ['Escribir una opinión', '50 puntos'], ['Seguirnos en Instagram', '25 puntos'], ['Tu cumpleaños', '100 puntos'], ['Recomendar a un amigo', '250 puntos']],
  },
  ar: {
    hero: { eyebrow: 'مكافآت Summit', title: 'كل طقس', accent: 'يرفعك أعلى.', lead: 'اجمع النقاط مع كل طلب واصعد من المخيم الأساسي إلى القمة.' },
    join: 'انضم مجاناً', login: 'تسجيل الدخول',
    s1: { eyebrow: 'كيف يعمل', title: 'انضم، اجمع،', accent: 'استبدل.' },
    how: [
      { icon: 'user', title: 'انضم', text: 'أنشئ حساباً مجانياً واحصل على نقاط عند التسجيل.' },
      { icon: 'star', title: 'اجمع', text: 'اجمع النقاط مع كل طلب ومراجعة وفي عيد ميلادك.' },
      { icon: 'gift', title: 'استبدل', text: 'حوّل نقاطك إلى خصومات على طقسك القادم.' },
    ],
    s2: { eyebrow: 'ثلاثة مستويات', title: 'كلما صعدت أعلى،', accent: 'حصلت على المزيد.' },
    tiers: [
      { name: 'Base Camp', alt: '0 م', need: 'عند الانضمام', perks: ['نقطة لكل 1 كرونة', 'مفاجأة عيد الميلاد', 'وصول مبكر إلى الأخبار'] },
      { name: 'Ridge', alt: '3,000 م', need: 'من 1,500 نقطة', perks: ['1.25 نقطة لكل 1 كرونة', 'شحن مجاني لكل طلب', 'عروض للأعضاء فقط'], featured: true },
      { name: 'Summit', alt: '5,000 م', need: 'من 4,000 نقطة', perks: ['1.5 نقطة لكل 1 كرونة', 'هدية مع كل طلب', 'أول من يحصل على الإصدارات الجديدة'] },
    ],
    s3: { eyebrow: 'طرق جمع النقاط', title: 'نقاط على', accent: 'الأشياء الصغيرة.' },
    earn: [['إنشاء حساب', '100 نقطة'], ['كل 1 كرونة تنفقها', '+1 نقطة'], ['كتابة مراجعة', '50 نقطة'], ['متابعتنا على إنستغرام', '25 نقطة'], ['عيد ميلادك', '100 نقطة'], ['دعوة صديق', '250 نقطة']],
  },
  ur: {
    hero: { eyebrow: 'سمٹ ریوارڈز', title: 'ہر معمول', accent: 'آپ کو بلند کرتا ہے۔', lead: 'ہر آرڈر پر پوائنٹس جمع کریں اور بیس کیمپ سے سمٹ تک پہنچیں۔' },
    join: 'مفت شامل ہوں', login: 'لاگ ان',
    s1: { eyebrow: 'یہ کیسے کام کرتا ہے', title: 'شامل ہوں، جمع کریں،', accent: 'استعمال کریں۔' },
    how: [
      { icon: 'user', title: 'شامل ہوں', text: 'مفت اکاؤنٹ بنائیں اور سائن اپ پر پوائنٹس حاصل کریں۔' },
      { icon: 'star', title: 'جمع کریں', text: 'ہر آرڈر، ریویو اور سالگرہ پر پوائنٹس جمع کریں۔' },
      { icon: 'gift', title: 'استعمال کریں', text: 'پوائنٹس کو اپنے اگلے آرڈر پر رعایت میں بدلیں۔' },
    ],
    s2: { eyebrow: 'تین درجے', title: 'جتنا اوپر جائیں گے،', accent: 'اتنا زیادہ پائیں گے۔' },
    tiers: [
      { name: 'Base Camp', alt: '0 میٹر', need: 'شامل ہوتے ہی', perks: ['ہر 1 کرونر پر 1 پوائنٹ', 'سالگرہ کا سرپرائز', 'خبروں تک جلد رسائی'] },
      { name: 'Ridge', alt: '3,000 میٹر', need: '1,500 پوائنٹس سے', perks: ['ہر 1 کرونر پر 1.25 پوائنٹس', 'ہر آرڈر پر مفت ترسیل', 'صرف ممبرز کے لیے آفرز'], featured: true },
      { name: 'Summit', alt: '5,000 میٹر', need: '4,000 پوائنٹس سے', perks: ['ہر 1 کرونر پر 1.5 پوائنٹس', 'ہر آرڈر کے ساتھ تحفہ', 'نئے ایڈیشنز تک سب سے پہلے رسائی'] },
    ],
    s3: { eyebrow: 'پوائنٹس کمانے کے طریقے', title: 'چھوٹی چیزوں پر', accent: 'پوائنٹس۔' },
    earn: [['اکاؤنٹ بنائیں', '100 پوائنٹس'], ['ہر 1 کرونر خرچ پر', '1+ پوائنٹ'], ['ریویو لکھیں', '50 پوائنٹس'], ['انسٹاگرام پر فالو کریں', '25 پوائنٹس'], ['آپ کی سالگرہ', '100 پوائنٹس'], ['دوست کو مدعو کریں', '250 پوائنٹس']],
  },
};

export default function RewardsView({ lang }) {
  const t = tr(T, lang);
  return (
    <>
      <PageHero {...t.hero}>
        <div className="hero-ctas">
          <Link href="/account/register/" className="btn gold">{t.join} <Arrow /></Link>
          <Link href="/account/login/" className="btn ghost">{t.login}</Link>
        </div>
      </PageHero>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <SectionHead {...t.s1} />
          <ol className="how-steps" data-reveal="stagger">
            {t.how.map((h, i) => (
              <li key={h.title}>
                <span className="howto-num">{i + 1}</span>
                <span className="howto-icon"><Icon name={h.icon} size={22} /></span>
                <strong>{h.title}</strong>
                <p>{h.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container">
          <SectionHead {...t.s2} />
          <div className="tiers" data-reveal="stagger">
            {t.tiers.map((tier) => (
              <article className={`tier ${tier.featured ? 'featured' : ''}`} key={tier.name}>
                <svg className="tier-peak" viewBox="0 0 120 50" aria-hidden="true"><path d="M0 50 L34 18 L46 28 L66 4 L88 30 L98 22 L120 50" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
                <span className="tier-alt">{tier.alt}</span>
                <h3>{tier.name}</h3>
                <p className="tier-need">{tier.need}</p>
                <ul>{tier.perks.map((p) => <li key={p}><Icon name="shield" size={14} /> {p}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section tight-top">
        <div className="container narrow">
          <SectionHead {...t.s3} />
          <ul className="earn-list" data-reveal="stagger">
            {t.earn.map(([a, p]) => (
              <li key={a}><span>{a}</span><strong>{p}</strong></li>
            ))}
          </ul>
        </div>
      </Reveal>
    </>
  );
}
