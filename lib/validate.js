// Branded form validation: finds the first invalid field and returns a clear
// message in the page language (instead of the browser's own pop-ups).
const MSG = {
  en: {
    missing: (l) => `Please fill in ${l.toLowerCase()}.`,
    choose: (l) => `Please choose ${l.toLowerCase()}.`,
    email: 'Please enter a valid email address.',
    short: (n) => `Please use at least ${n} characters.`,
    consent: 'Please tick the box to continue.',
  },
  da: {
    missing: (l) => `Udfyld venligst ${l.toLowerCase()}.`,
    choose: (l) => `Vælg venligst ${l.toLowerCase()}.`,
    email: 'Skriv en gyldig e-mailadresse.',
    short: (n) => `Brug mindst ${n} tegn.`,
    consent: 'Sæt venligst flueben for at fortsætte.',
  },
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function labelOf(form, el) {
  const l = el.id && form.querySelector(`label[for="${el.id}"]`);
  return (l?.textContent || el.getAttribute('aria-label') || el.name || '').replace(/\s*\*$/, '').replace(/\(.*?\)/g, '').trim();
}

export function validateForm(form, lang = 'en') {
  const m = MSG[lang] || MSG.en;
  for (const el of Array.from(form.elements)) {
    if (!el.name && el.type !== 'checkbox') continue;
    if (el.disabled || el.type === 'submit' || el.type === 'button') continue;
    el.removeAttribute('aria-invalid');
  }
  for (const el of Array.from(form.elements)) {
    if (el.disabled || el.type === 'submit' || el.type === 'button' || !el.willValidate) continue;
    const v = (el.value || '').trim();
    let msg = '';
    if (el.type === 'checkbox') { if (el.required && !el.checked) msg = m.consent; }
    else if (el.required && !v) msg = el.tagName === 'SELECT' ? m.choose(labelOf(form, el)) : m.missing(labelOf(form, el));
    else if (el.type === 'email' && v && !EMAIL.test(v)) msg = m.email;
    else if (el.minLength > 0 && v && v.length < el.minLength) msg = m.short(el.minLength);
    if (msg) {
      el.setAttribute('aria-invalid', 'true');
      return { msg, el };
    }
  }
  return null;
}
