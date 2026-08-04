import React, { useState } from 'react'
import './RecruiterDashboard.css'
import ActiveJobs from '../assets/RecruiterAssets/ActJobs.png'
import InterviewsToday from '../assets/RecruiterAssets/IntToday.png'
import NewApplications from '../assets/RecruiterAssets/NewApp.png'
import Placements from '../assets/RecruiterAssets/Placements.png'
import AIInsights from '../assets/RecruiterAssets/AIInsights.png'
import Calendar from '../assets/RecruiterAssets/Calender.png'
import Profile from "../assets/TCAssets/Trainerprof.png";
import ThreeDots from '../assets/RecruiterAssets/ThreeDots.png'
import Available from '../assets/RecruiterAssets/Available.png'
import NotAvailable from '../assets/RecruiterAssets/NotAvailable.png'
import Pending from '../assets/RecruiterAssets/Pending.png'
import Ready from '../assets/RecruiterAssets/Ready.png'
import Review from '../assets/RecruiterAssets/Review.png'
import Verified from '../assets/RecruiterAssets/Verified.png'
import DashboardHeader from '../Resusable-Components/DashboardHeader'
// import Footer from '../Components-LandingPage/Footer'



const RecruiterDashboard = () => {

    const stats= [
        {
            id: 1,
            title: 'ACTIVE JOBS',
            value: 42,
            badgeText: '+12% VS LAST MO',
            badgeClass: 'Rec-Dashboard-badge-positive',
            icon: ActiveJobs,
        },
        {
            id: 2,
            title: 'NEW APPLICATIONS',
            value: 128,
            badgeText: '+4 NEW TODAY',
            badgeClass: 'Rec-Dashboard-badge-blue',
            icon: NewApplications,
        },
        {
            id: 3,
            title: 'INTERVIEWS TODAY',
            value: 8,
            badgeText: 'URGENT',
            badgeClass: 'Rec-Dashboard-badge-urgent',
            icon: InterviewsToday,
        },
        {
            id: 4,
            title: 'PLACEMENTS',
            value: 14,
            badgeText: 'Target: 20',
            badgeClass: 'Rec-Dashboard-badge-target',
            icon: Placements,
        },
    ]
    const pipeline= [
        { stage: 'SOURCING', count: 295, percentage: '85%' },
        { stage: 'APPLIED', count: 128, percentage: '50%' },
        { stage: 'INTERVIEWING', count: 42, percentage: '25%' },
        { stage: 'OFFER STAGE', count: 12, percentage: '10%' },
    ]
    const pipelineMetrics= [
        { label: 'AVG. RESPONSE', value: '4.2d' },
        { label: 'CONVERSION', value: '18%' },
        { label: 'TIME TO HIRE', value: '22d' },
    ]
    
    const quickLinks= [
        'Release Offer Letter',
        'Schedule Interview',
        'Review Candidates',
        'Download recruitment report',
    ]
    const aiInsights= {
        alert: {
            title: 'Talent Density Alert',
            description: 'High volume of Senior Java Engineers active in the Seattle area. Recommended to prioritize "Java Lead" requisition this week.',
        },
        qualityScore: {
            percentage: '89%',
            description: 'Current pipeline matches historical high-performer profiles.',
        },
        optimizedRequisitions: 12,
    }

    const verifications= [
        {
            id: 1,
            candidate: 'Keerthi.S',
            resume: { label: 'Verified', icon: Verified },
            portfolio: { label: 'Available', icon: Available },
            status: { label: 'Ready', icon: Ready },
        },
        {
            id: 2,
            candidate: 'Pravin.R',
            resume: { label: 'Verified', icon: Verified },
            portfolio: { label: 'Available', icon: Available },
            status: { label: 'Ready', icon: Ready },
        },
        {
            id: 3,
            candidate: 'Sneha.S',
            resume: { label: 'Pending', icon: Pending },
            portfolio: { label: 'Not Available', icon: NotAvailable },
            status: { label: 'Review', icon: Review },
        },
        {
            id: 4,
            candidate: 'Raveena.R',
            resume: { label: 'Verified', icon: Verified },
            portfolio: { label: 'Available', icon: Available },
            status: { label: 'Ready', icon: Ready },
        },
        {
            id: 5,
            candidate: 'Rahul.V',
            resume: { label: 'Pending', icon: Pending },
            portfolio: { label: 'Available', icon: Available },
            status: { label: 'Review', icon: Review },
        },
    ]


const interviews= [
        {
            id: 1,
            candidateName: 'Sarah Jenkins',
            avatar: Profile,
            score: '9.2 SCORE',
            scoreClass: 'Rec-Dashboard-score-purple',
            position: 'Senior Frontend Dev',
            department: 'ENGINEERING',
            time: '10:30 AM',
            type: 'VIDEO CALL . IN 15M',
            actionText: 'Join',
        },
        {
            id: 2,
            candidateName: 'Michael Chen',
            avatar: Profile,
            score: '8.8 SCORE',
            scoreClass: 'Rec-Dashboard-score-blue',
            position: 'Product Manager',
            department: 'PRODUCT',
            time: '1:00 PM',
            type: 'ON-SITE . TODAY',
            actionText: 'Confirm',
        },
    ]
    const userName= 'Priyanka P'

    return (
        <div className="Rec-Dashboard-container">
            <DashboardHeader role={'Recruiter'} userName={userName}/>
            <div className="Rec-Dashboard-header">
                <h1 className="Rec-Dashboard-welcome-title">
                    Welcome back, <span className="Rec-Dashboard-highlight">{userName}</span>!
                </h1>
                <button className="Rec-Dashboard-post-job-btn">+ Post Job</button>
            </div>

            <div className="Rec-Dashboard-stats-grid">
                {stats.map((stat) => (
                    <div className="Rec-Dashboard-stat-card" key={stat.id}>
                        <div className="Rec-Dashboard-stat-header">
                            <img src={stat.icon} alt={stat.title} className="Rec-Dashboard-stat-icon" />
                            <span className={`Rec-Dashboard-badge ${stat.badgeClass}`}>{stat.badgeText}</span>
                        </div>
                        <p className="Rec-Dashboard-stat-label">{stat.title}</p>
                        <h2 className="Rec-Dashboard-stat-value">{stat.value}</h2>
                    </div>
                ))}
            </div>

            <div className="Rec-Dashboard-middle-container">
                <div className="Rec-Dashboard-middle-cards">
                    <div className="Rec-Dashboard-pipeline-card">
                        <div className="Rec-Dashboard-card-header">
                            <div>
                                <h3 className="Rec-Dashboard-card-title">Candidate Pipeline</h3>
                                <p className="Rec-Dashboard-card-subtitle">Real-time recruitment funnel status</p>
                            </div>
                            <button className="Rec-Dashboard-dropdown-btn">All Job Categories </button>
                        </div>

                        <div className="Rec-Dashboard-pipeline-list">
                            {pipeline.map((item, idx) => (
                                <div className="Rec-Dashboard-pipeline-item" key={idx}>
                                    <div className="Rec-Dashboard-pipeline-info">
                                        <span>{item.stage}</span><span>{item.count}</span>
                                    </div>
                                    <div className="Rec-Dashboard-progress-bg">
                                        <div className="Rec-Dashboard-progress-bar" style={{ width: item.percentage }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="Rec-Dashboard-pipeline-avg">
                            {pipelineMetrics.map((metric, idx) => (
                                <div className="Rec-Dashboard-avg" key={idx}>
                                    <h4>{metric.value}</h4>
                                    <p>{metric.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="Rec-Dashboard-interviews-card">
                        <div className="Rec-Dashboard-card-header">
                            <h3 className="Rec-Dashboard-card-title">Upcoming Interviews</h3>
                            <button className="Rec-Dashboard-view-calendar-btn">View Calendar <img src={Calendar} alt="Calendar" /></button>
                        </div>

                        <table className="Rec-Dashboard-table">
                            <thead>
                                <tr>
                                    <th>CANDIDATE</th>
                                    <th>POSITION</th>
                                    <th>SCHEDULE</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {interviews.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <div className="Rec-Dashboard-user-cell">
                                                <img src={item.avatar} alt={item.candidateName} className="Rec-Dashboard-avatar" />
                                                <div className='Rec-Dashboard-user-details'>
                                                <strong>{item.candidateName}</strong>
                                                <p className={`Rec-Dashboard-score-badge ${item.scoreClass}`}>{item.score}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="Rec-Dashboard-position-cell">
                                                <h4>{item.position}</h4>
                                                <p>{item.department}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="Rec-Dashboard-schedule-cell">
                                                <strong>{item.time}</strong>
                                                <p className={item.typeClass}>{item.type}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="Rec-Dashboard-action-cell">
                                                <button className={`Rec-Dashboard-btn ${item.actionText}`}>{item.actionText}</button>
                                                <img src={ThreeDots} alt="More" className="Rec-Dashboard-threedots" />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="Rec-Dashboard-right-cards">
                    <div className=" Rec-Dashboard-quicklinks-card">
                        <h3 className="Rec-Dashboard-card-title">Quick Links</h3>
                        <div className="Rec-Dashboard-quicklinks-list">
                            {quickLinks.map((link, idx) => (<button className="Rec-Dashboard-link-btn" key={idx}>{link}</button>))}
                        </div>
                    </div>

                    <div className="Rec-Dashboard-ai-card">
                        <div className="Rec-Dashboard-ai-header">
                            <img src={AIInsights} alt="AI" className="Rec-Dashboard-ai-icon" /><h3>AI Insights</h3>
                        </div>

                        <div className="Rec-Dashboard-ai-box">
                            <h4 className="Rec-Dashboard-ai-alert-title"><span className="Rec-Dashboard-dot"></span> {aiInsights.alert.title}</h4>
                            <p className="Rec-Dashboard-ai-text">{aiInsights.alert.description}</p>
                        </div>

                        <div className="Rec-Dashboard-ai-box">
                            <h4 className="Rec-Dashboard-ai-subtitle">Predictive Quality Score</h4>
                            <div className="Rec-Dashboard-ai-progress">
                                <div className="Rec-Dashboard-ai-progress-bar" style={{ width: aiInsights.qualityScore.percentage }}></div>
                                <span>{aiInsights.qualityScore.percentage}</span>
                            </div>
                            <p className="Rec-Dashboard-ai-subtext">{aiInsights.qualityScore.description}</p>
                        </div>

                        <div className="Rec-Dashboard-ai-footer-box">
                            <p>OPTIMIZED REQUISITIONS</p>
                            <h2>{aiInsights.optimizedRequisitions}</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Rec-Dashboard-verification-card">
                <h3 className="Rec-Dashboard-card-titles">Resume Verification</h3>

                <table className="Rec-Dashboard-resume-table">
                    <thead>
                        <tr>
                            <th>CANDIDATE</th>
                            <th>RESUME</th>
                            <th>PORTFOLIO</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {verifications.map((row) => (
                            <tr key={row.id}>
                                <td>{row.candidate}</td>
                                <td><span className="Rec-Dashboard-status-item"><img src={row.resume.icon} alt={row.resume.label} /> {row.resume.label}</span></td>
                                <td><span className="Rec-Dashboard-status-item"><img src={row.portfolio.icon} alt={row.portfolio.label} /> {row.portfolio.label}</span></td>
                                <td><span className="Rec-Dashboard-status-item"><img src={row.status.icon} alt={row.status.label} /> {row.status.label}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default RecruiterDashboard
