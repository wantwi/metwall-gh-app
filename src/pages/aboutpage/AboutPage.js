import React from "react";
import {
  Wrapper,
  Section1,
  ImageSection,
  Grid,
  Section3,
  SectionHeader,
  ControlWrapper,
  TextContent,
} from "./about.styles";

const AboutPage = () => {
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
          <h3>Welcome !</h3>
          <p>
            Metwall Gh. Ltd has been in existance since 2015. It was started by
            our CEO Selasi Agbah to connect clients and home owners across the
            country to construction and engineering needs
          </p>
          <p>
            Our strong command in construction and engineering gives us the
            leverage to proved our client the solutions their needs through
            morden technology and thought-through sustaniable options
          </p>
        </Grid>
      </Section1>
      <ImageSection></ImageSection>
      <Section3>
        <ControlWrapper>
          <div>
            <h4>VISION</h4>
          </div>
          <div>
            <h4>MISSION</h4>
          </div>
          <div>
            <h4>PHILOSOPHY</h4>
          </div>
        </ControlWrapper>

        <TextContent>
          <p className="mt-3">
            Our vision is to provide quality human-centered desgin, built and
            manage infrastructure
          </p>
          <p>
            Our mission is to server out clients with sustainable and affordable
            solutions to meet their built infrastructure needs
          </p>
          <p>
            Our philosophy is underpinned by our desire to acheive harmony
            between our designs, material use and carbon foot print with the
            environment
          </p>
        </TextContent>
      </Section3>
    </Wrapper>
  );
};

export default AboutPage;
