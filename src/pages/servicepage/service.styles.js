import styled from "styled-components";
import Image3 from "../../images/img3.jpg";
import Image2 from "../../images/plan.jpg";
export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ImageSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 60vh;
  background: url(${Image3});
  object-fit: contain;
`;
export const Section1 = styled.section`
  display: flex;
  flex-direction: column;
  height: 40vh;
  background: #00adef;
`;

export const Section2 = styled.section`
  display: flex;
  flex-direction: column;
  height: 90vh;
  background: url(${Image2});
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .border {
    border: 1px solid #333;
    padding: 5px;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  hr {
    border: 1px solid #333;
    width: 50%;
    padding: 0;
    margin: 0;
  }
  p {
    padding: 0;
    margin: 0;
  }
  h2 {
    margin-bottom: 0;
  }
`;
