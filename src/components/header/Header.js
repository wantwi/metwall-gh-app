import React, { useContext } from "react";
import {
  HeaderWrapper,
  SocialWrapper,
  LogoWrapper,
  NavIconWrapper,
} from "../../styles/styles";
import SocialComponent from "../../components/socialComponent";
import Logo from "../../images/logo.jpg";
import * as FaIcon from "react-icons/fa";
import { AppContext } from "../../context/context";

const Header = () => {
  const { setShowNav, showNav } = useContext(AppContext);

  console.log({ showNav });
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <img className="img" alt="Logo" src={Logo} />
      </LogoWrapper>
      <SocialWrapper className="sociahHeader">
        <SocialComponent />
      </SocialWrapper>

      <NavIconWrapper>
        <FaIcon.FaBars
          className="navIcon"
          onClick={() => setShowNav(!showNav)}
        />
      </NavIconWrapper>
    </HeaderWrapper>
  );
};

export default Header;
