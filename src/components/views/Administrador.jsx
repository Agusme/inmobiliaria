import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { admin } from "../../helpers/Credentials";
import Swal from "sweetalert2";
import bcrypt from "bcryptjs";

const Administrador = () => {
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const navigate = useNavigate();


    const handleLogin = async()=>{
        const passwordMatch = await bcrypt.compare(
            passwordInput,
            admin.passwordHash
        );
        if (passwordMatch) {
            navigate("/admin-propiedades");
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Las credenciales ingresadas son incorrectas",
            });
          }
          setUsernameInput("");
          setPasswordInput("");
    }

  return (
    <div className="py-5 text-white imgHome text-center">
      <Container>
        <h1 className="mt-5 py-5">Bienvenido a la página de administración</h1>
        <p>Versión del Sistema: 1.0.0</p>
        <hr />
        <Row className="justify-content-center my-4">
        <Col md={6}>
          <p className="my-4 fs-3">Iniciar Sesión</p>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label className="my-3">Usuario:</Form.Label>
              <Form.Control
         type="text"
         placeholder="Ingrese su usuario"
         value={usernameInput}
         onChange={(e) => setUsernameInput(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label className="my-3">Contraseña:</Form.Label>
              <Form.Control
                 type="password"
                 placeholder="Ingrese su contraseña"
                 value={passwordInput}
                 onChange={(e) => setPasswordInput(e.target.value)}
              />
            </Form.Group>
            <Button
              className="btn btn-mas custom-btn my-3"
              onClick={handleLogin}

            >
              Ingresar
            </Button>
          </Form>
    
        </Col>
      </Row>
      </Container>
    </div>
  );
};

export default Administrador;
