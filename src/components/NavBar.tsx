import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-12 h-10 flex items-center justify-center rounded-lg bg-white shadow-md font-bold"
      >
        <p className="blue-gradient_text">GRM</p>
      </NavLink>
      <nav className="text-lg font-medium gap-7 flex">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
