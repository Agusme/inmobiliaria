/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../config/axiosInit";
import { Container } from "react-bootstrap";

const CompraCasaID = () => {
const URL = import.meta.env.VITE_API_BMZ;
const {id}= useParams();
const [property, setProperty] = useState(null);


useEffect(()=>{
    getOne();
}, []);

const getOne = async () => {
    try {
      const res = await axios.get(`${URL}/${id}`);
      setProperty(res.data);

}catch (error) {
      console.log(error);
    }
  };

    return (
        <div  className= "py-5 my-5">
            <Container className="my-5">
            {property ? (
                <Container className="bg-white">
          <h1 className="letra-azul  poppins-light">{property.location}</h1>


                </Container>
        ) : (
          <p>Loading...</p>
        )}

            </Container>
     
      </div>
    );
};

export default CompraCasaID;