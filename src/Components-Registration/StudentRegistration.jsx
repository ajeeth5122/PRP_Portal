import React, { useState } from 'react';
import UserReg from "../assets/RegistrationAssets/StudentReg.png";
import EyeImg from "../assets/RegistrationAssets/EyeIcon.png";
import RightArrowImg from "../assets/RegistrationAssets/RightArrow.png";
import SearchImg from "../assets/RegistrationAssets/SearchIcon.png";
import DownArrow from "../assets/RegistrationAssets/DownArrow.png";
import Hide from "../assets/RegistrationAssets/HidePwd.png";
import './StudentRegistration.css';
import { Link, useNavigate } from 'react-router-dom';
import { useData } from '../DataProvider';
import Modalbox from '../Resusable-Components/Modalbox';

const StudentRegistration = () => {
    const navigate=useNavigate();
    const { user, setUser } = useData();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [modal, setModal] = useState({ show: false, success: false, message: "" });
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        countryCode: '+1',
        phoneNumber: '',
        InstitutionName: '',
        Degree: '',
        GraduationYear: '',
        StudentID: '',
        password: '',
        confirmPassword: '',
        terms: false
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const finalValue = type === 'checkbox' ? checked : value;
        setFormData((prev) => ({ ...prev, [name]: finalValue }));
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
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Must be 10 digits';
        }
        if (!formData.InstitutionName.trim()) newErrors.InstitutionName = 'Required';
        if (!formData.Degree.trim()) newErrors.Degree = 'Required';
        if (!formData.StudentID.trim()) newErrors.StudentID = 'Required';
        if (!formData.terms) newErrors.terms = 'Select your role';
        if (!formData.GraduationYear) newErrors.GraduationYear = 'Select your role';
        if (formData.terms === false) newErrors.terms = 'Please agree with terms and conditions';

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

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const currentLength = user.Student.length;
            const nextNumber = String(currentLength + 1).padStart(3, '0');
            const StdId = `STD-${String(user.Student.length + 1).padStart(3, '0')}`

            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const yyyy = today.getFullYear();

            const formattedDate = `${dd}/${mm}/${yyyy}`;
            const newUser = {
                id: StdId,
                registeredon: formattedDate,
                ...formData
            };
            setUser((prevUsers) => ({
                ...prevUsers,
                Student: [...prevUsers.Student, newUser]
            }));

            setFormData({
                fullName: '',
                email: '',
                countryCode: '+1',
                phoneNumber: '',
                InstitutionName: '',
                Degree: '',
                GraduationYear: '',
                StudentID: '',
                password: '',
                confirmPassword: '',
                terms: false
            })

            setModal({
                show: true,
                success: true,
                message: "Successfully Registered! Please Login."
            });
        }
    };

    const closeModal = () => {
        setModal({ show: false, success: false, message: "" });
        navigate('/PRP_Portal/Login');
    };
    return (
        <div className="TC-Reg-card">
            <div className="TC-Reg-header">
                <img src={UserReg} alt="Training coordinator" width={50} />
                <div>
                    <h2 style={{ margin: "0" }}>Student Registration</h2>
                    <p style={{ margin: "0" }}>Explore opportunities, apply for jobs, and track application status.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="TC-Reg-form">

                <div className="Stu-Reg-form-row Stu-Reg-columns-2">
                    <div className="Stu-Reg-form-group">
                        <label>Full Name </label>
                        <input onChange={handleChange} name='fullName' value={formData.fullName} type="text" placeholder="e.g. John Doe" />
                        {errors.fullName && <span className="TC-Reg-err-msg">{errors.fullName}</span>}
                    </div>

                    <div className="Stu-Reg-form-group">
                        <label>University Email Address</label>
                        <input onChange={handleChange} value={formData.email} name='email' type="email" placeholder="john.doe@university.edu" />
                        {errors.email && <span className="TC-Reg-err-msg">{errors.email}</span>}
                    </div>
                </div>

                <div className="Stu-Reg-form-group">
                    <label>University / Institution Name</label>
                    <div className="Stu-Reg-search-input-wrapper">
                        <img src={SearchImg} alt="Search" className="Stu-Reg-search-field-icon" />
                        <input onChange={handleChange} name='InstitutionName' value={formData.InstitutionName} type="text" placeholder="Search or type university name" />
                    </div>
                    {errors.InstitutionName && <span className="TC-Reg-err-msg">{errors.InstitutionName}</span>}
                </div>
                <div className="Stu-Reg-form-row Stu-Reg-columns-2">
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
                    <div className="Stu-Reg-form-group">
                        <label>Student ID</label>
                        <input onChange={handleChange} name='StudentID' value={formData.StudentID} type="text" placeholder="e.g. STU-99210-24" />
                        {errors.StudentID && <span className="TC-Reg-err-msg">{errors.StudentID}</span>}
                    </div>
                </div>



                <div className="Stu-Reg-form-row Stu-Reg-columns-2">
                    <div className="Stu-Reg-form-group Stu-Reg-custom-select-group">
                        <label>Major / Degree</label>
                        <div className="Stu-Reg-select-input-wrapper">
                            <select onChange={handleChange} name='Degree' className="Stu-Reg-form-select" value={formData.Degree}>
                                <option value="" disabled>Select Major</option>
                                <option value="cse">Computer Science</option>
                                <option value="ece">Electronics</option>
                                <option value="it">Information Technology</option>
                            </select>
                            <img src={DownArrow} alt="arrow" className="Stu-Reg-custom-dropdown-arrow" />
                        </div>
                        {errors.Degree && <span className="TC-Reg-err-msg">{errors.Degree}</span>}
                    </div>

                    <div className="Stu-Reg-form-group Stu-Reg-custom-select-group">
                        <label>Graduation Year</label>
                        <div className="Stu-Reg-select-input-wrapper">
                            <select onChange={handleChange} name='GraduationYear' className="Stu-Reg-form-select" value={formData.GraduationYear}>
                                <option value="" disabled>Select Year</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                            </select>
                            <img src={DownArrow} alt="arrow" className="Stu-Reg-custom-dropdown-arrow" />
                        </div>
                        {errors.GraduationYear && <span className="TC-Reg-err-msg">{errors.GraduationYear}</span>}
                    </div>

                </div>

                {/* <div className="Stu-Reg-form-group">
                    <label>Student ID</label>
                    <input onChange={handleChange} name='StudentID' value={formData.StudentID} type="text" placeholder="e.g. STU-99210-24" />
                    {errors.StudentID && <span className="TC-Reg-err-msg">{errors.StudentID}</span>}
                </div> */}

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

                <div style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}>
                    <button type="submit" className="TC-Reg-btn">
                        Complete Registration <img src={RightArrowImg} alt="Arrow" className="Stu-Reg-btn-arrow" />
                    </button>
                </div>

            </form>


            <p className="TC-Reg-login-redirect">
                Already have an account? <span className="TC-Reg-purple-link TC-Reg-bold" onClick={()=>navigate('/PRP_Portal/Login/Student')}>Log in</span>
            </p>
            <Modalbox show={modal.show} success={modal.success} message={modal.message} onClose={closeModal} />
        </div>
    );
};

export default StudentRegistration;