// Certification seal drawn in code. `prefix` keeps gradient ids unique per page.
// Only show a certification you actually hold, and link the certificate.
export const sealsDa = [
  { id: 'gmp', ring: 'GOD FREMSTILLINGSPRAKSIS · ', main: ['GMP'], sub: 'Certificeret' },
  { id: 'iso22000', ring: 'LEDELSE AF FØDEVARESIKKERHED · ', main: ['ISO', '22000'], sub: 'Certificeret' },
  { id: 'iso9001', ring: 'KVALITETSLEDELSESSYSTEM · ', main: ['ISO', '9001'], sub: 'Certificeret' },
  { id: 'metals', ring: 'UAFHÆNGIGT LABORATORIUM · ', main: ['TUNG-', 'METALLER'], sub: 'Testet' },
  { id: 'guarantee', ring: '100% PENGE-TILBAGE-GARANTI · ', main: ['60'], sub: 'Dage' },
];

export const getSeals = (lang) => (lang === 'da' ? sealsDa : seals);

export const seals = [
  { id: 'gmp', ring: 'GOOD MANUFACTURING PRACTICE · ', main: ['GMP'], sub: 'Certified' },
  { id: 'iso22000', ring: 'FOOD SAFETY MANAGEMENT · ', main: ['ISO', '22000'], sub: 'Certified' },
  { id: 'iso9001', ring: 'QUALITY MANAGEMENT SYSTEM · ', main: ['ISO', '9001'], sub: 'Certified' },
  { id: 'metals', ring: 'INDEPENDENT LABORATORY · ', main: ['HEAVY', 'METALS'], sub: 'Tested' },
  { id: 'guarantee', ring: '100% MONEY-BACK GUARANTEE · ', main: ['60'], sub: 'Days' },
];

export function Seal({ s, prefix = 'h' }) {
  const gid = `${prefix}-g-${s.id}`;
  const cid = `${prefix}-c-${s.id}`;
  const twoLine = s.main.length > 1;
  return (
    <svg className="seal-svg" viewBox="0 0 200 200" role="img" aria-label={`${s.main.join(' ')} ${s.sub}`}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6e2ad" />
          <stop offset="0.45" stopColor="#cca25e" />
          <stop offset="0.7" stopColor="#a8803f" />
          <stop offset="1" stopColor="#e2c487" />
        </linearGradient>
        <path id={cid} d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
      </defs>
      <circle cx="100" cy="100" r="97" fill={`url(#${gid})`} />
      <circle cx="100" cy="100" r="88" fill="#40010a" />
      <circle cx="100" cy="100" r="84" fill="none" stroke={`url(#${gid})`} strokeWidth="1" strokeDasharray="2 4" />
      <g className="seal-ring">
        <text fill={`url(#${gid})`} fontSize="11.5" fontWeight="700" letterSpacing="2.2" fontFamily="Manrope Variable, Manrope, sans-serif">
          <textPath href={`#${cid}`} textLength="440">{s.ring.repeat(2)}</textPath>
        </text>
      </g>
      <circle cx="100" cy="100" r="58" fill="none" stroke={`url(#${gid})`} strokeWidth="1.2" />
      {twoLine ? (
        <>
          <text x="100" y="94" textAnchor="middle" fill={`url(#${gid})`} fontSize="20" fontWeight="600" fontFamily="Playfair Display Variable, Playfair Display, serif">{s.main[0]}</text>
          <text x="100" y="118" textAnchor="middle" fill={`url(#${gid})`} fontSize={s.main[1].length > 4 ? 19 : 24} fontWeight="600" fontFamily="Playfair Display Variable, Playfair Display, serif">{s.main[1]}</text>
        </>
      ) : (
        <text x="100" y="113" textAnchor="middle" fill={`url(#${gid})`} fontSize={s.main[0].length > 2 ? 36 : 46} fontWeight="600" fontFamily="Playfair Display Variable, Playfair Display, serif">{s.main[0]}</text>
      )}
      <text x="100" y="140" textAnchor="middle" fill="#e2c487" fontSize="9.5" fontWeight="700" letterSpacing="2.5" fontFamily="Manrope Variable, Manrope, sans-serif">{s.sub.toUpperCase()}</text>
      <path d="M78 150 L86 144 L92 149 L100 141 L108 149 L114 144 L122 150" fill="none" stroke="#cca25e" strokeWidth="1.2" />
    </svg>
  );
}

