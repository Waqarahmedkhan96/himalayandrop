'use client';
// "Meet the brilliant minds": cards with a drop-shaped + button. Clicking opens a dialog with the
// full bio. NAMES, TITLES AND BIOS ARE DUMMY TEXT until the real team details are supplied.
import { useEffect, useRef, useState } from 'react';

export const TEAM = [
  { id: 'founder', name: 'Alex Rahman', role: 'Founder, software engineer', photo: '/images/about/founder.webp',
    short: 'Software engineer and founder of Himalayan Drop.',
    bio: ['Alex is a software engineer who started Himalayan Drop because he wanted shilajit he could check: where it comes from, how it is handled and what an independent lab found in it.', 'He leads the brand, the website and the relationship with every partner, from the mountain to the jar.'] },
  { id: 'greek1', name: 'Dr. Eleni Papadakis', role: 'Greek medicine specialist and herbalist',
    short: 'Herbalist trained in the Greek medicine tradition.',
    bio: ['Eleni is a herbalist with a background in Greek medicine. She looks at how traditional ingredients are chosen, prepared and combined.', 'She advises the team on the botanical side of our formulas and on how to describe tradition honestly.'] },
  { id: 'greek2', name: 'Dr. Nikos Stavrou', role: 'Greek medicine specialist and herbalist',
    short: 'Herbalist who bridges traditional preparation and modern quality control.',
    bio: ['Nikos is a herbalist who works with traditional preparation methods and what they mean for a modern, controlled product.', 'He reviews our process notes, from raw resin to the finished jar.'] },
  { id: 'nutri', name: 'Sofie Lindqvist', role: 'Nutritionist',
    short: 'Nutritionist who reviews every formula and label.',
    bio: ['Sofie is a nutritionist who checks each formula, serving and label for accuracy and clarity.', 'She makes sure that what we say about every ingredient is honest and within the rules.'] },
  { id: 'mine', name: 'Karim Baig', role: 'Mining specialist, raw material harvesting',
    short: 'Leads the harvest of our raw material near Skardu.',
    bio: ['Karim is the mining specialist responsible for harvesting our raw material in the mountains near Skardu, above 5,000 metres.', 'He decides where and when we collect, and he keeps track of every batch from the rock to the lab.'] },
];

const Drop = () => (
  <svg viewBox="0 0 48 56" width="44" height="52" aria-hidden="true">
    <path className="ab-dp" d="M24 3C24 3 7 22 7 34a17 17 0 0 0 34 0C41 22 24 3 24 3Z" />
    <path className="ab-pl" d="M24 27v14M17 34h14" />
  </svg>
);

function Portrait({ p }) {
  return p.photo
    ? <img src={p.photo} alt={p.name} loading="lazy" />
    : <span className="ab-sil" role="img" aria-label={p.name}><svg viewBox="0 0 100 100"><circle cx="50" cy="36" r="17" /><path d="M14 96c2-24 17-37 36-37s34 13 36 37Z" /></svg></span>;
}

export default function AboutTeam() {
  const [open, setOpen] = useState(null);
  const back = useRef(null);
  const p = TEAM.find((x) => x.id === open);

  useEffect(() => {
    if (!open) return;
    const k = (e) => { if (e.key === 'Escape') setOpen(null); };
    document.addEventListener('keydown', k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', k); document.body.style.overflow = prev; back.current?.focus(); };
  }, [open]);

  return (
    <>
      <ul className="ab-team">
        {TEAM.map((x) => (
          <li key={x.id} className="ab-card">
            <div className="ab-ph"><Portrait p={x} /></div>
            <div className="ab-ct">
              <h3>{x.name}</h3>
              <p>{x.role}</p>
            </div>
            <button type="button" className="ab-plus" aria-label={`Read more about ${x.name}`} onClick={(e) => { back.current = e.currentTarget; setOpen(x.id); }}><Drop /></button>
          </li>
        ))}
      </ul>

      {p && (
        <div className="ab-modal" onClick={(e) => { if (e.target === e.currentTarget) setOpen(null); }}>
          <div className="ab-dlg" role="dialog" aria-modal="true" aria-label={p.name}>
            <button type="button" className="ab-x" aria-label="Close" onClick={() => setOpen(null)} autoFocus>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M5 5l14 14M19 5 5 19" /></svg>
            </button>
            <div className="ab-dph"><Portrait p={p} /></div>
            <div className="ab-dbody">
              <h3>{p.name}</h3>
              <strong>{p.role}</strong>
              <div className="ab-dscroll">{p.bio.map((t, i) => <p key={i}>{t}</p>)}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
