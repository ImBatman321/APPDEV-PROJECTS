import React from 'react';

export default function ItemList({ items, addToCart }) {
  return (
    <div className="item-list">
      <h2>Pick your favorites</h2>
      <div className="items">
        {items.map((item) => (
          <div key={item.id} className="item">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
