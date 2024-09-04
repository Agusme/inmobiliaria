/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { ImLocation } from 'react-icons/im';
import { IoBed } from 'react-icons/io5';
import { TbBathFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Local = ({properties}) => {
    return (
        <div className="pt-5 bg-white pb-5">
        <Container className="py-3 letra-azul ">
          <h1 className="letra-azul mb-3 pt-5 text-center display-4">Locales</h1>
          {properties?.length !== 0 ? (<Row>
            {properties.map(
              (property) =>
                property.typeTransaction === "Venta" &&
                property.typeProperty === "Local" && (
                  <Col key={property._id} lg={3} md={3} sm={6}>
                                       <Link to={`/compra-local-id/${property._id}`} className='text-decoration-none'>

                    <Card  className="h-100 d-flex flex-column text-center card-houses border-0 rounded"                      
  >
                      <img
                        className="property-image text-center rounded-top "
                        src={
                          Array.isArray(property.images)
                            ? property.images[0]
                            : property.images
                        }
                      />
                      <CardBody className="d-flex flex-column flex-grow-1">
                        <p className="card-text text-center letra-azul">
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
  
                          <Button className="btn btn-mas custom-btn">
                            Ver más
                          </Button>
                      </CardBody>
                    </Card>
                    </Link>

                  </Col>
                )
            )}
          </Row>): ( <div>
            <hr className="text-white my-5" />
            <h1 className="text-white fs-4 m-5 text-center">🏘️No se encontraron Propiedades🏘️🥲</h1>
          </div>)}
        </Container>
      </div>
    );
};

export default Local;