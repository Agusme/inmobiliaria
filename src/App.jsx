/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import Navegation from "./components/layouts/Navegation";
import Home from "./components/views/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacto from "./components/views/Contacto";
import Footer from "./components/layouts/Footer";
import Nosotros from "./components/views/Nosotros";
import Compra from "./components/views/Compra";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Asesoramiento from "./components/views/Asesoramiento";
import Venta from "./components/views/Venta";
import Alquiler from "./components/views/Alquiler";
import Administrador from "./components/views/Administrador";
import { useEffect, useState } from "react";
import AdmPropiedades from "./components/views/AdmPropiedades";
import axios from "../src/config/axiosInit";
import PropertyEdit from "./components/views/property/PropertyEdit";
import CompraCasa from "./components/views/CompraCasa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CasaComproId from "./components/views/CasaComproId";
import DptoCompra from "./components/views/departamento/DptoCompra";
import DptoCompraId from "./components/views/departamento/DptoCompraId";
import Terrenos from "./components/views/terrenos/Terrenos";
import TerrenoId from "./components/views/terrenos/TerrenoId";
import DptoAlquilerId from "./components/views/departamento/DptoAlquilerId";
import DptoAlquiler from "./components/views/departamento/DptoAlquiler";
import Local from "./components/views/local/Local";
import LocalId from "./components/views/local/LocalId";
import TerrenosLules from "./components/views/terrenos/TerrenosLules";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [properties, setProperties] = useState([]);
  const URL = import.meta.VITE_API_BMZ;

  useEffect(() => {
    getProperties();
    setIsAdmin(true);
  }, []);

  const getProperties = async () => {
    try {
      const res = await axios.get(URL);
      setProperties(res.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  return (
    <Router>
      <div>
        <Navegation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Home /> <Nosotros id={'inicio'}/> <Contacto />
              </>
            }
          />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros"  element={<Nosotros />} />
          <Route path="/asesoramiento" element={<Asesoramiento />} />
          <Route
            path="/alquiler"
            element={
              <Alquiler properties={properties} getProperties={getProperties} />
            }
          />
          <Route
            path="/compra"
            element={
              <Compra properties={properties} getProperties={getProperties} />
            }
          />
          <Route
            path="/compra-casa"
            element={
              <CompraCasa
                properties={properties}
                getProperties={getProperties}
              />
            }
          />
          <Route
            path="/compra-casa-id/:id"
            element={
              <CasaComproId
                properties={properties}
                getProperties={getProperties}
              />
            }
          />
           <Route
            path="/compra-dpto"
            element={
              <DptoCompra
                properties={properties}
                getProperties={getProperties}
              />
            }
          />
          <Route
            path="/compra-dpto-id/:id"
            element={
              <DptoCompraId
                properties={properties}
                getProperties={getProperties}
              />
            }
          />
           <Route
            path="/compra-terreno"
            element={
              <Terrenos
                properties={properties}
                getProperties={getProperties}
              />
            }
          />
           <Route
            path="/compra-terreno-lules/:id"
            element={
              <TerrenosLules
                properties={properties}
                getProperties={getProperties}
              />
            }
          />
             <Route
            path="/compra-terreno-id/:id"
            element={
              <TerrenoId
                properties={properties}
                getProperties={getProperties}
              />
            }
          />
           <Route
            path="/alquiler-dpto"
            element={
              <DptoAlquiler
                properties={properties}
                getProperties={getProperties}
              />
            }
          />
           <Route
            path="/alquiler-dpto-id/:id"
            element={
              <DptoAlquilerId
                properties={properties}
                getProperties={getProperties}
              />
            }
          />
              <Route
            path="/compra-local"
            element={
              <Local
                properties={properties}
                getProperties={getProperties}
              />
            }
          />
             <Route
            path="/compra-local-id/:id"
            element={
              <LocalId
                properties={properties}
                getProperties={getProperties}
              />
            }
          />
          <Route path="/venta" element={<Venta />} />
          <Route path="/admin" element={<Administrador />} />
          <Route
            path="/admin-propiedades"
            element={
              isAdmin ? (
                <AdmPropiedades
                  properties={properties}
                  getProperties={getProperties}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route
            path="/property/edit/:id"
            element={
              isAdmin ? (
                <PropertyEdit
                  properties={properties}
                  getProperties={getProperties}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
