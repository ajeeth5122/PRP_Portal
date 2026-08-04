import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './MainSection.css'
import Discussion from '../assets/LandingPageAssets/DiscussionImg.png'
import Profiles from '../assets/LandingPageAssets/ProfileImageBlue.png'
import BlueProfiles from '../assets/LandingPageAssets/ProfileImageDB.png'
import LeftArrow from '../assets/LandingPageAssets/LeftArrow.png'
import RightArrow from '../assets/LandingPageAssets/RightArrow.png'
import Claude from '../assets/LandingPageAssets/ClaudeIcon.png'
import Copilot from '../assets/LandingPageAssets/CopilotIcon.png'
import Deepseek from '../assets/LandingPageAssets/DeepseekIcon.png'
import GeminiAI from '../assets/LandingPageAssets/GeminiIcon.png'
import Gradio from '../assets/LandingPageAssets/GradioIcon.png'
import Google from '../assets/LandingPageAssets/GoogleIcon.png'
import Candidates from '../assets/LandingPageAssets/CandidatesIcon.png'
import Employers from '../assets/LandingPageAssets/EmployersIcon.png'
import Institutions from '../assets/LandingPageAssets/InstitutionIcon.png'
import VerifiedPurple from '../assets/LandingPageAssets/Verified-Purple.png'
import VerifiedPink from '../assets/LandingPageAssets/Verified-Pink.png'
import PurpleArrow from '../assets/LandingPageAssets/PurpleRightArrow.png'
import PinkArrow from '../assets/LandingPageAssets/PinkRightArrow.png'
import Quotes from '../assets/LandingPageAssets/DoubleQuotes.png'
import ProfileImage from '../assets/LandingPageAssets/ProfileImageblue.png'
import Stars from '../assets/LandingPageAssets/StarIcon.png'

