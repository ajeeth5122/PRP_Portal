import React, { useRef, useState } from 'react'
import './StudentProfile.css'
import CamIcon from '../assets/RecruiterAssets/CamIcon.png';
import Wrong from '../assets/LoginAssets/XModal.png';
import ProfileEditIcon from '../assets/RecruiterAssets/EditIcon.png'
import ProfileMailIcon from '../assets/StudentsAssets/EmailIcon.png'
import ProfilePhoneIcon from '../assets/StudentsAssets/PhoneIcon.png'
import ProfileLocationIcon from '../assets/StudentsAssets/locationicon.png'
import ProfilePersonalInfoIcon from '../assets/RecruiterAssets/ProfileImg.png'
import ProfileAcademicInfoIcon from '../assets/RecruiterAssets/EduHireLogo.png'
import ProfileAboutMeIcon from '../assets/RecruiterAssets/ProfileImg.png'
import ProfileSkillsIcon from '../assets/RecruiterAssets/ProfileImg.png'
import Profile from '../assets/TCAssets/Trainerprof.png'
import ProfileAvatarSmall from '../assets/RecruiterAssets/ProfileImg.png'
import { useData } from '../DataProvider';

const StudentProfile = ({currentUser}) => {
    const { user, setUser } = useData()
    const fileInputRef = useRef(null);

    const [formData, setFormData] = useState(currentUser)
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

        const regexOfMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/
        const regexofUppercase = /^(?=.*[A-Z]).+$/
        const regexofMobile = /^[6-9]\d{9}$/
        const regexofPincode = /^\d{6}$/

        if (!formData.CGPA.trim()) { newErrors.CGPA = '*CGPA is required'; }
        if (!formData.address1) { newErrors.address1 = '*please enter Address' }
        if (!formData.city) { newErrors.city = '*City is Required' }
        if (!formData.gender || formData.gender === 'Select') { newErrors.gender = '*please select your Gender'; }
        if (!formData.dob) { newErrors.dob = '*Select Your Date of Birth' }
        if (!formData.email.trim()) { newErrors.email = '*Email is required'; }
        if (formData.skills.length === 0 || !formData.skills){newErrors.skills = '*Add atleast one Skill'}
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
            Student: prevUser.Student.map((student) =>
                student.id === currentUser.id ? { ...formData } : student
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
        <div className="StudentProfile-Page">
            <form className='Recriter-Profile-Form' onSubmit={handleSubmit}>
                <div className='StudentProfile-Card-container'>
                    <div className="StudentProfile-Hero-Left">
                        <div className="StudentProfile-Avatar-Wrap">
                            <div className="RecruiterProfile-image-container">
                                <img src={formData.ProfileImg} alt="profile-img" className="RecruiterProfile-profile-image" />
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

                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
                            <div className="RecruiterProfile-user-section">
                                <div className="RecruiterProfile-user-details">
                                    <div className='RecruiterProfile-Title-Card'>
                                        <h4 className='RecruiterProfile-UserName'>{currentUser.userName}</h4>|
                                        <p className='RecruiterProfile-Title'> {currentUser.designation}</p>
                                    </div>

                                    <div className="RecruiterProfile-contact-details">
                                        <div className="StudentProfile-contact-item">
                                            <img src={ProfileMailIcon} alt="MailIcon" className="RecruiterProfile-contact-icon" />
                                            <span>{currentUser.email}</span>
                                        </div>
                                        <div className="StudentProfile-contact-item">
                                            <img src={ProfilePhoneIcon} alt="PhoneIcon" className="RecruiterProfile-contact-icon" />
                                            <span>{currentUser.phone}</span>
                                        </div>
                                        <div className="StudentProfile-contact-item">
                                            <img src={ProfileLocationIcon} alt="LocationIcon" className="RecruiterProfile-contact-icon" />
                                            <span>{currentUser.city}, {currentUser.state}</span>
                                        </div>
                                    </div>

                                </div>
                                {!isEditing && (
                                    <button type="button" className="StudentProfile-Edit-Btn" onClick={handleEditClick}>
                                        <img src={ProfileEditIcon} alt="edit-icon" className="StudentProfile-Edit-Icon" />
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
                            <img src={ProfileAvatarSmall} alt="personal-information-icon" className="RecruiterProfile-card-icon" />
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
                        </div>
                    </div>

                    <div className="RecruiterProfile-card RecruiterProfile-company-card">
                        <div className="RecruiterProfile-card-header">
                            <img src={ProfileAcademicInfoIcon} alt="company-details-icon" className="RecruiterProfile-card-icon1" />
                            <h2 className='StudentProfile-Details-Heading'>Academic Information</h2>
                        </div>
                        <div className="RecruiterProfile-personal-grid">
                            <div className='RecruiterProfile-personal-Row'>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>Registration Number</label>
                                    <input
                                        name="Registration"
                                        value={formData.RegistrationNum}
                                        onChange={handleChange}
                                        disabled
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='21PY5055'
                                        type="text"
                                    />
                                </div>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>Degree</label>
                                    <input
                                        name="Degree"
                                        value={formData.Degree}
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
                                    <label htmlFor='GraduationYear' className='RecruiterProfile-Label'>Graduation Year</label>
                                    <input
                                        name="GraduationYear"
                                        id='GraduationYear'
                                        value={formData.GraduationYear}
                                        onChange={handleChange}
                                        disabled
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        type='year'
                                    />
                                </div>
                                <div className='RecruiterProfile-input-Wrapper'>
                                    <label className='RecruiterProfile-Label'>CGPA</label>
                                    <input
                                        name="CGPA"
                                        value={formData.CGPA}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className={isEditing ? "RecruiterProfile-input" : "RecruiterProfile-input display"}
                                        placeholder='7.9'
                                        type="percent"
                                    />
                                    {errors.CGPA && <span className="TC-Reg-err-msg">{errors.CGPA}</span>}
                                </div>

                            </div>

                            <div className='RecruiterProfile-input-Wrapper'>
                                <label className='RecruiterProfile-Label'>Department</label>
                                <input
                                    name="Department"
                                    value={formData.Department}
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
                <div className='RecruiterProfile-personal-Row'>
                    <div className="RecruiterProfile-card">
                        <div className="RecruiterProfile-card-header">
                            <img src={ProfileSkillsIcon} alt="skills-icon" className="RecruiterProfile-card-icon" />
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
                            <img src={ProfileSkillsIcon} alt="skills-icon" className="RecruiterProfile-card-icon" />
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

                        <div className="StudentsProfile-skills-cont">
                            
                            {formData.skills.map((skill, index) => (
                                <div className="RecruiterProfile-skill" key={index} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                    <span>{skill}</span>
                                    {isEditing && (
                                        <img src={Wrong} width={12} onClick={() => handleDeleteSkill(skill)} alt="remove-skill" style={{ cursor: 'pointer' }} />
                                    )}
                                </div>
                            ))}
                            {errors.skills && <span className="TC-Reg-err-msg">{errors.skills}</span>}
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
    )
}

export default StudentProfile