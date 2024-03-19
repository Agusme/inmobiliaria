/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "../../../config/axiosInit";
import { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { STATUS } from "../../../constant";
import Swal from "sweetalert2";

const PropertyEdit = ({ getProperties }) => {
  const { register, handleSubmit, reset, setValue } = useForm();

  const URL = import.meta.env.VITE_API_BMZ;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOne();
  }, []);

  const getOne = async () => {
    try {
      const res = await axios.get(`${URL}/${id}`);
      const propertyApi = res.data;

      Object.entries(propertyApi).forEach(([key, value]) => {
        setValue(key, value);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    try {
      const imagesArray = data.images.split(',');
      const res = await axios.put(`${URL}/${id}`, { ...data, images: imagesArray });

      console.log(res);

      if (res.status === STATUS.STATUS_OK) {
        Swal.fire(
          "Actualizada",
          "La propiedad fue actualizada correctamente",
          "success"
        );
        reset();
        getProperties();
        navigate("/admin-propiedades");
        getProperties();

      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="py-5 my-5">
      <Container className="text-white text-center">
        <h1>Editar Propiedad</h1>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Form.Group
                  className="mb-3  d-flex flex-md-row flex-column"
                  controlId="formTypeProperty"
                >
                  <Col lg={4} md={4} sm={12}>
                    <Form.Label>
                      <span className="fw-semibold">Type Property </span> (casa-
                      departamento- terreno -local){" "}
                    </Form.Label>
                  </Col>
                  <Col lg={8} md={8} sm={12}>
                    <Form.Control
                      type="text"
                      {...register("typeProperty")}
                      placeholder="Ingrese el tipo de propiedad"
                      maxLength={30}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  className="mb-3 d-flex flex-md-row flex-column"
                  controlId="formTypeTransaction"
                >
                  <Col lg={4} md={4} sm={12}>
                    <Form.Label>
                      <span className="fw-semibold">Type Transaction </span>{" "}
                      (venta - alquiler)
                    </Form.Label>
                  </Col>
                  <Col lg={8} md={8} sm={12}>
                    <Form.Control
                      {...register("typeTransaction")}
                      placeholder="Ingrese el tipo de transaccion"
                      maxLength={30}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3 d-flex flex-md-row flex-column " controlId="formBedroom">
                  <Col lg={4} md={4} sm={12}>
                    <Form.Label>
                      <span className="fw-semibold">Habitaciones </span>
                    </Form.Label>
                  </Col>
                  <Col lg={8} md={8} sm={12}>
                    <Form.Control
                    type="number"
                      {...register("bedroom")}
                      placeholder="Ingrese la cantidad de habitaciones"
                      maxLength={30}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3 d-flex flex-md-row flex-column " controlId="formBathroom">
                  <Col lg={4} md={4} sm={12}>
                    <Form.Label>
                      <span className="fw-semibold">Baños </span>
                    </Form.Label>
                  </Col>
                  <Col lg={8} md={8} sm={12}>
                    <Form.Control
                    type="number"
                      {...register("bathroom")}
                      placeholder="Ingrese la cantidad de baños"
                      maxLength={30}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3 d-flex flex-md-row flex-column " controlId="formLocation">
                  <Col lg={4} md={4} sm={12}>
                    <Form.Label>
                      <span className="fw-semibold">Location </span>
                    </Form.Label>
                  </Col>
                  <Col lg={8} md={8} sm={12}>
                    <Form.Control
                      {...register("location")}
                      placeholder="Ingrese la ubicacion de la propiedad"
                      maxLength={30}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3 d-flex flex-md-row flex-column " controlId="formDescription">
                  <Col lg={4} md={4} sm={12}>
                    <Form.Label>
                      <span className="fw-semibold">Description </span>
                    </Form.Label>
                  </Col>
                  <Col lg={8} md={8} sm={12}>
                    <Form.Control
                    {...register("description")}
                    placeholder="Describa  la propiedad"
                    maxLength={600}
                    required 
                    />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3 d-flex flex-md-row flex-column " controlId="formMap">
                  <Col lg={4} md={4} sm={12}>
                    <Form.Label>
                      <span className="fw-semibold">Map </span>
                    </Form.Label>
                  </Col>
                  <Col lg={8} md={8} sm={12}>
                    <Form.Control
                    {...register("map")}
                    placeholder="Ingrese el mapa"
                    required 
                    
                    />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3 d-flex flex-md-row flex-column " controlId="formImages">
                  <Col lg={4} md={4} sm={12}>
                    <Form.Label>
                      <span className="fw-semibold">Images </span>
                    </Form.Label>
                  </Col>
                  <Col lg={8} md={8} sm={12}>
                    <Form.Control
                    
                    {...register("images")}
                    required 
                    />
                  </Col>
                </Form.Group>
              </Row>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Button  type="submit" className="me-md-2 my-3">GUARDAR</Button>
              </div>
            </Form>

      </Container>
    </div>
  );
};

export default PropertyEdit;
