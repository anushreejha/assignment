import React from 'react';
import logo from './images/logo.png'; 
import './Login.css'; 

const Login = ({ setLoggedIn }) => {
  const handleLogin = () => {
    // TODO: Implement login logic
    setLoggedIn(true); // Update loggedIn state
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Company Logo" className="logo" />
      <input type="email" placeholder="E-mail" className="input" />
      <input type="password" placeholder="Password" className="input" />
      <button className="login-button" onClick={handleLogin}>Login</button>
      <p className="forgot-password">Forgot Password?</p>
    </div>
  );
};

export default Login;
