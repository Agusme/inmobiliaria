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
        if (Array.isArray(value)) {
          setValue(key, value.join(',')); // Convert array to comma-separated string for form input
        } else {
          setValue(key, value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      // Append other form fields
      Object.keys(data).forEach((key) => {
        if (key === 'images') {
          Array.from(data.images).forEach((file) => {
            formData.append('images', file);
          });
        } else {
          formData.append(key, data[key]);
        }
      });

      const res = await axios.put(`${URL}/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === STATUS.STATUS_OK) {
        Swal.fire(
          "Actualizada",
          "La propiedad fue actualizada correctamente",
          "success"
        );
        reset();
        getProperties();
        navigate("/admin-propiedades");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="imgHome py-5">
      <Container className="text-white text-center">
        <h1 className="mt-5">Editar Propiedad</h1>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Form.Group
              className="mb-3 d-flex flex-md-row flex-column"
              controlId="formTypeProperty"
            >
              <Col lg={4} md={4} sm={12}>
                <Form.Label>
                  <span className="fw-semibold">Tipo de propiedad</span> (Casa - Departamento - Terreno - Local)
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
                  <span className="fw-semibold">Tipo de transacción</span> (Venta - Alquiler)
                </Form.Label>
              </Col>
              <Col lg={8} md={8} sm={12}>
                <Form.Control
                  type="text"
                  {...register("typeTransaction")}
                  placeholder="Ingrese el tipo de transacción"
                  maxLength={30}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex flex-md-row flex-column"
              controlId="formBathroom"
            >
              <Col lg={4} md={4} sm={12}>
                <Form.Label>
                  <span className="fw-semibold">Baños</span>
                </Form.Label>
              </Col>
              <Col lg={8} md={8} sm={12}>
                <Form.Control
                  type="number"
                  {...register("bathroom")}
                  placeholder="Ingrese la cantidad de baños"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex flex-md-row flex-column"
              controlId="formBedroom"
            >
              <Col lg={4} md={4} sm={12}>
                <Form.Label>
                  <span className="fw-semibold">Habitaciones</span>
                </Form.Label>
              </Col>
              <Col lg={8} md={8} sm={12}>
                <Form.Control
                  type="number"
                  {...register("bedroom")}
                  placeholder="Ingrese la cantidad de habitaciones"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex flex-md-row flex-column"
              controlId="formLocation"
            >
              <Col lg={4} md={4} sm={12}>
                <Form.Label>
                  <span className="fw-semibold">Ubicación</span>
                </Form.Label>
              </Col>
              <Col lg={8} md={8} sm={12}>
                <Form.Control
                  type="text"
                  {...register("location")}
                  placeholder="Ingrese la ubicación de la propiedad"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex flex-md-row flex-column"
              controlId="formDescription"
            >
              <Col lg={4} md={4} sm={12}>
                <Form.Label>
                  <span className="fw-semibold">Descripción</span>
                </Form.Label>
              </Col>
              <Col lg={8} md={8} sm={12}>
                <Form.Control
                  type="text"
                  {...register("description")}
                  placeholder="Describa la propiedad"
                  maxLength={600}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex flex-md-row flex-column"
              controlId="formMap"
            >
              <Col lg={4} md={4} sm={12}>
                <Form.Label>
                  <span className="fw-semibold">Mapa</span>
                </Form.Label>
              </Col>
              <Col lg={8} md={8} sm={12}>
                <Form.Control
                  type="text"
                  {...register("map")}
                  placeholder="Ingrese el enlace del mapa"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex flex-md-row flex-column"
              controlId="formImages"
            >
              <Col lg={4} md={4} sm={12}>
                <Form.Label>
                  <span className="fw-semibold">Imágenes</span>
                </Form.Label>
              </Col>
              <Col lg={8} md={8} sm={12}>
                <Form.Control
                  type="file"
                  {...register("images")}
                  multiple
                  accept="image/*"
                  placeholder="Sube una o varias imágenes"
                />
              </Col>
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Guardar Cambios
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default PropertyEdit;
