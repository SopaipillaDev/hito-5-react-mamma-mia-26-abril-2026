const Header = () => {
  return (
    <div style={{
      backgroundImage: 'url(/Header.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '80px 20px',
      textAlign: 'center',
      color: 'white'
    }}>
      <div style={{
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: '30px',
        borderRadius: '8px',
        display: 'inline-block'
      }}>
        <h1>¡Pizzería Mamma Mia!</h1>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </div>
  )
}

export default Header