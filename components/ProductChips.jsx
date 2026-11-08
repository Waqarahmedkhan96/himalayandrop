'use client';
// Icon chips under the buy box. Tap a chip to read about it.
// EU wording rule: Capsules show every authorised zinc and selenium claim (they hold 15% or more of
// the reference value), word for word. Resin, Gummies and Drops show facts only (origin, amounts,
// lab testing), never health claims. "Energy" and "vitality" are NOT authorised for these
// ingredients, so they must not be added. English and Danish only: other languages keep the
// translated six-card section (FormulaBenefits) for capsules and show nothing for the other products.
import { useState } from 'react';
import FormulaBenefits from './FormulaBenefits';
import { useLang } from './LangProvider';

const IC = {
  pin: <path d="M12 21s-6-5.5-6-10a6 6 0 0 1 12 0c0 4.5-6 10-6 10Z M12 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0" />,
  flask: <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" />,
  gem: <path d="m6 3-3 6 9 12 9-12-3-6ZM3 9h18" />,
  shield: <path d="M12 3 5 6v6c0 4.5 3 7.8 7 9 4-1.2 7-4.5 7-9V6Zm-3 9 2 2 4-4" />,
  sun: <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5" />,
  drop: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />,
  leaf: <path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15M5 19c3-5 6-8 10-10" />,
  box: <path d="M3 8 12 3l9 5v8l-9 5-9-5ZM3 8l9 5 9-5M12 13v8" />,
  check: <path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-3.5 8 2.5 2.5 4.5-5" />,
};

// ── Capsules: authorised claims (Regulation (EU) 432/2012), word for word ──
const CLAIMS = {
  en: {
    eyebrow: 'Feel the difference', h: 'Two minerals,', hg: 'every approved benefit.',
    p: 'Per serving of two capsules: 5 mg zinc (50% NRV) and 55 µg selenium (100% NRV). Tap a benefit to read the approved wording.',
    zn: 'Zinc', se: 'Selenium', all: (n) => `Show all (${n})`, less: 'Show less',
    note: 'Officially authorised EU claim. Food supplement, not a substitute for a varied, balanced diet and a healthy lifestyle.',
    zinc: [
      ['Immune system', 'the normal function of the immune system'], ['Clear thinking', 'normal cognitive function'],
      ['Skin', 'the maintenance of normal skin'], ['Hair', 'the maintenance of normal hair'], ['Nails', 'the maintenance of normal nails'],
      ['Bones', 'the maintenance of normal bones'], ['Vision', 'the maintenance of normal vision'],
      ['Testosterone', 'the maintenance of normal testosterone levels in the blood'], ['Fertility', 'normal fertility and reproduction'],
      ['Carbohydrate metabolism', 'normal carbohydrate metabolism'], ['Fatty acid metabolism', 'normal metabolism of fatty acids'],
      ['Macronutrient metabolism', 'normal macronutrient metabolism'], ['Acid-base balance', 'normal acid-base metabolism'],
      ['Vitamin A metabolism', 'normal metabolism of vitamin A'], ['DNA synthesis', 'normal DNA synthesis'],
      ['Protein synthesis', 'normal protein synthesis'], ['Cell division', 'a role in the process of cell division'],
      ['Cell protection', 'the protection of cells from oxidative stress'],
    ],
    selenium: [
      ['Immune system', 'the normal function of the immune system'], ['Thyroid', 'normal thyroid function'],
      ['Hair', 'the maintenance of normal hair'], ['Nails', 'the maintenance of normal nails'],
      ['Sperm production', 'normal spermatogenesis'], ['Cell protection', 'the protection of cells from oxidative stress'],
    ],
    verb: (m) => `${m} contributes to`,
  },
  da: {
    eyebrow: 'Mærk forskellen', h: 'To mineraler,', hg: 'alle godkendte fordele.',
    p: 'Pr. portion på to kapsler: 5 mg zink (50 % NRV) og 55 µg selen (100 % NRV). Tryk på en fordel for at læse den godkendte ordlyd.',
    zn: 'Zink', se: 'Selen', all: (n) => `Vis alle (${n})`, less: 'Vis færre',
    note: 'Officielt godkendt EU-anprisning. Kosttilskud, ikke en erstatning for en varieret, balanceret kost og en sund livsstil.',
    zinc: [
      ['Immunforsvar', 'immunsystemets normale funktion'], ['Klar tankegang', 'en normal kognitiv funktion'],
      ['Hud', 'at opretholde normal hud'], ['Hår', 'at opretholde normalt hår'], ['Negle', 'at opretholde normale negle'],
      ['Knogler', 'at opretholde normale knogler'], ['Syn', 'at opretholde normalt syn'],
      ['Testosteron', 'at opretholde et normalt testosteronniveau i blodet'], ['Frugtbarhed', 'normal frugtbarhed og reproduktion'],
      ['Kulhydratstofskifte', 'et normalt kulhydratstofskifte'], ['Fedtsyrestofskifte', 'et normalt stofskifte af fedtsyrer'],
      ['Makronæringsstoffer', 'et normalt stofskifte af makronæringsstoffer'], ['Syre-base-balance', 'et normalt syre-base-stofskifte'],
      ['A-vitaminstofskifte', 'et normalt stofskifte af A-vitamin'], ['DNA-syntese', 'normal DNA-syntese'],
      ['Proteinsyntese', 'normal proteinsyntese'], ['Celledeling', 'en rolle i celledelingen'],
      ['Cellebeskyttelse', 'at beskytte cellerne mod oxidativt stress'],
    ],
    selenium: [
      ['Immunforsvar', 'immunsystemets normale funktion'], ['Skjoldbruskkirtel', 'normal skjoldbruskkirtelfunktion'],
      ['Hår', 'at opretholde normalt hår'], ['Negle', 'at opretholde normale negle'],
      ['Sædproduktion', 'normal spermatogenese'], ['Cellebeskyttelse', 'at beskytte cellerne mod oxidativt stress'],
    ],
    verb: (m) => `${m} bidrager til`,
  },
};

