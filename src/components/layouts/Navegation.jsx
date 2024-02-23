import { Container, Nav, Navbar } from 'react-bootstrap';

const Navegation = () => {
    return (
        <Navbar expand="lg" fixed="top" className="text-light">
        <Container>
          <Navbar.Brand>
<a href="" className='text-decoration-none text-light'>BMZ</a> </Navbar.Brand>
          <Navbar.Toggle  />
          <Navbar.Collapse>
            <Nav className="ms-auto" >
              <a  className='p-2 text-white text-decoration-none'>
                <li className=' '>Nosotros</li>
              </a>
              <a  className='p-2 text-white text-decoration-none'>
              <li className=''> Inicio </li>
              </a>
              <a   className='p-2 text-white text-decoration-none'>
              <li className=''>Casas</li>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navegation;