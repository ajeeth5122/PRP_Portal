import React from 'react'
import StudentIcon from "../assets/LoginAssets/StudentLogo.png";
import RecruiterIcon from "../assets/LoginAssets/RecruiterLogo.png";
import Back from "../assets/LoginAssets/BackIcon.png";
import ProductLogo from '../assets/RegistrationAssets/Eduhire.png'
import RightArrowImg from "../assets/RegistrationAssets/RightArrow.png";
import POIcon from "../assets/LoginAssets/POLogo.png";
import TCIcon from "../assets/LoginAssets/TCLogo.png";
import './CommonLoginScreen.css'
import { useNavigate } from 'react-router-dom';
const CommonLoginScreen = () => {
    const navigate=useNavigate()
    return (
        <>
            <div className='Common-Login-Container'>
                <div className="Common-Login-header">
                    <div className='UserRegistration-Logo-Title'>
                        <img src={ProductLogo} width={40} alt="Product Logo" />
                        <div className='UserRegistration-Title'>
                            <h4 style={{color:"#ffffffdc"}}>EDUHIRE</h4>
                            
                        </div>
                    </div>
                    <div className="Common-Login-header-actions">
                        <p className="Common-Login-support-link">Support</p>
                        <button className="Common-Login-help-center-button">Help Center</button>
                    </div>
                </div>
                <div className='Common-Login-Title-Cont'>
                <div onClick={()=>navigate('/PRP_Portal')} style={{display:"flex" ,padding:"5px 10px",borderRadius:"6px",outline:"none",border:"none",background:"white",gap:"5px"}}>
                    <img src={Back} alt="back btn" width={20} />
                </div>
                <p style={{ textAlign: 'center',flex:"1", fontWeight: "700", color: "#ffffff9e", fontSize: "14px",margin:"20px 0" }}>SELECT YOUR ROLE TO LOGIN</p>
                </div>
                <div className='Common-Login-Row1'>
                    <div onClick={()=>navigate('/PRP_Portal/Login/Student')}  className='Common-Login-User-Cont'>
                        <img src={StudentIcon} alt="Student Icon" width={70} />
                        <div>
                            <h4>Student</h4>
                            <p>Launch your career journey with industry-leading placement opportunities.</p>
                            <img className="arrow-img" src={RightArrowImg} alt="RightArrowIcon" width={15} />
                        </div>
                        
                    </div>
                    <div onClick={()=>navigate('/PRP_Portal/Login/Recruiter')} className='Common-Login-User-Cont'>
                        <img src={RecruiterIcon} alt="Recruiter Icon" width={70} />
                        <div>
                            <h4>Recruiter</h4>
                            <p>Discover and hire the next generation of top-tier professional talent.</p>
                            <img className="arrow-img" src={RightArrowImg} alt="RightArrowIcon" width={15} />
                        </div>
                    </div>
                    <div onClick={()=>navigate('/PRP_Portal/Login/PlacementOfficer')} className='Common-Login-User-Cont'>
                        <img src={POIcon} alt="Placement Officer Icon" width={70} />
                        <div>
                            <h4>Placement Officer</h4>
                            <p>Coordinate campus drives and manage institutional placement activities.</p>
                            <img className="arrow-img" src={RightArrowImg} alt="RightArrowIcon" width={15} />
                        </div>
                    </div>
                    <div onClick={()=>navigate('/PRP_Portal/Login/TrainingCoordinator')} className='Common-Login-User-Cont'>
                        <img src={TCIcon} alt="Training Coordinator Icon" width={70} />
                        <div>
                            <h4>Training Coordinator</h4>
                            <p>Design and manage student training programs and skill development initiatives.</p>
                            <img className="arrow-img" src={RightArrowImg} alt="RightArrowIcon" width={15} />
                        </div>                        
                    </div>
                </div>

                <div className="Common-Login-custom-footer">
                    <div className="Common-Login-footer-copyright">
                        &copy; 2026 Placement Platform. All rights reserved.
                    </div>
                    <div className="Common-Login-footer-links">
                        <a href="#privacy" className="Common-Login-footer-link">Privacy Policy</a>
                        <a href="#terms" className="Common-Login-footer-link">Terms of Service</a>
                        <a href="#cookie" className="Common-Login-footer-link">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommonLoginScreen