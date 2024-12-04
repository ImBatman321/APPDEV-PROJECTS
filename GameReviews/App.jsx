import React, { useState } from 'react';
import Login from './Login';
import Reviews from './Reviews';

export default function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (user, pass) => {
    setUsername(user);
    setIsLoggedIn(true);
  };

  const handleSignup = (user, pass) => {
    setUsername(user);
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} onSignup={handleSignup} />
      ) : (
        <Reviews gameTitle="The Last of Us Part II" username={username} />
      )}
    </div>
  );
}
