import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li><a to="/">Home</a></li>
        <li><a to="/cart">Cart</a></li>
        <li><a to="/checkout">Checkout</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
