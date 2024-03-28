import React from "react";
import { NavLink } from "react-router-dom";
import adminStyles from "./admin.module.css";
const Sidebar = () => {
  return (
    <div className={adminStyles.sidebar}>
      <ul>
        <li>
          <NavLink to="">Add Treatment</NavLink>
        </li>
        <li>
          <NavLink to="deletetreatment">Delete/Edit Treatment</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
