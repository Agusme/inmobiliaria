import "./App.css";
import Navegation from "./components/layouts/Navegation";
import Home from "./components/views/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Portada from "./components/views/Portada";

function App() {
  return (
    <>
        <Navegation></Navegation>
        <Home></Home>

        <Portada></Portada>
    </>
  );
}

export default App;
