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
`;

const Canvas = styled.canvas`
  width: 90% !important;
  height: auto !important;
`;

export { GraphicContainer, Canvas };
