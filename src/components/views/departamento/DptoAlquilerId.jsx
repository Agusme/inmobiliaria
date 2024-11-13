/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../config/axiosInit"
import { Col, Container, Row } from "react-bootstrap";
import { Carousel } from 'react-responsive-carousel';
import { TbBathFilled } from "react-icons/tb";
import { IoBed, IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const DptoAlquilerId = () => {
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
                    <p className="letra-azul fs-4  poppins-light">
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
                    <p className="letra-azul">{property.description}</p>
                    <Col lg={6} md={6} sm={12}>
                      <Fade>
                      <ul className="list-unstyled d-flex letra-azul fs-5">
         <p className="pt-4 mx-3">Más info.</p>
                  <a
                    href="https://api.whatsapp.com/send/?phone=543815633407&text=Hola%21+Quisiera+saber+m%C3%A1s+informaci%C3%B3n+de+&type=phone_number&app_absent=0"
                    target="_blank"
                    className="letra-azul"
                  >
                    {" "}
                    <li className="link-hover pt-4">
                      {" "}
                      <FaWhatsapp className="fs-2 me-3" />
                    </li>
                  </a>
                  
                  <a
                      href="tel:+543815633407"
                      className="letra-azul"
                    >
                  <li className="link-hover pt-4">
                   
                      <IoCallOutline className="fs-2 me-3"  />
                  </li>
                  </a>
              
  
                </ul>
                      </Fade>
    
                </Col>
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
      </div>
    );
};

export default DptoAlquilerId;