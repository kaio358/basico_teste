import styles from "./Rodape.module.css"

import { FaGithubAlt, FaLinkedin } from "react-icons/fa";

function Rodape(){
    return(
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerSection}>
                <h4>Sobre Nós</h4>
                <p>Informações sobre a empresa, missão, etc.</p>
                </div>
                <div className={styles.footerSection}>
                <h4>Contato</h4>
                <p>Email: kaio.luiz358@gmail.com</p>
                <p>Telefone: (15) 99172-9669</p>
                </div>
                <div className={styles.footerSection}>
                <h4>Siga-nos</h4>
                <div className={styles.socialIcons}>
                    <a href="https://github.com/kaio358"><FaGithubAlt color="#000" size="30px"/></a>
                    <a href="https://www.linkedin.com/in/kaio-luiz-ferreira-9b16041ba/"><FaLinkedin size="30px" color="#0077B5" /></a>
                
                </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>&copy; 2024 Jabuti. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Rodape