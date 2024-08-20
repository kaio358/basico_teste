import styles from "./InformacoesDoProduto.module.css";
import { useState } from "react";

import { FaCartPlus, FaPlus, FaMinus } from "react-icons/fa";

function InformacoesDoProduto(){
    


        // config de imagens
 
        const [imagemPrincipal, setImagemPrincipal] = useState("https://placeholder.com/300");
        const [imagensSecundarias, setImagensSecundarias] = useState(
            [
                "https://placeholder.com/400",
                "https://placeholder.com/500",
                "https://placeholder.com/600"
              ]
        )
       

        const trocaImagem = (index) => {
    
            // pega o valor da array 
            const novaImagemPrincipal = imagensSecundarias[index];
            // faz uma "copia " dos elementos
            const novasImagensSecundarias = [...imagensSecundarias];

            // remove o elemento do array ( o 1 significa para remover ), isso na roleta de imagens
            novasImagensSecundarias.splice(index,1)
            // coloco um novo elemento no final da array, isso tudo na roleta de imagens 
            novasImagensSecundarias.push(imagemPrincipal)
            // 'troco' de imagem por uma nova 
            setImagemPrincipal(novaImagemPrincipal);
            // troco array atualizada da roleta
            setImagensSecundarias(novasImagensSecundarias)
           

         }

    
        // config para aumentar e diminuir da quantidade
     
        const [ valor, setValor] = useState(1)
        function diminui_aumenta(opcao ){
            if(opcao){
            
                if(valor.value ==''){
                    setValor(1)
                }else{
                    setValor(valor+1)
                }
                
            
            }else{
                
                if(valor =='' ){
                    setValor(1)
                }
                 else if(valor <=1){
                    setValor(1)
                }
                else{
                    setValor(valor-1)
                }
            }
        }
    return(
        <main className={styles.apresentacao}>
            <h1>Teste</h1>
            <div className={styles.informacoes_apresentacao}>
                
                <div className={styles.imagens_do_produto}>
                    <div className={styles.imagem_amostra}>
                        <img src={imagemPrincipal} className={styles.imagem_apresentacao} alt="Imagem Principal"/>
                    </div>
                    <div className={styles.imagens_roleta}>
                        {imagensSecundarias.map((imagem, index) => (
                            
                            
                            <img
                                key={index}
                                src={imagem}
                                className={styles.demais_imagens}
                                alt={`Imagem Secundária ${index + 1}`}
                                onClick={() => trocaImagem(index)}
                            />
                            
                        ))}
                    </div>
                    
                </div>

                <div className={styles.informacao_compra}>
                    <div className={styles.avalicao_geral}>
                        <div className={styles.estrelas_geral}></div>
                        <div className={styles.quantidade_avaliacao}></div>
                        <div className={styles.vendido}></div>
                    </div>
                    <div className={styles.preco_pagamento}>
                        <span>R$ 23,00</span>
                    </div>
                    <form className={styles.comprar_adicionar} >
                        <div className={styles.container_simbolo}>
                            <FaMinus className={styles.botoesDeQuant} onClick={ () =>  diminui_aumenta(0)}/>
                            <input type="number" name="quantidade" className={styles.quantidade_comprar} value={valor} min="1"/>
                            <FaPlus className={styles.botoesDeQuant} onClick={ () => diminui_aumenta(1)}/>
                           
                        </div>
                        <div className={styles.botoesParaCompra}>
                            <button class={styles.adicionar_carrinho} type="submit">
                                <FaCartPlus/> Adicionar no Carrinho
                            </button> 
                            <button className={styles.comprar_agora} type="submit" formmethod="post">Comprar Agora</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default InformacoesDoProduto;