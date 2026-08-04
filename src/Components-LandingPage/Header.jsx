import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import ProductLogo from '../assets/RegistrationAssets/Eduhire.png'
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="LandingPage-header">
      <div className='UserRegistration-Logo-Title'>
        <img style={{cursor:"pointer"}} onClick={()=>navigate('/PRP_Portal/Admin')} src={ProductLogo} width={40} alt="" />
        <div className='UserRegistration-Title'>
          <h4>EDUHIRE</h4>
          {/* <p>EMPOWERING CAREERS, CONNECTING FUTURES</p> */}
        </div>
      </div>
      <div className="LandingPage-header-btns">
        <button onClick={() => navigate('/PRP_Portal/Login')} className="LandingPage-btn-login">Login</button>
        <button onClick={() => navigate('/PRP_Portal/UserRegistration')} className="LandingPage-btn-get-started">Register</button>
      </div>
    </header>
  );
};

export default Header;