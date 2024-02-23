import {  Container,  } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import Whatsapp from "../layouts/Whatsapp";

const Home = () => {
  return (
    <div className=" w-100  text-white">
<Fade>
<Container className="centered-container">
            <p className="fw-semibold text-center fs-3">¡Bienvenidos a Nuestra Inmobiliaria!</p>

            <p className="poppins-medium text-center my-5">BMZ PROPIEDADES
            </p>
            <p className="fs-5 text-center">
              Te ayudamos a encontrar el lugar que estas buscando
            </p>
      </Container>
      <Whatsapp></Whatsapp>

</Fade>
    </div>
  );
};

export default Home;
