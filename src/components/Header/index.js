import { useState } from "react";
import "./index.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <p className="home-website-logo">Recipes Contest</p>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#recipes">Recipes</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Hamburger Menu Icon */}
        <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default Header;
