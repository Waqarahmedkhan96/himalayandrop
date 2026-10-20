'use client';
// Login and register forms. With Shopify connected they use the Storefront API
// customer endpoints (enable customer accounts in Shopify and give the
// storefront token the customer read/write permissions).
import SimpleForm from './SimpleForm';
import { isShopifyConnected, storefront } from '@/lib/shopify';
import { useT } from './LangProvider';

const T = {
  en: { login: 'Log in', back: 'Welcome back.', loggedIn: 'You are now logged in.', email: 'Email', password: 'Password', create: 'Create account', welcome: 'Welcome to Base Camp.', ready: 'Your account is ready, and your first 100 Summit Rewards points are on their way.', first: 'First name', last: 'Last name', newPass: 'Password (min. 8 characters)', consent: 'Yes, send me launch news and offers by email. Unsubscribe anytime.' },
  da: { login: 'Log ind', back: 'Velkommen tilbage.', loggedIn: 'Du er nu logget ind.', email: 'E-mail', password: 'Adgangskode', create: 'Opret konto', welcome: 'Velkommen til Base Camp.', ready: 'Din konto er klar, og dine første 100 Summit Rewards-point er på vej.', first: 'Fornavn', last: 'Efternavn', newPass: 'Adgangskode (mindst 8 tegn)', consent: 'Ja tak, send mig nyheder og tilbud på e-mail. Du kan altid afmelde dig.' },
  de: { login: 'Anmelden', back: 'Willkommen zurück.', loggedIn: 'Du bist jetzt angemeldet.', email: 'E-Mail', password: 'Passwort', create: 'Konto erstellen', welcome: 'Willkommen im Base Camp.', ready: 'Dein Konto ist bereit, und deine ersten 100 Summit Rewards Punkte sind unterwegs.', first: 'Vorname', last: 'Nachname', newPass: 'Passwort (mind. 8 Zeichen)', consent: 'Ja, schickt mir Neuigkeiten und Angebote per E-Mail. Abmeldung jederzeit möglich.' },
  fr: { login: 'Connexion', back: 'Bon retour.', loggedIn: 'Vous êtes connecté.', email: 'E-mail', password: 'Mot de passe', create: 'Créer un compte', welcome: 'Bienvenue au Camp de base.', ready: 'Votre compte est prêt et vos 100 premiers points Summit Rewards arrivent.', first: 'Prénom', last: 'Nom', newPass: 'Mot de passe (8 caractères min.)', consent: 'Oui, envoyez-moi les nouveautés et offres par e-mail. Désabonnement à tout moment.' },
  es: { login: 'Iniciar sesión', back: 'Bienvenido de nuevo.', loggedIn: 'Has iniciado sesión.', email: 'Correo electrónico', password: 'Contraseña', create: 'Crear cuenta', welcome: 'Bienvenido al Campo Base.', ready: 'Tu cuenta está lista y tus primeros 100 puntos Summit Rewards están en camino.', first: 'Nombre', last: 'Apellidos', newPass: 'Contraseña (mín. 8 caracteres)', consent: 'Sí, enviadme novedades y ofertas por correo. Puedo darme de baja cuando quiera.' },
  ar: { login: 'تسجيل الدخول', back: 'مرحباً بعودتك.', loggedIn: 'تم تسجيل دخولك.', email: 'البريد الإلكتروني', password: 'كلمة المرور', create: 'إنشاء حساب', welcome: 'مرحباً بك في المخيم الأساسي.', ready: 'حسابك جاهز، وأول 100 نقطة من مكافآت Summit في طريقها إليك.', first: 'الاسم الأول', last: 'اسم العائلة', newPass: 'كلمة المرور (8 أحرف على الأقل)', consent: 'نعم، أرسلوا لي أخبار الإطلاق والعروض عبر البريد. يمكنني إلغاء الاشتراك في أي وقت.' },
  ur: { login: 'لاگ ان', back: 'خوش آمدید۔', loggedIn: 'آپ لاگ ان ہو گئے ہیں۔', email: 'ای میل', password: 'پاس ورڈ', create: 'اکاؤنٹ بنائیں', welcome: 'بیس کیمپ میں خوش آمدید۔', ready: 'آپ کا اکاؤنٹ تیار ہے، اور آپ کے پہلے 100 سمٹ ریوارڈز پوائنٹس آ رہے ہیں۔', first: 'پہلا نام', last: 'آخری نام', newPass: 'پاس ورڈ (کم از کم 8 حروف)', consent: 'جی ہاں، مجھے لانچ کی خبریں اور آفرز ای میل کریں۔ کسی بھی وقت ان سبسکرائب کر سکتا/سکتی ہوں۔' },
};

async function login({ email, password }) {
  if (!isShopifyConnected) return new Promise((r) => setTimeout(r, 600));
  const d = await storefront(
    `mutation($input: CustomerAccessTokenCreateInput!) { customerAccessTokenCreate(input: $input) { customerAccessToken { accessToken expiresAt } customerUserErrors { message } } }`,
    { input: { email, password } }
  );
  const res = d.customerAccessTokenCreate;
  if (res.customerUserErrors.length) throw new Error(res.customerUserErrors[0].message);
  try { localStorage.setItem('hd_customer', JSON.stringify(res.customerAccessToken)); } catch {}
}

async function register({ firstName, lastName, email, password, consent }) {
  if (!isShopifyConnected) return new Promise((r) => setTimeout(r, 600));
  const d = await storefront(
    `mutation($input: CustomerCreateInput!) { customerCreate(input: $input) { customer { id } customerUserErrors { message } } }`,
    { input: { firstName, lastName, email, password, acceptsMarketing: Boolean(consent) } }
  );
  const res = d.customerCreate;
  if (res.customerUserErrors.length) throw new Error(res.customerUserErrors[0].message);
  await login({ email, password });
}

export function LoginForm() {
  const t = useT(T);
  return (
    <SimpleForm
      id="login"
      submit={t.login}
      thanks={t.back}
      thanksText={t.loggedIn}
      onSend={login}
      fields={[
        { name: 'email', label: t.email, type: 'email', required: true, autoComplete: 'email' },
        { name: 'password', label: t.password, type: 'password', required: true, autoComplete: 'current-password' },
      ]}
    />
  );
}

export function RegisterForm() {
  const t = useT(T);
  return (
    <SimpleForm
      id="register"
      submit={t.create}
      thanks={t.welcome}
      thanksText={t.ready}
      onSend={register}
      fields={[
        [{ name: 'firstName', label: t.first, required: true, autoComplete: 'given-name' }, { name: 'lastName', label: t.last, autoComplete: 'family-name' }],
        { name: 'email', label: t.email, type: 'email', required: true, autoComplete: 'email' },
        { name: 'password', label: t.newPass, type: 'password', required: true, minLength: 8, autoComplete: 'new-password' },
      ]}
      consent={{ required: false, text: t.consent }}
    />
  );
}
