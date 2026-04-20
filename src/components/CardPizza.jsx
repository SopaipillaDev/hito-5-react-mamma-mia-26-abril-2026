import styles from '../assets/css/CardPizza.module.css'

const CardPizza = ({ nombre, precio, desc, img, ingredientes }) => {
  return (
    <div className={styles.tarjeta}>
      <img
        src={img}
        alt={nombre}
        className={styles.imagen}
      />
      <div className={styles.contenido}>
        <h3 className={styles.nombre}>{nombre}</h3>
        <p className={styles.descripcion}>{desc}</p>

        <p className={styles.tituloIngredientes}>Ingredientes:</p>
        <ul className={styles.listaIngredientes}>
          {ingredientes.map((ingrediente) => (
            <li key={ingrediente}>{ingrediente}</li>
          ))}
        </ul>

        <p className={styles.precio}>
          ${precio.toLocaleString('es-CL')}
        </p>

        <button className={styles.boton}>
          Añadir al carrito
        </button>
      </div>
    </div>
  )
}

export default CardPizza