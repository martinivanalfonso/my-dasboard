import React, { useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
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

import NavItem from "../nav-item/nav-item.component";

const Sidebar = () => {
  const sidebarRef = useRef();
  let history = useHistory();
  const handleToggle = () => {
    sidebarRef.current.style.visibility !== "visible"
      ? (sidebarRef.current.style.visibility = "visible")
      : (sidebarRef.current.style.visibility = "hidden");
  };

  useEffect(() => {
    if (window.innerWidth < 600) sidebarRef.current.style.visibility = "hidden";
  }, [history.location.pathname]);

  const toggleColorMode = () => {
    console.log(document.documentElement.getAttribute("color-mode"));
    if (document.documentElement.getAttribute("color-mode") === "dark") {
      document.documentElement.setAttribute("color-mode", "light");
    } else {
      document.documentElement.setAttribute("color-mode", "dark");
    }
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
            <Link to="/" className="nav-link">
              <PersonIcon />
              <span className="link-text">Home</span>
            </Link>
          </li>
          <NavItem title="Dashboard" link="/dashboard">
            <DashboardIcon />
          </NavItem>
          <NavItem title="Option" link="/option1">
            <SystemUpdateAltIcon />
          </NavItem>
          <NavItem title="Option" link="/option2">
            <PermDataSettingIcon />
          </NavItem>
          <NavItem title="Option" link="/option3">
            <CardTravelIcon />
          </NavItem>
          <NavItem title="Option" link="/option4">
            <PolymerIcon />
          </NavItem>
          <NavItem title="Option" link="/option5">
            <SettingsApplicationsIcon />
          </NavItem>
          <NavItem title="Option" link="/option6">
            <SettingsInputComponentIcon />
          </NavItem>
          <li className="nav-item">
            <button
              onClick={toggleColorMode}
              className="nav-link"
              aria-label="Toggle dark mode"
            >
              <SettingsBrightnessIcon />
              <span className="link-text">Color Mode</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
