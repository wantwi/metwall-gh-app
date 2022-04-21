import styled from "styled-components";

export const Section1 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #c5c4e2;
  padding: 0 40px 30px 40px;
  height: 300px;
  p {
      padding0;
      margin:0;
    text-align: justify;
    line-height: 2rem;
  }
`;

export const Section2 = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 300px;
  background: #fff;
  padding: 20px 40px 30px 40px;
  section {
    display: flex;
    flex-direction: column;
  }
  h3 {
    padding: 0;
    margin: 0;
  }
  p {
    text-align: justify;
    line-height: 1.2rem;
    padding: 0 40px 0 0;
    width: 90%;
  }
`;

export const Box1 = styled.section`
  flex: 20%;
  p {
    padding: 0;
    margin: 0;
    line-height: 2.5rem;
  }
`;
export const Box2 = styled.section`
  flex: 50%;
  align-self: start;
  column-gap: 50px;
`;
export const Box3 = styled.section`
  flex: 30%;
  flex-wrap: nowrap;
  .videPlayer {
    width: auto !important;
    object-fit: contain;
  }
`;
