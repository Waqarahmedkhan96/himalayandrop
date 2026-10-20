import AuthLayout from '@/components/AuthLayout';
import { LoginForm, RegisterForm } from '@/components/AuthForms';
import { pageMeta } from '@/lib/seo';
import { tr } from '@/lib/i18n';

// Account pages are kept out of search results.
export const loginMeta = (lang) => pageMeta('login', lang, '/account/login/', { noindex: true });
export const registerMeta = (lang) => pageMeta('register', lang, '/account/register/', { noindex: true });

const T = {
  en: {
    login: { title: 'Welcome', accent: 'back.', lead: 'Log in to see your orders and Summit Rewards points.', switchText: 'New to Himalayan Drop?', switchLabel: 'Create an account' },
    register: { title: 'Create your', accent: 'account.', lead: 'Join Summit Rewards and start at Base Camp with 100 points.', switchText: 'Already a member?', switchLabel: 'Log in' },
  },
  da: {
    login: { title: 'Velkommen', accent: 'tilbage.', lead: 'Log ind for at se dine ordrer og dine Summit Rewards-point.', switchText: 'Ny hos Himalayan Drop?', switchLabel: 'Opret en konto' },
    register: { title: 'Opret din', accent: 'konto.', lead: 'Bliv medlem af Summit Rewards, og start i Base Camp med 100 point.', switchText: 'Allerede medlem?', switchLabel: 'Log ind' },
  },
  de: {
    login: { title: 'Willkommen', accent: 'zurück.', lead: 'Melde dich an, um deine Bestellungen und Summit Rewards Punkte zu sehen.', switchText: 'Neu bei Himalayan Drop?', switchLabel: 'Konto erstellen' },
    register: { title: 'Erstelle dein', accent: 'Konto.', lead: 'Werde Teil von Summit Rewards und starte im Base Camp mit 100 Punkten.', switchText: 'Schon Mitglied?', switchLabel: 'Anmelden' },
  },
  fr: {
    login: { title: 'Bon', accent: 'retour.', lead: 'Connectez-vous pour voir vos commandes et vos points Summit Rewards.', switchText: 'Nouveau chez Himalayan Drop ?', switchLabel: 'Créer un compte' },
    register: { title: 'Créez votre', accent: 'compte.', lead: 'Rejoignez Summit Rewards et commencez au Camp de base avec 100 points.', switchText: 'Déjà membre ?', switchLabel: 'Connexion' },
  },
  es: {
    login: { title: 'Bienvenido', accent: 'de nuevo.', lead: 'Inicia sesión para ver tus pedidos y tus puntos Summit Rewards.', switchText: '¿Nuevo en Himalayan Drop?', switchLabel: 'Crear una cuenta' },
    register: { title: 'Crea tu', accent: 'cuenta.', lead: 'Únete a Summit Rewards y empieza en el Campo Base con 100 puntos.', switchText: '¿Ya eres miembro?', switchLabel: 'Iniciar sesión' },
  },
  ar: {
    login: { title: 'مرحباً', accent: 'بعودتك.', lead: 'سجّل الدخول لرؤية طلباتك ونقاط مكافآت Summit.', switchText: 'جديد في Himalayan Drop؟', switchLabel: 'أنشئ حساباً' },
    register: { title: 'أنشئ', accent: 'حسابك.', lead: 'انضم إلى مكافآت Summit وابدأ من المخيم الأساسي بـ100 نقطة.', switchText: 'لديك حساب بالفعل؟', switchLabel: 'تسجيل الدخول' },
  },
  ur: {
    login: { title: 'دوبارہ', accent: 'خوش آمدید۔', lead: 'اپنے آرڈرز اور سمٹ ریوارڈز پوائنٹس دیکھنے کے لیے لاگ ان کریں۔', switchText: 'Himalayan Drop پر نئے ہیں؟', switchLabel: 'اکاؤنٹ بنائیں' },
    register: { title: 'اپنا', accent: 'اکاؤنٹ بنائیں۔', lead: 'سمٹ ریوارڈز میں شامل ہوں اور بیس کیمپ سے 100 پوائنٹس کے ساتھ آغاز کریں۔', switchText: 'پہلے سے ممبر ہیں؟', switchLabel: 'لاگ ان' },
  },
};

export function LoginView({ lang }) {
  return (
    <AuthLayout {...tr(T, lang).login} switchHref="/account/register/">
      <LoginForm />
    </AuthLayout>
  );
}

export function RegisterView({ lang }) {
  return (
    <AuthLayout {...tr(T, lang).register} switchHref="/account/login/">
      <RegisterForm />
    </AuthLayout>
  );
}
