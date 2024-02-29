import { Fade } from "react-awesome-reveal";
import { Card, Col, Container, Row } from "react-bootstrap";

const Alquiler = () => {
    return (
        <Fade>
        <div>
          <h1 className="text-white pt-5 my-5 text-center">¿Qué Buscás?</h1>
  
          <Container fluid className="bg-white py-5 mb-5">
            <Container>
              <Row className="text-center">
                <Col lg={6} md={6} sm={12}>
                  {" "}
                  <Card className="bg-imageCard3 bg-img p-5 mb-2">
                    <p className="text-white fw-semibold fs-5">Departamento</p>
                  </Card>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  {" "}
                  <Card className="bg-imageCard2 bg-img p-5 mb-2">
                    <p className="text-white fw-semibold fs-5">Local</p>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Container>
        </div>
      </Fade>
    );
};

export default Alquiler;