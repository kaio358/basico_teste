import styles from "./Produto.module.css";

import InformacoesDoProduto from "../partes/InformacoesDoProduto";
function Produto(){
    return(
        <div className={styles.principal}>
           
            <InformacoesDoProduto/>
        </div>
    )
}
export default Produto;