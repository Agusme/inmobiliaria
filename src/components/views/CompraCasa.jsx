/* eslint-disable react/prop-types */
import { Button, Card, CardBody, Col, Container, Row } from "react-bootstrap";
import { ImLocation } from "react-icons/im";
import { TbBathFilled } from "react-icons/tb";
import { IoBed } from "react-icons/io5";
import { Link } from "react-router-dom";

const CompraCasa = ({ properties }) => {
  return (
    <div className="my-5 pt-5">
      <Container className="p-4 bg-white letra-azul">
        <h1 className="letra-azul mb-4 text-center display-4">Casas en Venta</h1>
        {Array.isArray(properties)&& properties?.length !== 0 ? (
          <Row>
            {properties.map(
              (property) =>
                property.typeTransaction === "Venta" &&
                property.typeProperty === "Casa" && (
                  <Col key={property._id} lg={3} md={3} sm={6}>
                    <Card className="text-center my-2 card-houses">
                      <img
                        className="property-image text-center"
                        src={
                          Array.isArray(property.images)
                            ? property.images[0]
                            : property.images
                        }
                        alt={property.location}
                      />
                      <CardBody>
                        <p className="card-text text-center letra-azul">
                          <ImLocation className="" />
                          {property.location}{" "}
                        </p>
                        <hr />
                        <p className="text-center poppins-light">
                          {property.bathroom >= 1 && (
                            <>
                              <TbBathFilled className=" mx-3" />
                              {property.bathroom}
                            </>
                          )}
                          {property.bedroom >= 1 && (
                            <>
                              <IoBed className=" mx-3" />
                              {property.bedroom}
                            </>
                          )}
                        </p>
                        <Link to={`/compra-casa-id/${property._id}`}>
                          <Button className="btn btn-mas custom-btn">
                            Ver más
                          </Button>
                        </Link>
                      </CardBody>
                    </Card>
                  </Col>
                )
            )}
          </Row>
        ) : (
          <div>
            <hr className="letra-azul my-5" />
            <h1 className="letra-azul fs-4 m-5 text-center">🏘️No se encontraron Propiedades🏘️🥲</h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default CompraCasa;
