// src/pages/Profile.jsx

const Profile = () => {
  return (
    <div style={{ maxWidth: "400px", margin: "80px auto", textAlign: "center" }}>
      <h2>Mi Perfil</h2>
      <p style={{ marginBottom: "16px" }}>
        Email: <strong>usuario@mammamia.com</strong>
      </p>
      <button
        onClick={() => alert("Sesión cerrada")}
        style={{
          padding: "10px 24px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Cerrar sesión
      </button>
    </div>
  )
}

export default Profile