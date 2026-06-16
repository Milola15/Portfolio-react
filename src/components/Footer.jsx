import {
 FaGithub,
 FaLinkedin,
 FaEnvelope
} 
from "react-icons/fa";
import { useState } from "react";
function Footer() {
  return (
    <footer className="footer">
        <p>© 2026 Eunice Ogunemi - Tous droits réservés</p>
      <div className="socials">
 <a
          href="https://github.com/Milola15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
    <a href="https://www.linkedin.com/in/EuniceOgunemi" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </a>
    <a href="mailto:euniceogunemi@gmail.com" target="_blank" rel="noopener noreferrer">
      <FaEnvelope />
    </a>

  </div>

    </footer>
  );
}

export default Footer;