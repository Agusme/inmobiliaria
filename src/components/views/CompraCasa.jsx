/* eslint-disable react/prop-types */
import { Button, Card, CardBody, Col, Container, Row } from "react-bootstrap";
import { ImLocation } from "react-icons/im";
import { TbBathFilled } from "react-icons/tb";
import { IoBed } from "react-icons/io5";
import { Link } from "react-router-dom";

const CompraCasa = ({ properties }) => {
  return (
    <div className="pt-5 bg-white pb-5 ">
      <Container className="py-3 letra-azul ">
        <h1 className="letra-azul mb-3 pt-5 text-center display-4">Casas en Venta</h1>
        {Array.isArray(properties)&& properties?.length !== 0 ? (
          <Row>
            {properties.map(
              (property) =>
                property.typeTransaction === "Venta" &&
                property.typeProperty === "Casa" && (
                  <Col key={property._id} lg={3} md={3} sm={6} className="my-3">
                     <Link to={`/compra-casa-id/${property._id}`} className="text-decoration-none">
                    <Card className="h-100 d-flex flex-column text-center card-houses border-0 rounded my-3">
                      <img
                        className="property-image text-center rounded-top"
                        src={
                          Array.isArray(property.images)
                            ? property.images[0]
                            : property.images
                        }
                        alt={property.location}
                      />
                      <CardBody className="d-flex flex-column flex-grow-1">
                        <p className="card-text text-center letra-azul ">
                          <ImLocation className="me-1" />
                          {property.location}{" "}
                        </p>
                      <div className="d-flex justify-content-center align-items-center mb-4 flex-grow-1 ">
                      {property.bathroom >= 1 && (
                            <p className="poppins-light">
                              <TbBathFilled className=" mx-3" />
                              {property.bathroom}
                            </p>
                          )}
                           {property.bedroom >= 1 && (
                            <p  className="poppins-light">
                              <IoBed className=" mx-3" />
                              {property.bedroom}
                            </p>
                          )}
                      </div>
           

                       <Button className="custom-btn mt-auto">
                        Ver más
                       </Button>
                          
                      </CardBody>
                    </Card>
                    </Link>

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
