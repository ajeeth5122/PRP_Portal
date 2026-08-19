import React, { useRef, useState } from 'react';
import './PlacementofficerProfile.css';
import ProfileImg from '../assets/RecruiterAssets/ProfileImg.png';
import EditIcon from '../assets/RecruiterAssets/EditIcon.png';
import EditNotify from '../assets/RecruiterAssets/EditNotify.png';
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

const PlacementOfficerProfile = ({ currentUser }) => {
    const { user, setUser } = useData();

    const fileInputRef = useRef(null);

    const [formData, setFormData] = useState(currentUser);
    const [isEditing, setIsEditing] = useState(false);
    const [showCamMenu, setShowCamMenu] = useState(false);
    const [newSkill, setNewSkill] = useState('');
    const [errors, setErrors] = useState({});

    const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newDoc = {
        id: Date.now(),
        name: file.name,
        url: URL.createObjectURL(file), 
        file: file
      };
      setFormData((prev) => ({
        ...prev,
        uploadedDocs: [...(prev.uploadedDocs || []), newDoc]
      }));
      e.target.value = null;
    }
  };

  const handleDeleteDoc = (id) => {
    setFormData((prev) => ({
        ...prev,
        uploadedDocs: (prev.uploadedDocs || []).filter((doc) => doc.id !== id)
    }));
  };

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

        if (!formData.address) { newErrors.address = '*please enter Address' }
        if (!formData.city) { newErrors.city = '*City is Required' }
        if (!formData.state) { newErrors.state = '*State is Required' }
        if (!formData.gender || formData.gender === 'Select') { newErrors.gender = '*please select your Gender'; }
        if (!formData.instituteAddress) { newErrors.instituteAddress = '*please enter Institute Address' }
        if (!formData.instituteState) { newErrors.instituteState = '*please enter Institute State' }
        if (!formData.instituteLocation) { newErrors.instituteLocation = '*please enter Institute Location' }
        if (!formData.aboutme) { newErrors.aboutme = '*should not be in blank' }
        if (!formData.email.trim()) { newErrors.email = '*Email is required'; }
        else if (!regexOfMail.test(formData.email)) { newErrors.email = '*Enter a valid email address'; }

        if (!formData.Officialemail.trim()) { newErrors.Officialemail = '*Email is required'; }
        else if (!regexOfMail.test(formData.Officialemail)) { newErrors.Officialemail = '*Enter a valid email address'; }

        if (!formData.phone.trim()) { newErrors.phone = '*Phone number is required'; }
        else if (!regexofMobile.test(formData.phone.trim())) { newErrors.phone = '*Enter a valid 10-digit phone number'; }

        if (!formData.pincode) { newErrors.pincode = '*Pincode is Required'; }
        else if (formData.pincode && !regexofPincode.test(formData.pincode.trim())) {
            newErrors.pincode = '*Pincode must be 6 digits';
        }
        if (!formData.institutePincode) { newErrors.institutePincode = '*Pincode is Required'; }
        else if (formData.institutePincode && !regexofPincode.test(formData.institutePincode.trim())) {
            newErrors.institutePincode = '*Pincode must be 6 digits';
        }
        if (!formData.aboutme || !formData.aboutme.trim()) {
            newErrors.aboutme = '*About me field cannot be empty';
        } else if (formData.aboutme.trim().length < 25) {
            newErrors.aboutme = '*About me must be at least 25 characters';
        } else if (formData.aboutme.trim().length > 250) {
            newErrors.aboutme = '*About me must not exceed 250 characters';
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
            PlacementOfficer: prevUser.PlacementOfficer.map((po) =>
                po.id === currentUser.id ? { ...formData } : po
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
        <div className="RecruiterProfile-container">
            <form className='Recriter-Profile-Form' name='form' onSubmit={handleSubmit}>
                <div style={{ background: '#5a3e8e' }} className="RecruiterProfile-banner">
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
                                            <span>{currentUser.Officialemail}</span>
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
                                    <label className='RecruiterProfile-Label'>Full Name</label>
                                    <input
                                        name="userName"
                                        value={formData.userName}
                                        onChange={handleChange}
                                        disabled
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='Enter Your Name'
                                        type="Text"
                                    />

                                </div>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>Personal Email</label>
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
                                    value={formData.address}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                    placeholder='Enter your Address'
                                    type="text"
                                />
                                {errors.address && <span className="TC-Reg-err-msg">{errors.address}</span>}
                            </div>
                            <div className='RecruiterProfile-personal-Row2'>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>City</label>
                                    <input
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='Coimbatore'
                                        type='texts'
                                    />
                                    {errors.city && <span className="TC-Reg-err-msg">{errors.city}</span>}
                                </div>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>State</label>
                                    <input
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='TamilNadu'
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
                                        placeholder='64111'
                                        type="text"
                                    />
                                    {errors.pincode && <span className="TC-Reg-err-msg">{errors.pincode}</span>}
                                </div>

                            </div>
                            <div className="RecruiterProfile-input-Wrapper upload-field-margin">
                                <label className="RecruiterProfile-Label">Upload Document</label>
                                <input
                                    type="file"
                                    onChange={handleFileUpload}
                                    disabled={!isEditing}
                                    className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                    accept=".pdf,.doc,.docx,.jpg,.png"
                                />
                            </div>

                        </div>
                    </div>

                    <div className="RecruiterProfile-card">
                        <div className="RecruiterProfile-card-header">
                            <img src={CompanyInfo} alt="company-details-icon" className="RecruiterProfile-card-icon1" />
                            <h2>Professional Details</h2>
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
                                    <label className='RecruiterProfile-Label'>Official Email</label>
                                    <input
                                        name="Officialemail"
                                        value={formData.Officialemail}
                                        onChange={handleChange}
                                        disabled
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='Josephdurairaj@eduhire.com'
                                        type='text'
                                    />
                                    {errors.Officialemail && <span className="TC-Reg-err-msg">{errors.Officialemail}</span>}
                                </div>
                            </div>

                            <div className='RecruiterProfile-personal-Row'>

                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>Employee Id</label>
                                    <input
                                        name="EmpId"
                                        value={formData.EmpId}
                                        onChange={handleChange}
                                        disabled
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='PO-2024-0178'
                                        type="text"
                                    />
                                    {errors.EmpId && <span className="TC-Reg-err-msg">{errors.EmpId}</span>}
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
                                    {errors.experience && <span className="TC-Reg-err-msg">{errors.experience}</span>}
                                </div>
                            </div>
                            <div className='RecruiterProfile-personal-Row'>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>College/ Institute Name</label>
                                    <input
                                        name="institute"
                                        value={formData.institute}
                                        onChange={handleChange}
                                        disabled
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='Enter institue Name'
                                        type="Text"
                                    />

                                </div>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>Affiliated University</label>
                                    <input
                                        name="Affiliated"
                                        value={formData.Affiliated}
                                        onChange={handleChange}
                                        disabled
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='University Name'
                                        type="Text"
                                    />

                                </div>
                            </div>
                            <div className='RecruiterProfile-input-Wrapper'>
                                <label className='RecruiterProfile-Label'>Institute Address</label>
                                <input
                                    name="instituteAddress"
                                    value={formData.instituteAddress}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                    placeholder='Enter your Address'
                                    type="text"
                                />
                                {errors.instituteAddress && <span className="TC-Reg-err-msg">{errors.instituteAddress}</span>}
                            </div>
                            <div className='RecruiterProfile-personal-Row2'>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>City</label>
                                    <input
                                        name="instituteLocation"
                                        value={formData.instituteLocation}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='Coimbatore'
                                        type='texts'
                                    />
                                    {errors.instituteLocation && <span className="TC-Reg-err-msg">{errors.instituteLocation}</span>}
                                </div>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>State</label>
                                    <input
                                        name="instituteState"
                                        value={formData.instituteState}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='TamilNadu'
                                        type="text"
                                    />
                                    {errors.instituteState && <span className="TC-Reg-err-msg">{errors.instituteState}</span>}
                                </div>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>Pincode</label>
                                    <input
                                        name="institutePincode"
                                        value={formData.institutePincode}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='64111'
                                        type="text"
                                    />
                                    {errors.institutePincode && <span className="TC-Reg-err-msg">{errors.institutePincode}</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="RecruiterProfile-content">
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
            
                        <div className="RecruiterProfile-card">
                            <div className="RecruiterProfile-card-header">
                                <img src={ProfileImg} alt="skills-icon" className="RecruiterProfile-card-icon" />
                                <h2>Uploaded Documents</h2>
                            </div>
                            <div className="StudentsProfile-About-cont document-list-container">
                                {formData.uploadedDocs.length === 0 ? (
                                    <p className="no-documents-text">No documents uploaded yet.</p>
                                ) : (
                                    formData.uploadedDocs.map((doc) => (
                                        <div key={doc.id} className="document-item">
                                            <span className="document-name">{doc.name}</span>
                                            <div className="document-actions">
                                                <a href={doc.url} target="_blank" rel="noopener noreferrer" className="doc-link view-link">View</a>
                                                <a href={doc.url} download={doc.name} className="doc-link download-link"> Download</a>
                                                {isEditing && (
                                                    <button onClick={() => handleDeleteDoc(doc.id)} className="doc-btn delete-btn">Delete</button>
                                                )}
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
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

export default PlacementOfficerProfile;