const MainSection = () => {  
    const PartnerLogos = [
        { id: 'google', src: Google, alt: 'Google' },
        { id: 'claude', src: Claude, alt: 'Claude' },
        { id: 'deepseek', src: Deepseek, alt: 'Deepseek' },
        { id: 'gemini', src: GeminiAI, alt: 'Gemini' },
        { id: 'gradio', src: Gradio, alt: 'Gradio' },
        { id: 'copilot', src: Copilot, alt: 'Copilot' },       
    ];
    const [logos, setLogos] = useState(PartnerLogos);

    const handleNext = () => {
        setLogos((prevLogos) => {
            const [first, ...rest] = prevLogos;
            return [...rest, first];
        });
    };

    const handlePrev = () => {
        setLogos((prevLogos) => {
            const last = prevLogos[prevLogos.length - 1];
            const rest = prevLogos.slice(0, -1);
            return [last, ...rest]; 
        });
    };

    return (
        <div className="LandingPage-intro-container">
            <div className="LandingPage-intro-section">
                <div className="LandingPage-main-content">
                    <div className="LandingPage-badge">
                        <span className="LandingPage-badge-dot"></span>
                        NOW POWERED BY AI 2.0
                    </div>
                    <h1 className="LandingPage-intro-title">Bridging Ambition with Opportunity.</h1>
                    <p className="LandingPage-intro-description">
                        Empowering the next generation of talent by connecting high-performing
                        candidates with industry-leading organizations through AI-driven matching.
                    </p>

                    <div className="LandingPage-profile-container">
                        <p className="LandingPage-profile-text">Join 50k+ professionals hired this month</p>
                        <div className="LandingPage-profile">
                            <img src={Profiles} alt="Profile 1" className="LandingPage-profiles-img" />
                            <img className="LandingPage-profiles-img-secondary" src={Profiles} alt="Profile 2" width={50} />
                            <div className="LandingPage-profiles-count">+5k</div>
                        </div>

                    </div>
                </div>
                <div className="LandingPage-intro-image-wrapper">
                    <img src={Discussion} alt="Discussion" className="LandingPage-intro-image" />
                </div>
            </div>


            <div className="LandingPage-Partner-sources">
            <h2 className="LandingPage-Partner-sources-text">TRUSTED BY INDUSTRY LEADERS</h2>
            <div className="LandingPage-logos-slider">
                <img 
                    src={LeftArrow} 
                    alt="Left Arrow" 
                    className="LandingPage-rightarrow-icon" 
                    onClick={handlePrev} 
                />
                
                <div className="LandingPage-Partner-logos-wrapper">
                    <div className="LandingPage-Partner-logos">
                        {logos.map((logo) => (
                            <div key={logo.id} className="LandingPage-logo-container">
                                <img src={logo.src} alt={logo.alt} className="LandingPage-logo-img" />
                            </div>
                        ))}
                    </div>
                </div>

                <img 
                    src={RightArrow} 
                    alt="Right Arrow" 
                    className="LandingPage-rightarrow-icon" 
                    onClick={handleNext} 
                />
            </div>
        </div>

            <div className="LandingPage-features-container">
                <div className="LandingPage-features-header">
                    <h2 className="LandingPage-features-title">Tailored Solutions for Everyone</h2>
                    <p className="LandingPage-features-subtitle">Seamlessly connecting talent, growth, and institutional excellence with a modern, human-centric approach.</p>
                </div>

                <div className="LandingPage-features-grid">
                    <div className="LandingPage-features-card">
                        <img src={Candidates} alt="Candidates" className="LandingPage-card-icon" />
                        <h3 className="LandingPage-card-title LandingPage-purple-text">For Candidates</h3>
                        <p className="LandingPage-card-description">Accelerate your career growth with AI-powered job matching and direct access to top-tier hiring managers across the globe.</p>
                        <div className="LandingPage-card-features">
                            <div className="LandingPage-card-points">
                                <img src={VerifiedPurple} alt="Verified" className="LandingPage-feature-icon" />
                                <span className="LandingPage-feature-text">Personalized Job Alerts</span>
                            </div>
                            <div className="LandingPage-card-points">
                                <img src={VerifiedPurple} alt="Verified" className="LandingPage-feature-icon" />
                                <span className="LandingPage-feature-text">AI Resume Optimization</span>
                            </div>
                        </div>
                        <Link to={'/PRP_Portal/UserRegistration'} className="LandingPage-card-link LandingPage-purple-text">
                            Get Started<img src={PurpleArrow} alt="Arrow" className="LandingPage-arrow-icon" />
                        </Link>
                    </div>

                    <div className="LandingPage-features-card">
                        <img src={Employers} alt="Employers" className="LandingPage-card-icon" />
                        <h3 className="LandingPage-card-title LandingPage-purple-text">For Employers</h3>
                        <p className="LandingPage-card-description">
                            Build a sustainable talent pipeline with automated screening and high-precision sourcing tools designed for modern recruitment.
                        </p>
                        <div className="LandingPage-card-features">
                            <div className="LandingPage-card-points">
                                <img src={VerifiedPurple} alt="Verified" className="LandingPage-feature-icon" />
                                <span className="LandingPage-feature-text">Instant Talent Sourcing</span>
                            </div>
                            <div className="LandingPage-card-points">
                                <img src={VerifiedPurple} alt="Verified" className="LandingPage-feature-icon" />
                                <span className="LandingPage-feature-text">Hiring Analytics Dashboard</span>
                            </div>
                        </div>
                        <Link to={'/PRP_Portal/UserRegistration'}  className="LandingPage-card-link LandingPage-purple-text">
                            Start Hiring <img src={PurpleArrow} alt="Arrow" className="LandingPage-arrow-icon" />
                        </Link>
                    </div>

                    <div className="LandingPage-features-card">
                        <img src={Institutions} alt="Institutions" className="LandingPage-card-icon" />
                        <h3 className="LandingPage-card-title LandingPage-pink-text">For Institutions</h3>
                        <p className="LandingPage-card-description">
                            Streamline placement tracking and strengthen industry partnerships with a centralized hub for student success and alumni engagement.
                        </p>
                        <div className="LandingPage-card-features">
                            <div className="LandingPage-card-points">
                                <img src={VerifiedPink} alt="Verified" className="LandingPage-feature-icon" />
                                <span className="LandingPage-feature-text">Placement Success Metrics</span>
                            </div>
                            <div className="LandingPage-card-points">
                                <img src={VerifiedPink} alt="Verified" className="LandingPage-feature-icon" />
                                <span className="LandingPage-feature-text">Corporate Network Access</span>
                            </div>
                        </div>
                        <Link to={'/PRP_Portal/UserRegistration'}  className="LandingPage-card-link LandingPage-pink-text">
                            Partner with Us <img src={PinkArrow} alt="Arrow" className="LandingPage-arrow-icon" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="LandingPage-datas-container">
                <div className="LandingPage-datas">
                    <h2>500k+</h2>
                    <p>Jobs Posted Annually</p>
                    <span></span>
                </div>
                <div className="LandingPage-datas">
                    <h2>10k+</h2>
                    <p>Hiring Partners</p>
                    <span></span>
                </div>
                <div className="LandingPage-datas">
                    <h2>95%</h2>
                    <p>Placement Rate</p>
                    <span></span>
                </div>
            </div>

            <div className="LandingPage-review-container">
                <div className="LandingPage-review-header">
                    <p className="LandingPage-review-tag">SUCCESS STORIES</p>
                    <h2 style={{ margin: "0" }} className="LandingPage-review-title">Voices from our thriving community</h2>
                </div>

                <div className="LandingPage-review-wrapper">
                    <div className="LandingPage-review-card">
                        <div className="LandingPage-review-content">
                            <div style={{ display: "flex", flex: "1", alignItems: "center", gap: "25px" }} >
                            <img src={ProfileImage} alt="Profile" className="LandingPage-profile-image" />
                            <div className="LandingPage-review-user">
                                <img src={Stars} alt="Stars" className="LandingPage-stars-image" />
                                <h4 style={{ margin: "0" }}>Sarah Chen</h4>
                                <p style={{ margin: "0" }}>Product Designer @ Aura Systems</p>
                            </div>
                            </div>
                            <img src={Quotes} alt="Quotes" className="LandingPage-quotes-image" />
                        </div>
                        <p className="LandingPage-review-text">
                            "Eduhire transformed my job search. The AI matching felt
                            intuitive, and within two weeks, I was interviewed and hired by my
                            dream company in fintech. The process was seamless."
                        </p>
                    </div>

                    <div className="LandingPage-review-card">
                        <div className="LandingPage-review-content">
                            <div style={{ display: "flex", flex: "1", alignItems: "center", gap: "25px" }} >
                                <img src={ProfileImage} alt="Profile" className="LandingPage-profile-image" />
                                <div className="LandingPage-review-user">
                                    <img src={Stars} alt="Stars" className="LandingPage-stars-image" />
                                    <h4 style={{ margin: "0" }}>David Miller</h4>
                                    <p style={{ margin: "0" }}>Talent Director @ Zenith Capital</p>
                                </div>
                            </div>
                            <img src={Quotes} alt="Quotes" className="LandingPage-quotes-image" />
                        </div>
                        <p style={{ margin: "0" }} className="LandingPage-review-text">
                            "The quality of candidates on Eduhire is unmatched. We
                            reduced our time-to-hire by 40% and have found some of our most
                            productive team members through their automated screening."
                        </p>
                    </div>
                </div>
            </div>

            <div className="LandingPage-cta-container">
                <h2>Ready to build your <br />professional future?</h2>
                <p>Join thousands of professionals and companies who have already found their perfect match through ConnectHire.</p>
                <div className="LandingPage-cta-buttons">
                    <button className="LandingPage-cta-find-btn">Find Your Next Role</button>
                    <button className="LandingPage-cta-hire-btn">Hire Top Talent</button>
                </div>
            </div>

        </div>
    )
}

export default MainSection