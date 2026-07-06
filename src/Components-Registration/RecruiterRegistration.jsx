import React, { useState } from 'react'
import RecruiterIcon from '../assets/RegistrationAssets/RecruiterReg.png'
import DownArrow from "../assets/RegistrationAssets/DownArrow.png";
import EyeImg from "../assets/RegistrationAssets/EyeIcon.png";
import Hide from "../assets/RegistrationAssets/HidePwd.png";
import SearchImg from "../assets/RegistrationAssets/SearchIcon.png";
import RightArrowImg from "../assets/RegistrationAssets/RightArrow.png";
import { Link } from 'react-router-dom';
import { useData } from '../DataProvider';

const RecruiterRegistration = () => {
    const { user, setUser } = useData()
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        company: "",
        Industry: "",
        designation: "",
        password: "",
        confirmPassword: "",
        terms: false,
    });
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const finalValue = type === 'checkbox' ? checked : value;
        setFormData((prev) => (
            { ...prev, [name]: finalValue }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };


    const validateForm = () => {
        let newErrors = {};
        const regexOfMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        const regexofUppercase = /^(?=.*[A-Z]).+$/
        const regexofNumber = /^(?=.*\d).+$/
        const regexofSpecialChar = /^(?=.*[!@#$%^&*]).+$/
        const regexofUserName = /^(?=[a-zA-Z])\S+$/
        const regexofMobile = /^[6-9]\d{9}$/


        if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!regexOfMail.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone number is required';
        } else if (regexofMobile.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Must be 10 digits';
        }
        if (!formData.company.trim()) newErrors.company = 'Company Name is Required';
        if (!formData.Industry.trim()) newErrors.Industry = 'Industry Name is Required';
        if (!formData.designation.trim()) newErrors.designation = 'Designation is Required';
        if (formData.terms === false) newErrors.terms = 'Read and Agree the Terms and Conditions';

        if (!formData.password.trim()) {
            newErrors.password = "Password is required"
        } else if (!strongPasswordRegex.test(formData.password)) {
            newErrors.password = "Must be 8+ chars with 1 Uppercase, 1 Lowercase, 1 Number, and 1 Special character";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters"
        } else if (!regexofUppercase.test(formData.password)) {
            newErrors.password = "Password must contain at least one uppercase letter"
        } else if (!regexofNumber.test(formData.password)) {
            newErrors.password = "Password must contain at least one number"
        } else if (!regexofSpecialChar.test(formData.password)) {
            newErrors.password = "Password must contain at least one special character"
        }

        if (!formData.confirmPassword.trim()) {
            newErrors.confirmPassword = 'Required'
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Mismatch';
        }

        if (formData.terms === false) newErrors.terms = 'Please agree with terms and conditions';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const currentLength = user.Recruiter.length;
            const nextNumber = String(currentLength + 1).padStart(3, '0');
            const HrId = `HR-${String(user.Recruiter.length + 1).padStart(3, '0')}`

            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const yyyy = today.getFullYear();

            const formattedDate = `${dd}/${mm}/${yyyy}`;
            const newUser = {
                id: HrId,
                registeredon: formattedDate,
                ...formData
            };
            setUser((prevUsers) => ({
                ...prevUsers,
                Recruiter: [...prevUsers.Recruiter, newUser]
            }));

            setFormData({
                fullName: "",
                email: "",
                phoneNumber: "",
                company: "",
                Industry: "",
                designation: "",
                password: "",
                confirmPassword: "",
                terms: false,
            })

            console.log('Form Submitted Data:', formData);
            alert('Registration Successful!');
        }
    };

    return (
        <div className="TC-Reg-card">
            <div className="TC-Reg-header">
                <img src={RecruiterIcon} alt="Training coordinator" width={50} />
                <div>
                    <h2 style={{ margin: "0" }}>Recruiter Registration</h2>
                    <p style={{ margin: "0" }}>Post jobs, search students, manage applications and shortlist candidates.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="TC-Reg-form">
                <div className="Stu-Reg-form-group">
                    <label>Full Name </label>
                    <input onChange={handleChange} name='fullName' value={formData.fullName} type="text" placeholder="e.g. John Doe" />
                    {errors.fullName && <span className="TC-Reg-err-msg">{errors.fullName}</span>}
                </div>

                <div className="Stu-Reg-form-row Stu-Reg-columns-2">
                    <div className="Stu-Reg-form-group">
                        <label>Official Email</label>
                        <input onChange={handleChange} value={formData.email} name='email' type="email" placeholder="john.doe@university.edu" />
                        {errors.email && <span className="TC-Reg-err-msg">{errors.email}</span>}
                    </div>
                    <div className="TC-Reg-col">
                        <label>Phone Number</label>
                        <div className="TC-Reg-phone-box">
                            <div style={{ width: "60px" }} className="Stu-Reg-select-input-wrapper">
                                <select className="Stu-Reg-form-select" >
                                    <option>+1</option>
                                    <option>+91</option>
                                    <option>+44</option>
                                    <option>+61</option>
                                    <option>+971</option>
                                </select>
                                <img src={DownArrow} alt="arrow" className="Stu-Reg-custom-dropdown-arrow" />
                            </div>

                            <input
                                type="text"
                                name="phoneNumber"
                                placeholder="9876543210"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.phoneNumber && <span className="TC-Reg-err-msg">{errors.phoneNumber}</span>}
                    </div>
                </div>

                <div className="Stu-Reg-form-group">
                    <label>Company / Organization Name</label>
                    <div className="Stu-Reg-search-input-wrapper">
                        <input onChange={handleChange} name='company' value={formData.company} type="text" placeholder="Search or type university name" />
                        <img style={{ marginRight: "15px" }} src={SearchImg} alt="Search" className="Stu-Reg-search-field-icon" />
                    </div>
                    {errors.company && <span className="TC-Reg-err-msg">{errors.company}</span>}
                </div>

                <div className="Stu-Reg-form-row Stu-Reg-columns-2">
                    <div className="Stu-Reg-form-group Stu-Reg-custom-select-group">
                        <label>Industry</label>
                        <div className="Stu-Reg-select-input-wrapper">
                            <select onChange={handleChange} name='Industry' className="Stu-Reg-form-select" value={formData.Industry}>
                                <option value="" disabled>Select Major</option>
                                <option value="ITES">ITES</option>
                                <option value="Markerting">Markerting</option>
                                <option value="Finance">Finance</option>
                            </select>
                            <img src={DownArrow} alt="arrow" className="Stu-Reg-custom-dropdown-arrow" />
                        </div>
                        {errors.Industry && <span className="TC-Reg-err-msg">{errors.Industry}</span>}
                    </div>

                    <div className="Stu-Reg-form-group Stu-Reg-custom-select-group">
                        <label>Job Title / Designation</label>
                        <input onChange={handleChange} value={formData.designation} name='designation' type="text" placeholder="Hr Manager" />
                        {errors.designation && <span className="TC-Reg-err-msg">{errors.designation}</span>}
                    </div>

                </div>

                <div className="Stu-Reg-form-row Stu-Reg-columns-2">
                    <div className="Stu-Reg-form-group Stu-Reg-password-field-group">
                        <label>Create New Password</label>
                        <div className="Stu-Reg-password-input-wrapper">
                            <input onChange={handleChange} name='password' value={formData.password} type={showPassword ? "text" : "password"} placeholder="*********" />
                            <img
                                src={showPassword ? Hide : EyeImg}
                                alt="Toggle"
                                className="Stu-Reg-password-eye-icon"
                                onClick={() => setShowPassword(!showPassword)}
                            />
                        </div>
                        {errors.password && <span className="TC-Reg-err-msg">{errors.password}</span>}
                    </div>

                    <div className="Stu-Reg-form-group Stu-Reg-password-field-group">
                        <label>Confirm Password</label>
                        <div className="Stu-Reg-password-input-wrapper">
                            <input onChange={handleChange} name='confirmPassword' value={formData.confirmPassword} type={showConfirmPassword ? "text" : "password"} placeholder="*********" />
                            <img
                                src={showConfirmPassword ? Hide : EyeImg}
                                alt="Toggle"
                                className="Stu-Reg-password-eye-icon"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            />
                        </div>
                        {errors.confirmPassword && <span className="TC-Reg-err-msg">{errors.confirmPassword}</span>}
                    </div>
                </div>

                <div className="Stu-Reg-terms-checkbox-container">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <input
                            type="checkbox"
                            name="terms"
                            checked={formData.terms}
                            id="student-terms"
                            onChange={handleChange}
                        />
                        <label htmlFor="student-terms">
                            I agree to the <Link to="#terms">Terms of Use</Link> and <Link to="#privacy">Privacy Policy</Link>
                        </label>
                    </div>
                    {errors.terms && <div className="TC-Reg-err-msg" style={{ marginBottom: '10px' }}>{errors.terms}</div>}
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>

                </div>

                <div style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}>
                    <button type="submit" className="TC-Reg-btn">
                        Complete Registration <img src={RightArrowImg} alt="Arrow" className="Stu-Reg-btn-arrow" />
                    </button>
                </div>

            </form>
            <p className="TC-Reg-login-redirect">
                Already have an account? <span className="TC-Reg-purple-link TC-Reg-bold">Log in</span>
            </p>

        </div>
    )
}

export default RecruiterRegistration