// ── Resin, Gummies, Drops: facts only ──
const FACTS = {
  en: {
    eyebrow: 'What is in it', note: 'A description of the product only.',
    resin: { h: 'Inside every', hg: 'jar.', p: 'What nature puts into real Himalayan resin, with the numbers from our independent lab.', items: [
      ['pin', 'Origin', '5,000 m', 'Skardu origin', 'Hand-collected above 5,000 m in Skardu, Pakistan, far from roads and industry.'],
      ['flask', 'Fulvic acid', '83.1%', 'Fulvic acid', 'The water-soluble organic acids shilajit is known for, measured by an independent lab.'],
      ['gem', 'Minerals', '85+', 'Minerals & trace elements', 'Naturally present in the rock it seeps from. Nothing added, every batch screened for heavy metals.'],
      ['shield', 'Purity', 'Every batch', 'Tested for purity', 'Each batch is screened for heavy metals and has its own lab report you can look up.'],
      ['sun', 'Process', 'Up to 60 days', 'Slow, careful process', 'Harvested, filtered, sun-dried, tested and packed in six patient steps.'],
    ] },
    gummies: { h: 'Inside every', hg: 'gummy.', p: 'Shilajit with six companion ingredients. Amounts are per serving of two gummies.', items: [
      ['leaf', 'Shilajit', '500 mg', 'Shilajit', '500 mg purified shilajit in every serving of two gummies.'],
      ['flask', 'Formula', '6 extras', 'Six companion ingredients', 'L-Citrulline 50 mg, Panax ginseng 20 mg, zinc 1 mg, selenium 5 µg, sea moss 20 mg and black seed 10 mg per serving.'],
      ['drop', 'Flavour', 'Strawberry', 'Strawberry flavour', 'A soft gummy with a gentle earthy note from the shilajit.'],
      ['box', 'Serving', '60 gummies', 'One tin, one month', 'Two gummies a day: a tin of 60 lasts 30 days.'],
      ['shield', 'Lab tested', 'Every batch', 'Tested and traceable', 'Every batch is lab tested and the report is one click away.'],
    ] },
    drops: { h: 'Inside every', hg: 'drop.', p: 'Shilajit with companion ingredients in a dropper bottle. Amounts are per daily portion of 3 drops.', items: [
      ['leaf', 'Shilajit', '20 mg', 'Shilajit', '20 mg purified shilajit in a daily portion of 3 drops.'],
      ['flask', 'Formula', '6 extras', 'Six companion ingredients', 'L-Citrulline 5 mg, Panax ginseng 2 mg, zinc 0.5 mg, selenium 5 µg, sea moss 2 mg and black seed 2 mg per portion.'],
      ['drop', 'Flavour', 'Elderberry', 'Elderberry flavour', 'Elderberry, with the natural earthy depth of shilajit.'],
      ['box', 'Bottle', '30 ml', 'Months in one bottle', 'At 3 drops a day, one 30 ml bottle lasts for months.'],
      ['shield', 'Lab tested', 'Every batch', 'Tested and traceable', 'Every batch is lab tested and the report is one click away.'],
    ] },
  },
  da: {
    eyebrow: 'Hvad er der i', note: 'Kun en beskrivelse af produktet.',
    resin: { h: 'Indeni hver', hg: 'krukke.', p: 'Hvad naturen lægger i ægte Himalaya-resin, med tallene fra vores uafhængige laboratorium.', items: [
      ['pin', 'Oprindelse', '5.000 m', 'Skardu-oprindelse', 'Håndsamlet over 5.000 m i Skardu, Pakistan, langt fra veje og industri.'],
      ['flask', 'Fulvinsyre', '83,1 %', 'Fulvinsyre', 'De vandopløselige organiske syrer, shilajit er kendt for, målt af et uafhængigt laboratorium.'],
      ['gem', 'Mineraler', '85+', 'Mineraler og sporstoffer', 'Naturligt til stede i den sten, det siver fra. Intet tilsat, hver batch screenet for tungmetaller.'],
      ['shield', 'Renhed', 'Hver batch', 'Testet for renhed', 'Hver batch screenes for tungmetaller og har sin egen laboratorierapport, du kan slå op.'],
      ['sun', 'Proces', 'Op til 60 dage', 'Langsom, omhyggelig proces', 'Høstet, filtreret, soltørret, testet og pakket i seks tålmodige trin.'],
    ] },
    gummies: { h: 'Indeni hver', hg: 'vingummi.', p: 'Shilajit med seks følgeingredienser. Mængderne gælder pr. portion på to vingummi.', items: [
      ['leaf', 'Shilajit', '500 mg', 'Shilajit', '500 mg renset shilajit i hver portion på to vingummi.'],
      ['flask', 'Formel', '6 ekstra', 'Seks følgeingredienser', 'L-citrullin 50 mg, Panax ginseng 20 mg, zink 1 mg, selen 5 µg, havmos 20 mg og sortkommen 10 mg pr. portion.'],
      ['drop', 'Smag', 'Jordbær', 'Jordbærsmag', 'En blød vingummi med en mild jordnær tone fra shilajit.'],
      ['box', 'Portion', '60 vingummi', 'Én dåse, én måned', 'To vingummi om dagen: en dåse med 60 rækker i 30 dage.'],
      ['shield', 'Labtestet', 'Hver batch', 'Testet og sporbar', 'Hver batch er labtestet, og rapporten er et klik væk.'],
    ] },
    drops: { h: 'Indeni hver', hg: 'dråbe.', p: 'Shilajit med følgeingredienser i en pipetteflaske. Mængderne gælder pr. daglig portion på 3 dråber.', items: [
      ['leaf', 'Shilajit', '20 mg', 'Shilajit', '20 mg renset shilajit i en daglig portion på 3 dråber.'],
      ['flask', 'Formel', '6 ekstra', 'Seks følgeingredienser', 'L-citrullin 5 mg, Panax ginseng 2 mg, zink 0,5 mg, selen 5 µg, havmos 2 mg og sortkommen 2 mg pr. portion.'],
      ['drop', 'Smag', 'Hyldebær', 'Hyldebærsmag', 'Hyldebær med shilajits naturlige jordnære dybde.'],
      ['box', 'Flaske', '30 ml', 'Måneder i én flaske', 'Med 3 dråber om dagen rækker en flaske på 30 ml i flere måneder.'],
      ['shield', 'Labtestet', 'Hver batch', 'Testet og sporbar', 'Hver batch er labtestet, og rapporten er et klik væk.'],
    ] },
  },
};

