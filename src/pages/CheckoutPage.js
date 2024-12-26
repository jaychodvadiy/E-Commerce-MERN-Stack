import React, { useState } from 'react';
import Cart from '../components/Cart';

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([
    // Example cart items
    { id: 1, name: 'Product 1', price: 100, quantity: 1 },
    { id: 2, name: 'Product 2', price: 50, quantity: 2 }
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleIncrease = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrease = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  return (
    <div>
      <h1>Checkout</h1>
      <Cart 
        cartItems={cartItems} 
        onRemove={handleRemove} 
        onIncrease={handleIncrease} 
        onDecrease={handleDecrease} 
      />
      <div>Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</div>
      <button>Proceed to Payment</button>
    </div>
  );
};

export default CheckoutPage;
