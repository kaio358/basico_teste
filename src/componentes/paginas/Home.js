import styles from "./Home.module.css"

import lupa from "../../img/lupa.png"

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
                <h1 className={styles.titulo}>Catalogo</h1>
            </div>
        </div>
    )
}


export default Home;