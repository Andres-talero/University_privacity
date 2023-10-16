import styled from "styled-components";
import Image from "next/image";
import {IFooterText} from "@/interfaces/Footer.interface";

const FooterContainer = styled.div`
  max-width: 100vw;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  margin-top: 5rem;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  overflow: hidden;

  @media screen and (max-width: 60rem) {
    flex-direction: column;
    height: auto;
    padding: 2rem 0;
  }
`;

const FooterSection1 = styled.div`
  width: 40%;
  font-size: 1rem;
  font-weight: 300;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 8rem;

  @media screen and (max-width: 60rem) {
    width: 100%;
    justify-content: center;
    padding: 3rem;
  }
`;

const FooterSection2 = styled.div`
  width: 60%;
  font-size: 1rem;
  font-weight: 300;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0 8rem;
  text-transform: uppercase;

  @media screen and (max-width: 60rem) {
    width: 100%;
    align-items: center;
    padding: 0 2rem;
  }
`;

const FooterImage = styled(Image)`
  width: 12rem;
  height: 50%;
  object-fit: cover;

  @media screen and (max-width: 60rem) {
    width: 40%;
    height: auto
  }
`;

const FooterText = styled.p<IFooterText>`
  font-size: 1rem;
  font-weight: 00;
  color: #fff;
  padding: ${({p}) => p};

  @media screen and (max-width: 60rem) {
    text-align: center;
  }
`;

export { FooterContainer, FooterSection1, FooterSection2, FooterImage, FooterText };
