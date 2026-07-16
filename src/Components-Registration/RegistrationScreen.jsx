import React, { useState } from 'react'
import './RegistrationScreen.css'
import ProductLogo from '../assets/RegistrationAssets/Eduhire.png'
import PlacementOfficon from '../assets/RegistrationAssets/PlacementOffReg.png'
import RecruiterIcon from '../assets/RegistrationAssets/RecruiterReg.png'
import StudentIcon from '../assets/RegistrationAssets/StudentReg.png'
import TCIcon from '../assets/RegistrationAssets/TrainingCoordinatorReg.png'
import Help from '../assets/RegistrationAssets/Help.png'
import Register from '../assets/RegistrationAssets/Register.png'
import { Link, useNavigate } from 'react-router-dom'
import TraningCoordinatorReg from './TraningCoordinatorReg'
import StudentRegistration from './StudentRegistration'
import RecruiterRegistration from './RecruiterRegistration'
import PlacementOfficerReg from './PlacementOfficerReg'
import ManagementIcon from '../assets/RegistrationAssets/Central-Management-Icon.png'
import CollabrationIcon from '../assets/RegistrationAssets/Collabration.png'
import Oppertunities from '../assets/RegistrationAssets/OppoeruniesIcon.png'
import RoleBased from '../assets/RegistrationAssets/RoleBasedAccess.png'
import TimeTracking from '../assets/RegistrationAssets/R-timetracking-Icon.png'
import Back from "../assets/LoginAssets/BackIcon.png";

