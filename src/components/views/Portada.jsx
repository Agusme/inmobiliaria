import { Card, Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
const Portada = () => {
  return (
    <Fade duration={1500} direction="left">
      <div>
        <Container fluid className="bg-white text-center">
          <Container className="py-5">
            <h4 className="fw-semibold fs-1 my-3">Nosotros</h4>
            <p className="py-2">
              Somos una inmobiliaria de confianza en Tucumán con años de
              experiencia en el mercado inmobiliario. Nuestro equipo altamente
              capacitado está aquí para ayudarte en la compra, venta y alquier
              de propiedades. Brindamos un servicio profesional y personalizado
              para hacer realidad tus objetivos inmobiliarios.
            </p>

            <Row>
              <Col lg={4} md={4} sm={12}>
                <p className="fs-4 fw-semibold">Expertos en Bienes de Raices</p>
                <p>
                  Nos esforzamos por ofrecer un servicio excepcional a cada uno
                  de nuestros clientes.
                </p>
              </Col>
              <Col lg={8} md={8} sm={12}>
                <Row className="text-center mt-4">
                  <Col lg={4} md={5} sm={4}>
                    <p className="fw-semibold fs-2 text-warning">+30</p>
                    <p>Años de experiencia</p>
                  </Col>
                  <Col lg={4} md={5} sm={4}>
                    <p className="fw-semibold fs-2 text-warning">+1500</p>
                    <p>Propiedades vendidas</p>
                  </Col>
                  <Col lg={4} md={5} sm={4}>
                    <p className="fw-semibold fs-2 text-warning">+2500</p>
                    <p>Clientes felices</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <p className="fs-2 fw-semibold">Nuestros Servicios</p>
            <Row>
              <Col lg={3} md={3} sm={6}>
                <Card className="bg-image bg-img p-5 mb-2">
                 <p className="text-white fs-5 fw-semibold">Compra</p>
                </Card>
              </Col>
              <Col lg={3} md={3} sm={6}>   <Card className="bg-imageCard1 bg-img p-5 mb-2">
                 <p className="text-white fs-5 fw-semibold">Alquiler</p>
                </Card></Col>
              <Col lg={3} md={3} sm={6}>   <Card className="bg-imageCard2 bg-img p-5 mb-2">
                 <p className="text-white fs-5 fw-semibold">Venta</p>
                </Card></Col>
              <Col lg={3} md={3} sm={6}>   <Card className="bg-imageCard3 bg-img p-5 mb-2">
                 <p className="text-white fs-5 fw-semibold">Asesoramiento</p>
                </Card></Col>
            </Row>
          </Container>
        </Container>
      </div>
    </Fade>
  );
};

export default Portada;
