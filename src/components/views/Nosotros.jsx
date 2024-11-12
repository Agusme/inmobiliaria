/* eslint-disable react/prop-types */
import { Card, Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import SearchForm from "./SearchForm";

const Portada = ({ id }) => {
  return (
    <Fade>
      <div id="nosotros">
        <Container fluid className="bg-white text-center pb-5">
          <Container className="py-5">
            <h4 className="display-4 letra-azul py-5">
              {" "}
              {id === "inicio" ? "¿Qué estás buscando?" : "Nuestros Servicios"}
            </h4>
            <Row>
              <Col lg={3} md={6} sm={6}>
                <Link
                  to="/compra"
                  smooth={true}
                  duration={500}
                  className="text-decoration-none"
                >
                  <Card className="bg-image bg-img py-5 mb-2">
                    <p className="text-white fw-semibold">Compra</p>
                  </Card>
                </Link>
              </Col>
              <Col lg={3} md={6} sm={6}>
                {" "}
                <Card className="bg-imageCard1 bg-img py-5 mb-2">
                  <Link to="/alquiler" className="text-decoration-none">
                    {" "}
                    <p className="text-white fw-semibold">Alquiler</p>
                  </Link>
                </Card>
              </Col>
              <Col lg={3} md={6} sm={6}>
                {" "}
                <Card className="bg-imageCard2 bg-img py-5 mb-2">
                  <Link to="/venta" className="text-decoration-none">
                    {" "}
                    <p className="text-white fw-semibold">Venta</p>
                  </Link>
                </Card>
              </Col>
              <Col lg={3} md={6} sm={6}>
                {" "}
                <Card className="bg-imageCard3 bg-img py-5 mb-2">
                  <Link to="/asesoramiento" className="text-decoration-none">
                    {" "}
                    <p className="text-white fw-semibold">Asesoramiento</p>
                  </Link>
                </Card>
              </Col>
            </Row>
            <SearchForm></SearchForm>

            <h4 className="letra-azul display-5 pt-5 pb-3">Nosotros</h4>
            <p className="py-2">
              Somos una inmobiliaria de confianza en Tucumán con años de
              experiencia en el mercado inmobiliario. Nuestro equipo altamente
              capacitado está aquí para ayudarte en la compra, venta y alquier
              de propiedades. Brindamos un servicio profesional y personalizado
              para hacer realidad tus objetivos inmobiliarios.
            </p>
            <Row>
              <Col lg={4} md={4} sm={12}>
                <p className="fs-4 letra-azul">Expertos en Bienes de Raices</p>
                <p>
                  Nos esforzamos por ofrecer un servicio excepcional a cada uno
                  de nuestros clientes.
                </p>
              </Col>
              <Col lg={8} md={8} sm={12}>
                <Row className="text-center mt-4">
                  <Col lg={4} md={5} sm={4}>
                    <div className="d-flex justify-content-center">
                      <p className="fw-semibold fs-2 text-warning">+</p>
                      <CountUp
                        end={30}
                        duration={10}
                        className="fw-semibold fs-2 text-warning"
                      />
                    </div>

                    <p>Años de experiencia</p>
                  </Col>
                  <Col lg={4} md={5} sm={4}>
                    <div className="d-flex justify-content-center">
                      <p className="fw-semibold fs-2 text-warning">+</p>
                      <CountUp
                        end={1500}
                        duration={10}
                        className="fw-semibold fs-2 text-warning"
                      />
                    </div>

                    <p>Propiedades vendidas</p>
                  </Col>
                  <Col lg={4} md={5} sm={4}>
                    <div className="d-flex justify-content-center">
                      <p className="fw-semibold fs-2 text-warning">+</p>
                      <CountUp
                        end={3000}
                        duration={10}
                        className="fw-semibold fs-2 text-warning"
                      />
                    </div>

                    <p>Clientes felices</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </Fade>
  );
};

export default Portada;
