import {Link} from "react-router-dom"

import styles from "./Menu.module.css"
function Menu(){
    return(
        <nav className={styles.menu}>
            <div >
                <Link to="/">Home</Link>
            
            </div>  
        </nav>
    )
}

export default Menu;