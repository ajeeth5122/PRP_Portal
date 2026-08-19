import React, { useRef, useState } from 'react';
import './AdminProfile.css';
import Profile from "../assets/TCAssets/Trainerprof.png";
import EditIcon from "../assets/RecruiterAssets//EditIcon.png";
import CamIcon from "../assets/RecruiterAssets/CamIcon.png";
import EmailIcon from "../assets/RecruiterAssets/EmailIcon.png";
import PhoneIcon from "../assets/RecruiterAssets/PhoneIcon.png";
import LocationIcon from "../assets/RecruiterAssets/Locationicon.png";
import DeptIcon from "../assets/RecruiterAssets/EduHireLogo.png";
import EmpIdIcon from "../assets/RecruiterAssets/ProfBoxIcon.png";
import JoinedIcon from "../assets/RecruiterAssets/DateIcon.png";
import ExpIcon from "../assets/RecruiterAssets/Calender.png";
import PersonalInfoIcon from "../assets/RecruiterAssets/ProfileImg.png";
import AdminInfoIcon from "../assets/RecruiterAssets/BriefcaseIcon.png";
import ResponsibilitiesIcon from "../assets/AdminAssets/RespBadgeIcon.png";
import ResponsibilityBadgeIcon from "../assets/AdminAssets/UserManageRespIcon.png";


