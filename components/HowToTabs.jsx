'use client';
// How-to-use tabs: Resin / Gummies / Drops, each with four illustrated steps.
import { useState } from 'react';
import { Icon } from './Icons';

const guides = {
  Resin: {
    img: '/images/pack-gold.webp',
    steps: [
      ['jar', 'Measure', 'Take a pea-sized amount with the spoon. Follow the daily dose on your label.'],
      ['drop', 'Dissolve', 'Stir it into a glass of warm water or tea. Warm, never boiling.'],
      ['clock', 'Wait a moment', 'Give it a few minutes, stirring now and then, until nothing is left on the spoon.'],
      ['sun', 'Enjoy', 'Drink it slowly. Earthy and smoky; a little honey is welcome.'],
    ],
  },
  Gummies: {
    img: '/images/pack-gummies.webp',
    steps: [
      ['berry', 'Take two', 'Two gummies make one serving. Follow the daily dose on your label.'],
      ['clock', 'Same time daily', 'With breakfast or your morning tea is easiest to remember.'],
      ['leaf', 'Chew well', 'Strawberry flavour with five botanicals. No water needed.'],
      ['box', 'Close the pouch', 'Seal it after use and keep it cool and dry.'],
    ],
  },
  Drops: {
    img: '/images/pack-drops.webp',
    steps: [
      ['drop', 'Fill the dropper', 'Squeeze the bulb and fill to the dose on your label.'],
      ['filter', 'Add to a drink', 'Water, tea or a smoothie. Warm or cool, never boiling.'],
      ['star', 'Stir & sip', 'Mix well and drink. Quick enough for busy mornings.'],
      ['sun', 'Store in the dark', 'Close tightly and keep away from direct sunlight.'],
    ],
  },
};

export default function HowToTabs() {
  const names = Object.keys(guides);
  const [tab, setTab] = useState(names[0]);
  const g = guides[tab];

  return (
    <div className="howto">
      <div className="filter-row tabs" role="tablist" aria-label="Choose a product">
        {names.map((n) => (
          <button key={n} type="button" role="tab" aria-selected={tab === n} className={tab === n ? 'on' : ''} onClick={() => setTab(n)}>
            {n}
          </button>
        ))}
      </div>
      {names.map((n) => (
        <div key={n} className="howto-panel" role="tabpanel" hidden={tab !== n} data-tab={n}>
          <div className="howto-stage">
            <span className="stage-glow" />
            <img src={guides[n].img} alt={`Himalayan Drop ${n}`} loading="lazy" />
          </div>
          <ol className="howto-steps">
            {guides[n].steps.map(([icon, title, text], i) => (
              <li key={title}>
                <span className="howto-num">{i + 1}</span>
                <span className="howto-icon"><Icon name={icon} size={22} /></span>
                <strong>{title}</strong>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
