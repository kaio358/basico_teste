import styles from "./Home.module.css"

import lupa from "../../img/lupa.png"



import Card from "../partes/Card";
import Rodape from "../partes/Rodape"


function Home(){
    return(
        <div>
            <form action=" " className={styles.caixaInputBarra}>
                <div>
                    <input type="search" name="" id=""  className={styles.inputBarra}/>
                </div>
                
                <button className={styles.iconInput}><img src={lupa} alt=""/></button>
            </form>
            <div className={styles.mostruario}>
                <h1 className={styles.titulo}>Catálogo</h1>
                <div className={styles.cardContainer} >
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                </div>
            </div>
            <Rodape/>
           

        </div>
    )
}


export default Home;