import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Shop() {
  const [cart, setCart] = useState([]);
  
  const items = [
    { id: 1, name: 'Item 1', price: 20 },
    { id: 2, name: 'Item 2', price: 30 },
    { id: 3, name: 'Item 3', price: 40 },
    { id: 4, name: 'Item 4', price: 50 },
  ]; // Sample items, you can replace this with props or an API

  const AddItem = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const renderItems = () => {
    return items.map((item) => (
      <div key={item.id}>
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <button onClick={() => AddItem(item)}>Add to Cart</button>
      </div>
    ));
  };

  const renderCart = () => {
    return cart.length > 0 ? (
      cart.map((item, index) => (
        <div key={index}>
          <h4>{item.name}</h4>
          <p>Price: ${item.price}</p>
        </div>
      ))
    ) : (
      <p>Your cart is empty</p>
    );
  };

  return (
    <div>
      <h1>Welcome to the Shop</h1>
      <h2>Items for Sale</h2>
      <div>{renderItems()}</div>

      <h2>Cart</h2>
      <div>{renderCart()}</div>
    </div>
  );
}
