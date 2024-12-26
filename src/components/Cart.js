import React from 'react';

const Cart = ({ cartItems, onRemove, onIncrease, onDecrease }) => {
  return (
    <div>
      {cartItems.map(item => (
        <div key={item.id} className="flex justify-between items-center">
          <div>{item.name}</div>
          <div>
            <button onClick={() => onDecrease(item.id)}>-</button>
            {item.quantity}
            <button onClick={() => onIncrease(item.id)}>+</button>
          </div>
          <div>{item.price * item.quantity}</div>
          <button onClick={() => onRemove(item.id)} className="text-red-500">Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
