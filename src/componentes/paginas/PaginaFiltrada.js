import styles from "./PaginaFiltrada.module.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Filtro from "../partes/Filtro";
import Card from "../partes/Card";
import Rodape from "../layout/Rodape"



function PaginaFiltrada(){


    const [dadosLista,setDadosLista] = useState(["bonito","legal","teste","interessante"])
    
    const {categoria} = useParams()
    useEffect(()=>{
        if(categoria){
           let nomes = dadosLista.filter(nome=> nome.includes(categoria))
           setDadosLista(nomes)
           
        }
    },[categoria])

    return(
        <div className={styles.filtroCompleto}>
           <div className={styles.content}>
             <div className={styles.espaco}></div>
             <main className={styles.filtroAmostra}>
                 <div>
                     <Filtro/>
            
                 </div>
            
                 <aside className={styles.ladoDosCards}>
                     {
                         dadosLista.map(nome => <Card nome={nome}/>)
                     }
                 </aside>
             </main>
           </div>
            <Rodape/>
        </div>
    )
}
export default PaginaFiltrada;