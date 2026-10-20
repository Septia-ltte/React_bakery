
import { useState } from "react";
import "./App.css";

import Title from "./component/Title";
import ButtonCounter from "./component/ButtonCounter";
import ProductCard, { type Product } from "./component/ProductCart";


const products: Product[] = [
  {
    id: 1,
    name: "Butter Croissant",
    description: "Flaky pastry with rich buttery layers.",
    price: 25000,
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Sourdough Bread",
    description: "Fresh artisan bread with a crispy crust.",
    price: 35000,
    image:
      "https://i.pinimg.com/1200x/53/2c/ea/532cea66f74f8b7f546cd471ee8f5573.jpg",
  },
  {
    id: 3,
    name: "Chocolate Muffin",
    description: "Soft muffin with chocolate goodness.",
    price: 18000,
    image:
      "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Strawberry Cake",
    description: "Sweet cake topped with strawberries.",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop",
  }
];

function App() {
  const [cart, setCart] = useState<number[]>([]);

  const toggleCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.includes(productId)
        ? prevCart.filter((id) => id !== productId)
        : [...prevCart, productId]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="bakery-page">
      <header className="page-header relative flex justify-center items-center">

        <div className="heading text-center">
          <Title text="Bakery Menu." />
        </div>

        <div className="cart-actions absolute right-0 flex items-center gap-4">
          <span className="cart-count">
            Cart: {cart.length}{" "}
            {cart.length === 1 ? "item" : "items"}
          </span>

          <ButtonCounter
            text="Clear Cart"
            eventOnHandle={clearCart}
            disabled={cart.length === 0}
          />
        </div>
      </header>

      <main>
        <div className="section-heading">
          <p className="product-total">
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isAdded={cart.includes(product.id)}
              onToggleCart={() => toggleCart(product.id)}
            />
          ))}
        </div>
      </main>

      <footer className="page-footer">
        <p>crumb & co. — Freshly baked, made with love.</p>
      </footer>
    </div>
  );
}

export default App;
