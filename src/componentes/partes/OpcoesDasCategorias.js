import styles from "./OpcoesDasCategorias.module.css";

import { useNavigate } from "react-router-dom";
function OpcoesDasCategorias() {
    const navigate = useNavigate();

    const irParaFiltro = (categoria) => {
      navigate(`/filtro/${categoria}`);
    };
    return (
        <div className={styles.caixaDeOpcoes} >
            <div>
                <h4>Coisas</h4>
                <p>Teste</p>
                <p onClick={() => irParaFiltro('bonito')}>Bonito</p>
            </div>
            <div>
                <h4>Coisas 2</h4>
                <p>Teste 2</p>
                <p>Bonito 2</p>
            </div>
            <div>
                <h4>Coisas 3</h4>
                <p>Teste 3</p>
                <p>Bonito 3</p>
            </div>
        </div>
    )
}

export default OpcoesDasCategorias;