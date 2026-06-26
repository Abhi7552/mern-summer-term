import type { CartItem } from '../data/products';
import { formatCurrency } from '../utils/cart';

interface CartSummaryProps {
  items: CartItem[];
  total: number;
  onRemove: (productId: number) => void;
  onClear: () => void;
}

export default function CartSummary({ items, total, onRemove, onClear }: CartSummaryProps) {
  return (
    <div className="cart-summary">
      <div className="cart-header">
        <h2>Cart</h2>
        <button type="button" onClick={onClear} className="clear-button">
          Clear
        </button>
      </div>

      {items.length === 0 ? (
        <p className="empty-state">Your cart is empty. Add an item to get started.</p>
      ) : (
        <ul className="cart-items">
          {items.map(({ product, qty }) => (
            <li key={product.id} className="cart-item">
              <div>
                <p>{product.name}</p>
                <span>{qty} × {formatCurrency(product.price)}</span>
              </div>
              <button type="button" onClick={() => onRemove(product.id)} aria-label={`Remove one ${product.name} from cart`}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="cart-total">
        <span>Total</span>
        <strong>{formatCurrency(total)}</strong>
      </div>
    </div>
  );
}
