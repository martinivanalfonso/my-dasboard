import React from "react";

import "./app-wrapper.styles.scss";

const AppWrapper = ({ children }) => {
  return <div className="app-wrapper">{children}</div>;
};

export default AppWrapper;
