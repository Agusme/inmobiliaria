import { Button, Container, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  validateEmail,
  validateMessage,
  validateName,
  validatePhone,
} from "../../helpers/validateForm.jsx";
import emailjs from "@emailjs/browser";
import { Fade } from "react-awesome-reveal";

import React from "react";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm();

  const [showModal, setShowModal] = React.useState(false);

  const emailjsConfig = {
    serviceId: "service_qn846gq",
    templateId: "template_lsp5hg6",
    publicKey: "BDtEaJzGHui804FZE",
  };

  const onSubmit = async (data) => {
    try {
      const emailData = {
        ...data,
        user_name: data.user_name,
        email: data.email,
        phone: data.phone,
        message: data.message,
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
  <div className="bg-contact text-white " id="contacto">
      <Container className="py-5 ">
        <p className="fw-semibold fs-1 text-center">Contacto</p>
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
          <Form.Group controlId="formEmail">
            <Form.Label className="pt-3">
              Mail <span className="text-danger fw-bold">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="email"
              maxLength={30}
              placeholder="tumail@gmail.com"
              {...register("email", {
                required: "Ingrese un mail válido",
                validate: (value) => validateEmail(value) || "Mail inválido",
              })}
              isInvalid={!!errors.email}
              isValid={isValid}
            ></Form.Control>
            {errors.email && (
              <Form.Control.Feedback type="invalid">
                {errors.email.message}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group controlId="form-message">
            <Form.Label className="pt-3">
              Tu consulta <span className="text-danger fw-bold">*</span>
            </Form.Label>
            <Form.Control
              name="message"
              as="textarea"
              placeholder="Hola buenos dias! Estoy buscando casa en ..."
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
          <Button type="submit" className="mt-3 btn btn-light">
            Enviar
          </Button>
        </Form>
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

export default Contacto;
