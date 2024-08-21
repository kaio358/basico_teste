import styles from "./Comentarios.module.css";

function Comentarios(){
    return(
        <div className={styles.comentarios}>
            <h2>Comentários</h2>
            <div className={styles.meu_comentario}>
                <div className={styles.emojis}>
               
                    <img src="../../img/estrelas/emoji/thinking.png" id="emoji"/>
                </div>
                <div className={styles.estrelas}>
                    <img src="../../static/img/imagens/estrelas/estrela_unica_contorno.png" className={styles.estrela_contorno} onclick="avaliar_estrela(1)"/>
                    <img src="../../static/img/imagens/estrelas/estrela_unica_contorno.png" className={styles.estrela_contorno} onclick="avaliar_estrela(2)"/>
                    <img src="../../static/img/imagens/estrelas/estrela_unica_contorno.png" className={styles.estrela_contorno} onclick="avaliar_estrela(3)"/>
                    <img src="../../static/img/imagens/estrelas/estrela_unica_contorno.png" className={styles.estrela_contorno} onclick="avaliar_estrela(4)"/>
                    <img src="../../static/img/imagens/estrelas/estrela_unica_contorno.png" className={styles.estrela_contorno} onclick="avaliar_estrela(5)"/>
                
                </div>
                <form className={styles.comentario}>
                    <textarea className={styles.texto_pessoal}></textarea>
                    <button className={styles.comentar} type="submit">Comentar</button>
                </form>
            </div>
            <div className={styles.pessoa_comenta}>
                <img className={styles.foto_perfil_terceiro} src="../../static/img/brtt.png"/>
                <div className={styles.nome_comentario}>
                    <p>Felipe</p>
                    <p>Ele é brabo</p>
                </div>
            </div>
        </div>
    )
}
export default Comentarios;