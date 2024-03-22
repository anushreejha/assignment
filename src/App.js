import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';
import Search from './Search';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('login');

  const handleLogin = () => {
    // Perform login logic here...
    setLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleDashboardClick = () => {
    setCurrentPage('dashboard');
  };

  const handleSearchClick = () => {
    setCurrentPage('search');
  };

  return (
    <div className="App">
      {loggedIn ? (
        currentPage === 'dashboard' ? (
          <Dashboard handleSearch={handleSearchClick} />
        ) : (
          <Search handleDashboardClick={handleDashboardClick} />
        )
      ) : (
        <Login setLoggedIn={handleLogin} />
      )}
    </div>
  );
}

export default App;
