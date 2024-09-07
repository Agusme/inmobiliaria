import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Compra = () => {
  return (
      <div  className="bg-white pb-5">
 

        <Container fluid className="py-5 mb-5">
        <h1 className="letra-azul  py-5 text-center display-4">
          ¿Qué Buscás?
        </h1>
          <Container>
            <Row className="text-center">
              <Col lg={3} md={6} sm={12}>
                {" "}
                <Card className="bg-imageCasa bg-img py-5 px-4 mb-2">
                  <Link to="/compra-casa" className="text-decoration-none">
                    {" "}
                    <p className="text-white fs-5 ">Casa</p>
                  </Link>
                </Card>
              </Col>
              <Col lg={3} md={6} sm={12}>
                {" "}
                <Card className="bg-imageCard3 bg-img py-5 px-4 mb-2">
                  <Link to="/compra-dpto" className="text-decoration-none">
                    <p className="text-white fs-5 ">Departamento</p>
                  </Link>
                </Card>
              </Col>
              <Col lg={3} md={6} sm={12}>
                {" "}
                <Card className="bg-terreno bg-img py-5 px-4 mb-2">
                  <Link to="/compra-terreno" className="text-decoration-none">
                    <p className="text-white fs-5 ">Terreno</p>
                  </Link>
                </Card>
              </Col>
              <Col lg={3} md={6} sm={12}>
                {" "}
                <Card className="bg-imageCard2 bg-img py-5 px-4 mb-3">
                  <Link to="/compra-local" className="text-decoration-none">
                    <p className="text-white fs-5 ">Local</p>
                  </Link>{" "}
                </Card>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
  );
};

export default Compra;
