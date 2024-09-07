import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoBmz from '../../assets/logoNuevoBlanco.png'

const Footer = () => {
  return (
    <Container fluid className="bg-black text-center text-white">
      <Row>
        <Col lg={4} md={4} sm={12}>
        
        <Link to="/" className="text-decoration-none text-light">

        <div className="pt-3"> 
         <img src={logoBmz} alt="bmz Logo" className= "logoNavbar p-2 linkhover" />

         </div>
          </Link>
          <p>M.P. 111 | 112</p>
        </Col>
        <Col lg={4} md={4} sm={12}>
          <p className="d-inline-block align-top pt-3 fw-semibold">Páginas</p>
          <ul className="list-unstyled">
            <Link to="/compra" className="text-decoration-none text-light">
              {" "}
              <li className=" poppins-light linkhover">Compra</li>
            </Link>
            <Link to="/venta" className="text-decoration-none text-light">
              {" "}
              <li className=" poppins-light linkhover">Venta</li>
            </Link>
            <Link to="/alquiler" className="text-decoration-none text-light">
              {" "}
              <li className=" poppins-light linkhover">Alquiler</li>
            </Link>
            <Link
              to="/asesoramiento"
              className="text-decoration-none text-light"
            >
              {" "}
              <li className=" poppins-light linkhover">Asesoramiento</li>
            </Link>
          </ul>
        </Col>
        <Col lg={4} md={4} sm={12}>
          <p className="d-inline-block align-top pt-3 fw-semibold">Redes</p>
          <ul className="list-unstyled d-flex justify-content-center">
            <a
              href="https://api.whatsapp.com/send/?phone=543815633407&text=Hola%21+Quisiera+saber+m%C3%A1s+informaci%C3%B3n+de+&type=phone_number&app_absent=0"
              style={{ color: "inherit" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="mx-2 icon">
                <FaWhatsapp className="fs-3 linkhover" />
              </li>
            </a>
            <a
              href="https://www.instagram.com/bmzpropiedades/"
              style={{ color: "inherit" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="mx-2 icon">
                <FaInstagram className="fs-3 linkhover" />
              </li>
            </a>
            <a
              href="https://www.facebook.com/bmzPropiedades/"
              style={{ color: "inherit" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="mx-2 icon">
                <FaFacebook className="fs-3 linkhover" />
              </li>
            </a>

            <a
              href="https://www.tiktok.com/@bmzpropiedades"
              style={{ color: "inherit" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="mx-2 icon">
                <FaTiktok className="fs-3 linkhover" />
              </li>
            </a>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
