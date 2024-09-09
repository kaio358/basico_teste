import styles from "./Sobre.module.css";
import Rodape from "../layout/Rodape";
function Sobre(){
    return(
        <div>
            <main>
                
                <div className={styles.principalSobre}>
                    <h1>Site de Vendas</h1>
                    <p>Esse site foi desenvolvido para ser simples e " gracioso ", aplicando boas práticas que acumulei nos últimos anos</p>
                </div>
                <div>
                    <div>
                        <h2>Quem sou EU ?</h2>
                        <div>
                            <p>Meu nome Kaio, sou desenvolvedor Full Stack , nasci em sorocaba (sp).  </p>
                        </div>
                    </div>
                    <div>
                        <h2>Qual motivação ?</h2>
                        <div>
                            <p>Busco acrescentar alguns projetos "básicos" no portifólio , afins de aumentar as coisas que faço.</p>
                        </div>  
                    </div>
                    <div>
                        <h2>Como foi feito o site ?</h2>
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