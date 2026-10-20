// Article slugs per language, paired by article id. Used by the language
// switch and hreflang links. Keep in sync with lib/posts.js and lib/posts/*.
// Arabic and Urdu use Latin slugs so links stay clean everywhere.

export const POST_SLUGS = {
  testosterone: {
    en: 'shilajit-and-testosterone-what-the-research-says',
    da: 'shilajit-og-testosteron-hvad-siger-forskningen',
    de: 'shilajit-und-testosteron-was-sagt-die-forschung',
    fr: 'shilajit-et-testosterone-ce-que-dit-la-recherche',
    es: 'shilajit-y-testosterona-que-dice-la-investigacion',
    ar: 'shilajit-and-testosterone-research',
    ur: 'shilajit-aur-testosterone-tehqeeq',
  },
  real: {
    en: 'how-to-tell-if-shilajit-is-real',
    da: 'saadan-ser-du-om-shilajit-er-aegte',
    de: 'echtes-shilajit-erkennen',
    fr: 'comment-reconnaitre-un-vrai-shilajit',
    es: 'como-saber-si-el-shilajit-es-autentico',
    ar: 'how-to-tell-real-shilajit',
    ur: 'asli-shilajit-ki-pehchan',
  },
  // Written per country: buying shilajit where the reader lives.
  denmark: {
    en: 'buying-shilajit-in-denmark',
    da: 'koeb-shilajit-i-danmark',
    de: 'shilajit-kaufen-in-deutschland',
    fr: 'acheter-du-shilajit-en-france',
    es: 'comprar-shilajit-en-espana',
    ar: 'buy-shilajit-in-uae',
    ur: 'pakistan-mein-shilajit-khareedna',
  },
  what: {
    en: 'what-is-shilajit',
    da: 'hvad-er-shilajit',
    de: 'was-ist-shilajit',
    fr: 'qu-est-ce-que-le-shilajit',
    es: 'que-es-el-shilajit',
    ar: 'what-is-shilajit',
    ur: 'shilajit-kya-hai',
  },
  take: {
    en: 'how-to-take-shilajit-resin',
    da: 'saadan-tager-du-shilajit-resin',
    de: 'shilajit-harz-einnehmen',
    fr: 'comment-prendre-la-resine-de-shilajit',
    es: 'como-tomar-resina-de-shilajit',
    ar: 'how-to-take-shilajit-resin',
    ur: 'shilajit-resin-kaise-istemal-karein',
  },
  coa: {
    en: 'how-to-read-a-certificate-of-analysis',
    da: 'saadan-laeser-du-en-analyserapport',
    de: 'analysezertifikat-lesen',
    fr: 'lire-un-certificat-d-analyse',
    es: 'como-leer-un-certificado-de-analisis',
    ar: 'how-to-read-certificate-of-analysis',
    ur: 'lab-report-kaise-parhein',
  },
  formats: {
    en: 'resin-gummies-or-drops',
    da: 'resin-vingummi-draaber-eller-kapsler',
    de: 'shilajit-harz-gummies-tropfen-oder-kapseln',
    fr: 'shilajit-resine-gommes-gouttes-ou-gelules',
    es: 'shilajit-resina-gominolas-gotas-o-capsulas',
    ar: 'shilajit-resin-gummies-drops-capsules',
    ur: 'resin-gummies-drops-ya-capsules',
  },
};

// The slug of the same article in `toLang`. `fromLang` narrows the lookup;
// without it, the slug is searched in every language.
export function counterpartSlug(slug, toLang, fromLang) {
  for (const slugs of Object.values(POST_SLUGS)) {
    const hit = fromLang ? slugs[fromLang] === slug : Object.values(slugs).includes(slug);
    if (hit) return slugs[toLang] || null;
  }
  return null;
}
