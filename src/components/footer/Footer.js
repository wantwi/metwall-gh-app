import React from "react";
import {
  FooterWrapper,
  ContactWrapper,
  SocialWrapper,
} from "../../styles/styles";
import SocialComponent from "../socialComponent";

const Footer = () => {
  return (
    <FooterWrapper>
      <ContactWrapper>
        <h3>Contact Us</h3>
        <p>Spintex Road, Shell Signboard</p>
        <p>P. O. Box TN 487, Tehie Nungua Estates</p>
        <p>info@metwallgroup.com</p>
        <p>Monday - Friday: 8:30 am - 5:30 pm</p>
        <p>Digital Address: GZ-190-0635</p>
      </ContactWrapper>
      <SocialWrapper>
        <SocialComponent />
      </SocialWrapper>
    </FooterWrapper>
  );
};

export default Footer;
