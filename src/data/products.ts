export interface Product {
  id: number;
  name: string;
  category: string;
  /** Price in INR. This is the single source of truth — display strings are
   *  derived from it with formatCurrency() so price and label can never drift. */
  price: number;
  description: string;
  icon: string;
}

export interface CartItem {
  id: number;
  qty: number;
  product: Product;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Linear Switch Set',
    category: 'Switches',
    price: 299,
    description: 'Quiet linear switches for smooth typing and gaming.',
    icon: '⌨️'
  },
  {
    id: 2,
    name: 'Custom Keycap Pack',
    category: 'Keycaps',
    price: 399,
    description: 'Sculpted ergonomic keycaps in premium PBT.',
    icon: '🎨'
  },
  {
    id: 3,
    name: '60% Keyboard Kit',
    category: 'Kits',
    price: 999,
    description: 'Compact mechanical keyboard kit ready for build.',
    icon: '🛠️'
  },
  {
    id: 4,
    name: 'RGB Wrist Rest',
    category: 'Accessories',
    price: 249,
    description: 'Soft wrist rest with colorful illumination effect.',
    icon: '✨'
  }
];
