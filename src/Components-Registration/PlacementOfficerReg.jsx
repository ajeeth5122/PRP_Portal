import React, { useState } from 'react'
import PlacementOfficon from '../assets/RegistrationAssets/PlacementOffReg.png'
import './TraningCoordinatorReg.css'
import EyeImg from "../assets/RegistrationAssets/EyeIcon.png";
import DownArrow from "../assets/RegistrationAssets/DownArrow.png";
import RightArrowImg from "../assets/RegistrationAssets/RightArrow.png";
import Hide from "../assets/RegistrationAssets/HidePwd.png";
import { Link, useNavigate } from 'react-router-dom';
import { useData } from '../DataProvider';
import Modalbox from '../Resusable-Components/Modalbox';

const PlacementOfficerReg = () => {
    const navigate=useNavigate();
    const { user, setUser } = useData()
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [modal, setModal] = useState({ show: false, success: false, message: "" });

    const [formData, setFormData] = useState({
        fullName: '',
        officialEmail: '',
        countryCode: '+1',
        phoneNumber: '',
        organizationName: '',
        department: '',
        employeeId: '',
        designation: '',
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
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        const regexofUppercase = /^(?=.*[A-Z]).+$/;
        const regexofNumber = /^(?=.*\d).+$/;
        const regexofSpecialChar = /^(?=.*[!@#$%^&*]).+$/;

        let newErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';

        if (!formData.officialEmail.trim()) {
            newErrors.officialEmail = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.officialEmail)) {
            newErrors.officialEmail = 'Invalid email address';
        }

        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Must be 10 digits';
        }

        if (!formData.organizationName.trim()) newErrors.organizationName = 'Required';
        if (!formData.department.trim()) newErrors.department = 'Required';
        if (!formData.employeeId.trim()) newErrors.employeeId = 'Required';
        if (!formData.designation) newErrors.designation = 'Select your role';

        if (!formData.password.trim()) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        } else if (!regexofUppercase.test(formData.password)) {
            newErrors.password = "Password must contain at least one uppercase letter";
        } else if (!regexofNumber.test(formData.password)) {
            newErrors.password = "Password must contain at least one number";
        } else if (!regexofSpecialChar.test(formData.password)) {
            newErrors.password = "Password must contain at least one special character";
        } else if (!strongPasswordRegex.test(formData.password)) {
            newErrors.password = "Must be 8+ chars with 1 Uppercase, 1 Lowercase, 1 Number, and 1 Special character";
        }

        if (!formData.confirmPassword.trim()) {
            newErrors.confirmPassword = 'Required';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Mismatch';
        }

        if (!formData.terms) newErrors.terms = 'Read and Agree the Terms and Conditions';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const currentLength = user?.PlacementOfficer?.length || 0;
            const PoId = `PO-${String(currentLength + 1).padStart(3, "0")}`;
            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const yyyy = today.getFullYear();
            const formattedDate = `${dd}/${mm}/${yyyy}`;

            const newUser = {
                id: PoId,
                registeredon: formattedDate,
                ...formData
            };

            setUser((prevUsers) => ({
                ...prevUsers,
                PlacementOfficer: [...(prevUsers.PlacementOfficer || []), newUser]
            }));

            setFormData({
                fullName: '',
                officialEmail: '',
                countryCode: '+1',
                phoneNumber: '',
                organizationName: '',
                department: '',
                employeeId: '',
                designation: '',
                password: '',
                confirmPassword: '',
                terms: false
            });
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
                <img src={PlacementOfficon} alt="Training coordinator" width={50} />
                <div>
                    <h2 style={{ margin: "0" }}>Placement Officer Registration</h2>
                    <p style={{ margin: "0" }}>Manage drive postings, student placements and company relations.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="TC-Reg-form">
                <div className="TC-Reg-row">
                    <div className="TC-Reg-col">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="John Doe"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                        {errors.fullName && <span className="TC-Reg-err-msg">{errors.fullName}</span>}
                    </div>

                    <div className="TC-Reg-col">
                        <label>Official Email Address</label>
                        <input
                            type="email"
                            name="officialEmail"
                            placeholder="john.doe@institution.edu"
                            value={formData.officialEmail}
                            onChange={handleChange}
                        />
                        {errors.officialEmail && <span className="TC-Reg-err-msg">{errors.officialEmail}</span>}
                    </div>
                </div>

                <div className="TC-Reg-col">
                    <label>Phone Number</label>
                    <div className="TC-Reg-phone-box">
                        <div style={{ width: "60px" }} className="Stu-Reg-select-input-wrapper">
                            <select
                                name="countryCode"
                                className="Stu-Reg-form-select"
                                value={formData.countryCode}
                                onChange={handleChange}
                            >
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

                <div className="TC-Reg-col">
                    <label>University / Institution Name</label>
                    <input
                        type="text"
                        name="organizationName"
                        placeholder="University of Excellence"
                        value={formData.organizationName}
                        onChange={handleChange}
                    />
                    {errors.organizationName && <span className="TC-Reg-err-msg">{errors.organizationName}</span>}
                </div>

                <div className="TC-Reg-row">
                    <div className="TC-Reg-col">
                        <label>Department / Placement Cell</label>
                        <input
                            type="text"
                            name="department"
                            placeholder="Career Services"
                            value={formData.department}
                            onChange={handleChange}
                        />
                        {errors.department && <span className="TC-Reg-err-msg">{errors.department}</span>}
                    </div>
                    <div className="TC-Reg-col">
                        <label>Employee ID</label>
                        <input
                            type="text"
                            name="employeeId"
                            placeholder="EDU-88291"
                            value={formData.employeeId}
                            onChange={handleChange}
                        />
                        {errors.employeeId && <span className="TC-Reg-err-msg">{errors.employeeId}</span>}
                    </div>
                </div>

                <div className="TC-Reg-col">
                    <label>Designation</label>
                    <div className="Stu-Reg-select-input-wrapper">
                        <select onChange={handleChange} name="designation" className="Stu-Reg-form-select" value={formData.designation}>
                            <option value="">Select your role</option>
                            <option value="professor">Professor</option>
                            <option value="trainer">Trainer</option>
                            <option value="admin">Administrator</option>
                        </select>
                        <img src={DownArrow} alt="arrow" className="Stu-Reg-custom-dropdown-arrow" />
                    </div>
                    {errors.designation && <span className="TC-Reg-err-msg">{errors.designation}</span>}
                </div>

                <div className="Stu-Reg-form-row Stu-Reg-columns-2">
                    <div className="Stu-Reg-form-group Stu-Reg-password-field-group">
                        <label>Create New Password</label>
                        <div className="Stu-Reg-password-input-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="********"
                                value={formData.password}
                                onChange={handleChange}
                            />
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
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="********"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
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


                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button type="submit" className="TC-Reg-btn">
                        Complete Registration <img src={RightArrowImg} alt="Arrow" className="Stu-Reg-btn-arrow" />
                    </button>
                </div>
                <p className="TC-Reg-login-redirect">
                    Already have an account? <span className="TC-Reg-purple-link TC-Reg-bold"  onClick={()=>navigate('/PRP_Portal/Login/PlacementOfficer')}>Log in</span>
                </p>
            </form>
            <Modalbox show={modal.show} success={modal.success} message={modal.message} onClose={closeModal} />
        </div>
    )
}
export default PlacementOfficerReg;