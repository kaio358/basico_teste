import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Home from "./componentes/paginas/Home";
import Produto from "./componentes/paginas/Produto";
import Menu from "./componentes/layout/Menu"
function App() {
  return (
    <Router>
        <Menu/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/produto" element={<Produto/>}/>
        </Routes>
    </Router>
  );
}

export default App;
