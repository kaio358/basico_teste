import styles from "./Filtro.module.css";

import { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";

import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";


import Checkbox from "./Checkbox";
import Range from "./Range";

function Filtro(){

    // verifica se é visivel ou não
    const [visivel,setVisivel] = useState(false)
    const handleCheckboxChange = () => {
        setVisivel(!visivel);
      };

    const [visivel2,setVisivel2] = useState(false)
    const handleCheckboxChange2 = () =>{
        setVisivel2(!visivel2);
    };


    // pega o parametro da url 
        
    const { categoria } = useParams();

    
    return (
        <div className={styles.caixaDoFiltro}>
            <h3>Filtro</h3>
        

            <div className={styles.caixasDentroDoFiltro}>
                <div >
                
                    <input type="search" className={styles.buscaFiltro}/>
                    <div className={styles.iconLupa}>
                        
                        <FaSearch/>
                    </div>
                </div>
                <div className={styles.sumirCaixa}>
                    <label className={styles.textoClick} onClick={handleCheckboxChange} > Coisas </label>
                    { !visivel?  <TiArrowSortedUp onClick={handleCheckboxChange} className={styles.iconVisivel}/> :<TiArrowSortedDown onClick={handleCheckboxChange} className={styles.iconVisivel}/>  }
                    
                    
                </div>
                {visivel?(
                    [ <Checkbox label={"bonito"}/>,  <Checkbox label={"teste"}/>]
                    ) :""}
                
            </div>

            <div className={styles.caixasDentroDoFiltro}>
                <div className={styles.sumirCaixa}>
                        <label className={styles.textoClick} onClick={handleCheckboxChange2} > Preço </label>
                        { !visivel2?  <TiArrowSortedUp onClick={handleCheckboxChange2} className={styles.iconVisivel}/> :<TiArrowSortedDown onClick={handleCheckboxChange2} className={styles.iconVisivel}/>  }
                        
                        
                </div>
                {visivel2 ? <Range/> : ""}

            </div>
            
        </div>
    )
}
export default Filtro;