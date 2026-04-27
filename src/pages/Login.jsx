import { useState } from 'react'
import styles from '../assets/css/Login.module.css'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError('Todos los campos son obligatorios')
      setSuccess(false)
      return
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres')
      setSuccess(false)
      return
    }

    setError('')
    setSuccess(true)
  }

  return (
    <div className={styles.contenedor}>

      <h2 className={styles.titulo}>
        Login
      </h2>

      {error && (
        <p className={styles.error}>{error}</p>
      )}

      {success && (
        <p className={styles.success}>¡Login exitoso!</p>
      )}

      <form onSubmit={handleSubmit}>

        <div className={styles.campo}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.campoUltimo}>
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>

        <button
          type="submit"
          className={styles.boton}
        >
          Ingresar
        </button>

      </form>
    </div>
  )
}

export default Login