import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <nav className="Nav">
      <a href="#AboutMe" id="nav-AboutMe" className="not-active">
        <input type="checkbox" id="checkbox-AboutMe" />
        <span className="slider"></span>
        About Me
      </a>
      <a href="#MyWork" id="nav-MyWork" className="not-active">
        <input type="checkbox" id="checkbox-MyWork" />
        <span className="slider"></span>
        My Work
      </a>
    </nav>
  );
};

export default Nav;
