// Lab data shown on the product pages.
//
// PLACEHOLDER VALUES. Everything marked PLACEHOLDER is example data for the
// design. Replace it with the figures from your real batch reports (and the
// real laboratory name) before launch. The fulvic acid figure (83.1 %) is ours.
//
// EU maximum levels for food supplements: Commission Regulation (EU) 2023/915
// (lead 3.0 mg/kg, cadmium 1.0 mg/kg, mercury 0.10 mg/kg).

export const LAB = {
  fulvic: 83.1, // % fulvic acid, our figure
  fulvicMargin: 0.6, // PLACEHOLDER: ± measurement uncertainty
  minerals: '85+',
  method: 'HPLC-UV', // PLACEHOLDER: method from the report
  report: 'HD-2026-0001', // PLACEHOLDER: report number
  date: '2026-03-12', // PLACEHOLDER: report date (ISO)
  batch: 'HD-B0001', // PLACEHOLDER: batch / lot number
  metals: [
    { key: 'lead', sym: 'Pb', value: 0.42, limit: 3.0 }, // PLACEHOLDER value
    { key: 'cadmium', sym: 'Cd', value: 0.05, limit: 1.0 }, // PLACEHOLDER value
    { key: 'mercury', sym: 'Hg', value: 0.008, limit: 0.1 }, // PLACEHOLDER value
  ],
  // PLACEHOLDER: list only standards your producer is certified for.
  certs: ['ISO 9001', 'ISO 22000', 'GMP', 'HACCP'],
};

// Nutrient reference values (EU Regulation 1169/2011, Annex XIII).
export const NRV = { zinc: { value: 10, unit: 'mg' }, selenium: { value: 55, unit: 'µg' } };

// Order of the formula rows per product family (matches lib/products.js).
export const FORMULA_KEYS = {
  gummies: ['shilajit', 'citrulline', 'ginseng', 'zinc', 'selenium', 'seamoss', 'blackseed'],
  drops: ['shilajit', 'citrulline', 'ginseng', 'zinc', 'selenium', 'blackseed', 'seamoss'],
  capsules: ['shilajit', 'citrulline', 'ginseng', 'zinc', 'selenium', 'blackseed', 'seamoss'],
};

// "5 mg" / "0,5 mg" / "55 µg" -> { n: 5, unit: 'mg' }
export function parseAmount(s = '') {
  const m = String(s).replace(',', '.').match(/([\d.]+)\s*(mg|µg|g)/);
  return m ? { n: parseFloat(m[1]), unit: m[2] } : null;
}

// % of the nutrient reference value, or null when none is established.
export function nrvPct(key, amount) {
  const ref = NRV[key];
  const a = parseAmount(amount);
  if (!ref || !a) return null;
  const n = a.unit === ref.unit ? a.n : a.unit === 'mg' && ref.unit === 'µg' ? a.n * 1000 : a.n / 1000;
  return Math.round((n / ref.value) * 100);
}
