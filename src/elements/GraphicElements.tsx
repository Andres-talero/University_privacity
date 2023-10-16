import styled from "styled-components";

const GraphicContainer = styled.div`
  max-width: 100vw;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  font-size: 2rem;
  overflow: hidden;

  @media screen and (max-width: 60rem) {
    padding: 0;
  }
`;

const Canvas = styled.canvas`
  width: 90% !important;
  height: auto !important;
`;

const GraphicTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 300;

  @media screen and (max-width: 60rem) {
    font-size: 2rem;
  }

  @media screen and (max-width: 30rem) {
    font-size: 1.5rem;
  }
`;

export { GraphicContainer, Canvas, GraphicTitle };
