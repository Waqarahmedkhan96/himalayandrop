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
