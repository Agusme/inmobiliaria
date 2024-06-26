import { Fade } from "react-awesome-reveal";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Compra = () => {
  return (
    <Fade>
      <div >
        <h1 className="text-white  pt-5 my-5 text-center display-4">
          ¿Qué Buscás?
        </h1>

        <Container fluid className="bg-white py-5 mb-5">
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
    </Fade>
  );
};

export default Compra;
