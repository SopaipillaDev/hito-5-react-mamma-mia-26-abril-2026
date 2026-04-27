import { useState, useEffect } from "react"
import CardPizza from "../components/CardPizza"
import styles from "../assets/css/Home.module.css"

const Home = () => {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetchPizzas()
  }, [])

  const fetchPizzas = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas")
    const data = await response.json()
    setPizzas(data)
  }

  return (
    <div className={styles.contenedor}>
      {pizzas.map((pizza) => (
        <CardPizza
          key={pizza.id}
          nombre={pizza.name}
          precio={pizza.price}
          desc={pizza.desc}
          img={pizza.img}
          ingredientes={pizza.ingredients}
        />
      ))}
    </div>
  )
}

export default Home