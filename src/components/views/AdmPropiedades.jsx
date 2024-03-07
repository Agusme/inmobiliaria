import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";

const AdmPropiedades = () => {
  return (
    <div>
      <Container className="py-5 my-5">
        <div className="bg-white py-5">
          <h1 className="mt-3 text-center"> Administración de propiedades</h1>
          <Table bordered hover responsive className="align-middle mt-3 mx-4">
            <thead>
              <tr>
                <th>Id</th>
                <th>Type Property</th>
                <th>Type Transaction</th>
                <th>Location</th>
                <th>Description</th>
                <th>Map</th>
                <th>Images</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>

        </div>
        <div className="bg-white my-5 py-5">
        <h3 className="my-3 text-center">Añadir Propiedad</h3>
          <div className="px-3">
            <Form>
              <Row>
                <Form.Group className="mb-3 d-flex " >
                  <Col lg={4} md={4} sm={12}>
                    <Form.Label>
                      <span className="fw-semibold">Type Property </span> (casa-
                      departamento- terreno -local){" "}
                    </Form.Label>
                  </Col>
                  <Col lg={8} md={8} sm={12}>
                    <Form.Control></Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3 d-flex " >
                  <Col lg={4} md={4} sm={12}>
                    <Form.Label>
                      <span className="fw-semibold">Type Transaction </span> (venta - alquiler)
                    </Form.Label>
                  </Col>
                  <Col lg={8} md={8} sm={12}>
                    <Form.Control></Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3 d-flex " >
                  <Col lg={4} md={4} sm={12}>
                    <Form.Label>
                      <span className="fw-semibold">Location </span> 
                    </Form.Label>
                  </Col>
                  <Col lg={8} md={8} sm={12}>
                    <Form.Control></Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3 d-flex " >
                  <Col lg={4} md={4} sm={12}>
                    <Form.Label>
                      <span className="fw-semibold">Description </span> 
                    </Form.Label>
                  </Col>
                  <Col lg={8} md={8} sm={12}>
                    <Form.Control></Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3 d-flex " >
                  <Col lg={4} md={4} sm={12}>
                    <Form.Label>
                      <span className="fw-semibold">Map </span> 
                    </Form.Label>
                  </Col>
                  <Col lg={8} md={8} sm={12}>
                    <Form.Control></Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3 d-flex " >
                  <Col lg={4} md={4} sm={12}>
                    <Form.Label>
                      <span className="fw-semibold">Images </span> 
                    </Form.Label>
                  </Col>
                  <Col lg={8} md={8} sm={12}>
                    <Form.Control></Form.Control>
                  </Col>
                </Form.Group>
              </Row>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <Button className="me-md-2 my-3">GUARDAR</Button>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdmPropiedades;
