import React from 'react';

export default function Cart({ cart, removeFromCart, calculateTotal }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <span>{item.name}</span>
              <span>Price: ${item.price}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
}
