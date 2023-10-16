"use client";
import styled from "styled-components";
import PricacityBG from "@/assets/images/cameras.jpg";
import { IBackground } from "@/interfaces/PrincipalBanner.interface";
import Image from "next/image";
import { ISection } from "@/interfaces/Section.interface";

const BackgroundElement = styled.div<IBackground>`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  background: url(${PricacityBG.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  text-align: center;
  padding: 0 15rem;
  color: #fff;

  @media screen and (max-width: 60rem) {
    font-size: 2.5rem;
    padding: 0 8rem;
  }

  @media screen and (max-width: 30rem) {
    font-size: 2rem;
    padding: 0 4rem;
  }
`;

const Section = styled.div<ISection>`
  max-width: 95vw;
  height: 30rem;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  justify-content: space-between;
  align-items: center;
  font-size: 4rem;
  text-align: center;
  box-shadow: 0px 0px 40px 9px rgba(0, 0, 0, 0.241);
  margin: 3rem 2.5vw;
  border-radius: 2rem;
  overflow: hidden;

  @media screen and (max-width: 60rem) {
    height: 40rem;
    font-size: 3rem;
    flex-direction: column;
  }

  @media screen and (max-width: 30rem) {
    font-size: 2rem;
  }
`;

const SectionImage = styled(Image)`
  width: 40%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 60rem) {
    width: 100%;
    height: 40%;
  }
`;

const SectionBody = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 3rem;
  font-size: 2rem;

  @media screen and (max-width: 60rem) {
    width: 100%;
    height: 60%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 2rem;
  font-weight: 600;

  @media screen and (max-width: 60rem) {
    font-size: 2rem;
  }

  @media screen and (max-width: 30rem) {
    font-size: 1.5rem;
  }
`;

const SectionText = styled.div`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-weight: 300;
  text-align: start;

  @media screen and (max-width: 60rem) {
    font-size: 1rem;
  }

  @media screen and (max-width: 30rem) {
    font-size: 0%.8;
  }
`;

const SectionReferences = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 100;
  text-align: start;
  color: rgba(90, 90, 90, 0.57);

  @media screen and (max-width: 60rem) {
    font-size: .8rem;
  }

  @media screen and (max-width: 30rem) {
    font-size: .5rem;
  }
`;

const Background = ({ children }: { children: React.ReactNode }) => {
  return <BackgroundElement>{children}</BackgroundElement>;
};

export {
  Background,
  Content,
  Section,
  SectionImage,
  SectionBody,
  SectionTitle,
  SectionText,
  SectionReferences
};
