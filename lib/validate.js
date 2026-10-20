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
  de: {
    missing: (l) => `Bitte fülle das Feld „${l}“ aus.`,
    choose: (l) => `Bitte wähle „${l}“.`,
    email: 'Bitte gib eine gültige E-Mail-Adresse ein.',
    short: (n) => `Bitte verwende mindestens ${n} Zeichen.`,
    consent: 'Bitte setze das Häkchen, um fortzufahren.',
  },
  fr: {
    missing: (l) => `Veuillez remplir le champ « ${l} ».`,
    choose: (l) => `Veuillez choisir « ${l} ».`,
    email: 'Veuillez saisir une adresse e-mail valide.',
    short: (n) => `Veuillez utiliser au moins ${n} caractères.`,
    consent: 'Veuillez cocher la case pour continuer.',
  },
  es: {
    missing: (l) => `Rellena el campo «${l}».`,
    choose: (l) => `Elige «${l}».`,
    email: 'Introduce una dirección de correo válida.',
    short: (n) => `Usa al menos ${n} caracteres.`,
    consent: 'Marca la casilla para continuar.',
  },
  ar: {
    missing: (l) => `يرجى تعبئة حقل «${l}».`,
    choose: (l) => `يرجى اختيار «${l}».`,
    email: 'يرجى إدخال بريد إلكتروني صحيح.',
    short: (n) => `يرجى استخدام ${n} أحرف على الأقل.`,
    consent: 'يرجى تحديد المربع للمتابعة.',
  },
  ur: {
    missing: (l) => `براہِ کرم «${l}» پُر کریں۔`,
    choose: (l) => `براہِ کرم «${l}» منتخب کریں۔`,
    email: 'براہِ کرم درست ای میل ایڈریس درج کریں۔',
    short: (n) => `براہِ کرم کم از کم ${n} حروف استعمال کریں۔`,
    consent: 'آگے بڑھنے کے لیے خانے پر نشان لگائیں۔',
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
