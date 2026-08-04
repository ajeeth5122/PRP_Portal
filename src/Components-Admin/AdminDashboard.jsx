import React from "react"
import TotPlacements from "../assets/AdminAssets/TotPlacements.png"
import ActStudent from "../assets/AdminAssets/ActStudent.png"
import VerifiedRec from "../assets/AdminAssets/VerifiedRec.png"
import PartnerComps from "../assets/AdminAssets/PartnerComps.png"
import Stock from "../assets/AdminAssets/Stock.png"
import ReviewIcon from "../assets/AdminAssets/ReviewIcon.png"
import PendingReview from "../assets/AdminAssets/PendingReview.png"
import StableGrowth from "../assets/AdminAssets/StableGrowth.png"
import NewRwg from "../assets/AdminAssets/NewRwg.png"
import CompanyDocs from "../assets/AdminAssets/CompanyDocs.png"
import RecruiterVerify from "../assets/AdminAssets/RecruiterVerify.png"
import SecurityProtect from "../assets/AdminAssets/SecurityProtect.png"
import LoginFailed from "../assets/AdminAssets/LoginFailed.png"
import FilterIcon from "../assets/AdminAssets/FilterIcon.png"
import SortIcon from "../assets/AdminAssets/SortIcon.png"
import Threedots from "../assets/AdminAssets/ThreeDots.png"
import Profile from "../assets/TCAssets/Trainerprof.png";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar, Cell } from "recharts"
import "./AdminDashboard.css";

