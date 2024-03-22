import React from 'react';
import './Dashboard.css';
import helpIcon from './images/help.png';
import companyLogo from './images/logo2.png';
import searchIcon from './images/search.png';
import dashboardIcon from './images/dash.png';

const Dashboard = ({ handleSearch }) => {
  return (
    <div className="dashboard-container">
      <div className="header">
        {/* Help icon */}
        <img src={helpIcon} alt="Help Icon" className="help-icon" />
        {/* Logo */}
        <img src={companyLogo} alt="Company Logo" className="logo" />
      </div>
      <div className="title-container">
        <div className="curved-box">
          Employee Productivity Dashboard
        </div>
      </div>
      <div className="data-container">
        {/* Data entries */}
        {/* Monday */}
        <div className="data-entry">
          <span>Productivity on Monday: <span className="percentage">4%</span></span>
          <div className="progress-bar" style={{ width: '4%' }}></div>
        </div>
        {/* Tuesday */}
        <div className="data-entry">
          <span>Productivity on Tuesday: <span className="percentage">92%</span></span>
          <div className="progress-bar" style={{ width: '92%' }}></div>
        </div>
        {/* Wednesday */}
        <div className="data-entry">
          <span>Productivity on Wednesday: <span className="percentage">122%</span></span>
          <div className="progress-bar" style={{ width: '122%' }}></div>
        </div>
        {/* Thursday */}
        <div className="data-entry">
          <span>Productivity on Thursday: <span className="percentage">93%</span></span>
          <div className="progress-bar" style={{ width: '93%' }}></div>
        </div>
        {/* Friday */}
        <div className="data-entry">
          <span>Productivity on Friday: <span className="percentage">89%</span></span>
          <div className="progress-bar" style={{ width: '89%' }}></div>
        </div>
        {/* Saturday */}
        <div className="data-entry">
          <span>Productivity on Saturday: <span className="percentage">98%</span></span>
          <div className="progress-bar" style={{ width: '98%' }}></div>
        </div>
      </div>
      {/* Bottom banner */}
      <div className="bottom-banner">
        <button className="icon-button">
          <img src={dashboardIcon} alt="Dashboard Icon" />
        </button>
        <button className="icon-button" onClick={handleSearch}>
          <img src={searchIcon} alt="Search Icon" />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
