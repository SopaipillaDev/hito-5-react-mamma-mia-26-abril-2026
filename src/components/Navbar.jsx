const Navbar = () => {
  const total = 25000
  const token = false

  return (
    <nav style={{
      backgroundColor: '#1a1a1a',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>

      <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>
        Pizzería Mamma Mia!
      </span>

      <div style={{ display: 'flex', gap: '8px' }}>

        {/* Botón Home — SIEMPRE visible */}
        <button>🍕 Home</button>

        {/* Botones que dependen del token */}
        {token ? (
          <>
            <button>🔓 Profile</button>
            <button>🔒 Logout</button>
          </>
        ) : (
          <>
            <button>🔐 Login</button>
            <button>🔐 Register</button>
          </>
        )}

      </div>

      {/* Botón Total — SIEMPRE visible */}
      <button>
        🛒 Total: ${total.toLocaleString('es-CL')}
      </button>

    </nav>
  )
}

export default Navbar