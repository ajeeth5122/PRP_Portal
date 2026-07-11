import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Back from "../assets/LoginAssets/back.png";
import ProductLogo from '../assets/RegistrationAssets/Eduhire.png';
import EyeImg from "../assets/RegistrationAssets/EyeIcon.png";
import Hide from "../assets/RegistrationAssets/HidePwd.png";
import './StudentLogin.css'

const PlacementofficerLogin = () => {
    const navigate = useNavigate()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const initialValues = { Email: "", password: ""}
    const [formValues, setFormValues] = useState(initialValues)
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState({});

    const registeredUsers = [
        { email: "Ajeeth@dj.com", password: "dj@12345" },
        { email: "Ajeeth@aj.com", password: "Aj@12345" },
        { email: "Ajeeth@bj.com", password: "bj@12345" },
        { email: "Ajeeth@cj.com", password: "Cj@12345" }
    ];

    const validateForm = () => {
        const newErrors = {};
        
        if (!formValues.Email.trim()) {
            newErrors.Email = "Email is required*";
        } else if (!emailRegex.test(formValues.Email)) {
            newErrors.Email = "Please enter a valid email address*";
        }

        if (!formValues.password.trim()) {
            newErrors.password = "Password is required*";
        }
        
        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError({});
        
        if (!validateForm()) return;
    
        const userExists = registeredUsers.find(
            (user) => 
                user.email.toLowerCase() === formValues.Email.trim().toLowerCase() && 
                user.password === formValues.password
        );
        if (!userExists) {
            setError({ loginError: "Invalid Email or Password. Please try again." });
            return;
        }

        alert("Login Successful");
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
                            <h4>PlacementOfficer Login</h4>
                            <p>Enter your credentials to access the portal.</p>
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
                        
                        <div className='UserLogin-Form-Input-Group'>
                            <label htmlFor="Password">Password</label>
                            <div style={{display:"flex",flexDirection:"column"}}>
                            <div className='UserLogin-Form-Input' style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="********"
                                    id='Password'
                                    value={formValues.password}
                                    onChange={handleForm} 
                                    style={{ width: '100%', paddingRight: '40px' }} 
                                />
                                <img
                                    src={showPassword ? Hide : EyeImg}
                                    alt="Toggle"
                                    className="Stu-Reg-password-eye-icon"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        cursor: 'pointer'
                                    }}
                                />
                            </div>
                            {error.password && <span className="TC-Reg-err-msg" style={{color: 'red', fontSize: '12px'}}>{error.password}</span>}
                            </div>
                        </div>

                        <div className="UserLogin-Form-Submit-Wrapper">
                            <button type="submit" className="TC-Reg-btn">Submit</button>
                        </div>
                        <div className='UserLogin-Links'>
                            <Link to={'/PRP_Portal/Login/Forgotpassword'} className='UserLogin-ForgetPassword-Link' >Forget Password?</Link>
                            <Link className='UserLogin-Request-Access-Link'>Request Access</Link>
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

export default PlacementofficerLogin