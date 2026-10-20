'use client';
// Batch lookup: type the batch number printed on the jar to find its lab report.
// EXAMPLE data below; replace with your real batches and PDF links
// (or load them from Shopify metaobjects).
import { useState } from 'react';
import { Icon } from './Icons';
import Link from './LLink';
import { useT } from './LangProvider';

const T = {
  en: { checks: ['Heavy metals', 'Quality', 'Fulvic acid %'], label: 'Batch number', ph: 'Enter your batch number, e.g. HD-G-2611', note: 'Example batches shown for layout. Real batch reports appear here at launch.', batch: 'Batch', tested: 'Tested', view: 'View report', atLaunch: 'Report at launch', none: 'No batch found. Check the number on the bottom of your jar, or', ask: 'ask us', month: 'November 2026', lab: 'Independent EU laboratory' },
  da: { checks: ['Tungmetaller', 'Kvalitet', 'Fulvinsyre %'], label: 'Batchnummer', ph: 'Indtast dit batchnummer, f.eks. HD-G-2611', note: 'Eksempler på batches vist til layout. Rigtige rapporter vises her ved lanceringen.', batch: 'Batch', tested: 'Testet', view: 'Se rapport', atLaunch: 'Rapport ved lancering', none: 'Ingen batch fundet. Tjek nummeret i bunden af din krukke, eller', ask: 'spørg os', month: 'november 2026', lab: 'Uafhængigt EU-laboratorium' },
  de: { checks: ['Schwermetalle', 'Qualität', 'Fulvinsäure %'], label: 'Chargennummer', ph: 'Chargennummer eingeben, z. B. HD-G-2611', note: 'Beispielchargen zur Darstellung. Echte Berichte erscheinen hier zum Start.', batch: 'Charge', tested: 'Geprüft', view: 'Bericht ansehen', atLaunch: 'Bericht zum Start', none: 'Keine Charge gefunden. Prüfe die Nummer auf dem Boden deines Glases, oder', ask: 'frag uns', month: 'November 2026', lab: 'Unabhängiges EU-Labor' },
  fr: { checks: ['Métaux lourds', 'Qualité', 'Acide fulvique %'], label: 'Numéro de lot', ph: 'Saisissez votre numéro de lot, ex. HD-G-2611', note: 'Lots d’exemple pour la mise en page. Les vrais rapports apparaîtront ici au lancement.', batch: 'Lot', tested: 'Testé', view: 'Voir le rapport', atLaunch: 'Rapport au lancement', none: 'Aucun lot trouvé. Vérifiez le numéro sous votre pot, ou', ask: 'écrivez-nous', month: 'Novembre 2026', lab: 'Laboratoire européen indépendant' },
  es: { checks: ['Metales pesados', 'Calidad', 'Ácido fúlvico %'], label: 'Número de lote', ph: 'Introduce tu número de lote, p. ej. HD-G-2611', note: 'Lotes de ejemplo para el diseño. Los informes reales aparecerán aquí en el lanzamiento.', batch: 'Lote', tested: 'Analizado', view: 'Ver informe', atLaunch: 'Informe en el lanzamiento', none: 'No se ha encontrado el lote. Revisa el número en la base del tarro, o', ask: 'escríbenos', month: 'Noviembre de 2026', lab: 'Laboratorio independiente de la UE' },
  ar: { checks: ['المعادن الثقيلة', 'الجودة', 'نسبة حمض الفولفيك'], label: 'رقم الدفعة', ph: 'أدخل رقم الدفعة، مثل HD-G-2611', note: 'دفعات تجريبية لعرض التصميم. ستظهر التقارير الحقيقية هنا عند الإطلاق.', batch: 'الدفعة', tested: 'تاريخ الفحص', view: 'عرض التقرير', atLaunch: 'التقرير عند الإطلاق', none: 'لم يتم العثور على الدفعة. تحقق من الرقم أسفل العبوة، أو', ask: 'اسألنا', month: 'نوفمبر 2026', lab: 'مختبر أوروبي مستقل' },
  ur: { checks: ['بھاری دھاتیں', 'معیار', 'فلوک ایسڈ %'], label: 'بیچ نمبر', ph: 'اپنا بیچ نمبر درج کریں، مثلاً HD-G-2611', note: 'ڈیزائن کے لیے مثالی بیچز۔ اصل رپورٹس لانچ پر یہاں دستیاب ہوں گی۔', batch: 'بیچ', tested: 'ٹیسٹ', view: 'رپورٹ دیکھیں', atLaunch: 'رپورٹ لانچ پر', none: 'کوئی بیچ نہیں ملا۔ برتن کے نیچے نمبر چیک کریں، یا', ask: 'ہم سے پوچھیں', month: 'نومبر 2026', lab: 'آزاد یورپی لیبارٹری' },
};

export const batches = [
  { id: 'HD-G-2611', product: 'Shilajit Resin Gold Edition', tested: 'November 2026', lab: 'Independent EU laboratory', pdf: null },
  { id: 'HD-S-2611', product: 'Shilajit Resin Silver Edition', tested: 'November 2026', lab: 'Independent EU laboratory', pdf: null },
  { id: 'HD-GU-2611', product: 'Shilajit Gummies', tested: 'November 2026', lab: 'Independent EU laboratory', pdf: null },
  { id: 'HD-D-2611', product: 'Shilajit Drops', tested: 'November 2026', lab: 'Independent EU laboratory', pdf: null },
  { id: 'HD-C-2611', product: 'Shilajit Capsules', tested: 'November 2026', lab: 'Independent EU laboratory', pdf: null },
];

export default function BatchLookup() {
  const t = useT(T);
  const [q, setQ] = useState('');
  const term = q.trim().toUpperCase();
  const list = term ? batches.filter((b) => b.id.includes(term) || b.product.toUpperCase().includes(term)) : batches;

  return (
    <div className="batch">
      <label className="batch-search">
        <Icon name="flask" size={20} />
        <span className="sr-only">{t.label}</span>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.ph} />
      </label>
      <p className="page-notice">{t.note}</p>
      <div className="batch-list">
        {list.map((b) => (
          <div className="batch-row" key={b.id}>
            <div className="batch-id">
              <span className="eyebrow">{t.batch}</span>
              <strong>{b.id}</strong>
            </div>
            <div className="batch-meta">
              <strong>{b.product}</strong>
              <span>{t.tested} {t.month} · {t.lab}</span>
            </div>
            <ul className="batch-checks">
              {t.checks.map((c) => <li key={c}><Icon name="shield" size={14} /> {c}</li>)}
            </ul>
            {b.pdf ? (
              <a className="btn small" href={b.pdf} target="_blank" rel="noreferrer">{t.view}</a>
            ) : (
              <span className="btn small outline is-static">{t.atLaunch}</span>
            )}
          </div>
        ))}
        {list.length === 0 && <p className="batch-empty">{t.none} <Link href="/contact/">{t.ask}</Link>.</p>}
      </div>
    </div>
  );
}
