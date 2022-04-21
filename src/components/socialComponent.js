import React from "react";
import styled from "styled-components";
import * as FaIcon from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const SocialComponent = () => {
  return (
    <Wrapper>
      <div>
        <FaIcon.FaFacebook />
      </div>
      <div>
        <FaIcon.FaInstagramSquare />
      </div>
      <div>
        <AiIcons.AiFillTwitterCircle />
      </div>
      <div>
        <AiIcons.AiFillYoutube />
      </div>
      <div style={{ borderLeft: "1px solid #d3d3d3" }}>
        <FaIcon.FaWhatsappSquare />
      </div>
      <div>
        <AiIcons.AiFillLinkedin />
      </div>
    </Wrapper>
  );
};

export default SocialComponent;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-items: stretch;
  border-radius: 5px;
  div {
    padding: 5px 5px;
    background: #fff;
  }
  div:nth(1) {
    background: #ee2233;
  }
`;
