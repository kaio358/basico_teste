import styles from "./ComentarioUnico.module.css";

function ComentarioUnico({nome ="desconhecido", texto}){
    return(
        <div className={styles.pessoa_comenta}>
                
            <div className={styles.nome_comentario}>
                <img className={styles.foto_perfil_terceiro} src={require("../../img/brtt.png")} alt="perfil" />
                <h4>{nome}</h4>
            
            </div>
            <div className={styles.comentarioDoUsuario}>
                {texto}
            </div>
        </div>
    )
}

export default ComentarioUnico;