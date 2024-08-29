import styles from "./Card.module.css";
function Card({nome}){
    return(
        <section className={styles.card}>
            <div>
                <img src="https://placeholder.com/400" alt="" />
            </div>
            <div>
                <h2>{nome}</h2>
                <h3>R$ 23,00</h3>
                <button className={styles.icon_comprar}>Comprar</button>
            </div>
        </section>
    )
}

export default Card;