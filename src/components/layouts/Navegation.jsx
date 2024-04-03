import { useState, useEffect, useRef } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
const Navegation = () => {
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  const closeMenu = () => {
    setExpanded(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="efect-glass"
      data-bs-theme="dark"
      expanded={expanded}
      ref={navbarRef}
    >
      <Container>
        <Navbar.Brand>
          <ScrollLink to="home" smooth={true} duration={500}>
            <Link to="/" className="text-decoration-none">
         <p className="text-white fs-3">BMZ </p>        </Link>
          </ScrollLink>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="navbarScroll" className="fw-bold">
          <Nav className="ms-auto" navbarScroll>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="m-2 text-white text-decoration-none"
              onClick={closeMenu}
            >
              <Link to="/" className="text-decoration-none text-light">
                <li className="linkhover">Inicio</li>
              </Link>
            </ScrollLink>
            <ScrollLink
              to="compra"
              smooth={true}
              duration={500}
              className="m-2 text-white text-decoration-none"
              onClick={closeMenu}
            >
              <Link
                to="/compra"
                className="text-decoration-none text-light"
              >
                <li className="linkhover">Compra</li>
              </Link>
            </ScrollLink>
            <ScrollLink
              to="alquiler"
              smooth={true}
              duration={500}
              className="m-2 text-white text-decoration-none"
              onClick={closeMenu}
            >
              <Link
                to="/alquiler"
                className="text-decoration-none text-light"
              >
                <li className="linkhover">Alquiler</li>
              </Link>
            </ScrollLink>
            <ScrollLink
              to="contacto"
              smooth={true}
              duration={500}
              className="m-2 text-white text-decoration-none"
              onClick={closeMenu}
            >
              <Link
                to="/contacto"
                className="text-decoration-none text-light"
              >
                <li className="linkhover">Contacto</li>
              </Link>
            </ScrollLink>
            <ScrollLink
              to="nosotros"
              smooth={true}
              duration={500}
              className="m-2 text-white text-decoration-none"
              onClick={closeMenu}
            >
              <Link
                to="/nosotros"
                className="text-decoration-none text-light"
              >
                <li className="linkhover">Nosotros</li>
              </Link>
            </ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegation;
