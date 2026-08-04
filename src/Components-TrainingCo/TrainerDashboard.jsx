import React from 'react';
import batchImg from "../assets/TCAssets/batch.png";
import trainerImg from "../assets/TCAssets/trainer.png";
import sessionImg from "../assets/TCAssets/session.png";
import assessmentImg from "../assets/TCAssets/assessment.png";
import Profile from "../assets/TCAssets/Trainerprof.png";
import leaveIcon from "../assets/TCAssets/LeaveApproval.png";
import assessmentIcon from "../assets/TCAssets/Assessment Req.png";
import certificateIcon from "../assets/TCAssets/CertificateReq.png";
import transferIcon from "../assets/TCAssets/CourseReq.png";
import ReadinessChart from './ReadinessChart';
import fullstackicon from "../assets/TCAssets/Fullstack.png";
import pythonicon from "../assets/TCAssets/Python.png";
import dataanalyticsicon from "../assets/TCAssets/DataAnalytics.png";
import uiuxicon from "../assets/TCAssets/UIUX.png";
import javaicon from "../assets/TCAssets/Java.png";
import AttendenceChart from './AttendenceChart';
import DashboardHeader from '../Resusable-Components/DashboardHeader';
import Footer from '../Components-LandingPage/Footer';
import './TrainerDashboard.css';

