import styled from "styled-components";
import Image from "next/image";

const InfographicContainer = styled.div`
  max-width: 100vw;
  min-height: 30rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;

  @media screen and (max-width: 60rem) {
    flex-direction: column;
  }
`;

const InfographicImage = styled(Image)`
  width: 33%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 60rem) {
    width: 100%;
    height: auto;
  }
`;

export { InfographicContainer, InfographicImage };
