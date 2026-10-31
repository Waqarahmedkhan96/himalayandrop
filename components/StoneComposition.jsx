'use client';
// "The science behind Himalayan Shilajit": six burgundy stones. Click a stone
// and a cream velvet cloth unrolls from under it with a short note.
import { useState } from 'react';
import { useLang } from './LangProvider';
import { tr } from '@/lib/i18n';

const HEAD = {
  en: { eyebrow: 'Himalayan Drop', title: 'The science behind Himalayan Shilajit.', lead: 'Natural complexity. A closer understanding.', note: 'Explore the composition' },
  da: { eyebrow: 'Himalayan Drop', title: 'Videnskaben bag Himalaya-shilajit.', lead: 'Naturlig kompleksitet. En tættere forståelse.', note: 'Udforsk sammensætningen' },
};

const STONES = [
  { img: 't1', ar: [368, 323], mark: [86, 16],
    en: ['Origin resin', 'Collected at altitude, sold as pure resin.', 'Formed over centuries between layers of mountain rock. Sold as resin, with nothing added.'],
    da: ['Oprindelsesresin', 'Høstet i højden, solgt som ren resin.', 'Dannet over århundreder mellem lag af bjergsten. Solgt som resin, uden tilsætninger.'] },
  { img: 't2', ar: [380, 351], mark: [85, 21],
    en: ['Nutrients & minerals', 'Carries the rock’s minerals.', 'Naturally occurring trace minerals. Every batch is screened for heavy metals.'],
    da: ['Næringsstoffer & mineraler', 'Bærer bjergets mineraler.', 'Naturligt forekommende sporstoffer. Hvert parti screenes for tungmetaller.'] },
  { img: 't3', ar: [415, 281], mark: [88, 15],
    en: ['Fulvic acid', 'Measured by an independent lab.', 'Small organic acids that form as plant matter breaks down. The compound shilajit is best known for, reported for every batch.'],
    da: ['Fulvosyre', 'Målt af et uafhængigt laboratorium.', 'Små organiske syrer, der dannes, når plantemateriale nedbrydes. Det stof, shilajit er mest kendt for, oplyst for hvert parti.'] },
  { img: 't4', ar: [413, 291], mark: [89, 22],
    en: ['Amino acids', 'Traces of its plant origin.', 'A range of naturally occurring amino acids in small amounts. Not a protein supplement.'],
    da: ['Aminosyrer', 'Spor af dens plantemæssige oprindelse.', 'Et udvalg af naturligt forekommende aminosyrer i små mængder. Ikke et proteintilskud.'] },
  { img: 't5', ar: [431, 297], mark: [88, 14],
    en: ['Marker compounds', 'The fingerprint of real shilajit.', 'DBPs and DCPs are marker compounds researchers use, with fulvic acid, to analyse genuine resin.'],
    da: ['Markørstoffer', 'Ægte shilajits fingeraftryk.', 'DBP og DCP er markørstoffer, som forskere bruger sammen med fulvosyre til at analysere ægte resin.'] },
  { img: 't6', ar: [373, 321], mark: [89, 15],
    en: ['Humic acids', 'Fulvic acid’s bigger relative.', 'Larger molecules from the same breakdown of plant matter. They help give real resin its deep black colour.'],
    da: ['Humussyrer', 'Fulvosyrens større slægtning.', 'Større molekyler fra den samme nedbrydning af plantemateriale. De er med til at give ægte resin dens dybsorte farve.'] },
];

export default function StoneComposition() {
  const lang = useLang();
  const head = tr(HEAD, lang);
  const [open, setOpen] = useState(-1);
  return (
    <section className="section sc-section" aria-labelledby="sc-title">
      <div className="sc-wrap">
        <div className="sc-copy">
          <p className="sc-eyebrow">{head.eyebrow}</p>
          <h2 id="sc-title">{head.title}</h2>
          <p className="sc-lead">{head.lead}</p>
          <span className="sc-rule" />
          <p className="sc-note">{head.note}</p>
        </div>
        <div className="sc-grid">
          {STONES.map((s, i) => {
            const [name, h, p] = tr(s, lang);
            const on = open === i;
            return (
              <div key={s.img} className={`sc-cell${on ? ' is-open' : ''}`}>
                <button type="button" className="sc-tile" aria-expanded={on} aria-controls={`sc-d${i}`} onClick={() => setOpen(on ? -1 : i)}>
                  <span className="sc-tw" style={{ aspectRatio: `${s.ar[0]} / ${s.ar[1]}` }}>
                    <img src={`/images/stones/${s.img}.webp`} alt="" width={s.ar[0]} height={s.ar[1]} loading="lazy" />
                    <span className="sc-mark" style={{ left: `${s.mark[0]}%`, top: `${s.mark[1]}%` }} aria-hidden="true">+</span>
                    <span className="sr-only">{name}</span>
                  </span>
                </button>
                <div className="sc-drop" id={`sc-d${i}`} role="region" aria-label={name}>
                  <div>
                    <div className="sc-hang">
                      <div className="sc-cloth">
                        <h3>{h}</h3>
                        <p>{p}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
