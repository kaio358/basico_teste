import styles from "./Comentarios.module.css";
import { useState } from "react";

// Importar todas as imagens estaticamente
import thinking from "../../img/estrelas/emoji/thinking.png";
import angry from "../../img/estrelas/emoji/angry.png";
import crying from "../../img/estrelas/emoji/crying.png";
import neutral from "../../img/estrelas/emoji/neutral.png";
import wink from "../../img/estrelas/emoji/wink.png";
import cute from "../../img/estrelas/emoji/cute.png";

import estrelaContorno from "../../img/estrelas/estrela_unica_contorno.png";
import estrelaPreenchida from "../../img/estrelas/estrela_unica_amarela.png";

function Comentarios() {
    // Usar a imagem importada como valor inicial
    const [imagensPrincipal, setImagensPrincipal] = useState(thinking);
    

    // Usar as imagens importadas em um array
    const imagensSecundarias = [angry, crying, neutral, wink, cute];
    
  


    const avaliar = (index) => {
        // 'troco' de imagem por uma nova
        const novaImagemPrincipal = imagensSecundarias[index];
        setImagensPrincipal(novaImagemPrincipal);
    };

    // imagens das estrelas
    const [estrelasSelecionadas, setEstrelasSelecionadas] = useState(0);

    const avaliarEstrela = (index) => {
        // Atualiza o número de estrelas selecionadas
        setEstrelasSelecionadas(index + 1);
    };

    return (
        <div className={styles.comentarios}>
            <h2>Comentários</h2>
            <div className={styles.meu_comentario}>
                <div className={styles.emojis}>
                    <img src={imagensPrincipal} id="emoji" alt="emoji"/>
                </div>
                <div className={styles.estrelas}>
                    {[...Array(5)].map((_, index) => (
                        <img
                            key={index}
                            src={index < estrelasSelecionadas ? estrelaPreenchida : estrelaContorno}
                            className={styles.estrela_contorno}
                            onClick={() => avaliarEstrela(index)}
                            alt={`estrela ${index + 1}`}
                        />
                    ))}
          
                </div>
                <form className={styles.comentario}>
                    <textarea className={styles.texto_pessoal}></textarea>
                    <button className={styles.comentar} type="submit">Comentar</button>
                </form>
            </div>
            <div className={styles.pessoa_comenta}>
                
                <div className={styles.nome_comentario}>
                    <img className={styles.foto_perfil_terceiro} src={require("../../img/brtt.png")} alt="perfil" />
                    <h4>Felipe</h4>
                   
                </div>
                <div className={styles.comentarioDoUsuario}>
                    <p>Ele é brabo</p>
                </div>
            </div>
        </div>
    );
}

export default Comentarios;