function Chip({ icon, label, on, onClick, hide }) {
  return (
    <button type="button" className={`pc-chip${on ? ' on' : ''}${hide ? ' pc-more' : ''}`} aria-pressed={on} onClick={onClick}>
      <i><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{IC[icon]}</svg></i>
      {label}
    </button>
  );
}

function Claims({ t }) {
  const [sel, setSel] = useState(['zinc', 0]);
  const [open, setOpen] = useState(false);
  const total = t.zinc.length + t.selenium.length;
  const cur = sel[0] === 'zinc' ? t.zinc[sel[1]] : t.selenium[sel[1]];
  const mineral = sel[0] === 'zinc' ? t.zn : t.se;
  const group = (key, label, list) => (
    <>
      <p className="pc-group">{label}</p>
      <div className="pc-chips">
        {list.map(([l], i) => (
          <Chip key={key + i} icon="check" label={l} on={sel[0] === key && sel[1] === i} hide={!open && key === 'zinc' ? i >= 8 : !open && key === 'selenium'} onClick={() => setSel([key, i])} />
        ))}
      </div>
    </>
  );
  return (
    <section className="section pc-section">
      <div className="container pc">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2>{t.h} <em>{t.hg}</em></h2>
        <p className="pc-lead">{t.p}</p>
        {group('zinc', t.zn, t.zinc)}
        {group('selenium', t.se, t.selenium)}
        <button type="button" className="pc-toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open}>{open ? t.less : t.all(total)}</button>
        <div className="pc-panel" aria-live="polite">
          <b>{cur[0]}</b>
          <span>{t.verb(mineral)} {cur[1]}.</span>
          <small>{t.note}</small>
        </div>
      </div>
    </section>
  );
}

function Facts({ t, kind }) {
  const d = t[kind];
  const [i, setI] = useState(0);
  if (!d) return null;
  const it = d.items[i];
  return (
    <section className="section pc-section">
      <div className="container pc">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2>{d.h} <em>{d.hg}</em></h2>
        <p className="pc-lead">{d.p}</p>
        <div className="pc-chips">
          {d.items.map((x, n) => <Chip key={n} icon={x[0]} label={x[1]} on={i === n} onClick={() => setI(n)} />)}
        </div>
        <div className="pc-panel" aria-live="polite">
          <em className="pc-big">{it[2]}</em>
          <b>{it[3]}</b>
          <span>{it[4]}</span>
          <small>{t.note}</small>
        </div>
      </div>
    </section>
  );
}

export default function ProductChips({ product, kind }) {
  const lang = useLang();
  if (kind === 'capsules') return CLAIMS[lang] ? <Claims t={CLAIMS[lang]} /> : <FormulaBenefits product={product} />;
  const t = FACTS[lang];
  return t ? <Facts t={t} kind={kind} /> : null;
}
