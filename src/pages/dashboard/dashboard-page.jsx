import React from "react";
import { Search } from "semantic-ui-react";
import NotificationsIcon from "@material-ui/icons/Notifications";

import "./dashboard-page.styles.scss";

const DashboardPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="page-header-item">
          <h1>Dashboard</h1>
        </div>
        <div className="page-header-item">
          <Search placeholder="Search"/>
          <button>
            <NotificationsIcon />
          </button>
        </div>
      </div>
      <div className="page-content">
        <div className="page-content-item">

        <div className="ui raised card">
          <div className="content">
            <div className="header">Cute Dog</div>
            <div className="meta">
              <span className="category">Animals</span>
            </div>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit torquent,
                condimentum tortor est eleifend lacus pellentesque fames
                porttitor sociis, malesuada nunc dui aliquam phasellus rhoncus
                vitae. Iaculis dictumst maecenas sollicitudin dui torquent
                volutpat venenatis litora, className ornare blandit dapibus a
                porttitor rhoncus eros hendrerit.
              </p>
            </div>
          </div>
          <div className="extra content">
            <div className="right floated author">
              <img
                className="ui avatar image"
                src="https://1.semantic-ui.com/images/avatar/large/stevie.jpg"
                alt="card-item"
              /> Matt
            </div>
          </div>
        </div>
        </div>
        <div className="page-content-item">
        <div className="ui raised card">
          <div className="content">
            <div className="header">Cute Dog</div>
            <div className="meta">
              <span className="category">Animals</span>
            </div>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit torquent,
                condimentum tortor est eleifend lacus pellentesque fames
                porttitor sociis, malesuada nunc dui aliquam phasellus rhoncus
                vitae. Iaculis dictumst maecenas sollicitudin dui torquent
                volutpat venenatis litora, className ornare blandit dapibus a
                porttitor rhoncus eros hendrerit.
              </p>
            </div>
          </div>
          <div className="extra content">
            <div className="right floated author">
              <img
                className="ui avatar image"
                src="https://1.semantic-ui.com/images/avatar/large/stevie.jpg"
                alt="card-item"
              /> Matt
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
