import { Container, Nav, Navbar } from 'react-bootstrap';

const Navegation = () => {
    return (
        <Navbar expand="lg" fixed="top" className="efect-glass" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand>
<a href="" className='text-decoration-none text-light fs-2'>BMZ</a> </Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse>
            <Nav className="ms-auto" >
              <a  className='p-2 text-white text-decoration-none'>
                <li className='linkhover'>Inicio</li>
              </a>
              <a  className='p-2 text-white text-decoration-none'>
              <li className='linkhover'> Nosotros </li>
              </a>
              <a   className='p-2 text-white text-decoration-none'>
              <li className='linkhover'>Contacto</li>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navegation;