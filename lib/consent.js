// Cookie consent: the choice is kept in this browser (localStorage "hd_consent").
// Necessary storage is always on. Analytics (Google Analytics) loads only after the visitor accepts.
export const CONSENT_KEY = 'hd_consent';
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export function getConsent() {
  try {
    const v = JSON.parse(localStorage.getItem(CONSENT_KEY));
    return v && v.v === 1 ? v : null;
  } catch {
    return null;
  }
}

function clearGaCookies() {
  const host = location.hostname;
  document.cookie.split(';').forEach((c) => {
    const name = c.split('=')[0].trim();
    if (!name.startsWith('_ga')) return;
    [host, `.${host}`, `.${host.split('.').slice(-2).join('.')}`].forEach((d) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${d}`;
    });
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  });
}

// Start or stop analytics to match the saved choice.
export function applyConsent(v) {
  if (!GA_ID || typeof window === 'undefined') return;
  if (v && v.analytics) {
    window[`ga-disable-${GA_ID}`] = false;
    if (!document.getElementById('ga-script')) {
      const s = document.createElement('script');
      s.id = 'ga-script';
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', GA_ID, { anonymize_ip: true });
    }
  } else {
    window[`ga-disable-${GA_ID}`] = true;
    clearGaCookies();
  }
}

export function setConsent(analytics) {
  const v = { v: 1, analytics: !!analytics, ts: Date.now() };
  try { localStorage.setItem(CONSENT_KEY, JSON.stringify(v)); } catch {}
  applyConsent(v);
  window.dispatchEvent(new CustomEvent('hd:consent', { detail: v }));
  return v;
}

export const openCookieSettings = () => window.dispatchEvent(new Event('hd:cookie-settings'));
