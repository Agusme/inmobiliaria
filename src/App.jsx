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
import axios from "../src/config/axiosInit"
import PropertyEdit from "./components/views/property/PropertyEdit";
import CompraCasa from "./components/views/CompraCasa";



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
                <Home /> <Nosotros /> <Contacto />
              </>
            }
          />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />
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
          path="/compra-casa" element={<CompraCasa properties={properties} getProperties={getProperties} />}/>
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
