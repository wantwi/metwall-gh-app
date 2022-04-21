import styled from "styled-components";
import Image3 from "../../images/img3.jpg";
import Image2 from "../../images/img2.jpg";
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
  height: 50vh;
  background: #5a514f;
  color: #fff;
`;

export const Section2 = styled.section`
  display: flex;
  flex-direction: column;
  height: 40vh;
  background: url(${Image2});
  object-fit: cover;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 100px;
  padding-bottom: 50px;
  h3 {
    margin: 0;
    padding: 0;
    font-size: 40px;
  }

  p {
    text-align: justify;
    line-height: 2rem;
  }
  p:last-child {
    text-align: justify;
    line-height: 2rem;
    padding: 0;
    margin: 0;
    margin-top: -10px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .border {
    border: 1px solid #ddd;
    padding: 5px;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  hr {
    border: 1px solid #ddd;
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

export const Section3 = styled.section`
  background: #00adef;
  height: 40vh;
  display: flex;
  flex-direction: column;
`;

export const ControlWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  justify-content: flex-start;

  div {
    padding: 8px 10px;
    background: #5a514f;
    color: #fff;
  }
  div:first-child {
    background: red;
    padding-left: 45px;
  }
  h4 {
    padding: 0;
    margin: 0;
  }
`;

export const TextContent = styled.div`
  padding: 0 40px 0 40px;
  display: flex;
  flex-direction: column;
  .mt-3 {
    margin-top: 40px;
  }
`;
