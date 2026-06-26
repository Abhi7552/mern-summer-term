import type { CartItem } from '../data/products';

export function calculateTotal(items: CartItem[]) {
  return items.reduce((total, { product, qty }) => total + product.price * qty, 0);
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(value);
}
