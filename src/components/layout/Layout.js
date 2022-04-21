import React from "react";
import { MainWrapper, Main } from "../../styles/styles";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Nav from "../nav/Nav";

const Layout = (props) => {
  return (
    <MainWrapper>
      <Header />
      <Nav />
      <Main>{props.children}</Main>

      <Footer />
    </MainWrapper>
  );
};

export default Layout;
