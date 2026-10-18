'use client';
// Premium contact form with floating labels.
// It validates in the browser and shows a thank-you state. To actually receive
// messages, send the data to a form service (e.g. Formspree, Resend, or Shopify
// Forms) inside onSubmit.
import { useState } from 'react';
import { Arrow } from './Arrow';

const subjects = ['Order & delivery', 'Product question', 'Lab reports', 'Returns & guarantee', 'Wholesale & partners', 'Press'];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    // const data = Object.fromEntries(new FormData(e.target));
    // await fetch('https://formspree.io/f/your-id', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
    setTimeout(() => {
      setBusy(false);
      setSent(true);
    }, 600);
  };

  if (sent) {
    return (
      <div className="contact-thanks" role="status">
        <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r="30" fill="none" stroke="#cca25e" strokeWidth="1.5" />
          <path d="M20 33l8 8 16-17" fill="none" stroke="#cca25e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3>Thank you.</h3>
        <p>Your message is on its way. We’ll reply by email.</p>
        <button type="button" className="btn ghost small" onClick={() => setSent(false)}>Send another message</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate={false}>
      <div className="field-row">
        <div className="field">
          <input id="first" name="first" placeholder=" " autoComplete="given-name" />
          <label htmlFor="first">First name</label>
        </div>
        <div className="field">
          <input id="last" name="last" placeholder=" " autoComplete="family-name" />
          <label htmlFor="last">Last name</label>
        </div>
      </div>
      <div className="field">
        <input id="cemail" name="email" type="email" required placeholder=" " autoComplete="email" />
        <label htmlFor="cemail">Email *</label>
      </div>
      <div className="field select">
        <select id="subject" name="subject" defaultValue="" required>
          <option value="" disabled>Choose a subject</option>
          {subjects.map((s) => <option key={s}>{s}</option>)}
        </select>
        <label htmlFor="subject">Subject *</label>
        <svg className="chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
      </div>
      <div className="field">
        <input id="order" name="order" placeholder=" " />
        <label htmlFor="order">Order number (optional)</label>
      </div>
      <div className="field">
        <textarea id="message" name="message" rows="5" required placeholder=" " />
        <label htmlFor="message">Message *</label>
      </div>
      <label className="consent">
        <input type="checkbox" required />
        <span>I agree that Himalayan Drop may use my details to answer this message.</span>
      </label>
      <button className="btn gold block" type="submit" disabled={busy}>
        {busy ? 'Sending…' : 'Send message'} <Arrow />
      </button>
    </form>
  );
}
