import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image1 from "../images/img1.jpg";
import Image2 from "../images/img2.jpg";
import Image3 from "../images/img3.jpg";
import { SliderImageWrapper } from "../styles/styles";

function SliderComponet() {
  return (
    <div>
      <Carousel showThumbs={false}>
        <SliderImageWrapper>
          <img src={Image1} alt="img1" className="slider-image" />

          <p className="legend" style={styles.legend}>
            a mission to provide sustainable and affordable building solutions
          </p>
        </SliderImageWrapper>
        <SliderImageWrapper>
          <img src={Image2} alt="img1" className="slider-image" />
          {/* <p className="legend">Legend 2</p> */}
        </SliderImageWrapper>
        <SliderImageWrapper>
          <img src={Image3} alt="img1" className="slider-image" />
          {/* <p className="legend">Legend 3</p> */}
        </SliderImageWrapper>
      </Carousel>
    </div>
  );
}

export default SliderComponet;

const styles = {
  legend: {
    bottom: "200px",
    background: "#8f8482",
    padding: "50px 15px",
    fontSize: "40px",
    opacity: 0.6,
  },
};
