import React from "react";
import "./DashboardHeader.css";
import bellIcon from "../assets/TCAssets/BellIcon.png";
import Messages from "../assets/TCAssets/Messages.png";
import Search from "../assets/TCAssets/Search.png";
import Profile from "../assets/TCAssets/Trainerprof.png";

const DashboardHeader = ({role,userName}) => {
  return (
    <header className="Dashboard-Header">
      <div className="Dashboard-Header-search">
        <img src={Search} alt="Search Icon" className="Dashboard-Header-search-icon" />
        <input type="text" placeholder="Search companies, drives..." />
      </div>

      <div className="Dashboard-Header-right">
        <div style={{display:"flex",gap:"20px"}}>
        <div className="Dashboard-Header-icon-box" title="Notifications">
          <img src={bellIcon} alt="Notifications" className="Dashboard-Header-icon" />
        </div>

        <div className="Dashboard-Header-icon-box" title="Messages">
          <img src={Messages} alt="Messages" className="Dashboard-Header-icon" />
        </div>
        </div>
        <div className="Dashboard-Header-profile">
          <img
            src={Profile}
            alt="Priyanka Profile"
            className="Dashboard-Header-profile-img"
          />
          <div className="Dashboard-Header-profile-info">
            <h4 className="Dashboard-Header-profile-name">{userName}</h4>
            <p className="Dashboard-Header-profile-role">{role}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;