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
            La erosión de la privacidad en las redes sociales es una
            preocupación cada vez más apremiante, que se ha intensificado a
            medida que la tecnología ha experimentado un avance vertiginoso.
            Estas plataformas se han consolidado como una parte integral de la
            rutina diaria de un gran número de usuarios, lo que ha impulsado un
            aumento exponencial en el intercambio de datos personales en línea.
            Sin embargo, este fenómeno no está exento de riesgos sustanciales
            para la privacidad, a menos que se aplique un control meticuloso
            sobre quién tiene acceso a esta información sensible.
            <br />
            <br /> Graham Cluley, un reconocido experto en seguridad de la
            información, ha subrayado la importancia de adoptar un enfoque
            cauteloso en lo que respecta a la divulgación de información
            personal en las redes sociales. Sus consejos hacen hincapié en la
            necesidad de limitar rigurosamente la cantidad de datos personales
            compartidos en estas plataformas, dada la creciente amenaza de la
            suplantación de identidad, el robo de datos y otros abusos de la
            información confidencial. Además, Cluley enfatiza que es imperativo
            que los usuarios sean escépticos ante las solicitudes de información
            personal, especialmente cuando provienen de fuentes inesperadas o
            desconocidas en línea. <br />
            <br />
            La visión de Bruce Schneier sobre la seguridad cibernética y la
            privacidad en las redes sociales es inmensamente relevante en el
            mundo digital en constante evolución. Schneier, un experto en la
            materia, ha advertido sobre los riesgos que acompañan el avance de
            la tecnología y su impacto en la privacidad de datos en las redes
            sociales. Un ejemplo claro, radica en la recopilación masiva de
            datos por parte de las plataformas de redes sociales. En este
            sentido, Schneier destaca que estas empresas reúnen información
            detallada sobre los usuarios, desde sus gustos y preferencias hasta
            sus interacciones en línea. Esto permite la creación de perfiles
            detallados que pueden utilizarse para la publicidad dirigida y otros
            fines comerciales. Aunque la publicidad personalizada puede mejorar
            la experiencia del usuario, plantea preocupaciones sustanciales
            sobre la privacidad, ya que la frontera entre lo que es público y lo
            que es privado a menudo se difumina.
          </SectionText>
          <SectionReferences>
            Ayerbe, A. I. (s/f). LA CIBERSEGURIDAD DE LA INDUSTRIA 4.0: UN MEDIO
            PARA LA CONTINUIDAD DEL NEGOCIO. Gob.es. Recuperado el 14 de octubre
            de 2023, de{" "}
            <a href="https://www.mincotur.gob.es/Publicaciones/Publicacionesperiodicas/EconomiaIndustrial/RevistaEconomiaIndustrial/410/ANA%20I%20AYERBE.pdf">
              https://www.mincotur.gob.es/Publicaciones/Publicacionesperiodicas/EconomiaIndustrial/RevistaEconomiaIndustrial/410/ANA%20I%20AYERBE.pdf
            </a>
            <br />
            <br />
            IDP. Revista de Internet, Derecho y Política. (2009). Redalyc.org.{" "}
            <a href="https://www.redalyc.org/pdf/788/78813254010.pdf">
              https://www.redalyc.org/pdf/788/78813254010.pdf
            </a>
          </SectionReferences>
        </SectionBody>
      </Section>
      <Section>
        <SectionImage src={TechImage} alt="Tecnología" />
        <SectionBody>
          <SectionTitle>Impacto - Tecnología</SectionTitle>
          <SectionText>
            No es un secreto para nadie que el acelerado avance tecnológico en
            los dispositivos electrónicos que se usan a diario ha traído consigo
            problemas en la seguridad y privacidad de los datos de sus usuarios,
            y en este artículo se mencionarán aspectos cruciales en este tema y
            también casos que dejaron en evidencia la falta de privacidad para
            con los usuarios de estos dispositivos.
            <br />
            <br /> El rápido avance teconológico de los dispositivos
            electrónicos los ha convertido en más que un lujo una necesidad
            dentro de la vida cotidiana, los robots, la realidad aumentada, los
            algoritmos, los teléfonos inteligentes, entre otros, no solo le
            facilitan la vida a las personas, también han demostrado que existen
            grandes problemas en la privacidad de los datos de las personas, un
            claro ejemplo de la brecha entre el desarrollo tecnológico y el
            manejo de los datos son los teléfonos inteligentes, tabletas y
            laptops estos dispositivos de uso diario, almacenan gran cantidad de
            información de sus usuarios, como por ejemplo, contraseñas, claves
            de cuentas bancarias, fechas importantes de los usuarios, gustos y
            preferencias, información que ha servido para enviar publicidad
            dirigida desde las compañías a cada uno de los usuarios, como
            también para cometer delitos a grandes escalas, como se puede
            evidenciar, robos de cuentas bancarias, hackeo de correo electrónico
            y robo de información.
            <br />
            <br /> Las múltiples formas en las que se pueden conectar hoy los
            dispositivos con la intranet o con otros dispositivos, como, por
            ejemplo: redes inalámbricas, GPS, micrófonos, cámaras y puertos de
            diferentes conexiones, demandan mayor seguridad en los puntos
            finales que requieren ciberseguridad, a pesar de los esfuerzos de
            las empresas para que la navegación de las personas por el internet
            sea cada vez más segura, el avance en conectividad aunque muy
            necesario y útil para agilizar muchos de los procesos de la vida
            cotidiana, no dejan de ser un riesgo en su uso, por la cantidad de
            información que se divulga sin la correcta supervisión o
            verificación de entidades correspondientes.
            <br />
            <br /> A pesar de que existe una ley en Colombia destinada a velar
            por el cumplimiento de la privacidad en los datos personales (ley
            1581 de 2012), la cual reconoce el derecho de las personas a
            actualizar y rectificar la información existente de ellas en las
            bases de datos o archivos que sean de conocimiento o susceptibles al
            tratamiento de empresas públicas o privadas. <br />
            <br />
            En conclusión, a la investigación anterior, el avance en
            ciberseguridad en relación con el avance de los dispositivos
            tecnológicos deja brechas preocupantes las cuales demandan ser
            cubiertas con celeridad para que el avance de la tecnología no sea
            un problema para la seguridad si no de gran utilidad como también ha
            sucedido a lo largo de estos años.
          </SectionText>
          <SectionReferences>
            BBVA open mind. 2020. Avance tecnológico: riesgos y desafíos.
            Recuperado de{" "}
            <a
              href="https://www.bbvaopenmind.com/articulos/avance-tecnologico-riesgos-y-desafios/"
              target="_blank"
            >
              https://www.bbvaopenmind.com/articulos/avance-tecnologico-riesgos-y-desafios/
            </a>
            <br />
            <br />
            Telefónica tech. Febrero 2020. Seguridad informática una garantía
            para el futuro de la organización. Recuperado de{" "}
            <a
              href="https://telefonicatech.com/blog/seguridad_informatica"
              target="_blank"
            >
              https://telefonicatech.com/blog/seguridad_informatica
            </a>
            <br />
            <br />
            IBM, 2022. ¿Qué es la seguridad móvil? Recuperado de{" "}
            <a
              href="https://www.ibm.com/mx-es/topics/mobile-security"
              target="_blank"
            >
              https://www.ibm.com/mx-es/topics/mobile-security
            </a>
            <br />
            <br />
            Ministerio de ambiente. 2023. Protección de datos personales.
            Recuperado de{" "}
            <a
              href="https://www.minambiente.gov.co/politica-de-proteccion-de-datos-personales/#:~:text=Ley%20de%20Protección%20de%20Datos,de%20naturaleza%20pública%20o%20privada."
              target="_blank"
            >
              https://www.minambiente.gov.co/politica-de-proteccion-de-datos-personales/#:~:text=Ley%20de%20Protección%20de%20Datos,de%20naturaleza%20pública%20o%20privada.
            </a>
          </SectionReferences>
        </SectionBody>
      </Section>
      <GraphicContainer />
      <Section reverse={true}>
        <SectionImage src={iaImage} alt="IA" />
        <SectionBody>
          <SectionTitle>Impacto - IA y Machine Learning</SectionTitle>
          <SectionText>
            En los últimos años la humanidad ha evidenciado un problema gigante
            respecto a la vulnerabilidad del derecho de la privacidad y es que
            cada día se maneja toda la información de manera online, lo que
            lleva a que ciertas compañías o personas tengan acceso a toda la
            información sensible de una persona, véase el caso de la
            manipulación del comportamiento realizada por Cabridge Analityca
            “Cambridge Analytica logró saber cuál debía ser el contenido, tema y
            tono de un mensaje para cambiar la forma de pensar de los votantes
            de forma casi individualizada” (BBC, 2018). Esto es cada vez más
            delicado, puesto que con la globalización y modernización de la
            sociedad, toda la vida de las personas esta en una base de datos.
            <br />
            <br />
            Con esto surge un gran problema, desde hace años se ha venido
            trabando en una nueva tecnología conocida como inteligencia
            artificial (IA) y machine learning (ML), la cuales habían sido
            herramientas utilizadas para temas técnicos muy puntuales, los
            cuales no representaban un gran problema para la sociedad, pero
            actualmente esto ha cambiado; Llego un punto en que la IA es tan
            poderosa e inteligente que es capaz de redactar textos complejos,
            resolver pruebas de altos grados “penAI lanzó GPT-4 —una
            actualización más potente del modelo de inteligencia artificial (IA)
            utilizado en ChatGPT —, el cual presentó y aprobó el test Uniform
            Bar Exam (UBE), una prueba en Estados Unidos que examina el
            conocimiento y habilidades que deben poseer los abogados y no sólo
            aprobó el examen, sino que se colocó en el percentil 90, es decir,
            obtuvo una calificación mayor a la de 9 de cada 10 personas que lo
            presentan” (Santamaria A. 2023), programar, diseñar y una infinidad
            de cosas más; pero para esto la IA tiene que hacer uso de
            información y bases de datos con las cuales “aprender” más, hay es
            donde esta la información de la población.
            <br />
            <br /> Estos modelos de IA y ML son entrenados con toda la
            información recolectada de la población a lo largo de toda la
            historia, con cuales llegan a predecir de una forma inimaginable
            sesgos, comportamientos y pensamientos humanos, es por ello que hoy
            mas que nunca las personas tiene que salvaguardar su información y
            datos personales, porque ya hay algo que es capaz de procesarlos,
            manipular y utilizarlos a su antojo.
            <br />
            <br /> Es un tema complejo y delicado, tanto que la ONU se pronuncio
            al respecto, enfatizando en lo importante y vital que es regular los
            modelos IA y su utilización “Naciones Unidas para los Derechos
            Humanos, Michelle Bachelet, enfatizó el miércoles la urgente
            necesidad de establecer una moratoria a la venta y el uso de los
            sistemas de inteligencia artificial (IA) que amenazan gravemente a
            los derechos humanos, hasta que se hayan puesto en vigor las
            salvaguardas adecuadas” (ONU, 2021). Un comunicado de la ONU del
            2021, ahora en 2023 los modelos son más poderosos e inteligentes que
            antes y como lo dijo la ONU es una amenaza potencial para los
            derechos humanos.
            <br />
            <br /> Actualmente el diseño, la programación, la seguridad, el
            análisis de datos, decisiones y muchas cosas más son realizadas por
            IA y tiene acceso completo a los datos de la población, datos que
            anteriormente se compartieron sin siquiera saberlo hacen parte de
            una gran base de datos que alimenta la IA.
            <br />
            <br /> Esto conlleva a que se generen modelos IA de personas con
            toda su información, tendencias y comportamientos los cuales pueden
            ser usados como productos para compañías de publicidad, gobiernos o
            incluso para suplantación de identidad . “El sintetizador de
            ElevenLabs solo necesita un minuto de audio de una voz limpia (…)
            para generar una voz clonada de forma gratuita en pocos segundos (…)
            La compañía promete que puede hacerlo, con un 99% de precisión y
            cualquier acento” (Marilín G. 2023).
            <br />
            <br /> Queda una gran puerta abierta para la vulneración de la
            privacidad de las personas y la integridad de sus derechos humanos
            pero esto es algo en lo que se está trabajando en la actualidad.
          </SectionText>
          <SectionReferences>
            BBC. 2018. 5 claves para entender el escándalo de Cambridge
            Analytica que hizo que Facebook perdiera US$37.000 millones en un
            día. Recuperado de{" "}
            <a
              href="https://www.bbc.com/mundo/noticias-43472797"
              target="_blank"
            >
              https://www.bbc.com/mundo/noticias-43472797
            </a>
            <br />
            <br />
            Santamaria A. 2023. Nueva versión de ChatGPT aprueba examen para ser
            abogado. Recuperado de{" "}
            <a
              href="https://www.eluniversal.com.mx/tendencias/nueva-version-de-chatgpt-aprueba-examen-para-ser-abogado/"
              target="_blank"
            >
              https://www.eluniversal.com.mx/tendencias/nueva-version-de-chatgpt-aprueba-examen-para-ser-abogado/
            </a>
            <br />
            <br />
            ONU. 2021. Los riesgos de la inteligencia artificial para la
            privacidad exigen medidas urgentes – Bachelet Recuperado de{" "}
            <a
              href="https://www.ohchr.org/es/press-releases/2021/09/artificial-intelligence-risks-privacy-demand-urgent-action-bachelet"
              target="_blank"
            >
              https://www.ohchr.org/es/press-releases/2021/09/artificial-intelligence-risks-privacy-demand-urgent-action-bachelet
            </a>
            <br />
            <br />
            Marilín G. 2023. Voces clonadas con IA: nueva tecnología para un
            viejo fraude. Recuperado de{" "}
            <a
              href="https://www.newtral.es/voces-clonadas-ia-fraudes-estafas-suplantacion/20230814/"
              target="_blank"
            >
              https://www.newtral.es/voces-clonadas-ia-fraudes-estafas-suplantacion/20230814/
            </a>
          </SectionReferences>
        </SectionBody>
      </Section>
      <InfographicContainer />
      <Footer />
    </>
  );
};

export default PrincipalBanner;
