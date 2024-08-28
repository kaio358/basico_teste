import styles from "./PaginaFiltrada.module.css";


import Filtro from "../partes/Filtro";
import Card from "../partes/Card";
import Rodape from "../layout/Rodape"

function PaginaFiltrada(){
      

    return(
        <div className={styles.filtroCompleto}>
            <div className={styles.espaco}></div>
            <main className={styles.filtroAmostra}>
                <div>
                    <Filtro/>

                </div>

                <aside className={styles.ladoDosCards}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </aside>
            </main>
            <Rodape/>
        </div>
    )
}
export default PaginaFiltrada;