const TrainerDashboard = () => {

  const stats = [
    { number: "1250", title: "Active Batches", growth: "+12%", period: "vs last month", color: "db-card-blue" },
    { number: "462", title: "Total Enrollments", growth: "+11%", period: "this month", color: "db-card-pink" },
    { number: "199", title: "Certificates Issued", growth: "+18%", period: "vs last month", color: "db-card-green" },
    { number: "35", title: "Upcoming Sessions", growth: "+15%", period: "vs last month", color: "db-card-purple" },
  ];


  const quickActions = [
    { id: 1, title: "Create New Batch", image: batchImg, bg: "db-action-red" },
    { id: 2, title: "Assign Trainer", image: trainerImg, bg: "db-action-green" },
    { id: 3, title: "Schedule Session", image: sessionImg, bg: "db-action-gray" },
    { id: 4, title: "Create Assessment", image: assessmentImg, bg: "db-action-blue" },
  ];

  const sessions = [
    { id: 1, time: "10:00", period: "AM", title: "Full Stack", location: "FS-DP-07. Lab 1, Block A", status: "Scheduled" },
    { id: 2, time: "11:30", period: "AM", title: "Python Programming", location: "PY-08. Lab 2, Block B", status: "In-Progress" },
    { id: 3, time: "02:00", period: "PM", title: "UI/UX Design", location: "UIUX-06. Design Studio", status: "Scheduled" },
    { id: 4, time: "04:30", period: "AM", title: "Trainer Meeting", location: "Conference Room", status: "Meeting" },
  ];

  const trainers = [
    { id: 1, name: 'Sam Son', role: 'Full Stack', image: Profile, status: 'Available', statusClass: 'trainerAvailability-badge--available' },
    { id: 2, name: 'David', role: 'Python', image: Profile, status: 'In Session', statusClass: 'trainerAvailability-badge--inSession' },
    { id: 3, name: 'Sneha', role: 'Data Analytics', image: Profile, status: 'On Leave', statusClass: 'trainerAvailability-badge--onLeave' },
    { id: 4, name: 'Angel', role: 'UI/UX', image: Profile, status: 'Available', statusClass: 'trainerAvailability-badge--available' },
  ];

  const activities = [
    { id: 1, text: 'New batch "D-12" has been created.', date: "July 20 · 09:30 AM" },
    { id: 2, text: 'Assessment "Java test published."', date: "July 15 · 10:30 AM" },
    { id: 3, text: 'Session completed for "UI/UX laws".', date: "July 06 · 04:30 AM" },
    { id: 4, text: "Certificate issued to 12 students.", date: "July 10 · 03:30 AM" },
    { id: 5, text: 'New batch "UI-08" has been created.', date: "July 11 · 09:30 AM" },
  ];

  const approvals = [
    { id: 1, title: "Leave Request", countText: "8 Requests", icon: leaveIcon },
    { id: 2, title: "Assessment Evaluation", countText: "15 Pending", icon: assessmentIcon },
    { id: 3, title: "Certificate Requests", countText: "6 Requests", icon: certificateIcon },
    { id: 4, title: "Course Transfer", countText: "3 Requests", icon: transferIcon },
  ];

  const trainingData = [
    { id: 1, title: 'Full Stack', code: 'FS-DP-07', percent: 90, completed: 320, total: 356, image: fullstackicon },
    { id: 2, title: 'Python', code: 'PY-08', percent: 81, completed: 286, total: 300, image: pythonicon },
    { id: 3, title: 'Data Analytics', code: 'DA-05', percent: 58, completed: 145, total: 248, image: dataanalyticsicon },
    { id: 4, title: 'UI/UX', code: 'UI-09', percent: 94, completed: 210, total: 223, image: uiuxicon },
    { id: 5, title: 'Java', code: 'JD-04', percent: 72, completed: 321, total: 445, image: javaicon },
  ]

  const userName = "Naveen Chand"
  return (
    <>
      
      <div className='Tc-Dashboard-Container'>
        <DashboardHeader role={"Training Coordinator"} userName={userName} />
        <div className="db-top-cards">
          {stats.map((item, index) => (
            <div key={index} className={`db-stat-card ${item.color}`}>
              <h2 className='TC-dashboard-Stat-Title'>{item.number}</h2>
              <p className='TC-dashboard-Stat-desc'>
                {item.title} <br />
                <span>{item.growth}</span> {item.period}
              </p>
            </div>
          ))}
        </div>

        <div className='Tc-Dashboard-Row2'>
          <div className='trainerAvailability-card'>
            <h4 className="trainerAvailability-title">Quick Actions</h4>
            <div className='Tc-Dashboard-Qck-Actions'>
              {quickActions.map((action) => (
                <div key={action.id} className={`TC-Qck-Actions-wrapper ${action.bg}`}>
                  <img src={action.image} alt={action.title} width={30} />
                  <p className='TC-Qck-Action-Title'>{action.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='trainerAvailability-card'>
            <h4 className="trainerAvailability-title">Upcoming Sessions</h4>
            {sessions.map((ses) => (
              <div key={ses.id} className='Tc-Upcoming-Sec-Wrapper'>
                <div className='Tc-Upcoming-Sec-container'>
                  <div className='Tc-Upcoming-Sec-timer'>
                    <p className='TC-Upcomingsec-Time'>
                      {ses.time}<br />
                      <span className='TC-Upcomingsec-period'>{ses.period}</span>
                    </p>
                  </div>
                  <div className='TC-Upcomingsec-Details'>
                    <h4 className='TC-Upcomingsec-title'>{ses.title}</h4>
                    <p className='TC-Upcomingsec-desc'>{ses.location}</p>
                  </div>
                </div>
                <div className={`TC-Upcomingsec-Status-cont ${ses.status}`}>
                  <p className='TC-Upcomingsec-Status'>{ses.status}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="trainerAvailability-card">
            <div className="trainerAvailability-header">
              <h4 className="trainerAvailability-title">Trainer Availability</h4>
              <div className="trainerAvailability-viewAll">View All</div>
            </div>
            <div className="trainerAvailability-list">
              {trainers.map((trainer) => (
                <div className="trainerAvailability-row" key={trainer.id}>
                  <div className="trainerAvailability-profile">
                    <img src={trainer.image} alt={trainer.name} width={40} className="trainerAvailability-avatar" />
                    <div className="trainerAvailability-info">
                      <h2 className="trainerAvailability-name">{trainer.name}</h2>
                      <h2 className="trainerAvailability-role">{trainer.role}</h2>
                    </div>
                  </div>
                  <div className={`trainerAvailability-badge ${trainer.statusClass}`}>
                    {trainer.status}
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className='trainerAvailability-card'>
            <h4 className="trainerAvailability-title">Student Readiness for Placement</h4>
            <div className='Tc-Dashboard-chart'>
              <ReadinessChart />
            </div>
          </div>

          <div className='trainerAvailability-card'>
            <div className="trainerAvailability-header">
              <h4 className="trainerAvailability-title">Recent Activities</h4>
              <p className="trainerAvailability-viewAll">View All</p>
            </div>
            <div className="dashboardActivityList">
              {activities.map((item) => (
                <div key={item.id} className='TC-Activity-List'>
                  <div className='TC-Activity-Row'>
                    <span className="dashboardDot"></span>
                    <p className="dashboardActivityText">{item.text}</p>
                  </div>
                  <div className='Tc-Activity-Time-Cont'>
                    <p className="dashboardActivity-Time">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className='trainerAvailability-card'>
            <div className="trainerAvailability-header">
              <h4 className="trainerAvailability-title">Pending Approvals</h4>
              <p className="trainerAvailability-viewAll">View All</p>
            </div>
            <div className="dashboardApprovalList">
              {approvals.map((item) => (
                <div key={item.id} className='TC-Pending-Approvals'>
                  <div className='TC-Pending-Approvals-Title-cont'>
                    <img className='TC-Pending-Approvals-Icons' src={item.icon} alt={item.title} />
                    <p className="TC-Pending-Approvals-Title">{item.title}</p>
                  </div>
                  <p className="dashboardApprovalButton">{item.countText}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='trainerAvailability-card'>
            <div className="trainerAvailability-header">
              <h4 className="trainerAvailability-title">Training Progress Overview</h4>
              <p className="trainerAvailability-viewAll">View All</p>
            </div>

            <div className="TC-training-list">
              {trainingData.map((item) => (
                <div className="TC-training-row" key={item.id}>
                  <div className='Tc-Trainig-Details-cont'>
                    <img src={item.image} alt={item.title} className="TC-training-icon" />
                    <div className="TC-training-title-block">
                      <p className="dashboardActivityText">{item.title}</p>
                      <span>{item.code}</span>
                    </div>
                  </div>

                  <div className="TC-training-progress-bar" aria-hidden="true">
                    {Array.from({ length: 20 }).map((_, i) => {
                      const filled = i < Math.round((item.percent / 100) * 20)
                      return (
                        <span
                          key={i}
                          className={filled ? 'bar-segment filled' : 'bar-segment'}
                        />
                      )
                    })}
                  </div>
                  <div className='TC-Traing-percent-Details'>
                    <div className="TC-training-percent">{item.percent}%</div>

                    <div className="TC-training-students">
                      {item.completed}/{item.total}
                      <br />
                      Students
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='trainerAvailability-card'>
            <div className="trainerAvailability-header">
              <h4 className="trainerAvailability-title">Today’s Attendance</h4>
            </div>
            <AttendenceChart />
          </div>
        </div>
      </div>
       
    </>
  );
};

export default TrainerDashboard;