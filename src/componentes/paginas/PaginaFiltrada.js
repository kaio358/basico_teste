import styles from "./PaginaFiltrada.module.css";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import queryString from 'query-string';

import Filtro from "../partes/Filtro";
import Card from "../partes/Card";
import Rodape from "../layout/Rodape";

import { TiChevronLeft, TiChevronRight } from "react-icons/ti";

function PaginaFiltrada() {
    const [dadosLista, setDadosLista] = useState(["bonito", "legal", "teste", "interessante"]);
    const [resultadoFiltrado, setResultadoFiltrado] = useState([]);

    const { categoria } = useParams();
    const location = useLocation();

    useEffect(() => {
        const query = queryString.parse(location.search);
        let categorias = [];
        
        if (categoria) {
            categorias = categoria.split(",");
        } else if (query.categoria) {
            categorias = query.categoria.split(',');
        }

        if (categorias.length > 0) {
            let novosResultados = [];
            categorias.forEach(c => {
                const resultados = dadosLista.filter(nome => nome.includes(c));
                novosResultados = [...novosResultados, ...resultados];
            });
            setResultadoFiltrado(novosResultados);
        } else {
            // Nenhum filtro aplicado, exibir todos os dados
            setResultadoFiltrado(dadosLista);
        }
    }, [categoria, location.search, dadosLista]);



    const [filtroMenu,setFiltroMenu] = useState(false)

   
    // filtroMenu ?styles.iconesDosFiltroTrue : styles.iconesDoFiltro} onClick={()=> setFiltroMenu(!filtroMenu) }

    return (
        <div className={styles.filtroCompleto}>
            <div className={styles.content}>
                <div className={styles.espaco}></div>
                <main className={styles.filtroAmostra}>
                    <div className={styles.caixaLateralFiltro} >
                        <div className={filtroMenu ? styles['slide-in'] : styles['slide-out']}>

                            <Filtro />
                        </div>
                        <div className={`${styles.iconesDoFiltro} ${filtroMenu ? styles['slide-in-icon'] : styles['slide-out-icon']}`} onClick={()=> setFiltroMenu(!filtroMenu)}>
                            {filtroMenu? <TiChevronLeft/>: <TiChevronRight/>}
                            
                        </div>
                    </div>
                    <aside className={styles.ladoDosCards}>
                        {resultadoFiltrado.length > 0 ? (
                            resultadoFiltrado.map((nome, index) => (
                                <Card key={index} nome={Array.isArray(nome) ? nome[0] : nome} />
                            ))
                        ) : (
                            <p>Nenhum resultado encontrado.</p>
                        )}
                    </aside>
                </main>
            </div>
            <Rodape />
        </div>
    );
}

export default PaginaFiltrada;
