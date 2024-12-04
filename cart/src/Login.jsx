import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (enteredUsername === 'admin' && enteredPassword === 'admin') {
      navigate('/shop');  // Redirect to shop page
    } else {
      alert('Invalid login credentials!');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter username"
          value={enteredUsername}
          onChange={(e) => setEnteredUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter password"
          value={enteredPassword}
          onChange={(e) => setEnteredPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
