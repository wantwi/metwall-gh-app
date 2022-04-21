import React from "react";
import { HeaderWrapper, SocialWrapper, LogoWrapper } from "../../styles/styles";
import SocialComponent from "../../components/socialComponent";
import Logo from "../../images/logo.jpg";
const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <img className="img" alt="Logo" src={Logo} />
      </LogoWrapper>
      <SocialWrapper>
        <SocialComponent />
      </SocialWrapper>
    </HeaderWrapper>
  );
};

export default Header;
