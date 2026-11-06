// POST /api/contact: stores a contact-form message in Shopify.
// The message is saved on the customer (Shopify admin → Customers, tag "contact-form",
// text in the customer's Note). Needs a server environment variable
// SHOPIFY_ADMIN_TOKEN (Admin API access token with read_customers + write_customers).
// Optional: CONTACT_ALLOWED_ORIGIN (e.g. https://himalayandrop.dk) when the site is hosted elsewhere.
export const dynamic = 'force-dynamic';

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const version = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION || '2026-07';
const adminUrl = process.env.SHOPIFY_ADMIN_URL || `https://${domain}/admin/api/${version}/graphql.json`;

const cors = () => {
  const o = process.env.CONTACT_ALLOWED_ORIGIN;
  return o ? { 'Access-Control-Allow-Origin': o, 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' } : {};
};
const reply = (body, status = 200) => Response.json(body, { status, headers: cors() });
export const OPTIONS = () => new Response(null, { status: 204, headers: cors() });

async function admin(query, variables) {
  const res = await fetch(adminUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Shopify-Access-Token': process.env.SHOPIFY_ADMIN_TOKEN },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`Shopify ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors).slice(0, 300));
  return json.data;
}

const clean = (v, max) => String(v ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').trim().slice(0, max);

export async function POST(req) {
  let b;
  try { b = await req.json(); } catch { return reply({ error: 'bad_request' }, 400); }
  if (b.website) return reply({ ok: true }); // honeypot: bots fill this hidden field
  const email = clean(b.email, 200);
  const message = clean(b.message, 4000);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || message.length < 3) return reply({ error: 'invalid' }, 400);
  if (!process.env.SHOPIFY_ADMIN_TOKEN || !domain) return reply({ error: 'not_configured' }, 503);

  const entry = [
    `[${new Date().toISOString()}] ${clean(b.subject, 120) || 'Message'}${clean(b.order, 40) ? ` · Order ${clean(b.order, 40)}` : ''} · ${clean(b.lang, 5)}`,
    message,
  ].join('\n');

  try {
    const found = await admin(
      `query($q: String!) { customers(first: 1, query: $q) { nodes { id note tags } } }`,
      { q: `email:${JSON.stringify(email)}` }
    );
    const existing = found.customers.nodes[0];
    let result;
    if (existing) {
      const note = [existing.note, entry].filter(Boolean).join('\n\n---\n').slice(-4800);
      const tags = [...new Set([...(existing.tags || []), 'contact-form'])];
      result = (await admin(
        `mutation($input: CustomerInput!) { customerUpdate(input: $input) { userErrors { message } } }`,
        { input: { id: existing.id, note, tags } }
      )).customerUpdate.userErrors;
    } else {
      result = (await admin(
        `mutation($input: CustomerInput!) { customerCreate(input: $input) { userErrors { message } } }`,
        { input: { email, firstName: clean(b.first ?? b.firstName, 60) || undefined, lastName: clean(b.last ?? b.lastName, 60) || undefined, note: entry, tags: ['contact-form'] } }
      )).customerCreate.userErrors;
    }
    if (result?.length) throw new Error(result[0].message);
    return reply({ ok: true });
  } catch (e) {
    console.error('contact form failed:', e.message);
    return reply({ error: 'failed' }, 502);
  }
}
