import React, { useState, useEffect } from 'react';
import CartContext from './CartContext.jsx';

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      if (prev.find(item => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
