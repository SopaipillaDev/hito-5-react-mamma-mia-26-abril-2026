import { useState } from 'react'
import { pizzaCart } from '../pizzas'
import styles from '../assets/css/Cart.module.css'

const Cart = () => {
  const [carrito, setCarrito] = useState(pizzaCart)

  const aumentar = (id) => {
    const nuevoCarrito = carrito.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, count: pizza.count + 1 }
      }
      return pizza
    })
    setCarrito(nuevoCarrito)
  }

  const disminuir = (id) => {
    const nuevoCarrito = carrito
      .map((pizza) => {
        if (pizza.id === id) {
          return { ...pizza, count: pizza.count - 1 }
        }
        return pizza
      })
      .filter((pizza) => pizza.count > 0)

    setCarrito(nuevoCarrito)
  }

  const total = carrito.reduce((acumulado, pizza) => {
    return acumulado + pizza.price * pizza.count
  }, 0)

  return (
    <div className={styles.contenedor}>
      <h3 className={styles.titulo}>Detalles del pedido:</h3>

      {carrito.map((pizza) => (
        <div key={pizza.id} className={styles.fila}>
          <img
            src={pizza.img}
            alt={pizza.name}
            className={styles.imagen}
          />

          <span className={styles.nombre}>{pizza.name}</span>

          <span className={styles.precio}>
            ${pizza.price.toLocaleString('es-CL')}
          </span>

          <div className={styles.controles}>
            <button
              className={styles.botonCantidad}
              onClick={() => disminuir(pizza.id)}
            >
              -
            </button>
            <span className={styles.cantidad}>{pizza.count}</span>
            <button
              className={styles.botonCantidad}
              onClick={() => aumentar(pizza.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <h4 className={styles.total}>
        Total: ${total.toLocaleString('es-CL')}
      </h4>

      <button className={styles.botonPagar}>
        Pagar
      </button>
    </div>
  )
}

export default Cart