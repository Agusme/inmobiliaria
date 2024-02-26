import "./App.css";
import Navegation from "./components/layouts/Navegation";
import Home from "./components/views/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Portada from "./components/views/Portada";
import Contacto from "./components/views/Contacto";

function App() {
  return (
    <>
      <Navegation></Navegation>
      <Home></Home>
      <Portada></Portada>
      <Contacto></Contacto>
    </>
  );
}

export default App;
