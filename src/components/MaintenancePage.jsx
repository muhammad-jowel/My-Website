import React from 'react';
import '../assets/css/MaintenancePage.css';

const MaintenancePage = () => {
    return (
        <div className="maintenance-container d-flex justify-content-center align-items-center">
        <div className="overlay"></div>
        <div className="text-center p-5 shadow-lg rounded maintenance-box">
          <div className="icon-container mb-3">
            <i className="fas fa-tools fa-4x neon-icon"></i>
          </div>
          <h1 className="display-4 neon-text">Website Under Maintenance</h1>
          <p className="lead text-light-fade mt-3">
            We're working hard to bring you a fresh experience!
            <br />
            Thank you for your patience.
          </p>
          <div className="spinner-border text-accent mt-4" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
};

export default MaintenancePage;