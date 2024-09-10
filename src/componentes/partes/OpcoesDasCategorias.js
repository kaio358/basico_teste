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
                <p onClick={() => irParaFiltro('teste')} className={styles.opcoesDeLink}>Teste</p>
                <p onClick={() => irParaFiltro('bonito')} className={styles.opcoesDeLink}>Bonito</p>
            </div>
            <div>
                <h4>Coisas 2</h4>
                <p onClick={() => irParaFiltro('lindo')} className={styles.opcoesDeLink}>Lindo</p>
                <p onClick={() => irParaFiltro('legal')} className={styles.opcoesDeLink}>Legal</p>
            </div>
            <div>
                <h4>Coisas 3</h4>
                <p onClick={() => irParaFiltro('interessante')} className={styles.opcoesDeLink}>Interessante</p>
                {/* <p onClick={() => irParaFiltro('')}>Bonito 3</p> */}
            </div>
        </div>
    )
}

export default OpcoesDasCategorias;