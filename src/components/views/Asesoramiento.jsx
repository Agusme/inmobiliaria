import React from "react";
import { Fade } from "react-awesome-reveal";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { validateMessage, validateName, validatePhone } from "../../helpers/validateForm";

const Asesoramiento = () => {
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
            from_name: data.user_name,      // Nombre del remitente (cliente)
            reply_to: data.email,           // Correo electrónico del remitente
            phone: data.phone,              // Teléfono del cliente
            message: data.message,          // Mensaje del cliente
          };
    
          const response = await emailjs.send(
            emailjsConfig.serviceId,
            emailjsConfig.templateId,
            emailData,
            emailjsConfig.publicKey
          );
    
          console.log("Correo enviado con éxito:", response);
          setShowModal(true);
          reset();
        } catch (error) {
          console.log("Error al enviar el correo:", error);
        }
      };
    
      const handleCloseModal = () => {
        setShowModal(false);
      };
    
  return (
    <Fade>
      <Container className="text-white vh-100">
        <h1 className="pt-5 pb-3 mt-5 text-center">Asesoramiento</h1>

        <p className="fs-6 text-center my-3" >
            
        Como profesionales con una amplia trayectoria en el sector inmobiliario, ofrecemos asesoramiento especializado en bienes raíces.
          ¡Dejanos tu consulta y en la brevedad nos ponemos en contacto con vos!
        </p>
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
              Tu consulta <span className="text-danger fw-bold">*</span>
            </Form.Label>
            <Form.Control
              name="message"
              as="textarea"
              placeholder="Escribe tu consulta, nosotros te asesoramos"
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
    </Fade>
  );
};

export default Asesoramiento;
