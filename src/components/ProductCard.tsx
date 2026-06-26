import type { Product } from '../data/products';
import { formatCurrency } from '../utils/cart';

interface ProductCardProps {
  product: Product;
  onAdd: (id: number) => void;
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-image" aria-hidden="true">{product.icon}</div>
      <div className="product-body">
        <p className="product-category">{product.category}</p>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div className="product-footer">
          <span>{formatCurrency(product.price)}</span>
          <button type="button" onClick={() => onAdd(product.id)}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
