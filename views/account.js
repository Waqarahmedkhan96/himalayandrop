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
