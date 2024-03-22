import React, { useState } from 'react';
import './Search.css';
import helpIcon from './images/help.png';
import companyLogo from './images/logo2.png';
import searchIcon from './images/search.png';
import dashboardIcon from './images/dash.png';
import findIcon from './images/find.png';

const Search = ({ handleDashboardClick }) => {
  const [searchResults, setSearchResults] = useState(null);

  const handleFind = () => {
    // Code to retrieve search results
    setSearchResults({
      empId: 1,
      name: 'Arjun',
      dob: '16-11-2000',
      role: 'Software Engineer'
    });
  };

  return (
    <div className="search-container">
      <div className="header">
        <img src={helpIcon} alt="Help Icon" className="help-icon" />
        <img src={companyLogo} alt="Company Logo" className="logo" />
      </div>
      <div className="title-container">
        <div className="curved-box">
          Search with name
          <button className="find-button" onClick={handleFind}>
            <img src={findIcon} alt="Find Icon" />
          </button>
        </div>
      </div>
      <div className="data-container">
        {searchResults && (
          <div className="search-results">
            <p>EMP ID: {searchResults.empId}</p>
            <p>Name: {searchResults.name}</p>
            <p>DOB: {searchResults.dob}</p>
            <p>Role: {searchResults.role}</p>
          </div>
        )}
      </div>
      <div className="bottom-banner">
        <button className="button" onClick={handleDashboardClick}>
          <img src={dashboardIcon} alt="Dashboard Icon" />
        </button>
        <button className="button" onClick={() => console.log("Navigate to Search")}>
          <img src={searchIcon} alt="Search Icon" />
        </button>
      </div>
    </div>
  );
};

export default Search;
