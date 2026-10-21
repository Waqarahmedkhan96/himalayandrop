'use client';
// Detailed colour icons (48 x 48) for the product info banners:
// shaded gold, burgundy, glass and natural colours instead of thin lines.
import { useId } from 'react';

const GOLD = ['#f6e7bf', '#d9b36d', '#a87f3f'];
const WINE = ['#8e2236', '#5a0f1c', '#2f0108'];

function Defs({ id }) {
  return (
    <defs>
      <linearGradient id={`${id}g`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={GOLD[0]} /><stop offset=".5" stopColor={GOLD[1]} /><stop offset="1" stopColor={GOLD[2]} /></linearGradient>
      <linearGradient id={`${id}m`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={WINE[0]} /><stop offset=".55" stopColor={WINE[1]} /><stop offset="1" stopColor={WINE[2]} /></linearGradient>
      <linearGradient id={`${id}c`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fffdf8" /><stop offset="1" stopColor="#efe2cf" /></linearGradient>
      <linearGradient id={`${id}glass`} x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#ffffff" stopOpacity=".85" /><stop offset=".5" stopColor="#f1ece4" stopOpacity=".5" /><stop offset="1" stopColor="#d9cfc2" stopOpacity=".8" /></linearGradient>
      <linearGradient id={`${id}amber`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#b8742b" /><stop offset="1" stopColor="#5a2c0c" /></linearGradient>
      <linearGradient id={`${id}resin`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#5a4636" /><stop offset=".5" stopColor="#21150e" /><stop offset="1" stopColor="#0b0604" /></linearGradient>
      <linearGradient id={`${id}leaf`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#a9b97a" /><stop offset="1" stopColor="#4f6b33" /></linearGradient>
      <linearGradient id={`${id}red`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f0574f" /><stop offset="1" stopColor="#a3141f" /></linearGradient>
      <linearGradient id={`${id}steel`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f3f4f6" /><stop offset=".5" stopColor="#b9bec6" /><stop offset="1" stopColor="#7d838c" /></linearGradient>
      <linearGradient id={`${id}tea`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#c98b4a" /><stop offset="1" stopColor="#7a3f12" /></linearGradient>
      <radialGradient id={`${id}sun`} cx=".4" cy=".4" r=".7"><stop offset="0" stopColor="#fff3c4" /><stop offset=".6" stopColor="#e9b44c" /><stop offset="1" stopColor="#c27c1e" /></radialGradient>
    </defs>
  );
}

const SHAPES = {
  crystal: (u) => (
    <>
      <ellipse cx="24" cy="42" rx="15" ry="3" fill="#000" opacity=".15" />
      <path d="M10 40 L8 28 L13 22 L17 29 L16 40 Z" fill={u('g')} />
      <path d="M13 22 L17 29 L16 40 L13 40 Z" fill={GOLD[2]} opacity=".55" />
      <path d="M33 41 L31 26 L36 20 L41 27 L39 41 Z" fill={u('g')} />
      <path d="M36 20 L41 27 L39 41 L36 41 Z" fill={GOLD[2]} opacity=".5" />
      <path d="M17 41 L15 16 L24 5 L33 16 L31 41 Z" fill={u('m')} />
      <path d="M24 5 L33 16 L31 41 L24 41 Z" fill="#000" opacity=".25" />
      <path d="M15 16 L24 5 L24 18 Z" fill="#fff" opacity=".35" />
      <path d="M24 5 L33 16 L24 18 Z" fill="#fff" opacity=".15" />
      <path d="M18 20 L20 36" stroke="#fff" strokeOpacity=".5" strokeWidth="1.4" strokeLinecap="round" />
    </>
  ),
  flask: (u) => (
    <>
      <ellipse cx="24" cy="43" rx="13" ry="2.5" fill="#000" opacity=".15" />
      <path d="M19 5 H29 V16 L39 37 C40.5 40 38.5 42 35.5 42 H12.5 C9.5 42 7.5 40 9 37 L19 16 Z" fill={u('glass')} stroke="#c5b7a4" strokeWidth="1" />
      <path d="M13.5 29 H34.5 L37.6 36.5 C38.5 38.6 37.3 40 35.3 40 H12.7 C10.7 40 9.5 38.6 10.4 36.5 Z" fill={u('amber')} />
      <path d="M13.5 29 C18 27.5 22 30.5 26 29 C30 27.5 32 29.5 34.5 29" fill="none" stroke="#e7b06b" strokeWidth="1.2" />
      <circle cx="20" cy="35" r="1.6" fill="#f4c98d" opacity=".8" /><circle cx="27" cy="33" r="1" fill="#f4c98d" opacity=".8" /><circle cx="30" cy="37" r="1.3" fill="#f4c98d" opacity=".7" />
      <rect x="17.5" y="3" width="13" height="4" rx="1.5" fill={u('g')} />
      <path d="M21 9 V17 L13 33" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" opacity=".7" fill="none" />
    </>
  ),
  scale: (u) => (
    <>
      <ellipse cx="24" cy="43" rx="17" ry="2.5" fill="#000" opacity=".15" />
      <path d="M8 22 H40 L37 41 H11 Z" fill={u('m')} />
      <path d="M8 22 H40 L39.4 25 H8.6 Z" fill="#000" opacity=".25" />
      <circle cx="24" cy="32" r="6.5" fill={u('c')} stroke={GOLD[1]} strokeWidth="1.5" />
      <path d="M24 32 L27 28.5" stroke={WINE[1]} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="24" cy="32" r="1.2" fill={WINE[1]} />
      <rect x="6" y="17" width="36" height="5" rx="2.5" fill={u('g')} />
      <path d="M12 10 C12 6 36 6 36 10 L34 17 H14 Z" fill={u('steel')} />
      <path d="M15 9 C20 7.5 28 7.5 33 9" stroke="#fff" strokeWidth="1.2" fill="none" opacity=".9" />
    </>
  ),
  dropper: (u) => (
    <>
      <ellipse cx="24" cy="44" rx="10" ry="2" fill="#000" opacity=".15" />
      <rect x="20" y="2.5" width="8" height="9" rx="4" fill="#f5efe6" stroke="#d9cfc2" />
      <rect x="18" y="11" width="12" height="6" rx="1.5" fill={u('g')} />
      <path d="M16 19 C16 17.5 17 17 18 17 H30 C31 17 32 17.5 32 19 L33 22 C35 23 36 25 36 27 V40 C36 42 34.5 43 33 43 H15 C13.5 43 12 42 12 40 V27 C12 25 13 23 15 22 Z" fill={u('amber')} />
      <rect x="14.5" y="28" width="19" height="10" rx="1.5" fill={u('c')} />
      <path d="M17 32 H31 M19 35 H29" stroke={WINE[1]} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M15.5 25 V40" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" opacity=".45" />
    </>
  ),
  capsule: (u) => (
    <>
      <ellipse cx="25" cy="42" rx="15" ry="2.5" fill="#000" opacity=".12" />
      <g transform="rotate(-38 30 22)">
        <rect x="21" y="15" width="22" height="11" rx="5.5" fill={u('c')} stroke="#d9cfc2" />
        <path d="M32 15 H37.5 A5.5 5.5 0 0 1 37.5 26 H32 Z" fill={u('g')} />
      </g>
      <g transform="rotate(-38 22 30)">
        <path d="M11 24 H22 V36 H11 A6 6 0 0 1 11 24 Z" fill={u('m')} />
        <path d="M22 24 H33 A6 6 0 0 1 33 36 H22 Z" fill={u('c')} stroke="#d9cfc2" strokeWidth=".8" />
        <path d="M9 27.5 C11 26 16 26 20 26" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity=".55" />
      </g>
    </>
  ),
  calendar: (u) => (
    <>
      <ellipse cx="24" cy="43.5" rx="15" ry="2" fill="#000" opacity=".12" />
      <rect x="7" y="9" width="34" height="33" rx="5" fill={u('c')} stroke="#d9cfc2" />
      <path d="M7 14 A5 5 0 0 1 12 9 H36 A5 5 0 0 1 41 14 V19 H7 Z" fill={u('m')} />
      <rect x="14" y="5" width="3.5" height="9" rx="1.75" fill={u('g')} /><rect x="30.5" y="5" width="3.5" height="9" rx="1.75" fill={u('g')} />
      <g fill="#d8c8b2"><rect x="12" y="23" width="5" height="4" rx="1" /><rect x="21.5" y="23" width="5" height="4" rx="1" /><rect x="31" y="23" width="5" height="4" rx="1" /><rect x="12" y="31" width="5" height="4" rx="1" /><rect x="21.5" y="31" width="5" height="4" rx="1" /></g>
      <circle cx="33.5" cy="33" r="5" fill={u('g')} />
      <path d="M31 33 L33 35 L36.2 31.2" stroke={WINE[2]} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  jar: (u) => (
    <>
      <ellipse cx="24" cy="44" rx="15" ry="2.2" fill="#000" opacity=".18" />
      <path d="M9 18 H39 V39 C39 41.5 37 43 34.5 43 H13.5 C11 43 9 41.5 9 39 Z" fill={u('resin')} />
      <rect x="9" y="24" width="30" height="12" fill={u('m')} />
      <path d="M13 28 H35 M16 31.5 H32" stroke={GOLD[1]} strokeWidth="1.1" strokeLinecap="round" />
      <path d="M8 11 C8 8.5 9.5 7 12 7 H36 C38.5 7 40 8.5 40 11 V18 H8 Z" fill={u('g')} />
      <path d="M8 15 H40" stroke={GOLD[2]} strokeWidth="1" opacity=".7" />
      <path d="M11 9.5 H27" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" opacity=".7" />
      <path d="M12 20 V40" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" opacity=".25" />
    </>
  ),
  spoon: (u) => (
    <>
      <ellipse cx="24" cy="43" rx="16" ry="2.2" fill="#000" opacity=".12" />
      <path d="M41 7 L22 26" stroke={u('g')} strokeWidth="4" strokeLinecap="round" />
      <path d="M41 7 L22 26" stroke="#fff" strokeWidth="1" strokeLinecap="round" opacity=".5" />
      <ellipse cx="15" cy="32" rx="10" ry="7.5" transform="rotate(-45 15 32)" fill={u('g')} />
      <path d="M9 34 C9 29 13 26 17 27 C21 28 22 33 18 36 C15 38.5 9 38 9 34 Z" fill={u('resin')} />
      <path d="M12 31 C13.5 29.5 15.5 29 17 29.5" stroke="#9c8268" strokeWidth="1.3" fill="none" strokeLinecap="round" />
    </>
  ),
  glass: (u) => (
    <>
      <ellipse cx="24" cy="44" rx="12" ry="2" fill="#000" opacity=".14" />
      <path d="M17 12 C15 7 19 6 18 2 M25 12 C23 7 27 6 26 2 M33 12 C31 8 34 6 33 3" stroke="#cdbfae" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity=".8" />
      <path d="M11 14 H37 L34 41 C33.8 42.5 32.6 43 31.5 43 H16.5 C15.4 43 14.2 42.5 14 41 Z" fill={u('glass')} stroke="#c9bba8" />
      <path d="M12.3 22 H35.7 L34 40 C33.8 41.2 32.8 41.6 31.8 41.6 H16.2 C15.2 41.6 14.2 41.2 14 40 Z" fill={u('tea')} />
      <ellipse cx="24" cy="22" rx="11.7" ry="1.6" fill="#e2a66a" />
      <path d="M15 18 L17 39" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" opacity=".7" />
    </>
  ),
  clock: (u) => (
    <>
      <ellipse cx="24" cy="44.5" rx="13" ry="2" fill="#000" opacity=".12" />
      <rect x="21" y="2" width="6" height="5" rx="1.5" fill={u('g')} />
      <circle cx="24" cy="26" r="17" fill={u('g')} />
      <circle cx="24" cy="26" r="13.5" fill={u('c')} />
      <g stroke="#cbb79a" strokeWidth="1.4" strokeLinecap="round"><path d="M24 14.5 V16.5 M24 35.5 V37.5 M12.5 26 H14.5 M33.5 26 H35.5" /></g>
      <path d="M24 26 V18.5" stroke={WINE[1]} strokeWidth="2" strokeLinecap="round" />
      <path d="M24 26 L30 29.5" stroke={WINE[1]} strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="26" r="1.8" fill={GOLD[2]} />
      <path d="M13 19 A13 13 0 0 1 22 13.3" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity=".8" />
    </>
  ),
  sun: (u) => (
    <>
      <g stroke={u('g')} strokeWidth="3" strokeLinecap="round">
        <path d="M24 3 V8 M24 40 V45 M3 24 H8 M40 24 H45 M9.2 9.2 L12.7 12.7 M35.3 35.3 L38.8 38.8 M9.2 38.8 L12.7 35.3 M35.3 12.7 L38.8 9.2" />
      </g>
      <circle cx="24" cy="24" r="12" fill={u('sun')} />
      <circle cx="20" cy="20" r="3.5" fill="#fff" opacity=".45" />
    </>
  ),
  berry: (u) => (
    <>
      <ellipse cx="24" cy="44" rx="11" ry="2" fill="#000" opacity=".14" />
      <path d="M24 15 C33 13 40 18 38 27 C36 35 29 42 24 42 C19 42 12 35 10 27 C8 18 15 13 24 15 Z" fill={u('red')} />
      <g fill="#ffe4a3">{[[17, 22], [24, 21], [31, 22], [14, 29], [21, 28], [28, 28], [34, 29], [18, 35], [25, 35], [30, 34]].map(([x, y]) => <ellipse key={`${x}${y}`} cx={x} cy={y} rx=".9" ry="1.3" />)}</g>
      <path d="M24 16 C20 9 13 11 12 13 C17 13 19 15 22 17 C19 13 22 9 24 8 C26 9 29 13 26 17 C29 15 31 13 36 13 C35 11 28 9 24 16 Z" fill={u('leaf')} />
      <path d="M15 22 C16 19 18 18 20 18" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity=".5" />
    </>
  ),
  leaf: (u) => (
    <>
      <path d="M8 40 C8 20 20 8 41 6 C40 27 28 40 8 40 Z" fill={u('leaf')} />
      <path d="M8 40 C17 31 25 22 35 12" stroke="#e9f0d4" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M18 30 L14 23 M24 24 L22 16 M29 19 L29 12 M22 27 L30 27 M27 22 L35 21" stroke="#e9f0d4" strokeWidth="1" strokeLinecap="round" opacity=".8" />
    </>
  ),
  tin: (u) => (
    <>
      <ellipse cx="24" cy="44" rx="13" ry="2.2" fill="#000" opacity=".15" />
      <path d="M11 13 H37 V39 C37 41.5 31 43 24 43 C17 43 11 41.5 11 39 Z" fill={u('c')} stroke="#d9cfc2" />
      <rect x="11" y="24" width="26" height="9" fill={u('m')} />
      <circle cx="18" cy="28.5" r="2.4" fill={u('red')} /><circle cx="22" cy="29" r="2" fill={u('red')} />
      <path d="M26 27 H34 M27 30 H33" stroke={GOLD[1]} strokeWidth="1.1" strokeLinecap="round" />
      <ellipse cx="24" cy="12" rx="14" ry="4" fill={u('steel')} />
      <path d="M10 12 V15 C10 17.2 16 19 24 19 C32 19 38 17.2 38 15 V12" fill={u('steel')} />
      <ellipse cx="24" cy="11.5" rx="11" ry="2.4" fill="#fff" opacity=".45" />
    </>
  ),
  shield: (u) => (
    <>
      <path d="M24 4 L39 9.5 V22 C39 32 32.5 39.5 24 43.5 C15.5 39.5 9 32 9 22 V9.5 Z" fill={u('g')} />
      <path d="M24 8 L35.5 12.3 V22 C35.5 30 30.5 36 24 39.4 C17.5 36 12.5 30 12.5 22 V12.3 Z" fill={u('m')} />
      <path d="M17.5 23.5 L22.3 28.3 L31 19" stroke={GOLD[0]} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 13.5 L24 9.8" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" opacity=".45" />
    </>
  ),
  shake: (u) => (
    <>
      <g transform="rotate(-14 24 26)">
        <rect x="19.5" y="4" width="9" height="5" rx="2" fill="#f5efe6" stroke="#d9cfc2" />
        <rect x="18" y="8.5" width="12" height="5" rx="1.5" fill={u('g')} />
        <path d="M15 17 C15 14.5 16.5 13.5 18 13.5 H30 C31.5 13.5 33 14.5 33 17 V40 C33 42 31.5 43 30 43 H18 C16.5 43 15 42 15 40 Z" fill={u('amber')} />
        <rect x="17" y="24" width="14" height="10" rx="1.5" fill={u('c')} />
        <path d="M17.5 18 V40" stroke="#fff" strokeWidth="1.5" opacity=".45" strokeLinecap="round" />
      </g>
      <path d="M6 18 C4 22 4 28 6 32 M10 21 C9 24 9 26 10 29 M42 18 C44 22 44 28 42 32 M38 21 C39 24 39 26 38 29" stroke={GOLD[1]} strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </>
  ),
  mountain: (u) => (
    <>
      <path d="M2 42 L18 14 L26 26 L31 19 L46 42 Z" fill={u('m')} />
      <path d="M18 14 L23.5 23.6 L20.5 22 L18 25 L15.5 21.5 L12.8 23.2 Z" fill="#fffaf2" />
      <path d="M31 19 L35.5 26 L33 25 L31 27 L29 25.6 L28 27.3 L28.3 23.4 Z" fill="#fffaf2" />
      <path d="M2 42 L18 14 L18 42 Z" fill="#fff" opacity=".08" />
      <path d="M2 42 H46" stroke={GOLD[1]} strokeWidth="2" />
    </>
  ),
  pin: (u) => (
    <>
      <ellipse cx="24" cy="43.5" rx="8" ry="2" fill="#000" opacity=".18" />
      <path d="M24 43 C24 43 9 29 9 18 A15 15 0 0 1 39 18 C39 29 24 43 24 43 Z" fill={u('m')} />
      <circle cx="24" cy="18" r="6" fill={u('g')} />
      <path d="M14 13 A11 11 0 0 1 22 6.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity=".45" />
    </>
  ),
  people: (u) => (
    <>
      <ellipse cx="24" cy="44" rx="18" ry="2.2" fill="#000" opacity=".14" />
      <circle cx="32" cy="12" r="6" fill="#e9c9a8" />
      <path d="M26 11 C26 5 38 5 38 11 C36 9 30 8 26 11 Z" fill="#3a2418" />
      <path d="M21 43 C21 30 24 22 32 22 C40 22 43 30 43 43 Z" fill={u('m')} />
      <path d="M28 22.5 L32 28 L36 22.5" fill="none" stroke={GOLD[0]} strokeWidth="1.2" />
      <circle cx="16" cy="14" r="6" fill="#f0d2b4" />
      <path d="M9.5 15 C8 6 24 4 22.5 15 C23 20 25 23 26 25 C22 24 20 21 20 18 L12 18 C12 21 10 24 6 25 C7.5 22 9.6 19 9.5 15 Z" fill="#5a3522" />
      <path d="M4 43 C4 31 8 24 16 24 C24 24 28 31 28 43 Z" fill={u('g')} />
      <path d="M10 27 C12 25.5 14 25 16 25" stroke="#fff" strokeWidth="1.3" fill="none" opacity=".6" strokeLinecap="round" />
    </>
  ),
  shilajit: (u) => (
    <>
      <ellipse cx="24" cy="43.5" rx="12" ry="2.2" fill="#000" opacity=".2" />
      <path d="M24 4 C24 4 10 20 10 29 A14 14 0 0 0 38 29 C38 20 24 4 24 4 Z" fill={u('resin')} />
      <path d="M16 27 C16 21 20 15 23 11" stroke="#a58a6d" strokeWidth="2" fill="none" strokeLinecap="round" opacity=".8" />
      <ellipse cx="18" cy="31" rx="2.4" ry="3.6" fill="#fff" opacity=".25" />
      <path d="M28 37 A9 9 0 0 0 33 30" stroke={GOLD[1]} strokeWidth="1.4" fill="none" strokeLinecap="round" opacity=".8" />
    </>
  ),
  citrulline: (u) => (
    <>
      <ellipse cx="24" cy="43" rx="17" ry="2" fill="#000" opacity=".12" />
      <path d="M4 16 A20 20 0 0 0 44 16 Z" fill="#3f7a2e" />
      <path d="M6.5 16 A17.5 17.5 0 0 0 41.5 16 Z" fill="#dfeec4" />
      <path d="M8.5 16 A15.5 15.5 0 0 0 39.5 16 Z" fill={u('red')} />
      <g fill="#2a1410">{[[16, 22], [22, 25], [28, 25], [33, 21], [19, 29], [26, 30]].map(([x, y]) => <ellipse key={`${x}${y}`} cx={x} cy={y} rx="1.1" ry="1.7" transform={`rotate(${x - 24} ${x} ${y})`} />)}</g>
      <path d="M11 17 H37" stroke="#fff" strokeWidth="1.2" opacity=".35" />
    </>
  ),
  ginseng: (u) => (
    <>
      <path d="M24 13 C27 7 33 5 37 5 C35 9 31 12 25 14 M24 13 C21 7 15 5 11 6 C13 10 18 12 23 14" fill={u('leaf')} />
      <path d="M22 13 C20 16 19 21 20 26 C16 30 12 36 9 42 C14 39 18 35 21 31 C22 36 22 40 21 44 C24 41 26 36 26 31 C30 34 34 38 38 41 C36 35 32 30 28 26 C29 21 28 16 26 13 Z" fill="#d9b98b" stroke="#9c7647" strokeWidth=".8" />
      <path d="M22 18 C23 19 25 19 26 18 M21 23 C23 24 25 24 27 23" stroke="#9c7647" strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M22.5 16 C21.6 20 21.6 24 22.2 27" stroke="#fff" strokeWidth="1.2" fill="none" opacity=".45" strokeLinecap="round" />
    </>
  ),
  seamoss: (u) => (
    <>
      <path d="M24 44 C23 36 25 30 22 24 C19 18 21 11 25 5 C27 11 26 17 28 22 C31 28 28 36 26 44 Z" fill="#8c2a3b" />
      <path d="M23 34 C17 33 12 28 11 21 C16 23 20 26 23 30 Z M27 31 C33 30 37 25 39 18 C34 20 30 24 27 28 Z M22 23 C18 21 15 17 15 12 C19 14 21 17 22 21 Z" fill="#a8344a" />
      <path d="M24 10 C23 18 24 28 25 40" stroke="#e98a9a" strokeWidth="1" fill="none" opacity=".6" />
      <path d="M8 44 H40" stroke={GOLD[1]} strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  blackseed: () => (
    <>
      <ellipse cx="24" cy="40" rx="17" ry="4" fill="#000" opacity=".12" />
      {[[14, 34, -20], [22, 37, 15], [30, 35, -35], [36, 38, 30], [18, 28, 40], [26, 30, -10], [33, 28, 20], [22, 22, -30], [29, 21, 25]].map(([x, y, r]) => (
        <g key={`${x}${y}`} transform={`rotate(${r} ${x} ${y})`}>
          <path d={`M${x - 4} ${y} C${x - 3} ${y - 3} ${x + 2} ${y - 3.4} ${x + 4} ${y} C${x + 2} ${y + 3} ${x - 3} ${y + 2.6} ${x - 4} ${y} Z`} fill="#17110f" />
          <path d={`M${x - 2} ${y - 1} C${x - 0.5} ${y - 2} ${x + 1} ${y - 2} ${x + 2} ${y - 1}`} stroke="#8a7d72" strokeWidth=".8" fill="none" />
        </g>
      ))}
    </>
  ),
  element: (u, sym, num, tint) => (
    <>
      <ellipse cx="24" cy="44" rx="14" ry="2" fill="#000" opacity=".14" />
      <rect x="8" y="5" width="32" height="37" rx="6" fill={u(tint)} />
      <rect x="8" y="5" width="32" height="37" rx="6" fill="none" stroke="#fff" strokeOpacity=".6" />
      <path d="M11 10 C17 8 26 8 34 9" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" opacity=".7" />
      <text x="12" y="16" fontSize="6.5" fontWeight="700" fill={WINE[2]} fontFamily="system-ui, sans-serif">{num}</text>
      <text x="24" y="33" fontSize="16" fontWeight="700" textAnchor="middle" fill={WINE[1]} fontFamily="Georgia, serif">{sym}</text>
    </>
  ),
};

const ALIAS = { drop: 'glass', box: 'tin', filter: 'shake', water: 'glass' };

export default function RealIcon({ name, size = 40, className = '' }) {
  const raw = useId().replace(/[^a-zA-Z0-9]/g, '');
  const id = `ri${raw}`;
  const u = (k) => `url(#${id}${k})`;
  const key = ALIAS[name] || name;
  let body;
  if (key === 'zinc') body = SHAPES.element(u, 'Zn', 30, 'steel');
  else if (key === 'selenium') body = SHAPES.element(u, 'Se', 34, 'g');
  else body = (SHAPES[key] || SHAPES.jar)(u);
  return (
    <svg className={`real-icon ${className}`} width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <Defs id={id} />
      {body}
    </svg>
  );
}
