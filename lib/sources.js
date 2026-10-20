// Scientific and regulatory sources cited on the site.
// Open-access or public records only, so readers can check every claim.
// Add new sources here and refer to them by id.

export const sources = {
  kamgar2025: {
    cite: 'Kamgar E, Kaykhaii M, Zembrzuska J. A comprehensive review on shilajit: what we know about its chemical composition. Critical Reviews in Analytical Chemistry. 2025;55(3):461–473.',
    url: 'https://doi.org/10.1080/10408347.2023.2293963',
  },
  wilson2011: {
    cite: 'Wilson E, Rajamanickam GV, Dubey GP, et al. Review on shilajit used in traditional Indian medicine. Journal of Ethnopharmacology. 2011;136(1):1–9.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/21530631/',
  },
  stohs2014: {
    cite: 'Stohs SJ. Safety and efficacy of shilajit (mumie, moomiyo). Phytotherapy Research. 2014;28(4):475–479.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/23733436/',
  },
  carrasco2012: {
    cite: 'Carrasco-Gallardo C, Guzmán L, Maccioni RB. Shilajit: a natural phytocomplex with potential procognitive activity. International Journal of Alzheimer’s Disease. 2012;2012:674142.',
    url: 'https://doi.org/10.1155/2012/674142',
  },
  pandit2016: {
    cite: 'Pandit S, Biswas S, Jana U, De RK, Mukhopadhyay SC, Biswas TK. Clinical evaluation of purified Shilajit on testosterone levels in healthy volunteers. Andrologia. 2016;48(5):570–575.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/26395129/',
  },
  biswas2010: {
    cite: 'Biswas TK, Pandit S, Mondal S, et al. Clinical evaluation of spermatogenic activity of processed Shilajit in oligospermia. Andrologia. 2010;42(1):48–56.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/20078516/',
  },
  keller2019: {
    cite: 'Keller JL, Housh TJ, Hill EC, Smith CM, Schmidt RJ, Johnson GO. The effects of Shilajit supplementation on fatigue-induced decreases in muscular strength and serum hydroxyproline levels. Journal of the International Society of Sports Nutrition. 2019;16:3.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6364418/',
  },
  leproult2011: {
    cite: 'Leproult R, Van Cauter E. Effect of 1 week of sleep restriction on testosterone levels in young healthy men. JAMA. 2011;305(21):2173–2174.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4445839/',
  },
  saper2008: {
    cite: 'Saper RB, Phillips RS, Sehgal A, et al. Lead, mercury, and arsenic in US- and Indian-manufactured Ayurvedic medicines sold via the Internet. JAMA. 2008;300(8):915–923.',
    url: 'https://doi.org/10.1001/jama.300.8.915',
  },
  efsaZinc: {
    cite: 'EFSA Panel on Dietetic Products, Nutrition and Allergies. Scientific Opinion on the substantiation of health claims related to zinc (incl. maintenance of normal serum testosterone concentrations). EFSA Journal. 2010;8(10):1819.',
    url: 'https://www.efsa.europa.eu/en/efsajournal/pub/1819',
  },
  reg432: {
    cite: 'Commission Regulation (EU) No 432/2012 establishing a list of permitted health claims made on foods.',
    url: 'https://eur-lex.europa.eu/eli/reg/2012/432/oj',
  },
  reg1924: {
    cite: 'Regulation (EC) No 1924/2006 on nutrition and health claims made on foods.',
    url: 'https://eur-lex.europa.eu/eli/reg/2006/1924/oj',
  },
  reg2023915: {
    cite: 'Commission Regulation (EU) 2023/915 on maximum levels for certain contaminants in food (incl. lead, cadmium and mercury in food supplements).',
    url: 'https://eur-lex.europa.eu/eli/reg/2023/915/oj',
  },
  fvst: {
    cite: 'Fødevarestyrelsen (Danish Veterinary and Food Administration): food supplements (kosttilskud) and notification before sale.',
    url: 'https://foedevarestyrelsen.dk',
  },
};

export const refs = (...ids) => ids.map((id) => ({ id, ...sources[id] })).filter((r) => r.cite);
