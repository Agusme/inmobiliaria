import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navegation = () => {
    return (
        <Navbar expand="lg" fixed="top" className="efect-glass" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand>
<ScrollLink to='home' smooth={true} duration={500}>
  <Link to="/" className='text-decoration-none'><p className='text-light fs-2'>BMZ</p>
</Link>
</ScrollLink>
</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"/>
          <Navbar.Collapse id="navbarScroll" className="fw-bold">
            <Nav className="ms-auto"navbarScroll>
              <ScrollLink to='home' smooth={true} duration={500} className='m-2 text-white text-decoration-none'>
        <Link to="/" className='text-decoration-none text-light'><li className='linkhover'>Inicio</li>
</Link>
              </ScrollLink>
              
              <ScrollLink to='contacto' smooth={true} duration={500} className='m-2 text-white text-decoration-none'>

              <Link to="/contacto" className='text-decoration-none text-light'><li className='linkhover'>Contacto</li></Link>

              </ScrollLink>
              <ScrollLink to='nosotros' smooth={true} duration={500} className='m-2 text-white text-decoration-none'>
              <Link to="/nosotros" className='text-decoration-none text-light'><li className='linkhover'>Nosotros</li></Link>
              </ScrollLink>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navegation;