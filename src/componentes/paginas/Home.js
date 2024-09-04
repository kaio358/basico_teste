import styles from "./Home.module.css"

import { useState } from "react";

import lupa from "../../img/lupa.png"



import Card from "../partes/Card";
import Rodape from "../layout/Rodape"
import { Link } from "react-router-dom";


function Home(){
    const [dadosLista,setDadosLista] = useState(["bonito","legal","teste","interessante"])
    const [resultadoDaProcura, setResultadoDaProcura] = useState('')
    return(
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <form action="" className={styles.caixaInputBarra}>
                    <div>
                        <input type="search" name="" id=""  className={styles.inputBarra} value={resultadoDaProcura} onChange={(e)=>setResultadoDaProcura(e.target.value)}/>
                    </div>
                    
                    <Link to={`/filtro?categoria=${resultadoDaProcura}`}><button className={styles.iconInput}><img src={lupa} alt=""/></button> </Link> 
                </form>
                <div className={styles.mostruario}>
                    <h1 className={styles.titulo}>Catálogo</h1>
                    <div className={styles.cardContainer} >
                        {/* <Link to="/produto"> <Card nome="legal"/></Link> */}
                  
                        {
                            dadosLista.map( (nome,index) => <Link to="/produto"><Card key={index} nome={nome} descricao={"Minha fortuna terá de ser encontrada, o tesouro está todo em um lugar só, por isso o chamei de One Piece!"}/></Link> )
                        }
                       
                
                    </div>
                </div>
            </div>
            <Rodape/>
           

        </div>
    )
}


export default Home;