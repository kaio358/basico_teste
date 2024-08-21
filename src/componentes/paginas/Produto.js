import styles from "./Produto.module.css";

import InformacoesDoProduto from "../partes/InformacoesDoProduto";
import Descricao from "../partes/Descricao"
import Comentarios from "../partes/Comentarios";
function Produto(){
    return(
        <div className={styles.principal}>
           
            <InformacoesDoProduto/>
            <Descricao> Alô mãe  </Descricao>
            <Comentarios/>
        </div>
    )
}
export default Produto;