import React, { useState } from 'react'
import './AdminLogin.css'
import ProductLogo from '../assets/LoginAssets/EduHireAdmin.png'
import adminimg from '../assets/LoginAssets/AdminLoginSub.png'
import EyeImg from "../assets/RegistrationAssets/EyeIcon.png";
import Hide from "../assets/RegistrationAssets/HidePwd.png";
import LoginBtn from '../assets/LoginAssets/LoginIcon.png'
import Lock from '../assets/LoginAssets/AdminLockIcon.png'
import SecureAcc from '../assets/LoginAssets/SecureAccess.png'
import Email from '../assets/LoginAssets/EmailIcon.png'
import Pass from '../assets/LoginAssets/PassIcon.png'



const AdminLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const initialValues = { Email: "", password: "" }
    const [formValues, setFormValues] = useState(initialValues)
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState({});

    const userName = "Admin@admin.com";
    const passWord = "Admin@12345";

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

        if (Object.keys(newErrors).length === 0) {
        if (formValues.Email !== userName || formValues.password !== passWord) {
            newErrors.LoginError = "Invalid Credentials please try again";
        }
    }   
            console.log(error)
        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError({});

        if (!validateForm()) return;
        console.log(error)
        alert("Login Successful");
        setFormValues(initialValues)
    }

    const handleForm = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setError({ ...error, [name]: "", loginError: "" });
    };
    return (
        <>
            <div className='AdminLogin-Container'>
                <div className='AdminLogin-Welcome-Screen'>
                    <div>
                    <div className='AdminLogin-Logo-Title'>
                        <img src={ProductLogo} width={40} alt="" />
                        <div className='AdminLogin-Title'>
                            <h4>EDUHIRE</h4>
                            <p>ADMIN PANEL</p>
                        </div>
                    </div>

                    <div className='AdminLogin-Welcome-container'>
                        <h3 className='AdminLogin-Welcome-Text'>Welcome Back, <br /> <span>ADMIN!</span></h3>
                        <p className='AdminLogin-Welcome-Desc' >Access your dashboard, manage users, and keep everything in control with high-precision placement tools.</p>
                    </div>
                </div>
                    <img className='AdminLogin-Image' src={adminimg} alt="" />
                    {/* <div className='AdminLogin-Image'>
                        <img className='AdminLogin-Image' src={adminimg} alt="" />
                    </div> */}
                </div>

                <div className="AdminLogin-Form-Center-Wrapper">
                    <form onSubmit={handleSubmit} className='AdminLogin-Form-Box'>
                        <div className="AdminLogin-Form-Header-Text">
                            <img src={Lock} alt="" width={60} />
                            <p className='AdminLogin-Heading'>Admin Login</p>
                            <p className='AdminLogin-Heading-desc'>Please sign in to continue to the control panel</p>
                            {error.LoginError && (
                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", color: 'red', textAlign: "center" }}>
                                    {error.LoginError}
                                </div>
                            )}
                        </div>

                        <div className='AdminLogin-Form-Cred'>
                            <div className='AdminLogin-Form-Input-Group'>
                                <label htmlFor="Email">Email</label>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <input className={error.Email || error.LoginError ? "UserLogin-Form-Input-Errors" : "AdminLogin-Form-Input"} type="email" name="Email" id="Email" autoComplete='off'
                                     placeholder="Enter your email" value={formValues.Email} onChange={handleForm} />
                                       
                                    {error.Email && <span className="TC-Reg-err-msg" style={{ color: 'red', fontSize: '12px' }}>{error.Email}</span>}
                                </div>
                            </div>

                            <div className='AdminLogin-Form-Input-Group'>
                                <label htmlFor="Password">Password</label>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className={error.password || error.LoginError ? "UserLogin-Form-Input-Errors" : "AdminLogin-Form-Input"}
                                            autoComplete='off'
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
                                    {error.password && <span className="TC-Reg-err-msg" style={{ color: 'red', fontSize: '12px' }}>{error.password}</span>}
                                </div>
                            </div>
                            <div className='AdminLogin-forgot-pwd-cont'>
                                <div className='AdminLogin-Rem-Input'>
                                    <input type="checkbox" />
                                    <p>Remember me</p>
                                </div>
                                <p className='AdminLogin-forgot-pwd'>Forgot Password?</p>
                            </div>
                        </div>
                        <div className="UserLogin-Form-Submit-Wrapper">
                            <button type="submit" className="TC-Reg-btn">Login <img src={LoginBtn} width={15} alt="Login Button" /></button>
                        </div>
                        <div className='Admin-Secure-Access-Container'>
                            <span>or continue with </span>
                            <div className='Admin-Secure-Access'>
                                <img src={SecureAcc} width={60} alt="" />
                                <div >
                                    <p className='Admin-Secure-Access-Title'>Secure admin access</p>
                                    <p className='Admin-Secure-Access-desc'>Your data is protected and encrypted.</p>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}

export default AdminLogin