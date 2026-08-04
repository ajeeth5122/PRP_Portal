import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Back from "../assets/LoginAssets/back.png";
import ProductLogo from '../assets/RegistrationAssets/Eduhire.png';
import EmailSent from "../assets/LoginAssets/EmailSent.png";
import info from "../assets/LoginAssets/Info.png";
import './StudentLogin.css'

const ForgotPassword = () => {
    const navigate = useNavigate()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const initialValues = { Email: "" }
    const [formValues, setFormValues] = useState(initialValues)
    const [error, setError] = useState({});
    const [mode, setMode] = useState("Forgot Password")
    const [seconds, setSeconds] = useState(0);

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
        alert("Reset Link has been sent to your Registered Email Id");
        setMode('CheckEmail');
        setSeconds(30);
        setFormValues(initialValues);
    }

    const handleForm = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setError({ ...error, [name]: "", loginError: "" });
    };

    useEffect(() => {
        let timer;
        if (seconds > 0) {
            timer = setInterval(() => {
                setSeconds((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [seconds]);

    const handleResend = () => {
        if (seconds === 0) {
            console.log("Email resent!");
            setSeconds(30);
        }
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

                    {mode === "Forgot Password" && (
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
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <input className={error.Email? "UserLogin-Form-Input-Errors":"UserLogin-Form-Input"} type="email" name="Email" id="UserId" placeholder="Enter your email" value={formValues.Email} onChange={handleForm} />
                                        {error.Email && <span className="TC-Reg-err-msg" style={{ color: 'red', fontSize: '12px' }}>{error.Email}</span>}
                                    </div>
                                </div>

                                <div className="UserLogin-Form-Submit-Wrapper">
                                    <button type="submit" className="TC-Reg-btn">Sent Reset Link</button>
                                </div>
                                <div className='back-to-Login-Links'>
                                    <Link onClick={() => navigate(-1)} className='UserLogin-Request-Access-Link'>Back to Login</Link>
                                </div>
                            </form>
                        </div>
                    )}

                    {mode === "CheckEmail" && (
                        <div className="UserLogin-Form-Center-Wrapper">
                            <div className='UserLogin-Form-Box'>
                                <div className="UserLogin-Email-Otp-Title">
                                    <div>
                                        <img src={EmailSent} alt="mail_icon" width={30} />
                                        <h4>Check Your Email</h4>
                                    </div>
                                    <p>We have sent a password reset link to your email address. Please check your inbox and follow the
                                        instructions to regain access to your portal.</p>
                                </div>
                                <div className="check-email-info-box">
                                    <img src={info} alt="caution_icon" width={20} />
                                    <p> Check your spam or junk folder if you don't see the email within a few minutes.</p>
                                </div>
                                <div className="UserLogin-Form-Submit-Wrapper">
                                    <button type="button" onClick={() => navigate(-1)} className="TC-Reg-btn">Back to Login</button>
                                </div>
                                <div className='Resent-Email-Link'>
                                    <p>
                                        Didn't receive the email?{' '}
                                        <span
                                            className={`UserLogin-Request-Access-Link ${seconds > 0 ? 'disabled' : ''}`}
                                            onClick={handleResend}
                                            style={{ cursor: seconds > 0 ? 'not-allowed' : 'pointer',color:seconds> 0 ? "red":''}}
                                        >
                                            {seconds > 0 ? `Resend (${seconds}s)` : 'Resend'}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
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