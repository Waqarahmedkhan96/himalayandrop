'use client';
// "Meet the brilliant minds": cards with a drop-shaped + button. Clicking opens a dialog with the
// full bio. NAMES, TITLES AND BIOS ARE DUMMY TEXT until the real team details are supplied.
import { useEffect, useRef, useState } from 'react';

export const TEAM = [
  { id: 'founder', name: 'Waqar Ahmed', role: 'Founder and software engineer', photo: '/images/about/waqar.webp', photo2: '/images/about/waqar-mountain.webp',
    short: 'Founder of Himalayan Drop and software engineer from VIA University College, Denmark.',
    bio: ['Waqar is the founder of Himalayan Drop and a software engineer from VIA University College in Denmark.', 'He started the brand because he wanted shilajit he could check: where it comes from, how it is handled and what an independent lab found in it.', 'He leads the brand, the website and the relationship with every partner, from the mountain to the jar.', 'His focus on openness is what lets every customer see where their shilajit comes from and trust what is in the jar.'] },
  { id: 'greek1', name: 'Dr. Eleni Papadakis', role: 'Greek medicine specialist and herbalist',
    short: 'Herbalist trained in the Greek medicine tradition.',
    bio: ['Eleni is a herbalist with a background in Greek medicine. She looks at how traditional ingredients are chosen, prepared and combined.', 'She advises the team on the botanical side of our formulas and on how to describe tradition honestly.', 'Her care for honest tradition helps our customers get clear, truthful guidance on what each ingredient is and how it has been used.'] },
  { id: 'greek2', name: 'Dr. Nikos Stavrou', role: 'Greek medicine specialist and herbalist',
    short: 'Herbalist who bridges traditional preparation and modern quality control.',
    bio: ['Nikos is a herbalist who works with traditional preparation methods and what they mean for a modern, controlled product.', 'He reviews our process notes, from raw resin to the finished jar.', 'His eye for process means customers receive a product that is prepared with care and checked at every step.'] },
  { id: 'nutri', name: 'Nasir Usman', role: 'Fitness and wellbeing coach, UK', photo: '/images/about/nasir.webp', photo2: '/images/about/nasir-gym.webp',
    short: 'Fitness and wellbeing coach with a Level 4 Certificate in Nutrition.',
    bio: ['Nasir is a fitness and wellbeing coach based in the UK. He holds a Level 4 Certificate in Nutrition for Weight Management and Athletic Performance.', 'He looks at Himalayan Drop from the point of view of training and everyday routines: how a daily supplement fits in, and how we describe it clearly and honestly.', 'He helps the team keep our guidance practical and within the rules.', 'His practical view helps customers fit a daily ritual into real life, with advice that stays clear, realistic and responsible.'] },
  { id: 'mine', name: 'Anwar Ul Haq', role: 'Mining Engineer, Entrepreneur', photo: '/images/about/anwar.webp', tall: true,
    short: 'Pakistani mining engineer who leads our work from the mountain to the jar.',
    bio: ['Anwar Ul Haq is a Pakistani mining engineer and international entrepreneur with 3 to 5 years of professional and business experience, specialising in mineral processing, natural resource development, shilajit purification, manufacturing and international trade.',
      'He holds a Bachelor\u2019s degree in Mining Engineering from the University of Engineering and Technology (UET), Lahore, and combines that engineering background with hands-on experience in mineral processing and the development of natural health products.',
      'As our mining engineer, he leads operations across the whole value chain: sourcing Himalayan shilajit in the high-altitude mountains of Skardu and Gilgit-Baltistan, then purification, processing, manufacturing, quality management, product development and international distribution.', 'His engineering expertise and hands-on knowledge of the whole chain will be invaluable in keeping our shilajit pure, traceable and consistent, so every customer receives a product they can trust.'] },
];

const Drop = () => (
  <svg viewBox="0 0 48 56" width="34" height="40" aria-hidden="true">
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
            <div className="ab-ph">
              <Portrait p={x} />
              <button type="button" className="ab-plus" aria-label={`Read more about ${x.name}`} onClick={(e) => { back.current = e.currentTarget; setOpen(x.id); }}><Drop /></button>
            </div>
            <div className="ab-ct">
              <h3>{x.name}</h3>
              <p>{x.role}</p>
            </div>
          </li>
        ))}
      </ul>

      {p && (
        <div className="ab-modal" onClick={(e) => { if (e.target === e.currentTarget) setOpen(null); }}>
          <div className="ab-dlg" role="dialog" aria-modal="true" aria-label={p.name}>
            <button type="button" className="ab-x" aria-label="Close" onClick={() => setOpen(null)} autoFocus>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M5 5l14 14M19 5 5 19" /></svg>
            </button>
            <div className={`ab-dph${p.tall ? ' tall' : ''}`}><Portrait p={{ ...p, photo: p.photo2 || p.photo }} /></div>
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
