'use client';
// How-to-use tabs: Resin / Gummies / Drops / Capsules, each with four illustrated steps.
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
      ['berry', 'Take two', 'Adults: chew 2 gummies daily. Two gummies make one serving.'],
      ['clock', 'Same time daily', 'With breakfast or your morning tea is easiest to remember.'],
      ['leaf', 'Chew well', 'Strawberry flavour with six companion ingredients. No water needed.'],
      ['box', 'Close the tin', 'Keep it tightly closed, dry and below 25 °C, away from sunlight.'],
    ],
  },
  Drops: {
    img: '/images/pack-drops.webp',
    steps: [
      ['filter', 'Shake well', 'Give the bottle a gentle shake before every use.'],
      ['drop', 'Three drops', 'Adults: 3 drops daily, directly or in water or tea.'],
      ['clock', 'Before food', 'Take them about 30 minutes before a meal.'],
      ['sun', 'Room temperature', 'Close tightly. Store at room temperature, not in the fridge.'],
    ],
  },
  Capsules: {
    img: '/images/pack-capsules.webp',
    steps: [
      ['capsule', 'Take two', 'Adults: take 2 capsules daily. Two capsules make one serving.'],
      ['drop', 'With water', 'Swallow them with a glass of water. No taste, no measuring.'],
      ['clock', 'Same time daily', 'Keep the bottle next to your morning routine.'],
      ['sun', 'Cool and dry', 'Close tightly and keep away from direct sunlight.'],
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
