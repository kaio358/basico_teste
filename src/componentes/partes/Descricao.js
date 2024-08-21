import styles from "./Descricao.module.css";

function Descricao(props){
    return(
        <div className={styles.mais_detalhes}>
            <h2>Descrição</h2>
            {props.children}
        </div>
    )
}
export default Descricao;