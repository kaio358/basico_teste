import styles from "./Sobre.module.css";
import Rodape from "../layout/Rodape";

import homemApontando from "../../img/4930-removebg-preview.png";
function Sobre(){
    return(
        <div>
            <main>
                
                <div className={styles.principalSobre}>
                    <div className={styles.textoContainer}>
                        <h1>Site de Vendas</h1> 
                        <p>Esse site foi desenvolvido para ser simples e "gracioso", aplicando boas práticas que acumulei nos últimos anos.</p>
                        
                    </div>
                    <div className={styles.imagemSobre}>
                        <img src={homemApontando} alt="Homem Apontando"/>
                    </div>
                </div>

                <div className={styles.cardsSobre}>
                    <div className={styles.cardSobre}>
                        <h2> <span className={styles.tituloCardPrincipal}>Quem </span>sou EU ?</h2>
                        <div>
                            <p>Meu nome Kaio, sou desenvolvedor Full Stack , nasci em sorocaba (sp) e tenho 24 anos.  </p>
                        </div>
                    </div>
                    <div className={styles.cardSobre}>
                        <h2><span className={styles.tituloCardPrincipal}>Qual </span>motivação ?</h2>
                        <div>
                            <p>Busco acrescentar alguns projetos "básicos" no portifólio , afins de aumentar as coisas que faço.</p>
                        </div>  
                    </div>
                    <div className={styles.cardSobre}>
                        <h2><span className={styles.tituloCardPrincipal}>Como </span>foi feito o site ?</h2>
                        <div>
                            <p>O site foi desenvolvido em React Js, algumas coisas perguntei tanto para o Copilot quanto chatgpt sobre o design desta página (Em alguns pontos eles divergiram ) </p>
                        </div>  
                    </div>
                </div>
            </main>
            <Rodape/>
        </div>
    )
}

export default Sobre;