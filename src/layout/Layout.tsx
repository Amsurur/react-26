import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <ul style={{ display: "flex", gap: "50px" }}>
        <li>
          <NavLink to={"/redux"}>Redux</NavLink>
        </li>
        <li>
          <NavLink to={"/zustand"}>Zustand</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Layout;
