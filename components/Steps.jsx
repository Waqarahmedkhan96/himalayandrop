'use client';
import Reveal from './Reveal';
import { useT } from './LangProvider';

const T = {
  en: {
    eyebrow: 'The ritual', h: 'Make space for your ritual.',
    steps: [
      { n: '1', title: 'Take a little', text: 'A pea-sized amount of resin, three drops, two gummies or two capsules.' },
      { n: '2', title: 'Dissolve', text: 'Stir the resin or drops into warm water or tea until fully dissolved.' },
      { n: '3', title: 'Make it daily', text: 'Same time, same cup. The ritual is the habit you keep.' },
    ],
  },
  da: {
    eyebrow: 'Ritualet', h: 'Giv plads til dit ritual.',
    steps: [
      { n: '1', title: 'Tag lidt', text: 'En ærtestor mængde resin, tre dråber, to vingummi eller to kapsler.' },
      { n: '2', title: 'Opløs', text: 'Rør resin eller dråber ud i varmt vand eller te, til alt er opløst.' },
      { n: '3', title: 'Gør det dagligt', text: 'Samme tid, samme kop. Ritualet er den vane, du holder fast i.' },
    ],
  },
};

// The 1-2-3 markers are a real sequence: how to take it.
export default function Steps() {
  const t = useT(T);
  return (
    <Reveal as="section" id="ritual" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" data-reveal>{t.eyebrow}</span>
          <h2 data-reveal="lines">
            <span className="line"><span>{t.h}</span></span>
          </h2>
        </div>
        <div className="steps-grid" data-reveal="stagger">
          {t.steps.map((s) => (
            <div className="step" key={s.n}>
              <span className="num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <svg className="step-peak" viewBox="0 0 140 60" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M0 60 L38 18 L52 30 L78 4 L104 34 L116 26 L140 52" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
