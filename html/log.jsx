// LogIn.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LogIn = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    // Implement login logic, e.g., call an authentication service
    // If login is successful, set the user state and redirect to dashboard
    setUser({ email }); // Dummy implementation, replace with actual user data
    history.push('/'); // Redirect to the home page
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LogIn;
