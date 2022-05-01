import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../context/context";
import { NavWrapper, MinNavWrapper } from "../../styles/styles";

export const Nav = () => {
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

export const MinNav = () => {
  const { setShowNav } = useContext(AppContext);
  const hideNave = () => setShowNav(false);
  return (
    <MinNavWrapper>
      <NavLink onClick={hideNave} to="/">
        Home
      </NavLink>
      <NavLink onClick={hideNave} to="/about">
        About Us
      </NavLink>
      <NavLink onClick={hideNave} to="/project">
        Projects
      </NavLink>
      <NavLink onClick={hideNave} to="/service">
        Services
      </NavLink>
      <NavLink onClick={hideNave} to="/contact">
        Contact Us
      </NavLink>
    </MinNavWrapper>
  );
};
