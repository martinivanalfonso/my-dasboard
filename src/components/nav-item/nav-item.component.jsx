import React, { useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";

const NavItem = ({ children, link, title }) => {
  let history = useHistory();
  const itemRef = useRef();

  // Checks current url location to determine which nav item is active
  useEffect(() => {
    const stringUrl = history.location.pathname;
    if (stringUrl === link) {
      itemRef.current.classList.add("item-active");
    } else {
      itemRef.current.classList.remove("item-active");
    }
  }, [history.location.pathname, link]);

  return (
    <li className="nav-item" ref={itemRef}>
      <Link to={link} className="nav-link">
        {children}
        <span className="link-text">{title}</span>
      </Link>
    </li>
  );
};

export default NavItem;
