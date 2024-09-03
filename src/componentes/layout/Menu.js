import { useState } from "react";
import {Link} from "react-router-dom"

import styles from "./Menu.module.css"
import OpcoesDasCategorias from "../partes/OpcoesDasCategorias";

import { IoIosMenu } from "react-icons/io";
function Menu(){

    const [categoria,setCategoria] = useState(false)
    const mostrar = ()=>{
        setCategoria(true)
    }
    const esconder = () => {
        setCategoria(false);
    };
    return(
        <nav className={styles.menu}>
           <label className={styles.menuHamburger} htmlFor="checkHamburger">
                <IoIosMenu />
            </label>
            <input type="checkbox" id="checkHamburger" className={styles.checkHamburger} />
            <div className={styles.opcoesDoMenu}>
                <div >
                    <Link to="/">Home</Link>
                  
                
                </div> 
                
                <div onMouseOver={mostrar} onMouseLeave={esconder} >
                    <Link to="/filtro">Categorias</Link>
                    <div className={`${styles.categorias} ${categoria ? styles.mostrar : ""}`}>
                        <OpcoesDasCategorias />
                    </div>
                    
                </div>
            </div >
        </nav>
    )
}

export default Menu;