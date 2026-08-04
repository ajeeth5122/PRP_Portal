import React, { useMemo, useState } from 'react';
import './PlacementOffDashboard.css';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, } from 'recharts';
import AddProfiles from '../assets/POAssets/AddProfiles.png';
import DownArrow from '../assets/POAssets/DownArrow.png';
import LeftArrow from '../assets/POAssets/RightArrow.png';
import MockInterviews from '../assets/POAssets/MockInt.png';
import ScheduleDrive from '../assets/POAssets/ScheduleDrive.png';
import SendNotice from '../assets/POAssets/SendNotice.png';
import InfosysIcon from '../assets/POAssets/Infosys.png';
import TCSIcon from '../assets/POAssets/TCS.png';
import DashboardHeader from '../Resusable-Components/DashboardHeader';
import rightArrow from "../assets/StudentsAssets/Next.png"
const stats = [
  { id: 1, value: '1250', label: 'Total Students', badge: '+12% this month', bg: '#eef2ff', color: '#6366f1' },
  { id: 2, value: '842', label: 'Placed Students', badge: '+67% this month', bg: '#fdf2f8', color: '#ec4899' },
  { id: 3, value: '56', label: 'Companies', badge: '+6', bg: '#f0fdf4', color: '#16a34a' },
  { id: 4, value: '11', label: 'Upcoming Drives', badge: '+4 this month', bg: '#f5f3ff', color: '#8b5cf6' },
]
const pipeline = [
  { id: 1, stage: 'Training Completed', count: '1250' },
  { id: 2, stage: 'Resume Verified', count: '1125' },
  { id: 3, stage: 'Profiles sent', count: '842' },
  { id: 4, stage: 'Interview Scheduled', count: '842' },
]
const todayPriority = [
  'Review 12 resumes',
  'Conduct 8 mock interviews',
  '15 students ready to submit',
  'Interview schedules awaiting',
]
const upcomingDrives = [
  { id: 1, company: 'Infosys', logo: InfosysIcon, dateTime: '25 July 2025 . 10:00 AM', branches: 'B.Tech - CSE,IT,ECE' },
  { id: 2, company: 'TCS', logo: TCSIcon, dateTime: '27 July 2025 . 9:30 AM', branches: 'B.Tech - All Branches' },
  { id: 3, company: 'Accenture', logo: InfosysIcon, dateTime: '25 July 2025 . 11:30 AM', branches: 'B.Tech - CSE, IT' },
]
const quickActions = [
  { id: 1, label: 'Add Profiles', icon: AddProfiles, bg: '#e0e7ff', color: '#3730a3' },
  { id: 2, label: 'Mock Interview', icon: MockInterviews, bg: '#ffedd5', color: '#c2410c' },
  { id: 3, label: 'Schedule Drive', icon: ScheduleDrive, bg: '#dcfce7', color: '#15803d' },
  { id: 4, label: 'Send Notice', icon: SendNotice, bg: '#f3e8ff', color: '#6b21a8' },
]
const topCompanies = [
  { id: 1, name: 'Infosys', count: 124, percentage: '75%' },
  { id: 2, name: 'Zoho', count: 98, percentage: '55%' },
  { id: 3, name: 'Wipro', count: 76, percentage: '40%' },
]
const placementStatsData = [
  { month: 'Jan', applied: 20, offered: 20 },
  { month: 'Feb', applied: 28, offered: 25 },
  { month: 'Mar', applied: 35, offered: 22 },
  { month: 'Apr', applied: 32, offered: 28 },
  { month: 'May', applied: 25, offered: 25 },
  { month: 'Jun', applied: 32, offered: 24 },
  { month: 'Jul', applied: 30, offered: 28 },
  { month: 'Oct', applied: 35, offered: 25 },
  { month: 'Sep', applied: 28, offered: 28 },
  { month: 'Oct', applied: 32, offered: 28 },
  { month: 'Nov', applied: 32, offered: 26 },
  { month: 'Dec', applied: 35, offered: 28 },
]
const departmentWiseData = [
  { name: 'CSE', value: 20, color: '#c084fc' },
  { name: 'ECE', value: 15, color: '#f472b6' },
  { name: 'MECH', value: 10, color: '#6366f1' },
  { name: 'EEE', value: 10, color: '#38bdf8' },
  { name: 'IT', value: 20, color: '#22d3ee' },
]
const recentActivities = [
  { id: 1, text: 'Rahul uploaded new resume', time: '2 min ago' },
  { id: 2, text: 'TCS Campus Drive Created', time: '15 min ago' },
  { id: 3, text: '45 Students registered for Infosys', time: '55 min ago' },
  { id: 4, text: 'Placement report generated', time: '2 hrs ago' },
  { id: 5, text: 'Interview schedule released for TCS drive', time: '11:00 AM' },
  { id: 6, text: 'Interview schedule released for Wipro drive', time: '1 hr ago' },
  { id: 7, text: '35 students registered for TCS', time: '3 hrs ago' },
]

