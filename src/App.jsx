import "./App.css";
import Navegation from "./components/layouts/Navegation";
import Home from "./components/views/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacto from "./components/views/Contacto";
import Footer from "./components/layouts/Footer";
import Nosotros from "./components/views/Nosotros";
import Compra from "./components/views/Compra";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Asesoramiento from "./components/views/Asesoramiento";
import Venta from "./components/views/Venta";
import Alquiler from "./components/views/Alquiler";
import Administrador from "./components/views/Administrador";
import { useEffect, useState } from "react";
import AdmPropiedades from "./components/views/AdmPropiedades";
function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
  

    setIsAdmin(true);
  }, []);
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
          <Route path="/alquiler" element={<Alquiler />} />

          <Route path="/compra" element={<Compra />} />
          <Route path="/venta" element={<Venta />} />
          <Route path="/admin" element={<Administrador />} />
          <Route path="/admin-propiedades" element={isAdmin? (<AdmPropiedades />) : <Navigate to="/"/>} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
