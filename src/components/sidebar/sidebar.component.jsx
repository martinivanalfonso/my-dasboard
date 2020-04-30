import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./sidebar.styles.scss";

import PersonIcon from "@material-ui/icons/Person";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import PermDataSettingIcon from "@material-ui/icons/PermDataSetting";
import CardTravelIcon from "@material-ui/icons/CardTravel";
import PolymerIcon from "@material-ui/icons/Polymer";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import SettingsInputComponentIcon from "@material-ui/icons/SettingsInputComponent";
import SettingsBrightnessIcon from "@material-ui/icons/SettingsBrightness";
import MenuIcon from "@material-ui/icons/Menu";

const Sidebar = () => {
  const sidebarRef = useRef();
  const handleToggle = () => {
    sidebarRef.current.style.visibility !== "visible"
      ? (sidebarRef.current.style.visibility = "visible")
      : (sidebarRef.current.style.visibility = "hidden");
  };
  return (
    <>
      <div className="navbar-mobile-menu" onClick={handleToggle}>
        <button className="navbar-mobile-toggle">
          <MenuIcon />
        </button>
      </div>
      <div className="sidebar" ref={sidebarRef}>
        <ul className="sidebar-nav">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              <PersonIcon />
              <span className="link-text">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              <DashboardIcon />
              <span className="link-text">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              <SystemUpdateAltIcon />
              <span className="link-text">Option</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              <PermDataSettingIcon />
              <span className="link-text">Option</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              <CardTravelIcon />
              <span className="link-text">Option</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              <PolymerIcon />
              <span className="link-text">Option</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              <SettingsApplicationsIcon />
              <span className="link-text">Option</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              <SettingsInputComponentIcon />
              <span className="link-text">Option</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              <SettingsBrightnessIcon />
              <span className="link-text">Mode</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