const AdminDashboard = () => {
    const placementData = [
        { month: "Jan", placements: 22 },
        { month: "Feb", placements: 34 },
        { month: "Mar", placements: 28 },
        { month: "Apr", placements: 47 },
        { month: "May", placements: 39 },
        { month: "Jun", placements: 58 },
    ];
    return (
        <div className="admin-dashboard-main">
            <div className="admin-dashboard-stats">
                <div className="admin-dashboard-stat-card">
                    <div className="admin-dashboard-stat-header">
                        <p className="admin-dashboard-stat-title"> TOTAL PLACEMENTS</p>
                        <img src={TotPlacements} alt="" className="admin-dashboard-stat-icon" />
                    </div>
                    <h2 className="admin-dashboard-stat-value">4,120</h2>
                    <div className="admin-dashboard-stat-footer">
                        <img src={Stock} alt="" className="admin-dashboard-stat-footer-icon" />
                        <span className="admin-dashboard-stat-footer-green"> 82% of Annual Goal</span>
                    </div>
                </div>
                <div className="admin-dashboard-stat-card">
                    <div className="admin-dashboard-stat-header">
                        <p className="admin-dashboard-stat-title">ACTIVE STUDENTS</p>
                        <img src={ActStudent} alt="" className="admin-dashboard-stat-icon" />
                    </div>
                    <h2 className="admin-dashboard-stat-value"> 12,482 </h2>
                    <div className="admin-dashboard-stat-footer">
                        <img src={ReviewIcon} alt="" className="admin-dashboard-stat-footer-icon" />
                        <span className="admin-dashboard-stat-footer-purple"> +12% vs last month </span>
                    </div>
                </div>
                <div className="admin-dashboard-stat-card">
                    <div className="admin-dashboard-stat-header">
                        <p className="admin-dashboard-stat-title">VERIFIED RECRUITERS </p>
                        <img src={VerifiedRec} alt="" className="admin-dashboard-stat-icon" />
                    </div>
                    <h2 className="admin-dashboard-stat-value"> 3,142</h2>
                    <div className="admin-dashboard-stat-footer">
                        <img src={PendingReview} alt="" className="admin-dashboard-stat-footer-icon"
                        />
                        <span className="admin-dashboard-stat-footer-orange">  14 pending review </span>
                    </div>
                </div>
                <div className="admin-dashboard-stat-card">
                    <div className="admin-dashboard-stat-header">
                        <p className="admin-dashboard-stat-title">  PARTNER COMPANIES </p>
                        <img src={PartnerComps} alt="" className="admin-dashboard-stat-icon" />
                    </div>
                    <h2 className="admin-dashboard-stat-value">312</h2>
                    <div className="admin-dashboard-stat-footer">
                        <img src={StableGrowth} alt="" className="admin-dashboard-stat-footer-icon" />
                        <span className="admin-dashboard-stat-footer-gray">Stable Growth</span>
                    </div>
                </div>
            </div>
            <div className="admin-dashboard-middle-section">
                <div className="admin-dashboard-chart-card">
                    <div className="admin-dashboard-chart-header">
                        <div>
                            <h2 className="admin-dashboard-chart-title"> Placement Performance</h2>
                            <p className="admin-dashboard-chart-subtitle"> Monthly placement success trends </p>
                        </div>
                        <div className="admin-dashboard-chart-legend">
                            <span className="admin-dashboard-chart-legend-dot"></span>
                            <span className="admin-dashboard-chart-legend-text"> Placements</span>
                        </div>
                    </div>
                    <div className="admin-dashboard-chart-wrapper">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={placementData}
                                barCategoryGap="10%" >
                                <XAxis
                                    dataKey="month"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{
                                        fill: "#5E5E5E",
                                        fontSize: 15,
                                        fontWeight: 500,
                                    }} />
                                <YAxis hide />
                                <Tooltip
                                    cursor={{
                                        fill: "rgba(120,120,120,.12)",
                                    }}
                                    contentStyle={{
                                        borderRadius: "10px",
                                        border: "1px solid #E5E5E5",
                                        background: "#fff",
                                        boxShadow: "0 4px 12px rgba(0,0,0,.12)",
                                    }}
                                    formatter={(value) => [`${value}`, "Placements"]} />
                                <Bar
                                    dataKey="placements"
                                    radius={[10, 10, 0, 0]}
                                    maxBarSize={35
                                    } >
                                    {placementData.map((item, index) => (
                                        <Cell
                                            key={index}
                                            fill={
                                                index === placementData.length - 1
                                                    ? "#8655D9"
                                                    : "#D8CFF1"
                                            } />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="admin-dashboard-activity-card">
                    <h2 className="admin-dashboard-activity-title"> Admin Activity Log</h2>
                    <div className="admin-dashboard-activity-list">
                        <div className="admin-dashboard-activity-item">
                            <img src={NewRwg} alt="" className="admin-dashboard-activity-icon" />
                            <div>
                                <h4 className="admin-dashboard-activity-heading">New User Registration</h4>
                                <p className="admin-dashboard-activity-subtitle">Alex Morgan <span className="admin-dashboard-activity-dot"></span> 2 mins ago</p>
                            </div>
                        </div>
                        <div className="admin-dashboard-activity-item">
                            <img src={CompanyDocs} alt="" className="admin-dashboard-activity-icon" />
                            <div>
                                <h4 className="admin-dashboard-activity-heading">Company Document Uploaded</h4>
                                <p className="admin-dashboard-activity-subtitle">Nexus Dynamics <span className="admin-dashboard-activity-dot"></span> 45 mins ago</p>
                            </div>
                        </div>
                        <div className="admin-dashboard-activity-item">
                            <img src={RecruiterVerify} alt="" className="admin-dashboard-activity-icon" />
                            <div>
                                <h4 className="admin-dashboard-activity-heading">Recruiter Verified</h4>
                                <p className="admin-dashboard-activity-subtitle"> Global Tech <span className="admin-dashboard-activity-dot"></span> 3 hrs ago</p>
                            </div>
                        </div>
                        <div className="admin-dashboard-activity-item">
                            <img src={SecurityProtect} alt="" className="admin-dashboard-activity-icon" />
                            <div>
                                <h4 className="admin-dashboard-activity-heading"> Security Policy Updated </h4>
                                <p className="admin-dashboard-activity-subtitle">  Applied globally <span className="admin-dashboard-activity-dot"></span> 5 hrs ago</p>
                            </div>
                        </div>
                        <div className="admin-dashboard-activity-item">
                            <img src={LoginFailed} alt="" className="admin-dashboard-activity-icon" />
                            <div>
                                <h4 className="admin-dashboard-activity-heading">  Failed Login Attempt</h4>
                                <p className="admin-dashboard-activity-subtitle">
                                    IP:192.168.1.45 <span className="admin-dashboard-activity-dot"></span> 8 hrs ago
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="admin-dashboard-activity-footer"> View Full History </p>
                </div>
            </div>
            <div className="admin-dashboard-table-card">
                <div className="admin-dashboard-table-header">
                    <h2 className="admin-dashboard-table-title">  User Management & Recent Activity</h2>
                    <div className="admin-dashboard-table-actions">
                        <div className="admin-dashboard-filter">
                            <img src={FilterIcon} alt="filter" className="admin-dashboard-table-icon" />
                            <span>Filter</span>
                        </div>
                        <div className="admin-dashboard-sort">
                            <img src={SortIcon} alt="sort" className="admin-dashboard-table-icon" />
                            <span>Sort</span>
                        </div>
                    </div>
                </div>
                <table className="admin-dashboard-table">
                    <thead>
                        <tr>
                            <th>USER</th>
                            <th>ROLE</th>
                            <th>ACTIVITY</th>
                            <th>TIMESTAMP</th>
                            <th>ACTIONS</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="admin-dashboard-user">
                                    <img src={Profile} alt="Sarah" className="admin-dashboard-user-avatar" />
                                    <div className="admin-dashboard-user-info">
                                        <h4>Sarah K. Jenkins</h4>
                                        <p>sarah.j@globalhr.com</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="admin-dashboard-role-badge recruiter">RECRUITER</span>
                            </td>
                            <td> Published "Senior AI <br /> Architect" role </td>
                            <td> 2 mins ago</td>
                            <td>
                                <div className="admin-dashboard-action">
                                    <img src={Threedots} alt="More" width={5} height={20} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="admin-dashboard-user">
                                    <img src={Profile} alt="David" className="admin-dashboard-user-avatar" />
                                    <div className="admin-dashboard-user-info">
                                        <h4>David Lee</h4>
                                        <p>d.lee@candidate.me</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="admin-dashboard-role-badge candidate"> CANDIDATE </span>
                            </td>
                            <td>  Submitted portfolio via AI <br /> matching </td>
                            <td>1 hour ago </td>
                            <td>
                                <div className="admin-dashboard-action">
                                    <img src={Threedots} alt="More" width={5} height={20} />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminDashboard