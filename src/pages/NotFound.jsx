// src/pages/NotFound.jsx
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <h1 style={{ fontSize: "100px", margin: 0, marginBottom: "50px" }}>
        404
      </h1>
      <h2>¡Página no encontrada!</h2>
      <p style={{ marginBottom: "24px" }}>
        La ruta que buscas no existe en Mamma Mía 🍕
      </p>
      <Link
        to="/"
        style={{
          backgroundColor: "#e94560",
          color: "white",
          padding: "10px 24px",
          borderRadius: "4px",
          textDecoration: "none"
        }}
      >
        ← Volver al inicio
      </Link>
    </div>
  )
}

export default NotFound