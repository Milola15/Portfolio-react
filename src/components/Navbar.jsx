import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        Eunice
      </div>
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="#home">Accueil</a>
        </li>
        <li>
          <a href="#about">À propos</a>
        </li>
        <li>
          <a href="#skills">Compétences</a>
        </li>
        <li>
          <a href="#projects">Projets</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>
      <div
        className="burger"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        {menuOpen
          ? <FaTimes />
          : <FaBars />
        }
      </div>
    </nav>
  );
}

export default Navbar;