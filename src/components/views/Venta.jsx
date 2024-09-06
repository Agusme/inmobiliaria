import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Fade } from "react-awesome-reveal";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import {
  validateMessage,
  validateName,
  validatePhone,
} from "../../helpers/validateForm";

const Venta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm();

  const [showModal, setShowModal] = React.useState(false);
  const emailjsConfig = {
    serviceId: "service_n3v74fh",
    templateId: "template_g7q28lw",
    publicKey: "BDtEaJzGHui804FZE",
  };

  const onSubmit = async (data) => {
    try {
      const emailData = {
        from_name: data.user_name, // Nombre del remitente (cliente)
        reply_to: data.email, // Correo electrónico del remitente
        phone: data.phone, // Teléfono del cliente
        message: data.message, // Mensaje del cliente
      };

      const response = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        emailData,
        emailjsConfig.publicKey
      );
      console.log("correo enviado con exito: ", response);

      setShowModal(true);
      reset();
    } catch (error) {
      console.log("error al enviar el correo", error);
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Fade>
    <div className="imgHome py-5">
    <Container className="text-white">
        <h1 className="pt-5 pb-3 text-center">
          ¿Querés vender tu propiedad?
        </h1>
        <Row>
          <Col md={6} sm={6}>
          <p className="fs-6 my-3">
            ¡Describe tu propiedad y en la brevedad nos ponemos en contacto con
            vos!
          </p>
          </Col>
        <Col md={6} sm={6}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formName">
            <Form.Label>
              Nombre <span className="text-danger fw-bold">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="user_name"
              maxLength={30}
              minLength={3}
              placeholder="Nombre"
              {...register("user_name", {
                required: "Ingrese un nombre válido",
                validate: (value) => validateName(value) || "Nombre Inválido",
              })}
              isInvalid={!!errors.user_name}
              isValid={isValid}
            />
            {errors.user_name && (
              <Form.Control.Feedback type="invalid">
                {errors.user_name.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group controlId="formPhone">
            <Form.Label className="pt-3">
              Celular <span className="text-danger fw-bold">*</span>
            </Form.Label>
            <Form.Control
              name="phone"
              maxLength={12}
              placeholder="381*******"
              {...register("phone", {
                required: "Ingrese un número válido",
                validate: (value) => validatePhone(value) || "Número inválido",
              })}
              isInvalid={!!errors.phone}
              isValid={isValid}
            ></Form.Control>
            {errors.phone && (
              <Form.Control.Feedback type="invalid">
                {errors.phone.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group controlId="form-message">
            <Form.Label className="pt-3">
              Describe tu propiedad
              <span className="text-danger fw-bold">*</span>
            </Form.Label>
            <Form.Control
              name="message"
              as="textarea"
              placeholder="Hola! Tengo una ... ubicada en ... "
              rows={4}
              maxLength={1000}
              required
              {...register("message", {
                required: "Ingrese una consulta correcta",
                validate: (value) =>
                  validateMessage(value) || "Ingrese una consulta correcta",
              })}
              isInvalid={!!errors.message}
              isValid={isValid}
            ></Form.Control>
            {errors.user_name && (
              <Form.Control.Feedback type="invalid">
                {errors.message.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Button type="submit" className="mt-3 custom-btn  ">
            Enviar
          </Button>
        </Form>
        </Col>
        </Row>

     
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Consulta Enviada!</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
    </Fade>
  );
};

export default Venta;
