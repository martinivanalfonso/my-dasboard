import React from "react";

import "./app-wrapper.styles.scss";

// Wraps all components inside a flexbox
const AppWrapper = ({ children }) => {
  return <div className="app-wrapper">{children}</div>;
};

export default AppWrapper;
