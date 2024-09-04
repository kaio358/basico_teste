import styles from "./OpcoesDasCategorias.module.css";

import { useNavigate } from "react-router-dom";
function OpcoesDasCategorias() {
    const navigate = useNavigate();

    const irParaFiltro = (categoria) => {
      navigate(`/filtro?categoria=${categoria}`);
    };
    return (
        <div className={styles.caixaDeOpcoes} >
            <div>
                <h4>Coisas</h4>
                <p onClick={() => irParaFiltro('teste')}>Teste</p>
                <p onClick={() => irParaFiltro('bonito')}>Bonito</p>
            </div>
            <div>
                <h4>Coisas 2</h4>
                <p onClick={() => irParaFiltro('lindo')}>Lindo</p>
                <p onClick={() => irParaFiltro('legal')}>Legal</p>
            </div>
            <div>
                <h4>Coisas 3</h4>
                <p onClick={() => irParaFiltro('interessante')}>Interessante</p>
                {/* <p onClick={() => irParaFiltro('')}>Bonito 3</p> */}
            </div>
        </div>
    )
}

export default OpcoesDasCategorias;