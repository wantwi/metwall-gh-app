import styled from "styled-components";
import { device } from "../utils/BreakPoints";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 70px;
  background: #2c3192;
  padding-right: 30px;
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px;
  background: #00adef;
  gap: 40px;
  a {
    align-self: center;
    font-weight: bold;
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
  a.active {
    color: #fff;
    text-decoration: none;
  }
  .searchDiv {
    position: relative;
    input {
      position: absolute;
      padding: 3px 5px;
      top: -10px;
      left: 100px;
    }
  }
`;

export const MinNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 14px;
  background: #00adef;
  gap: 10px;
  transition: all 0.5s ease-in-out;
  display: none;

  &&:target {
    height: 500px;
  }
  a {
    align-self: center;
    font-weight: bold;
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
  a.active {
    color: #fff;
    text-decoration: none;
  }
`;
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 70vh;
`;

// export const FooterWrapper = styled.footer`
//   display: flex;
//   flex-direction: row;
//   background: #5a514f;
//   justify-content: space-between;
//   height: 200px;
//   color: #fff;
// `;

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  background: #5a514f;
  justify-content: space-between;
  height: 200px;
  padding-right: 40px;
`;

export const LogoWrapper = styled.div`
  align-self: start;
  img {
    width: 50em;
  }
`;

export const NavIconWrapper = styled.span`
  margin: 20px 0;
  display: none;
  .navIcon {
    color: #ffffff;
    font-size: 35px;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  p,
  h3 {
    margin: 0;
    padding: 0;
    line-height: 1.8rem;
    color: #fff;
    font-size: 14px;
  }
  h3 {
    margin-top: 10px;
    font-size: 22px;
  }
`;

export const SliderImageWrapper = styled.div`
  object-fit: contain;
  img {
    height: 80vh;
  }
`;
export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MainWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    align-self: center;
    .img {
      width: 40%;
      overflow-x: hidden;
    }
    .sociahHeader {
      display: none !important;
    }

    ${HeaderWrapper} {
      position: fixed;
      z-index: 1;
      width: 100%;
      padding: 0 20px !important;
    }

    ${SliderImageWrapper} {
      img {
        height: 50vh;
      }
      p {
        font-size: 25px !important;
      }
      .legend {
        top: 50px;
      }
    }

    ${NavWrapper} {
      display: none;
    }
    ${NavIconWrapper} {
      display: block;
    }

    ${MinNavWrapper} {
      display: flex;
      position: fixed;
      z-index: 1;
      width: 100%;
      top: 70px;
    }
    ${Main} {
      width: 100vw;
      margin: 0 auto;
      margin-top: 70px;
    }
    ${FooterWrapper} {
      flex-direction: column;
      background: #5a514f;
      height: 250px;
    }
  }

  @media only screen and (max-width: 700px) {
    body {
      background: red !important;
    }
    .img {
      width: 40%;
      overflow-x: hidden;
    }
    .sociahHeader {
      display: flex;
      width: 200px;
    }
    ${HeaderWrapper} {
      padding-right: 0;
    }
    ${NavWrapper} {
      display: flex !important;
      input {
        display: none;
      }
    }
  }

  /* @media screen and ${device.mobileS} {
    background: red;

    ${NavWrapper} {
      display: none;
    }
  } */

  @media screen and ${device.mobileL} {
    /* background: blue; */
    ${NavWrapper} {
      display: none;
    }
  }
  @media screen and ${device.tablet} {
    /* background: yellow; */
    ${NavWrapper} {
      display: flex;
    }
  }
  @media screen and ${device.laptop} {
    /* background: green; */

    ${NavWrapper} {
      display: flex;
    }
  }
  @media screen and ${device.laptopL} {
    /* background: pink; */
    ${NavWrapper} {
      display: flex;
    }
  }
  @media screen and ${device.desktop} {
    background: brown;
    ${NavWrapper} {
      display: flex;
    }
  }
  @media screen and ${device.desktopL} {
    background: black;
    ${NavWrapper} {
      display: flex;
    }
  }
`;
