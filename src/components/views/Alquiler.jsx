import { Fade } from "react-awesome-reveal";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Alquiler = () => {
    return (
        <Fade>
        <div className="bg-white py-5">
  
          <Container fluid className="bg-white py-5 mb-5">
          <h4 className="letra-azul py-5 text-center display-4">¿Qué Buscás?</h4>

            <Container>
              <Row className="text-center">
                <Col lg={6} md={6} sm={12}>
                  {" "}
                  <Card className="bg-imageCard3 bg-img p-5 mb-2">
                  <Link to="/alquiler-dpto" className="text-decoration-none">
                    {" "}
                    <p className="text-white fs-5 ">Departamento</p>
                  </Link>                  </Card>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  {" "}
                  <Card className="bg-imageCard2 bg-img p-5 mb-2">
                  <Link to="/compra-local" className="text-decoration-none">
                    {" "}
                    <p className="text-white fs-5 ">Local</p>
                  </Link>                  </Card>
                </Col>
              </Row>
            </Container>
          </Container>
        </div>
      </Fade>
    );
};

export default Alquiler;