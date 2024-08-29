import styles from "./PaginaFiltrada.module.css";

import { useEffect, useState } from "react";
import { useParams,useLocation } from "react-router-dom";
import queryString from 'query-string';



import Filtro from "../partes/Filtro";
import Card from "../partes/Card";
import Rodape from "../layout/Rodape"



function PaginaFiltrada(){


    const [dadosLista,setDadosLista] = useState(["bonito","legal","teste","interessante"])


    // caso venha na forma de parametro da url de vez do query
    
    const {categoria} = useParams()
    
    useEffect(()=>{
        if(categoria){
            let tratamento = categoria.split(",")
            console.log(tratamento);
            let nomes 
            if(tratamento.length > 1){
                nomes = tratamento.map(t=> dadosLista.filter(nome=> nome.includes(t))  )
            }else{
                nomes = dadosLista.filter(nome=> nome.includes(categoria))
            }
            
           
           setDadosLista(nomes)
           
        }
    },[categoria])


    const location = useLocation();

    useEffect(() => {
        const query = queryString.parse(location.search);
        const categorias = query.categoria ? query.categoria.split(',') : [];
        // const cor = query.cor || '';
        // console.log('Categorias:', categorias);
        // console.log('Cor:', cor);
        let nomes  = categorias.map(c =>dadosLista.filter(nome=>nome.includes(c)))
        setDadosLista(nomes)
    }, [location.search]);

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