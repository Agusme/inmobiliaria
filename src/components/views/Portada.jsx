import { Col, Container, Row } from "react-bootstrap";

const Portada = () => {
  return (

<Container fluid className="bg-white text-center">
  <Container className="py-5">
    <Row>
      <Col lg={4} md={4} sm={12}>
        <p className="fs-3 fw-semibold">
          Expertos en Bienes de Raices
        </p>
        <p>
          Nos esforzamos por ofrecer un servicio excepcional a cada uno de
          nuestros clientes.
        </p>
      </Col>
      <Col lg={8} md={8} sm={12}>
      <Row className="text-center mt-4" >
          <Col lg={4} md={5} sm={4}  >
            <p className="fw-semibold fs-2">+30</p>
            <p>Años de experiencia</p>
          </Col>
          <Col lg={4} md={5} sm={4}> 
            <p className="fw-semibold fs-2">+1500</p>
            <p>Propiedades vendidas</p>
          </Col>
          <Col lg={4} md={5} sm={4}>
            <p className="fw-semibold fs-2">+2500</p>
            <p>Clientes felices</p>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
</Container>



  );
};

export default Portada;
