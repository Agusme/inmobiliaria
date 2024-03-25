/* eslint-disable react/prop-types */
import axios from "../../config/axiosInit";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Property from "./property/Property";

const AdmPropiedades = ({ getProperties, properties }) => {
  console.log(properties);

  const { register, handleSubmit, reset } = useForm();

  const URL = import.meta.VITE_API_BMZ;

  const onSubmit = async (data) => {
    console.log(data);
    const imagesArray = data.images ? data.images.split(",") : [];

    try {
      const res = await axios.post(URL, { ...data, images: imagesArray });

      console.log(res);

      if (res.status === 201) {
        Swal.fire("Creada", "La propiedad fue creada con éxito");
        reset();
        getProperties();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Container className="py-5 my-5">
        <div className="bg-white py-5">
          <h1 className="mt-3 text-center"> Administración de propiedades</h1>
          {properties?.length !== 0 ? (
            <Table bordered hover responsive className="align-middle mt-3 mx-4">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Type Property</th>
                  <th>Type Transaction</th>
                  <th>Bathroom</th>
                  <th>Bedroom</th>
                  <th>Location</th>
                  <th>Description</th>
                  <th>Map</th>
                  <th>Images</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {properties?.map((property) => (
                  <Property
                    key={property._id}
                    properties={property}
                    getProperties={getProperties}
                  />
                ))}
              </tbody>
            </Table>
          ) : (
            <div className="no-products-found d-flex align-items-center justify-content-center">
              <h1>🏘️No se encontraron Propiedades🏘️</h1>
            </div>
          )}
        </div>
        <div className="bg-white mb-5 pt-5">
          <h3 className="my-3 text-center">Añadir Propiedad 🏘️</h3>
          <div className="px-3">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Form.Group
                  className="mb-3  d-flex flex-md-row flex-column"
                  controlId="formTypeProperty"
                >
                  <Col lg={4} md={4} sm={12}>
                    <Form.Label>
                      <span className="fw-semibold">Tipo de propiedad</span>{" "}
                      (Casa- Departamento- Terreno -Local){" "}
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
                    <Form.Text className="text-muted ">
                      Usa mayúscula para empezar{" "}
                    </Form.Text>
                  </Col>
                </Form.Group>
                <Form.Group
                  className="mb-3 d-flex flex-md-row flex-column"
                  controlId="formTypeTransaction"
                >
                  <Col lg={4} md={4} sm={12}>
                    <Form.Label>
                      <span className="fw-semibold">Tipo de transacción </span>{" "}
                      (Venta - Alquiler)
                    </Form.Label>
                  </Col>
                  <Col lg={8} md={8} sm={12}>
                    <Form.Control
                      {...register("typeTransaction")}
                      placeholder="Ingrese el tipo de transaccion"
                      maxLength={30}
                      required
                    />
                      <Form.Text className="text-muted ">
                      Usa mayúscula para empezar{" "}
                    </Form.Text>
                  </Col>
                </Form.Group>

                <Form.Group
                  className="mb-3 d-flex flex-md-row flex-column "
                  controlId="formBathroom"
                >
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
                <Form.Group
                  className="mb-3 d-flex flex-md-row flex-column "
                  controlId="formBedroom"
                >
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
                <Form.Group
                  className="mb-3 d-flex flex-md-row flex-column "
                  controlId="formLocation"
                >
                  <Col lg={4} md={4} sm={12}>
                    <Form.Label>
                      <span className="fw-semibold">Location </span>
                    </Form.Label>
                  </Col>
                  <Col lg={8} md={8} sm={12}>
                    <Form.Control
                      {...register("location")}
                      placeholder="Ingrese la ubicacion de la propiedad"
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  className="mb-3 d-flex flex-md-row flex-column "
                  controlId="formDescription"
                >
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
                <Form.Group
                  className="mb-3 d-flex flex-md-row flex-column "
                  controlId="formMap"
                >
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
                <Form.Group
                  className="mb-3 d-flex flex-md-row flex-column "
                  controlId="formImages"
                >
                  <Col lg={4} md={4} sm={12}>
                    <Form.Label>
                      <span className="fw-semibold">Images </span>
                    </Form.Label>
                  </Col>
                  <Col lg={8} md={8} sm={12}>
                    <Form.Control {...register("images")} required />
                    <Form.Text className="text-muted">
                      Puedes ingresar varias URLs separadas por comas.
                    </Form.Text>
                  </Col>
                </Form.Group>
              </Row>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Button
                  type="submit"
                  className="me-md-2 my-3 btn btn-mas custom-btn"
                >
                  GUARDAR
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdmPropiedades;