const RegistrationScreen = () => {
    const Users = [
        {
            title: "Placement Officer",
            Icon: PlacementOfficon,
            Desc: "Manage drive postings, student placements and company relations.",
        },
        {
            title: "Recruiter",
            Icon: RecruiterIcon,
            Desc: "Post jobs, search students, manage applications and shortlist candidates..",
        },
        {
            title: "Student",
            Icon: StudentIcon,
            Desc: "Explore opportunities, apply for jobs, and track application status.",
        },
        {
            title: "Training Coordinator",
            Icon: TCIcon,
            Desc: "Manage training programs, batches, schedules and training records.",
        }
    ]
    const navigate= useNavigate();

    const [selectedRole, SetselectedRole] = useState(null)

    return (
        <>
            <div className='UserRegistration-Container'>
                <div className='UserRegistration-Sidebar'>
                    <div className='UserRegistration-select-Cont'>
                        <div className='UserRegistration-Logo-Title'>
                            <img src={ProductLogo} width={50} alt="" />
                            <div className='UserRegistration-Title'>
                                <h4>EDUHIRE</h4>
                                <p>EMPOWERING CAREERS, CONNECTING FUTURES</p>
                            </div>
                        </div>
                        <div className='UserRegistration-Logo-Title'>
                            <div className='UserRegistration-Create-Title'>
                                <h2>Create Your Account</h2>
                                <p style={{ margin: "0" }}>Join Campus Connect and be part of a platform that connects talent with opportunities.</p>
                            </div>
                        </div>
                        <div className='UserRegistration-Navbar'>
                            <p>SELECT YOUR ROLE</p>
                            {Users.map((user, index) => (
                                <div key={index} onClick={() => SetselectedRole(user.title)} className={selectedRole === user.title ? "Userreg-Nav-items Active" : "Userreg-Nav-items"}>
                                    <div className='Userreg-Nav'>
                                        <div>
                                            <img src={user.Icon} alt="Placement officer" width={40} />
                                        </div>
                                        <div className='Userreg-Nav-List'>
                                            <span className='UserReg-Role'>{user.title}</span>
                                            <span className='UserReg-Role-Desc'>{user.Desc}</span>
                                        </div>

                                        <div>
                                            <input type="radio" checked={selectedRole === user.title} onChange={(e) => SetselectedRole(e.target.value)} />
                                        </div>
                                    </div>

                                </div>
                            ))}


                        </div>
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <button onClick={()=>navigate('/PRP_Portal')} className='Regscr-Backbtn'> <img src={Back} alt="back Icon" width={10} /> Return to Home</button>
                    </div>
                    </div>
                    
                    <div style={{ display: "flex", gap: "5px", margin: "10px", alignItems: "center", padding: "0px 20px" }}>
                        <img src={Help} alt="help" width={10} />
                        <Link style={{ margin: "0", fontSize: "10px", textDecoration: "none", color: "black" }}>Need help? Contact support@campusconnect.com</Link>
                    </div>
                </div>
                <div className='UserRegistration-Mainsec'>
                    {!selectedRole && (
                        <>
                            <div style={{ display: "flex", flexDirection: "column", background: "#ffffff46", height: "100vh", width: "100%", alignItems: "center" }}>
                                <div className='UserRegistration-Mainsec-Title'>
                                    <div style={{ display: "flex", flexDirection: "column", padding: "15px", justifyContent: "center", textAlign: "center", width: "500px" }}>
                                        <h4>Why Choose <span style={{ color: "#630ED4" }}>EDUHIRE?</span> </h4>
                                        <p >Empowering institutions, recruiters, trainers, and students <br /> through one unified platform
                                            designed to simplify campus <br /> hiring and career development</p>
                                    </div>
                                </div>

                                <div className='UserRegistration-Features'>
                                    <div className='UserRegistration-Features-Items'>
                                        <img src={ManagementIcon} alt="Centralized Management" width={50} />
                                        <h5>Centralized Management</h5>
                                        <p>Efficiently organize placement drives and records.</p>
                                    </div>
                                    <div className='UserRegistration-Features-Items'>
                                        <img src={TimeTracking} alt="TimeTracking" width={50} />
                                        <h5>Real-Time Tracking</h5>
                                        <p>Monitor applications and offers with instant updates..</p>
                                    </div>
                                    <div className='UserRegistration-Features-Items'>
                                        <img src={RoleBased} alt="RoleBased" width={50} />
                                        <h5>Role-Based Access</h5>
                                        <p>Dedicated access for all stakeholders ensures security..</p>
                                    </div>
                                    <div className='UserRegistration-Features-Items'>
                                        <img src={CollabrationIcon} alt="CollabrationIcon" width={50} />
                                        <h5>Seamless Collaboration</h5>
                                        <p>Bridge the gap with smooth communication workflows.</p>
                                    </div>
                                </div>

                                <div style={{ display: "flex", width: "400px", marginTop: "40px", background: "#630ED4", justifyContent: "center", alignItems: "center", gap: "30px", padding: "15px 25px", borderRadius: "20px" }}>
                                    <div >
                                        <img src={Oppertunities} alt="" width={70} />
                                    </div>
                                    <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center' }}>
                                        <h2 style={{ margin: '2px', fontSize: "20px", color: '#ffffffec' }}>One Platform. Four Roles. <br /> Endless Opportunities.</h2>
                                        <ul style={{ display: 'grid', gridTemplateColumns: "1fr 1fr", color: '#ffffffdd', fontSize: "12px", gap: "10px 30px" }}>
                                            <li style={{ listStyle: "outside", marginLeft: "-25px", }}>Connecting Talent</li>
                                            <li style={{ listStyle: "outside", marginLeft: "-25px" }}>Empowering Careers</li>
                                            <li style={{ listStyle: "outside", marginLeft: "-25px" }}>Building Futures</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </>
                    )}

                    {selectedRole === 'Placement Officer' && (
                        <PlacementOfficerReg />
                    )}
                    {selectedRole === 'Recruiter' && (
                        <RecruiterRegistration />
                    )}
                    {selectedRole === 'Student' && (
                        <StudentRegistration />
                    )}
                    {selectedRole === 'Training Coordinator' && (
                        <TraningCoordinatorReg />
                    )}
                </div>
            </div>
        </>
    )
}

export default RegistrationScreen