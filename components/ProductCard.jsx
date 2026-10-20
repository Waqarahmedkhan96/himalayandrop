import Link from './LLink';
import { Arrow } from './Arrow';

export default function ProductCard({ product }) {
  const href = `/products/${product.handle}/`;
  return (
    <Link href={href} className="card">
      <span className="card-media">
        <img src={product.image} alt={product.imageAlt} loading="lazy" />
        {product.tag && <span className="card-tag">{product.tag}</span>}
      </span>
      <span className="card-body">
        <span>
          <h3>{product.title}</h3>
          <span className="sub">{product.subtitle}</span>
          <span className="price">{product.price || 'Launching soon'}</span>
        </span>
        <span className="round-arrow" aria-hidden="true"><Arrow /></span>
      </span>
    </Link>
  );
}
