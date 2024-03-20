import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
/* import Whatsapp from "../layouts/Whatsapp";
 */
const Home = () => {
  return (
    <div className="vh-100  text-white" id="home">
      <Fade duration={1500}>
        <Container className="mt-5 pt-5 text-center ">
          <p className="pt-5 mt-5 fs-5">
            ¡Bienvenidos a nuestra Inmobiliaria!{" "}
          </p>
          <p className="poppins-medium">BMZ PROPIEDADES</p>

          <p className="fs-5 p-2 ">
            Te ayudamos a encontrar el lugar que estas buscando
          </p>
          <ul className="list-unstyled d-flex justify-content-center">
          <a
              href="https://api.whatsapp.com/send/?phone=543815633407&text=Hola%21+Quisiera+saber+m%C3%A1s+informaci%C3%B3n+de+&type=phone_number&app_absent=0"
              style={{ color: "inherit" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="mx-2 icon linkhover">
              <FaWhatsapp  className="fs-3"/>
              </li>
            </a>
            <a
              href="https://www.instagram.com/bmzpropiedades/"
              style={{ color: "inherit" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="mx-2 icon linkhover">
                <FaInstagram className="fs-3" />
              </li>
            </a>
            <a
              href="https://www.facebook.com/bmzPropiedades/"
              style={{ color: "inherit" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="mx-2 icon linkhover">
                <FaFacebook  className="fs-3"/>

                 
              </li>
            </a>

            <a
              href="https://www.tiktok.com/@bmzpropiedades"
              style={{ color: "inherit" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="mx-2 icon linkhover">
              <FaTiktok className="fs-3"/>
              </li>
            </a>
          

          </ul>
          {/*             <Whatsapp></Whatsapp>
           */}
        </Container>
      </Fade>
    </div>
  );
};

export default Home;
