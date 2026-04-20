import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
// import Pizza from "./components/Pizza" Descomentar para ver
import Home from "./components/Home"
// import LoginPage from "./components/Login"
// import RegisterPage from "./components/Register"

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Pizza /> */}
      <Home />
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Footer />
    </div>
  )
}

export default App