const calendarSchedules = [
  {
    id: 1,
    date: '2026-07-27',
    company: 'Infosys',
    logo: InfosysIcon,
    time: '10:30 AM - 11:30 AM',
    role: 'UI/UX Designer Role',
    students: '18 Students',
    meetingUrl: 'https://meet.google.com',
    meetingPlatform: 'Google Meet',
    status: 'Starts in 1 hour',
    statusColor: '#16a34a',
  },
  {
    id: 2,
    date: '2026-07-26',
    company: 'TCS',
    logo: TCSIcon,
    time: '3:30 AM - 4:30 AM',
    role: 'Data Analyst Role',
    students: '10 Students',
    meetingUrl: 'https://meet.google.com',
    meetingPlatform: 'Google Meet',
    status: 'Starts in 20 mins',
    statusColor: '#dc2626',
  },
  {
    id: 3,
    date: '2026-07-26',
    company: 'TCS',
    logo: TCSIcon,
    time: '3:30 AM - 4:30 AM',
    role: 'Data Analyst Role',
    students: '10 Students',
    meetingUrl: 'https://meet.google.com',
    meetingPlatform: 'Google Meet',
    status: 'Starts in 20 mins',
    statusColor: '#dc2626',
  },
]




const PlacementOfficerDashboard = () => {

  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const filteredSchedules = calendarSchedules.filter((sched) => sched.date === selectedDate);
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());


  const getWeekDays = (baseDate) => {
    const days = [];
    const current = new Date(baseDate);

    const dayOfWeek = current.getDay();
    const distanceToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    current.setDate(current.getDate() + distanceToMonday);

    const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    for (let i = 0; i < 7; i++) {
      const d = new Date(current);
      d.setDate(current.getDate() + i);

      const fullDate = d.toISOString().split('T')[0];
      const dateNum = d.getDate().toString().padStart(2, '0');

      days.push({
        id: fullDate,
        day: dayLabels[i],
        date: dateNum,
        fullDate: fullDate,
        month: d
      });
    }
    return days;
  };

  const calendarDays = useMemo(() => getWeekDays(currentWeekStart), [currentWeekStart]);

  const currentMonthYear = useMemo(() => {
    if (!calendarDays.length) return '';
    const firstDay = calendarDays[0].month;
    const lastDay = calendarDays[6].month;

    const firstMonth = firstDay.toLocaleString('default', { month: 'short' });
    const lastMonth = lastDay.toLocaleString('default', { month: 'short' });
    const year = firstDay.getFullYear();

    if (firstMonth === lastMonth) {
      return `${firstDay.toLocaleString('default', { month: 'long' })} ${year}`;
    }
    return `${firstMonth} - ${lastMonth} ${year}`;
  }, [calendarDays]);


  const handlePrevWeek = () => {
    const prev = new Date(currentWeekStart);
    prev.setDate(prev.getDate() - 7);
    setCurrentWeekStart(prev);
  };

  const handleNextWeek = () => {
    const next = new Date(currentWeekStart);
    next.setDate(next.getDate() + 7);
    setCurrentWeekStart(next);
  };

  const userName = "Joseph Durairaj"
  return (
    <div className="PO-Dashboard-container">
      <DashboardHeader role="placement Officer" userName={userName} />
      <div className="PO-Dashboard-stats-grid">
        {stats.map((stat) => (
          <div className="PO-Dashboard-stat-card" key={stat.id} style={{ backgroundColor: stat.bg }}>
            <h2 className="PO-Dashboard-stat-value">{stat.value}</h2>
            <p className="PO-Dashboard-stat-label">{stat.label}</p>
            <span className="PO-Dashboard-stat-badge" style={{ color: stat.color }}>{stat.badge}</span>
          </div>
        ))}
      </div>

      <div className="PO-Dashboard-row">
        <div className="PO-Dashboard-card pipeline-card">
          <div className='PO-Dashboard-card-Header'>
            <h3 className="PO-Dashboard-card-title">Placement Pipeline</h3>
            <p className="PO-Dashboard-card-subtitle">Student's Placement Journey.</p>
          </div>
          <div className="PO-Dashboard-pipeline-list">
            {pipeline.map((item, idx) => (
              <div key={item.id} className="PO-Dashboard-pipeline-item-wrapper">
                <div className="PO-Dashboard-pipeline-box">
                  <span className="PO-Dashboard-pipeline-stage">{item.stage}</span>
                  <strong className="PO-Dashboard-pipeline-count">{item.count}</strong>
                </div>
                {idx < pipeline.length - 1 && (
                  <div className="PO-Dashboard-pipeline-arrow-box">
                    <img src={DownArrow} alt="down" className="PO-Dashboard-down-arrow-img" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="PO-Dashboard-card priority-card">
          <h3 className="PO-Dashboard-card-title">Today's Priority</h3>
          <div className="PO-Dashboard-priority-list">
            {todayPriority.map((task, idx) => (
              <div className="PO-Dashboard-priority-item" key={idx}>{task}</div>
            ))}
          </div>
          <button className="PO-Dashboard-view-task-btn">
            View Task <img src={LeftArrow} alt="arrow" className="PO-Dashboard-btn-arrow-img" />
          </button>
        </div>
      </div>

      <div className="PO-Dashboard-upcoming-drives">
        <div className="PO-Dashboard-card drives-card">
          <div className="PO-Dashboard-card-header">
            <h3 className="PO-Dashboard-card-title">Upcoming Drives</h3>
            <button className="PO-Dashboard-link-btn">View All</button>
          </div>
          <div className="PO-Dashboard-drives-list">
            {upcomingDrives.map((drive) => (
              <div className='PO-Dashboard-drives-item-Wrapper'>
                <div className="PO-Dashboard-drive-item" key={drive.id}>
                  <div className="PO-Dashboard-company-logo-box">
                    <img src={drive.logo} alt={drive.company} className="PO-Dashboard-drive-logo-img" />
                  </div>
                  <div className="PO-Dashboard-drive-details">
                    <h4>{drive.company}</h4>
                    <p>{drive.dateTime}</p>
                    <span>{drive.branches}</span>
                  </div>
                </div>
                <img src={rightArrow} alt="view" width={8} />
              </div>

            ))}
          </div>
        </div>

        <div className="PO-Dashboard-QuickActions">
          <div className="PO-Dashboard-card quickactions-card">
            <h3 className="PO-Dashboard-card-title">Quick Actions</h3>
            <div className="PO-Dashboard-qa-grid">
              {quickActions.map((qa) => (
                <button key={qa.id} className="PO-Dashboard-qa-btn" style={{ backgroundColor: qa.bg, color: qa.color }}>
                  <img src={qa.icon} alt={qa.label} />
                  <span>{qa.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="PO-Dashboard-card topcompanies-card">
            <h3 className="PO-Dashboard-card-title">Top Recruiting Companies</h3>
            <div className="PO-Dashboard-companies-list">
              {topCompanies.map((comp) => (
                <div className="PO-Dashboard-company-row" key={comp.id}>
                  <div className="PO-Dashboard-company-left">
                    <span className="PO-Dashboard-dot"></span>
                    <span className="PO-Dashboard-company-name">{comp.name}</span>
                  </div>
                  <div className="PO-Dashboard-bar-container">
                    <div className="PO-Dashboard-bar-fill" style={{ width: comp.percentage }}></div>
                  </div>
                  <span className="PO-Dashboard-company-count">{comp.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="PO-Dashboard-BarChart">
        <div className="PO-Dashboard-chart-cards">
          <div className="PO-Dashboard-card-header">
            <h3 className="PO-Dashboard-card-title">Placement Statistics</h3>
            <div className="PO-Dashboard-chart-legend">
              <span className="PO-Dashboard-legend-offered">Offered Students</span>
              <span className="PO-Dashboard-legend-applied">Applied Students</span>
            </div>
          </div>
          <div className="PO-Dashboard-chart-container">
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={placementStatsData} barSize={12}   >
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#334155' }} />
                <YAxis domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#334155' }} />
                <Tooltip cursor={{ fill: 'transparent' }} />
                <Bar dataKey="applied" stackId="a" fill="#8b5cf6" stroke="#ffffff" strokeWidth={2} radius={5} />
                <Bar dataKey="offered" stackId="a" fill="#e9d5ff" stroke="#ffffff" strokeWidth={2} radius={5} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="PO-Dashboard-chart-cards">
          <h3 className="PO-Dashboard-card-title">Department Wise Placement</h3>
          <div className="PO-Dashboard-donut-flex">
            <div className="PO-Dashboard-donut-container">
              <ResponsiveContainer width={180} height={180}>
                <PieChart>
                  <Pie
                    data={departmentWiseData}
                    cx="50%"
                    cy="50%"
                    innerRadius={58}
                    outerRadius={75}
                    paddingAngle={0}
                    dataKey="value"
                    stroke="none"
                  >
                    {departmentWiseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="PO-Dashboard-pie-center-text">
                <strong>1250</strong>
                <span>100%</span>
              </div>
            </div>

            <div className="PO-Dashboard-pie-side-legend">
              {departmentWiseData.map((dept, idx) => (
                <div key={idx} className="PO-Dashboard-pie-legend-row">
                  <div className="PO-Dashboard-pie-legend-left">
                    <span className="PO-Dashboard-pie-dot" style={{ backgroundColor: dept.color }}></span>
                    <span className="PO-Dashboard-dept-name">{dept.name}</span>
                  </div>
                  <span className="PO-Dashboard-dept-val">{dept.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="PO-Dashboard-row">
        <div className="PO-Dashboard-card activities-card">
          <div className="PO-Dashboard-card-header">
            <h3 className="PO-Dashboard-card-title">Recent Activities</h3>
            <button className="PO-Dashboard-link-btn">View All</button>
          </div>
          <div className="PO-Dashboard-activities-list">
            {recentActivities.map((act) => (
              <div className="PO-Dashboard-activity-item" key={act.id}>
                <span className="PO-Dashboard-act-text">{act.text}</span>
                <span className="PO-Dashboard-act-time">{act.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="PO-Dashboard-calendar-card">
          <div className="PO-Dashboard-calendar-header">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <h3 className="PO-Dashboard-card-title">Placement Calendar</h3>
                <span className="PO-Dashboard-month-badge">
                  {currentMonthYear}
                </span>
              </div>
              <p className="PO-Dashboard-card-subtitle">
                Below are the interviews you have scheduled for today.
              </p>
            </div>

            <div className="PO-Dashboard-week-nav">
              <button
                type="button"
                className="PO-Dashboard-nav-btn"
                onClick={handlePrevWeek}
                aria-label="Previous week"
              >
                &#8249;
              </button>
              <button
                type="button"
                className="PO-Dashboard-nav-btn"
                onClick={handleNextWeek}
                aria-label="Next week"
              >
                &#8250;
              </button>
            </div>
          </div>

          <div className="PO-Dashboard-calendar-strip">
            {calendarDays.map((d) => (
              <div
                key={d.id}
                className={`PO-Dashboard-calendar-day ${d.fullDate === selectedDate ? 'PO-Dashboard-day-active' : ''}`}
                onClick={() => setSelectedDate(d.fullDate)}
                style={{ cursor: 'pointer' }}
              >
                <span className="PO-Dashboard-day-label">{d.day}</span>
                <span className="PO-Dashboard-day-date">{d.date}</span>
              </div>
            ))}
          </div>

          <div className="PO-Dashboard-calendar-schedules">
            {filteredSchedules.length > 0 ? (
              filteredSchedules.map((sched) => (
                <div className="PO-Dashboard-sched-column" key={sched.id}>
                  <div className="PO-Dashboard-sched-header">
                    <div className="PO-Dashboard-mini-logo">
                      <img
                        src={sched.logo}
                        alt={sched.company}
                        className="PO-Dashboard-drive-logo-img"
                      />
                    </div>
                    <strong>{sched.company}</strong>
                  </div>

                  <div className="PO-Dashboard-sched-body">
                    <p className="PO-Dashboard-sched-time">{sched.time}</p>
                    <p className="PO-Dashboard-sched-role">{sched.role}</p>
                    <p className="PO-Dashboard-sched-students">{sched.students}</p>

                    <div className="PO-Dashboard-sched-meet">
                      Meeting :{' '}
                      <button
                        type="button"
                        className="PO-Dashboard-meet-link-btn"
                        onClick={() => window.open(sched.meetingUrl, '_blank')}
                      >
                        {sched.meetingPlatform}
                      </button>
                    </div>

                    <p
                      className="PO-Dashboard-sched-status-text"
                      style={{ color: sched.statusColor }}
                    >
                      {sched.status}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="PO-Dashboard-no-schedules">
                <p>No scheduled tasks for this date.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementOfficerDashboard;
