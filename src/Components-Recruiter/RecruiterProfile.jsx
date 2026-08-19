import React, { useRef, useState } from 'react';
import './RecruiterProfile.css';
import ProfileImg from '../assets/RecruiterAssets/ProfileImg.png';
import EditIcon from '../assets/RecruiterAssets/EditIcon.png';
import CamIcon from '../assets/RecruiterAssets/CamIcon.png';
import Department from '../assets/RecruiterAssets/EduHireLogo.png';
import EmpId from '../assets/RecruiterAssets/ProfBoxIcon.png';
import ExpIcon from '../assets/RecruiterAssets/Calender.png';
import PersonalInfo from '../assets/RecruiterAssets/ProfileImg.png';
import CompanyInfo from '../assets/RecruiterAssets/BriefcaseIcon.png';
import SkillsIcon from '../assets/RecruiterAssets/Recent.png';
import JoinIcon from '../assets/RecruiterAssets/DateIcon.png';
import EmailIcon from '../assets/RecruiterAssets/EmailIcon.png';
import LocationIcon from '../assets/RecruiterAssets/locationicon.png';
import PhoneIcon from '../assets/RecruiterAssets/PhoneIcon.png';
import Profile from "../assets/TCAssets/Trainerprof.png";
import Wrong from '../assets/LoginAssets/XModal.png';
import { useData } from '../DataProvider';

