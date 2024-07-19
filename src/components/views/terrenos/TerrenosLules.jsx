/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../config/axiosInit";
import { Col, Container, Row } from "react-bootstrap";
import { TbBathFilled } from "react-icons/tb";
import { IoBed, IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { Carousel } from "react-responsive-carousel";

const TerrenosLules = () => {
  const URL = import.meta.env.VITE_API_BMZ;
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  useEffect(() => {
    getOne();
  }, []);
  const getOne = async () => {
    try {
      const res = await axios.get(`${URL}/${id}`);
      setProperty(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="py-5">
        <Container className="mt-5 d-flex justify-content-center align-items-center">
          {property ? (
            <Container className="bg-white pb-5">
              <div className="px-lg-5 mx-lg-5 ">
                <h2 className="letra-azul fs-3 py-2 display-5">
                  {property.location}
                </h2>
                <Carousel
                  showThumbs={true}
                  showStatus={false}
                  dynamicHeight={true}
                  autoPlay
                  infiniteLoop
                  thumbWidth={60}
                  className="carousel-principal px-lg-5"
                >
                  {Array.isArray(property.images) &&
                    property.images.map((image, index) => (
                      <div
                        key={index}
                        className="carousel-casa  px-lg-5  d-flex justify-content-center align-items-center"
                      >
                        <img
                          className="img-fluid "
                          src={image}
                          alt={`Image ${index}`}
                        />
                      </div>
                    ))}
                </Carousel>
                <Row>
                  <Col lg={6} md={6} sm={12}>
                    <p className="letra-azul fs-4 ">
                      Descripción de la propiedad
                    </p>
                    <p className="letra-azul poppins-light fs-6">
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
                    <p className="letra-azul poppins-light">
                      {property.description}
                    </p>
                    <p className="letra-azul poppins-light">
                      EMPRESA CONSTRUCTORA. MACROTECH SRL.
                    </p>

                    <Fade>
                      <p className="border-bottom  ">Más información</p>

                      <Row>
                        <Col lg={6} md={6} sm={6}  xs={6}>
                          <p className="poppins-light fs-6">Julia</p>
                        </Col>
                        <Col lg={6} md={6} sm={6}  xs={6}className="text-center">
                          <a href="tel:+543815736895">
                            {" "}
                            <IoCallOutline className="fs-3 me-2 link-hover letra-azul" />
                          </a>
                          <a href="https://wa.link/w8pshc">
                            <FaWhatsapp className="fs-3 link-hover letra-azul" />
                          </a>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg={6} md={6} sm={12}  xs={6}>
                          <p className="poppins-light fs-6">Isaiás</p>
                        </Col>
                        <Col l lg={6} md={6} sm={12}  xs={6} className="text-center">
                          {" "}
                          <a href="tel:+543815139173">
                            <IoCallOutline className="fs-3 me-2 link-hover letra-azul" />
                          </a>
                          <FaWhatsapp className="fs-3 link-hover" />

                        </Col>
                      </Row>
                    </Fade>
                  </Col>

                  <Col lg={6} md={6} sm={12}>
                    <div className="px-3">
                      <iframe
                        src={property.map}
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          ) : (
            <p className="text-white"> Loading...</p>
          )}
        </Container>
      </div>{" "}
    </div>
  );
};

export default TerrenosLules;
