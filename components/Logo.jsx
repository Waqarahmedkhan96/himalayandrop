import Link from 'next/link';

export default function Logo({ size = 32 }) {
  return (
    <Link href="/" className="brand" aria-label="Himalayan Drop home">
      <img src="/images/logo-mark.png" alt="" width={size} height={Math.round(size * 1.24)} style={{ width: size }} />
      <span>
        HIMALAYAN <span className="drop">DROP</span>
        <sup>®</sup>
      </span>
    </Link>
  );
}