const RecruiterProfile = ({currentUser}) => {
    const {user,setUser}=useData();
    const fileInputRef = useRef(null);
    

    const [formData, setFormData] = useState(currentUser);
    const [isEditing, setIsEditing] = useState(false);
    const [showCamMenu, setShowCamMenu] = useState(false);
    const [newSkill, setNewSkill] = useState('');
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
            ProfileImg: ''
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

    const handleEditClick = () => {
        setFormData(currentUser);
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
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };
     const validate = () => {

        let newErrors = {};

        const regexOfMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const regexofUppercase = /^(?=.*[A-Z]).+$/
        const regexofMobile = /^[6-9]\d{9}$/
        const regexofPincode = /^\d{6}$/

        if (!formData.companyAddress) { newErrors.companyAddress = '*Company Address Required' }
        if (!formData.companyLocation) { newErrors.companyLocation = '*City is Required' }
        if (!formData.companyPincode) { newErrors.companyPincode = '*Pincode is Required' }
        if (!formData.companyState) { newErrors.companyState = '*State is Required' }
        if (!formData.address1) { newErrors.address1 = '*please enter Address' }
        if (!formData.city) { newErrors.city = '*City is Required' }
        if (!formData.state) { newErrors.state = '*State is Required' }
        if (!formData.gender || formData.gender === 'Select') { newErrors.gender = '*please select your Gender'; }
        if (!formData.dob) { newErrors.dob = '*Select Your Date of Birth' }
        if (formData.skills.length === 0 || !formData.skills){newErrors.skills = '*Add atleast one Skill'}

        if (!formData.email.trim()) { newErrors.email = '*Email is required'; }
        else if (!regexOfMail.test(formData.email)) { newErrors.email = '*Enter a valid email address'; }

        if (!formData.phone.trim()) { newErrors.phone = '*Phone number is required'; }
        else if (!regexofMobile.test(formData.phone.trim())) { newErrors.phone = '*Enter a valid 10-digit phone number'; }

        if (!formData.pincode) { newErrors.pincode = '*Pincode is Required'; }
        else if (formData.pincode && !regexofPincode.test(formData.pincode.trim())) {
            newErrors.pincode = '*Pincode must be 6 digits';
        }

        if (!formData.companyEmail) { newErrors.companyEmail = 'please enter Company Email' }
        else if (formData.companyEmail && !regexOfMail.test(formData.companyEmail)) {
            newErrors.companyEmail = '*Enter a valid company email';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setUser((prevUser) => ({
            ...prevUser,
            Recruiter: prevUser.Recruiter.map((Recruiter) =>
                Recruiter.id === currentUser.id ? { ...formData } : Recruiter
            )
        }));
        setErrors({});
        alert("Profile details saved successfully!");
        setIsEditing(false);
    };

    const handleDiscard = () => {
        setFormData(currentUser);
        setErrors({});
        setIsEditing(false);
    };

    const handleAddSkill = (e) => {
        e.preventDefault();
        if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
            setFormData((prev) => ({
                ...prev,
                skills: [...prev.skills, newSkill.trim()]
            }));
            setNewSkill('');
        }
    };

    const handleDeleteSkill = (skillToDelete) => {
        setFormData((prev) => ({
            ...prev,
            skills: prev.skills.filter((skill) => skill !== skillToDelete)
        }));
    };

    return (
        <div className="RecruiterProfile-container">
            <form className='Recriter-Profile-Form' name='form' onSubmit={handleSubmit}>
                <div className="RecruiterProfile-banner">
                    <div className="RecruiterProfile-banner-top">
                        <div className="RecruiterProfile-image-container">
                            <img src={currentUser.ProfileImg} alt="profile-img" className="RecruiterProfile-profile-image" />
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

                        <div style={{ display: "flex", flexDirection: "column", width: "100%", }}>
                            <div className="RecruiterProfile-user-section">
                                <div className="RecruiterProfile-user-details">
                                    <div className='RecruiterProfile-Title-Card'>
                                        <h4 className='RecruiterProfile-UserName'>{currentUser.userName}</h4>|
                                        <p className='RecruiterProfile-Title'> {currentUser.designation}</p>
                                    </div>

                                    <div className="RecruiterProfile-contact-details">
                                        <div className="RecruiterProfile-contact-item">
                                            <img src={EmailIcon} alt="MailIcon" className="RecruiterProfile-contact-icon" />
                                            <span>{currentUser.companyEmail}</span>
                                        </div>
                                        <div className="RecruiterProfile-contact-item">
                                            <img src={PhoneIcon} alt="PhoneIcon" className="RecruiterProfile-contact-icon" />
                                            <span>{currentUser.phone}</span>
                                        </div>
                                        <div className="RecruiterProfile-contact-item">
                                            <img src={LocationIcon} alt="LocationIcon" className="RecruiterProfile-contact-icon" />
                                            <span>{currentUser.city}, {currentUser.state}</span>
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

                            <div className="RecruiterProfile-summary">
                                <div className="RecruiterProfile-summary-card">
                                    <div className="RecruiterProfile-summary-icon-cont">
                                        <img src={Department} alt='departmentIcon' className="RecruiterProfile-summary-icon" />
                                    </div>
                                    <div className="RecruiterProfile-summary-content">
                                        <p>Department</p>
                                        <span>{currentUser.Department}</span>
                                    </div>
                                </div>
                                <div className="RecruiterProfile-summary-card">
                                    <div className="RecruiterProfile-summary-icon-cont">
                                        <img src={EmpId} alt='EmpIdIcon' className="RecruiterProfile-summary-icon" />
                                    </div>
                                    <div className="RecruiterProfile-summary-content">
                                        <p>Employee ID</p>
                                        <span>{currentUser.EmpId}</span>
                                    </div>
                                </div>
                                <div className="RecruiterProfile-summary-card">
                                    <div className="RecruiterProfile-summary-icon-cont">
                                        <img src={JoinIcon} alt='JoinIcon' className="RecruiterProfile-summary-icon" />
                                    </div>
                                    <div className="RecruiterProfile-summary-content">
                                        <p>Joined On</p>
                                        <span>{currentUser.joinedOn}</span>
                                    </div>
                                </div>
                                <div className="RecruiterProfile-summary-card">
                                    <div className="RecruiterProfile-summary-icon-cont">
                                        <img src={ExpIcon} alt='ExpIcon' className="RecruiterProfile-summary-icon" />
                                    </div>
                                    <div className="RecruiterProfile-summary-content">
                                        <p>Experience</p>
                                        <span>{currentUser.experience}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="RecruiterProfile-content">
                    <div className="RecruiterProfile-card">
                        <div className="RecruiterProfile-card-header">
                            <img src={PersonalInfo} alt="personal-information-icon" className="RecruiterProfile-card-icon" />
                            <h2>Personal Information</h2>
                        </div>
                        <div className="RecruiterProfile-personal-grid">
                            <div className='RecruiterProfile-personal-Row'>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>Email</label>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='Enter Your Email'
                                        type="email"
                                    />
                                    {errors.email && <span className="TC-Reg-err-msg">{errors.email}</span>}
                                </div>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>Gender</label>
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
                            </div>

                            <div className='RecruiterProfile-personal-Row'>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>Phone number</label>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='7010158866'
                                        type='tel'
                                    />
                                    {errors.phone && <span className="TC-Reg-err-msg">{errors.phone}</span>}
                                </div>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>Date Of Birth</label>
                                    <input
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        type="date"
                                    />
                                    {errors.dob && <span className="TC-Reg-err-msg">{errors.dob}</span>}
                                </div>
                            </div>

                            <div className='RecruiterProfile-input-Wrapper'>
                                <label className='RecruiterProfile-Label'>Address 1</label>
                                <input
                                    name="address1"
                                    value={formData.address1}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                    placeholder='Enter your Address'
                                    type="text"
                                />
                                {errors.address1 && <span className="TC-Reg-err-msg">{errors.address1}</span>}
                            </div>

                            <div className='RecruiterProfile-personal-Row'>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>Address 2</label>
                                    <input
                                        name="address2"
                                        value={formData.address2}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='Enter your Address'
                                        type="text"
                                    />
                                </div>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>City</label>
                                    <input
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='Enter your City'
                                        type="text"
                                    />
                                    {errors.city && <span className="TC-Reg-err-msg">{errors.city}</span>}
                                </div>
                            </div>

                            <div className='RecruiterProfile-personal-Row'>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>State</label>
                                    <input
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='Enter your State'
                                        type="text"
                                    />
                                    {errors.state && <span className="TC-Reg-err-msg">{errors.state}</span>}
                                </div>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>Pincode</label>
                                    <input
                                        name="pincode"
                                        value={formData.pincode}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='Enter your Pincode'
                                        type="text"
                                    />
                                    {errors.pincode && <span className="TC-Reg-err-msg">{errors.pincode}</span>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="RecruiterProfile-card RecruiterProfile-company-card">
                        <div className="RecruiterProfile-card-header">
                            <img src={CompanyInfo} alt="company-details-icon" className="RecruiterProfile-card-icon1" />
                            <h2>Company Details</h2>
                        </div>
                        <div className="RecruiterProfile-personal-grid">
                            <div className='RecruiterProfile-personal-Row'>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>Designation</label>
                                    <input
                                        name="designation"
                                        value={formData.designation}
                                        onChange={handleChange}
                                        disabled
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='Enter Your Designation'
                                        type="text"
                                    />
                                </div>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>Company</label>
                                    <input
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        disabled
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='Enter Your Company Name'
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className='RecruiterProfile-personal-Row'>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>Joined On</label>
                                    <input
                                        name="joinedOn"
                                        value={formData.joinedOn}
                                        onChange={handleChange}
                                        disabled
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        type='date'
                                    />
                                </div>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>Experience</label>
                                    <input
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='7 Years'
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className='RecruiterProfile-input-Wrapper'>
                                <label className='RecruiterProfile-Label'>Company Email</label>
                                <input
                                    name="companyEmail"
                                    value={formData.companyEmail}
                                    onChange={handleChange}
                                    disabled
                                    className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                    placeholder='Enter Company Email'
                                    type="email"
                                />
                                {errors.companyEmail && <span className="TC-Reg-err-msg">{errors.companyEmail}</span>}
                            </div>

                            <div className='RecruiterProfile-input-Wrapper'>
                                <label className='RecruiterProfile-Label'>Company Address</label>
                                <input
                                    name="companyAddress"
                                    value={formData.companyAddress}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                    placeholder='Enter Company Address'
                                    type="text"
                                />
                                {errors.companyAddress && <span className="TC-Reg-err-msg">{errors.companyAddress}</span>}
                            </div>
                            <div className='RecruiterProfile-personal-Row2'>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>City</label>
                                    <input
                                        name="companyLocation"
                                        value={formData.companyLocation}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='Coimbatore'
                                        type='texts'
                                    />
                                    {errors.companyLocation && <span className="TC-Reg-err-msg">{errors.companyLocation}</span>}
                                </div>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>State</label>
                                    <input
                                        name="companyState"
                                        value={formData.companyState}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='TamilNadu'
                                        type="text"
                                    />
                                    {errors.companyState && <span className="TC-Reg-err-msg">{errors.companyState}</span>}
                                </div>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>Pincode</label>
                                    <input
                                        name="companyPincode"
                                        value={formData.companyPincode}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='64111'
                                        type="text"
                                    />
                                    {errors.companyPincode && <span className="TC-Reg-err-msg">{errors.companyPincode}</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="RecruiterProfile-card">
                    <div className="RecruiterProfile-card-header">
                        <img src={SkillsIcon} alt="skills-icon" className="RecruiterProfile-card-icon" />
                        <h2>Skills & Expertise</h2>
                    </div>

                    {isEditing && (
                        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                            <input
                                type="text"
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                                placeholder="Add a new skill"
                                className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                            />
                            <button
                                type="button"
                                onClick={handleAddSkill}
                                className="RecruiterProfile-SaveButton"
                                style={{ width: 'auto', padding: '0 20px' }}
                            >
                                Add
                            </button>
                        </div>
                    )}

                    <div className="RecruiterProfile-skills-grid">
                        {formData.skills.map((skill, index) => (
                            <div className="RecruiterProfile-skill" key={index} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                <span>{skill}</span>
                                {isEditing && (
                                    <img src={Wrong} width={12} onClick={() => handleDeleteSkill(skill)} alt="remove-skill" style={{ cursor: 'pointer' }} />
                                )}
                            </div>
                            
                        ))}
                    </div>
                    {errors.skills && <span className="TC-Reg-err-msg">{errors.skills}</span>}
                </div>

                {isEditing && (
                    <div className='RecruiterProfile-Option-Buttons'>
                        <button className='RecruiterProfile-SaveButton' type="submit">Save Changes</button>
                        <button className='RecruiterProfile-DiscardButton' type="button" onClick={handleDiscard}>Discard</button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default RecruiterProfile;