const AdminProfile = () => {
    const fileInputRef = useRef(null);

    const initialValues = {
        ProfileImg: Profile,
        userName: 'Sudhakar',
        email: 'sudhakar@eduhire.com',
        gender: 'Male',
        phone: '9877655432',
        dob: '1999-10-09',
        address: '54,gandhicolony,secandrabad, Telugana',
        city: 'Karnataka',
        state: 'Banglore',
        designation: 'Administrator',
        joinedOn: '2024-04-20',
        experience: '6+ years',
        Department: 'Administration',
        EmpId: 'ADM-2024-001',
        responsibilities: ['User Management', 'Role & Permission Control', 'Company Verification', 'Reports Monitoring']
    };

    const [profileData, setProfileData] = useState(initialValues);
    const [formData, setFormData] = useState(initialValues);
    const [isEditing, setIsEditing] = useState(false);
    const [showCamMenu, setShowCamMenu] = useState(false);
    const [errors, setErrors] = useState({});

    const handleCameraClick = () => {
        setShowCamMenu((prev) => !prev);
    };

    const handleUploadClick = () => {
        setShowCamMenu(false);
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleRemoveClick = () => {
        setShowCamMenu(false);
        setFormData((prev) => ({
            ...prev,
            ProfileImg: Profile
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageObjectURL = URL.createObjectURL(file);
            setFormData((prev) => ({
                ...prev,
                ProfileImg: imageObjectURL
            }));
        }
    };



    const validate = () => {

        let newErrors = {};
        const regexOfMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const regexofMobile = /^[6-9]\d{9}$/;
        const regexofPincode = /^\d{6}$/;

        if (!formData.email.trim()) { newErrors.email = '*Email is required'; }
        else if (!regexOfMail.test(formData.email.trim())) { newErrors.email = '*Enter a valid email address'; }
        if (!formData.phone.trim()) { newErrors.phone = '*Phone number is required'; }
        else if (!regexofMobile.test(formData.phone.trim())) { newErrors.phone = '*Enter a valid 10-digit phone number'; }
        if (!formData.gender || formData.gender === 'Select') { newErrors.gender = '*Please select your Gender'; }
        if (!formData.dob) { newErrors.dob = '*Select your Date of Birth'; }
        if (!formData.address.trim()) { newErrors.address = '*Address is required'; }
        if (!formData.city.trim()) { newErrors.city = '*City is required'; }
        if (!formData.state.trim()) { newErrors.state = '*State is required'; }
        return newErrors;
    };

    const handleEditClick = () => {
        setFormData(profileData);
        setErrors({});
        setIsEditing(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setProfileData(formData);
        setErrors({});
        setIsEditing(false);
        alert("Profile details saved successfully!");
    };

    const handleDiscard = () => {
        setFormData(profileData);
        setErrors({});
        setIsEditing(false);
    };


    return (
        <div className="AdminProfile-container">
            <form className="AdminProfile-form" onSubmit={handleSubmit}>
                <div className="AdminProfile-banner">
                    <div className="AdminProfile-banner-top">
                        <div className="AdminProfile-image-container">
                            <img src={formData.ProfileImg} alt="profile" className="AdminProfile-profile-image" />
                            <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" style={{ display: 'none' }} />
                            {isEditing && (
                                <div className="RecruiterProfile-camera-wrapper">
                                    <button onClick={handleCameraClick} type="button" className="RecruiterProfile-camera-button">
                                        <img src={CamIcon} title="Change Profile Picture" alt="camera-icon" className="RecruiterProfile-camera-icon" />
                                    </button>
                                    {showCamMenu && (
                                        <div className="RecruiterProfile-cam-dropdown">
                                            <button type="button" onClick={handleUploadClick} className="dropdown-item">
                                                Upload Photo
                                            </button>
                                            <button type="button" onClick={handleRemoveClick} className="dropdown-item remove-btn">
                                                Remove Photo
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="AdminProfile-user-wrapper">
                            <div className="AdminProfile-user-section">
                                <div className="AdminProfile-user-details">
                                    <div className="AdminProfile-title-card">
                                        <h4 className="AdminProfile-user-name">{profileData.userName}</h4>|
                                        <p className="AdminProfile-designation">{profileData.designation}</p>
                                    </div>

                                    <div className="AdminProfile-contact-details">
                                        <div className="AdminProfile-contact-item">
                                            <img src={EmailIcon} alt="email" className="AdminProfile-contact-icon" />
                                            <span>{profileData.email}</span>
                                        </div>

                                        <div className="AdminProfile-contact-item">
                                            <img src={PhoneIcon} alt="phone" className="AdminProfile-contact-icon" />
                                            <span>{profileData.phone}</span>
                                        </div>

                                        <div className="AdminProfile-contact-item">
                                            <img src={LocationIcon} alt="location" className="AdminProfile-contact-icon" />
                                            <span>{profileData.city}, {profileData.state}</span>
                                        </div>
                                    </div>
                                </div>

                                {!isEditing && (
                                    <button type="button" className="AdminProfile-edit-button" onClick={handleEditClick}>
                                        <img src={EditIcon} alt="edit" className="AdminProfile-edit-icon" />
                                        Edit Profile
                                    </button>
                                )}
                            </div>

                            <div className="AdminProfile-summary">
                                <div className="AdminProfile-summary-card">
                                    <div className="AdminProfile-summary-icon-cont">
                                        <img src={DeptIcon} alt="department" className="AdminProfile-summary-icon" />
                                    </div>

                                    <div className="AdminProfile-summary-content">
                                        <p>Department</p>
                                        <span>{profileData.Department}</span>
                                    </div>
                                </div>

                                <div className="AdminProfile-summary-card">
                                    <div className="AdminProfile-summary-icon-cont">
                                        <img src={EmpIdIcon} alt="employee id" className="AdminProfile-summary-icon" />
                                    </div>

                                    <div className="AdminProfile-summary-content">
                                        <p>Employee ID</p>
                                        <span>{profileData.EmpId}</span>
                                    </div>
                                </div>

                                <div className="AdminProfile-summary-card">
                                    <div className="AdminProfile-summary-icon-cont">
                                        <img src={JoinedIcon} alt="joined" className="AdminProfile-summary-icon" />
                                    </div>

                                    <div className="AdminProfile-summary-content">
                                        <p>Joined On</p>
                                        <span>{profileData.joinedOn}</span>
                                    </div>
                                </div>

                                <div className="AdminProfile-summary-card">
                                    <div className="AdminProfile-summary-icon-cont">
                                        <img src={ExpIcon} alt="experience" className="AdminProfile-summary-icon" />
                                    </div>

                                    <div className="AdminProfile-summary-content">
                                        <p>Experience</p>
                                        <span>{profileData.experience}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="AdminProfile-content">
                    <div className="AdminProfile-card">
                        <div className="AdminProfile-card-header">
                            <img src={PersonalInfoIcon} alt="personal information" className="AdminProfile-card-icon" />
                            <div className='AdminProfile-card-title-Wrap'>
                            <h2>Personal Information</h2>
                            <p>Manage Your personal and contact information here</p>
                            </div>
                        </div>

                        <div className="AdminProfile-personal-grid">
                            <div className="AdminProfile-input-wrapper">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                />
                                {errors.email && <span className="AdminProfile-error">{errors.email}</span>}
                            </div>

                            <div className="AdminProfile-input-wrapper">
                                <label>Phone no</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                />
                                {errors.phone && <span className="AdminProfile-error">{errors.phone}</span>}
                            </div>

                            <div className="AdminProfile-input-wrapper">
                                <label>Date of birth</label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                />
                                {errors.dob && <span className="AdminProfile-error">{errors.dob}</span>}
                            </div>

                            <div className="AdminProfile-input-wrapper">
                                <label>Gender</label>
                                {isEditing ? <>
                                        <select
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleChange}
                                            className="RecruiterProfile-input"
                                        >
                                            <option value="Select">Select</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Others">Others</option>
                                        </select>
                                        {errors.gender && <span className="TC-Reg-err-msg">{errors.gender}</span>}
                                    </>
                                        :
                                        <input type="text" value={formData.gender} disabled className='RecruiterProfile-input display' />
                                    }
                            </div>

                            <div className="AdminProfile-input-wrapper AdminProfile-full-width">
                                <label>Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder='Enter your Address'
                                    value={formData.address}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                />
                                {errors.address && <span className="AdminProfile-error">{errors.address}</span>}
                            </div>
                        </div>
                    </div>

                    <div className="AdminProfile-card">
                        <div className="AdminProfile-card-header">
                            <img src={AdminInfoIcon} alt="administrative information" className="AdminProfile-card-icon" />
                            <div className='AdminProfile-card-title-Wrap'>
                            <h2>Administrative Information</h2>
                            <p>Check Your Administrative Information here</p>
                            </div>
                        </div>

                        <div className="AdminProfile-personal-grid">
                            <div className="AdminProfile-input-wrapper">
                                <label>Designation</label>
                                <input
                                    type="text"
                                    name="designation"
                                    value={formData.designation}
                                    disabled
                                    className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                />
                            </div>

                            <div className="AdminProfile-input-wrapper">
                                <label>Department</label>
                                <input
                                    type="text"
                                    name="department"
                                    value={formData.Department}
                                    disabled
                                    className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                />
                            </div>

                            <div className="AdminProfile-input-wrapper">
                                <label>Joined Date</label>
                                <input
                                    type="date"
                                    name="joinedOn"
                                    value={formData.joinedOn}
                                    disabled
                                    className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                />
                            </div>

                            <div className="AdminProfile-input-wrapper">
                                <label>Gender</label>
                                <input
                                    type="text"
                                    value={formData.gender}
                                    disabled
                                    className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                />
                            </div>

                            <div className="AdminProfile-input-wrapper">
                                <label>Employee ID</label>
                                <input
                                    type="text"
                                    name="employeeId"
                                    value={formData.EmpId}
                                    disabled
                                    className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="AdminProfile-responsibilities-section">
                    <div className="AdminProfile-responsibilities-header">
                        <img src={ResponsibilitiesIcon} alt="responsibilities" className="AdminProfile-responsibilities-icon" />
                        <h2>System Responsibilities</h2>
                    </div>

                    <div className="AdminProfile-responsibilities-grid">
                        <div className="AdminProfile-responsibility-card">
                            <div className="AdminProfile-responsibility-icon">
                                <img src={ResponsibilityBadgeIcon} alt="user management" />
                            </div>
                            <div>
                                <h4>User</h4>
                                <p>Management</p>
                            </div>
                        </div>

                        <div className="AdminProfile-responsibility-card">
                            <div className="AdminProfile-responsibility-icon">
                                <img src={ResponsibilityBadgeIcon} alt="role permission" />
                            </div>
                            <div>
                                <h4>Role & Permission</h4>
                                <p>Control</p>
                            </div>
                        </div>

                        <div className="AdminProfile-responsibility-card">
                            <div className="AdminProfile-responsibility-icon">
                                <img src={ResponsibilityBadgeIcon} alt="company verification" />
                            </div>
                            <div>
                                <h4>Company</h4>
                                <p>Verification</p>
                            </div>
                        </div>

                        <div className="AdminProfile-responsibility-card">
                            <div className="AdminProfile-responsibility-icon">
                                <img src={ResponsibilityBadgeIcon} alt="reports monitoring" />
                            </div>
                            <div>
                                <h4>Reports</h4>
                                <p>Monitoring</p>
                            </div>
                        </div>
                    </div>
                </div>

                {isEditing && (
                    <div className="AdminProfile-option-buttons">
                        <button type="submit" className="AdminProfile-save-button">Save Changes</button>
                        <button type="button" className="AdminProfile-discard-button" onClick={handleDiscard}>Discard</button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default AdminProfile;
