import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';

const items = [
  { id: 1, name: "Grapes", price: 5 },
  { id: 2, name: "Oranges", price: 3 },
  { id: 3, name: "Kiwis", price: 4 },
  { id: 4, name: "Bananas", price: 2 },
  { id: 5, name: "Cucumbers", price: 1 },
];

const accounts = [
  { id: 1, username: "admin", password: "admin", role: "admin" },
  { id: 2, username: "user", password: "user", role: "user" },
];

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const account = accounts.find(
      (account) => account.username === username && account.password === password
    );
    if (account) {
      setIsLoggedIn(true);
      if (account.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/shop');
      }
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function Shop() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    const total = calculateTotal();
    const paidAmount = prompt(`Total price: $${total}. Enter the amount you paid:`);
    const change = paidAmount - total;
    alert(`Receipt: \nTotal: $${total}\nPaid: $${paidAmount}\nChange: $${change}`);
    setCart([]); // Empty the cart after checkout
    navigate('/shop'); // Redirect to shop page after checkout
  };

  return (
    <div className="shop-container">
      <h2>Welcome to the Shop</h2>
      <div className="items">
        {items.map((item) => (
          <div className="item" key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => addItemToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h4>Your Cart</h4>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        {cart.length > 0 && (
          <div>
            <h4>Total: ${calculateTotal()}</h4>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}

function AdminPanel() {
  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>
      <p>Welcome, Admin. Here you can manage the system.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/admin">Admin Panel</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
