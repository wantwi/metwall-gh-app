import React, { useEffect } from "react";
import {
  Wrapper,
  Section1,
  Section2,
  ImageSection,
  Grid,
  Item,
  SectionHeader,
} from "./service.styles";
import Image2 from "../../images/plan.jpg";
const ServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <ImageSection></ImageSection>
      <Section1>
        <SectionHeader>
          <h2>SERVICES</h2>
          <hr />
          <p>Building the world one project at a time ...</p>
        </SectionHeader>
        <Grid>
          <Item>
            <h4 className="border">Architectural Designs</h4>
            <h4>Building Constrction</h4>
          </Item>
          <Item>
            <h4>Steel Fabrication</h4>
            <h4>Real Estate Development</h4>
          </Item>
          <Item>
            <h4>Inter Designs</h4>
            <h4>Sales of Building Materials</h4>
          </Item>
        </Grid>
      </Section1>
      <Section2>
        <img src={Image2} alt="plan" />
      </Section2>
    </Wrapper>
  );
};

export default ServicePage;
