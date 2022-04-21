import React from "react";
import { NavLink } from "react-router-dom";
import { NavWrapper } from "../../styles/styles";

const Nav = () => {
  return (
    <NavWrapper>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/project">Projects</NavLink>
      <NavLink to="/service">Services</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
      <div className="searchDiv">
        <input placeholder="search" />
      </div>
    </NavWrapper>
  );
};

export default Nav;
