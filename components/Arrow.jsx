export function Arrow({ size = 16 }) {
  return (
    <svg className="arrow" width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M2 8h11M9 4l4 4-4 4" />
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
