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
} from "react-router-dom";
function App() {
  return (

    <Router>
    <div>
      <Navegation />
      <Routes>
        <Route path="/" element={<> <Home /> <Nosotros /> <Contacto /></>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/nosotros" element={< Nosotros/>} />

        <Route path="/compra" element={<Compra/>} />
      </Routes>
      <Footer />
    </div>
  </Router>

  );
}

export default App;
