import React from "react";
import { Title } from "../elements/GeneralElements";
import {
  InfographicContainer,
  InfographicImage,
} from "../elements/InfographicElements";
import Infographic1 from "@/assets/images/2.jpg";
import Infographic2 from "@/assets/images/3.jpg";
import Infographic3 from "@/assets/images/4.jpg";

const infographicContainer = () => {
  return (
    <>
      <Title>
        Como la tecnología ha influido en la privacidad de los usuarios a lo
        largo del tiempo.
      </Title>
      <InfographicContainer>
        <InfographicImage src={Infographic1} alt="Infografía 1" />
        <InfographicImage src={Infographic2} alt="Infografía 2" />
        <InfographicImage src={Infographic3} alt="Infografía 3" />
      </InfographicContainer>
    </>
  );
};

export default infographicContainer;
