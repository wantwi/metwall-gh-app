import React, { useEffect } from "react";
import SliderComponet from "../../components/SliderComponet";
import {
  Section1,
  Section2,
  Box1,
  Box2,
  Box3,
  HomeWrapper,
} from "./home.styles";
import ReactPlayer from "react-player";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <HomeWrapper>
      <SliderComponet />
      <Section1>
        <h2>Welcome !</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </Section1>
      <Section2>
        <Box1 className="box-1">
          <h3>Our Service</h3>
          <p>Archetectual Desgin</p>
          <p>Building Construction</p>
          <p>Steel Fabrication</p>
          <p>Real Estate Development</p>
          <p>Interior Desgin</p>
        </Box1>
        <Box2 className="box-2">
          {" "}
          <h3>Industry News</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Box2>
        <Box3 className="box-3">
          {" "}
          <h3>Post Video</h3>
          <ReactPlayer
            className="videPlayer"
            url="https://www.youtube.com/watch?v=I-kach9rCKA"
          />
        </Box3>
      </Section2>
    </HomeWrapper>
  );
};

export default HomePage;
