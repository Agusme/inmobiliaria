import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "../../config/axiosInit";

// Define la URL de la API
const URL = import.meta.env.VITE_API_BMZ;
console.log("URL de la API:", URL);

const searchProperties = async (typeTransaction, typeProperty) => {
  try {
    const response = await axios.get(`${URL}/search`, {
      params: { typeTransaction, typeProperty },
    });
    return response.data;
  } catch (error) {
    console.error("Error al buscar propiedades:", error.response || error.message);
    throw error;
  }
};

const SearchForm = () => {
  const [typeTransaction, setTypeTransaction] = useState('');
  const [typeProperty, setTypeProperty] = useState('');
  const [properties, setProperties] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    console.log("typeTransaction:", typeTransaction);
    console.log("typeProperty:", typeProperty);
    try {
      const results = await searchProperties(typeTransaction, typeProperty);
      console.log("Resultados de búsqueda:", results);
      setProperties(results);
      setHasSearched(true); // Marcar que se ha realizado una búsqueda
    } catch (error) {
      console.error("Error al buscar propiedades:", error);
      alert("Hubo un error al buscar propiedades.");
    }
  };

  return (
    <div>
      <Container className="bg-imageCard1 mt-5 py-3 rounded"> 
        <div className="efect-glass py-5 rounded">
          <h4 className="text-white mb-4">Buscador de propiedades</h4>
          <Row className="d-flex justify-content-center align-content-center align-items-center">
            <Col lg={3} md={6} sm={6} className="mt-2">
              <Form.Select 
                aria-label="Selecciona operación" 
                onChange={(e) => setTypeTransaction(e.target.value)}
              >
                <option value="">Operación</option>
                <option value="Venta">Venta</option>
                <option value="Alquiler">Alquiler</option>
              </Form.Select>
            </Col>
            <Col lg={3} md={6} sm={6} className="mt-2">
              <Form.Select 
                aria-label="Selecciona tipo de inmueble" 
                onChange={(e) => setTypeProperty(e.target.value)}
              >
                <option value="">Tipo de inmueble</option>
                <option value="Casa">Casa</option>
                <option value="Departamento">Departamento</option>
                <option value="Terreno">Terreno</option>
                <option value="Local">Local</option>
              </Form.Select>
            </Col>
            <Col lg={3} md={6} sm={6} className="mt-2">
              <Button className="btn btn-light" onClick={handleSearch}>
                Buscar
              </Button>
            </Col>
          </Row>
          <Row className="mt-4">
  {hasSearched && properties.length > 0 ? (
    properties.map((property) => (
      <Col key={property._id} lg={4} md={6} sm={12} className="mb-3">
        <div className="property-card">
          <h5>{property.name}</h5>
          <p>{property.typeTransaction} - {property.typeProperty}</p>
          <p>{property.location}</p>
        </div>
      </Col>
    ))
  ) : hasSearched && properties.length === 0 ? (
    <p className="text-white text-center">No se encontraron propiedades</p>
  ) : null}
</Row>
        </div>
      </Container>
    </div>
  );
};

export default SearchForm;
