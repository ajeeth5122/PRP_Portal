import React, { useRef, useState } from 'react';
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
import './TrainingCoordinatorProfile.css';
import { useData } from '../DataProvider';

const TrainingCoordinatorProfile = ({currentUser}) => {
    const fileInputRef = useRef(null);
    const {user,setUser}=useData();

    const [formData, setFormData] = useState(currentUser);
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

    const handleRemoveImage = () => {
        setFormData((prev) => ({
            ...prev,
            ProfileImg: Profile
        }));
    };


    const validate = () => {

        let newErrors = {};

        const regexOfMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const regexofUppercase = /^(?=.*[A-Z]).+$/
        const regexofMobile = /^[6-9]\d{9}$/
        const regexofPincode = /^\d{6}$/

        if (!formData.address) { newErrors.address = '*please enter Address' }
        if (!formData.city) { newErrors.city = '*City is Required' }
        if (!formData.gender || formData.gender === 'Select') { newErrors.gender = '*please select your Gender'; }
        if (!formData.dob) { newErrors.dob = '*Select Your Date of Birth' }
        if (!formData.email.trim()) { newErrors.email = '*Email is required'; }
        else if (!regexOfMail.test(formData.email)) { newErrors.email = '*Enter a valid email address'; }
        if (!formData.phone.trim()) { newErrors.phone = '*Phone number is required'; }
        else if (!regexofMobile.test(formData.phone.trim())) { newErrors.phone = '*Enter a valid 10-digit phone number'; }


        return newErrors;
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setUser((prevUser) => ({
            ...prevUser,
            TrainingCoordinator: prevUser.TrainingCoordinator.map((TC) =>
                TC.id === currentUser.id ? { ...formData } : TC
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


    return (
        <div className="StudentProfile-Page">
            <form className='Recriter-Profile-Form' onSubmit={handleSubmit}>
                <div className='TCProfile-Card-container'>
                    <div className="StudentProfile-Hero-Left">
                        <div className="StudentProfile-Avatar-Wrap">
                            <div className="RecruiterProfile-image-container">
                                <img src={currentUser.ProfileImg} alt="profile-img" className="TC-profile-image" />
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
                            {/* <div className="StudentProfile-Status-Badge">
                                        <span className='StudentProfile-Status-dot'></span>
                                        <p className='StudentProfile-Status'>Active</p>
                                    </div> */}
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "15px", width: "100%" }}>
                            {/* <div className="RecruiterProfile-user-section">

                                <div className='RecruiterProfile-Title-Card'>
                                    <h4 className='RecruiterProfile-UserName'>{currentUser.userName}</h4>|
                                    <p className='RecruiterProfile-Title'> {currentUser.designation}</p>
                                </div>

                                {!isEditing && (
                                    <button type="button" className="StudentProfile-Edit-Btn" onClick={handleEditClick}>
                                        <img src={EditIcon} alt="edit-icon" className="StudentProfile-Edit-Icon" />
                                        Edit Profile
                                    </button>
                                )}


                            </div>
                            <div className="TCProfile-user-details">
                                <div className="TCProfile-contact-details">
                                    <div className="TCProfile-contact-item">
                                        <img src={EmailIcon} alt="MailIcon" className="RecruiterProfile-contact-icon" />
                                        <span>{currentUser.email}</span>
                                    </div>
                                    <div className="TCProfile-contact-item">
                                        <img src={PhoneIcon} alt="PhoneIcon" className="RecruiterProfile-contact-icon" />
                                        <span>{currentUser.phone}</span>
                                    </div>
                                    <div className="TCProfile-contact-item">
                                        <img src={LocationIcon} alt="LocationIcon" className="RecruiterProfile-contact-icon" />
                                        <span>{currentUser.city}, {currentUser.state}</span>
                                    </div>
                                </div>

                                <div className='TCProfile-Bio-cont'><p className='TCProfile-Bio'>"{currentUser.Bio}"</p> </div>
                            </div> */}
                            <div className="RecruiterProfile-user-section">
                                                            <div className="RecruiterProfile-user-details">
                                                                <div className='RecruiterProfile-Title-Card'>
                                                                    <h4 className='TCProfile-UserName'>{currentUser.userName}</h4>|
                                                                    <p className='TCProfile-Title'> {currentUser.designation}</p>
                                                                </div>
                            
                                                                <div className="TCProfile-contact-details">
                                                                    <div className="TCProfile-contact-item">
                                                                        <img src={EmailIcon} alt="MailIcon" className="RecruiterProfile-contact-icon" />
                                                                        <span>{currentUser.email}</span>
                                                                    </div>
                                                                    <div className="TCProfile-contact-item">
                                                                        <img src={PhoneIcon} alt="PhoneIcon" className="RecruiterProfile-contact-icon" />
                                                                        <span>{currentUser.phone}</span>
                                                                    </div>
                                                                    <div className="TCProfile-contact-item">
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
                                                         <div className='StudentProfile-Bio'> <p className='StudentProfile-Bio'>"{formData.Bio}"</p> </div>
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

                            </div>

                            <div className='RecruiterProfile-personal-Row'>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>Date Of Birth</label>
                                    <input
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        type={isEditing ? "date" : "text"}
                                    />
                                    {errors.dob && <span className="TC-Reg-err-msg">{errors.dob}</span>}
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
                                            <option value={formData.gender}>{formData.gender}</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Others">Others</option>
                                        </select>
                                        {errors.gender && <span className="TC-Reg-err-msg">{errors.gender}</span>}
                                    </>
                                        : <input className='RecruiterProfile-input display' type='text' disabled value={formData.gender} />}
                                </div>

                            </div>

                            <div className='RecruiterProfile-input-Wrapper'>
                                <label className='RecruiterProfile-Label'>Address</label>
                                <input
                                    name="address"
                                    value={formData.address ? formData.address : "-"}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                    placeholder='Enter your Address'
                                    type="text"
                                />
                                {errors.address && <span className="TC-Reg-err-msg">{errors.address}</span>}
                            </div>
                        </div>
                    </div>

                    <div className="RecruiterProfile-card RecruiterProfile-company-card">
                        <div className="RecruiterProfile-card-header">
                            <img src={CompanyInfo} alt="company-details-icon" className="RecruiterProfile-card-icon1" />
                            <h2 className='StudentProfile-Details-Heading'>Professional Information</h2>
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
                                        placeholder='21PY5055'
                                        type="text"
                                    />
                                </div>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>Employee Id</label>
                                    <input
                                        name="RegistrationNum"
                                        value={formData.RegistrationNum}
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
                                    <label htmlFor='GraduationYear' className='RecruiterProfile-Label'>Experience</label>
                                    <input
                                        name="experience"
                                        id='experience'
                                        value={`${formData.experience} years`}
                                        onChange={handleChange}
                                        disabled
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        type='year'
                                    />
                                </div>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>Joined On</label>
                                    <input
                                        name="RegistrationDate"
                                        value={formData.RegistrationDate}
                                        onChange={handleChange}
                                        disabled
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='7.9'
                                        type={isEditing ? "Date" : "text"}
                                    />
                                    {errors.RegistrationDate && <span className="TC-Reg-err-msg">{errors.RegistrationDate}</span>}
                                </div>

                            </div>

                            <div className='RecruiterProfile-input-Wrapper'>
                                <label className='RecruiterProfile-Label'>Institute Address</label>
                                <input
                                    name="InstituteAddress"
                                    value={formData.InstituteAddress}
                                    onChange={handleChange}
                                    disabled
                                    className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                    placeholder='Enter Department'
                                    type="text"
                                />
                                {errors.companyEmail && <span className="TC-Reg-err-msg">{errors.companyEmail}</span>}
                            </div>
                        </div>

                    </div>
                </div>
                <div className="RecruiterProfile-card">
                    <div className="RecruiterProfile-card-header">
                        <img src={ProfileImg} alt="skills-icon" className="RecruiterProfile-card-icon" />
                        <h2>About Me</h2>
                    </div>
                    <div className="StudentsProfile-About-cont">
                            {isEditing ? (
                                <div className='RecruiterProfile-input-Wrapper' style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <textarea
                                        name="aboutme"
                                        value={formData.aboutme}
                                        onChange={handleChange}
                                        className="StudentProfile-input-About"
                                        placeholder="Tell us about yourself..."

                                    />
                                    {errors.aboutme && <span className="TC-Reg-err-msg">{errors.aboutme}</span>}
                                </div>
                            ) : (
                                <p style={{ margin: 0, width: '100%', wordBreak: 'break-word', lineHeight: '1.6' }}>
                                    {formData.aboutme}
                                </p>
                            )}
                        </div>

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

export default TrainingCoordinatorProfile;