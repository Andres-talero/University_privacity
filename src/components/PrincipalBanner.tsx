import React from "react";
import {
  Background,
  Content,
  Section,
  SectionImage,
  SectionBody,
  SectionTitle,
  SectionText,
  SectionReferences,
} from "../elements/SectionElements";
import { Iprops } from "@/interfaces/PrincipalBanner.interface";
import PricacityBG from "@/assets/images/privacy.jpg";
import RedesImage from "@/assets/images/redes.jpg";
import CelularImage from "@/assets/images/celulares.jpg";
import iaImage from "@/assets/images/ia.jpg";
import TechImage from "@/assets/images/tech.jpg";
import GraphicContainer from "./GraphicContainer";
import InfographicContainer from "./InfographicContainer";
import Footer from "./Footer";
import { Description } from "@/elements/GeneralElements";

const PrincipalBanner = (props: Iprops) => {
  return (
    <>
      <Background>
        <Content>
          ¿Cúal es la relación del avance tecnológico con la decadencia de la
          privacidad?
        </Content>
      </Background>
      <Description>
        La privacidad ha venido en declive durante los últimos años, esto en
        parte debido a el crecimiento exponencial de la tecnología y servicios
        en línea, lo que conlleva a que toda la información, gustos,
        comportamientos y hábitos de los usuario queden expuestos y al alcance
        de empresas, gobiernos y terceros que quieran hacer uso de estos. Es una
        problemática que nos afecta a día de hoy y la tendencia apunta a un
        alza, es por ello que es fundamental comprender quienes tiene acceso a
        nuestra información y tener la certeza de que hacen con ella; porque en
        la actualidad los datos son el bien más preciado y codiciado.
      </Description>
      <Section reverse={true}>
        <SectionImage src={RedesImage} alt="Redes sociales" />
        <SectionBody>
          <SectionTitle>Impacto - Redes Sociales</SectionTitle>
          <SectionText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quibusdam, voluptate, voluptatum, quia repellat natus voluptas
            dolorum quos quae consequatur voluptatem. Quibusdam, voluptate,
            voluptatum, quia repellat natus voluptas dolorum quos quae
            consequatur voluptatem.
          </SectionText>
          <SectionReferences>
            <a href="#">-Referencia 1 </a>
            <a href="#">-Referencia 2 </a>
            <a href="#">-Referencia 3 </a>
          </SectionReferences>
        </SectionBody>
      </Section>
      <Section>
        <SectionImage src={TechImage} alt="Tecnología" />
        <SectionBody>
          <SectionTitle>Impacto - Tecnología</SectionTitle>
          <SectionText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quibusdam, voluptate, voluptatum, quia repellat natus voluptas
            dolorum quos quae consequatur voluptatem. Quibusdam, voluptate,
            voluptatum, quia repellat natus voluptas dolorum quos quae
            consequatur voluptatem.
          </SectionText>
          <SectionReferences>
            <a href="#">-Referencia 1 </a>
            <a href="#">-Referencia 2 </a>
            <a href="#">-Referencia 3 </a>
          </SectionReferences>
        </SectionBody>
      </Section>
      <GraphicContainer />
      <Section reverse={true}>
        <SectionImage src={iaImage} alt="IA" />
        <SectionBody>
          <SectionTitle>Impacto - IA y Machine Learning</SectionTitle>
          <SectionText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quibusdam, voluptate, voluptatum, quia repellat natus voluptas
            dolorum quos quae consequatur voluptatem. Quibusdam, voluptate,
            voluptatum, quia repellat natus voluptas dolorum quos quae
            consequatur voluptatem.
          </SectionText>
          <SectionReferences>
            <a href="#">-Referencia 1 </a>
            <a href="#">-Referencia 2 </a>
            <a href="#">-Referencia 3 </a>
          </SectionReferences>
        </SectionBody>
      </Section>
      <InfographicContainer />
      <Footer />
    </>
  );
};

export default PrincipalBanner;
