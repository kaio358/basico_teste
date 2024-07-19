import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Home from "./componentes/paginas/Home";
import Menu from "./componentes/layout/Menu"
function App() {
  return (
    <Router>
        <Menu/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
        </Routes>
    </Router>
  );
}

export default App;
