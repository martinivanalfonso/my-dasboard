import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectName } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

import "./right-sidebar.styles.scss";

const RightSidebar = ({ name }) => {
  return (
    <div className="right-sidebar-wrapper">
      <div className="right-sidebar-header">
        <div className="welcome-text">
          <h4 className="username-text">Hi {name}</h4>
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

const mapStateToProps = createStructuredSelector({
  name: selectName,
});

export default connect(mapStateToProps)(RightSidebar);
