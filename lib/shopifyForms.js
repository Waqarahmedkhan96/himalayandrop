// Newsletter signup through the Shopify Storefront API.
// A signup creates a Shopify customer with email marketing accepted, so they appear
// under Customers → "Subscribed" in Shopify admin and can be emailed with Shopify Email.
import { isShopifyConnected, storefront } from './shopify';

const randomPassword = () => {
  const bytes = new Uint8Array(18);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(36).padStart(2, '0')).join('').slice(0, 30) + 'Aa1!';
};

export async function subscribeNewsletter(email) {
  if (!isShopifyConnected) return new Promise((r) => setTimeout(r, 600)); // demo mode, like the account forms
  const d = await storefront(
    `mutation($input: CustomerCreateInput!) { customerCreate(input: $input) { customer { id } customerUserErrors { code message } } }`,
    { input: { email, password: randomPassword(), acceptsMarketing: true } }
  );
  const errors = d.customerCreate.customerUserErrors || [];
  // TAKEN = this email is already a customer: treat as subscribed, and never reveal it.
  if (errors.length && !errors.every((e) => e.code === 'TAKEN')) throw new Error(errors[0].message);
}
