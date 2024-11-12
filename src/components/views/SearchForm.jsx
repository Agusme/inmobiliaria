/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "../../config/axiosInit";
import PropertyList from "./PropertyList"; // Importamos el nuevo componente

const searchProperties = async (typeTransaction, typeProperty) => {
  try {
    const response = await axios.get(
      `https://backend-bmz.vercel.app/api/search`,
      {
        params: { typeTransaction, typeProperty },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error al buscar propiedades:",
      error.response || error.message
    );
    throw error;
  }
};

const SearchForm = () => {
  const [typeTransaction, setTypeTransaction] = useState("");
  const [typeProperty, setTypeProperty] = useState("");
  const [properties, setProperties] = useState([]); // Solo tendrá propiedades después de la búsqueda
  const [hasSearched, setHasSearched] = useState(false); // Verifica si se ha hecho una búsqueda
  const [noResultsMessage, setNoResultsMessage] = useState(false); // Estado para controlar el mensaje de no resultados

  const handleSearch = async () => {
    try {
      if (typeTransaction || typeProperty) {
        const results = await searchProperties(typeTransaction, typeProperty);
        setProperties(results);
        setHasSearched(true);
        if (results.length === 0) {
          setNoResultsMessage(true); // Mostrar el mensaje si no se encuentran resultados
          // Después de 5 segundos (5000 ms) ocultar el mensaje
          setTimeout(() => {
            setNoResultsMessage(false);
          }, 5000); // Asegúrate de que se borra después de 5 segundos
        } else {
          setNoResultsMessage(false); // Si hay resultados, no mostrar el mensaje
        }
      } else {
        // Si no se selecciona nada, no mostramos resultados
        setProperties([]);
        setHasSearched(false);
        setNoResultsMessage(false); // Asegurarse de que el mensaje no se muestre
      }
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

          {/* Solo se muestra las propiedades si se ha hecho una búsqueda */}
          <PropertyList properties={properties} noResultsMessage={noResultsMessage} />

        </div>
      </Container>
    </div>
  );
};

export default SearchForm;
