import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import { MainWrapper, Main } from "../../styles/styles";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Nav, MinNav } from "../nav/Nav";

const Layout = (props) => {
  const { showNav } = useContext(AppContext);

  return (
    <MainWrapper>
      <Header />
      <Nav />
      {showNav ? <MinNav /> : null}

      <Main>{props.children}</Main>
      <Footer />
    </MainWrapper>
  );
};

export default Layout;
