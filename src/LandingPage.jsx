import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage=()=> {
  
  const navigate = useNavigate();

  return (
    <div className="landing-container">   
      <div className="landing-card">
        <h1 className="landing-title">Welcome to {"EduHire".toUpperCase()}</h1>
        <p className="landing-subtitle">Please choose an option to continue to your account.</p>

        <div className="landing-btn-group">
          <button 
            className="landing-button landing-btn-login" 
            onClick={() => handleNavigation('/login')}
          >
            Log In
          </button>
          
          <button 
            className="landing-button landing-btn-signup" 
            onClick={() => navigate('/PRP/UserRegistration')}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;