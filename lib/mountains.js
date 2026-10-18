// Generates Himalayan-style ridgelines as SVG paths. Used by the hero line-art,
// the story illustration and the footer divider, so every mountain on the site
// shares one hand. Seeded, so the shapes are identical on every render.

function rng(seed) {
  let s = seed;
  return () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646;
}

// Alternating valleys and sharp peaks, with small jagged steps along each slope.
export function ridgePoints(seed, base, amp, peaks, width = 1200, jag = 0.22) {
  const rand = rng(seed);
  const step = width / peaks;
  const key = [[-20, base - amp * (0.15 + rand() * 0.2)]];
  for (let i = 0; i < peaks; i++) {
    key.push([step * i + step * (0.1 + rand() * 0.15), base - amp * (0.08 + rand() * 0.3)]);
    key.push([step * i + step * (0.4 + rand() * 0.3), base - amp * (0.55 + rand() * 0.45)]);
  }
  key.push([width + 20, base - amp * (0.15 + rand() * 0.2)]);

  const pts = [];
  for (let i = 0; i < key.length - 1; i++) {
    const [x1, y1] = key[i];
    const [x2, y2] = key[i + 1];
    const n = 6;
    for (let k = 0; k < n; k++) {
      const t = k / n;
      const jitter = k === 0 ? 0 : (rand() - 0.5) * Math.abs(y2 - y1) * jag;
      pts.push([x1 + (x2 - x1) * t, y1 + (y2 - y1) * t + jitter]);
    }
  }
  pts.push(key[key.length - 1]);
  return pts;
}

export const toLine = (pts) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
export const toShape = (pts, width = 1200, bottom = 900) => `${toLine(pts)} L${width + 20} ${bottom} L-20 ${bottom} Z`;
