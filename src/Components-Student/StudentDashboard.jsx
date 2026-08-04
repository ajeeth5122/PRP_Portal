import {PieChart,Pie,Cell,ResponsiveContainer,} from "recharts";
import "./StudentDashboard.css";
import caution_icon from "../assets/StudentsAssets/caution_icon.png"
import calendar_icon from "../assets/StudentsAssets/calendar_icon.png"
import profile_strength_icon from "../assets/StudentsAssets/Profile_Strength.png"
import total_app_icon from "../assets/StudentsAssets/Total_app_icon.png"
import google_icon from "../assets/TCAssets/Trainerprof.png"
import stripe_icon from "../assets/TCAssets/Trainerprof.png"
import right_arrow from "../assets/StudentsAssets/Next.png"
import left_arrow_icon from "../assets/StudentsAssets/left_arrow_icon.png"
import rig_arrow_icon from "../assets/StudentsAssets/rig_arrow_icon.png"
import figmaLogo from "../assets/TCAssets/Trainerprof.png"
import vercelLogo from "../assets/TCAssets/Trainerprof.png"
import bookmark_icon from "../assets/StudentsAssets/bookmark_icon.png"
import add_icon from "../assets/StudentsAssets/Add_icon.png"
import clock_icon from "../assets/StudentsAssets/clock_icon.png"
import video_icon from "../assets/StudentsAssets/video_icon.png"
import team_icon from "../assets/StudentsAssets/team_icon.png"
import job_icon from "../assets/StudentsAssets/job-icon.png"
import job_icon2 from "../assets/StudentsAssets/job_icon2.png"
import red_dot_icon from "../assets/StudentsAssets/red_dot.png"
import black_dot_icon from "../assets/StudentsAssets/black_dot.png"
import salary_icon from "../assets/StudentsAssets/salary.png"
import calender from "../assets/StudentsAssets/calendar.png"
import location_icon from "../assets/StudentsAssets/location_icon.png"
import stock_options_icon from "../assets/StudentsAssets/team_icon.png"
import benefits_icon from "../assets/StudentsAssets/benefits.png"
import resume_icon from "../assets/StudentsAssets/resume.png";
import assessment_icon from "../assets/StudentsAssets/assessment.png";
import interview_icon from "../assets/StudentsAssets/interview.png";
import workshop_icon from "../assets/StudentsAssets/workshop.png";
import { useState } from "react";
 
const StudentDashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const applications = [
    {
      company: "Google",
      role: "Software Engineer Intern",
      status: "Under Review",
      img: google_icon,
    },
    {
      company: "Stripe",
      role: "UI Designer",
      status: "Interview Scheduled",
      img: stripe_icon,
    },
  ];
 
  const recommendedJobs = [
  {
    title: "Product Designer",
    company: "Figma",
    logo: figmaLogo,
    location: "San Francisco, CA",
    type: "(Remote)",
    skills: ["Figma", "UI/UX", "Design"],
  },
  {
    title: "Frontend Engineer",
    company: "Vercel",
    logo: vercelLogo,
    location: "New York, NY",
    type: "",
    skills: ["React", "Tailwind", "Next.js"],
  },
  {
    title: "Backend Developer",
    company: "Supabase",
    logo: figmaLogo,
    location: "Austin, TX",
    type: "(Remote)",
    skills: ["Node.js", "PostgreSQL", "Go"],
  },
  {
    title: "Fullstack Engineer",
    company: "Stripe",
    logo: figmaLogo,
    location: "Seattle, WA",
    type: "(Hybrid)",
    skills: ["TypeScript", "React", "Ruby"],
  },
];

    const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % recommendedJobs.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? recommendedJobs.length - 1 : prevIndex - 1
    );
  };

  const visibleJobs = [
    recommendedJobs[currentIndex],
    recommendedJobs[(currentIndex + 1) % recommendedJobs.length],
  ];
 
  const upcomingTasks = [
    {
      date: "24 OCT",
      title: "Stripe Interview",
      time: "10:00 AM - 11:00 AM",
      note: "Review design portfolio and case studies on payment flows.",
      icon: clock_icon,
    },
    {
      date: "26 OCT",
      title: "Mock Session",
      time: "03:30 PM",
      note: "With Career Coach: Sarah M.",
      icon: video_icon,
    },
    {
      date: "30 OCT",
      title: "Tech Workshop",
      time: "01:00 PM",
      note: "Mastering System Design",
      icon: team_icon,
    },
  ];
 
  const offerJobs = [
    {
      title: "Staff Engineer",
      company: "NexGen Fintech Solutions",
      salary: "$165,000 /yr",
      joiningDate: "Nov 12, 2024",
      location: "Remote (Global)",
      stock: "0.05% Equity",
      expires: 2,
      img: job_icon,
      icon: red_dot_icon,
      benefits: stock_options_icon,
    },
 
    {
      title: "UX Strategy Lead",
      company: "Lumina Digital Agency",
      salary: "$142,000 /yr",
      joiningDate: "Jan 05, 2025",
      location: "New York, NY",
      stock: "Full Coverage",
      expires: 6,
      img: job_icon2,
      icon: black_dot_icon,
      benefits: benefits_icon,
    },
  ];
  const chartData = [
    {
      name: "Applied",
      value: 8,
      color: "#FDBA8C",
    },
    {
      name: "Shortlisted",
      value: 4,
      color: "#A855F7",
    },
    {
      name: "Interview",
      value: 2,
      color: "#33C3F0",
    },
    {
      name: "Selected",
      value: 1,
      color: "#9B8AF7",
    },
  ];
 
 
  const todaysTasks = [
    {
      icon: resume_icon,
      text: "Update Resume",
    },
    {
      icon: assessment_icon,
      text: "Complete Assessment",
    },
    {
      icon: interview_icon,
      text: "Attend mock interview",
    },
    {
      icon: workshop_icon,
      text: "Join Workshop",
    },
  ];
 
  return (
    <div className="student-dashboard-main-container">
      <div className="student-dashboard-welcome-section">
        <h1 className="student-dashboard-heading">
          Welcome Back, <span>Alex</span>!
        </h1>
        <p className="student-dashboard-sub-heading">
          <img src={caution_icon} alt="" className="student-dashboard-caution-icon" /> You have 2 application updates today.
        </p>
      </div>
      <div className="student-dashboard-stats-container">
        <div className="student-dashboard-stat-card student-dashboard-orange-card">
          <div className="student-dashboard-card-header">
            <div className="student-dashboard-card-icon-container">
              <img src={total_app_icon} alt="icon" className="student-dashboard-card-icon" />
            </div>
            <div className="student-dashboard-card-badge">
              +3 this week
            </div>
          </div>
          <div className="student-dashboard-card-content">
            <h2>12</h2>
            <p>Total Applications</p>
          </div>
        </div>
        <div className="student-dashboard-stat-card student-dashboard-purple-card">
          <div className="student-dashboard-card-header">
            <div className="student-dashboard-card-icon-container">
              <img src={calendar_icon} alt="icon" className="student-dashboard-card-icon" />
            </div>
            <div className="student-dashboard-card-badge_2">
              Next: 2pm
            </div>
          </div>
          <div className="student-dashboard-card-content">
            <h2>03</h2>
            <p>Scheduled Interviews</p>
          </div>
        </div>
        <div className="student-dashboard-stat-card student-dashboard-blue-card">
          <div className="student-dashboard-card-header">
            <div className="student-dashboard-card-icon-container">
              <img src={profile_strength_icon} alt="icon" className="student-dashboard-card-icon" />
            </div>
            <div className="student-dashboard-card-complete-text">
              85% Complete
            </div>
          </div>
          <div className="student-dashboard-card-content">
            <div className="student-dashboard-progress-bar">
              <div className="student-dashboard-progress-fill"></div>
            </div>
            <p>Profile Strength</p>
          </div>
        </div>
      </div>
      <div className="student-dashboard-middle-container">
        <div className="student-dashboard-left-column">
          <div className="student-dashboard-application-container">
            <div className="student-dashboard-application-header">
              <h2>Application Status</h2>
              <button>View All</button>
            </div>
            {applications.map((application, index) => (
              <div
                className="student-dashboard-application-card"
                key={index}
              >
                <div className="student-dashboard-application-left">
                  <div className="student-dashboard-company-logo">
                    <img src={application.img} alt={application.company} />
                  </div>
                  <div className="student-dashboard-company-details">
                    <h3>{application.company}</h3>
                    <p>{application.role}</p>
                  </div>
                </div>
                <div className="student-dashboard-application-right">
                  <div
                    className={`student-dashboard-status-badge ${application.status === "Under Review"
                      ? "student-dashboard-review"
                      : "student-dashboard-interview"
                      }`}
                  >
                    {application.status}
                  </div>
                  <small>
                    {application.status === "Under Review"
                      ? "Updated 2h ago"
                      : "Tomorrow, 10:00 AM"}
                  </small>
                </div>
                <div className="student-dashboard-arrow">
                  <img src={right_arrow} alt="" width={10} />
                </div>
              </div>
            ))}
          </div>
          <div className="student-dashboard-recommended-container">
            <div className="student-dashboard-recommended-header">
              <h2>Recommended For You</h2>
              <div className="student-dashboard-recommended-navigation">
                <button className="student-dashboard-nav-button" onClick={handlePrev}>
                  <img src={left_arrow_icon} alt="" width={15} />
                </button>
                <button className="student-dashboard-nav-button" onClick={handleNext}>
                  <img src={rig_arrow_icon} alt="" width={15} />
                </button>
              </div>
            </div>
            <div className="student-dashboard-recommended-job-grid">
              {visibleJobs.map((job, index) => (
                <div
                  className="student-dashboard-recommended-job-card"
                  key={index} >
                  <div className="student-dashboard-recommended-job-top">
                    <div className="student-dashboard-recommended-company-logo">
                      <img src={job.logo} alt={job.company} />
                    </div>
                    
                      <img src={bookmark_icon} alt="" width={15} />
                    
                  </div>
                  <div className="student-dashboard-recommended-job-det">
                  <h3>{job.title}</h3>
                  <p className="student-dashboard-company-location">
                    {job.company} .{job.location}
                  </p>
                  <p className="student-dashboard-job-type">{job.type? job.type : "Not mentioned"}</p>
                  </div>
                  <div className="student-dashboard-skill-container">
                    {job.skills.map((skill, index) => (
                      <span className="student-dashboard-skill-chip" key={index}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="student-dashboard-right-column">
          <div className="student-dashboard-upcoming-task-container">
            <div className="student-dashboard-upcoming-task-header">
              <h2>Upcoming Tasks</h2>
              <img src={add_icon} alt="" className="" />
            </div>
            {upcomingTasks.map((task, index) => (
              <div className="student-dashboard-task-card" key={index}>
                <div className="student-dashboard-task-left">
                  <div className="student-dashboard-task-date-box">
                    <span>{task.date.split(" ")[0]}</span>
                    <small>{task.date.split(" ")[1]}</small>
                  </div>
                  {index !== upcomingTasks.length - 1 && (
                    <div className="student-dashboard-task-line"></div>
                  )}
                </div>
                <div className="student-dashboard-task-right">
                  <h3>{task.title}</h3>
                  <p className="student-dashboard-task-time">
                    <img src={task.icon} alt="duration" width={10} /> {task.time}
                  </p>
                  {index === 0 ? (
                    <div className="student-dashboard-task-note">
                      {task.note}
                    </div>
                  ) : (
                    <small>
                      {task.note}
                    </small>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="student-dashboard-offer-container">
        {offerJobs.map((job, index) => (
          <div className="student-dashboard-offer-card" key={index}>
            <div className="student-dashboard-offer-top">
                <img src={job.img} alt=""  className="student-dashboard-offer-logo-img"/>
              <div className="student-dashboard-offer-title">
                <h3>{job.title}</h3>
                <p>{job.company}</p>
              </div>
              <div className="student-dashboard-expire-badge">
                <img src={job.expires > 2 ? black_dot_icon : red_dot_icon} alt="" width={8}/> Expires in {job.expires} days
              </div>
            </div>
            <hr />
            <div className="student-dashboard-offer-details">
              <div className="student-dashboard-offer-item">
                  
                  <img src={salary_icon} alt="Salary" className="student-dashboard-offer-detail-icon" />
                  
                  <div className="student-dashboard-offer-label">
                  <span>Salary</span>
                  <h4 className="student-dashboard-offer-value">
                  {job.salary}
                </h4>
                </div>
                
              </div>
 
              <div className="student-dashboard-offer-item">
                
                  <img
                    src={calender}
                    alt="Joining Date"
                    className="student-dashboard-offer-detail-icon"
                  />
                  <div className="student-dashboard-offer-label">
                  <span>Joining Date</span>
                
                <h4 className="student-dashboard-offer-value">
                  {job.joiningDate}
                </h4>
                </div>
              </div>
 
              <div className="student-dashboard-offer-item">
                
                  <img src={location_icon} alt="Location" className="student-dashboard-offer-detail-icon" />
                  <div className="student-dashboard-offer-label">
                  <span>Location</span>
                
                <h4 className="student-dashboard-offer-value">
                  {job.location}
                </h4>
                </div>
              </div>
              <div className="student-dashboard-offer-item">
                
                  <img src={job.benefits} alt="Benefits" className="student-dashboard-offer-detail-icon" />
                  <div className="student-dashboard-offer-label">
                  <span>Benefits</span>
                
                <h4 className="student-dashboard-offer-value">
                  {job.stock}
                </h4>
                </div>
              </div>
            </div>
            <div className="student-dashboard-offer-buttons">
              <button className="student-dashboard-accept-btn">
                Accept Offer
              </button>
              <button className="student-dashboard-decline-btn">
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="student-dashboard-bottom-section">
        <div className="student-dashboard-status-card">
          <h2>Application Status</h2>
          <div className="student-dashboard-status-body">
            <div className="student-dashboard-chart">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={74}
                    paddingAngle={3}
                    cornerRadius={14}
                    startAngle={90}
                    endAngle={-270}
                    stroke="none"
                  >
                    {chartData.map((item, index) => (
                      <Cell
                        key={index}
                        fill={item.color}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="student-dashboard-chart-text">
                100%
              </div>
            </div>
            <div className="student-dashboard-chart-legend">
              {chartData.map((item, index) => (
                <div  key={index} className="student-dashboard-legend-item">
                  <span
                    className="student-dashboard-dot"
                    style={{
                      background: item.color,
                    }}
                  />
                  <p>  {item.name} - {item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="student-dashboard-task-list-card">
          <div className="student-dashboard-task-header">
            <h2>Today's Tasks</h2>
            <button>View All Tasks</button>
          </div>
          <div className="student-dashboard-task-list">
          {todaysTasks.map((task, index) => (
            <div key={index} className="student-dashboard-task-row"  >
              <img src={task.icon} alt={task.text}/>
              <span>{task.text}</span>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default StudentDashboard;
 