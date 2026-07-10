import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Back from "../assets/LoginAssets/back.png";
import ProductLogo from '../assets/RegistrationAssets/Eduhire.png';
import EyeImg from "../assets/RegistrationAssets/EyeIcon.png";
import Hide from "../assets/RegistrationAssets/HidePwd.png";
import './StudentLogin.css'

const ForgotPassword = () => {
    const navigate = useNavigate()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const initialValues = { Email: ""}
    const [formValues, setFormValues] = useState(initialValues)
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState({});


    const validateForm = () => {
        const newErrors = {};
        
        if (!formValues.Email.trim()) {
            newErrors.Email = "Email is required*";
        } else if (!emailRegex.test(formValues.Email)) {
            newErrors.Email = "Please enter a valid email address*";
        }     
        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError({});
        
        if (!validateForm()) return;
        alert("reset Link has been Set to your Registered Email Id");

        setFormValues.Email('')
    }

    const handleForm = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setError({ ...error, [name]: "", loginError: "" });
    };

    return (
        <>
            <div className='User-Login-Container'>
                <div>
                <div className="Common-Login-header">
                    <div className='UserRegistration-Logo-Title'>
                        <img src={ProductLogo} width={40} alt="Product Logo" />
                        <div className='UserRegistration-Title'>
                            <h4 style={{ color: "#ffffffdc" }}>EDUHIRE</h4>
                        </div>
                    </div>
                    <div className="Common-Login-header-actions">
                        <p className="Common-Login-support-link">Support</p>
                        <button className="Common-Login-help-center-button">Help Center</button>
                    </div>
                </div>

                <div className="UserLogin-Back-Button-Wrapper">
                    <button
                        type="button"
                        onClick={() => navigate('/PRP_Portal/Login')}
                        className="UserLogin-Back-Btn"
                    >
                        <img src={Back} alt="back" width={13} style={{ marginRight: "5px" }} />
                        Back
                    </button>
                </div>

                <div className="UserLogin-Form-Center-Wrapper">
                    <form onSubmit={handleSubmit} className='UserLogin-Form-Box'>
                        <div className="UserLogin-Form-Header-Text">
                            <h4>Forgot Password ?</h4>
                            <p>Enter your registered ID or email to receive a password reset link.</p>
                        </div>
                        {error.loginError && (
                            <div style={{ color: 'red', marginBottom: '15px', fontSize: '14px', textAlign: 'center' }}>
                                {error.loginError}
                            </div>
                        )}

                        <div className='UserLogin-Form-Input-Group'>
                            <label htmlFor="UserId">University Email</label>
                            <div style={{display:"flex",flexDirection:"column"}}>
                                <input type="email" name="Email" id="UserId" placeholder="Enter your email" value={formValues.Email} onChange={handleForm}  />                                           
                                {error.Email && <span className="TC-Reg-err-msg" style={{color: 'red', fontSize: '12px'}}>{error.Email}</span>}
                            </div>
                        </div>
                        

                        <div className="UserLogin-Form-Submit-Wrapper">
                            <button type="submit" className="TC-Reg-btn">Sent Reset Link</button>
                        </div>
                        <div className='back-to-Login-Links'>
                            <Link className='UserLogin-Request-Access-Link'>Back to Login</Link>
                        </div>
                    </form>

                </div>
                </div>                        

                <div className="Common-Login-custom-footer">
                    <div className="Common-Login-footer-copyright">
                        &copy; 2026 Placement Platform. All rights reserved.
                    </div>
                    <div className="Common-Login-footer-links">
                        <Link className="Common-Login-footer-link">Privacy Policy</Link>
                        <Link className="Common-Login-footer-link">Terms of Service</Link>
                        <Link className="Common-Login-footer-link">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword