import React from "react";
import "./DashboardHeader.css";
import bellIcon from "../assets/TCAssets/BellIcon.png";
import Messages from "../assets/TCAssets/Messages.png";
import Search from "../assets/TCAssets/Search.png";
import Profile from "../assets/TCAssets/Trainerprof.png";

const DashboardHeader = ({role,userName}) => {
  return (
    <header className="po-header">
      <div className="po-header-search">
        <img src={Search} alt="Search Icon" className="po-header-search-icon" />
        <input type="text" placeholder="Search companies, drives..." />
      </div>

      <div className="po-header-right">
        <div className="po-header-icon-box" title="Notifications">
          <img src={bellIcon} alt="Notifications" className="po-header-icon" />
        </div>

        <div className="po-header-icon-box" title="Messages">
          <img src={Messages} alt="Messages" className="po-header-icon" />
        </div>

        <div className="po-header-profile">
          <img
            src={Profile}
            alt="Priyanka Profile"
            className="po-header-profile-img"
          />
          <div className="po-header-profile-info">
            <h4 className="po-header-profile-name">{userName}</h4>
            <p className="po-header-profile-role">{role}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;