import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./right-sidebar.styles.scss";

const RightSidebar = () => {
  return (
    <div className="right-sidebar-wrapper">
      <div className="right-sidebar-header">
        <div className="welcome-text">
          <h4 className="username-text">Hi Martin</h4>
          <Link to="/dashboard" className="company-text">
            AMCP Corp
          </Link>
        </div>
        <Link to="/dashboard">
          <img
            className="welcome-profile-photo"
            src="https://1.semantic-ui.com/images/avatar/large/stevie.jpg"
            alt="welcome"
          />
        </Link>
      </div>
      <div className="right-sidebar-footer">
        <Button primary>Action Button</Button>
      </div>
    </div>
  );
};

export default RightSidebar;
