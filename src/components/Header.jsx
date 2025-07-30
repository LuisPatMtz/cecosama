import { useState } from "react";
import logo from "../assets/logo.png"; // coloca el logo en src/assets/logo.png

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-custom sticky-top">
      <div className="nav-container">
        
        {/* LOGO + NOMBRE */}
        <div className="logo-section">
          <img src={logo} alt="CECOSAMA" className="logo" />
          <h1>CECOSAMA ESCARCEGA</h1>
        </div>

        {/* BOTÓN HAMBURGUESA */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* MENÚ DE NAVEGACIÓN */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#hero" onClick={() => setMenuOpen(false)}>Inicio</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>¿Qué es?</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a>
        </nav>
      </div>
    </header>
  );
}
