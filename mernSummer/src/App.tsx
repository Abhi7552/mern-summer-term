import { useMemo, useState } from 'react';
import CartSummary from './components/CartSummary';
import ProductCard from './components/ProductCard';
import { products } from './data/products';
import { calculateTotal, formatCurrency } from './utils/cart';
import './App.css';

function App() {
  const [cart, setCart] = useState<Record<number, number>>({});

  const cartItems = useMemo(
    () =>
      Object.entries(cart).map(([id, qty]) => ({
        id: Number(id),
        qty,
        product: products.find((product) => product.id === Number(id))!
      })),
    [cart]
  );

  const total = calculateTotal(cartItems);
  const itemCount = cartItems.reduce((sum, { qty }) => sum + qty, 0);

  const addToCart = (productId: number) => {
    setCart((current) => ({
      ...current,
      [productId]: (current[productId] ?? 0) + 1
    }));
  };

  const removeFromCart = (productId: number) => {
    setCart((current) => {
      const next = { ...current };
      if (!next[productId]) return next;
      next[productId] -= 1;
      if (next[productId] <= 0) delete next[productId];
      return next;
    });
  };

  const clearCart = () => setCart({});

  return (
    <div className="app-shell">
      <header className="hero-banner">
        <div>
          <p className="eyebrow">KEY SHOP</p>
          <h1>Mechanical Keyboard Collections</h1>
          <p>Browse popular keyboard switches, kits, and accessories for every setup.</p>
        </div>
        <div className="cart-pill" aria-live="polite">
          <span className="cart-pill-count">{itemCount}</span>
          <span className="cart-pill-label">{itemCount === 1 ? 'item' : 'items'} · {formatCurrency(total)}</span>
        </div>
      </header>

      <main className="layout">
        <section className="product-grid" aria-label="Available products">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={addToCart} />
          ))}
        </section>

        <aside className="cart-panel">
          <CartSummary
            items={cartItems}
            onRemove={removeFromCart}
            onClear={clearCart}
            total={total}
          />
        </aside>
      </main>
    </div>
  );
}

export default App;
