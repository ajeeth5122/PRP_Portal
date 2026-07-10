import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import ShareIcon from "../assets/LandingPageAssets/ShareIcon.png";
import MailIcon from "../assets/LandingPageAssets/MailIcon.png";
import SendIcon from "../assets/LandingPageAssets/SendIcon.png";

const Footer = () => {
  return (
    <footer className="LandingPage-footer">
      <div className="LandingPage-footer-container">
        <div className="LandingPage-footer-text">
          <h2 className="LandingPage-footer-logo">EduHire</h2>
          <p className="LandingPage-footer-description">The leading platform for professional placements and talent acquisition. Connecting ambition with industry excellence.</p>
          <div className="LandingPage-footer-icons">
            <div className="LandingPage-footer-ShareIcon"><img src={ShareIcon} alt="Share" /></div>
            <div className="LandingPage-footer-MailIcon"><img src={MailIcon} alt="Mail" /></div>
          </div>
        </div>

        <div className="LandingPage-footer-navs">
          <h4>COMPANY</h4>
          <Link to="">About Us</Link>
          <Link to="">Success Stories</Link>
          <Link to="">Partner Program</Link>
          <Link to="">Careers</Link>
        </div>

        <div className="LandingPage-footer-navs">
          <h4>SUPPORT</h4>
          <Link to="">Contact Support</Link>
          <Link to="">Privacy Policy</Link>
          <Link to="">Terms of Service</Link>
          <Link to="">Cookie Policy</Link>
        </div>

        <div className="LandingPage-footer-navs">
          <h4>NEWSLETTER</h4>
          <p className="LandingPage-newsletter-text">Get the latest career opportunities delivered to your inbox.</p>
          <div className="LandingPage-newsletter-box">
            <input type="email" placeholder="Email"/>
            <button><img src={SendIcon} alt="Send" /></button>
          </div>
        </div>

      </div>
      <div className="LandingPage-footer-divider"></div>
      <div className="LandingPage-footer-bottom">
        <div>
        <p>&#169; 2026 EduHire. Empowering professional futures across the globe.</p>
        </div>
        <div className="LandingPage-footer-links">
          <Link to="">Status</Link>
          <Link to="">Sitemap</Link>
          <Link to="">Security</Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;