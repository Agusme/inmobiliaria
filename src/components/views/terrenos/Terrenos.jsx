/* eslint-disable react/prop-types */
import { Button, Card, CardBody, Col, Container, Row } from "react-bootstrap";
import { ImLocation } from "react-icons/im";
import { IoBed } from "react-icons/io5";
import { TbBathFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const Terrenos = ({ properties }) => {
  return (
    <div className="my-5 pt-5">
      <Container className="p-4 bg-white letra-azul">
        <h1 className="letra-azul mb-4 text-center display-4">Terrenos</h1>
        {properties?.length !== 0 ? (
          <Row>
            {properties.map(
              (property) =>
                property.typeTransaction === "Venta" &&
                property.typeProperty === "Terreno" && (
                  <Col key={property._id} lg={3} md={3} sm={6}>
                    <Card className="text-center my-2 card-houses">
                      <img
                        className="property-image text-center"
                        src={
                          Array.isArray(property.images)
                            ? property.images[0]
                            : property.images
                        }
                      />
                      <CardBody>
                        <p className="card-text text-center letra-azul">
                          <ImLocation className="letra-azul" />
                          {property.location}{" "}
                        </p>
                        <hr />
                        <p className="text-center poppins-light">
                          {property.bathroom >= 1 && (
                            <>
                              <TbBathFilled className="letra-azul mx-3" />
                              {property.bathroom}
                            </>
                          )}
                          {property.bedroom >= 1 && (
                            <>
                              <IoBed className="letra-azul mx-3" />
                              {property.bedroom}
                            </>
                          )}
                        </p>
{
  property.location === "Lules" ?  <Link to={`/compra-terreno-id/${property._id}`}>
  <Button className="btn btn-mas custom-btn">
    Ver más
  </Button>
</Link>:  <Link to={`/compra-terreno-id/${property._id}`}>
                          <Button className="btn btn-mas custom-btn">
                            Ver más
                          </Button>
                        </Link>
}

                        <Link to={`/compra-terreno-id/${property._id}`}>
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
            <hr className="text-white my-5" />
            <h1 className="text-white fs-4 m-5 text-center">
              🏘️No se encontraron Propiedades🏘️🥲
            </h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Terrenos;
