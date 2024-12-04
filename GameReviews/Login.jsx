import React, { useState } from 'react';

export default function Login({ onLogin, onSignup }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  const handleUserNameChange = (e) => setUserName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = () => {
    if (isSignup) {
      onSignup(userName, password);
    } else {
      onLogin(userName, password);
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome to Wormmmy's Reviews!</h1>
      <h4>{isSignup ? 'Create Account' : 'Login to Continue'}</h4>
      Username:
      <input
        type="text"
        name="username"
        id="username"
        value={userName}
        onChange={handleUserNameChange}
      />
      <br />
      Password:
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>
        {isSignup ? 'Sign Up' : 'Login'}
      </button>
      <br />
      <br />
      <button onClick={() => setIsSignup(!isSignup)}>
        {isSignup ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
      </button>
    </div>
  );
}
