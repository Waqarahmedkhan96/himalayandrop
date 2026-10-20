// Brand action icon: a lightning bolt (replaces the old arrow everywhere).
// Colour comes from CSS: gold on maroon, maroon on gold buttons.
export function Arrow({ size = 16 }) {
  return (
    <svg className="arrow bolt" width={Math.round(size * 1.2)} height={Math.round(size * 1.2)} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15.9 1 5.9 13.9h5.3L8.1 23l10-12.6h-5.3Z" />
    </svg>
  );
}

export function LongArrow() {
  return (
    <svg className="arrow-line" width="26" height="12" viewBox="0 0 26 12" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path d="M1 6h23M19 1l5 5-5 5" />
    </svg>
  );
}
