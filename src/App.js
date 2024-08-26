import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Home from "./componentes/paginas/Home";
import Produto from "./componentes/paginas/Produto";
import Menu from "./componentes/layout/Menu"
import PaginaFiltrada from "./componentes/paginas/PaginaFiltrada";
function App() {
  return (
    <Router>
        <Menu/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/produto" element={<Produto/>}/>
            <Route exact path="/filtro" element={<PaginaFiltrada/>}/>
        </Routes>
    </Router>
  );
}

export default App;
