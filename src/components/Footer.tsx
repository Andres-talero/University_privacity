import React from "react";
import {
  FooterContainer,
  FooterSection1,
  FooterSection2,
  FooterImage,
  FooterText
} from "../elements/FooterElements";
import LogoEan from "@/assets/images/EAN.png";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterSection1>
        <FooterImage src={LogoEan} alt="Logo" />
      </FooterSection1>
      <FooterSection2>
        <FooterText p="2rem 0">Entorno global, ética y sociedad</FooterText>
        <FooterText>ANA MARIA SASTOQUE AYALA</FooterText>
        <FooterText>JUAN SEBASTIAN VALDIVIESO ROJAS</FooterText>
        <FooterText>WILLIAM ANDRES TALERO CIFUENTES</FooterText>
        <FooterText p="2rem 0">© {date} - Todos los derechos reservados</FooterText>
      </FooterSection2>
    </FooterContainer>
  );
};

export default Footer;
