/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../config/axiosInit";
import { Container } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
const CompraCasaID = () => {
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
    <div className="py-5 my-5 vh-100">
      <Container className="my-5">
        {property ? (
          <Container className="bg-white">
            <h1 className="letra-azul  poppins-light p-3">
              {property.location}
            </h1>
            <Carousel autoPlay>
              {Array.isArray(property.images) && property.images.map((image, index) => (
                <div key={index}>
                  <img
                    className="property-image text-center"
                    src={image}
                    alt={`Image ${index}`}
                  />
                </div>
              ))}
            </Carousel>

       
          </Container>
        ) : (
          <p>Loading...</p>
        )}
      </Container>
    </div>
  );
};

export default CompraCasaID;
