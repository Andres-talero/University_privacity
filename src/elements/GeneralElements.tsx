import styled from "styled-components";
import fondo from "@/assets/images/fondo1.jpg";

const Title = styled.div`
  max-width: 100vw;
  font-size: 3rem;
  margin-bottom: 2rem;
  font-weight: 600;
  text-align: center;
  margin-top: 7rem;
  padding: 0 6rem;
  background-image: url(${fondo.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media screen and (max-width: 60rem) {
    font-size: 2rem;
    margin-top: 5rem;
    padding: 0 3rem;
  }

  @media screen and (max-width: 30rem) {
    font-size: 1.5rem;
    padding: 0 2rem;
  }
`;

const Description = styled.div`
  max-width: 100vw;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-weight: 300;
  text-align: center;
  padding: 0 2rem;
  margin: 4rem;
  margin-bottom: 5rem;
    font-style: italic;

  @media screen and (max-width: 60rem) {
    font-size: 1rem;
    padding: 0 3rem;
  }

  @media screen and (max-width: 30rem) {
    font-size: 0%.8;
    padding: 0 2rem;
  }
`;

export { Title, Description };
