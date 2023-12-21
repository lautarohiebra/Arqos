import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="light text-foreground">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Servicios" element={<Services />} />
        <Route path="/Nosotros" element={<About />} />
        <Route path="/Contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </main >
  )
}

export default App
