'use client';
// Login and register forms. With Shopify connected they use the Storefront API
// customer endpoints (enable customer accounts in Shopify and give the
// storefront token the customer read/write permissions).
import SimpleForm from './SimpleForm';
import { isShopifyConnected, storefront } from '@/lib/shopify';

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
  return (
    <SimpleForm
      id="login"
      submit="Log in"
      thanks="Welcome back."
      thanksText="You are now logged in."
      onSend={login}
      fields={[
        { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
        { name: 'password', label: 'Password', type: 'password', required: true, autoComplete: 'current-password' },
      ]}
    />
  );
}

export function RegisterForm() {
  return (
    <SimpleForm
      id="register"
      submit="Create account"
      thanks="Welcome to Base Camp."
      thanksText="Your account is ready, and your first 100 Summit Rewards points are on their way."
      onSend={register}
      fields={[
        [{ name: 'firstName', label: 'First name', required: true, autoComplete: 'given-name' }, { name: 'lastName', label: 'Last name', autoComplete: 'family-name' }],
        { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
        { name: 'password', label: 'Password (min. 8 characters)', type: 'password', required: true, minLength: 8, autoComplete: 'new-password' },
      ]}
      consent={{ required: false, text: 'Yes, send me launch news and offers by email. Unsubscribe anytime.' }}
    />
  );
}
