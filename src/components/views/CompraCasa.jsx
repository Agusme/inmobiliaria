/* eslint-disable react/prop-types */
import { Button, Card, CardBody, Col, Container, Row } from "react-bootstrap";
import { ImLocation } from "react-icons/im";

const CompraCasa = ({ properties }) => {
  return (
    <div className="mt-5 pt-5">
      <Container className="bg-white p-5">
        <h1 className="text-center">Casas en Venta</h1>
        <Row>
          {properties.map(
            (property) =>
              property.typeTransaction === "venta" &&
              property.typeProperty === "Casa" && (
                <Col key={property._id} lg={3} md={3} sm={6}>
                  <Card className="text-center my-2 ">
                    <img
                      className="property-image text-center"
                      src={
                        Array.isArray(property.images)
                          ? property.images[0]
                          : property.images
                      }
                    />
                    <CardBody>
                      <p className="card-text text-center fw-semibold">
                        <ImLocation />
                        {property.location}{" "}
                      </p>
                      <hr />

                      <Button>Ver más</Button>
                    </CardBody>
                  </Card>
                </Col>
              )
          )}
        </Row>
      </Container>
    </div>
  );
};

export default CompraCasa;
