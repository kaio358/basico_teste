import styles from "./Filtro.module.css";
import { useState } from "react";

import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import Checkbox from "./Checkbox";

function Filtro(){
    const [visivel,setVisivel] = useState(false)
    const handleCheckboxChange = () => {
        setVisivel(!visivel);
      };
    return (
        <div className={styles.caixaDoFiltro}>
            <h3>Filtro</h3>
        

            <div >

                <input type="search" className={styles.buscaFiltro}/>

            </div>
            <div className={styles.sumirCaixa}>
                <label className={styles.textoClick} onClick={handleCheckboxChange} > Coisas </label>
                { !visivel?  <TiArrowSortedUp onClick={handleCheckboxChange} className={styles.iconVisivel}/> :<TiArrowSortedDown onClick={handleCheckboxChange} className={styles.iconVisivel}/>  }
               
               
            </div>
            {visivel?(
                [ <Checkbox label={"bonito"}/>,  <Checkbox label={"teste"}/>]
             ) :""}
     
            
            
        </div>
    )
}
export default Filtro;